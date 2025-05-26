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
  useCreateSetTenantWorkflowsSetTenantWorkflowsPostMutation,
  useGetAllSetTenantWorkflowssSetTenantWorkflowsGetQuery,
  useUpdateSetTenantWorkflowsSetTenantWorkflowsIdPutMutation,
  useDeleteSetTenantWorkflowsSetTenantWorkflowsIdDeleteMutation,
  useGetSetTenantWorkflowsSetTenantWorkflowsIdGetQuery,
  useGetAllSetTenantWorkflowsEventGetQuery,
  useCreateSetTenantWorkflowsSetTenantWorkflowsEventPostMutation,
  useUpdateSetTenantWorkflowsSetTenantWorkflowsEventIdPutMutation,
  useDeleteSetTenantWorkflowsSetTenantWorkflowsEventIdDeleteMutation,
  useGetSetTenantWorkflowsSetTenantWorkflowsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
  // useGetAllSaasOrganizationssSaasOrganizationsGetQuery,
  useGetAllSaasRefWorkflowssSaasRefWorkflowsGetQuery
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  is_global: z.boolean(),
  organization_id: z.number().min(1, {
    message: 'Organization Id is required'
  }),
  entity_type: z.string().nonempty({
    message: 'Entity Type is required'
  }),
  workflow_id: z.number().min(1, {
    message: 'Workflow Id is required'
  }),
  stage_name: z.string().nonempty({
    message: 'Stage Name is required'
  }),
  status_sequence: z.number().min(1, {
    message: 'Status Sequence is required'
  }),
  is_default: z.boolean(),
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

export default function TenantWorkflowsGridForm({
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
  const [createSetTenantWorkflows] =
    useCreateSetTenantWorkflowsSetTenantWorkflowsPostMutation();
  const [updateSetTenantWorkflows] =
    useUpdateSetTenantWorkflowsSetTenantWorkflowsIdPutMutation();

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
    data: fetchedSaasRefWorkflowsData,
    refetch: refetchSaasRefWorkflowsList
  } = useGetAllSaasRefWorkflowssSaasRefWorkflowsGetQuery(
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
    entity_type: selectedItem?.entity_type || '',
    workflow_id: selectedItem?.workflow_id || 0,
    stage_name: selectedItem?.stage_name || '',
    status_sequence: selectedItem?.status_sequence || 0,
    is_default: selectedItem?.is_default || false,
    is_enabled: selectedItem?.is_enabled || false
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSetTenantWorkflows({
          ...tenantIDHeader(),
          id: selectedItem.id,
          setTenantWorkflowsUpdate: values
        }).unwrap();
        toast.success(`Tenant Workflows updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Tenant Workflows');
      }
    } else {
      try {
        await createSetTenantWorkflows({
          ...tenantIDHeader(),
          setTenantWorkflowsInsert: values
        }).unwrap();
        toast.success(`Tenant Workflows created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Tenant Workflows');
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
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='entity_type'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Entity Type</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Controller
                  control={form.control}
                  name='workflow_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Workflow Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='workflow_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedSaasRefWorkflowsData?.map((item: any) => ({
                            label: item.stage_name || '',
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
                  name='stage_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stage Name</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='status_sequence'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status Sequence</FormLabel>
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
                  name='is_default'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          checked={field?.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>Is Default</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
