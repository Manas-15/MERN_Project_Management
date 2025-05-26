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
   
  useCreateSetTenantWorkflowsSetTenantWorkflowsPostMutation, 
   
  useGetAllSetTenantWorkflowssSetTenantWorkflowsGetQuery, 
   
  useUpdateSetTenantWorkflowsSetTenantWorkflowsIdPutMutation, 
   
  useDeleteSetTenantWorkflowsSetTenantWorkflowsIdDeleteMutation, 
   
  useGetSetTenantWorkflowsSetTenantWorkflowsIdGetQuery, 
   
  useGetAllSetTenantWorkflowsEventGetQuery, 
   
  useCreateSetTenantWorkflowsSetTenantWorkflowsEventPostMutation, 
   
  useUpdateSetTenantWorkflowsSetTenantWorkflowsEventIdPutMutation, 
   
  useDeleteSetTenantWorkflowsSetTenantWorkflowsEventIdDeleteMutation, 
   
  useGetSetTenantWorkflowsSetTenantWorkflowsEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import TenantWorkflowsListing from './TenantWorkflowsListing';
import { Modal } from '@/components/ui/modal';
import TenantWorkflowsForm from './TenantWorkflowsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function TenantWorkflowsDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteSetTenantWorkflows] = useDeleteSetTenantWorkflowsSetTenantWorkflowsIdDeleteMutation();

   const { data: fetchedSetTenantWorkflowsDetails,
     isFetching: isFetchingData,
     refetch: refetchSetTenantWorkflowsDetails
    } = useGetSetTenantWorkflowsSetTenantWorkflowsIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedSetTenantWorkflowsDetails) return;
     setSelectedItem(fetchedSetTenantWorkflowsDetails);
   }, [fetchedSetTenantWorkflowsDetails]);

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
        //await deleteSetTenantWorkflows({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Tenant Workflows deleted successfully');
        //refetchSetTenantWorkflowsDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Tenant Workflows ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `setTenantWorkflows.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/settings/configuration-management/tenant-workflows`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Tenant Workflows' : 'Create Tenant Workflows'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <TenantWorkflowsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchSetTenantWorkflowsList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'TenantWorkflows Details'
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
                        <p>{fetchedSetTenantWorkflowsDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedSetTenantWorkflowsDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Global:</p>
                        <p></p>
                        <p>{fetchedSetTenantWorkflowsDetails?.is_global }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Organization Id:</p>
                        <p></p>
                        <p>{fetchedSetTenantWorkflowsDetails?.organization_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Entity Type:</p>
                        <p></p>
                        <p>{fetchedSetTenantWorkflowsDetails?.entity_type }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Workflow Id:</p>
                        <p></p>
                        <p>{fetchedSetTenantWorkflowsDetails?.workflow_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Stage Name:</p>
                        <p></p>
                        <p>{fetchedSetTenantWorkflowsDetails?.stage_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Status Sequence:</p>
                        <p></p>
                        <p>{fetchedSetTenantWorkflowsDetails?.status_sequence }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Default:</p>
                        <p></p>
                        <p>{fetchedSetTenantWorkflowsDetails?.is_default }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Enabled:</p>
                        <p></p>
                        <p>{fetchedSetTenantWorkflowsDetails?.is_enabled }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedSetTenantWorkflowsDetails?.search_vector }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedSetTenantWorkflowsDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedSetTenantWorkflowsDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedSetTenantWorkflowsDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedSetTenantWorkflowsDetails?.is_deleted }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedSetTenantWorkflowsDetails?.effective_start_date
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
                  Tenant Workflows
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

export default TenantWorkflowsDetails;