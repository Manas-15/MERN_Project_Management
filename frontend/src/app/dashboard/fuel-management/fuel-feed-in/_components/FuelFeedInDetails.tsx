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
  useCreateTrnFuelFeedinTrnFuelFeedinPostMutation,
  useGetAllTrnFuelFeedinsTrnFuelFeedinGetQuery,
  useUpdateTrnFuelFeedinTrnFuelFeedinIdPutMutation,
  useDeleteTrnFuelFeedinTrnFuelFeedinIdDeleteMutation,
  useGetTrnFuelFeedinTrnFuelFeedinIdGetQuery,
  useGetAllTrnFuelFeedinEventGetQuery,
  useCreateTrnFuelFeedinTrnFuelFeedinEventPostMutation,
  useUpdateTrnFuelFeedinTrnFuelFeedinEventIdPutMutation,
  useDeleteTrnFuelFeedinTrnFuelFeedinEventIdDeleteMutation,
  useGetTrnFuelFeedinTrnFuelFeedinEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import FuelFeedInListing from './FuelFeedInListing';
import { Modal } from '@/components/ui/modal';
import FuelFeedInForm from './FuelFeedInForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function FuelFeedInDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteTrnFuelFeedin] =
    useDeleteTrnFuelFeedinTrnFuelFeedinIdDeleteMutation();

  const {
    data: fetchedTrnFuelFeedinDetails,
    isFetching: isFetchingData,
    refetch: refetchTrnFuelFeedinDetails
  } = useGetTrnFuelFeedinTrnFuelFeedinIdGetQuery(
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
    if (!fetchedTrnFuelFeedinDetails) return;
    setSelectedItem(fetchedTrnFuelFeedinDetails);
  }, [fetchedTrnFuelFeedinDetails]);

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
        //await deleteTrnFuelFeedin({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Fuel Feed In deleted successfully');
        //refetchTrnFuelFeedinDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Fuel Feed In ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnFuelFeedin.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/fuel-management/fuel-feed-in`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={selectedItem ? 'Edit Fuel Feed In' : 'Create Fuel Feed In'}
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <FuelFeedInForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnFuelFeedinList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader title={'FuelFeedIn Details'} ctaButtons={ctaButtons} />

      <div className='custom-scrollbar h-[80vh] overflow-y-auto py-4 pr-3'>
        <Card className='mx-auto mb-4 w-full'>
          <CardContent>
            <div className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='font-semibold'>Id:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Fnyr:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.trn_fnyr}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Number:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.trn_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Date:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.trn_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Roster Id:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.roster_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Id:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.asset_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Site Id:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.site_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fulefeedin Station:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.fulefeedin_station}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fule Station Name:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.fule_station_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Other Station Detail:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.other_station_detail}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fule Type:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.fule_type}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fuel Quantity:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.fuel_quantity}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fuel Unit Rate:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.fuel_unit_rate}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fuel Amount:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.fuel_amount}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fuel Tank Status:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.fuel_tank_status}</p>
                </div>

                <div>
                  <p className='font-semibold'>Reference Number:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.reference_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Attach Invoice:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.attach_invoice}</p>
                </div>

                <div>
                  <p className='font-semibold'>Notes:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.notes}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedTrnFuelFeedinDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedTrnFuelFeedinDetails?.effective_start_date
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
                  Fuel Feed In
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

export default FuelFeedInDetails;
