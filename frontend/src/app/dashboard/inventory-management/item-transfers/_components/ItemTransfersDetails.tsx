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
   
  useCreateTrnInvItemTransferTrnInvItemTransferPostMutation, 
   
  useGetAllTrnInvItemTransfersTrnInvItemTransferGetQuery, 
   
  useUpdateTrnInvItemTransferTrnInvItemTransferIdPutMutation, 
   
  useDeleteTrnInvItemTransferTrnInvItemTransferIdDeleteMutation, 
   
  useGetTrnInvItemTransferTrnInvItemTransferIdGetQuery, 
   
  useGetAllTrnInvItemTransferEventGetQuery, 
   
  useCreateTrnInvItemTransferTrnInvItemTransferEventPostMutation, 
   
  useUpdateTrnInvItemTransferTrnInvItemTransferEventIdPutMutation, 
   
  useDeleteTrnInvItemTransferTrnInvItemTransferEventIdDeleteMutation, 
   
  useGetTrnInvItemTransferTrnInvItemTransferEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import ItemTransfersListing from './ItemTransfersListing';
import { Modal } from '@/components/ui/modal';
import ItemTransfersForm from './ItemTransfersForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function ItemTransfersDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteTrnInvItemTransfer] = useDeleteTrnInvItemTransferTrnInvItemTransferIdDeleteMutation();

   const { data: fetchedTrnInvItemTransferDetails,
     isFetching: isFetchingData,
     refetch: refetchTrnInvItemTransferDetails
    } = useGetTrnInvItemTransferTrnInvItemTransferIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedTrnInvItemTransferDetails) return;
     setSelectedItem(fetchedTrnInvItemTransferDetails);
   }, [fetchedTrnInvItemTransferDetails]);

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
        //await deleteTrnInvItemTransfer({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Item Transfers deleted successfully');
        //refetchTrnInvItemTransferDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Item Transfers ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnInvItemTransfer.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/inventory-management/item-transfers`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Item Transfers' : 'Create Item Transfers'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <ItemTransfersForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnInvItemTransferList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'ItemTransfers Details'
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
                        <p>{fetchedTrnInvItemTransferDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Fnyr:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.trn_fnyr }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Date:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.trn_date }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Number:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.trn_number }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">From Warehouse Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.from_warehouse_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">From Warehouse Name:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.from_warehouse_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">To Warehouse Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.to_warehouse_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">To Warehouse Name:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.to_warehouse_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Invoice Number:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.invoice_number }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Invoice Date:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.invoice_date }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transfer For:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.transfer_for }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Cost Centre:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.cost_centre }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Cost Centre Name:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.cost_centre_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ticket Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.ticket_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Total Quantity:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.total_quantity }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Sub Total Amount:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.sub_total_amount }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Gst Amount:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.gst_amount }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Adjustment Amount:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.adjustment_amount }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Total Amount:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.total_amount }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Eway Bill Date:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.eway_bill_date }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Eway Bill Number:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.eway_bill_number }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Docket Number:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.docket_number }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Docket Date:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.docket_date }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transporter Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.transporter_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transporter Name:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.transporter_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transporter Vehicle Number:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.transporter_vehicle_number }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">No Of Boxes:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.no_of_boxes }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Weight:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.weight }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Status Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.status_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Create By:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.create_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.is_deleted }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedTrnInvItemTransferDetails?.search_vector }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedTrnInvItemTransferDetails?.effective_start_date
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
                  Item Transfers
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

export default ItemTransfersDetails;