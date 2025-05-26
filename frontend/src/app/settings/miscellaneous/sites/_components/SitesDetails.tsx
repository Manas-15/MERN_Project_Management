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
   
  useCreateSitesSitesPostMutation, 
   
  useGetAllSitessSitesGetQuery, 
   
  useUpdateSitesSitesIdPutMutation, 
   
  useDeleteSitesSitesIdDeleteMutation, 
   
  useGetSitesSitesIdGetQuery, 
   
  useGetAllSitesEventGetQuery, 
   
  useCreateSitesSitesEventPostMutation, 
   
  useUpdateSitesSitesEventIdPutMutation, 
   
  useDeleteSitesSitesEventIdDeleteMutation, 
   
  useGetSitesSitesEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import SitesListing from './SitesListing';
import { Modal } from '@/components/ui/modal';
import SitesForm from './SitesForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function SitesDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteSites] = useDeleteSitesSitesIdDeleteMutation();

   const { data: fetchedSitesDetails,
     isFetching: isFetchingData,
     refetch: refetchSitesDetails
    } = useGetSitesSitesIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedSitesDetails) return;
     setSelectedItem(fetchedSitesDetails);
   }, [fetchedSitesDetails]);

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
        //await deleteSites({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Sites deleted successfully');
        //refetchSitesDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Sites ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `sites.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/settings/miscellaneous/sites`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Sites' : 'Create Sites'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <SitesForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchSitesList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'Sites Details'
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
                        <p>{fetchedSitesDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Organization Id:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.organization_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Site Group Id:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.site_group_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Site Name:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.site_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Site Code:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.site_code }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Associated Users:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.associated_users }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">All User Indicator:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.all_user_indicator }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Active Status:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.active_status }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.search_vector }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created By:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.created_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedSitesDetails?.is_deleted }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedSitesDetails?.effective_start_date
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
                  Sites
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

export default SitesDetails;