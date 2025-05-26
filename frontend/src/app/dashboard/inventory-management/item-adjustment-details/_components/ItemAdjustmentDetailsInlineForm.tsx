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
  useCreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlPostMutation,
  useGetAllTrnInvItemAdjustmentDtlsTrnInvItemAdjustmentDtlGetQuery,
  useUpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdPutMutation,
  useDeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdDeleteMutation,
  useGetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdGetQuery,
  useGetAllTrnInvItemAdjustmentDtlEventGetQuery,
  useCreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventPostMutation,
  useUpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdPutMutation,
  useDeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdDeleteMutation,
  useGetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
  useGetAllTrnInvItemAdjustmentsTrnInvItemAdjustmentGetQuery,
  useGetAllTrnInvItemsTrnInvItemGetQuery
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  adjustment_id: z.number().min(1, {
    message: 'Adjustment Id is required'
  }),
  item_id: z.number().min(1, {
    message: 'Item Id is required'
  }),
  item_name: z.string().nonempty({
    message: 'Item Name is required'
  }),
  adjustment_type: z.string().nonempty({
    message: 'Adjustment Type is required'
  }),
  add_quantity: z.number().min(1, {
    message: 'Add Quantity is required'
  }),
  less_quantity: z.number().min(1, {
    message: 'Less Quantity is required'
  }),
  batch_number: z.string().nonempty({
    message: 'Batch Number is required'
  }),
  expiry_date: z.string(),
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

export default function ItemAdjustmentDetailsInlineForm({
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
  const [createTrnInvItemAdjustmentDtl] =
    useCreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlPostMutation();
  const [updateTrnInvItemAdjustmentDtl] =
    useUpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdPutMutation();

  //make changes for dropdown field options
  const {
    data: fetchedTrnInvItemAdjustmentData,
    refetch: refetchTrnInvItemAdjustmentList
  } = useGetAllTrnInvItemAdjustmentsTrnInvItemAdjustmentGetQuery(
    {
      ...tenantIDHeader()
    },
    {
      refetchOnMountOrArgChange: true
    }
  );
  const { data: fetchedTrnInvItemData, refetch: refetchTrnInvItemList } =
    useGetAllTrnInvItemsTrnInvItemGetQuery(
      {
        ...tenantIDHeader()
      },
      {
        refetchOnMountOrArgChange: true
      }
    );

  //FIXME Default values to Templatize this
  const defaultValues = {
    adjustment_id: selectedItem?.adjustment_id || 0,
    item_id: selectedItem?.item_id || 0,
    item_name: selectedItem?.item_name || '',
    adjustment_type: selectedItem?.adjustment_type || '',
    add_quantity: selectedItem?.add_quantity || 0,
    less_quantity: selectedItem?.less_quantity || 0,
    batch_number: selectedItem?.batch_number || '',
    expiry_date: selectedItem?.expiry_date || '',
    create_by: selectedItem?.create_by || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnInvItemAdjustmentDtl({
          ...tenantIDHeader(),
          id: selectedItem.id,
          trnInvItemAdjustmentDtlUpdate: values
        }).unwrap();
        toast.success(`Item Adjustment Details updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Item Adjustment Details');
      }
    } else {
      try {
        await createTrnInvItemAdjustmentDtl({
          ...tenantIDHeader(),
          trnInvItemAdjustmentDtlInsert: values
        }).unwrap();
        toast.success(`Item Adjustment Details created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Item Adjustment Details');
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
                  name='adjustment_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adjustment Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='adjustment_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedTrnInvItemAdjustmentData?.map((item: any) => ({
                            label: item.warehouse_name || '',
                            value: item.id || ''
                          })) ||
                          selectFieldOptions ||
                          []
                        }
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <Controller
                  control={form.control}
                  name='item_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Item Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='item_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedTrnInvItemData?.map((item: any) => ({
                            label: item.item_name || '',
                            value: item.id || ''
                          })) ||
                          selectFieldOptions ||
                          []
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
                  name='item_name'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Item Name</FormLabel>
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
                  name='adjustment_type'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Adjustment Type</FormLabel>
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
                  name='add_quantity'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Add Quantity</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='number' {...field} />
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
                  name='less_quantity'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Less Quantity</FormLabel>
                      <div className='flex w-[85%] flex-col'>
                        <FormControl>
                          <Input type='number' {...field} />
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
                  name='batch_number'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Batch Number</FormLabel>
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
                <CustomDatePicker
                  control={form.control}
                  name='expiry_date'
                  label='Expiry Date'
                  isRequired={false}
                  viewType='inline'
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
