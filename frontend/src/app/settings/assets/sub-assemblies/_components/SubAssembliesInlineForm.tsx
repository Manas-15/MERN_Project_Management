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
import { Controller,useForm } from 'react-hook-form';
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
    useCreateRefSubAssemblyRefSubAssemblyPostMutation, 
    useGetAllRefSubAssemblysRefSubAssemblyGetQuery, 
    useUpdateRefSubAssemblyRefSubAssemblyIdPutMutation, 
    useDeleteRefSubAssemblyRefSubAssemblyIdDeleteMutation, 
    useGetRefSubAssemblyRefSubAssemblyIdGetQuery, 
    useGetAllRefSubAssemblyEventGetQuery, 
    useCreateRefSubAssemblyRefSubAssemblyEventPostMutation, 
    useUpdateRefSubAssemblyRefSubAssemblyEventIdPutMutation, 
    useDeleteRefSubAssemblyRefSubAssemblyEventIdDeleteMutation, 
    useGetRefSubAssemblyRefSubAssemblyEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            serial_number: z.number().min(1, {
              message: 'Serial Number is required'
            }),
            name: z.string().nonempty({
              message: 'Name is required'
            }),
            category_id: z.number().min(1, {
              message: 'Category Id is required'
            }),
            manufacturer_id: z.number().min(1, {
              message: 'Manufacturer Id is required'
            }),
            manufacturer_name: z.string().nonempty({
              message: 'Manufacturer Name is required'
            }),
            site_id: z.number().min(1, {
              message: 'Site Id is required'
            }),
            site_name: z.string().nonempty({
              message: 'Site Name is required'
            }),
            status: z.string().nonempty({
              message: 'Status is required'
            }),
            status_name: z.string().nonempty({
              message: 'Status Name is required'
            }),
            tags: z.number().min(1, {
              message: 'Tags is required'
            }),
            tags_name: z.string().nonempty({
              message: 'Tags Name is required'
            }),
            machine_location: z.number().min(1, {
              message: 'Machine Location is required'
            }),
            location_name: z.string().nonempty({
              message: 'Location Name is required'
            }),
            purchase_date: z.string(),
            purchase_price: z.number().min(1, {
              message: 'Purchase Price is required'
            }),
            recived_with_asset: z.boolean(),
            create_by: z.string(),
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

export default function SubAssembliesInlineForm({
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

const [createRefSubAssembly] = useCreateRefSubAssemblyRefSubAssemblyPostMutation();
const [updateRefSubAssembly] = useUpdateRefSubAssemblyRefSubAssemblyIdPutMutation();

//make changes for dropdown field options

//FIXME Default values to Templatize this
const defaultValues = {
         serial_number: selectedItem?.serial_number || 0,
         name: selectedItem?.name || "",
         category_id: selectedItem?.category_id || 0,
         manufacturer_id: selectedItem?.manufacturer_id || 0,
         manufacturer_name: selectedItem?.manufacturer_name || "",
         site_id: selectedItem?.site_id || 0,
         site_name: selectedItem?.site_name || "",
         status: selectedItem?.status || "",
         status_name: selectedItem?.status_name || "",
         tags: selectedItem?.tags || 0,
         tags_name: selectedItem?.tags_name || "",
         machine_location: selectedItem?.machine_location || 0,
         location_name: selectedItem?.location_name || "",
         purchase_date: selectedItem?.purchase_date || "",
         purchase_price: selectedItem?.purchase_price || "",
         recived_with_asset: selectedItem?.recived_with_asset || false,
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateRefSubAssembly({
           ...tenantIDHeader(),
          id: selectedItem.id,
          refSubAssemblyUpdate: values
        }).unwrap();
        toast.success(`Sub Assemblies updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Sub Assemblies');
      }
    } else {
      try {
        await createRefSubAssembly({
           ...tenantIDHeader(),
          refSubAssemblyInsert: values
        }).unwrap();
        toast.success(`Sub Assemblies created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Sub Assemblies');
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
          <Card className='mx-auto form-dynamic-height w-full items-center justify-end space-x-2 overflow-hidden'> 
             <CardContent className='form-dynamic-height overflow-y-auto px-6'>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="serial_number"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Serial Number</FormLabel>
                                    <div className='flex w-[85%] flex-col'>
                                      <FormControl>
                                        <Input type='number' {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </div>
                                  </FormItem>
                                )}
                              />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Name</FormLabel>
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
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="category_id"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Category Id</FormLabel>
                                    <div className='flex w-[85%] flex-col'>
                                      <FormControl>
                                        <Input type='number' {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </div>
                                  </FormItem>
                                )}
                              />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="manufacturer_id"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Manufacturer Id</FormLabel>
                                    <div className='flex w-[85%] flex-col'>
                                      <FormControl>
                                        <Input type='number' {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </div>
                                  </FormItem>
                                )}
                              />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="manufacturer_name"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Manufacturer Name</FormLabel>
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
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="site_id"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Site Id</FormLabel>
                                    <div className='flex w-[85%] flex-col'>
                                      <FormControl>
                                        <Input type='number' {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </div>
                                  </FormItem>
                                )}
                              />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="site_name"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Site Name</FormLabel>
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
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <Controller
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="status"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         [{'label': 'Active', 'value': 'active'}, {'label': 'In Active', 'value': 'in_active'}, {'label': 'Pending', 'value': 'pending'}, {'label': 'Completed', 'value': 'completed'}]?.map((item:any) => ({
                                            label: item.label,
                                            value: item.value,
                                          })) || []
                                      }
                                    />
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="status_name"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Status Name</FormLabel>
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
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="tags"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Tags</FormLabel>
                                    <div className='flex w-[85%] flex-col'>
                                      <FormControl>
                                        <Input type='number' {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </div>
                                  </FormItem>
                                )}
                              />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="tags_name"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Tags Name</FormLabel>
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
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="machine_location"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Machine Location</FormLabel>
                                    <div className='flex w-[85%] flex-col'>
                                      <FormControl>
                                        <Input type='number' {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </div>
                                  </FormItem>
                                )}
                              />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="location_name"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Location Name</FormLabel>
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
                          <div className="mb-6 grid grid-cols-1 gap-6">
                                <CustomDatePicker
                                  control={form.control}
                                  name='purchase_date'
                                  label='Purchase Date'
                                  isRequired={false}
                                  viewType='inline'
                                />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="purchase_price"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Purchase Price</FormLabel>
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
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="recived_with_asset"
                                render={({ field }) => (
                                   <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                      <FormControl>
                                        <Checkbox
                                          checked={field?.value}
                                          onCheckedChange={field.onChange}
                                        />
                                      </FormControl>
                                      <div className='space-y-1 leading-none'>
                                        <FormLabel>Recived With Asset</FormLabel>
                                      </div>
                                      <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="create_by"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Create By</FormLabel>
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