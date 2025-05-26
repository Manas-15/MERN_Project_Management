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
    useCreateTrnInvPurchaseReqTrnInvPurchaseReqPostMutation, 
    useGetAllTrnInvPurchaseReqsTrnInvPurchaseReqGetQuery, 
    useUpdateTrnInvPurchaseReqTrnInvPurchaseReqIdPutMutation, 
    useDeleteTrnInvPurchaseReqTrnInvPurchaseReqIdDeleteMutation, 
    useGetTrnInvPurchaseReqTrnInvPurchaseReqIdGetQuery, 
    useGetAllTrnInvPurchaseReqEventGetQuery, 
    useCreateTrnInvPurchaseReqTrnInvPurchaseReqEventPostMutation, 
    useUpdateTrnInvPurchaseReqTrnInvPurchaseReqEventIdPutMutation, 
    useDeleteTrnInvPurchaseReqTrnInvPurchaseReqEventIdDeleteMutation, 
    useGetTrnInvPurchaseReqTrnInvPurchaseReqEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllGrpWarehousesGrpWarehouseGetQuery,
          useGetAllResAssetsResAssetGetQuery,
          useGetAllTrnWarehouseIndentsTrnWarehouseIndentGetQuery,
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
            warehouse_id: z.number().min(1, {
              message: 'Warehouse Id is required'
            }),
            warehouse_name: z.string().nonempty({
              message: 'Warehouse Name is required'
            }),
            status: z.string().nonempty({
              message: 'Status is required'
            }),
            title: z.string().nonempty({
              message: 'Title is required'
            }),
            priority: z.string().nonempty({
              message: 'Priority is required'
            }),
            due_date: z.string(),
            tag_user: z.number().min(1, {
              message: 'Tag User is required'
            }),
            tag_assests: z.number().min(1, {
              message: 'Tag Assests is required'
            }),
            indent_id: z.number().min(1, {
              message: 'Indent Id is required'
            }),
            total_quantity: z.number().min(1, {
              message: 'Total Quantity is required'
            }),
            currency_id: z.number().min(1, {
              message: 'Currency Id is required'
            }),
            sub_total_amount: z.number().min(1, {
              message: 'Sub Total Amount is required'
            }),
            tax_amount: z.number().min(1, {
              message: 'Tax Amount is required'
            }),
            total_amount: z.number().min(1, {
              message: 'Total Amount is required'
            }),
            notes: z.string().nonempty({
              message: 'Notes is required'
            }),
            requisition_status: z.string().nonempty({
              message: 'Requisition Status is required'
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

export default function PurchaseRequisitionsInlineForm({
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

const [createTrnInvPurchaseReq] = useCreateTrnInvPurchaseReqTrnInvPurchaseReqPostMutation();
const [updateTrnInvPurchaseReq] = useUpdateTrnInvPurchaseReqTrnInvPurchaseReqIdPutMutation();

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
          data: fetchedResAssetData,
          refetch: refetchResAssetList
        } = useGetAllResAssetsResAssetGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );
        const {
          data: fetchedTrnWarehouseIndentData,
          refetch: refetchTrnWarehouseIndentList
        } = useGetAllTrnWarehouseIndentsTrnWarehouseIndentGetQuery(
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
         warehouse_id: selectedItem?.warehouse_id || 0,
         warehouse_name: selectedItem?.warehouse_name || "",
         status: selectedItem?.status || "",
         title: selectedItem?.title || "",
         priority: selectedItem?.priority || "",
         due_date: selectedItem?.due_date || "",
         tag_user: selectedItem?.tag_user || 0,
         tag_assests: selectedItem?.tag_assests || 0,
         indent_id: selectedItem?.indent_id || 0,
         total_quantity: selectedItem?.total_quantity || 0,
         currency_id: selectedItem?.currency_id || 0,
         sub_total_amount: selectedItem?.sub_total_amount || "",
         tax_amount: selectedItem?.tax_amount || "",
         total_amount: selectedItem?.total_amount || "",
         notes: selectedItem?.notes || "",
         requisition_status: selectedItem?.requisition_status || "",
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnInvPurchaseReq({
           ...tenantIDHeader(),
          id: selectedItem.id,
          trnInvPurchaseReqUpdate: values
        }).unwrap();
        toast.success(`Purchase Requisitions updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Purchase Requisitions');
      }
    } else {
      try {
        await createTrnInvPurchaseReq({
           ...tenantIDHeader(),
          trnInvPurchaseReqInsert: values
        }).unwrap();
        toast.success(`Purchase Requisitions created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Purchase Requisitions');
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
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Transaction Fnyr</FormLabel>
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
                                name="trn_number"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Transaction Number</FormLabel>
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
                                <CustomDatePicker
                                  control={form.control}
                                  name='trn_date'
                                  label='Transaction Date'
                                  isRequired={false}
                                  viewType='inline'
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
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Warehouse Name</FormLabel>
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
                                name="title"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Title</FormLabel>
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
                                name="priority"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Priority</FormLabel>
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
                                  name='due_date'
                                  label='Due Date'
                                  isRequired={false}
                                  viewType='inline'
                                />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="tag_user"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Tag User</FormLabel>
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
                              <Controller
                                control={form.control}
                                name="tag_assests"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Tag Assests</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="tag_assests"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedResAssetData?.map((item:any) => ({
                                            label: item.asset_type_name || "",
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
                                name="indent_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Indent Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="indent_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedTrnWarehouseIndentData?.map((item:any) => ({
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
                                name="total_quantity"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Total Quantity</FormLabel>
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
                                name="currency_id"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Currency Id</FormLabel>
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
                                name="sub_total_amount"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Sub Total Amount</FormLabel>
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
                                name="tax_amount"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Tax Amount</FormLabel>
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
                                name="total_amount"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Total Amount</FormLabel>
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
                                name="notes"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Notes</FormLabel>
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
                                name="requisition_status"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Requisition Status</FormLabel>
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