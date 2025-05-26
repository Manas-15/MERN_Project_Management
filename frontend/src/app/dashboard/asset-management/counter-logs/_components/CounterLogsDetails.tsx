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
  useCreateTrnCounterlogTrnCounterlogPostMutation,
  useGetAllTrnCounterlogsTrnCounterlogGetQuery,
  useUpdateTrnCounterlogTrnCounterlogIdPutMutation,
  useDeleteTrnCounterlogTrnCounterlogIdDeleteMutation,
  useGetTrnCounterlogTrnCounterlogIdGetQuery,
  useGetAllTrnCounterlogEventGetQuery,
  useCreateTrnCounterlogTrnCounterlogEventPostMutation,
  useUpdateTrnCounterlogTrnCounterlogEventIdPutMutation,
  useDeleteTrnCounterlogTrnCounterlogEventIdDeleteMutation,
  useGetTrnCounterlogTrnCounterlogEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import CounterLogsListing from './CounterLogsListing';
import { Modal } from '@/components/ui/modal';
import CounterLogsForm from './CounterLogsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function CounterLogsDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteTrnCounterlog] =
    useDeleteTrnCounterlogTrnCounterlogIdDeleteMutation();

  const {
    data: fetchedTrnCounterlogDetails,
    isFetching: isFetchingData,
    refetch: refetchTrnCounterlogDetails
  } = useGetTrnCounterlogTrnCounterlogIdGetQuery(
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
    if (!fetchedTrnCounterlogDetails) return;
    setSelectedItem(fetchedTrnCounterlogDetails);
  }, [fetchedTrnCounterlogDetails]);

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
        //await deleteTrnCounterlog({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Counter Logs deleted successfully');
        //refetchTrnCounterlogDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Counter Logs ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnCounterlog.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/asset-management/counter-logs`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={selectedItem ? 'Edit Counter Logs' : 'Create Counter Logs'}
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <CounterLogsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnCounterlogList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'CounterLogs Details'}
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
                  <p>{fetchedTrnCounterlogDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Fnyr:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.trn_fnyr}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Number:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.trn_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Date:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.trn_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Id:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.asset_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Name:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.asset_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Site Id:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.site_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Roster Id:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.roster_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Hours Previous Shift Reading:</p>
                  <p></p>
                  <p>
                    {fetchedTrnCounterlogDetails?.hours_previous_shift_reading}
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>Hours Current Log Reading:</p>
                  <p></p>
                  <p>
                    {fetchedTrnCounterlogDetails?.hours_current_log_reading}
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>
                    Drum Hours Previous Shift Reading:
                  </p>
                  <p></p>
                  <p>
                    {
                      fetchedTrnCounterlogDetails?.drum_hours_previous_shift_reading
                    }
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>
                    Drum Hours Current Log Reading:
                  </p>
                  <p></p>
                  <p>
                    {
                      fetchedTrnCounterlogDetails?.drum_hours_current_log_reading
                    }
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>Log Date Previous Shift:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.log_date_previous_shift}</p>
                </div>

                <div>
                  <p className='font-semibold'>Log Date Current:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.log_date_current}</p>
                </div>

                <div>
                  <p className='font-semibold'>Operater Name Id:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.operater_name_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Remarks:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.remarks}</p>
                </div>

                <div>
                  <p className='font-semibold'>Defective Counterlog Meter:</p>
                  <p></p>
                  <p>
                    {fetchedTrnCounterlogDetails?.defective_counterlog_meter}
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>Hours Absolute Running:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.hours_absolute_running}</p>
                </div>

                <div>
                  <p className='font-semibold'>Drum Absolute Running:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.drum_absolute_running}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedTrnCounterlogDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedTrnCounterlogDetails?.effective_start_date
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
                  Counter Logs
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

export default CounterLogsDetails;
