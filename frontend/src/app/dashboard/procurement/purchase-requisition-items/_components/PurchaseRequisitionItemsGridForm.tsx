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
    useCreateTrnPurchaseReqItemsTrnPurchaseReqItemsPostMutation, 
    useGetAllTrnPurchaseReqItemssTrnPurchaseReqItemsGetQuery, 
    useUpdateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPutMutation, 
    useDeleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDeleteMutation, 
    useGetTrnPurchaseReqItemsTrnPurchaseReqItemsIdGetQuery, 
    useGetAllTrnPurchaseReqItemsEventGetQuery, 
    useCreateTrnPurchaseReqItemsTrnPurchaseReqItemsEventPostMutation, 
    useUpdateTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdPutMutation, 
    useDeleteTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdDeleteMutation, 
    useGetTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllTrnInvPurchaseReqsTrnInvPurchaseReqGetQuery,
          useGetAllTrnInvItemsTrnInvItemGetQuery,
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            trn_fnyr: z.number().min(1, {
              message: 'Transaction Fnyr is required'
            }),
            trn_number: z.number().min(1, {
              message: 'Transaction Number is required'
            }),
            trn_date: z.string(),
            requisition_id: z.number().min(1, {
              message: 'Requisition Id is required'
            }),
            item_id: z.number().min(1, {
              message: 'Item Id is required'
            }),
            item_name: z.string().nonempty({
              message: 'Item Name is required'
            }),
            indent_quantity: z.number().min(1, {
              message: 'Indent Quantity is required'
            }),
            requisition_quantity: z.number().min(1, {
              message: 'Requisition Quantity is required'
            }),
            unit_rate: z.string(),
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

export default function PurchaseRequisitionItemsGridForm({
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

 const [createTrnPurchaseReqItems] = useCreateTrnPurchaseReqItemsTrnPurchaseReqItemsPostMutation();
 const [updateTrnPurchaseReqItems] = useUpdateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPutMutation();

//make changes for dropdown field options
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
         trn_fnyr: selectedItem?.trn_fnyr || 0,
         trn_number: selectedItem?.trn_number || 0,
         trn_date: selectedItem?.trn_date || "",
         requisition_id: selectedItem?.requisition_id || 0,
         item_id: selectedItem?.item_id || 0,
         item_name: selectedItem?.item_name || "",
         indent_quantity: selectedItem?.indent_quantity || 0,
         requisition_quantity: selectedItem?.requisition_quantity || 0,
         unit_rate: selectedItem?.unit_rate || "",
         gst_prct: selectedItem?.gst_prct || 0,
         gst_amount: selectedItem?.gst_amount || 0,
         amount: selectedItem?.amount || 0,
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnPurchaseReqItems({
           ...tenantIDHeader(),
          id: selectedItem.id,
          trnPurchaseReqItemsUpdate: values
        }).unwrap();
        toast.success(`Purchase Requisition Items updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Purchase Requisition Items');
      }
    } else {
      try {
        await createTrnPurchaseReqItems({
           ...tenantIDHeader(),
          trnPurchaseReqItemsInsert: values
        }).unwrap();
        toast.success(`Purchase Requisition Items created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Purchase Requisition Items');
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
                              <FormField
                                control={form.control}
                                name="trn_number"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Transaction Number</FormLabel>
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
                                name='trn_date'
                                label='Transaction Date'
                                isRequired={false}
                                viewType='grid'
                              />
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
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
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
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="indent_quantity"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Indent Quantity</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="requisition_quantity"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Requisition Quantity</FormLabel>
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
                                name='unit_rate'
                                label='Unit Rate'
                                isRequired={false}
                                viewType='grid'
                              />
                              <FormField
                                control={form.control}
                                name="gst_prct"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Gst Prct</FormLabel>
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
                              <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Amount</FormLabel>
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