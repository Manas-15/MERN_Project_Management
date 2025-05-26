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
  useCreateTransactionNoSettingsTransactionNoSettingsPostMutation,
  useGetAllTransactionNoSettingssTransactionNoSettingsGetQuery,
  useUpdateTransactionNoSettingsTransactionNoSettingsIdPutMutation,
  useDeleteTransactionNoSettingsTransactionNoSettingsIdDeleteMutation,
  useGetTransactionNoSettingsTransactionNoSettingsIdGetQuery,
  useGetAllTransactionNoSettingsEventGetQuery,
  useCreateTransactionNoSettingsTransactionNoSettingsEventPostMutation,
  useUpdateTransactionNoSettingsTransactionNoSettingsEventIdPutMutation,
  useDeleteTransactionNoSettingsTransactionNoSettingsEventIdDeleteMutation,
  useGetTransactionNoSettingsTransactionNoSettingsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
  // useGetAllSaasOrganizationssSaasOrganizationsGetQuery,
  useGetAllPoplistssPoplistsGetQuery
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  organization_id: z.number().min(1, {
    message: 'Organization Id is required'
  }),
  associated_to: z.string().nonempty({
    message: 'Associated To is required'
  }),
  system_generate_id: z.boolean(),
  prefix: z.string().nonempty({
    message: 'Prefix is required'
  }),
  num_fmt: z.string().nonempty({
    message: 'Num Fmt is required'
  }),
  is_global: z.boolean(),
  applicable_date: z.string().nonempty({
    message: 'Applicable Date is required'
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

export default function TransactionSettingsGridForm({
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
  const [createTransactionNoSettings] =
    useCreateTransactionNoSettingsTransactionNoSettingsPostMutation();
  const [updateTransactionNoSettings] =
    useUpdateTransactionNoSettingsTransactionNoSettingsIdPutMutation();

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
    organization_id: selectedItem?.organization_id || 0,
    associated_to: selectedItem?.associated_to || '',
    system_generate_id: selectedItem?.system_generate_id || false,
    prefix: selectedItem?.prefix || '',
    num_fmt: selectedItem?.num_fmt || '',
    is_global: selectedItem?.is_global || false,
    applicable_date: selectedItem?.applicable_date || null
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTransactionNoSettings({
          ...tenantIDHeader(),
          id: selectedItem.id,
          transactionNoSettingsUpdate: values
        }).unwrap();
        toast.success(`Transaction Settings updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Transaction Settings');
      }
    } else {
      try {
        await createTransactionNoSettings({
          ...tenantIDHeader(),
          transactionNoSettingsInsert: values
        }).unwrap();
        toast.success(`Transaction Settings created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Transaction Settings');
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
                <Controller
                  control={form.control}
                  name='associated_to'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Associated To</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='associated_to'
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
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='system_generate_id'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          checked={field?.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>System Generate Id</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='prefix'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prefix</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='num_fmt'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Num Fmt</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='applicable_date'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Applicable Date</FormLabel>
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
