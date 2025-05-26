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
  useCreateTrnInvItemAllocationTrnInvItemAllocationPostMutation,
  useGetAllTrnInvItemAllocationsTrnInvItemAllocationGetQuery,
  useUpdateTrnInvItemAllocationTrnInvItemAllocationIdPutMutation,
  useDeleteTrnInvItemAllocationTrnInvItemAllocationIdDeleteMutation,
  useGetTrnInvItemAllocationTrnInvItemAllocationIdGetQuery,
  useGetAllTrnInvItemAllocationEventGetQuery,
  useCreateTrnInvItemAllocationTrnInvItemAllocationEventPostMutation,
  useUpdateTrnInvItemAllocationTrnInvItemAllocationEventIdPutMutation,
  useDeleteTrnInvItemAllocationTrnInvItemAllocationEventIdDeleteMutation,
  useGetTrnInvItemAllocationTrnInvItemAllocationEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
  useGetAllTrnInvAllocationsTrnInvAllocationGetQuery,
  useGetAllTrnInvItemsTrnInvItemGetQuery
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  allocation_id: z.number().min(1, {
    message: 'Allocation Id is required'
  }),
  item_id: z.number().min(1, {
    message: 'Item Id is required'
  }),
  item_name: z.string().nonempty({
    message: 'Item Name is required'
  }),
  quantity: z.number().min(1, {
    message: 'Quantity is required'
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

export default function ItemAllocationsGridForm({
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
  const [createTrnInvItemAllocation] =
    useCreateTrnInvItemAllocationTrnInvItemAllocationPostMutation();
  const [updateTrnInvItemAllocation] =
    useUpdateTrnInvItemAllocationTrnInvItemAllocationIdPutMutation();

  //make changes for dropdown field options
  const {
    data: fetchedTrnInvAllocationData,
    refetch: refetchTrnInvAllocationList
  } = useGetAllTrnInvAllocationsTrnInvAllocationGetQuery(
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
    allocation_id: selectedItem?.allocation_id || 0,
    item_id: selectedItem?.item_id || 0,
    item_name: selectedItem?.item_name || '',
    quantity: selectedItem?.quantity || 0,
    demand_prending_qty: selectedItem?.demand_prending_qty || 0,
    batch_number: selectedItem?.batch_number || '',
    expiry_date: selectedItem?.expiry_date || '',
    unit_rate: selectedItem?.unit_rate || 0,
    amount: selectedItem?.amount || 0,
    create_by: selectedItem?.create_by || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnInvItemAllocation({
          ...tenantIDHeader(),
          id: selectedItem.id,
          trnInvItemAllocationUpdate: values
        }).unwrap();
        toast.success(`Item Allocations updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Item Allocations');
      }
    } else {
      try {
        await createTrnInvItemAllocation({
          ...tenantIDHeader(),
          trnInvItemAllocationInsert: values
        }).unwrap();
        toast.success(`Item Allocations created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Item Allocations');
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
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <Controller
                  control={form.control}
                  name='allocation_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Allocation Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='allocation_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedTrnInvAllocationData?.map((item: any) => ({
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
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='item_name'
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
                <FormField
                  control={form.control}
                  name='quantity'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='demand_prending_qty'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Demand Prending Qty</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='batch_number'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Batch Number</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <CustomDatePicker
                  control={form.control}
                  name='expiry_date'
                  label='Expiry Date'
                  isRequired={false}
                  viewType='grid'
                />
                <FormField
                  control={form.control}
                  name='unit_rate'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unit Rate</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='amount'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='create_by'
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
