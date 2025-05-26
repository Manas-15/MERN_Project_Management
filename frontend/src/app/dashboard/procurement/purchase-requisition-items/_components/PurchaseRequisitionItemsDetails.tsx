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
   
  useCreateTrnPurchaseReqItemsTrnPurchaseReqItemsPostMutation, 
   
  useGetAllTrnPurchaseReqItemssTrnPurchaseReqItemsGetQuery, 
   
  useUpdateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPutMutation, 
   
  useDeleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDeleteMutation, 
   
  useGetTrnPurchaseReqItemsTrnPurchaseReqItemsIdGetQuery, 
   
  useGetAllTrnPurchaseReqItemsEventGetQuery, 
   
  useCreateTrnPurchaseReqItemsTrnPurchaseReqItemsEventPostMutation, 
   
  useUpdateTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdPutMutation, 
   
  useDeleteTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdDeleteMutation, 
   
  useGetTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import PurchaseRequisitionItemsListing from './PurchaseRequisitionItemsListing';
import { Modal } from '@/components/ui/modal';
import PurchaseRequisitionItemsForm from './PurchaseRequisitionItemsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function PurchaseRequisitionItemsDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteTrnPurchaseReqItems] = useDeleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDeleteMutation();

   const { data: fetchedTrnPurchaseReqItemsDetails,
     isFetching: isFetchingData,
     refetch: refetchTrnPurchaseReqItemsDetails
    } = useGetTrnPurchaseReqItemsTrnPurchaseReqItemsIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedTrnPurchaseReqItemsDetails) return;
     setSelectedItem(fetchedTrnPurchaseReqItemsDetails);
   }, [fetchedTrnPurchaseReqItemsDetails]);

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
        //await deleteTrnPurchaseReqItems({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Purchase Requisition Items deleted successfully');
        //refetchTrnPurchaseReqItemsDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Purchase Requisition Items ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnPurchaseReqItems.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/procurement/purchase-requisition-items`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Purchase Requisition Items' : 'Create Purchase Requisition Items'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <PurchaseRequisitionItemsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnPurchaseReqItemsList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'PurchaseRequisitionItems Details'
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
                        <p>{fetchedTrnPurchaseReqItemsDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Fnyr:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.trn_fnyr }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Number:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.trn_number }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Date:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.trn_date }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Requisition Id:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.requisition_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Item Id:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.item_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Item Name:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.item_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Indent Quantity:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.indent_quantity }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Requisition Quantity:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.requisition_quantity }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Unit Rate:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.unit_rate }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Gst Prct:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.gst_prct }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Gst Amount:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.gst_amount }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Amount:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.amount }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Create By:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.create_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.is_deleted }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseReqItemsDetails?.search_vector }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedTrnPurchaseReqItemsDetails?.effective_start_date
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
                  Purchase Requisition Items
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

export default PurchaseRequisitionItemsDetails;