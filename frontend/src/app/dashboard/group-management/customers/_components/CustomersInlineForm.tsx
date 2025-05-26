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
  useCreateSaasCustomersSaasCustomersPostMutation,
  useGetAllSaasCustomerssSaasCustomersGetQuery,
  useUpdateSaasCustomersSaasCustomersIdPutMutation,
  useDeleteSaasCustomersSaasCustomersIdDeleteMutation,
  useGetSaasCustomersSaasCustomersIdGetQuery,
  useGetAllSaasCustomersEventGetQuery,
  useCreateSaasCustomersSaasCustomersEventPostMutation,
  useUpdateSaasCustomersSaasCustomersEventIdPutMutation,
  useDeleteSaasCustomersSaasCustomersEventIdDeleteMutation,
  useGetSaasCustomersSaasCustomersEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

// import { useGetAllSaasRefCurrenciessSaasRefCurrenciesGetQuery } from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  first_name: z.string().nonempty({
    message: 'First Name is required'
  }),
  last_name: z.string().nonempty({
    message: 'Last Name is required'
  }),
  email: z.string().nonempty({
    message: 'Email is required'
  }),
  phone_number: z.string().nonempty({
    message: 'Phone Number is required'
  }),
  street: z.string().nonempty({
    message: 'Street is required'
  }),
  city: z.string().nonempty({
    message: 'City is required'
  }),
  state: z.string().nonempty({
    message: 'State is required'
  }),
  zipcode: z.string().nonempty({
    message: 'Zipcode is required'
  }),
  customer_organization: z.string().nonempty({
    message: 'Customer Organization is required'
  }),
  country: z.string().nonempty({
    message: 'Country is required'
  }),
  currency_id: z.number().min(1, {
    message: 'Currency Id is required'
  }),
  pincode: z.string().nonempty({
    message: 'Pincode is required'
  }),
  gstin: z.string().nonempty({
    message: 'Gstin is required'
  }),
  pan: z.string().nonempty({
    message: 'Pan is required'
  }),
  contact_person: z.string().nonempty({
    message: 'Contact Person is required'
  }),
  contact_number: z.string().nonempty({
    message: 'Contact Number is required'
  }),
  website: z.string().nonempty({
    message: 'Website is required'
  }),
  notes: z.string().nonempty({
    message: 'Notes is required'
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

export default function CustomersInlineForm({
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
  const [createSaasCustomers] =
    useCreateSaasCustomersSaasCustomersPostMutation();
  const [updateSaasCustomers] =
    useUpdateSaasCustomersSaasCustomersIdPutMutation();

  //make changes for dropdown field options
  // const {
  //   data: fetchedSaasRefCurrenciesData,
  //   refetch: refetchSaasRefCurrenciesList
  // } = useGetAllSaasRefCurrenciessSaasRefCurrenciesGetQuery(
  //   {
  //     ...tenantIDHeader()
  //   },
  //   {
  //     refetchOnMountOrArgChange: true
  //   }
  // );

  //FIXME Default values to Templatize this
  const defaultValues = {
    first_name: selectedItem?.first_name || '',
    last_name: selectedItem?.last_name || '',
    email: selectedItem?.email || '',
    phone_number: selectedItem?.phone_number || '',
    street: selectedItem?.street || '',
    city: selectedItem?.city || '',
    state: selectedItem?.state || '',
    zipcode: selectedItem?.zipcode || '',
    customer_organization: selectedItem?.customer_organization || '',
    country: selectedItem?.country || '',
    currency_id: selectedItem?.currency_id || 0,
    pincode: selectedItem?.pincode || '',
    gstin: selectedItem?.gstin || '',
    pan: selectedItem?.pan || '',
    contact_person: selectedItem?.contact_person || '',
    contact_number: selectedItem?.contact_number || '',
    website: selectedItem?.website || '',
    notes: selectedItem?.notes || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSaasCustomers({
          ...tenantIDHeader(),
          id: selectedItem.id,
          saasCustomersUpdate: values
        }).unwrap();
        toast.success(`Customers updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Customers');
      }
    } else {
      try {
        await createSaasCustomers({
          ...tenantIDHeader(),
          saasCustomersInsert: values
        }).unwrap();
        toast.success(`Customers created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Customers');
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
                  name='first_name'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>First Name</FormLabel>
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
                  name='last_name'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Last Name</FormLabel>
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
                  name='email'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Email</FormLabel>
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
                  name='phone_number'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Phone Number</FormLabel>
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
                  name='street'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Street</FormLabel>
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
                  name='city'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>City</FormLabel>
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
                  name='state'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>State</FormLabel>
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
                  name='zipcode'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Zipcode</FormLabel>
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
                  name='customer_organization'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>
                        Customer Organization
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
                  name='country'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Country</FormLabel>
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
                <Controller
                  control={form.control}
                  name='currency_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Currency Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='currency_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          // fetchedSaasRefCurrenciesData?.map((item: any) => ({
                          //   label: item.currency_name || '',
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
                  name='pincode'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Pincode</FormLabel>
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
                  name='gstin'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Gstin</FormLabel>
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
                  name='pan'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Pan</FormLabel>
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
                  name='contact_person'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Contact Person</FormLabel>
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
                  name='contact_number'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Contact Number</FormLabel>
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
                  name='website'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Website</FormLabel>
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
