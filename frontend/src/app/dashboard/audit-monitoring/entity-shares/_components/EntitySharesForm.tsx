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
  useCreateSaasEntitySharesSaasEntitySharesPostMutation,
  useGetAllSaasEntitySharessSaasEntitySharesGetQuery,
  useUpdateSaasEntitySharesSaasEntitySharesIdPutMutation,
  useDeleteSaasEntitySharesSaasEntitySharesIdDeleteMutation,
  useGetSaasEntitySharesSaasEntitySharesIdGetQuery,
  useGetAllSaasEntitySharesEventGetQuery,
  useCreateSaasEntitySharesSaasEntitySharesEventPostMutation,
  useUpdateSaasEntitySharesSaasEntitySharesEventIdPutMutation,
  useDeleteSaasEntitySharesSaasEntitySharesEventIdDeleteMutation,
  useGetSaasEntitySharesSaasEntitySharesEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  entity_id: z.number().min(1, {
    message: 'Entity Id is required'
  }),
  entity_type: z.string().nonempty({
    message: 'Entity Type is required'
  }),
  entity_view: z.string().nonempty({
    message: 'Entity View is required'
  }),
  expire_date: z.string().nonempty({
    message: 'Expire Date is required'
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

export default function EntitySharesForm({
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
  const [createSaasEntityShares] =
    useCreateSaasEntitySharesSaasEntitySharesPostMutation();
  const [updateSaasEntityShares] =
    useUpdateSaasEntitySharesSaasEntitySharesIdPutMutation();

  //make changes for dropdown field options

  //FIXME Default values to Templatize this
  const defaultValues = {
    entity_id: selectedItem?.entity_id || 0,
    entity_type: selectedItem?.entity_type || '',
    entity_view: selectedItem?.entity_view || '',
    expire_date: selectedItem?.expire_date || null
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSaasEntityShares({
          ...tenantIDHeader(),
          id: selectedItem.id,
          saasEntitySharesUpdate: values
        }).unwrap();
        toast.success(`Entity Shares updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Entity Shares');
      }
    } else {
      try {
        await createSaasEntityShares({
          ...tenantIDHeader(),
          saasEntitySharesInsert: values
        }).unwrap();
        toast.success(`Entity Shares created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Entity Shares');
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
              <div className='mb-6 grid grid-cols-1 gap-6'>
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
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='entity_view'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Entity View</FormLabel>
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
                  name='expire_date'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expire Date</FormLabel>
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
