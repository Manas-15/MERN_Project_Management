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
   
  useCreateGrpWarehouseGrpWarehousePostMutation, 
   
  useGetAllGrpWarehousesGrpWarehouseGetQuery, 
   
  useUpdateGrpWarehouseGrpWarehouseIdPutMutation, 
   
  useDeleteGrpWarehouseGrpWarehouseIdDeleteMutation, 
   
  useGetGrpWarehouseGrpWarehouseIdGetQuery, 
   
  useGetAllGrpWarehouseEventGetQuery, 
   
  useCreateGrpWarehouseGrpWarehouseEventPostMutation, 
   
  useUpdateGrpWarehouseGrpWarehouseEventIdPutMutation, 
   
  useDeleteGrpWarehouseGrpWarehouseEventIdDeleteMutation, 
   
  useGetGrpWarehouseGrpWarehouseEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import WarehousesListing from './WarehousesListing';
import { Modal } from '@/components/ui/modal';
import WarehousesForm from './WarehousesForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function WarehousesDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteGrpWarehouse] = useDeleteGrpWarehouseGrpWarehouseIdDeleteMutation();

   const { data: fetchedGrpWarehouseDetails,
     isFetching: isFetchingData,
     refetch: refetchGrpWarehouseDetails
    } = useGetGrpWarehouseGrpWarehouseIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedGrpWarehouseDetails) return;
     setSelectedItem(fetchedGrpWarehouseDetails);
   }, [fetchedGrpWarehouseDetails]);

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
        //await deleteGrpWarehouse({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Warehouses deleted successfully');
        //refetchGrpWarehouseDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Warehouses ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `grpWarehouse.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/settings/inventory/warehouses`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Warehouses' : 'Create Warehouses'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <WarehousesForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchGrpWarehouseList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'Warehouses Details'
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
                        <p>{fetchedGrpWarehouseDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Organization Id:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.organization_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Warehouse Name:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.warehouse_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Warehouse Code:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.warehouse_code }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Sites Id:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.sites_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Notes:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.notes }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Address1:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.address1 }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Address2:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.address2 }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Landmark:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.landmark }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">City:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.city }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Country:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.country }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Supply State:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.supply_state }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">District:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.district }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Pincode:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.pincode }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Phone 1:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.phone_1 }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Phone 2:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.phone_2 }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Email:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.email }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Website:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.website }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Gstin:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.gstin }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ship Label:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.ship_label }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ship Address1:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.ship_address1 }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ship Address2:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.ship_address2 }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ship Landmark:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.ship_landmark }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ship City:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.ship_city }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ship Country:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.ship_country }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ship State:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.ship_state }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ship District:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.ship_district }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ship Pincode:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.ship_pincode }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Ship Gstin:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.ship_gstin }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Create By:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.create_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.is_deleted }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedGrpWarehouseDetails?.search_vector }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedGrpWarehouseDetails?.effective_start_date
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
                  Warehouses
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

export default WarehousesDetails;