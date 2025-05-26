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
    useCreateTrnWarehouseIndentTrnWarehouseIndentPostMutation, 
    useGetAllTrnWarehouseIndentsTrnWarehouseIndentGetQuery, 
    useUpdateTrnWarehouseIndentTrnWarehouseIndentIdPutMutation, 
    useDeleteTrnWarehouseIndentTrnWarehouseIndentIdDeleteMutation, 
    useGetTrnWarehouseIndentTrnWarehouseIndentIdGetQuery, 
    useGetAllTrnWarehouseIndentEventGetQuery, 
    useCreateTrnWarehouseIndentTrnWarehouseIndentEventPostMutation, 
    useUpdateTrnWarehouseIndentTrnWarehouseIndentEventIdPutMutation, 
    useDeleteTrnWarehouseIndentTrnWarehouseIndentEventIdDeleteMutation, 
    useGetTrnWarehouseIndentTrnWarehouseIndentEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllGrpWarehousesGrpWarehouseGetQuery,
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
            indent_for: z.string().nonempty({
              message: 'Indent For is required'
            }),
            indent_by_employee: z.number().min(1, {
              message: 'Indent By Employee is required'
            }),
            employee_name: z.string().nonempty({
              message: 'Employee Name is required'
            }),
            title: z.string().nonempty({
              message: 'Title is required'
            }),
            indent_status: z.number().min(1, {
              message: 'Indent Status is required'
            }),
            indent_quantity: z.number().min(1, {
              message: 'Indent Quantity is required'
            }),
            fulfilled_quantity: z.number().min(1, {
              message: 'Fulfilled Quantity is required'
            }),
            date_of_indent: z.string(),
            total_amount: z.number().min(1, {
              message: 'Total Amount is required'
            }),
            total_quantity: z.number().min(1, {
              message: 'Total Quantity is required'
            }),
            indent_note: z.string().nonempty({
              message: 'Indent Note is required'
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

export default function WarehouseIndentsGridForm({
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

 const [createTrnWarehouseIndent] = useCreateTrnWarehouseIndentTrnWarehouseIndentPostMutation();
 const [updateTrnWarehouseIndent] = useUpdateTrnWarehouseIndentTrnWarehouseIndentIdPutMutation();

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
         trn_number: selectedItem?.trn_number || 0,
         trn_date: selectedItem?.trn_date || "",
         warehouse_id: selectedItem?.warehouse_id || 0,
         warehouse_name: selectedItem?.warehouse_name || "",
         indent_for: selectedItem?.indent_for || "",
         indent_by_employee: selectedItem?.indent_by_employee || 0,
         employee_name: selectedItem?.employee_name || "",
         title: selectedItem?.title || "",
         indent_status: selectedItem?.indent_status || 0,
         indent_quantity: selectedItem?.indent_quantity || 0,
         fulfilled_quantity: selectedItem?.fulfilled_quantity || 0,
         date_of_indent: selectedItem?.date_of_indent || "",
         total_amount: selectedItem?.total_amount || 0,
         total_quantity: selectedItem?.total_quantity || 0,
         indent_note: selectedItem?.indent_note || "",
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnWarehouseIndent({
           ...tenantIDHeader(),
          id: selectedItem.id,
          trnWarehouseIndentUpdate: values
        }).unwrap();
        toast.success(`Warehouse Indents updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Warehouse Indents');
      }
    } else {
      try {
        await createTrnWarehouseIndent({
           ...tenantIDHeader(),
          trnWarehouseIndentInsert: values
        }).unwrap();
        toast.success(`Warehouse Indents created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Warehouse Indents');
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
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
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
                              <FormField
                                control={form.control}
                                name="indent_for"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Indent For</FormLabel>
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
                                name="indent_by_employee"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Indent By Employee</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="employee_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Employee Name</FormLabel>
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
                                name="title"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="indent_status"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Indent Status</FormLabel>
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
                                name="fulfilled_quantity"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Fulfilled Quantity</FormLabel>
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
                                name='date_of_indent'
                                label='Date Of Indent'
                                isRequired={false}
                                viewType='grid'
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
                              <FormField
                                control={form.control}
                                name="indent_note"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Indent Note</FormLabel>
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