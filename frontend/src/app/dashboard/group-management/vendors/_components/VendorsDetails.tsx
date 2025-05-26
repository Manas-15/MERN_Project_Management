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
  useCreateRefVendorRefVendorPostMutation,
  useGetAllRefVendorsRefVendorGetQuery,
  useUpdateRefVendorRefVendorIdPutMutation,
  useDeleteRefVendorRefVendorIdDeleteMutation,
  useGetRefVendorRefVendorIdGetQuery,
  useGetAllRefVendorEventGetQuery,
  useCreateRefVendorRefVendorEventPostMutation,
  useUpdateRefVendorRefVendorEventIdPutMutation,
  useDeleteRefVendorRefVendorEventIdDeleteMutation,
  useGetRefVendorRefVendorEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import VendorsListing from './VendorsListing';
import { Modal } from '@/components/ui/modal';
import VendorsForm from './VendorsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function VendorsDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteRefVendor] = useDeleteRefVendorRefVendorIdDeleteMutation();

  const {
    data: fetchedRefVendorDetails,
    isFetching: isFetchingData,
    refetch: refetchRefVendorDetails
  } = useGetRefVendorRefVendorIdGetQuery(
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
    if (!fetchedRefVendorDetails) return;
    setSelectedItem(fetchedRefVendorDetails);
  }, [fetchedRefVendorDetails]);

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
        //await deleteRefVendor({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Vendors deleted successfully');
        //refetchRefVendorDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Vendors ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `refVendor.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/group-management/vendors`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={selectedItem ? 'Edit Vendors' : 'Create Vendors'}
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <VendorsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchRefVendorList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader title={'Vendors Details'} ctaButtons={ctaButtons} />

      <div className='custom-scrollbar h-[80vh] overflow-y-auto py-4 pr-3'>
        <Card className='mx-auto mb-4 w-full'>
          <CardContent>
            <div className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='font-semibold'>Id:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Vendor Name:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.vendor_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Vendor Code:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.vendor_code}</p>
                </div>

                <div>
                  <p className='font-semibold'>Notes:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.notes}</p>
                </div>

                <div>
                  <p className='font-semibold'>Address Lable:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.address_lable}</p>
                </div>

                <div>
                  <p className='font-semibold'>Address Line1:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.address_line1}</p>
                </div>

                <div>
                  <p className='font-semibold'>Address Line2:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.address_line2}</p>
                </div>

                <div>
                  <p className='font-semibold'>Landmark:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.landmark}</p>
                </div>

                <div>
                  <p className='font-semibold'>City:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.city}</p>
                </div>

                <div>
                  <p className='font-semibold'>State:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.state}</p>
                </div>

                <div>
                  <p className='font-semibold'>Country:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.country}</p>
                </div>

                <div>
                  <p className='font-semibold'>District:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.district}</p>
                </div>

                <div>
                  <p className='font-semibold'>Pincode:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.pincode}</p>
                </div>

                <div>
                  <p className='font-semibold'>Gstin:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.gstin}</p>
                </div>

                <div>
                  <p className='font-semibold'>Pan:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.pan}</p>
                </div>

                <div>
                  <p className='font-semibold'>Contact Person:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.contact_person}</p>
                </div>

                <div>
                  <p className='font-semibold'>Contact Number:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.contact_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Email:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.email}</p>
                </div>

                <div>
                  <p className='font-semibold'>Website:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.website}</p>
                </div>

                <div>
                  <p className='font-semibold'>Vendor Domain:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.vendor_domain}</p>
                </div>

                <div>
                  <p className='font-semibold'>Authorization Name:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.authorization_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Area Of Ops State:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.area_of_ops_state}</p>
                </div>

                <div>
                  <p className='font-semibold'>Area Of Ops District:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.area_of_ops_district}</p>
                </div>

                <div>
                  <p className='font-semibold'>Active Flag:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.active_flag}</p>
                </div>

                <div>
                  <p className='font-semibold'>Create By:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.create_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.is_deleted}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedRefVendorDetails?.search_vector}</p>
                </div>

                {/* <p>moment(
                            fetchedRefVendorDetails?.effective_start_date
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
                  Vendors
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

export default VendorsDetails;
