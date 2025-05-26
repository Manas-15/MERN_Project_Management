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
  useCreateSaasFlexFieldValuesSaasFlexFieldValuesPostMutation,
  useGetAllSaasFlexFieldValuessSaasFlexFieldValuesGetQuery,
  useUpdateSaasFlexFieldValuesSaasFlexFieldValuesIdPutMutation,
  useDeleteSaasFlexFieldValuesSaasFlexFieldValuesIdDeleteMutation,
  useGetSaasFlexFieldValuesSaasFlexFieldValuesIdGetQuery,
  useGetAllSaasFlexFieldValuesEventGetQuery,
  useCreateSaasFlexFieldValuesSaasFlexFieldValuesEventPostMutation,
  useUpdateSaasFlexFieldValuesSaasFlexFieldValuesEventIdPutMutation,
  useDeleteSaasFlexFieldValuesSaasFlexFieldValuesEventIdDeleteMutation,
  useGetSaasFlexFieldValuesSaasFlexFieldValuesEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  entity_type: z.string().nonempty({
    message: 'Entity Type is required'
  }),
  entity_id: z.number().min(1, {
    message: 'Entity Id is required'
  }),
  flex_fields: z.string()
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

export default function FlexibleFieldValuesGridForm({
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
  const [createSaasFlexFieldValues] =
    useCreateSaasFlexFieldValuesSaasFlexFieldValuesPostMutation();
  const [updateSaasFlexFieldValues] =
    useUpdateSaasFlexFieldValuesSaasFlexFieldValuesIdPutMutation();

  //make changes for dropdown field options

  //FIXME Default values to Templatize this
  const defaultValues = {
    entity_type: selectedItem?.entity_type || '',
    entity_id: selectedItem?.entity_id || 0,
    flex_fields: selectedItem?.flex_fields || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSaasFlexFieldValues({
          ...tenantIDHeader(),
          id: selectedItem.id,
          saasFlexFieldValuesUpdate: values
        }).unwrap();
        toast.success(`Flexible Field Values updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Flexible Field Values');
      }
    } else {
      try {
        await createSaasFlexFieldValues({
          ...tenantIDHeader(),
          saasFlexFieldValuesInsert: values
        }).unwrap();
        toast.success(`Flexible Field Values created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Flexible Field Values');
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
                <FormField
                  control={form.control}
                  name='entity_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Entity Id</FormLabel>
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
                  name='flex_fields'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Flex Fields</FormLabel>
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
