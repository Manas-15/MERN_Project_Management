'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { tenantIDHeader } from '@/libs/authHeader';
import { ErrorBoundary } from 'react-error-boundary';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import {
   
  useCreateRefWorkstationRefWorkstationPostMutation, 
   
  useGetAllRefWorkstationsRefWorkstationGetQuery, 
   
  useUpdateRefWorkstationRefWorkstationIdPutMutation, 
   
  useDeleteRefWorkstationRefWorkstationIdDeleteMutation, 
   
  useGetRefWorkstationRefWorkstationIdGetQuery, 
   
  useGetAllRefWorkstationEventGetQuery, 
   
  useCreateRefWorkstationRefWorkstationEventPostMutation, 
   
  useUpdateRefWorkstationRefWorkstationEventIdPutMutation, 
   
  useDeleteRefWorkstationRefWorkstationEventIdDeleteMutation, 
   
  useGetRefWorkstationRefWorkstationEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import WorkstationsListing from './WorkstationsListing';
import { Modal } from '@/components/ui/modal';
import WorkstationsForm from './WorkstationsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function WorkstationsDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteRefWorkstation] = useDeleteRefWorkstationRefWorkstationIdDeleteMutation();

   const { data: fetchedRefWorkstationDetails,
     isFetching: isFetchingData,
     refetch: refetchRefWorkstationDetails
    } = useGetRefWorkstationRefWorkstationIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedRefWorkstationDetails) return;
     setSelectedItem(fetchedRefWorkstationDetails);
   }, [fetchedRefWorkstationDetails]);

  const handleCloseModal = () => {
    setIsCreatePopupOpen(false);
    setSelectedItem(null);
  };

  const ctaButtons = [
   {/* {
      label: `Edit`,
      icon: <Pencil size={20} />,
      onClick: () => {
        setIsCreatePopupOpen(true);
      },
      type: 'button',
      title: `Edit`,
      isButton: false
    },
    {
      label: `Delete`,
      icon: <Trash2 size={20} />,
      onClick: () => setIsDeleteModalOpen(true),
      type: 'button',
      title: `Delete`,
      isButton: false
    }, */},
    {
      label: `Close`,
      icon: <X size={25} />,
      onClick: () => handelClose(),
      type: 'button',
      title: `Close`,
      isButton: false
    }
  ];

  const onConfirmDelete = async () => {
    try {
      if (selectedItem?.id) {
        //await deleteRefWorkstation({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Workstations deleted successfully');
        //refetchRefWorkstationDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Workstations ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `refWorkstation.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/settings/miscellaneous/workstations`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Workstations' : 'Create Workstations'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <WorkstationsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchRefWorkstationList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'Workstations Details'
        }
        ctaButtons={ctaButtons}
      />

      <div className='custom-scrollbar h-[80vh] overflow-y-auto py-4 pr-3'>
          <Card className="mx-auto mb-4 w-full">
            
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                   
                      <div>
                        <p className="font-semibold">Id:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Organization Id:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.organization_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Serial Number:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.serial_number }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Workstation Name:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.workstation_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Workstation Code:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.workstation_code }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Associated Site:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.associated_site }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Notes:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.notes }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Active Flag:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.active_flag }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Create By:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.create_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.is_deleted }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedRefWorkstationDetails?.search_vector }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedRefWorkstationDetails?.effective_start_date
                          ).format('MM/DD/YYYY')
                    </p> */}
                </div>
              </div>
            </CardContent>
          </Card>

          {/*<Card className='mx-auto mb-4 w-full'>
            <CardContent>
              <section className='mb-6'>
                <h2 className='text-title-md2 mb-2 font-semibold text-black dark:text-white'>
                  Workstations
                </h2>
                <ErrorBoundary
                  fallback={<div>{'Error loading data'}</div>}
                >
                  {false ? (
                    <DataTableSkeleton columnCount={5} rowCount={10} />

                  ) : (
                    <TabPanel
                      id={163}
                      tabs={tabs}
                      //fetchedVendorData={fetchedVendorData}
                      //refetchList={refetchVendorDetailsList}
                    />
                  )}
                </ErrorBoundary>
              </section>
            </CardContent>
          </Card>*/}
      </div>
    </>
  );
}

export default WorkstationsDetails;