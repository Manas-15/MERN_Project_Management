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
   
  useCreateTrnInvItemTransferDtlTrnInvItemTransferDtlPostMutation, 
   
  useGetAllTrnInvItemTransferDtlsTrnInvItemTransferDtlGetQuery, 
   
  useUpdateTrnInvItemTransferDtlTrnInvItemTransferDtlIdPutMutation, 
   
  useDeleteTrnInvItemTransferDtlTrnInvItemTransferDtlIdDeleteMutation, 
   
  useGetTrnInvItemTransferDtlTrnInvItemTransferDtlIdGetQuery, 
   
  useGetAllTrnInvItemTransferDtlEventGetQuery, 
   
  useCreateTrnInvItemTransferDtlTrnInvItemTransferDtlEventPostMutation, 
   
  useUpdateTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdPutMutation, 
   
  useDeleteTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdDeleteMutation, 
   
  useGetTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import ItemTransferDetailsListing from './ItemTransferDetailsListing';
import { Modal } from '@/components/ui/modal';
import ItemTransferDetailsForm from './ItemTransferDetailsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function ItemTransferDetailsDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteTrnInvItemTransferDtl] = useDeleteTrnInvItemTransferDtlTrnInvItemTransferDtlIdDeleteMutation();

   const { data: fetchedTrnInvItemTransferDtlDetails,
     isFetching: isFetchingData,
     refetch: refetchTrnInvItemTransferDtlDetails
    } = useGetTrnInvItemTransferDtlTrnInvItemTransferDtlIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedTrnInvItemTransferDtlDetails) return;
     setSelectedItem(fetchedTrnInvItemTransferDtlDetails);
   }, [fetchedTrnInvItemTransferDtlDetails]);

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
        //await deleteTrnInvItemTransferDtl({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Item Transfer Details deleted successfully');
        //refetchTrnInvItemTransferDtlDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Item Transfer Details ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnInvItemTransferDtl.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/inventory-management/item-transfer-details`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Item Transfer Details' : 'Create Item Transfer Details'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <ItemTransferDetailsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnInvItemTransferDtlList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'ItemTransferDetails Details'
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
                        <p>{fetchedTrnInvItemTransferDtlDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transfer Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.transfer_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Indent Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.indent_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Item Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.item_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Item Name:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.item_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Demand Prending Qty:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.demand_prending_qty }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Quantity:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.quantity }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Batch Number:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.batch_number }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Expiry Date:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.expiry_date }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Unit Rate:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.unit_rate }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Gst Prct:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.gst_prct }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Gst Amount:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.gst_amount }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Amount:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.amount }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Create By:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.create_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.is_deleted }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDtlDetails?.search_vector }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedTrnInvItemTransferDtlDetails?.effective_start_date
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
                  Item Transfer Details
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

export default ItemTransferDetailsDetails;