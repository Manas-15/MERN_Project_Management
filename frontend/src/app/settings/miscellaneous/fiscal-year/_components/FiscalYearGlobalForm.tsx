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
    useCreateFiscalyearFiscalyearPostMutation, 
    useGetAllFiscalyearsFiscalyearGetQuery, 
    useUpdateFiscalyearFiscalyearIdPutMutation, 
    useDeleteFiscalyearFiscalyearIdDeleteMutation, 
    useGetFiscalyearFiscalyearIdGetQuery, 
    useGetAllFiscalyearEventGetQuery, 
    useCreateFiscalyearFiscalyearEventPostMutation, 
    useUpdateFiscalyearFiscalyearEventIdPutMutation, 
    useDeleteFiscalyearFiscalyearEventIdDeleteMutation, 
    useGetFiscalyearFiscalyearEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            fin_year: z.string().nonempty({
              message: 'Fin Year is required'
            }),
            strat_date: z.string(),
            end_date: z.string(),
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

export default function FiscalYearGlobalForm({
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

 const [createFiscalyear] = useCreateFiscalyearFiscalyearPostMutation();
 const [updateFiscalyear] = useUpdateFiscalyearFiscalyearIdPutMutation();


//make changes for dropdown field options



//FIXME Default values to Templatize this
const defaultValues = {
         fin_year: selectedItem?.fin_year || "",
         strat_date: selectedItem?.strat_date || "",
         end_date: selectedItem?.end_date || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateFiscalyear({
           ...tenantIDHeader(),
          id: selectedItem.id,
          fiscalyearUpdate: values
        }).unwrap();
        toast.success(`Fiscal Year updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Fiscal Year');
      }
    } else {
      try {
        await createFiscalyear({
           ...tenantIDHeader(),
          fiscalyearInsert: values
        }).unwrap();
        toast.success(`Fiscal Year created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Fiscal Year');
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
                                name="fin_year"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Fin Year</FormLabel>
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
                                name='strat_date'
                                label='Strat Date'
                                isRequired={false}
                                viewType='grid'
                              />
                          </div>
                    
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <CustomDatePicker
                                control={form.control}
                                name='end_date'
                                label='End Date'
                                isRequired={false}
                                viewType='grid'
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