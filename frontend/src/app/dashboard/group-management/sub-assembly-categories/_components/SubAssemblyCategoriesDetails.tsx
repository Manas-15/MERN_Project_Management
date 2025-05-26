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
  useCreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPostMutation,
  useGetAllSetAstSubAssemblyCategorysSetAstSubAssemblyCategoryGetQuery,
  useUpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdPutMutation,
  useDeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteMutation,
  useGetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGetQuery,
  useGetAllSetAstSubAssemblyCategoryEventGetQuery,
  useCreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventPostMutation,
  useUpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdPutMutation,
  useDeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdDeleteMutation,
  useGetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import SubAssemblyCategoriesListing from './SubAssemblyCategoriesListing';
import { Modal } from '@/components/ui/modal';
import SubAssemblyCategoriesForm from './SubAssemblyCategoriesForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function SubAssemblyCategoriesDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteSetAstSubAssemblyCategory] =
    useDeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteMutation();

  const {
    data: fetchedSetAstSubAssemblyCategoryDetails,
    isFetching: isFetchingData,
    refetch: refetchSetAstSubAssemblyCategoryDetails
  } = useGetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGetQuery(
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
    if (!fetchedSetAstSubAssemblyCategoryDetails) return;
    setSelectedItem(fetchedSetAstSubAssemblyCategoryDetails);
  }, [fetchedSetAstSubAssemblyCategoryDetails]);

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
        //await deleteSetAstSubAssemblyCategory({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Sub Assembly Categories deleted successfully');
        //refetchSetAstSubAssemblyCategoryDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Sub Assembly Categories ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `setAstSubAssemblyCategory.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/group-management/sub-assembly-categories`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem
              ? 'Edit Sub Assembly Categories'
              : 'Create Sub Assembly Categories'
          }
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <SubAssemblyCategoriesForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchSetAstSubAssemblyCategoryList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={'SubAssemblyCategories Details'}
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
                  <p>{fetchedSetAstSubAssemblyCategoryDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedSetAstSubAssemblyCategoryDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Category Name:</p>
                  <p></p>
                  <p>
                    {fetchedSetAstSubAssemblyCategoryDetails?.category_name}
                  </p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedSetAstSubAssemblyCategoryDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedSetAstSubAssemblyCategoryDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedSetAstSubAssemblyCategoryDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedSetAstSubAssemblyCategoryDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedSetAstSubAssemblyCategoryDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedSetAstSubAssemblyCategoryDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>
                    {fetchedSetAstSubAssemblyCategoryDetails?.search_vector}
                  </p>
                </div>

                {/* <p>moment(
                            fetchedSetAstSubAssemblyCategoryDetails?.effective_start_date
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
                  Sub Assembly Categories
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

export default SubAssemblyCategoriesDetails;
