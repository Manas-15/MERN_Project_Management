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
  useCreateSaasChatsSaasChatsPostMutation,
  useGetAllSaasChatssSaasChatsGetQuery,
  useUpdateSaasChatsSaasChatsIdPutMutation,
  useDeleteSaasChatsSaasChatsIdDeleteMutation,
  useGetSaasChatsSaasChatsIdGetQuery,
  useGetAllSaasChatsEventGetQuery,
  useCreateSaasChatsSaasChatsEventPostMutation,
  useUpdateSaasChatsSaasChatsEventIdPutMutation,
  useDeleteSaasChatsSaasChatsEventIdDeleteMutation,
  useGetSaasChatsSaasChatsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import ChatsListing from './ChatsListing';
import { Modal } from '@/components/ui/modal';
import ChatsForm from './ChatsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

function ChatsDetails({ id }: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [deleteSaasChats] = useDeleteSaasChatsSaasChatsIdDeleteMutation();

  const {
    data: fetchedSaasChatsDetails,
    isFetching: isFetchingData,
    refetch: refetchSaasChatsDetails
  } = useGetSaasChatsSaasChatsIdGetQuery(
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
    if (!fetchedSaasChatsDetails) return;
    setSelectedItem(fetchedSaasChatsDetails);
  }, [fetchedSaasChatsDetails]);

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
        //await deleteSaasChats({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Chats deleted successfully');
        //refetchSaasChatsDetails(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Chats ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `saasChats.License`
      //component: VendorLicenseListing
    }
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/audit-monitoring/chats`);
  };

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={selectedItem ? 'Edit Chats' : 'Create Chats'}
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className='flex w-full items-center justify-end space-x-2 pt-6'>
            {/* <ChatsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchSaasChatsList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader title={'Chats Details'} ctaButtons={ctaButtons} />

      <div className='custom-scrollbar h-[80vh] overflow-y-auto py-4 pr-3'>
        <Card className='mx-auto mb-4 w-full'>
          <CardContent>
            <div className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='font-semibold'>Id:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Tenant Id:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.tenant_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Thread:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.thread}</p>
                </div>

                <div>
                  <p className='font-semibold'>User Id:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.user_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Receiver Id:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.receiver_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Chat Group Id:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.chat_group_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Group Receiver Id:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.group_receiver_id}</p>
                </div>

                <div>
                  <p className='font-semibold'>Message:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.message}</p>
                </div>

                <div>
                  <p className='font-semibold'>Attachment:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.attachment}</p>
                </div>

                <div>
                  <p className='font-semibold'>Extension:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.extension}</p>
                </div>

                <div>
                  <p className='font-semibold'>Ip:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.ip}</p>
                </div>

                <div>
                  <p className='font-semibold'>Search Vector:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.search_vector}</p>
                </div>

                <div>
                  <p className='font-semibold'>Created At:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.created_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Updated At:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.updated_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Deleted At:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.deleted_at}</p>
                </div>

                <div>
                  <p className='font-semibold'>Is Deleted:</p>
                  <p></p>
                  <p>{fetchedSaasChatsDetails?.is_deleted}</p>
                </div>

                {/* <p>moment(
                            fetchedSaasChatsDetails?.effective_start_date
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
                  Chats
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

export default ChatsDetails;
