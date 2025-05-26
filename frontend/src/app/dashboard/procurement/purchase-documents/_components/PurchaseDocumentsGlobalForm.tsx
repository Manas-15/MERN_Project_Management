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
    useCreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentPostMutation, 
    useGetAllTrnInvPurchaseDocumentsTrnInvPurchaseDocumentGetQuery, 
    useUpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdPutMutation, 
    useDeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdDeleteMutation, 
    useGetTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdGetQuery, 
    useGetAllTrnInvPurchaseDocumentEventGetQuery, 
    useCreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventPostMutation, 
    useUpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdPutMutation, 
    useDeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdDeleteMutation, 
    useGetTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllTrnInvPurchasesTrnInvPurchaseGetQuery,
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            purchase_id: z.number().min(1, {
              message: 'Purchase Id is required'
            }),
            document_type_id: z.number().min(1, {
              message: 'Document Type Id is required'
            }),
            document_number: z.string().nonempty({
              message: 'Document Number is required'
            }),
            document_file_name: z.string().nonempty({
              message: 'Document File Name is required'
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

export default function PurchaseDocumentsGlobalForm({
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

 const [createTrnInvPurchaseDocument] = useCreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentPostMutation();
 const [updateTrnInvPurchaseDocument] = useUpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdPutMutation();


//make changes for dropdown field options
        const {
          data: fetchedTrnInvPurchaseData,
          refetch: refetchTrnInvPurchaseList
        } = useGetAllTrnInvPurchasesTrnInvPurchaseGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );



//FIXME Default values to Templatize this
const defaultValues = {
         purchase_id: selectedItem?.purchase_id || 0,
         document_type_id: selectedItem?.document_type_id || 0,
         document_number: selectedItem?.document_number || "",
         document_file_name: selectedItem?.document_file_name || "",
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnInvPurchaseDocument({
           ...tenantIDHeader(),
          id: selectedItem.id,
          trnInvPurchaseDocumentUpdate: values
        }).unwrap();
        toast.success(`Purchase Documents updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Purchase Documents');
      }
    } else {
      try {
        await createTrnInvPurchaseDocument({
           ...tenantIDHeader(),
          trnInvPurchaseDocumentInsert: values
        }).unwrap();
        toast.success(`Purchase Documents created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Purchase Documents');
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
                                name="purchase_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Purchase Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="purchase_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedTrnInvPurchaseData?.map((item:any) => ({
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
                                name="document_type_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Document Type Id</FormLabel>
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
                                name="document_number"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Document Number</FormLabel>
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
                                name="document_file_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Document File Name</FormLabel>
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