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
  useCreateTrnFsFuelReceiveTrnFsFuelReceivePostMutation,
  useGetAllTrnFsFuelReceivesTrnFsFuelReceiveGetQuery,
  useUpdateTrnFsFuelReceiveTrnFsFuelReceiveIdPutMutation,
  useDeleteTrnFsFuelReceiveTrnFsFuelReceiveIdDeleteMutation,
  useGetTrnFsFuelReceiveTrnFsFuelReceiveIdGetQuery,
  useGetAllTrnFsFuelReceiveEventGetQuery,
  useCreateTrnFsFuelReceiveTrnFsFuelReceiveEventPostMutation,
  useUpdateTrnFsFuelReceiveTrnFsFuelReceiveEventIdPutMutation,
  useDeleteTrnFsFuelReceiveTrnFsFuelReceiveEventIdDeleteMutation,
  useGetTrnFsFuelReceiveTrnFsFuelReceiveEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import FuelReceiptsListing from './FuelReceiptsListing';
import { Modal } from '@/components/ui/modal';
import FuelReceiptsForm from './FuelReceiptsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function FuelReceiptsDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteTrnFsFuelReceive] =
    useDeleteTrnFsFuelReceiveTrnFsFuelReceiveIdDeleteMutation();

  const {
    data: fetchedTrnFsFuelReceiveDetails,
    isFetching: isFetchingData,
    refetch: refetchTrnFsFuelReceiveDetails
  } = useGetTrnFsFuelReceiveTrnFsFuelReceiveIdGetQuery(
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
    if (!fetchedTrnFsFuelReceiveDetails) return;
    setSelectedItem(fetchedTrnFsFuelReceiveDetails);
  }, [fetchedTrnFsFuelReceiveDetails]);

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
        //await deleteTrnFsFuelReceive({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Fuel Receipts deleted successfully');
        //refetchTrnFsFuelReceiveDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Fuel Receipts ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnFsFuelReceive.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/fuel-management/fuel-receipts`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={selectedItem ? 'Edit Fuel Receipts' : 'Create Fuel Receipts'}
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <FuelReceiptsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnFsFuelReceiveList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'FuelReceipts Details'}
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
                  <p>{fetchedTrnFsFuelReceiveDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Fnyr:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.trn_fnyr}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Date:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.trn_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Number:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.trn_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fuel Station Id:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.fuel_station_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fuel Station Name:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.fuel_station_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fuel Type:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.fuel_type}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fuel Quantity:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.fuel_quantity}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fuel Unit Rate:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.fuel_unit_rate}</p>
                </div>

                <div>
                  <p className='font-semibold'>Amount:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.amount}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fuel Vendor Id:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.fuel_vendor_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Vendor Name:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.vendor_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Reference Number:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.reference_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Remarks:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.remarks}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelReceiveDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedTrnFsFuelReceiveDetails?.effective_start_date
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
                  Fuel Receipts
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

export default FuelReceiptsDetails;
