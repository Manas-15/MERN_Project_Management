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
  useCreateTrnInvConsumptionItemsTrnInvConsumptionItemsPostMutation,
  useGetAllTrnInvConsumptionItemssTrnInvConsumptionItemsGetQuery,
  useUpdateTrnInvConsumptionItemsTrnInvConsumptionItemsIdPutMutation,
  useDeleteTrnInvConsumptionItemsTrnInvConsumptionItemsIdDeleteMutation,
  useGetTrnInvConsumptionItemsTrnInvConsumptionItemsIdGetQuery,
  useGetAllTrnInvConsumptionItemsEventGetQuery,
  useCreateTrnInvConsumptionItemsTrnInvConsumptionItemsEventPostMutation,
  useUpdateTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdPutMutation,
  useDeleteTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdDeleteMutation,
  useGetTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
  useGetAllTrnInvConsumptionsTrnInvConsumptionGetQuery,
  useGetAllTrnInvItemDemandsTrnInvItemDemandGetQuery,
  useGetAllTrnInvItemsTrnInvItemGetQuery
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  consumption_id: z.number().min(1, {
    message: 'Consumption Id is required'
  }),
  demand_id: z.number().min(1, {
    message: 'Demand Id is required'
  }),
  item_id: z.number().min(1, {
    message: 'Item Id is required'
  }),
  item_name: z.string().nonempty({
    message: 'Item Name is required'
  }),
  consumption_quantity: z.number().min(1, {
    message: 'Consumption Quantity is required'
  }),
  demand_prending_qty: z.number().min(1, {
    message: 'Demand Prending Qty is required'
  }),
  batch_number: z.string().nonempty({
    message: 'Batch Number is required'
  }),
  expiry_date: z.string(),
  unit_rate: z.number().min(1, {
    message: 'Unit Rate is required'
  }),
  amount: z.number().min(1, {
    message: 'Amount is required'
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

export default function ConsumptionItemsInlineForm({
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
  const [createTrnInvConsumptionItems] =
    useCreateTrnInvConsumptionItemsTrnInvConsumptionItemsPostMutation();
  const [updateTrnInvConsumptionItems] =
    useUpdateTrnInvConsumptionItemsTrnInvConsumptionItemsIdPutMutation();

  //make changes for dropdown field options
  const {
    data: fetchedTrnInvConsumptionData,
    refetch: refetchTrnInvConsumptionList
  } = useGetAllTrnInvConsumptionsTrnInvConsumptionGetQuery(
    {
      ...tenantIDHeader()
    },
    {
      refetchOnMountOrArgChange: true
    }
  );
  const {
    data: fetchedTrnInvItemDemandData,
    refetch: refetchTrnInvItemDemandList
  } = useGetAllTrnInvItemDemandsTrnInvItemDemandGetQuery(
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
    consumption_id: selectedItem?.consumption_id || 0,
    demand_id: selectedItem?.demand_id || 0,
    item_id: selectedItem?.item_id || 0,
    item_name: selectedItem?.item_name || '',
    consumption_quantity: selectedItem?.consumption_quantity || 0,
    demand_prending_qty: selectedItem?.demand_prending_qty || 0,
    batch_number: selectedItem?.batch_number || '',
    expiry_date: selectedItem?.expiry_date || '',
    unit_rate: selectedItem?.unit_rate || '',
    amount: selectedItem?.amount || '',
    create_by: selectedItem?.create_by || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnInvConsumptionItems({
          ...tenantIDHeader(),
          id: selectedItem.id,
          trnInvConsumptionItemsUpdate: values
        }).unwrap();
        toast.success(`Consumption Items updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Consumption Items');
      }
    } else {
      try {
        await createTrnInvConsumptionItems({
          ...tenantIDHeader(),
          trnInvConsumptionItemsInsert: values
        }).unwrap();
        toast.success(`Consumption Items created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Consumption Items');
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
                  name='consumption_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Consumption Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='consumption_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedTrnInvConsumptionData?.map((item: any) => ({
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
                  name='demand_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Demand Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='demand_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedTrnInvItemDemandData?.map((item: any) => ({
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
                  name='consumption_quantity'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>
                        Consumption Quantity
                      </FormLabel>
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
                  name='demand_prending_qty'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>
                        Demand Prending Qty
                      </FormLabel>
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
                  name='unit_rate'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Unit Rate</FormLabel>
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
                  name='amount'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Amount</FormLabel>
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
