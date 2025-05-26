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
  useCreateTrnHrEmployeeAssetTrnHrEmployeeAssetPostMutation,
  useGetAllTrnHrEmployeeAssetsTrnHrEmployeeAssetGetQuery,
  useUpdateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPutMutation,
  useDeleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDeleteMutation,
  useGetTrnHrEmployeeAssetTrnHrEmployeeAssetIdGetQuery,
  useGetAllTrnHrEmployeeAssetEventGetQuery,
  useCreateTrnHrEmployeeAssetTrnHrEmployeeAssetEventPostMutation,
  useUpdateTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdPutMutation,
  useDeleteTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdDeleteMutation,
  useGetTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import EmployeeAssetsListing from './EmployeeAssetsListing';
import { Modal } from '@/components/ui/modal';
import EmployeeAssetsForm from './EmployeeAssetsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function EmployeeAssetsDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteTrnHrEmployeeAsset] =
    useDeleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDeleteMutation();

  const {
    data: fetchedTrnHrEmployeeAssetDetails,
    isFetching: isFetchingData,
    refetch: refetchTrnHrEmployeeAssetDetails
  } = useGetTrnHrEmployeeAssetTrnHrEmployeeAssetIdGetQuery(
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
    if (!fetchedTrnHrEmployeeAssetDetails) return;
    setSelectedItem(fetchedTrnHrEmployeeAssetDetails);
  }, [fetchedTrnHrEmployeeAssetDetails]);

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
        //await deleteTrnHrEmployeeAsset({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Employee Assets deleted successfully');
        //refetchTrnHrEmployeeAssetDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Employee Assets ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnHrEmployeeAsset.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/employee-management/employee-assets`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Employee Assets' : 'Create Employee Assets'
          }
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <EmployeeAssetsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnHrEmployeeAssetList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'EmployeeAssets Details'}
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
                  <p>{fetchedTrnHrEmployeeAssetDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Site Id:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.asset_site_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Site Name:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.site_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Change Date:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.change_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Id:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.asset_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Name:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.asset_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Operator Id:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.operator_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Operator Name:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.operator_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Supervisior Id:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.supervisior_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Supervisior Name:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.supervisior_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Engineers Id:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.engineers_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Engineers Name:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.engineers_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedTrnHrEmployeeAssetDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedTrnHrEmployeeAssetDetails?.effective_start_date
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
                  Employee Assets
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

export default EmployeeAssetsDetails;
