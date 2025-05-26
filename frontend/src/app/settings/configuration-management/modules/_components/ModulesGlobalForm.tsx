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
    useCreateSaasRefModulesSaasRefModulesPostMutation, 
    useGetAllSaasRefModulessSaasRefModulesGetQuery, 
    useUpdateSaasRefModulesSaasRefModulesIdPutMutation, 
    useDeleteSaasRefModulesSaasRefModulesIdDeleteMutation, 
    useGetSaasRefModulesSaasRefModulesIdGetQuery, 
    useGetAllSaasRefModulesEventGetQuery, 
    useCreateSaasRefModulesSaasRefModulesEventPostMutation, 
    useUpdateSaasRefModulesSaasRefModulesEventIdPutMutation, 
    useDeleteSaasRefModulesSaasRefModulesEventIdDeleteMutation, 
    useGetSaasRefModulesSaasRefModulesEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            module_name: z.string().nonempty({
              message: 'Module Name is required'
            }),
            module_display_name: z.string().nonempty({
              message: 'Module Display Name is required'
            }),
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

export default function ModulesGlobalForm({
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

 const [createSaasRefModules] = useCreateSaasRefModulesSaasRefModulesPostMutation();
 const [updateSaasRefModules] = useUpdateSaasRefModulesSaasRefModulesIdPutMutation();


//make changes for dropdown field options



//FIXME Default values to Templatize this
const defaultValues = {
         module_name: selectedItem?.module_name || "",
         module_display_name: selectedItem?.module_display_name || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSaasRefModules({
           ...tenantIDHeader(),
          id: selectedItem.id,
          saasRefModulesUpdate: values
        }).unwrap();
        toast.success(`Modules updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Modules');
      }
    } else {
      try {
        await createSaasRefModules({
           ...tenantIDHeader(),
          saasRefModulesInsert: values
        }).unwrap();
        toast.success(`Modules created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Modules');
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
                                name="module_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Module Name</FormLabel>
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
                                name="module_display_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Module Display Name</FormLabel>
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