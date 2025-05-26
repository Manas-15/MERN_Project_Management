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
   
  useCreateTrnEntityWorkflowTrnEntityWorkflowPostMutation, 
   
  useGetAllTrnEntityWorkflowsTrnEntityWorkflowGetQuery, 
   
  useUpdateTrnEntityWorkflowTrnEntityWorkflowIdPutMutation, 
   
  useDeleteTrnEntityWorkflowTrnEntityWorkflowIdDeleteMutation, 
   
  useGetTrnEntityWorkflowTrnEntityWorkflowIdGetQuery, 
   
  useGetAllTrnEntityWorkflowEventGetQuery, 
   
  useCreateTrnEntityWorkflowTrnEntityWorkflowEventPostMutation, 
   
  useUpdateTrnEntityWorkflowTrnEntityWorkflowEventIdPutMutation, 
   
  useDeleteTrnEntityWorkflowTrnEntityWorkflowEventIdDeleteMutation, 
   
  useGetTrnEntityWorkflowTrnEntityWorkflowEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import EntityWorkflowsListing from './EntityWorkflowsListing';
import { Modal } from '@/components/ui/modal';
import EntityWorkflowsForm from './EntityWorkflowsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function EntityWorkflowsDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteTrnEntityWorkflow] = useDeleteTrnEntityWorkflowTrnEntityWorkflowIdDeleteMutation();

   const { data: fetchedTrnEntityWorkflowDetails,
     isFetching: isFetchingData,
     refetch: refetchTrnEntityWorkflowDetails
    } = useGetTrnEntityWorkflowTrnEntityWorkflowIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedTrnEntityWorkflowDetails) return;
     setSelectedItem(fetchedTrnEntityWorkflowDetails);
   }, [fetchedTrnEntityWorkflowDetails]);

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
        //await deleteTrnEntityWorkflow({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Entity Workflows deleted successfully');
        //refetchTrnEntityWorkflowDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Entity Workflows ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnEntityWorkflow.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/workflow/entity-workflows`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Entity Workflows' : 'Create Entity Workflows'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <EntityWorkflowsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnEntityWorkflowList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'EntityWorkflows Details'
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
                        <p>{fetchedTrnEntityWorkflowDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Organization Id:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.organization_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Fnyr:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.trn_fnyr }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Date:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.trn_date }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Entity Type:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.entity_type }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Workflow Id:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.workflow_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Entity Id:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.entity_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Asset Status:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.asset_status }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Note:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.note }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Mail Notification:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.mail_notification }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Create By:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.create_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.is_deleted }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedTrnEntityWorkflowDetails?.search_vector }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedTrnEntityWorkflowDetails?.effective_start_date
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
                  Entity Workflows
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

export default EntityWorkflowsDetails;