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
  useCreateTrnAssetRosterTrnAssetRosterPostMutation,
  useGetAllTrnAssetRostersTrnAssetRosterGetQuery,
  useUpdateTrnAssetRosterTrnAssetRosterIdPutMutation,
  useDeleteTrnAssetRosterTrnAssetRosterIdDeleteMutation,
  useGetTrnAssetRosterTrnAssetRosterIdGetQuery,
  useGetAllTrnAssetRosterEventGetQuery,
  useCreateTrnAssetRosterTrnAssetRosterEventPostMutation,
  useUpdateTrnAssetRosterTrnAssetRosterEventIdPutMutation,
  useDeleteTrnAssetRosterTrnAssetRosterEventIdDeleteMutation,
  useGetTrnAssetRosterTrnAssetRosterEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
  useGetAllResAssetsResAssetGetQuery,
  useGetAllRefRostersRefRosterGetQuery,
  useGetAllRefWorkstationsRefWorkstationGetQuery
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  asset_code: z.number().min(1, {
    message: 'Asset Code is required'
  }),
  roster_id: z.number().min(1, {
    message: 'Roster Id is required'
  }),
  site_id: z.number().min(1, {
    message: 'Site Id is required'
  }),
  site_name: z.string().nonempty({
    message: 'Site Name is required'
  }),
  workstation_id: z.number().min(1, {
    message: 'Workstation Id is required'
  }),
  workstation_name: z.string().nonempty({
    message: 'Workstation Name is required'
  }),
  activation_date: z.string(),
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

export default function AssetRostersGridForm({
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
  const [createTrnAssetRoster] =
    useCreateTrnAssetRosterTrnAssetRosterPostMutation();
  const [updateTrnAssetRoster] =
    useUpdateTrnAssetRosterTrnAssetRosterIdPutMutation();

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
  const { data: fetchedRefRosterData, refetch: refetchRefRosterList } =
    useGetAllRefRostersRefRosterGetQuery(
      {
        ...tenantIDHeader()
      },
      {
        refetchOnMountOrArgChange: true
      }
    );
  const {
    data: fetchedRefWorkstationData,
    refetch: refetchRefWorkstationList
  } = useGetAllRefWorkstationsRefWorkstationGetQuery(
    {
      ...tenantIDHeader()
    },
    {
      refetchOnMountOrArgChange: true
    }
  );

  //FIXME Default values to Templatize this
  const defaultValues = {
    asset_code: selectedItem?.asset_code || 0,
    roster_id: selectedItem?.roster_id || 0,
    site_id: selectedItem?.site_id || 0,
    site_name: selectedItem?.site_name || '',
    workstation_id: selectedItem?.workstation_id || 0,
    workstation_name: selectedItem?.workstation_name || '',
    activation_date: selectedItem?.activation_date || '',
    create_by: selectedItem?.create_by || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnAssetRoster({
          ...tenantIDHeader(),
          id: selectedItem.id,
          trnAssetRosterUpdate: values
        }).unwrap();
        toast.success(`Asset Rosters updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Asset Rosters');
      }
    } else {
      try {
        await createTrnAssetRoster({
          ...tenantIDHeader(),
          trnAssetRosterInsert: values
        }).unwrap();
        toast.success(`Asset Rosters created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Asset Rosters');
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
                  name='asset_code'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asset Code</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='asset_code'
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
                <Controller
                  control={form.control}
                  name='roster_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roster Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='roster_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedRefRosterData?.map((item: any) => ({
                            label: item.roster_name || '',
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
                <Controller
                  control={form.control}
                  name='workstation_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Workstation Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='workstation_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedRefWorkstationData?.map((item: any) => ({
                            label: item.workstation_name || '',
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
                  name='workstation_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Workstation Name</FormLabel>
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
                  name='activation_date'
                  label='Activation Date'
                  isRequired={false}
                  viewType='grid'
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
