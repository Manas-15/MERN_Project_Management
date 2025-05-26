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
   
  useCreateAssetServiceCheckListAssetServiceCheckListPostMutation, 
   
  useGetAllAssetServiceCheckListsAssetServiceCheckListGetQuery, 
   
  useUpdateAssetServiceCheckListAssetServiceCheckListIdPutMutation, 
   
  useDeleteAssetServiceCheckListAssetServiceCheckListIdDeleteMutation, 
   
  useGetAssetServiceCheckListAssetServiceCheckListIdGetQuery, 
   
  useGetAllAssetServiceCheckListEventGetQuery, 
   
  useCreateAssetServiceCheckListAssetServiceCheckListEventPostMutation, 
   
  useUpdateAssetServiceCheckListAssetServiceCheckListEventIdPutMutation, 
   
  useDeleteAssetServiceCheckListAssetServiceCheckListEventIdDeleteMutation, 
   
  useGetAssetServiceCheckListAssetServiceCheckListEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import ServiceChecklistsListing from './ServiceChecklistsListing';
import { Modal } from '@/components/ui/modal';
import ServiceChecklistsForm from './ServiceChecklistsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function ServiceChecklistsDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteAssetServiceCheckList] = useDeleteAssetServiceCheckListAssetServiceCheckListIdDeleteMutation();

   const { data: fetchedAssetServiceCheckListDetails,
     isFetching: isFetchingData,
     refetch: refetchAssetServiceCheckListDetails
    } = useGetAssetServiceCheckListAssetServiceCheckListIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedAssetServiceCheckListDetails) return;
     setSelectedItem(fetchedAssetServiceCheckListDetails);
   }, [fetchedAssetServiceCheckListDetails]);

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
        //await deleteAssetServiceCheckList({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Service Checklists deleted successfully');
        //refetchAssetServiceCheckListDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Service Checklists ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `assetServiceCheckList.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/settings/assets/service-checklists`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Service Checklists' : 'Create Service Checklists'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <ServiceChecklistsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchAssetServiceCheckListList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'ServiceChecklists Details'
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
                        <p>{fetchedAssetServiceCheckListDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Assetmatrix Id:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.assetmatrix_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Matrix Id:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.matrix_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Checksheet Name:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.checksheet_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Section Id:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.section_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Section Name:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.section_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Sub Section Id:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.sub_section_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Sub Section Name:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.sub_section_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tracking Status:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.tracking_status }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Hour Meter Flag:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.hour_meter_flag }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Hour Meter:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.hour_meter }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Drum Hour Flag:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.drum_hour_flag }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Drum Hours:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.drum_hours }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Days Flag:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.days_flag }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Days:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.days }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Range Option:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.range_option }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Range Start:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.range_start }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Range End:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.range_end }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Critical Level:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.critical_level }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Create By:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.create_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.is_deleted }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedAssetServiceCheckListDetails?.search_vector }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedAssetServiceCheckListDetails?.effective_start_date
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
                  Service Checklists
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

export default ServiceChecklistsDetails;