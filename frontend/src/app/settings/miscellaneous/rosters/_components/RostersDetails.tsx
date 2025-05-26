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
   
  useCreateRefRosterRefRosterPostMutation, 
   
  useGetAllRefRostersRefRosterGetQuery, 
   
  useUpdateRefRosterRefRosterIdPutMutation, 
   
  useDeleteRefRosterRefRosterIdDeleteMutation, 
   
  useGetRefRosterRefRosterIdGetQuery, 
   
  useGetAllRefRosterEventGetQuery, 
   
  useCreateRefRosterRefRosterEventPostMutation, 
   
  useUpdateRefRosterRefRosterEventIdPutMutation, 
   
  useDeleteRefRosterRefRosterEventIdDeleteMutation, 
   
  useGetRefRosterRefRosterEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import RostersListing from './RostersListing';
import { Modal } from '@/components/ui/modal';
import RostersForm from './RostersForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function RostersDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteRefRoster] = useDeleteRefRosterRefRosterIdDeleteMutation();

   const { data: fetchedRefRosterDetails,
     isFetching: isFetchingData,
     refetch: refetchRefRosterDetails
    } = useGetRefRosterRefRosterIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedRefRosterDetails) return;
     setSelectedItem(fetchedRefRosterDetails);
   }, [fetchedRefRosterDetails]);

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
        //await deleteRefRoster({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Rosters deleted successfully');
        //refetchRefRosterDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Rosters ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `refRoster.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/settings/miscellaneous/rosters`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Rosters' : 'Create Rosters'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <RostersForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchRefRosterList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'Rosters Details'
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
                        <p>{fetchedRefRosterDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Organization Id:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.organization_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Serial Number:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.serial_number }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Roster Name:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.roster_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">No Of Shifts:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.no_of_shifts }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Shift1 Name:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.shift1_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Shift1 Start Time:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.shift1_start_time }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Shift1 Hours:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.shift1_hours }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Shift2 Name:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.shift2_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Shift2 Start Time:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.shift2_start_time }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Shift2 Hours:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.shift2_hours }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Shift3 Name:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.shift3_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Shift3 Start Time:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.shift3_start_time }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Shift3 Hours:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.shift3_hours }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Shift4 Name:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.shift4_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Shift4 Start Time:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.shift4_start_time }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Shift4 Hours:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.shift4_hours }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Create By:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.create_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.is_deleted }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedRefRosterDetails?.search_vector }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedRefRosterDetails?.effective_start_date
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
                  Rosters
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

export default RostersDetails;