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
  useCreateTrnCounterlogTrnCounterlogPostMutation,
  useGetAllTrnCounterlogsTrnCounterlogGetQuery,
  useUpdateTrnCounterlogTrnCounterlogIdPutMutation,
  useDeleteTrnCounterlogTrnCounterlogIdDeleteMutation,
  useGetTrnCounterlogTrnCounterlogIdGetQuery,
  useGetAllTrnCounterlogEventGetQuery,
  useCreateTrnCounterlogTrnCounterlogEventPostMutation,
  useUpdateTrnCounterlogTrnCounterlogEventIdPutMutation,
  useDeleteTrnCounterlogTrnCounterlogEventIdDeleteMutation,
  useGetTrnCounterlogTrnCounterlogEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import { useGetAllResAssetsResAssetGetQuery } from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  trn_fnyr: z.number().min(1, {
    message: 'Transaction Fnyr is required'
  }),
  trn_number: z.number().min(1, {
    message: 'Transaction Number is required'
  }),
  trn_date: z.string(),
  asset_id: z.number().min(1, {
    message: 'Asset Id is required'
  }),
  asset_name: z.string().nonempty({
    message: 'Asset Name is required'
  }),
  site_id: z.number().min(1, {
    message: 'Site Id is required'
  }),
  roster_id: z.number().min(1, {
    message: 'Roster Id is required'
  }),
  hours_previous_shift_reading: z.number().min(1, {
    message: 'Hours Previous Shift Reading is required'
  }),
  hours_current_log_reading: z.number().min(1, {
    message: 'Hours Current Log Reading is required'
  }),
  drum_hours_previous_shift_reading: z.number().min(1, {
    message: 'Drum Hours Previous Shift Reading is required'
  }),
  drum_hours_current_log_reading: z.number().min(1, {
    message: 'Drum Hours Current Log Reading is required'
  }),
  log_date_previous_shift: z.string().nonempty({
    message: 'Log Date Previous Shift is required'
  }),
  log_date_current: z.string().nonempty({
    message: 'Log Date Current is required'
  }),
  operater_name_id: z.number().min(1, {
    message: 'Operater Name Id is required'
  }),
  remarks: z.string().nonempty({
    message: 'Remarks is required'
  }),
  defective_counterlog_meter: z.boolean(),
  hours_absolute_running: z.number().min(1, {
    message: 'Hours Absolute Running is required'
  }),
  drum_absolute_running: z.number().min(1, {
    message: 'Drum Absolute Running is required'
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

export default function CounterLogsGridForm({
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
  const [createTrnCounterlog] =
    useCreateTrnCounterlogTrnCounterlogPostMutation();
  const [updateTrnCounterlog] =
    useUpdateTrnCounterlogTrnCounterlogIdPutMutation();

  //make changes for dropdown field options
  const { data: fetchedResAssetData, refetch: refetchResAssetList } =
    useGetAllResAssetsResAssetGetQuery(
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
    trn_number: selectedItem?.trn_number || 0,
    trn_date: selectedItem?.trn_date || '',
    asset_id: selectedItem?.asset_id || 0,
    asset_name: selectedItem?.asset_name || '',
    site_id: selectedItem?.site_id || 0,
    roster_id: selectedItem?.roster_id || 0,
    hours_previous_shift_reading:
      selectedItem?.hours_previous_shift_reading || 0,
    hours_current_log_reading: selectedItem?.hours_current_log_reading || 0,
    drum_hours_previous_shift_reading:
      selectedItem?.drum_hours_previous_shift_reading || 0,
    drum_hours_current_log_reading:
      selectedItem?.drum_hours_current_log_reading || 0,
    log_date_previous_shift: selectedItem?.log_date_previous_shift || null,
    log_date_current: selectedItem?.log_date_current || null,
    operater_name_id: selectedItem?.operater_name_id || 0,
    remarks: selectedItem?.remarks || '',
    defective_counterlog_meter:
      selectedItem?.defective_counterlog_meter || false,
    hours_absolute_running: selectedItem?.hours_absolute_running || 0,
    drum_absolute_running: selectedItem?.drum_absolute_running || 0,
    create_by: selectedItem?.create_by || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnCounterlog({
          ...tenantIDHeader(),
          id: selectedItem.id,
          trnCounterlogUpdate: values
        }).unwrap();
        toast.success(`Counter Logs updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Counter Logs');
      }
    } else {
      try {
        await createTrnCounterlog({
          ...tenantIDHeader(),
          trnCounterlogInsert: values
        }).unwrap();
        toast.success(`Counter Logs created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Counter Logs');
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
                <FormField
                  control={form.control}
                  name='trn_number'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Transaction Number</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <CustomDatePicker
                  control={form.control}
                  name='trn_date'
                  label='Transaction Date'
                  isRequired={false}
                  viewType='grid'
                />
                <Controller
                  control={form.control}
                  name='asset_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asset Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='asset_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedResAssetData?.map((item: any) => ({
                            label: item.asset_type_name || '',
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
                  name='asset_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asset Name</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='site_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site Id</FormLabel>
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
                  name='roster_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roster Id</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='hours_previous_shift_reading'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hours Previous Shift Reading</FormLabel>
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
                  name='hours_current_log_reading'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hours Current Log Reading</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='drum_hours_previous_shift_reading'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Drum Hours Previous Shift Reading</FormLabel>
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
                  name='drum_hours_current_log_reading'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Drum Hours Current Log Reading</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='log_date_previous_shift'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Log Date Previous Shift</FormLabel>
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
                  name='log_date_current'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Log Date Current</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='operater_name_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Operater Name Id</FormLabel>
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
                <FormField
                  control={form.control}
                  name='defective_counterlog_meter'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          checked={field?.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>Defective Counterlog Meter</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='hours_absolute_running'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hours Absolute Running</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='drum_absolute_running'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Drum Absolute Running</FormLabel>
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
