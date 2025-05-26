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
  useCreateTrnInvItemAdjustmentTrnInvItemAdjustmentPostMutation,
  useGetAllTrnInvItemAdjustmentsTrnInvItemAdjustmentGetQuery,
  useUpdateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPutMutation,
  useDeleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDeleteMutation,
  useGetTrnInvItemAdjustmentTrnInvItemAdjustmentIdGetQuery,
  useGetAllTrnInvItemAdjustmentEventGetQuery,
  useCreateTrnInvItemAdjustmentTrnInvItemAdjustmentEventPostMutation,
  useUpdateTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdPutMutation,
  useDeleteTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdDeleteMutation,
  useGetTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import ItemAdjustmentsListing from './ItemAdjustmentsListing';
import { Modal } from '@/components/ui/modal';
import ItemAdjustmentsForm from './ItemAdjustmentsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function ItemAdjustmentsDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteTrnInvItemAdjustment] =
    useDeleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDeleteMutation();

  const {
    data: fetchedTrnInvItemAdjustmentDetails,
    isFetching: isFetchingData,
    refetch: refetchTrnInvItemAdjustmentDetails
  } = useGetTrnInvItemAdjustmentTrnInvItemAdjustmentIdGetQuery(
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
    if (!fetchedTrnInvItemAdjustmentDetails) return;
    setSelectedItem(fetchedTrnInvItemAdjustmentDetails);
  }, [fetchedTrnInvItemAdjustmentDetails]);

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
        //await deleteTrnInvItemAdjustment({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Item Adjustments deleted successfully');
        //refetchTrnInvItemAdjustmentDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Item Adjustments ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnInvItemAdjustment.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/inventory-management/item-adjustments`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Item Adjustments' : 'Create Item Adjustments'
          }
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <ItemAdjustmentsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnInvItemAdjustmentList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'ItemAdjustments Details'}
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
                  <p>{fetchedTrnInvItemAdjustmentDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Fnyr:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.trn_fnyr}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Date:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.trn_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Number:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.trn_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Warehouse Id:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.warehouse_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Warehouse Name:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.warehouse_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Adjustment For:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.adjustment_for}</p>
                </div>

                <div>
                  <p className='font-semibold'>Cost Centre:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.cost_centre}</p>
                </div>

                <div>
                  <p className='font-semibold'>Cost Centre Name:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.cost_centre_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Status Id:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.status_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Status:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.status}</p>
                </div>

                <div>
                  <p className='font-semibold'>Total Add Quantity:</p>
                  <p></p>
                  <p>
                    {fetchedTrnInvItemAdjustmentDetails?.total_add_quantity}
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>Total Less Quantity:</p>
                  <p></p>
                  <p>
                    {fetchedTrnInvItemAdjustmentDetails?.total_less_quantity}
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>Notes:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.notes}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedTrnInvItemAdjustmentDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedTrnInvItemAdjustmentDetails?.effective_start_date
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
                  Item Adjustments
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

export default ItemAdjustmentsDetails;
