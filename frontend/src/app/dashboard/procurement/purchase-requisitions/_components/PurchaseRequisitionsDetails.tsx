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
   
  useCreateTrnInvPurchaseReqTrnInvPurchaseReqPostMutation, 
   
  useGetAllTrnInvPurchaseReqsTrnInvPurchaseReqGetQuery, 
   
  useUpdateTrnInvPurchaseReqTrnInvPurchaseReqIdPutMutation, 
   
  useDeleteTrnInvPurchaseReqTrnInvPurchaseReqIdDeleteMutation, 
   
  useGetTrnInvPurchaseReqTrnInvPurchaseReqIdGetQuery, 
   
  useGetAllTrnInvPurchaseReqEventGetQuery, 
   
  useCreateTrnInvPurchaseReqTrnInvPurchaseReqEventPostMutation, 
   
  useUpdateTrnInvPurchaseReqTrnInvPurchaseReqEventIdPutMutation, 
   
  useDeleteTrnInvPurchaseReqTrnInvPurchaseReqEventIdDeleteMutation, 
   
  useGetTrnInvPurchaseReqTrnInvPurchaseReqEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import PurchaseRequisitionsListing from './PurchaseRequisitionsListing';
import { Modal } from '@/components/ui/modal';
import PurchaseRequisitionsForm from './PurchaseRequisitionsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function PurchaseRequisitionsDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteTrnInvPurchaseReq] = useDeleteTrnInvPurchaseReqTrnInvPurchaseReqIdDeleteMutation();

   const { data: fetchedTrnInvPurchaseReqDetails,
     isFetching: isFetchingData,
     refetch: refetchTrnInvPurchaseReqDetails
    } = useGetTrnInvPurchaseReqTrnInvPurchaseReqIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedTrnInvPurchaseReqDetails) return;
     setSelectedItem(fetchedTrnInvPurchaseReqDetails);
   }, [fetchedTrnInvPurchaseReqDetails]);

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
        //await deleteTrnInvPurchaseReq({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Purchase Requisitions deleted successfully');
        //refetchTrnInvPurchaseReqDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Purchase Requisitions ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnInvPurchaseReq.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/procurement/purchase-requisitions`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Purchase Requisitions' : 'Create Purchase Requisitions'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <PurchaseRequisitionsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnInvPurchaseReqList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'PurchaseRequisitions Details'
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
                        <p>{fetchedTrnInvPurchaseReqDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Fnyr:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.trn_fnyr }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Number:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.trn_number }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Date:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.trn_date }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Warehouse Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.warehouse_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Warehouse Name:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.warehouse_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Status:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.status }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Title:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.title }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Priority:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.priority }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Due Date:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.due_date }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tag User:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.tag_user }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tag Assests:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.tag_assests }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Indent Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.indent_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Total Quantity:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.total_quantity }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Currency Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.currency_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Sub Total Amount:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.sub_total_amount }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tax Amount:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.tax_amount }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Total Amount:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.total_amount }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Notes:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.notes }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Requisition Status:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.requisition_status }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Create By:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.create_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.is_deleted }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedTrnInvPurchaseReqDetails?.search_vector }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedTrnInvPurchaseReqDetails?.effective_start_date
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
                  Purchase Requisitions
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

export default PurchaseRequisitionsDetails;