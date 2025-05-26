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
    useCreateTrnInvLogisticsTrnInvLogisticsPostMutation, 
    useGetAllTrnInvLogisticssTrnInvLogisticsGetQuery, 
    useUpdateTrnInvLogisticsTrnInvLogisticsIdPutMutation, 
    useDeleteTrnInvLogisticsTrnInvLogisticsIdDeleteMutation, 
    useGetTrnInvLogisticsTrnInvLogisticsIdGetQuery, 
    useGetAllTrnInvLogisticsEventGetQuery, 
    useCreateTrnInvLogisticsTrnInvLogisticsEventPostMutation, 
    useUpdateTrnInvLogisticsTrnInvLogisticsEventIdPutMutation, 
    useDeleteTrnInvLogisticsTrnInvLogisticsEventIdDeleteMutation, 
    useGetTrnInvLogisticsTrnInvLogisticsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            trn_fnyr: z.number().min(1, {
              message: 'Transaction Fnyr is required'
            }),
            trn_date: z.string(),
            trn_number: z.string().nonempty({
              message: 'Transaction Number is required'
            }),
            logistics_type: z.string().nonempty({
              message: 'Logistics Type is required'
            }),
            devision_id: z.number().min(1, {
              message: 'Devision Id is required'
            }),
            devision_name: z.string().nonempty({
              message: 'Devision Name is required'
            }),
            load_type: z.string().nonempty({
              message: 'Load Type is required'
            }),
            vehicle_type: z.string().nonempty({
              message: 'Vehicle Type is required'
            }),
            tag_user: z.string(),
            origin_type: z.string().nonempty({
              message: 'Origin Type is required'
            }),
            origin_cost_center: z.number().min(1, {
              message: 'Origin Cost Center is required'
            }),
            destination_type: z.string().nonempty({
              message: 'Destination Type is required'
            }),
            destination_cost_center: z.number().min(1, {
              message: 'Destination Cost Center is required'
            }),
            comments: z.string().nonempty({
              message: 'Comments is required'
            }),
            status_id: z.number().min(1, {
              message: 'Status Id is required'
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

export default function LogisticsGridForm({
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

 const [createTrnInvLogistics] = useCreateTrnInvLogisticsTrnInvLogisticsPostMutation();
 const [updateTrnInvLogistics] = useUpdateTrnInvLogisticsTrnInvLogisticsIdPutMutation();

//make changes for dropdown field options

//FIXME Default values to Templatize this
const defaultValues = {
         trn_fnyr: selectedItem?.trn_fnyr || 0,
         trn_date: selectedItem?.trn_date || "",
         trn_number: selectedItem?.trn_number || "",
         logistics_type: selectedItem?.logistics_type || "",
         devision_id: selectedItem?.devision_id || 0,
         devision_name: selectedItem?.devision_name || "",
         load_type: selectedItem?.load_type || "",
         vehicle_type: selectedItem?.vehicle_type || "",
         tag_user: selectedItem?.tag_user || "",
         origin_type: selectedItem?.origin_type || "",
         origin_cost_center: selectedItem?.origin_cost_center || 0,
         destination_type: selectedItem?.destination_type || "",
         destination_cost_center: selectedItem?.destination_cost_center || 0,
         comments: selectedItem?.comments || "",
         status_id: selectedItem?.status_id || 0,
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnInvLogistics({
           ...tenantIDHeader(),
          id: selectedItem.id,
          trnInvLogisticsUpdate: values
        }).unwrap();
        toast.success(`Logistics updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Logistics');
      }
    } else {
      try {
        await createTrnInvLogistics({
           ...tenantIDHeader(),
          trnInvLogisticsInsert: values
        }).unwrap();
        toast.success(`Logistics created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Logistics');
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
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
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
                              <CustomDatePicker
                                control={form.control}
                                name='trn_date'
                                label='Transaction Date'
                                isRequired={false}
                                viewType='grid'
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="trn_number"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Transaction Number</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="logistics_type"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Logistics Type</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="devision_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Devision Id</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="devision_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Devision Name</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="load_type"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Load Type</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="vehicle_type"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Vehicle Type</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="tag_user"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Tag User</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="origin_type"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Origin Type</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="origin_cost_center"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Origin Cost Center</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="destination_type"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Destination Type</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="destination_cost_center"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Destination Cost Center</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="comments"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Comments</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="status_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Status Id</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
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