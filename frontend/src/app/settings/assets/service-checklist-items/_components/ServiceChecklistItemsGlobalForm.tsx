'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller,useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import { tenantIDHeader } from '@/libs/authHeader';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import FormFooter from '@/components/feature/FormFooter';
import { CustomDatePicker } from '@/components/FormInputs/CustomDatePicker';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { MultiSelectSearchDropdown } from '@/components/ui/MultiSelectSearchDropdown';

import { 
    useCreateAssetServiceCheckListItemsAssetServiceCheckListItemsPostMutation, 
    useGetAllAssetServiceCheckListItemssAssetServiceCheckListItemsGetQuery, 
    useUpdateAssetServiceCheckListItemsAssetServiceCheckListItemsIdPutMutation, 
    useDeleteAssetServiceCheckListItemsAssetServiceCheckListItemsIdDeleteMutation, 
    useGetAssetServiceCheckListItemsAssetServiceCheckListItemsIdGetQuery, 
    useGetAllAssetServiceCheckListItemsEventGetQuery, 
    useCreateAssetServiceCheckListItemsAssetServiceCheckListItemsEventPostMutation, 
    useUpdateAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdPutMutation, 
    useDeleteAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdDeleteMutation, 
    useGetAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllAssetMatrixsAssetMatrixGetQuery,
          useGetAllAssetMatrixSectionsAssetMatrixSectionGetQuery,
          useGetAllAssetMatrixSubSectionsAssetMatrixSubSectionGetQuery,
          useGetAllAssetServiceCheckListsAssetServiceCheckListGetQuery,
          useGetAllTrnInvItemsTrnInvItemGetQuery,
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            assetmatrix_id: z.number().min(1, {
              message: 'Assetmatrix Id is required'
            }),
            matrix_id: z.string().nonempty({
              message: 'Matrix Id is required'
            }),
            section_id: z.number().min(1, {
              message: 'Section Id is required'
            }),
            section_name: z.string().nonempty({
              message: 'Section Name is required'
            }),
            sub_section_id: z.number().min(1, {
              message: 'Sub Section Id is required'
            }),
            sub_section_name: z.string().nonempty({
              message: 'Sub Section Name is required'
            }),
            service_check_list_id: z.number().min(1, {
              message: 'Service Check List Id is required'
            }),
            check_list_name: z.string().nonempty({
              message: 'Check List Name is required'
            }),
            item_id: z.number().min(1, {
              message: 'Item Id is required'
            }),
            item_name: z.string().nonempty({
              message: 'Item Name is required'
            }),
            item_quantity: z.number().min(1, {
              message: 'Item Quantity is required'
            }),
            create_by: z.string(),
});

const radioGroupOptions = [
  {
    value: 'option_1',
    label: 'Option 1'
  },
  {
    value: 'option_2',
    label: 'Option 2'
  },
  {
    value: 'option_3',
    label: 'Option 3'
  }
];
const selectFieldOptions = [
  {
    value: 'option_1',
    label: 'Option 1'
  },
  {
    value: 'option_2',
    label: 'Option 2'
  },
  {
    value: 'option_3',
    label: 'Option 3'
  },
  {
    value: 'option_4',
    label: 'Option 4'
  }
];

export default function ServiceChecklistItemsGlobalForm({
  setOpen,
  refetchList,
  selectedItem,
  setSelectedItem,
  formType
}: {
  setOpen: (open: boolean) => void;
  refetchList: () => void;
  selectedItem: any;
  setSelectedItem: (item: any) => void;
  formType: string;
}) {

 const [createAssetServiceCheckListItems] = useCreateAssetServiceCheckListItemsAssetServiceCheckListItemsPostMutation();
 const [updateAssetServiceCheckListItems] = useUpdateAssetServiceCheckListItemsAssetServiceCheckListItemsIdPutMutation();


//make changes for dropdown field options
        const {
          data: fetchedAssetMatrixData,
          refetch: refetchAssetMatrixList
        } = useGetAllAssetMatrixsAssetMatrixGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );
        const {
          data: fetchedAssetMatrixSectionData,
          refetch: refetchAssetMatrixSectionList
        } = useGetAllAssetMatrixSectionsAssetMatrixSectionGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );
        const {
          data: fetchedAssetMatrixSubSectionData,
          refetch: refetchAssetMatrixSubSectionList
        } = useGetAllAssetMatrixSubSectionsAssetMatrixSubSectionGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );
        const {
          data: fetchedAssetServiceCheckListData,
          refetch: refetchAssetServiceCheckListList
        } = useGetAllAssetServiceCheckListsAssetServiceCheckListGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );
        const {
          data: fetchedTrnInvItemData,
          refetch: refetchTrnInvItemList
        } = useGetAllTrnInvItemsTrnInvItemGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );



