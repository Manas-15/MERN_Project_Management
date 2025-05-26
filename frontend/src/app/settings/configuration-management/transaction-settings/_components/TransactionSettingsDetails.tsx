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
   
  useCreateTransactionNoSettingsTransactionNoSettingsPostMutation, 
   
  useGetAllTransactionNoSettingssTransactionNoSettingsGetQuery, 
   
  useUpdateTransactionNoSettingsTransactionNoSettingsIdPutMutation, 
   
  useDeleteTransactionNoSettingsTransactionNoSettingsIdDeleteMutation, 
   
  useGetTransactionNoSettingsTransactionNoSettingsIdGetQuery, 
   
  useGetAllTransactionNoSettingsEventGetQuery, 
   
  useCreateTransactionNoSettingsTransactionNoSettingsEventPostMutation, 
   
  useUpdateTransactionNoSettingsTransactionNoSettingsEventIdPutMutation, 
   
  useDeleteTransactionNoSettingsTransactionNoSettingsEventIdDeleteMutation, 
   
  useGetTransactionNoSettingsTransactionNoSettingsEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import TransactionSettingsListing from './TransactionSettingsListing';
import { Modal } from '@/components/ui/modal';
import TransactionSettingsForm from './TransactionSettingsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function TransactionSettingsDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteTransactionNoSettings] = useDeleteTransactionNoSettingsTransactionNoSettingsIdDeleteMutation();

   const { data: fetchedTransactionNoSettingsDetails,
     isFetching: isFetchingData,
     refetch: refetchTransactionNoSettingsDetails
    } = useGetTransactionNoSettingsTransactionNoSettingsIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedTransactionNoSettingsDetails) return;
     setSelectedItem(fetchedTransactionNoSettingsDetails);
   }, [fetchedTransactionNoSettingsDetails]);

  const handleCloseModal = () => {
    setIsCreatePopupOpen(false);
    setSelectedItem(null);
  };

  const ctaButtons = [
   {/* {
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
    }, */},
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
        //await deleteTransactionNoSettings({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Transaction Settings deleted successfully');
        //refetchTransactionNoSettingsDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Transaction Settings ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `transactionNoSettings.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/settings/configuration-management/transaction-settings`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Transaction Settings' : 'Create Transaction Settings'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <TransactionSettingsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTransactionNoSettingsList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'TransactionSettings Details'
        }
        ctaButtons={ctaButtons}
      />

      <div className='custom-scrollbar h-[80vh] overflow-y-auto py-4 pr-3'>
          <Card className="mx-auto mb-4 w-full">
            
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                   
                      <div>
                        <p className="font-semibold">Id:</p>
                        <p></p>
                        <p>{fetchedTransactionNoSettingsDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedTransactionNoSettingsDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Organization Id:</p>
                        <p></p>
                        <p>{fetchedTransactionNoSettingsDetails?.organization_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Associated To:</p>
                        <p></p>
                        <p>{fetchedTransactionNoSettingsDetails?.associated_to }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">System Generate Id:</p>
                        <p></p>
                        <p>{fetchedTransactionNoSettingsDetails?.system_generate_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Prefix:</p>
                        <p></p>
                        <p>{fetchedTransactionNoSettingsDetails?.prefix }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Num Fmt:</p>
                        <p></p>
                        <p>{fetchedTransactionNoSettingsDetails?.num_fmt }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Global:</p>
                        <p></p>
                        <p>{fetchedTransactionNoSettingsDetails?.is_global }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Applicable Date:</p>
                        <p></p>
                        <p>{fetchedTransactionNoSettingsDetails?.applicable_date }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedTransactionNoSettingsDetails?.search_vector }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedTransactionNoSettingsDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedTransactionNoSettingsDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedTransactionNoSettingsDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedTransactionNoSettingsDetails?.is_deleted }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedTransactionNoSettingsDetails?.effective_start_date
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
                  Transaction Settings
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

export default TransactionSettingsDetails;