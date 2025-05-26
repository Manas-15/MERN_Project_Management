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
  useCreateTrnHrEmployeeAssetTrnHrEmployeeAssetPostMutation,
  useGetAllTrnHrEmployeeAssetsTrnHrEmployeeAssetGetQuery,
  useUpdateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPutMutation,
  useDeleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDeleteMutation,
  useGetTrnHrEmployeeAssetTrnHrEmployeeAssetIdGetQuery,
  useGetAllTrnHrEmployeeAssetEventGetQuery,
  useCreateTrnHrEmployeeAssetTrnHrEmployeeAssetEventPostMutation,
  useUpdateTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdPutMutation,
  useDeleteTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdDeleteMutation,
  useGetTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
  useGetAllSetSiteGroupingsSetSiteGroupingGetQuery,
  useGetAllResAssetsResAssetGetQuery
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  asset_site_id: z.number().min(1, {
    message: 'Asset Site Id is required'
  }),
  site_name: z.string().nonempty({
    message: 'Site Name is required'
  }),
  change_date: z.string(),
  asset_id: z.number().min(1, {
    message: 'Asset Id is required'
  }),
  asset_name: z.string().nonempty({
    message: 'Asset Name is required'
  }),
  operator_id: z.number().min(1, {
    message: 'Operator Id is required'
  }),
  operator_name: z.string().nonempty({
    message: 'Operator Name is required'
  }),
  supervisior_id: z.number().min(1, {
    message: 'Supervisior Id is required'
  }),
  supervisior_name: z.string().nonempty({
    message: 'Supervisior Name is required'
  }),
  engineers_id: z.number().min(1, {
    message: 'Engineers Id is required'
  }),
  engineers_name: z.string().nonempty({
    message: 'Engineers Name is required'
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

export default function EmployeeAssetsGridForm({
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
  const [createTrnHrEmployeeAsset] =
    useCreateTrnHrEmployeeAssetTrnHrEmployeeAssetPostMutation();
  const [updateTrnHrEmployeeAsset] =
    useUpdateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPutMutation();

  //make changes for dropdown field options
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
    asset_site_id: selectedItem?.asset_site_id || 0,
    site_name: selectedItem?.site_name || '',
    change_date: selectedItem?.change_date || '',
    asset_id: selectedItem?.asset_id || 0,
    asset_name: selectedItem?.asset_name || '',
    operator_id: selectedItem?.operator_id || 0,
    operator_name: selectedItem?.operator_name || '',
    supervisior_id: selectedItem?.supervisior_id || 0,
    supervisior_name: selectedItem?.supervisior_name || '',
    engineers_id: selectedItem?.engineers_id || 0,
    engineers_name: selectedItem?.engineers_name || '',
    create_by: selectedItem?.create_by || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnHrEmployeeAsset({
          ...tenantIDHeader(),
          id: selectedItem.id,
          trnHrEmployeeAssetUpdate: values
        }).unwrap();
        toast.success(`Employee Assets updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Employee Assets');
      }
    } else {
      try {
        await createTrnHrEmployeeAsset({
          ...tenantIDHeader(),
          trnHrEmployeeAssetInsert: values
        }).unwrap();
        toast.success(`Employee Assets created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Employee Assets');
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
                  name='asset_site_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asset Site Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='asset_site_id'
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
                <CustomDatePicker
                  control={form.control}
                  name='change_date'
                  label='Change Date'
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
                  name='operator_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Operator Id</FormLabel>
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
                  name='operator_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Operator Name</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='supervisior_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Supervisior Id</FormLabel>
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
                  name='supervisior_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Supervisior Name</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='engineers_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Engineers Id</FormLabel>
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
                  name='engineers_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Engineers Name</FormLabel>
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
