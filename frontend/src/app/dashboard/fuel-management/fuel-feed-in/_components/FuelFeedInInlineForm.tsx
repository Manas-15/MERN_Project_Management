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
  useCreateTrnFuelFeedinTrnFuelFeedinPostMutation,
  useGetAllTrnFuelFeedinsTrnFuelFeedinGetQuery,
  useUpdateTrnFuelFeedinTrnFuelFeedinIdPutMutation,
  useDeleteTrnFuelFeedinTrnFuelFeedinIdDeleteMutation,
  useGetTrnFuelFeedinTrnFuelFeedinIdGetQuery,
  useGetAllTrnFuelFeedinEventGetQuery,
  useCreateTrnFuelFeedinTrnFuelFeedinEventPostMutation,
  useUpdateTrnFuelFeedinTrnFuelFeedinEventIdPutMutation,
  useDeleteTrnFuelFeedinTrnFuelFeedinEventIdDeleteMutation,
  useGetTrnFuelFeedinTrnFuelFeedinEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
  useGetAllResAssetsResAssetGetQuery,
  useGetAllRefFuelStationsRefFuelStationGetQuery
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  trn_fnyr: z.number().min(1, {
    message: 'Transaction Fnyr is required'
  }),
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
  site_id: z.number().min(1, {
    message: 'Site Id is required'
  }),
  fulefeedin_station: z.number().min(1, {
    message: 'Fulefeedin Station is required'
  }),
  fule_station_name: z.string().nonempty({
    message: 'Fule Station Name is required'
  }),
  other_station_detail: z.string().nonempty({
    message: 'Other Station Detail is required'
  }),
  fule_type: z.string().nonempty({
    message: 'Fule Type is required'
  }),
  fuel_quantity: z.number().min(1, {
    message: 'Fuel Quantity is required'
  }),
  fuel_unit_rate: z.number().min(1, {
    message: 'Fuel Unit Rate is required'
  }),
  fuel_amount: z.number().min(1, {
    message: 'Fuel Amount is required'
  }),
  fuel_tank_status: z.boolean(),
  reference_number: z.string().nonempty({
    message: 'Reference Number is required'
  }),
  attach_invoice: z.string().nonempty({
    message: 'Attach Invoice is required'
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

//file_id: z.array(z.number()).optional(), // Optional array of file_ids

export default function FuelFeedInInlineForm({
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
  const [createTrnFuelFeedin] =
    useCreateTrnFuelFeedinTrnFuelFeedinPostMutation();
  const [updateTrnFuelFeedin] =
    useUpdateTrnFuelFeedinTrnFuelFeedinIdPutMutation();

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
    trn_number: selectedItem?.trn_number || 0,
    trn_date: selectedItem?.trn_date || '',
    roster_id: selectedItem?.roster_id || 0,
    asset_id: selectedItem?.asset_id || 0,
    site_id: selectedItem?.site_id || 0,
    fulefeedin_station: selectedItem?.fulefeedin_station || 0,
    fule_station_name: selectedItem?.fule_station_name || '',
    other_station_detail: selectedItem?.other_station_detail || '',
    fule_type: selectedItem?.fule_type || '',
    fuel_quantity: selectedItem?.fuel_quantity || '',
    fuel_unit_rate: selectedItem?.fuel_unit_rate || '',
    fuel_amount: selectedItem?.fuel_amount || '',
    fuel_tank_status: selectedItem?.fuel_tank_status || false,
    reference_number: selectedItem?.reference_number || '',
    attach_invoice: selectedItem?.attach_invoice || '',
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
        await updateTrnFuelFeedin({
          ...tenantIDHeader(),
          id: selectedItem.id,
          trnFuelFeedinUpdate: values
        }).unwrap();
        toast.success(`Fuel Feed In updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Fuel Feed In');
      }
    } else {
      try {
        await createTrnFuelFeedin({
          ...tenantIDHeader(),
          trnFuelFeedinInsert: values
        }).unwrap();
        toast.success(`Fuel Feed In created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Fuel Feed In');
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
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>
                        Transaction Fnyr
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
                <Controller
                  control={form.control}
                  name='fulefeedin_station'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fulefeedin Station</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='fulefeedin_station'
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
                  name='fule_station_name'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>
                        Fule Station Name
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
                  name='other_station_detail'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>
                        Other Station Detail
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
                  name='fule_type'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Fule Type</FormLabel>
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
                  name='fuel_quantity'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Fuel Quantity</FormLabel>
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
                  name='fuel_unit_rate'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Fuel Unit Rate</FormLabel>
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
                  name='fuel_amount'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Fuel Amount</FormLabel>
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
                  name='fuel_tank_status'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          checked={field?.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>Fuel Tank Status</FormLabel>
                      </div>
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
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>
                        Reference Number
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
                  name='attach_invoice'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Attach Invoice</FormLabel>
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
