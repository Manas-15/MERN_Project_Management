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
    useCreateTrnInvConsumptionTrnInvConsumptionPostMutation, 
    useGetAllTrnInvConsumptionsTrnInvConsumptionGetQuery, 
    useUpdateTrnInvConsumptionTrnInvConsumptionIdPutMutation, 
    useDeleteTrnInvConsumptionTrnInvConsumptionIdDeleteMutation, 
    useGetTrnInvConsumptionTrnInvConsumptionIdGetQuery, 
    useGetAllTrnInvConsumptionEventGetQuery, 
    useCreateTrnInvConsumptionTrnInvConsumptionEventPostMutation, 
    useUpdateTrnInvConsumptionTrnInvConsumptionEventIdPutMutation, 
    useDeleteTrnInvConsumptionTrnInvConsumptionEventIdDeleteMutation, 
    useGetTrnInvConsumptionTrnInvConsumptionEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllTrnInvAllocationsTrnInvAllocationGetQuery,
          useGetAllGrpWarehousesGrpWarehouseGetQuery,
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
            ticket_id: z.number().min(1, {
              message: 'Ticket Id is required'
            }),
            allocation_id: z.number().min(1, {
              message: 'Allocation Id is required'
            }),
            warehouse_id: z.number().min(1, {
              message: 'Warehouse Id is required'
            }),
            warehouse_name: z.string().nonempty({
              message: 'Warehouse Name is required'
            }),
            status_id: z.number().min(1, {
              message: 'Status Id is required'
            }),
            status: z.string().nonempty({
              message: 'Status is required'
            }),
            consumption_for: z.string().nonempty({
              message: 'Consumption For is required'
            }),
            cost_centre: z.number().min(1, {
              message: 'Cost Centre is required'
            }),
            cost_centre_name: z.string().nonempty({
              message: 'Cost Centre Name is required'
            }),
            voucher_number: z.string().nonempty({
              message: 'Voucher Number is required'
            }),
            voucher_date: z.string(),
            total_quantity: z.number().min(1, {
              message: 'Total Quantity is required'
            }),
            sub_total_amount: z.number().min(1, {
              message: 'Sub Total Amount is required'
            }),
            adjustment_amount: z.number().min(1, {
              message: 'Adjustment Amount is required'
            }),
            total_amount: z.number().min(1, {
              message: 'Total Amount is required'
            }),
            update_item_config: z.boolean(),
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

export default function ConsumptionsGlobalForm({
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

 const [createTrnInvConsumption] = useCreateTrnInvConsumptionTrnInvConsumptionPostMutation();
 const [updateTrnInvConsumption] = useUpdateTrnInvConsumptionTrnInvConsumptionIdPutMutation();


//make changes for dropdown field options
        const {
          data: fetchedTrnInvAllocationData,
          refetch: refetchTrnInvAllocationList
        } = useGetAllTrnInvAllocationsTrnInvAllocationGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );
        const {
          data: fetchedGrpWarehouseData,
          refetch: refetchGrpWarehouseList
        } = useGetAllGrpWarehousesGrpWarehouseGetQuery(
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
         trn_number: selectedItem?.trn_number || "",
         ticket_id: selectedItem?.ticket_id || 0,
         allocation_id: selectedItem?.allocation_id || 0,
         warehouse_id: selectedItem?.warehouse_id || 0,
         warehouse_name: selectedItem?.warehouse_name || "",
         status_id: selectedItem?.status_id || 0,
         status: selectedItem?.status || "",
         consumption_for: selectedItem?.consumption_for || "",
         cost_centre: selectedItem?.cost_centre || 0,
         cost_centre_name: selectedItem?.cost_centre_name || "",
         voucher_number: selectedItem?.voucher_number || "",
         voucher_date: selectedItem?.voucher_date || "",
         total_quantity: selectedItem?.total_quantity || 0,
         sub_total_amount: selectedItem?.sub_total_amount || "",
         adjustment_amount: selectedItem?.adjustment_amount || "",
         total_amount: selectedItem?.total_amount || "",
         update_item_config: selectedItem?.update_item_config || false,
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnInvConsumption({
           ...tenantIDHeader(),
          id: selectedItem.id,
          trnInvConsumptionUpdate: values
        }).unwrap();
        toast.success(`Consumptions updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Consumptions');
      }
    } else {
      try {
        await createTrnInvConsumption({
           ...tenantIDHeader(),
          trnInvConsumptionInsert: values
        }).unwrap();
        toast.success(`Consumptions created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Consumptions');
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
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="ticket_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Ticket Id</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <Controller
                                control={form.control}
                                name="allocation_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Allocation Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="allocation_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedTrnInvAllocationData?.map((item:any) => ({
                                            label: item.warehouse_name || "",
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
                              <Controller
                                control={form.control}
                                name="warehouse_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Warehouse Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="warehouse_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedGrpWarehouseData?.map((item:any) => ({
                                            label: item.warehouse_name || "",
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
                                name="warehouse_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Warehouse Name</FormLabel>
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
                                name="consumption_for"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Consumption For</FormLabel>
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
                                name="cost_centre"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Cost Centre</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="cost_centre_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Cost Centre Name</FormLabel>
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
                                name="voucher_number"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Voucher Number</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <CustomDatePicker
                                control={form.control}
                                name='voucher_date'
                                label='Voucher Date'
                                isRequired={false}
                                viewType='grid'
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="total_quantity"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Total Quantity</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="sub_total_amount"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Sub Total Amount</FormLabel>
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
                                name="adjustment_amount"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Adjustment Amount</FormLabel>
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
                                name="total_amount"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Total Amount</FormLabel>
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
                                name="update_item_config"
                                render={({ field }) => (
                                   <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                      <FormControl>
                                        <Checkbox
                                          checked={field?.value}
                                          onCheckedChange={field.onChange}
                                        />
                                      </FormControl>
                                      <div className='space-y-1 leading-none'>
                                        <FormLabel>Update Item Config</FormLabel>
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