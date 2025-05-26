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
  useCreateSaasCustomersSaasCustomersPostMutation,
  useGetAllSaasCustomerssSaasCustomersGetQuery,
  useUpdateSaasCustomersSaasCustomersIdPutMutation,
  useDeleteSaasCustomersSaasCustomersIdDeleteMutation,
  useGetSaasCustomersSaasCustomersIdGetQuery,
  useGetAllSaasCustomersEventGetQuery,
  useCreateSaasCustomersSaasCustomersEventPostMutation,
  useUpdateSaasCustomersSaasCustomersEventIdPutMutation,
  useDeleteSaasCustomersSaasCustomersEventIdDeleteMutation,
  useGetSaasCustomersSaasCustomersEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import CustomersListing from './CustomersListing';
import { Modal } from '@/components/ui/modal';
import CustomersForm from './CustomersForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function CustomersDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteSaasCustomers] =
    useDeleteSaasCustomersSaasCustomersIdDeleteMutation();

  const {
    data: fetchedSaasCustomersDetails,
    isFetching: isFetchingData,
    refetch: refetchSaasCustomersDetails
  } = useGetSaasCustomersSaasCustomersIdGetQuery(
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
    if (!fetchedSaasCustomersDetails) return;
    setSelectedItem(fetchedSaasCustomersDetails);
  }, [fetchedSaasCustomersDetails]);

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
        //await deleteSaasCustomers({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Customers deleted successfully');
        //refetchSaasCustomersDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Customers ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `saasCustomers.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/group-management/customers`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={selectedItem ? 'Edit Customers' : 'Create Customers'}
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <CustomersForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchSaasCustomersList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader title={'Customers Details'} ctaButtons={ctaButtons} />

      <div className='custom-scrollbar h-[80vh] overflow-y-auto py-4 pr-3'>
        <Card className='mx-auto mb-4 w-full'>
          <CardContent>
            <div className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='font-semibold'>Id:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Uniq Id:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.uniq_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>First Name:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.first_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Last Name:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.last_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Email:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.email}</p>
                </div>

                <div>
                  <p className='font-semibold'>Phone Number:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.phone_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Street:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.street}</p>
                </div>

                <div>
                  <p className='font-semibold'>City:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.city}</p>
                </div>

                <div>
                  <p className='font-semibold'>State:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.state}</p>
                </div>

                <div>
                  <p className='font-semibold'>Zipcode:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.zipcode}</p>
                </div>

                <div>
                  <p className='font-semibold'>Customer Organization:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.customer_organization}</p>
                </div>

                <div>
                  <p className='font-semibold'>Country:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.country}</p>
                </div>

                <div>
                  <p className='font-semibold'>Currency Id:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.currency_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Pincode:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.pincode}</p>
                </div>

                <div>
                  <p className='font-semibold'>Gstin:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.gstin}</p>
                </div>

                <div>
                  <p className='font-semibold'>Pan:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.pan}</p>
                </div>

                <div>
                  <p className='font-semibold'>Contact Person:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.contact_person}</p>
                </div>

                <div>
                  <p className='font-semibold'>Contact Number:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.contact_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Website:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.website}</p>
                </div>

                <div>
                  <p className='font-semibold'>Notes:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.notes}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Active:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.is_active}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.search_vector}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created By:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.created_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedSaasCustomersDetails?.is_deleted}</p>
                </div>

                {/* <p>moment(
                            fetchedSaasCustomersDetails?.effective_start_date
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
                  Customers
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

export default CustomersDetails;
