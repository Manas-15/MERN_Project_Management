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
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { tenantIDHeader } from '@/libs/authHeader';
import FormFooter from '@/components/feature/FormFooter';
import { CustomDatePicker } from '@/components/FormInputs/CustomDatePicker';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { MultiSelectSearchDropdown } from '@/components/ui/MultiSelectSearchDropdown';

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

// import { useGetAllSaasOrganizationssSaasOrganizationsGetQuery } from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  organization_id: z.number().min(1, {
    message: 'Organization Id is required'
  }),
  warehouse_name: z.string().nonempty({
    message: 'Warehouse Name is required'
  }),
  warehouse_code: z.string().nonempty({
    message: 'Warehouse Code is required'
  }),
  sites_id: z.string(),
  notes: z.string().nonempty({
    message: 'Notes is required'
  }),
  address1: z.string().nonempty({
    message: 'Address1 is required'
  }),
  address2: z.string().nonempty({
    message: 'Address2 is required'
  }),
  landmark: z.string().nonempty({
    message: 'Landmark is required'
  }),
  city: z.string().nonempty({
    message: 'City is required'
  }),
  country: z.string().nonempty({
    message: 'Country is required'
  }),
  supply_state: z.string().nonempty({
    message: 'Supply State is required'
  }),
  district: z.string().nonempty({
    message: 'District is required'
  }),
  pincode: z.string().nonempty({
    message: 'Pincode is required'
  }),
  phone_1: z.string().nonempty({
    message: 'Phone 1 is required'
  }),
  phone_2: z.string().nonempty({
    message: 'Phone 2 is required'
  }),
  email: z.string().nonempty({
    message: 'Email is required'
  }),
  website: z.string().nonempty({
    message: 'Website is required'
  }),
  gstin: z.string().nonempty({
    message: 'Gstin is required'
  }),
  ship_label: z.string().nonempty({
    message: 'Ship Label is required'
  }),
  ship_address1: z.string().nonempty({
    message: 'Ship Address1 is required'
  }),
  ship_address2: z.string().nonempty({
    message: 'Ship Address2 is required'
  }),
  ship_landmark: z.string().nonempty({
    message: 'Ship Landmark is required'
  }),
  ship_city: z.string().nonempty({
    message: 'Ship City is required'
  }),
  ship_country: z.string().nonempty({
    message: 'Ship Country is required'
  }),
  ship_state: z.string().nonempty({
    message: 'Ship State is required'
  }),
  ship_district: z.string().nonempty({
    message: 'Ship District is required'
  }),
  ship_pincode: z.string().nonempty({
    message: 'Ship Pincode is required'
  }),
  ship_gstin: z.string().nonempty({
    message: 'Ship Gstin is required'
  }),
  create_by: z.string()
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

//file_id: z.array(z.number()).optional(), // Optional array of file_ids

export default function WarehousesInlineForm({
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
  const [createGrpWarehouse] = useCreateGrpWarehouseGrpWarehousePostMutation();
  const [updateGrpWarehouse] = useUpdateGrpWarehouseGrpWarehouseIdPutMutation();

  //make changes for dropdown field options
  // const {
  //   data: fetchedSaasOrganizationsData,
  //   refetch: refetchSaasOrganizationsList
  // } = useGetAllSaasOrganizationssSaasOrganizationsGetQuery(
  //   {
  //     ...tenantIDHeader()
  //   },
  //   {
  //     refetchOnMountOrArgChange: true
  //   }
  // );

  //FIXME Default values to Templatize this
  const defaultValues = {
    organization_id: selectedItem?.organization_id || 0,
    warehouse_name: selectedItem?.warehouse_name || '',
    warehouse_code: selectedItem?.warehouse_code || '',
    sites_id: selectedItem?.sites_id || '',
    notes: selectedItem?.notes || '',
    address1: selectedItem?.address1 || '',
    address2: selectedItem?.address2 || '',
    landmark: selectedItem?.landmark || '',
    city: selectedItem?.city || '',
    country: selectedItem?.country || '',
    supply_state: selectedItem?.supply_state || '',
    district: selectedItem?.district || '',
    pincode: selectedItem?.pincode || '',
    phone_1: selectedItem?.phone_1 || '',
    phone_2: selectedItem?.phone_2 || '',
    email: selectedItem?.email || '',
    website: selectedItem?.website || '',
    gstin: selectedItem?.gstin || '',
    ship_label: selectedItem?.ship_label || '',
    ship_address1: selectedItem?.ship_address1 || '',
    ship_address2: selectedItem?.ship_address2 || '',
    ship_landmark: selectedItem?.ship_landmark || '',
    ship_city: selectedItem?.ship_city || '',
    ship_country: selectedItem?.ship_country || '',
    ship_state: selectedItem?.ship_state || '',
    ship_district: selectedItem?.ship_district || '',
    ship_pincode: selectedItem?.ship_pincode || '',
    ship_gstin: selectedItem?.ship_gstin || '',
    create_by: selectedItem?.create_by || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateGrpWarehouse({
          ...tenantIDHeader(),
          id: selectedItem.id,
          grpWarehouseUpdate: values
        }).unwrap();
        toast.success(`Warehouses updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Warehouses');
      }
    } else {
      try {
        await createGrpWarehouse({
          ...tenantIDHeader(),
          grpWarehouseInsert: values
        }).unwrap();
        toast.success(`Warehouses created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Warehouses');
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
          <Card className='form-dynamic-height mx-auto w-full items-center justify-end space-x-2 overflow-hidden'>
            <CardContent className='form-dynamic-height overflow-y-auto px-6'>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <Controller
                  control={form.control}
                  name='organization_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='organization_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          // fetchedSaasOrganizationsData?.map((item: any) => ({
                          //   label: item.organization_name || '',
                          //   value: item.id || ''
                          // })) ||
                          selectFieldOptions || []
                        }
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='warehouse_name'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Warehouse Name</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='warehouse_code'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Warehouse Code</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='sites_id'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Sites Id</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='notes'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Notes</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='address1'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Address1</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='address2'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Address2</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='landmark'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Landmark</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='city'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>City</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='country'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Country</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='supply_state'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Supply State</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='district'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>District</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='pincode'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Pincode</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='phone_1'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Phone 1</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='phone_2'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Phone 2</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Email</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='website'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Website</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='gstin'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Gstin</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='ship_label'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Ship Label</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='ship_address1'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Ship Address1</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='ship_address2'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Ship Address2</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='ship_landmark'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Ship Landmark</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='ship_city'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Ship City</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='ship_country'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Ship Country</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='ship_state'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Ship State</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='ship_district'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Ship District</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='ship_pincode'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Ship Pincode</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='ship_gstin'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Ship Gstin</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='create_by'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Create By</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
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
