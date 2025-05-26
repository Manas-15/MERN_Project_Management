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
  useCreateSaasEntitySharesSaasEntitySharesPostMutation,
  useGetAllSaasEntitySharessSaasEntitySharesGetQuery,
  useUpdateSaasEntitySharesSaasEntitySharesIdPutMutation,
  useDeleteSaasEntitySharesSaasEntitySharesIdDeleteMutation,
  useGetSaasEntitySharesSaasEntitySharesIdGetQuery,
  useGetAllSaasEntitySharesEventGetQuery,
  useCreateSaasEntitySharesSaasEntitySharesEventPostMutation,
  useUpdateSaasEntitySharesSaasEntitySharesEventIdPutMutation,
  useDeleteSaasEntitySharesSaasEntitySharesEventIdDeleteMutation,
  useGetSaasEntitySharesSaasEntitySharesEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import EntitySharesListing from './EntitySharesListing';
import { Modal } from '@/components/ui/modal';
import EntitySharesForm from './EntitySharesForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function EntitySharesDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteSaasEntityShares] =
    useDeleteSaasEntitySharesSaasEntitySharesIdDeleteMutation();

  const {
    data: fetchedSaasEntitySharesDetails,
    isFetching: isFetchingData,
    refetch: refetchSaasEntitySharesDetails
  } = useGetSaasEntitySharesSaasEntitySharesIdGetQuery(
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
    if (!fetchedSaasEntitySharesDetails) return;
    setSelectedItem(fetchedSaasEntitySharesDetails);
  }, [fetchedSaasEntitySharesDetails]);

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
        //await deleteSaasEntityShares({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Entity Shares deleted successfully');
        //refetchSaasEntitySharesDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Entity Shares ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `saasEntityShares.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/audit-monitoring/entity-shares`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={selectedItem ? 'Edit Entity Shares' : 'Create Entity Shares'}
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <EntitySharesForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchSaasEntitySharesList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'EntityShares Details'}
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
                  <p>{fetchedSaasEntitySharesDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedSaasEntitySharesDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Entity Id:</p>
                  <p></p>
                  <p>{fetchedSaasEntitySharesDetails?.entity_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Entity Type:</p>
                  <p></p>
                  <p>{fetchedSaasEntitySharesDetails?.entity_type}</p>
                </div>

                <div>
                  <p className='font-semibold'>Uniq Id:</p>
                  <p></p>
                  <p>{fetchedSaasEntitySharesDetails?.uniq_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Entity View:</p>
                  <p></p>
                  <p>{fetchedSaasEntitySharesDetails?.entity_view}</p>
                </div>

                <div>
                  <p className='font-semibold'>Expire Date:</p>
                  <p></p>
                  <p>{fetchedSaasEntitySharesDetails?.expire_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedSaasEntitySharesDetails?.search_vector}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created By:</p>
                  <p></p>
                  <p>{fetchedSaasEntitySharesDetails?.created_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedSaasEntitySharesDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedSaasEntitySharesDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedSaasEntitySharesDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedSaasEntitySharesDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedSaasEntitySharesDetails?.is_deleted}</p>
                </div>

                {/* <p>moment(
                            fetchedSaasEntitySharesDetails?.effective_start_date
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
                  Entity Shares
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

export default EntitySharesDetails;
