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
  useCreateTrnAssetRosterTrnAssetRosterPostMutation,
  useGetAllTrnAssetRostersTrnAssetRosterGetQuery,
  useUpdateTrnAssetRosterTrnAssetRosterIdPutMutation,
  useDeleteTrnAssetRosterTrnAssetRosterIdDeleteMutation,
  useGetTrnAssetRosterTrnAssetRosterIdGetQuery,
  useGetAllTrnAssetRosterEventGetQuery,
  useCreateTrnAssetRosterTrnAssetRosterEventPostMutation,
  useUpdateTrnAssetRosterTrnAssetRosterEventIdPutMutation,
  useDeleteTrnAssetRosterTrnAssetRosterEventIdDeleteMutation,
  useGetTrnAssetRosterTrnAssetRosterEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import AssetRostersListing from './AssetRostersListing';
import { Modal } from '@/components/ui/modal';
import AssetRostersForm from './AssetRostersForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function AssetRostersDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteTrnAssetRoster] =
    useDeleteTrnAssetRosterTrnAssetRosterIdDeleteMutation();

  const {
    data: fetchedTrnAssetRosterDetails,
    isFetching: isFetchingData,
    refetch: refetchTrnAssetRosterDetails
  } = useGetTrnAssetRosterTrnAssetRosterIdGetQuery(
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
    if (!fetchedTrnAssetRosterDetails) return;
    setSelectedItem(fetchedTrnAssetRosterDetails);
  }, [fetchedTrnAssetRosterDetails]);

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
        //await deleteTrnAssetRoster({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Asset Rosters deleted successfully');
        //refetchTrnAssetRosterDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Asset Rosters ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnAssetRoster.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/asset-management/asset-rosters`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={selectedItem ? 'Edit Asset Rosters' : 'Create Asset Rosters'}
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <AssetRostersForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnAssetRosterList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'AssetRosters Details'}
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
                  <p>{fetchedTrnAssetRosterDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Code:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.asset_code}</p>
                </div>

                <div>
                  <p className='font-semibold'>Roster Id:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.roster_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Site Id:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.site_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Site Name:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.site_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Workstation Id:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.workstation_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Workstation Name:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.workstation_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Activation Date:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.activation_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedTrnAssetRosterDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedTrnAssetRosterDetails?.effective_start_date
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
                  Asset Rosters
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

export default AssetRostersDetails;
