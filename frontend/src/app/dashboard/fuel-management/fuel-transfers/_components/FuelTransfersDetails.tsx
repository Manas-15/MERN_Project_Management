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
  useCreateTrnFsFuelTransferTrnFsFuelTransferPostMutation,
  useGetAllTrnFsFuelTransfersTrnFsFuelTransferGetQuery,
  useUpdateTrnFsFuelTransferTrnFsFuelTransferIdPutMutation,
  useDeleteTrnFsFuelTransferTrnFsFuelTransferIdDeleteMutation,
  useGetTrnFsFuelTransferTrnFsFuelTransferIdGetQuery,
  useGetAllTrnFsFuelTransferEventGetQuery,
  useCreateTrnFsFuelTransferTrnFsFuelTransferEventPostMutation,
  useUpdateTrnFsFuelTransferTrnFsFuelTransferEventIdPutMutation,
  useDeleteTrnFsFuelTransferTrnFsFuelTransferEventIdDeleteMutation,
  useGetTrnFsFuelTransferTrnFsFuelTransferEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import FuelTransfersListing from './FuelTransfersListing';
import { Modal } from '@/components/ui/modal';
import FuelTransfersForm from './FuelTransfersForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function FuelTransfersDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteTrnFsFuelTransfer] =
    useDeleteTrnFsFuelTransferTrnFsFuelTransferIdDeleteMutation();

  const {
    data: fetchedTrnFsFuelTransferDetails,
    isFetching: isFetchingData,
    refetch: refetchTrnFsFuelTransferDetails
  } = useGetTrnFsFuelTransferTrnFsFuelTransferIdGetQuery(
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
    if (!fetchedTrnFsFuelTransferDetails) return;
    setSelectedItem(fetchedTrnFsFuelTransferDetails);
  }, [fetchedTrnFsFuelTransferDetails]);

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
        //await deleteTrnFsFuelTransfer({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Fuel Transfers deleted successfully');
        //refetchTrnFsFuelTransferDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Fuel Transfers ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnFsFuelTransfer.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/fuel-management/fuel-transfers`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={selectedItem ? 'Edit Fuel Transfers' : 'Create Fuel Transfers'}
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <FuelTransfersForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnFsFuelTransferList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'FuelTransfers Details'}
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
                  <p>{fetchedTrnFsFuelTransferDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Fnyr:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.trn_fnyr}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Date:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.trn_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Number:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.trn_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>From Station Id:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.from_station_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fuel Station Name:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.fuel_station_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>To Station Id:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.to_station_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>To Fuel Station Name:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.to_fuel_station_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fuel Quantity:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.fuel_quantity}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fuel Unit Rate:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.fuel_unit_rate}</p>
                </div>

                <div>
                  <p className='font-semibold'>Amount:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.amount}</p>
                </div>

                <div>
                  <p className='font-semibold'>Reference Number:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.reference_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Remarks:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.remarks}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedTrnFsFuelTransferDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedTrnFsFuelTransferDetails?.effective_start_date
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
                  Fuel Transfers
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

export default FuelTransfersDetails;
