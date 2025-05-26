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
  useCreateRefFuelStationRefFuelStationPostMutation,
  useGetAllRefFuelStationsRefFuelStationGetQuery,
  useUpdateRefFuelStationRefFuelStationIdPutMutation,
  useDeleteRefFuelStationRefFuelStationIdDeleteMutation,
  useGetRefFuelStationRefFuelStationIdGetQuery,
  useGetAllRefFuelStationEventGetQuery,
  useCreateRefFuelStationRefFuelStationEventPostMutation,
  useUpdateRefFuelStationRefFuelStationEventIdPutMutation,
  useDeleteRefFuelStationRefFuelStationEventIdDeleteMutation,
  useGetRefFuelStationRefFuelStationEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import FuelStationsListing from './FuelStationsListing';
import { Modal } from '@/components/ui/modal';
import FuelStationsForm from './FuelStationsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function FuelStationsDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteRefFuelStation] =
    useDeleteRefFuelStationRefFuelStationIdDeleteMutation();

  const {
    data: fetchedRefFuelStationDetails,
    isFetching: isFetchingData,
    refetch: refetchRefFuelStationDetails
  } = useGetRefFuelStationRefFuelStationIdGetQuery(
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
    if (!fetchedRefFuelStationDetails) return;
    setSelectedItem(fetchedRefFuelStationDetails);
  }, [fetchedRefFuelStationDetails]);

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
        //await deleteRefFuelStation({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Fuel Stations deleted successfully');
        //refetchRefFuelStationDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Fuel Stations ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `refFuelStation.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/settings/vendors-parties/fuel-stations`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={selectedItem ? 'Edit Fuel Stations' : 'Create Fuel Stations'}
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <FuelStationsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchRefFuelStationList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'FuelStations Details'}
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
                  <p>{fetchedRefFuelStationDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Serial Number:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.serial_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fule Station Name:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.fule_station_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fule Station Type:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.fule_station_type}</p>
                </div>

                <div>
                  <p className='font-semibold'>Address:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.address}</p>
                </div>

                <div>
                  <p className='font-semibold'>Fuel Type:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.fuel_type}</p>
                </div>

                <div>
                  <p className='font-semibold'>Site Id:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.site_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>All Sites Indicator:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.all_sites_indicator}</p>
                </div>

                <div>
                  <p className='font-semibold'>Remarks:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.remarks}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedRefFuelStationDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedRefFuelStationDetails?.effective_start_date
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
                  Fuel Stations
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

export default FuelStationsDetails;
