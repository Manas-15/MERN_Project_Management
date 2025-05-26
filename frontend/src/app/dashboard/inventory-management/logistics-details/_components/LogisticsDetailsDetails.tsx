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
   
  useCreateTrnInvLogisticsDtlTrnInvLogisticsDtlPostMutation, 
   
  useGetAllTrnInvLogisticsDtlsTrnInvLogisticsDtlGetQuery, 
   
  useUpdateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPutMutation, 
   
  useDeleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDeleteMutation, 
   
  useGetTrnInvLogisticsDtlTrnInvLogisticsDtlIdGetQuery, 
   
  useGetAllTrnInvLogisticsDtlEventGetQuery, 
   
  useCreateTrnInvLogisticsDtlTrnInvLogisticsDtlEventPostMutation, 
   
  useUpdateTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdPutMutation, 
   
  useDeleteTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdDeleteMutation, 
   
  useGetTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import LogisticsDetailsListing from './LogisticsDetailsListing';
import { Modal } from '@/components/ui/modal';
import LogisticsDetailsForm from './LogisticsDetailsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function LogisticsDetailsDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteTrnInvLogisticsDtl] = useDeleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDeleteMutation();

   const { data: fetchedTrnInvLogisticsDtlDetails,
     isFetching: isFetchingData,
     refetch: refetchTrnInvLogisticsDtlDetails
    } = useGetTrnInvLogisticsDtlTrnInvLogisticsDtlIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedTrnInvLogisticsDtlDetails) return;
     setSelectedItem(fetchedTrnInvLogisticsDtlDetails);
   }, [fetchedTrnInvLogisticsDtlDetails]);

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
        //await deleteTrnInvLogisticsDtl({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Logistics Details deleted successfully');
        //refetchTrnInvLogisticsDtlDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Logistics Details ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnInvLogisticsDtl.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/inventory-management/logistics-details`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Logistics Details' : 'Create Logistics Details'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <LogisticsDetailsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnInvLogisticsDtlList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'LogisticsDetails Details'
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
                        <p>{fetchedTrnInvLogisticsDtlDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Fnyr:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.trn_fnyr }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Date:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.trn_date }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Logistic Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.logistic_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Source Type:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.source_type }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Address1:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.address1 }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Address2:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.address2 }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Landmark:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.landmark }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">City:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.city }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Country:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.country }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">State:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.state }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">District:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.district }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Pin:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.pin }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Gstin:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.gstin }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Create By:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.create_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.is_deleted }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDtlDetails?.search_vector }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedTrnInvLogisticsDtlDetails?.effective_start_date
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
                  Logistics Details
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

export default LogisticsDetailsDetails;