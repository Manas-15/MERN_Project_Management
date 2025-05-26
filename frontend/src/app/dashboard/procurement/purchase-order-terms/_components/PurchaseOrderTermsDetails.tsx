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
   
  useCreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsPostMutation, 
   
  useGetAllTrnPurchaseOrderTermssTrnPurchaseOrderTermsGetQuery, 
   
  useUpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPutMutation, 
   
  useDeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDeleteMutation, 
   
  useGetTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGetQuery, 
   
  useGetAllTrnPurchaseOrderTermsEventGetQuery, 
   
  useCreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventPostMutation, 
   
  useUpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdPutMutation, 
   
  useDeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdDeleteMutation, 
   
  useGetTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import PurchaseOrderTermsListing from './PurchaseOrderTermsListing';
import { Modal } from '@/components/ui/modal';
import PurchaseOrderTermsForm from './PurchaseOrderTermsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function PurchaseOrderTermsDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteTrnPurchaseOrderTerms] = useDeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDeleteMutation();

   const { data: fetchedTrnPurchaseOrderTermsDetails,
     isFetching: isFetchingData,
     refetch: refetchTrnPurchaseOrderTermsDetails
    } = useGetTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedTrnPurchaseOrderTermsDetails) return;
     setSelectedItem(fetchedTrnPurchaseOrderTermsDetails);
   }, [fetchedTrnPurchaseOrderTermsDetails]);

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
        //await deleteTrnPurchaseOrderTerms({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Purchase Order Terms deleted successfully');
        //refetchTrnPurchaseOrderTermsDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Purchase Order Terms ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnPurchaseOrderTerms.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/procurement/purchase-order-terms`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Purchase Order Terms' : 'Create Purchase Order Terms'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <PurchaseOrderTermsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnPurchaseOrderTermsList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'PurchaseOrderTerms Details'
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
                        <p>{fetchedTrnPurchaseOrderTermsDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Po Id:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseOrderTermsDetails?.po_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Po Fnyr:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseOrderTermsDetails?.po_fnyr }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Term Id:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseOrderTermsDetails?.term_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Term Desc:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseOrderTermsDetails?.term_desc }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseOrderTermsDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Create By:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseOrderTermsDetails?.create_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseOrderTermsDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseOrderTermsDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseOrderTermsDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseOrderTermsDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseOrderTermsDetails?.is_deleted }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedTrnPurchaseOrderTermsDetails?.search_vector }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedTrnPurchaseOrderTermsDetails?.effective_start_date
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
                  Purchase Order Terms
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

export default PurchaseOrderTermsDetails;