//FIXME Default values to Templatize this
const defaultValues = {
         assetmatrix_id: selectedItem?.assetmatrix_id || 0,
         matrix_id: selectedItem?.matrix_id || "",
         section_id: selectedItem?.section_id || 0,
         section_name: selectedItem?.section_name || "",
         sub_section_id: selectedItem?.sub_section_id || 0,
         sub_section_name: selectedItem?.sub_section_name || "",
         service_check_list_id: selectedItem?.service_check_list_id || 0,
         check_list_name: selectedItem?.check_list_name || "",
         item_id: selectedItem?.item_id || 0,
         item_name: selectedItem?.item_name || "",
         item_quantity: selectedItem?.item_quantity || "",
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateAssetServiceCheckListItems({
           ...tenantIDHeader(),
          id: selectedItem.id,
          assetServiceCheckListItemsUpdate: values
        }).unwrap();
        toast.success(`Service Checklist Items updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Service Checklist Items');
      }
    } else {
      try {
        await createAssetServiceCheckListItems({
           ...tenantIDHeader(),
          assetServiceCheckListItemsInsert: values
        }).unwrap();
        toast.success(`Service Checklist Items created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Service Checklist Items');
      }
    }
  }

  const afterSubmit = () => {
    form.reset();
    refetchList();
    setSelectedItem(null);
    setOpen(false);
  };

  return (
    <div className='flex w-full flex-col'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className='mx-auto form-dynamic-height w-full items-center justify-end space-x-2 overflow-hidden'> 
            <CardContent className='form-dynamic-height overflow-y-auto px-6'>
                    
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <Controller
                                control={form.control}
                                name="assetmatrix_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Assetmatrix Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="assetmatrix_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedAssetMatrixData?.map((item:any) => ({
                                            label: item.asset_type_name || "",
                                            value: item.id || "",
                                          })) || selectFieldOptions || []
                                      }
                                    />
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="matrix_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Matrix Id</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <Controller
                                control={form.control}
                                name="section_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Section Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="section_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedAssetMatrixSectionData?.map((item:any) => ({
                                            label: item.section_name || "",
                                            value: item.id || "",
                                          })) || selectFieldOptions || []
                                      }
                                    />
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="section_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Section Name</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <Controller
                                control={form.control}
                                name="sub_section_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Sub Section Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="sub_section_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedAssetMatrixSubSectionData?.map((item:any) => ({
                                            label: item.section_name || "",
                                            value: item.id || "",
                                          })) || selectFieldOptions || []
                                      }
                                    />
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="sub_section_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Sub Section Name</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <Controller
                                control={form.control}
                                name="service_check_list_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Service Check List Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="service_check_list_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedAssetServiceCheckListData?.map((item:any) => ({
                                            label: item.checksheet_name || "",
                                            value: item.id || "",
                                          })) || selectFieldOptions || []
                                      }
                                    />
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="check_list_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Check List Name</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <Controller
                                control={form.control}
                                name="item_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Item Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="item_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedTrnInvItemData?.map((item:any) => ({
                                            label: item.item_name || "",
                                            value: item.id || "",
                                          })) || selectFieldOptions || []
                                      }
                                    />
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="item_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Item Name</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="item_quantity"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Item Quantity</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="create_by"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Create By</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                    
                    
                    
                    
                    
                    
            </CardContent>
          </Card>
          <FormFooter
            form={form}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            setOpen={setOpen}
          />
       </form>
      </Form>
    </div>
  );
}