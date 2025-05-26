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
  useCreateSaasApiKeyAuditSaasApiKeyAuditPostMutation,
  useGetAllSaasApiKeyAuditsSaasApiKeyAuditGetQuery,
  useUpdateSaasApiKeyAuditSaasApiKeyAuditIdPutMutation,
  useDeleteSaasApiKeyAuditSaasApiKeyAuditIdDeleteMutation,
  useGetSaasApiKeyAuditSaasApiKeyAuditIdGetQuery,
  useGetAllSaasApiKeyAuditEventGetQuery,
  useCreateSaasApiKeyAuditSaasApiKeyAuditEventPostMutation,
  useUpdateSaasApiKeyAuditSaasApiKeyAuditEventIdPutMutation,
  useDeleteSaasApiKeyAuditSaasApiKeyAuditEventIdDeleteMutation,
  useGetSaasApiKeyAuditSaasApiKeyAuditEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  current_api_key: z.string().nonempty({
    message: 'Current Api Key is required'
  }),
  new_api_key: z.string().nonempty({
    message: 'New Api Key is required'
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

//file_id: z.array(z.number()).optional(), // Optional array of file_ids

export default function ApiKeyAuditForm({
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
  const [createSaasApiKeyAudit] =
    useCreateSaasApiKeyAuditSaasApiKeyAuditPostMutation();
  const [updateSaasApiKeyAudit] =
    useUpdateSaasApiKeyAuditSaasApiKeyAuditIdPutMutation();

  //make changes for dropdown field options

  //FIXME Default values to Templatize this
  const defaultValues = {
    current_api_key: selectedItem?.current_api_key || '',
    new_api_key: selectedItem?.new_api_key || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSaasApiKeyAudit({
          ...tenantIDHeader(),
          id: selectedItem.id,
          saasApiKeyAuditUpdate: values
        }).unwrap();
        toast.success(`Api Key Audit updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Api Key Audit');
      }
    } else {
      try {
        await createSaasApiKeyAudit({
          ...tenantIDHeader(),
          saasApiKeyAuditInsert: values
        }).unwrap();
        toast.success(`Api Key Audit created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Api Key Audit');
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
                  name='current_api_key'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Api Key</FormLabel>
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
                  name='new_api_key'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Api Key</FormLabel>
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
