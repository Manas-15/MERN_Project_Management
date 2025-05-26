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
  useCreateSaasFlexFieldsSaasFlexFieldsPostMutation,
  useGetAllSaasFlexFieldssSaasFlexFieldsGetQuery,
  useUpdateSaasFlexFieldsSaasFlexFieldsIdPutMutation,
  useDeleteSaasFlexFieldsSaasFlexFieldsIdDeleteMutation,
  useGetSaasFlexFieldsSaasFlexFieldsIdGetQuery,
  useGetAllSaasFlexFieldsEventGetQuery,
  useCreateSaasFlexFieldsSaasFlexFieldsEventPostMutation,
  useUpdateSaasFlexFieldsSaasFlexFieldsEventIdPutMutation,
  useDeleteSaasFlexFieldsSaasFlexFieldsEventIdDeleteMutation,
  useGetSaasFlexFieldsSaasFlexFieldsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import FlexibleFieldsListing from './FlexibleFieldsListing';
import { Modal } from '@/components/ui/modal';
import FlexibleFieldsForm from './FlexibleFieldsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function FlexibleFieldsDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteSaasFlexFields] =
    useDeleteSaasFlexFieldsSaasFlexFieldsIdDeleteMutation();

  const {
    data: fetchedSaasFlexFieldsDetails,
    isFetching: isFetchingData,
    refetch: refetchSaasFlexFieldsDetails
  } = useGetSaasFlexFieldsSaasFlexFieldsIdGetQuery(
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
    if (!fetchedSaasFlexFieldsDetails) return;
    setSelectedItem(fetchedSaasFlexFieldsDetails);
  }, [fetchedSaasFlexFieldsDetails]);

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
        //await deleteSaasFlexFields({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Flexible Fields deleted successfully');
        //refetchSaasFlexFieldsDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Flexible Fields ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `saasFlexFields.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/audit-monitoring/flexible-fields`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Flexible Fields' : 'Create Flexible Fields'
          }
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <FlexibleFieldsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchSaasFlexFieldsList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'FlexibleFields Details'}
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
                  <p>{fetchedSaasFlexFieldsDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedSaasFlexFieldsDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Organization Id:</p>
                  <p></p>
                  <p>{fetchedSaasFlexFieldsDetails?.organization_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Description:</p>
                  <p></p>
                  <p>{fetchedSaasFlexFieldsDetails?.description}</p>
                </div>

                <div>
                  <p className='font-semibold'>Field Name:</p>
                  <p></p>
                  <p>{fetchedSaasFlexFieldsDetails?.field_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Field Type:</p>
                  <p></p>
                  <p>{fetchedSaasFlexFieldsDetails?.field_type}</p>
                </div>

                <div>
                  <p className='font-semibold'>Flex Feild Details:</p>
                  <p></p>
                  <p>{fetchedSaasFlexFieldsDetails?.flex_feild_details}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Global:</p>
                  <p></p>
                  <p>{fetchedSaasFlexFieldsDetails?.is_global}</p>
                </div>

                <div>
                  <p className='font-semibold'>Entity Applied:</p>
                  <p></p>
                  <p>{fetchedSaasFlexFieldsDetails?.entity_applied}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Active:</p>
                  <p></p>
                  <p>{fetchedSaasFlexFieldsDetails?.is_active}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedSaasFlexFieldsDetails?.search_vector}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedSaasFlexFieldsDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedSaasFlexFieldsDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedSaasFlexFieldsDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedSaasFlexFieldsDetails?.is_deleted}</p>
                </div>

                {/* <p>moment(
                            fetchedSaasFlexFieldsDetails?.effective_start_date
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
                  Flexible Fields
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

export default FlexibleFieldsDetails;
