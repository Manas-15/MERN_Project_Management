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
  useCreateTrnRoutineServiceCheckTrnRoutineServiceCheckPostMutation,
  useGetAllTrnRoutineServiceChecksTrnRoutineServiceCheckGetQuery,
  useUpdateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPutMutation,
  useDeleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDeleteMutation,
  useGetTrnRoutineServiceCheckTrnRoutineServiceCheckIdGetQuery,
  useGetAllTrnRoutineServiceCheckEventGetQuery,
  useCreateTrnRoutineServiceCheckTrnRoutineServiceCheckEventPostMutation,
  useUpdateTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdPutMutation,
  useDeleteTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdDeleteMutation,
  useGetTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import RoutineServiceChecksListing from './RoutineServiceChecksListing';
import { Modal } from '@/components/ui/modal';
import RoutineServiceChecksForm from './RoutineServiceChecksForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function RoutineServiceChecksDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteTrnRoutineServiceCheck] =
    useDeleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDeleteMutation();

  const {
    data: fetchedTrnRoutineServiceCheckDetails,
    isFetching: isFetchingData,
    refetch: refetchTrnRoutineServiceCheckDetails
  } = useGetTrnRoutineServiceCheckTrnRoutineServiceCheckIdGetQuery(
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
    if (!fetchedTrnRoutineServiceCheckDetails) return;
    setSelectedItem(fetchedTrnRoutineServiceCheckDetails);
  }, [fetchedTrnRoutineServiceCheckDetails]);

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
        //await deleteTrnRoutineServiceCheck({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Routine Service Checks deleted successfully');
        //refetchTrnRoutineServiceCheckDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Routine Service Checks ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnRoutineServiceCheck.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/asset-management/routine-service-checks`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem
              ? 'Edit Routine Service Checks'
              : 'Create Routine Service Checks'
          }
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <RoutineServiceChecksForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnRoutineServiceCheckList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'RoutineServiceChecks Details'}
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
                  <p>{fetchedTrnRoutineServiceCheckDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Id:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.asset_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Name:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.asset_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Serial Number:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.serial_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Last Service Date:</p>
                  <p></p>
                  <p>
                    {fetchedTrnRoutineServiceCheckDetails?.last_service_date}
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>Service Date:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.service_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Service Id:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.service_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Check Sheet Id:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.check_sheet_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Check List Name:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.check_list_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Site Id:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.site_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Site Name:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.site_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Previous Counter Log Hours:</p>
                  <p></p>
                  <p>
                    {
                      fetchedTrnRoutineServiceCheckDetails?.previous_counter_log_hours
                    }
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>Current Counter Log Hours:</p>
                  <p></p>
                  <p>
                    {
                      fetchedTrnRoutineServiceCheckDetails?.current_counter_log_hours
                    }
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>Previous Drum Hours:</p>
                  <p></p>
                  <p>
                    {fetchedTrnRoutineServiceCheckDetails?.previous_drum_hours}
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>Current Drum Hours:</p>
                  <p></p>
                  <p>
                    {fetchedTrnRoutineServiceCheckDetails?.current_drum_hours}
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>Checklist Details:</p>
                  <p></p>
                  <p>
                    {fetchedTrnRoutineServiceCheckDetails?.checklist_details}
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedTrnRoutineServiceCheckDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedTrnRoutineServiceCheckDetails?.effective_start_date
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
                  Routine Service Checks
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

export default RoutineServiceChecksDetails;
