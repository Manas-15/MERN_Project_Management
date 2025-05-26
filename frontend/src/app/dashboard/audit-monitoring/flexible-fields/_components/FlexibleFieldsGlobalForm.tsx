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
  useCreateSaasFlexFieldsSaasFlexFieldsPostMutation,
  useGetAllSaasFlexFieldssSaasFlexFieldsGetQuery,
  useUpdateSaasFlexFieldsSaasFlexFieldsIdPutMutation,
  useDeleteSaasFlexFieldsSaasFlexFieldsIdDeleteMutation,
  useGetSaasFlexFieldsSaasFlexFieldsIdGetQuery,
  useGetAllSaasFlexFieldsEventGetQuery,
  useCreateSaasFlexFieldsSaasFlexFieldsEventPostMutation,
  useUpdateSaasFlexFieldsSaasFlexFieldsEventIdPutMutation,
  useDeleteSaasFlexFieldsSaasFlexFieldsEventIdDeleteMutation,
  useGetSaasFlexFieldsSaasFlexFieldsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

// import {
//           useGetAllSaasOrganizationssSaasOrganizationsGetQuery,
// } from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  organization_id: z.number().min(1, {
    message: 'Organization Id is required'
  }),
  description: z.string().nonempty({
    message: 'Description is required'
  }),
  field_name: z.string().nonempty({
    message: 'Field Name is required'
  }),
  field_type: z.string().nonempty({
    message: 'Field Type is required'
  }),
  flex_feild_details: z.string(),
  is_global: z.boolean(),
  entity_applied: z.string().nonempty({
    message: 'Entity Applied is required'
  })
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

export default function FlexibleFieldsGlobalForm({
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
  const [createSaasFlexFields] =
    useCreateSaasFlexFieldsSaasFlexFieldsPostMutation();
  const [updateSaasFlexFields] =
    useUpdateSaasFlexFieldsSaasFlexFieldsIdPutMutation();

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

  //FIXME Default values to Templatize this
  const defaultValues = {
    organization_id: selectedItem?.organization_id || 0,
    description: selectedItem?.description || '',
    field_name: selectedItem?.field_name || '',
    field_type: selectedItem?.field_type || '',
    flex_feild_details: selectedItem?.flex_feild_details || '',
    is_global: selectedItem?.is_global || false,
    entity_applied: selectedItem?.entity_applied || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSaasFlexFields({
          ...tenantIDHeader(),
          id: selectedItem.id,
          saasFlexFieldsUpdate: values
        }).unwrap();
        toast.success(`Flexible Fields updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Flexible Fields');
      }
    } else {
      try {
        await createSaasFlexFields({
          ...tenantIDHeader(),
          saasFlexFieldsInsert: values
        }).unwrap();
        toast.success(`Flexible Fields created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Flexible Fields');
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
                <FormField
                  control={form.control}
                  name='description'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
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
                  name='field_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Field Name</FormLabel>
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
                  name='field_type'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Field Type</FormLabel>
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
                  name='flex_feild_details'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Flex Feild Details</FormLabel>
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
                <FormField
                  control={form.control}
                  name='entity_applied'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Entity Applied</FormLabel>
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
