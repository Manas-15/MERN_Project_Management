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
  useCreateRefVendorRefVendorPostMutation,
  useGetAllRefVendorsRefVendorGetQuery,
  useUpdateRefVendorRefVendorIdPutMutation,
  useDeleteRefVendorRefVendorIdDeleteMutation,
  useGetRefVendorRefVendorIdGetQuery,
  useGetAllRefVendorEventGetQuery,
  useCreateRefVendorRefVendorEventPostMutation,
  useUpdateRefVendorRefVendorEventIdPutMutation,
  useDeleteRefVendorRefVendorEventIdDeleteMutation,
  useGetRefVendorRefVendorEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  vendor_name: z.string().nonempty({
    message: 'Vendor Name is required'
  }),
  vendor_code: z.string().nonempty({
    message: 'Vendor Code is required'
  }),
  notes: z.string().nonempty({
    message: 'Notes is required'
  }),
  address_lable: z.string().nonempty({
    message: 'Address Lable is required'
  }),
  address_line1: z.string().nonempty({
    message: 'Address Line1 is required'
  }),
  address_line2: z.string().nonempty({
    message: 'Address Line2 is required'
  }),
  landmark: z.string().nonempty({
    message: 'Landmark is required'
  }),
  city: z.string().nonempty({
    message: 'City is required'
  }),
  state: z.string().nonempty({
    message: 'State is required'
  }),
  country: z.string().nonempty({
    message: 'Country is required'
  }),
  district: z.string().nonempty({
    message: 'District is required'
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
  email: z.string().nonempty({
    message: 'Email is required'
  }),
  website: z.string().nonempty({
    message: 'Website is required'
  }),
  vendor_domain: z.string().nonempty({
    message: 'Vendor Domain is required'
  }),
  authorization_name: z.string().nonempty({
    message: 'Authorization Name is required'
  }),
  area_of_ops_state: z.string().nonempty({
    message: 'Area Of Ops State is required'
  }),
  area_of_ops_district: z.string().nonempty({
    message: 'Area Of Ops District is required'
  }),
  active_flag: z.boolean(),
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

//file_id: z.array(z.number()).optional(), // Optional array of file_ids

export default function VendorsForm({
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
  const [createRefVendor] = useCreateRefVendorRefVendorPostMutation();
  const [updateRefVendor] = useUpdateRefVendorRefVendorIdPutMutation();

  //make changes for dropdown field options

  //FIXME Default values to Templatize this
  const defaultValues = {
    vendor_name: selectedItem?.vendor_name || '',
    vendor_code: selectedItem?.vendor_code || '',
    notes: selectedItem?.notes || '',
    address_lable: selectedItem?.address_lable || '',
    address_line1: selectedItem?.address_line1 || '',
    address_line2: selectedItem?.address_line2 || '',
    landmark: selectedItem?.landmark || '',
    city: selectedItem?.city || '',
    state: selectedItem?.state || '',
    country: selectedItem?.country || '',
    district: selectedItem?.district || '',
    pincode: selectedItem?.pincode || '',
    gstin: selectedItem?.gstin || '',
    pan: selectedItem?.pan || '',
    contact_person: selectedItem?.contact_person || '',
    contact_number: selectedItem?.contact_number || '',
    email: selectedItem?.email || '',
    website: selectedItem?.website || '',
    vendor_domain: selectedItem?.vendor_domain || '',
    authorization_name: selectedItem?.authorization_name || '',
    area_of_ops_state: selectedItem?.area_of_ops_state || '',
    area_of_ops_district: selectedItem?.area_of_ops_district || '',
    active_flag: selectedItem?.active_flag || false,
    create_by: selectedItem?.create_by || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateRefVendor({
          ...tenantIDHeader(),
          id: selectedItem.id,
          refVendorUpdate: values
        }).unwrap();
        toast.success(`Vendors updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Vendors');
      }
    } else {
      try {
        await createRefVendor({
          ...tenantIDHeader(),
          refVendorInsert: values
        }).unwrap();
        toast.success(`Vendors created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Vendors');
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
                  name='vendor_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vendor Name</FormLabel>
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
                  name='vendor_code'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vendor Code</FormLabel>
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
                  name='notes'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes</FormLabel>
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
                  name='address_lable'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address Lable</FormLabel>
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
                  name='address_line1'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address Line1</FormLabel>
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
                  name='address_line2'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address Line2</FormLabel>
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
                  name='landmark'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Landmark</FormLabel>
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
                  name='city'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
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
                  name='state'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
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
                  name='country'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
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
                  name='district'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>District</FormLabel>
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
                  name='pincode'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pincode</FormLabel>
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
                  name='gstin'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gstin</FormLabel>
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
                  name='pan'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pan</FormLabel>
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
                  name='contact_person'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Person</FormLabel>
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
                  name='contact_number'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
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
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
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
                  name='website'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
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
                  name='vendor_domain'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vendor Domain</FormLabel>
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
                  name='authorization_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Authorization Name</FormLabel>
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
                  name='area_of_ops_state'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area Of Ops State</FormLabel>
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
                  name='area_of_ops_district'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area Of Ops District</FormLabel>
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
                  name='active_flag'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          checked={field?.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>Active Flag</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
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
