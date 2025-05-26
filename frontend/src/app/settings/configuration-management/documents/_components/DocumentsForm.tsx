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
    useCreateSaasRefDocumentsSaasRefDocumentsPostMutation, 
    useGetAllSaasRefDocumentssSaasRefDocumentsGetQuery, 
    useUpdateSaasRefDocumentsSaasRefDocumentsIdPutMutation, 
    useDeleteSaasRefDocumentsSaasRefDocumentsIdDeleteMutation, 
    useGetSaasRefDocumentsSaasRefDocumentsIdGetQuery, 
    useGetAllSaasRefDocumentsEventGetQuery, 
    useCreateSaasRefDocumentsSaasRefDocumentsEventPostMutation, 
    useUpdateSaasRefDocumentsSaasRefDocumentsEventIdPutMutation, 
    useDeleteSaasRefDocumentsSaasRefDocumentsEventIdDeleteMutation, 
    useGetSaasRefDocumentsSaasRefDocumentsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllPoplistssPoplistsGetQuery,
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            document_name: z.string().nonempty({
              message: 'Document Name is required'
            }),
            associated_to: z.string().nonempty({
              message: 'Associated To is required'
            }),
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
 

export default function DocumentsForm({
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

 const [createSaasRefDocuments] = useCreateSaasRefDocumentsSaasRefDocumentsPostMutation();
  const [updateSaasRefDocuments] = useUpdateSaasRefDocumentsSaasRefDocumentsIdPutMutation();


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
         document_name: selectedItem?.document_name || "",
         associated_to: selectedItem?.associated_to || "",
         is_enabled: selectedItem?.is_enabled || false,
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSaasRefDocuments({
           ...tenantIDHeader(),
          id: selectedItem.id,
          saasRefDocumentsUpdate: values
        }).unwrap();
        toast.success(`Documents updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Documents');
      }
    } else {
      try {
        await createSaasRefDocuments({
           ...tenantIDHeader(),
          saasRefDocumentsInsert: values
        }).unwrap();
        toast.success(`Documents created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Documents');
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
                                name="document_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Document Name</FormLabel>
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
                                name="associated_to"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Associated To</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="associated_to"
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