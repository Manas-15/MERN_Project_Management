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
  useCreateTrnShiftFuelOpeningTrnShiftFuelOpeningPostMutation,
  useGetAllTrnShiftFuelOpeningsTrnShiftFuelOpeningGetQuery,
  useUpdateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPutMutation,
  useDeleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDeleteMutation,
  useGetTrnShiftFuelOpeningTrnShiftFuelOpeningIdGetQuery,
  useGetAllTrnShiftFuelOpeningEventGetQuery,
  useCreateTrnShiftFuelOpeningTrnShiftFuelOpeningEventPostMutation,
  useUpdateTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdPutMutation,
  useDeleteTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdDeleteMutation,
  useGetTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import ShiftFuelOpeningListing from './ShiftFuelOpeningListing';
import { Modal } from '@/components/ui/modal';
import ShiftFuelOpeningForm from './ShiftFuelOpeningForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function ShiftFuelOpeningDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteTrnShiftFuelOpening] =
    useDeleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDeleteMutation();

  const {
    data: fetchedTrnShiftFuelOpeningDetails,
    isFetching: isFetchingData,
    refetch: refetchTrnShiftFuelOpeningDetails
  } = useGetTrnShiftFuelOpeningTrnShiftFuelOpeningIdGetQuery(
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
    if (!fetchedTrnShiftFuelOpeningDetails) return;
    setSelectedItem(fetchedTrnShiftFuelOpeningDetails);
  }, [fetchedTrnShiftFuelOpeningDetails]);

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
        //await deleteTrnShiftFuelOpening({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Shift Fuel Opening deleted successfully');
        //refetchTrnShiftFuelOpeningDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Shift Fuel Opening ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnShiftFuelOpening.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/fuel-management/shift-fuel-opening`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem
              ? 'Edit Shift Fuel Opening'
              : 'Create Shift Fuel Opening'
          }
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <ShiftFuelOpeningForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnShiftFuelOpeningList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'ShiftFuelOpening Details'}
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
                  <p>{fetchedTrnShiftFuelOpeningDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Fnyr:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.trn_fnyr}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Number:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.trn_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Date:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.trn_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Id:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.asset_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Name:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.asset_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Site Id:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.site_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Roster Id:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.roster_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Previous Opening Balance:</p>
                  <p></p>
                  <p>
                    {
                      fetchedTrnShiftFuelOpeningDetails?.previous_opening_balance
                    }
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>Opening Balance:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.opening_balance}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedTrnShiftFuelOpeningDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedTrnShiftFuelOpeningDetails?.effective_start_date
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
                  Shift Fuel Opening
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

export default ShiftFuelOpeningDetails;
