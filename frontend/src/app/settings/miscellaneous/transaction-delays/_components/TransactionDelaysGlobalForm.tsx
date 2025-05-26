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
    useCreateSetAstTransactionDelaySetAstTransactionDelayPostMutation, 
    useGetAllSetAstTransactionDelaysSetAstTransactionDelayGetQuery, 
    useUpdateSetAstTransactionDelaySetAstTransactionDelayIdPutMutation, 
    useDeleteSetAstTransactionDelaySetAstTransactionDelayIdDeleteMutation, 
    useGetSetAstTransactionDelaySetAstTransactionDelayIdGetQuery, 
    useGetAllSetAstTransactionDelayEventGetQuery, 
    useCreateSetAstTransactionDelaySetAstTransactionDelayEventPostMutation, 
    useUpdateSetAstTransactionDelaySetAstTransactionDelayEventIdPutMutation, 
    useDeleteSetAstTransactionDelaySetAstTransactionDelayEventIdDeleteMutation, 
    useGetSetAstTransactionDelaySetAstTransactionDelayEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            transaction_type_name: z.string().nonempty({
              message: 'Transaction Type Name is required'
            }),
            delay_value: z.number().min(1, {
              message: 'Delay Value is required'
            }),
            show_in_dashboard: z.boolean(),
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

export default function TransactionDelaysGlobalForm({
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

 const [createSetAstTransactionDelay] = useCreateSetAstTransactionDelaySetAstTransactionDelayPostMutation();
 const [updateSetAstTransactionDelay] = useUpdateSetAstTransactionDelaySetAstTransactionDelayIdPutMutation();


//make changes for dropdown field options



//FIXME Default values to Templatize this
const defaultValues = {
         transaction_type_name: selectedItem?.transaction_type_name || "",
         delay_value: selectedItem?.delay_value || 0,
         show_in_dashboard: selectedItem?.show_in_dashboard || false,
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSetAstTransactionDelay({
           ...tenantIDHeader(),
          id: selectedItem.id,
          setAstTransactionDelayUpdate: values
        }).unwrap();
        toast.success(`Transaction Delays updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Transaction Delays');
      }
    } else {
      try {
        await createSetAstTransactionDelay({
           ...tenantIDHeader(),
          setAstTransactionDelayInsert: values
        }).unwrap();
        toast.success(`Transaction Delays created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Transaction Delays');
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
                                name="transaction_type_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Transaction Type Name</FormLabel>
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
                                name="delay_value"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Delay Value</FormLabel>
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
                                name="show_in_dashboard"
                                render={({ field }) => (
                                   <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                      <FormControl>
                                        <Checkbox
                                          checked={field?.value}
                                          onCheckedChange={field.onChange}
                                        />
                                      </FormControl>
                                      <div className='space-y-1 leading-none'>
                                        <FormLabel>Show In Dashboard</FormLabel>
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