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
  useCreateTrnAssetMovmentTrnAssetMovmentPostMutation,
  useGetAllTrnAssetMovmentsTrnAssetMovmentGetQuery,
  useUpdateTrnAssetMovmentTrnAssetMovmentIdPutMutation,
  useDeleteTrnAssetMovmentTrnAssetMovmentIdDeleteMutation,
  useGetTrnAssetMovmentTrnAssetMovmentIdGetQuery,
  useGetAllTrnAssetMovmentEventGetQuery,
  useCreateTrnAssetMovmentTrnAssetMovmentEventPostMutation,
  useUpdateTrnAssetMovmentTrnAssetMovmentEventIdPutMutation,
  useDeleteTrnAssetMovmentTrnAssetMovmentEventIdDeleteMutation,
  useGetTrnAssetMovmentTrnAssetMovmentEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import AssetMovementsListing from './AssetMovementsListing';
import { Modal } from '@/components/ui/modal';
import AssetMovementsForm from './AssetMovementsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function AssetMovementsDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteTrnAssetMovment] =
    useDeleteTrnAssetMovmentTrnAssetMovmentIdDeleteMutation();

  const {
    data: fetchedTrnAssetMovmentDetails,
    isFetching: isFetchingData,
    refetch: refetchTrnAssetMovmentDetails
  } = useGetTrnAssetMovmentTrnAssetMovmentIdGetQuery(
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
    if (!fetchedTrnAssetMovmentDetails) return;
    setSelectedItem(fetchedTrnAssetMovmentDetails);
  }, [fetchedTrnAssetMovmentDetails]);

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
        //await deleteTrnAssetMovment({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Asset Movements deleted successfully');
        //refetchTrnAssetMovmentDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Asset Movements ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnAssetMovment.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/asset-management/asset-movements`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Asset Movements' : 'Create Asset Movements'
          }
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <AssetMovementsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnAssetMovmentList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'AssetMovements Details'}
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
                  <p>{fetchedTrnAssetMovmentDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Fnyr:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.trn_fnyr}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Number:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.trn_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Date:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.trn_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Id:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.asset_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Name:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.asset_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Site Change Date:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.site_change_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>From Site Id:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.from_site_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>From Asset Name:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.from_asset_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>To Site Id:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.to_site_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>To Asset Name:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.to_asset_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedTrnAssetMovmentDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedTrnAssetMovmentDetails?.effective_start_date
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
                  Asset Movements
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

export default AssetMovementsDetails;
