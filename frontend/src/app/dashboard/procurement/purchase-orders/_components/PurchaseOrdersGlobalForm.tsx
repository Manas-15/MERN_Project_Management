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
    useCreateTrnPurchaseOrderTrnPurchaseOrderPostMutation, 
    useGetAllTrnPurchaseOrdersTrnPurchaseOrderGetQuery, 
    useUpdateTrnPurchaseOrderTrnPurchaseOrderIdPutMutation, 
    useDeleteTrnPurchaseOrderTrnPurchaseOrderIdDeleteMutation, 
    useGetTrnPurchaseOrderTrnPurchaseOrderIdGetQuery, 
    useGetAllTrnPurchaseOrderEventGetQuery, 
    useCreateTrnPurchaseOrderTrnPurchaseOrderEventPostMutation, 
    useUpdateTrnPurchaseOrderTrnPurchaseOrderEventIdPutMutation, 
    useDeleteTrnPurchaseOrderTrnPurchaseOrderEventIdDeleteMutation, 
    useGetTrnPurchaseOrderTrnPurchaseOrderEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllGrpWarehousesGrpWarehouseGetQuery,
          useGetAllRefVendorsRefVendorGetQuery,
          useGetAllTrnInvPurchaseReqsTrnInvPurchaseReqGetQuery,
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            po_type: z.string().nonempty({
              message: 'Po Type is required'
            }),
            trn_fnyr: z.number().min(1, {
              message: 'Transaction Fnyr is required'
            }),
            trn_date: z.string(),
            trn_number: z.string().nonempty({
              message: 'Transaction Number is required'
            }),
            warehouse_id: z.number().min(1, {
              message: 'Warehouse Id is required'
            }),
            warehouse_name: z.string().nonempty({
              message: 'Warehouse Name is required'
            }),
            vendor_id: z.number().min(1, {
              message: 'Vendor Id is required'
            }),
            vendor_name: z.string().nonempty({
              message: 'Vendor Name is required'
            }),
            purchase_order_for: z.string().nonempty({
              message: 'Purchase Order For is required'
            }),
            priority: z.string().nonempty({
              message: 'Priority is required'
            }),
            delivery_date: z.string(),
            quotation_number: z.string().nonempty({
              message: 'Quotation Number is required'
            }),
            quotation_date: z.string(),
            tag_user: z.number().min(1, {
              message: 'Tag User is required'
            }),
            tag_user_name: z.string().nonempty({
              message: 'Tag User Name is required'
            }),
            authorized_user: z.number().min(1, {
              message: 'Authorized User is required'
            }),
            authorized_signatory: z.string().nonempty({
              message: 'Authorized Signatory is required'
            }),
            requisition_id: z.number().min(1, {
              message: 'Requisition Id is required'
            }),
            requisition_user: z.string().nonempty({
              message: 'Requisition User is required'
            }),
            gst_applicable: z.boolean(),
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
            update_item_purchase_price: z.boolean(),
            update_item_consumption_price: z.boolean(),
            notes: z.string().nonempty({
              message: 'Notes is required'
            }),
            status: z.string().nonempty({
              message: 'Status is required'
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

export default function PurchaseOrdersGlobalForm({
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

 const [createTrnPurchaseOrder] = useCreateTrnPurchaseOrderTrnPurchaseOrderPostMutation();
 const [updateTrnPurchaseOrder] = useUpdateTrnPurchaseOrderTrnPurchaseOrderIdPutMutation();


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
        const {
          data: fetchedRefVendorData,
          refetch: refetchRefVendorList
        } = useGetAllRefVendorsRefVendorGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );
        const {
          data: fetchedTrnInvPurchaseReqData,
          refetch: refetchTrnInvPurchaseReqList
        } = useGetAllTrnInvPurchaseReqsTrnInvPurchaseReqGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );



//FIXME Default values to Templatize this
const defaultValues = {
         po_type: selectedItem?.po_type || "",
         trn_fnyr: selectedItem?.trn_fnyr || 0,
         trn_date: selectedItem?.trn_date || "",
         trn_number: selectedItem?.trn_number || "",
         warehouse_id: selectedItem?.warehouse_id || 0,
         warehouse_name: selectedItem?.warehouse_name || "",
         vendor_id: selectedItem?.vendor_id || 0,
         vendor_name: selectedItem?.vendor_name || "",
         purchase_order_for: selectedItem?.purchase_order_for || "",
         priority: selectedItem?.priority || "",
         delivery_date: selectedItem?.delivery_date || "",
         quotation_number: selectedItem?.quotation_number || "",
         quotation_date: selectedItem?.quotation_date || "",
         tag_user: selectedItem?.tag_user || 0,
         tag_user_name: selectedItem?.tag_user_name || "",
         authorized_user: selectedItem?.authorized_user || 0,
         authorized_signatory: selectedItem?.authorized_signatory || "",
         requisition_id: selectedItem?.requisition_id || 0,
         requisition_user: selectedItem?.requisition_user || "",
         gst_applicable: selectedItem?.gst_applicable || false,
         total_quantity: selectedItem?.total_quantity || 0,
         sub_total_amount: selectedItem?.sub_total_amount || "",
         adjustment_amount: selectedItem?.adjustment_amount || "",
         total_amount: selectedItem?.total_amount || "",
         update_item_purchase_price: selectedItem?.update_item_purchase_price || false,
         update_item_consumption_price: selectedItem?.update_item_consumption_price || false,
         notes: selectedItem?.notes || "",
         status: selectedItem?.status || "",
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnPurchaseOrder({
           ...tenantIDHeader(),
          id: selectedItem.id,
          trnPurchaseOrderUpdate: values
        }).unwrap();
        toast.success(`Purchase Orders updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Purchase Orders');
      }
    } else {
      try {
        await createTrnPurchaseOrder({
           ...tenantIDHeader(),
          trnPurchaseOrderInsert: values
        }).unwrap();
        toast.success(`Purchase Orders created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Purchase Orders');
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
                                name="po_type"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Po Type</FormLabel>
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
                              <Controller
                                control={form.control}
                                name="vendor_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Vendor Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="vendor_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedRefVendorData?.map((item:any) => ({
                                            label: item.vendor_name || "",
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
                                name="vendor_name"
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
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="purchase_order_for"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Purchase Order For</FormLabel>
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
                                name="priority"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Priority</FormLabel>
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
                                name='delivery_date'
                                label='Delivery Date'
                                isRequired={false}
                                viewType='grid'
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="quotation_number"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Quotation Number</FormLabel>
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
                                name='quotation_date'
                                label='Quotation Date'
                                isRequired={false}
                                viewType='grid'
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="tag_user"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Tag User</FormLabel>
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
                                name="tag_user_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Tag User Name</FormLabel>
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
                                name="authorized_user"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Authorized User</FormLabel>
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
                                name="authorized_signatory"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Authorized Signatory</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <Controller
                                control={form.control}
                                name="requisition_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Requisition Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="requisition_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedTrnInvPurchaseReqData?.map((item:any) => ({
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
                                name="requisition_user"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Requisition User</FormLabel>
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
                                name="gst_applicable"
                                render={({ field }) => (
                                   <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                      <FormControl>
                                        <Checkbox
                                          checked={field?.value}
                                          onCheckedChange={field.onChange}
                                        />
                                      </FormControl>
                                      <div className='space-y-1 leading-none'>
                                        <FormLabel>Gst Applicable</FormLabel>
                                      </div>
                                      <FormMessage />
                                  </FormItem>
                                )}
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
                                name="update_item_purchase_price"
                                render={({ field }) => (
                                   <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                      <FormControl>
                                        <Checkbox
                                          checked={field?.value}
                                          onCheckedChange={field.onChange}
                                        />
                                      </FormControl>
                                      <div className='space-y-1 leading-none'>
                                        <FormLabel>Update Item Purchase Price</FormLabel>
                                      </div>
                                      <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="update_item_consumption_price"
                                render={({ field }) => (
                                   <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                      <FormControl>
                                        <Checkbox
                                          checked={field?.value}
                                          onCheckedChange={field.onChange}
                                        />
                                      </FormControl>
                                      <div className='space-y-1 leading-none'>
                                        <FormLabel>Update Item Consumption Price</FormLabel>
                                      </div>
                                      <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="notes"
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