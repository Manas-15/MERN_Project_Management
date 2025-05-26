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
  useCreateTrnInvItemAdjustmentTrnInvItemAdjustmentPostMutation,
  useGetAllTrnInvItemAdjustmentsTrnInvItemAdjustmentGetQuery,
  useUpdateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPutMutation,
  useDeleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDeleteMutation,
  useGetTrnInvItemAdjustmentTrnInvItemAdjustmentIdGetQuery,
  useGetAllTrnInvItemAdjustmentEventGetQuery,
  useCreateTrnInvItemAdjustmentTrnInvItemAdjustmentEventPostMutation,
  useUpdateTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdPutMutation,
  useDeleteTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdDeleteMutation,
  useGetTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import { useGetAllGrpWarehousesGrpWarehouseGetQuery } from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  trn_fnyr: z.number().min(1, {
    message: 'Transaction Fnyr is required'
  }),
  trn_date: z.string(),
  trn_number: z.string().nonempty({
    message: 'Transaction Number is required'
  }),
  warehouse_id: z.number().min(1, {
    message: 'Warehouse Id is required'
  }),
  warehouse_name: z.string().nonempty({
    message: 'Warehouse Name is required'
  }),
  adjustment_for: z.string().nonempty({
    message: 'Adjustment For is required'
  }),
  cost_centre: z.number().min(1, {
    message: 'Cost Centre is required'
  }),
  cost_centre_name: z.string().nonempty({
    message: 'Cost Centre Name is required'
  }),
  status_id: z.number().min(1, {
    message: 'Status Id is required'
  }),
  status: z.string().nonempty({
    message: 'Status is required'
  }),
  total_add_quantity: z.number().min(1, {
    message: 'Total Add Quantity is required'
  }),
  total_less_quantity: z.number().min(1, {
    message: 'Total Less Quantity is required'
  }),
  notes: z.string().nonempty({
    message: 'Notes is required'
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

export default function ItemAdjustmentsGridForm({
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
  const [createTrnInvItemAdjustment] =
    useCreateTrnInvItemAdjustmentTrnInvItemAdjustmentPostMutation();
  const [updateTrnInvItemAdjustment] =
    useUpdateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPutMutation();

  //make changes for dropdown field options
  const { data: fetchedGrpWarehouseData, refetch: refetchGrpWarehouseList } =
    useGetAllGrpWarehousesGrpWarehouseGetQuery(
      {
        ...tenantIDHeader()
      },
      {
        refetchOnMountOrArgChange: true
      }
    );

  //FIXME Default values to Templatize this
  const defaultValues = {
    trn_fnyr: selectedItem?.trn_fnyr || 0,
    trn_date: selectedItem?.trn_date || '',
    trn_number: selectedItem?.trn_number || '',
    warehouse_id: selectedItem?.warehouse_id || 0,
    warehouse_name: selectedItem?.warehouse_name || '',
    adjustment_for: selectedItem?.adjustment_for || '',
    cost_centre: selectedItem?.cost_centre || 0,
    cost_centre_name: selectedItem?.cost_centre_name || '',
    status_id: selectedItem?.status_id || 0,
    status: selectedItem?.status || '',
    total_add_quantity: selectedItem?.total_add_quantity || 0,
    total_less_quantity: selectedItem?.total_less_quantity || 0,
    notes: selectedItem?.notes || '',
    create_by: selectedItem?.create_by || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnInvItemAdjustment({
          ...tenantIDHeader(),
          id: selectedItem.id,
          trnInvItemAdjustmentUpdate: values
        }).unwrap();
        toast.success(`Item Adjustments updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Item Adjustments');
      }
    } else {
      try {
        await createTrnInvItemAdjustment({
          ...tenantIDHeader(),
          trnInvItemAdjustmentInsert: values
        }).unwrap();
        toast.success(`Item Adjustments created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Item Adjustments');
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
                <FormField
                  control={form.control}
                  name='trn_fnyr'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Transaction Fnyr</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CustomDatePicker
                  control={form.control}
                  name='trn_date'
                  label='Transaction Date'
                  isRequired={false}
                  viewType='grid'
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='trn_number'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Transaction Number</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Controller
                  control={form.control}
                  name='warehouse_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Warehouse Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='warehouse_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedGrpWarehouseData?.map((item: any) => ({
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
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='warehouse_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Warehouse Name</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='adjustment_for'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adjustment For</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='cost_centre'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cost Centre</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='cost_centre_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cost Centre Name</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='status_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status Id</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Controller
                  control={form.control}
                  name='status'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='status'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          [
                            { label: 'Active', value: 'active' },
                            { label: 'In Active', value: 'in_active' },
                            { label: 'Pending', value: 'pending' },
                            { label: 'Completed', value: 'completed' }
                          ]?.map((item: any) => ({
                            label: item.label,
                            value: item.value
                          })) || []
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
                  name='total_add_quantity'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Add Quantity</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='total_less_quantity'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Less Quantity</FormLabel>
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
                  name='notes'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
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
