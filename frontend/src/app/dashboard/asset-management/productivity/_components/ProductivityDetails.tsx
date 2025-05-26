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
  useCreateTrnProductivityTrnProductivityPostMutation,
  useGetAllTrnProductivitysTrnProductivityGetQuery,
  useUpdateTrnProductivityTrnProductivityIdPutMutation,
  useDeleteTrnProductivityTrnProductivityIdDeleteMutation,
  useGetTrnProductivityTrnProductivityIdGetQuery,
  useGetAllTrnProductivityEventGetQuery,
  useCreateTrnProductivityTrnProductivityEventPostMutation,
  useUpdateTrnProductivityTrnProductivityEventIdPutMutation,
  useDeleteTrnProductivityTrnProductivityEventIdDeleteMutation,
  useGetTrnProductivityTrnProductivityEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import ProductivityListing from './ProductivityListing';
import { Modal } from '@/components/ui/modal';
import ProductivityForm from './ProductivityForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function ProductivityDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteTrnProductivity] =
    useDeleteTrnProductivityTrnProductivityIdDeleteMutation();

  const {
    data: fetchedTrnProductivityDetails,
    isFetching: isFetchingData,
    refetch: refetchTrnProductivityDetails
  } = useGetTrnProductivityTrnProductivityIdGetQuery(
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
    if (!fetchedTrnProductivityDetails) return;
    setSelectedItem(fetchedTrnProductivityDetails);
  }, [fetchedTrnProductivityDetails]);

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
        //await deleteTrnProductivity({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Productivity deleted successfully');
        //refetchTrnProductivityDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Productivity ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnProductivity.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/asset-management/productivity`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={selectedItem ? 'Edit Productivity' : 'Create Productivity'}
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <ProductivityForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnProductivityList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'Productivity Details'}
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
                  <p>{fetchedTrnProductivityDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Fnyr:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.trn_fnyr}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Number:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.trn_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Transaction Date:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.trn_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Roster Id:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.roster_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Id:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.asset_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Asset Name:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.asset_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Site Id:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.site_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Workstation Id:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.workstation_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Workstation Name:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.workstation_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Activity Name Id:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.activity_name_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Activity Name:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.activity_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Net Productivity:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.net_productivity}</p>
                </div>

                <div>
                  <p className='font-semibold'>Productivity Unit:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.productivity_unit}</p>
                </div>

                <div>
                  <p className='font-semibold'>No Of Trips:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.no_of_trips}</p>
                </div>

                <div>
                  <p className='font-semibold'>Material Name Id:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.material_name_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Material Name:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.material_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Employee Id:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.employee_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Employee Name:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.employee_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Attachment:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.attachment}</p>
                </div>

                <div>
                  <p className='font-semibold'>Remarks:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.remarks}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedTrnProductivityDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedTrnProductivityDetails?.effective_start_date
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
                  Productivity
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

export default ProductivityDetails;
