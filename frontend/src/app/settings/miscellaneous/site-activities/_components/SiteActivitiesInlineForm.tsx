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
    useCreateSetAstSiteActivitySetAstSiteActivityPostMutation, 
    useGetAllSetAstSiteActivitysSetAstSiteActivityGetQuery, 
    useUpdateSetAstSiteActivitySetAstSiteActivityIdPutMutation, 
    useDeleteSetAstSiteActivitySetAstSiteActivityIdDeleteMutation, 
    useGetSetAstSiteActivitySetAstSiteActivityIdGetQuery, 
    useGetAllSetAstSiteActivityEventGetQuery, 
    useCreateSetAstSiteActivitySetAstSiteActivityEventPostMutation, 
    useUpdateSetAstSiteActivitySetAstSiteActivityEventIdPutMutation, 
    useDeleteSetAstSiteActivitySetAstSiteActivityEventIdDeleteMutation, 
    useGetSetAstSiteActivitySetAstSiteActivityEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllSetAstActivityNamessSetAstActivityNamesGetQuery,
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            activity_name_id: z.number().min(1, {
              message: 'Activity Name Id is required'
            }),
            activity_name: z.string().nonempty({
              message: 'Activity Name is required'
            }),
            site_id: z.number().min(1, {
              message: 'Site Id is required'
            }),
            site_name: z.string().nonempty({
              message: 'Site Name is required'
            }),
            activity_code: z.string().nonempty({
              message: 'Activity Code is required'
            }),
            active_status: z.boolean(),
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

export default function SiteActivitiesInlineForm({
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

const [createSetAstSiteActivity] = useCreateSetAstSiteActivitySetAstSiteActivityPostMutation();
const [updateSetAstSiteActivity] = useUpdateSetAstSiteActivitySetAstSiteActivityIdPutMutation();

//make changes for dropdown field options
        const {
          data: fetchedSetAstActivityNamesData,
          refetch: refetchSetAstActivityNamesList
        } = useGetAllSetAstActivityNamessSetAstActivityNamesGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );

//FIXME Default values to Templatize this
const defaultValues = {
         activity_name_id: selectedItem?.activity_name_id || 0,
         activity_name: selectedItem?.activity_name || "",
         site_id: selectedItem?.site_id || 0,
         site_name: selectedItem?.site_name || "",
         activity_code: selectedItem?.activity_code || "",
         active_status: selectedItem?.active_status || false,
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSetAstSiteActivity({
           ...tenantIDHeader(),
          id: selectedItem.id,
          setAstSiteActivityUpdate: values
        }).unwrap();
        toast.success(`Site Activities updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Site Activities');
      }
    } else {
      try {
        await createSetAstSiteActivity({
           ...tenantIDHeader(),
          setAstSiteActivityInsert: values
        }).unwrap();
        toast.success(`Site Activities created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Site Activities');
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
                              <Controller
                                control={form.control}
                                name="activity_name_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Activity Name Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="activity_name_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedSetAstActivityNamesData?.map((item:any) => ({
                                            label: item.activity_name || "",
                                            value: item.id || "",
                                          })) || selectFieldOptions || []
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
                                name="activity_name"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Activity Name</FormLabel>
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
                              <FormField
                                control={form.control}
                                name="activity_code"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Activity Code</FormLabel>
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
                                name="active_status"
                                render={({ field }) => (
                                   <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                      <FormControl>
                                        <Checkbox
                                          checked={field?.value}
                                          onCheckedChange={field.onChange}
                                        />
                                      </FormControl>
                                      <div className='space-y-1 leading-none'>
                                        <FormLabel>Active Status</FormLabel>
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