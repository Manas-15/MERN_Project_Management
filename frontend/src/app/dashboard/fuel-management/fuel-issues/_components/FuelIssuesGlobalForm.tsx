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
  useCreateTrnFsFuelIssueTrnFsFuelIssuePostMutation,
  useGetAllTrnFsFuelIssuesTrnFsFuelIssueGetQuery,
  useUpdateTrnFsFuelIssueTrnFsFuelIssueIdPutMutation,
  useDeleteTrnFsFuelIssueTrnFsFuelIssueIdDeleteMutation,
  useGetTrnFsFuelIssueTrnFsFuelIssueIdGetQuery,
  useGetAllTrnFsFuelIssueEventGetQuery,
  useCreateTrnFsFuelIssueTrnFsFuelIssueEventPostMutation,
  useUpdateTrnFsFuelIssueTrnFsFuelIssueEventIdPutMutation,
  useDeleteTrnFsFuelIssueTrnFsFuelIssueEventIdDeleteMutation,
  useGetTrnFsFuelIssueTrnFsFuelIssueEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import { useGetAllRefFuelStationsRefFuelStationGetQuery } from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  trn_fnyr: z.number().min(1, {
    message: 'Transaction Fnyr is required'
  }),
  trn_date: z.string(),
  trn_number: z.string().nonempty({
    message: 'Transaction Number is required'
  }),
  fuel_station_id: z.number().min(1, {
    message: 'Fuel Station Id is required'
  }),
  fuel_station_name: z.string().nonempty({
    message: 'Fuel Station Name is required'
  }),
  fuel_type: z.string().nonempty({
    message: 'Fuel Type is required'
  }),
  fuel_receiver_id: z.number().min(1, {
    message: 'Fuel Receiver Id is required'
  }),
  fuel_receiver_name: z.string().nonempty({
    message: 'Fuel Receiver Name is required'
  }),
  fuel_quantity: z.number().min(1, {
    message: 'Fuel Quantity is required'
  }),
  fuel_unit_rate: z.number().min(1, {
    message: 'Fuel Unit Rate is required'
  }),
  amount: z.number().min(1, {
    message: 'Amount is required'
  }),
  reference_number: z.string().nonempty({
    message: 'Reference Number is required'
  }),
  remarks: z.string().nonempty({
    message: 'Remarks is required'
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

export default function FuelIssuesGlobalForm({
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
  const [createTrnFsFuelIssue] =
    useCreateTrnFsFuelIssueTrnFsFuelIssuePostMutation();
  const [updateTrnFsFuelIssue] =
    useUpdateTrnFsFuelIssueTrnFsFuelIssueIdPutMutation();

  //make changes for dropdown field options
  const {
    data: fetchedRefFuelStationData,
    refetch: refetchRefFuelStationList
  } = useGetAllRefFuelStationsRefFuelStationGetQuery(
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
    fuel_station_id: selectedItem?.fuel_station_id || 0,
    fuel_station_name: selectedItem?.fuel_station_name || '',
    fuel_type: selectedItem?.fuel_type || '',
    fuel_receiver_id: selectedItem?.fuel_receiver_id || 0,
    fuel_receiver_name: selectedItem?.fuel_receiver_name || '',
    fuel_quantity: selectedItem?.fuel_quantity || '',
    fuel_unit_rate: selectedItem?.fuel_unit_rate || '',
    amount: selectedItem?.amount || '',
    reference_number: selectedItem?.reference_number || '',
    remarks: selectedItem?.remarks || '',
    create_by: selectedItem?.create_by || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnFsFuelIssue({
          ...tenantIDHeader(),
          id: selectedItem.id,
          trnFsFuelIssueUpdate: values
        }).unwrap();
        toast.success(`Fuel Issues updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Fuel Issues');
      }
    } else {
      try {
        await createTrnFsFuelIssue({
          ...tenantIDHeader(),
          trnFsFuelIssueInsert: values
        }).unwrap();
        toast.success(`Fuel Issues created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Fuel Issues');
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
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <CustomDatePicker
                  control={form.control}
                  name='trn_date'
                  label='Transaction Date'
                  isRequired={false}
                  viewType='grid'
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
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
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <Controller
                  control={form.control}
                  name='fuel_station_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Station Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='fuel_station_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedRefFuelStationData?.map((item: any) => ({
                            label: item.fule_station_name || '',
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
                  name='fuel_station_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Station Name</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='fuel_type'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Type</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='fuel_receiver_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Receiver Id</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='fuel_receiver_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Receiver Name</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='fuel_quantity'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Quantity</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='fuel_unit_rate'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Unit Rate</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='amount'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='reference_number'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reference Number</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='remarks'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Remarks</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
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
