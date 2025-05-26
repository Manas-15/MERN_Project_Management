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
  useCreateTrnDowntimeTrnDowntimePostMutation,
  useGetAllTrnDowntimesTrnDowntimeGetQuery,
  useUpdateTrnDowntimeTrnDowntimeIdPutMutation,
  useDeleteTrnDowntimeTrnDowntimeIdDeleteMutation,
  useGetTrnDowntimeTrnDowntimeIdGetQuery,
  useGetAllTrnDowntimeEventGetQuery,
  useCreateTrnDowntimeTrnDowntimeEventPostMutation,
  useUpdateTrnDowntimeTrnDowntimeEventIdPutMutation,
  useDeleteTrnDowntimeTrnDowntimeEventIdDeleteMutation,
  useGetTrnDowntimeTrnDowntimeEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
  useGetAllResAssetsResAssetGetQuery,
  useGetAllAssetMatrixSectionsAssetMatrixSectionGetQuery
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  trn_number: z.number().min(1, {
    message: 'Transaction Number is required'
  }),
  trn_date: z.string(),
  roster_id: z.number().min(1, {
    message: 'Roster Id is required'
  }),
  asset_id: z.number().min(1, {
    message: 'Asset Id is required'
  }),
  asset_name: z.string().nonempty({
    message: 'Asset Name is required'
  }),
  site_id: z.number().min(1, {
    message: 'Site Id is required'
  }),
  shift_meter_reading: z.number().min(1, {
    message: 'Shift Meter Reading is required'
  }),
  shift_drum_reading: z.number().min(1, {
    message: 'Shift Drum Reading is required'
  }),
  downtime_type_id: z.number().min(1, {
    message: 'Downtime Type Id is required'
  }),
  downtime_duration: z.string(),
  downtime_start_time: z.string(),
  downtime_end_time: z.string(),
  fullshift: z.boolean(),
  downtime_section: z.number().min(1, {
    message: 'Downtime Section is required'
  }),
  section_name: z.string().nonempty({
    message: 'Section Name is required'
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

//file_id: z.array(z.number()).optional(), // Optional array of file_ids

export default function DowntimeForm({
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
  const [createTrnDowntime] = useCreateTrnDowntimeTrnDowntimePostMutation();
  const [updateTrnDowntime] = useUpdateTrnDowntimeTrnDowntimeIdPutMutation();

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

  //FIXME Default values to Templatize this
  const defaultValues = {
    trn_number: selectedItem?.trn_number || 0,
    trn_date: selectedItem?.trn_date || '',
    roster_id: selectedItem?.roster_id || 0,
    asset_id: selectedItem?.asset_id || 0,
    asset_name: selectedItem?.asset_name || '',
    site_id: selectedItem?.site_id || 0,
    shift_meter_reading: selectedItem?.shift_meter_reading || 0,
    shift_drum_reading: selectedItem?.shift_drum_reading || 0,
    downtime_type_id: selectedItem?.downtime_type_id || 0,
    downtime_duration: selectedItem?.downtime_duration || '',
    downtime_start_time: selectedItem?.downtime_start_time || '',
    downtime_end_time: selectedItem?.downtime_end_time || '',
    fullshift: selectedItem?.fullshift || false,
    downtime_section: selectedItem?.downtime_section || 0,
    section_name: selectedItem?.section_name || '',
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
        await updateTrnDowntime({
          ...tenantIDHeader(),
          id: selectedItem.id,
          trnDowntimeUpdate: values
        }).unwrap();
        toast.success(`Downtime updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Downtime');
      }
    } else {
      try {
        await createTrnDowntime({
          ...tenantIDHeader(),
          trnDowntimeInsert: values
        }).unwrap();
        toast.success(`Downtime created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Downtime');
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
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
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
              <div className='mb-6 grid grid-cols-1 gap-6'>
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
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
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
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='shift_meter_reading'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Shift Meter Reading</FormLabel>
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
                  name='shift_drum_reading'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Shift Drum Reading</FormLabel>
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
                  name='downtime_type_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Downtime Type Id</FormLabel>
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
                  name='downtime_duration'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Downtime Duration</FormLabel>
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
                  name='downtime_start_time'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Downtime Start Time</FormLabel>
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
                  name='downtime_end_time'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Downtime End Time</FormLabel>
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
                  name='fullshift'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          checked={field?.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>Fullshift</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <Controller
                  control={form.control}
                  name='downtime_section'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Downtime Section</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='downtime_section'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedAssetMatrixSectionData?.map((item: any) => ({
                            label: item.section_name || '',
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
                  name='section_name'
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
