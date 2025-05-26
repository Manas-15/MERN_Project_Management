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
    useCreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsPostMutation, 
    useGetAllTrnPurchaseOrderItemssTrnPurchaseOrderItemsGetQuery, 
    useUpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdPutMutation, 
    useDeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdDeleteMutation, 
    useGetTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdGetQuery, 
    useGetAllTrnPurchaseOrderItemsEventGetQuery, 
    useCreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventPostMutation, 
    useUpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdPutMutation, 
    useDeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdDeleteMutation, 
    useGetTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllTrnPurchaseOrdersTrnPurchaseOrderGetQuery,
          useGetAllTrnInvItemsTrnInvItemGetQuery,
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            po_id: z.number().min(1, {
              message: 'Po Id is required'
            }),
            item_id: z.number().min(1, {
              message: 'Item Id is required'
            }),
            item_name: z.string().nonempty({
              message: 'Item Name is required'
            }),
            requsition_qty: z.number().min(1, {
              message: 'Requsition Qty is required'
            }),
            quantity: z.number().min(1, {
              message: 'Quantity is required'
            }),
            unit_rate: z.number().min(1, {
              message: 'Unit Rate is required'
            }),
            discount: z.number().min(1, {
              message: 'Discount is required'
            }),
            gst_prct: z.number().min(1, {
              message: 'Gst Prct is required'
            }),
            gst_amount: z.number().min(1, {
              message: 'Gst Amount is required'
            }),
            amount: z.number().min(1, {
              message: 'Amount is required'
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

//file_id: z.array(z.number()).optional(), // Optional array of file_ids
 

export default function PurchaseOrderItemsForm({
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

 const [createTrnPurchaseOrderItems] = useCreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsPostMutation();
  const [updateTrnPurchaseOrderItems] = useUpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdPutMutation();


//make changes for dropdown field options
        const {
          data: fetchedTrnPurchaseOrderData,
          refetch: refetchTrnPurchaseOrderList
        } = useGetAllTrnPurchaseOrdersTrnPurchaseOrderGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );
        const {
          data: fetchedTrnInvItemData,
          refetch: refetchTrnInvItemList
        } = useGetAllTrnInvItemsTrnInvItemGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );



//FIXME Default values to Templatize this
const defaultValues = {
         po_id: selectedItem?.po_id || 0,
         item_id: selectedItem?.item_id || 0,
         item_name: selectedItem?.item_name || "",
         requsition_qty: selectedItem?.requsition_qty || "",
         quantity: selectedItem?.quantity || 0,
         unit_rate: selectedItem?.unit_rate || "",
         discount: selectedItem?.discount || "",
         gst_prct: selectedItem?.gst_prct || "",
         gst_amount: selectedItem?.gst_amount || "",
         amount: selectedItem?.amount || "",
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnPurchaseOrderItems({
           ...tenantIDHeader(),
          id: selectedItem.id,
          trnPurchaseOrderItemsUpdate: values
        }).unwrap();
        toast.success(`Purchase Order Items updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Purchase Order Items');
      }
    } else {
      try {
        await createTrnPurchaseOrderItems({
           ...tenantIDHeader(),
          trnPurchaseOrderItemsInsert: values
        }).unwrap();
        toast.success(`Purchase Order Items created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Purchase Order Items');
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
                                name="po_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Po Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="po_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedTrnPurchaseOrderData?.map((item:any) => ({
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
                                name="item_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Item Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="item_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedTrnInvItemData?.map((item:any) => ({
                                            label: item.item_name || "",
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
                                name="item_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Item Name</FormLabel>
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
                                name="requsition_qty"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Requsition Qty</FormLabel>
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
                                name="quantity"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Quantity</FormLabel>
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
                                name="unit_rate"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Unit Rate</FormLabel>
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
                                name="discount"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Discount</FormLabel>
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
                                name="gst_prct"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Gst Prct</FormLabel>
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
                                name="gst_amount"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Gst Amount</FormLabel>
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
                                name="amount"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Amount</FormLabel>
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