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
  useCreateSetTenantConfigurationsSetTenantConfigurationsPostMutation,
  useGetAllSetTenantConfigurationssSetTenantConfigurationsGetQuery,
  useUpdateSetTenantConfigurationsSetTenantConfigurationsIdPutMutation,
  useDeleteSetTenantConfigurationsSetTenantConfigurationsIdDeleteMutation,
  useGetSetTenantConfigurationsSetTenantConfigurationsIdGetQuery,
  useGetAllSetTenantConfigurationsEventGetQuery,
  useCreateSetTenantConfigurationsSetTenantConfigurationsEventPostMutation,
  useUpdateSetTenantConfigurationsSetTenantConfigurationsEventIdPutMutation,
  useDeleteSetTenantConfigurationsSetTenantConfigurationsEventIdDeleteMutation,
  useGetSetTenantConfigurationsSetTenantConfigurationsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
  // useGetAllSaasOrganizationssSaasOrganizationsGetQuery,
  useGetAllSaasRefConfigurationssSaasRefConfigurationsGetQuery,
  useGetAllPoplistssPoplistsGetQuery
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  is_global: z.boolean(),
  organization_id: z.number().min(1, {
    message: 'Organization Id is required'
  }),
  configurations_id: z.number().min(1, {
    message: 'Configurations Id is required'
  }),
  config_name: z.string().nonempty({
    message: 'Config Name is required'
  }),
  config_value: z.boolean(),
  config_note: z.string().nonempty({
    message: 'Config Note is required'
  }),
  entity_type: z.string().nonempty({
    message: 'Entity Type is required'
  }),
  is_enabled: z.boolean()
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

export default function TenantConfigurationsForm({
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
  const [createSetTenantConfigurations] =
    useCreateSetTenantConfigurationsSetTenantConfigurationsPostMutation();
  const [updateSetTenantConfigurations] =
    useUpdateSetTenantConfigurationsSetTenantConfigurationsIdPutMutation();

  //make changes for dropdown field options
  // const {
  //   data: fetchedSaasOrganizationsData,
  //   refetch: refetchSaasOrganizationsList
  // } = useGetAllSaasOrganizationssSaasOrganizationsGetQuery(
  //   {
  //     ...tenantIDHeader()
  //   },
  //   {
  //     refetchOnMountOrArgChange: true
  //   }
  // );
  const {
    data: fetchedSaasRefConfigurationsData,
    refetch: refetchSaasRefConfigurationsList
  } = useGetAllSaasRefConfigurationssSaasRefConfigurationsGetQuery(
    {
      ...tenantIDHeader()
    },
    {
      refetchOnMountOrArgChange: true
    }
  );
  const { data: fetchedPoplistsData, refetch: refetchPoplistsList } =
    useGetAllPoplistssPoplistsGetQuery(
      {
        ...tenantIDHeader()
      },
      {
        refetchOnMountOrArgChange: true
      }
    );

  //FIXME Default values to Templatize this
  const defaultValues = {
    is_global: selectedItem?.is_global || false,
    organization_id: selectedItem?.organization_id || 0,
    configurations_id: selectedItem?.configurations_id || 0,
    config_name: selectedItem?.config_name || '',
    config_value: selectedItem?.config_value || false,
    config_note: selectedItem?.config_note || '',
    entity_type: selectedItem?.entity_type || '',
    is_enabled: selectedItem?.is_enabled || false
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSetTenantConfigurations({
          ...tenantIDHeader(),
          id: selectedItem.id,
          setTenantConfigurationsUpdate: values
        }).unwrap();
        toast.success(`Tenant Configurations updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Tenant Configurations');
      }
    } else {
      try {
        await createSetTenantConfigurations({
          ...tenantIDHeader(),
          setTenantConfigurationsInsert: values
        }).unwrap();
        toast.success(`Tenant Configurations created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Tenant Configurations');
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
                  name='is_global'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          checked={field?.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>Is Global</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <Controller
                  control={form.control}
                  name='organization_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='organization_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          // fetchedSaasOrganizationsData?.map((item: any) => ({
                          //   label: item.organization_name || '',
                          //   value: item.id || ''
                          // })) ||
                          selectFieldOptions || []
                        }
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <Controller
                  control={form.control}
                  name='configurations_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Configurations Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='configurations_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedSaasRefConfigurationsData?.map(
                            (item: any) => ({
                              label: item.config_name || '',
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
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='config_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Config Name</FormLabel>
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
                  name='config_value'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          checked={field?.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>Config Value</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='config_note'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Config Note</FormLabel>
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
                  name='entity_type'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Entity Type</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='entity_type'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedPoplistsData?.map((item: any) => ({
                            label: item.scrl_name || '',
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
                  name='is_enabled'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          checked={field?.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>Is Enabled</FormLabel>
                      </div>
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
