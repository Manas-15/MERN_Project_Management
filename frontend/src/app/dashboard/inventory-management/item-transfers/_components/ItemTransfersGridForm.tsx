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
    useCreateTrnInvItemTransferTrnInvItemTransferPostMutation, 
    useGetAllTrnInvItemTransfersTrnInvItemTransferGetQuery, 
    useUpdateTrnInvItemTransferTrnInvItemTransferIdPutMutation, 
    useDeleteTrnInvItemTransferTrnInvItemTransferIdDeleteMutation, 
    useGetTrnInvItemTransferTrnInvItemTransferIdGetQuery, 
    useGetAllTrnInvItemTransferEventGetQuery, 
    useCreateTrnInvItemTransferTrnInvItemTransferEventPostMutation, 
    useUpdateTrnInvItemTransferTrnInvItemTransferEventIdPutMutation, 
    useDeleteTrnInvItemTransferTrnInvItemTransferEventIdDeleteMutation, 
    useGetTrnInvItemTransferTrnInvItemTransferEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
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
            from_warehouse_id: z.number().min(1, {
              message: 'From Warehouse Id is required'
            }),
            from_warehouse_name: z.string().nonempty({
              message: 'From Warehouse Name is required'
            }),
            to_warehouse_id: z.number().min(1, {
              message: 'To Warehouse Id is required'
            }),
            to_warehouse_name: z.string().nonempty({
              message: 'To Warehouse Name is required'
            }),
            invoice_number: z.string().nonempty({
              message: 'Invoice Number is required'
            }),
            invoice_date: z.string(),
            transfer_for: z.string().nonempty({
              message: 'Transfer For is required'
            }),
            cost_centre: z.number().min(1, {
              message: 'Cost Centre is required'
            }),
            cost_centre_name: z.string().nonempty({
              message: 'Cost Centre Name is required'
            }),
            ticket_id: z.number().min(1, {
              message: 'Ticket Id is required'
            }),
            total_quantity: z.number().min(1, {
              message: 'Total Quantity is required'
            }),
            sub_total_amount: z.number().min(1, {
              message: 'Sub Total Amount is required'
            }),
            gst_amount: z.number().min(1, {
              message: 'Gst Amount is required'
            }),
            adjustment_amount: z.number().min(1, {
              message: 'Adjustment Amount is required'
            }),
            total_amount: z.number().min(1, {
              message: 'Total Amount is required'
            }),
            eway_bill_date: z.string(),
            eway_bill_number: z.string().nonempty({
              message: 'Eway Bill Number is required'
            }),
            docket_number: z.string().nonempty({
              message: 'Docket Number is required'
            }),
            docket_date: z.string(),
            transporter_id: z.number().min(1, {
              message: 'Transporter Id is required'
            }),
            transporter_name: z.string().nonempty({
              message: 'Transporter Name is required'
            }),
            transporter_vehicle_number: z.string().nonempty({
              message: 'Transporter Vehicle Number is required'
            }),
            no_of_boxes: z.number().min(1, {
              message: 'No Of Boxes is required'
            }),
            weight: z.number().min(1, {
              message: 'Weight is required'
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

export default function ItemTransfersGridForm({
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

 const [createTrnInvItemTransfer] = useCreateTrnInvItemTransferTrnInvItemTransferPostMutation();
 const [updateTrnInvItemTransfer] = useUpdateTrnInvItemTransferTrnInvItemTransferIdPutMutation();

//make changes for dropdown field options
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
         from_warehouse_id: selectedItem?.from_warehouse_id || 0,
         from_warehouse_name: selectedItem?.from_warehouse_name || "",
         to_warehouse_id: selectedItem?.to_warehouse_id || 0,
         to_warehouse_name: selectedItem?.to_warehouse_name || "",
         invoice_number: selectedItem?.invoice_number || "",
         invoice_date: selectedItem?.invoice_date || "",
         transfer_for: selectedItem?.transfer_for || "",
         cost_centre: selectedItem?.cost_centre || 0,
         cost_centre_name: selectedItem?.cost_centre_name || "",
         ticket_id: selectedItem?.ticket_id || 0,
         total_quantity: selectedItem?.total_quantity || 0,
         sub_total_amount: selectedItem?.sub_total_amount || 0,
         gst_amount: selectedItem?.gst_amount || 0,
         adjustment_amount: selectedItem?.adjustment_amount || 0,
         total_amount: selectedItem?.total_amount || 0,
         eway_bill_date: selectedItem?.eway_bill_date || "",
         eway_bill_number: selectedItem?.eway_bill_number || "",
         docket_number: selectedItem?.docket_number || "",
         docket_date: selectedItem?.docket_date || "",
         transporter_id: selectedItem?.transporter_id || 0,
         transporter_name: selectedItem?.transporter_name || "",
         transporter_vehicle_number: selectedItem?.transporter_vehicle_number || "",
         no_of_boxes: selectedItem?.no_of_boxes || 0,
         weight: selectedItem?.weight || 0,
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
        await updateTrnInvItemTransfer({
           ...tenantIDHeader(),
          id: selectedItem.id,
          trnInvItemTransferUpdate: values
        }).unwrap();
        toast.success(`Item Transfers updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Item Transfers');
      }
    } else {
      try {
        await createTrnInvItemTransfer({
           ...tenantIDHeader(),
          trnInvItemTransferInsert: values
        }).unwrap();
        toast.success(`Item Transfers created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Item Transfers');
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
                              <Controller
                                control={form.control}
                                name="from_warehouse_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>From Warehouse Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="from_warehouse_id"
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
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="from_warehouse_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>From Warehouse Name</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <Controller
                                control={form.control}
                                name="to_warehouse_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>To Warehouse Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="to_warehouse_id"
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
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="to_warehouse_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>To Warehouse Name</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="invoice_number"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Invoice Number</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <CustomDatePicker
                                control={form.control}
                                name='invoice_date'
                                label='Invoice Date'
                                isRequired={false}
                                viewType='grid'
                              />
                              <FormField
                                control={form.control}
                                name="transfer_for"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Transfer For</FormLabel>
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
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
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
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="sub_total_amount"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Sub Total Amount</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="gst_amount"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Gst Amount</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="adjustment_amount"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Adjustment Amount</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="total_amount"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Total Amount</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <CustomDatePicker
                                control={form.control}
                                name='eway_bill_date'
                                label='Eway Bill Date'
                                isRequired={false}
                                viewType='grid'
                              />
                              <FormField
                                control={form.control}
                                name="eway_bill_number"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Eway Bill Number</FormLabel>
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
                                name="docket_number"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Docket Number</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <CustomDatePicker
                                control={form.control}
                                name='docket_date'
                                label='Docket Date'
                                isRequired={false}
                                viewType='grid'
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="transporter_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Transporter Id</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="transporter_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Transporter Name</FormLabel>
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
                                name="transporter_vehicle_number"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Transporter Vehicle Number</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="no_of_boxes"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>No Of Boxes</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="weight"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Weight</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
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
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
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