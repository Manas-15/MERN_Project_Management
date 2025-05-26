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
    useCreateSaasRefWorkflowsSaasRefWorkflowsPostMutation, 
    useGetAllSaasRefWorkflowssSaasRefWorkflowsGetQuery, 
    useUpdateSaasRefWorkflowsSaasRefWorkflowsIdPutMutation, 
    useDeleteSaasRefWorkflowsSaasRefWorkflowsIdDeleteMutation, 
    useGetSaasRefWorkflowsSaasRefWorkflowsIdGetQuery, 
    useGetAllSaasRefWorkflowsEventGetQuery, 
    useCreateSaasRefWorkflowsSaasRefWorkflowsEventPostMutation, 
    useUpdateSaasRefWorkflowsSaasRefWorkflowsEventIdPutMutation, 
    useDeleteSaasRefWorkflowsSaasRefWorkflowsEventIdDeleteMutation, 
    useGetSaasRefWorkflowsSaasRefWorkflowsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllPoplistssPoplistsGetQuery,
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            stage_name: z.string().nonempty({
              message: 'Stage Name is required'
            }),
            status_sequence: z.number().min(1, {
              message: 'Status Sequence is required'
            }),
            entity_type: z.string().nonempty({
              message: 'Entity Type is required'
            }),
            is_default: z.boolean(),
            is_enabled: z.boolean(),
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

export default function WorkflowsInlineForm({
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

const [createSaasRefWorkflows] = useCreateSaasRefWorkflowsSaasRefWorkflowsPostMutation();
const [updateSaasRefWorkflows] = useUpdateSaasRefWorkflowsSaasRefWorkflowsIdPutMutation();

//make changes for dropdown field options
        const {
          data: fetchedPoplistsData,
          refetch: refetchPoplistsList
        } = useGetAllPoplistssPoplistsGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );

//FIXME Default values to Templatize this
const defaultValues = {
         stage_name: selectedItem?.stage_name || "",
         status_sequence: selectedItem?.status_sequence || 0,
         entity_type: selectedItem?.entity_type || "",
         is_default: selectedItem?.is_default || false,
         is_enabled: selectedItem?.is_enabled || false,
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSaasRefWorkflows({
           ...tenantIDHeader(),
          id: selectedItem.id,
          saasRefWorkflowsUpdate: values
        }).unwrap();
        toast.success(`Workflows updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Workflows');
      }
    } else {
      try {
        await createSaasRefWorkflows({
           ...tenantIDHeader(),
          saasRefWorkflowsInsert: values
        }).unwrap();
        toast.success(`Workflows created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Workflows');
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
                                name="stage_name"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Stage Name</FormLabel>
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
                                name="status_sequence"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Status Sequence</FormLabel>
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
                                name="entity_type"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Entity Type</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="entity_type"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedPoplistsData?.map((item:any) => ({
                                            label: item.scrl_name || "",
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
                                name="is_default"
                                render={({ field }) => (
                                   <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                      <FormControl>
                                        <Checkbox
                                          checked={field?.value}
                                          onCheckedChange={field.onChange}
                                        />
                                      </FormControl>
                                      <div className='space-y-1 leading-none'>
                                        <FormLabel>Is Default</FormLabel>
                                      </div>
                                      <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="is_enabled"
                                render={({ field }) => (
                                   <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                      <FormControl>
                                        <Checkbox
                                          checked={field?.value}
                                          onCheckedChange={field.onChange}
                                        />
                                      </FormControl>
                                      <div className='space-y-1 leading-none'>
                                        <FormLabel>Is Enabled</FormLabel>
                                      </div>
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