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
  useCreateRefSubAssemblyRefSubAssemblyPostMutation,
  useGetAllRefSubAssemblysRefSubAssemblyGetQuery,
  useUpdateRefSubAssemblyRefSubAssemblyIdPutMutation,
  useDeleteRefSubAssemblyRefSubAssemblyIdDeleteMutation,
  useGetRefSubAssemblyRefSubAssemblyIdGetQuery,
  useGetAllRefSubAssemblyEventGetQuery,
  useCreateRefSubAssemblyRefSubAssemblyEventPostMutation,
  useUpdateRefSubAssemblyRefSubAssemblyEventIdPutMutation,
  useDeleteRefSubAssemblyRefSubAssemblyEventIdDeleteMutation,
  useGetRefSubAssemblyRefSubAssemblyEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import SubAssembliesListing from './SubAssembliesListing';
import { Modal } from '@/components/ui/modal';
import SubAssembliesForm from './SubAssembliesForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function SubAssembliesDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteRefSubAssembly] =
    useDeleteRefSubAssemblyRefSubAssemblyIdDeleteMutation();

  const {
    data: fetchedRefSubAssemblyDetails,
    isFetching: isFetchingData,
    refetch: refetchRefSubAssemblyDetails
  } = useGetRefSubAssemblyRefSubAssemblyIdGetQuery(
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
    if (!fetchedRefSubAssemblyDetails) return;
    setSelectedItem(fetchedRefSubAssemblyDetails);
  }, [fetchedRefSubAssemblyDetails]);

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
        //await deleteRefSubAssembly({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Sub Assemblies deleted successfully');
        //refetchRefSubAssemblyDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Sub Assemblies ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `refSubAssembly.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/group-management/sub-assemblies`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={selectedItem ? 'Edit Sub Assemblies' : 'Create Sub Assemblies'}
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <SubAssembliesForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchRefSubAssemblyList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'SubAssemblies Details'}
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
                  <p>{fetchedRefSubAssemblyDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Serial Number:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.serial_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Name:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Category Id:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.category_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Manufacturer Id:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.manufacturer_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Manufacturer Name:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.manufacturer_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Site Id:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.site_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Site Name:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.site_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Status:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.status}</p>
                </div>

                <div>
                  <p className='font-semibold'>Status Name:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.status_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tags:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.tags}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tags Name:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.tags_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Machine Location:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.machine_location}</p>
                </div>

                <div>
                  <p className='font-semibold'>Location Name:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.location_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Purchase Date:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.purchase_date}</p>
                </div>

                <div>
                  <p className='font-semibold'>Purchase Price:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.purchase_price}</p>
                </div>

                <div>
                  <p className='font-semibold'>Recived With Asset:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.recived_with_asset}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedRefSubAssemblyDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedRefSubAssemblyDetails?.effective_start_date
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
                  Sub Assemblies
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

export default SubAssembliesDetails;
