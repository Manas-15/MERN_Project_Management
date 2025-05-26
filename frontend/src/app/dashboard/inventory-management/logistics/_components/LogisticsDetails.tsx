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
   
  useCreateTrnInvLogisticsTrnInvLogisticsPostMutation, 
   
  useGetAllTrnInvLogisticssTrnInvLogisticsGetQuery, 
   
  useUpdateTrnInvLogisticsTrnInvLogisticsIdPutMutation, 
   
  useDeleteTrnInvLogisticsTrnInvLogisticsIdDeleteMutation, 
   
  useGetTrnInvLogisticsTrnInvLogisticsIdGetQuery, 
   
  useGetAllTrnInvLogisticsEventGetQuery, 
   
  useCreateTrnInvLogisticsTrnInvLogisticsEventPostMutation, 
   
  useUpdateTrnInvLogisticsTrnInvLogisticsEventIdPutMutation, 
   
  useDeleteTrnInvLogisticsTrnInvLogisticsEventIdDeleteMutation, 
   
  useGetTrnInvLogisticsTrnInvLogisticsEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import LogisticsListing from './LogisticsListing';
import { Modal } from '@/components/ui/modal';
import LogisticsForm from './LogisticsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function LogisticsDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteTrnInvLogistics] = useDeleteTrnInvLogisticsTrnInvLogisticsIdDeleteMutation();

   const { data: fetchedTrnInvLogisticsDetails,
     isFetching: isFetchingData,
     refetch: refetchTrnInvLogisticsDetails
    } = useGetTrnInvLogisticsTrnInvLogisticsIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedTrnInvLogisticsDetails) return;
     setSelectedItem(fetchedTrnInvLogisticsDetails);
   }, [fetchedTrnInvLogisticsDetails]);

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
        //await deleteTrnInvLogistics({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Logistics deleted successfully');
        //refetchTrnInvLogisticsDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Logistics ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnInvLogistics.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/inventory-management/logistics`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Logistics' : 'Create Logistics'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <LogisticsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnInvLogisticsList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'Logistics Details'
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
                        <p>{fetchedTrnInvLogisticsDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Fnyr:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.trn_fnyr }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Date:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.trn_date }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Number:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.trn_number }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Logistics Type:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.logistics_type }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Devision Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.devision_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Devision Name:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.devision_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Load Type:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.load_type }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Vehicle Type:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.vehicle_type }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tag User:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.tag_user }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Origin Type:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.origin_type }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Origin Cost Center:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.origin_cost_center }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Destination Type:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.destination_type }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Destination Cost Center:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.destination_cost_center }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Comments:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.comments }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Status Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.status_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Create By:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.create_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.is_deleted }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedTrnInvLogisticsDetails?.search_vector }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedTrnInvLogisticsDetails?.effective_start_date
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
                  Logistics
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

export default LogisticsDetails;