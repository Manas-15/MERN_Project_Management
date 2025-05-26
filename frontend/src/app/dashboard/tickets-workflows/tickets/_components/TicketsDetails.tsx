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
   
  useCreateTrnTicketTrnTicketPostMutation, 
   
  useGetAllTrnTicketsTrnTicketGetQuery, 
   
  useUpdateTrnTicketTrnTicketIdPutMutation, 
   
  useDeleteTrnTicketTrnTicketIdDeleteMutation, 
   
  useGetTrnTicketTrnTicketIdGetQuery, 
   
  useGetAllTrnTicketEventGetQuery, 
   
  useCreateTrnTicketTrnTicketEventPostMutation, 
   
  useUpdateTrnTicketTrnTicketEventIdPutMutation, 
   
  useDeleteTrnTicketTrnTicketEventIdDeleteMutation, 
   
  useGetTrnTicketTrnTicketEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import TicketsListing from './TicketsListing';
import { Modal } from '@/components/ui/modal';
import TicketsForm from './TicketsForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function TicketsDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteTrnTicket] = useDeleteTrnTicketTrnTicketIdDeleteMutation();

   const { data: fetchedTrnTicketDetails,
     isFetching: isFetchingData,
     refetch: refetchTrnTicketDetails
    } = useGetTrnTicketTrnTicketIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedTrnTicketDetails) return;
     setSelectedItem(fetchedTrnTicketDetails);
   }, [fetchedTrnTicketDetails]);

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
        //await deleteTrnTicket({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Tickets deleted successfully');
        //refetchTrnTicketDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Tickets ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `trnTicket.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/dashboard/tickets-workflows/tickets`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Tickets' : 'Create Tickets'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <TicketsForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchTrnTicketList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'Tickets Details'
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
                        <p>{fetchedTrnTicketDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Fnyr:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.trn_fnyr }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Number:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.trn_number }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Transaction Date:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.trn_date }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Cost Centre:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.cost_centre }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Cost Centre Name:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.cost_centre_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Header:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.header }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ticket Type:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.ticket_type }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ticket Type Name:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.ticket_type_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ticket For:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.ticket_for }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Site Id:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.site_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Site Name:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.site_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Site User Id:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.site_user_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Site User Name:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.site_user_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Last Updated:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.last_updated }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ticket Status:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.ticket_status }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Status Id:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.status_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Status Name:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.status_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Estimate Days:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.estimate_days }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Remarks:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.remarks }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Failure Start Time:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.failure_start_time }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Failure Closing Time:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.failure_closing_time }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Create By:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.create_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.is_deleted }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedTrnTicketDetails?.search_vector }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedTrnTicketDetails?.effective_start_date
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
                  Tickets
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

export default TicketsDetails;