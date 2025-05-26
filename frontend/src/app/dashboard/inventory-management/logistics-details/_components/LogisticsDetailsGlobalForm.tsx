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
    useCreateTrnInvLogisticsDtlTrnInvLogisticsDtlPostMutation, 
    useGetAllTrnInvLogisticsDtlsTrnInvLogisticsDtlGetQuery, 
    useUpdateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPutMutation, 
    useDeleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDeleteMutation, 
    useGetTrnInvLogisticsDtlTrnInvLogisticsDtlIdGetQuery, 
    useGetAllTrnInvLogisticsDtlEventGetQuery, 
    useCreateTrnInvLogisticsDtlTrnInvLogisticsDtlEventPostMutation, 
    useUpdateTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdPutMutation, 
    useDeleteTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdDeleteMutation, 
    useGetTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllTrnInvLogisticssTrnInvLogisticsGetQuery,
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            trn_fnyr: z.number().min(1, {
              message: 'Transaction Fnyr is required'
            }),
            trn_date: z.string(),
            logistic_id: z.number().min(1, {
              message: 'Logistic Id is required'
            }),
            source_type: z.string().nonempty({
              message: 'Source Type is required'
            }),
            address1: z.string().nonempty({
              message: 'Address1 is required'
            }),
            address2: z.string().nonempty({
              message: 'Address2 is required'
            }),
            landmark: z.string().nonempty({
              message: 'Landmark is required'
            }),
            city: z.string().nonempty({
              message: 'City is required'
            }),
            country: z.string().nonempty({
              message: 'Country is required'
            }),
            state: z.string().nonempty({
              message: 'State is required'
            }),
            district: z.string().nonempty({
              message: 'District is required'
            }),
            pin: z.string().nonempty({
              message: 'Pin is required'
            }),
            gstin: z.string().nonempty({
              message: 'Gstin is required'
            }),
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

export default function LogisticsDetailsGlobalForm({
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

 const [createTrnInvLogisticsDtl] = useCreateTrnInvLogisticsDtlTrnInvLogisticsDtlPostMutation();
 const [updateTrnInvLogisticsDtl] = useUpdateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPutMutation();


//make changes for dropdown field options
        const {
          data: fetchedTrnInvLogisticsData,
          refetch: refetchTrnInvLogisticsList
        } = useGetAllTrnInvLogisticssTrnInvLogisticsGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );



//FIXME Default values to Templatize this
const defaultValues = {
         trn_fnyr: selectedItem?.trn_fnyr || 0,
         trn_date: selectedItem?.trn_date || "",
         logistic_id: selectedItem?.logistic_id || 0,
         source_type: selectedItem?.source_type || "",
         address1: selectedItem?.address1 || "",
         address2: selectedItem?.address2 || "",
         landmark: selectedItem?.landmark || "",
         city: selectedItem?.city || "",
         country: selectedItem?.country || "",
         state: selectedItem?.state || "",
         district: selectedItem?.district || "",
         pin: selectedItem?.pin || "",
         gstin: selectedItem?.gstin || "",
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnInvLogisticsDtl({
           ...tenantIDHeader(),
          id: selectedItem.id,
          trnInvLogisticsDtlUpdate: values
        }).unwrap();
        toast.success(`Logistics Details updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Logistics Details');
      }
    } else {
      try {
        await createTrnInvLogisticsDtl({
           ...tenantIDHeader(),
          trnInvLogisticsDtlInsert: values
        }).unwrap();
        toast.success(`Logistics Details created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Logistics Details');
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
                                name="trn_fnyr"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Transaction Fnyr</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <CustomDatePicker
                                control={form.control}
                                name='trn_date'
                                label='Transaction Date'
                                isRequired={false}
                                viewType='grid'
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <Controller
                                control={form.control}
                                name="logistic_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Logistic Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="logistic_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedTrnInvLogisticsData?.map((item:any) => ({
                                            label: item.devision_name || "",
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
                                name="source_type"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Source Type</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="address1"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Address1</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="address2"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Address2</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="landmark"
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
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="city"
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
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="country"
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
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="state"
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
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="district"
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
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="pin"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Pin</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="gstin"
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
                    
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="create_by"
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