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
  useCreateTrnEngagementTrnEngagementPostMutation,
  useGetAllTrnEngagementsTrnEngagementGetQuery,
  useUpdateTrnEngagementTrnEngagementIdPutMutation,
  useDeleteTrnEngagementTrnEngagementIdDeleteMutation,
  useGetTrnEngagementTrnEngagementIdGetQuery,
  useGetAllTrnEngagementEventGetQuery,
  useCreateTrnEngagementTrnEngagementEventPostMutation,
  useUpdateTrnEngagementTrnEngagementEventIdPutMutation,
  useDeleteTrnEngagementTrnEngagementEventIdDeleteMutation,
  useGetTrnEngagementTrnEngagementEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import { useGetAllResAssetsResAssetGetQuery } from '@/redux/store/generatedServices/assetApi';

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
  engagement_duration: z.string(),
  engagement_fullshift: z.boolean(),
  engagement_start_time: z.string(),
  engagement_end_time: z.string(),
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

export default function EngagementsInlineForm({
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
  const [createTrnEngagement] =
    useCreateTrnEngagementTrnEngagementPostMutation();
  const [updateTrnEngagement] =
    useUpdateTrnEngagementTrnEngagementIdPutMutation();

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
    trn_number: selectedItem?.trn_number || 0,
    trn_date: selectedItem?.trn_date || '',
    roster_id: selectedItem?.roster_id || 0,
    asset_id: selectedItem?.asset_id || 0,
    asset_name: selectedItem?.asset_name || '',
    site_id: selectedItem?.site_id || 0,
    engagement_duration: selectedItem?.engagement_duration || '',
    engagement_fullshift: selectedItem?.engagement_fullshift || false,
    engagement_start_time: selectedItem?.engagement_start_time || '',
    engagement_end_time: selectedItem?.engagement_end_time || '',
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
        await updateTrnEngagement({
          ...tenantIDHeader(),
          id: selectedItem.id,
          trnEngagementUpdate: values
        }).unwrap();
        toast.success(`Engagements updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Engagements');
      }
    } else {
      try {
        await createTrnEngagement({
          ...tenantIDHeader(),
          trnEngagementInsert: values
        }).unwrap();
        toast.success(`Engagements created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Engagements');
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
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>
                        Transaction Number
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
                <CustomDatePicker
                  control={form.control}
                  name='trn_date'
                  label='Transaction Date'
                  isRequired={false}
                  viewType='inline'
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='roster_id'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Roster Id</FormLabel>
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
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Asset Name</FormLabel>
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
                  name='site_id'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Site Id</FormLabel>
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
                  name='engagement_duration'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>
                        Engagement Duration
                      </FormLabel>
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
                  name='engagement_fullshift'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          checked={field?.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>Engagement Fullshift</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='engagement_start_time'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>
                        Engagement Start Time
                      </FormLabel>
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
                  name='engagement_end_time'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>
                        Engagement End Time
                      </FormLabel>
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
                  name='remarks'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Remarks</FormLabel>
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
