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
   
  useCreateAssetMatrixAssetMatrixPostMutation, 
   
  useGetAllAssetMatrixsAssetMatrixGetQuery, 
   
  useUpdateAssetMatrixAssetMatrixIdPutMutation, 
   
  useDeleteAssetMatrixAssetMatrixIdDeleteMutation, 
   
  useGetAssetMatrixAssetMatrixIdGetQuery, 
   
  useGetAllAssetMatrixEventGetQuery, 
   
  useCreateAssetMatrixAssetMatrixEventPostMutation, 
   
  useUpdateAssetMatrixAssetMatrixEventIdPutMutation, 
   
  useDeleteAssetMatrixAssetMatrixEventIdDeleteMutation, 
   
  useGetAssetMatrixAssetMatrixEventIdGetQuery 
  
} from '@/redux/store/generatedServices/assetApi';
import {
  capitalize,
  downloadFile,
  getColorCode,
  getStatusDetails,
  showToast
} from '@/common/utills/utilities';
import TabPanel from '@/components/feature/TabPanel';
import AssetMatrixListing from './AssetMatrixListing';
import { Modal } from '@/components/ui/modal';
import AssetMatrixForm from './AssetMatrixForm';
import { ArrowDownToLine, FileText, Pencil, X, Trash2 } from 'lucide-react';
import DetailsPageHeader from '@/components/layout/DetailsPageHeader';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';


function AssetMatrixDetails({id}: { id: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [uploadedFileIds, setUploadedFileIds] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [formType, setFormType] = useState('');
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const [deleteAssetMatrix] = useDeleteAssetMatrixAssetMatrixIdDeleteMutation();

   const { data: fetchedAssetMatrixDetails,
     isFetching: isFetchingData,
     refetch: refetchAssetMatrixDetails
    } = useGetAssetMatrixAssetMatrixIdGetQuery({
     ...tenantIDHeader(),
     id: id,
   },
   {
     skip: !id,
     refetchOnMountOrArgChange: true
   }
   );

   useEffect(() => {
     if (!fetchedAssetMatrixDetails) return;
     setSelectedItem(fetchedAssetMatrixDetails);
   }, [fetchedAssetMatrixDetails]);

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
        //await deleteAssetMatrix({
        //  ...tenantIDHeader(),
        //  id: parseInt(selectedItem.id)
        //}).unwrap();
        setIsDeleteModalOpen(false);
        toast.success('Asset Matrix deleted successfully');
        //refetchAssetMatrixDetails(); // Call refetch here
        setSelectedItem(null)
      } else {
        throw new Error('Selected Asset Matrix ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const tabs = [
    {
      label: `assetMatrix.License`,
      //component: VendorLicenseListing
    },
    // Add more tabs as needed
  ];

  const handelClose = () => {
    router.push(`/settings/assets/asset-matrix`);
  };



  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem ? 'Edit Asset Matrix' : 'Create Asset Matrix'
          }
          description=""
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className='max-w-[1200px]'
        >
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            {/* <AssetMatrixForm
              setOpen={setIsCreatePopupOpen}
              refetchList={refetchAssetMatrixList} //pass here correct list
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              formType={formType}
            /> */}
          </div>
        </Modal>
      )}

      <DetailsPageHeader
        title={
         'AssetMatrix Details'
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
                        <p>{fetchedAssetMatrixDetails?.id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Tenant Id:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.tenant_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Matrix Id:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.matrix_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Serial Number:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.serial_number }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Asset Type:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.asset_type }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Asset Type Name:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.asset_type_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Party Id:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.party_id }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Manufacturer Name:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.manufacturer_name }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Model:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.model }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Variant:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.variant }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Asset Capacity:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.asset_capacity }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Fuel Consumption:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.fuel_consumption }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Fuel Type:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.fuel_type }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Fuel Tank Capacity:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.fuel_tank_capacity }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Electrical Systme:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.electrical_systme }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Hour Meter:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.hour_meter }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Odo Meter:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.odo_meter }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Operation Cycle:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.operation_cycle }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Create By:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.create_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated By:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.updated_by }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Created At:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.created_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Updated At:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.updated_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Deleted At:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.deleted_at }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Is Deleted:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.is_deleted }</p>
                      </div>
                    
                      <div>
                        <p className="font-semibold">Search Vector:</p>
                        <p></p>
                        <p>{fetchedAssetMatrixDetails?.search_vector }</p>
                      </div>
                    
              
                 
                    {/* <p>moment(
                            fetchedAssetMatrixDetails?.effective_start_date
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
                  Asset Matrix
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

export default AssetMatrixDetails;