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
  useCreateTrnRoutineServiceCheckTrnRoutineServiceCheckPostMutation,
  useGetAllTrnRoutineServiceChecksTrnRoutineServiceCheckGetQuery,
  useUpdateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPutMutation,
  useDeleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDeleteMutation,
  useGetTrnRoutineServiceCheckTrnRoutineServiceCheckIdGetQuery,
  useGetAllTrnRoutineServiceCheckEventGetQuery,
  useCreateTrnRoutineServiceCheckTrnRoutineServiceCheckEventPostMutation,
  useUpdateTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdPutMutation,
  useDeleteTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdDeleteMutation,
  useGetTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
  useGetAllResAssetsResAssetGetQuery,
  useGetAllAssetServiceCheckListsAssetServiceCheckListGetQuery,
  useGetAllSetSiteGroupingsSetSiteGroupingGetQuery
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  asset_id: z.number().min(1, {
    message: 'Asset Id is required'
  }),
  asset_name: z.string().nonempty({
    message: 'Asset Name is required'
  }),
  serial_number: z.number().min(1, {
    message: 'Serial Number is required'
  }),
  last_service_date: z.string(),
  service_date: z.string(),
  service_id: z.string().nonempty({
    message: 'Service Id is required'
  }),
  check_sheet_id: z.number().min(1, {
    message: 'Check Sheet Id is required'
  }),
  check_list_name: z.string().nonempty({
    message: 'Check List Name is required'
  }),
  site_id: z.number().min(1, {
    message: 'Site Id is required'
  }),
  site_name: z.string().nonempty({
    message: 'Site Name is required'
  }),
  previous_counter_log_hours: z.number().min(1, {
    message: 'Previous Counter Log Hours is required'
  }),
  current_counter_log_hours: z.number().min(1, {
    message: 'Current Counter Log Hours is required'
  }),
  previous_drum_hours: z.number().min(1, {
    message: 'Previous Drum Hours is required'
  }),
  current_drum_hours: z.number().min(1, {
    message: 'Current Drum Hours is required'
  }),
  checklist_details: z.string().nonempty({
    message: 'Checklist Details is required'
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

export default function RoutineServiceChecksGridForm({
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
  const [createTrnRoutineServiceCheck] =
    useCreateTrnRoutineServiceCheckTrnRoutineServiceCheckPostMutation();
  const [updateTrnRoutineServiceCheck] =
    useUpdateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPutMutation();

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
    data: fetchedSetSiteGroupingData,
    refetch: refetchSetSiteGroupingList
  } = useGetAllSetSiteGroupingsSetSiteGroupingGetQuery(
    {
      ...tenantIDHeader()
    },
    {
      refetchOnMountOrArgChange: true
    }
  );

  //FIXME Default values to Templatize this
  const defaultValues = {
    asset_id: selectedItem?.asset_id || 0,
    asset_name: selectedItem?.asset_name || '',
    serial_number: selectedItem?.serial_number || 0,
    last_service_date: selectedItem?.last_service_date || '',
    service_date: selectedItem?.service_date || '',
    service_id: selectedItem?.service_id || '',
    check_sheet_id: selectedItem?.check_sheet_id || 0,
    check_list_name: selectedItem?.check_list_name || '',
    site_id: selectedItem?.site_id || 0,
    site_name: selectedItem?.site_name || '',
    previous_counter_log_hours: selectedItem?.previous_counter_log_hours || 0,
    current_counter_log_hours: selectedItem?.current_counter_log_hours || 0,
    previous_drum_hours: selectedItem?.previous_drum_hours || 0,
    current_drum_hours: selectedItem?.current_drum_hours || 0,
    checklist_details: selectedItem?.checklist_details || '',
    create_by: selectedItem?.create_by || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnRoutineServiceCheck({
          ...tenantIDHeader(),
          id: selectedItem.id,
          trnRoutineServiceCheckUpdate: values
        }).unwrap();
        toast.success(`Routine Service Checks updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Routine Service Checks');
      }
    } else {
      try {
        await createTrnRoutineServiceCheck({
          ...tenantIDHeader(),
          trnRoutineServiceCheckInsert: values
        }).unwrap();
        toast.success(`Routine Service Checks created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Routine Service Checks');
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
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='serial_number'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Serial Number</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CustomDatePicker
                  control={form.control}
                  name='last_service_date'
                  label='Last Service Date'
                  isRequired={false}
                  viewType='grid'
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <CustomDatePicker
                  control={form.control}
                  name='service_date'
                  label='Service Date'
                  isRequired={false}
                  viewType='grid'
                />
                <FormField
                  control={form.control}
                  name='service_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Id</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <Controller
                  control={form.control}
                  name='check_sheet_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Check Sheet Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='check_sheet_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedAssetServiceCheckListData?.map(
                            (item: any) => ({
                              label: item.checksheet_name || '',
                              value: item.id || ''
                            })
                          ) ||
                          selectFieldOptions ||
                          []
                        }
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='check_list_name'
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
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <Controller
                  control={form.control}
                  name='site_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='site_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedSetSiteGroupingData?.map((item: any) => ({
                            label: item.group_name || '',
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
                <FormField
                  control={form.control}
                  name='site_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site Name</FormLabel>
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
                  name='previous_counter_log_hours'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Previous Counter Log Hours</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='current_counter_log_hours'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Counter Log Hours</FormLabel>
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
                  name='previous_drum_hours'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Previous Drum Hours</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='current_drum_hours'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Drum Hours</FormLabel>
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
                  name='checklist_details'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Checklist Details</FormLabel>
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
