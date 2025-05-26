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
  useGetTenantUsersTenantsIdUsersGetQuery,
  useUpdateTenantUserTenantsIdUsersUserIdPatchMutation
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import UsersListing from './UsersListing';
import { Modal } from '@/components/ui/modal';
import UsersForm from './UsersForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function UsersDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // const [deleteSaasUser] = useDeleteSaasUserSaasUserIdDeleteMutation();

  const {
    data: fetchedSaasUserDetails,
    isFetching: isFetchingData,
    refetch: refetchSaasUserDetails
  } = useGetTenantUsersTenantsIdUsersGetQuery(
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
    if (!fetchedSaasUserDetails) return;
    setSelectedItem(fetchedSaasUserDetails);
  }, [fetchedSaasUserDetails]);

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
        //await deleteSaasUser({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Users deleted successfully');
        //refetchSaasUserDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Users ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `saasUser.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/settings/users/users`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={selectedItem ? 'Edit Users' : 'Create Users'}
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <UsersForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchSaasUserList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader title={'Users Details'} ctaButtons={ctaButtons} />

      <div className='custom-scrollbar h-[80vh] overflow-y-auto py-4 pr-3'>
        <Card className='mx-auto mb-4 w-full'>
          <CardContent>
            <div className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='font-semibold'>Id:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Email:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.email}</p>
                </div>

                <div>
                  <p className='font-semibold'>Hashed Password:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.hashed_password}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Active:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.is_active}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Superuser:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.is_superuser}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Verified:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.is_verified}</p>
                </div>

                <div>
                  <p className='font-semibold'>First Name:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.first_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Last Name:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.last_name}</p>
                </div>

                <div>
                  <p className='font-semibold'>Profile Image:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.profile_image}</p>
                </div>

                <div>
                  <p className='font-semibold'>File Id:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.file_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Invite Token:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.invite_token}</p>
                </div>

                <div>
                  <p className='font-semibold'>Time Zone:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.time_zone}</p>
                </div>

                <div>
                  <p className='font-semibold'>Time Format:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.time_format}</p>
                </div>

                <div>
                  <p className='font-semibold'>Phone Number:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.phone_number}</p>
                </div>

                <div>
                  <p className='font-semibold'>Language:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.language}</p>
                </div>

                <div>
                  <p className='font-semibold'>Source:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.source}</p>
                </div>

                <div>
                  <p className='font-semibold'>User Import Id:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.user_import_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.search_vector}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created By:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.created_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated By:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.updated_by}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedSaasUserDetails?.is_deleted}</p>
                </div>

                {/* <p>moment(
                            fetchedSaasUserDetails?.effective_start_date
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
                  Users
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

export default UsersDetails;
