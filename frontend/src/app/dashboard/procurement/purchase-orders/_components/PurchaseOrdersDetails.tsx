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
  useCreateTrnPurchaseOrderTrnPurchaseOrderPostMutation,
  useGetAllTrnPurchaseOrdersTrnPurchaseOrderGetQuery,
  useUpdateTrnPurchaseOrderTrnPurchaseOrderIdPutMutation,
  useDeleteTrnPurchaseOrderTrnPurchaseOrderIdDeleteMutation,
  useGetTrnPurchaseOrderTrnPurchaseOrderIdGetQuery,
  useGetAllTrnPurchaseOrderEventGetQuery,
  useCreateTrnPurchaseOrderTrnPurchaseOrderEventPostMutation,
  useUpdateTrnPurchaseOrderTrnPurchaseOrderEventIdPutMutation,
  useDeleteTrnPurchaseOrderTrnPurchaseOrderEventIdDeleteMutation,
  useGetTrnPurchaseOrderTrnPurchaseOrderEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import PurchaseOrdersListing from './PurchaseOrdersListing';
import { Modal } from '@/components/ui/modal';
import PurchaseOrdersForm from './PurchaseOrdersForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function PurchaseOrdersDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteTrnPurchaseOrder] =
    useDeleteTrnPurchaseOrderTrnPurchaseOrderIdDeleteMutation();

  const {
    data: fetchedTrnPurchaseOrderDetails,
    isFetching: isFetchingData,
    refetch: refetchTrnPurchaseOrderDetails
  } = useGetTrnPurchaseOrderTrnPurchaseOrderIdGetQuery(
    {
      ...tenantIDHeader(),
      id: id
    },
    {
      skip: !id,
      refetchOnMountOrArgChange: true
    }
  );

  useEffect(() => {
    if (!fetchedTrnPurchaseOrderDetails) return;
    setSelectedItem(fetchedTrnPurchaseOrderDetails);
  }, [fetchedTrnPurchaseOrderDetails]);

  const handleCloseModal = () => {
    setIsCreatePopupOpen(false);
    setSelectedItem(null);
  };

  const ctaButtons = [
    {
      /* {
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
    }, */
    },
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
        //await deleteTrnPurchaseOrder({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Purchase Orders deleted successfully');
        //refetchTrnPurchaseOrderDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Purchase Orders ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnPurchaseOrder.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/procurement/purchase-orders`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Purchase Orders' : 'Create Purchase Orders'
          }
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <PurchaseOrdersForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnPurchaseOrderList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'PurchaseOrders Details'}
        ctaButtons={ctaButtons}
      />

      <div className='custom-scrollbar h-[80vh] overflow-y-auto py-4 pr-3'>
        <Card className='mx-auto mb-4 w-full'>
          <CardContent>
            <div className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='font-semibold'>Id:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Po Type:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.po_type}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Fnyr:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.trn_fnyr}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Date:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.trn_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Number:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.trn_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Warehouse Id:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.warehouse_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Warehouse Name:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.warehouse_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Vendor Id:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.vendor_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Vendor Name:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.vendor_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Purchase Order For:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.purchase_order_for}</p>
                </div>

                <div>
                  <p className='font-semibold'>Priority:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.priority}</p>
                </div>

                <div>
                  <p className='font-semibold'>Delivery Date:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.delivery_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Quotation Number:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.quotation_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Quotation Date:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.quotation_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tag User:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.tag_user}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tag User Name:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.tag_user_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Authorized User:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.authorized_user}</p>
                </div>

                <div>
                  <p className='font-semibold'>Authorized Signatory:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.authorized_signatory}</p>
                </div>

                <div>
                  <p className='font-semibold'>Requisition Id:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.requisition_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Requisition User:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.requisition_user}</p>
                </div>

                <div>
                  <p className='font-semibold'>Gst Applicable:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.gst_applicable}</p>
                </div>

                <div>
                  <p className='font-semibold'>Total Quantity:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.total_quantity}</p>
                </div>

                <div>
                  <p className='font-semibold'>Sub Total Amount:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.sub_total_amount}</p>
                </div>

                <div>
                  <p className='font-semibold'>Adjustment Amount:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.adjustment_amount}</p>
                </div>

                <div>
                  <p className='font-semibold'>Total Amount:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.total_amount}</p>
                </div>

                <div>
                  <p className='font-semibold'>Update Item Purchase Price:</p>
                  <p></p>
                  <p>
                    {fetchedTrnPurchaseOrderDetails?.update_item_purchase_price}
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>
                    Update Item Consumption Price:
                  </p>
                  <p></p>
                  <p>
                    {
                      fetchedTrnPurchaseOrderDetails?.update_item_consumption_price
                    }
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>Notes:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.notes}</p>
                </div>

                <div>
                  <p className='font-semibold'>Status:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.status}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedTrnPurchaseOrderDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedTrnPurchaseOrderDetails?.effective_start_date
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
                  Purchase Orders
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

export default PurchaseOrdersDetails;
