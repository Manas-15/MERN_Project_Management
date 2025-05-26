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
    useCreateTrnTicketDocumentsTrnTicketDocumentsPostMutation, 
    useGetAllTrnTicketDocumentssTrnTicketDocumentsGetQuery, 
    useUpdateTrnTicketDocumentsTrnTicketDocumentsIdPutMutation, 
    useDeleteTrnTicketDocumentsTrnTicketDocumentsIdDeleteMutation, 
    useGetTrnTicketDocumentsTrnTicketDocumentsIdGetQuery, 
    useGetAllTrnTicketDocumentsEventGetQuery, 
    useCreateTrnTicketDocumentsTrnTicketDocumentsEventPostMutation, 
    useUpdateTrnTicketDocumentsTrnTicketDocumentsEventIdPutMutation, 
    useDeleteTrnTicketDocumentsTrnTicketDocumentsEventIdDeleteMutation, 
    useGetTrnTicketDocumentsTrnTicketDocumentsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllTrnTicketsTrnTicketGetQuery,
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            trn_fnyr: z.number().min(1, {
              message: 'Transaction Fnyr is required'
            }),
            upload_date: z.string(),
            ticket_id: z.number().min(1, {
              message: 'Ticket Id is required'
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

export default function TicketDocumentsGridForm({
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

 const [createTrnTicketDocuments] = useCreateTrnTicketDocumentsTrnTicketDocumentsPostMutation();
 const [updateTrnTicketDocuments] = useUpdateTrnTicketDocumentsTrnTicketDocumentsIdPutMutation();

//make changes for dropdown field options
        const {
          data: fetchedTrnTicketData,
          refetch: refetchTrnTicketList
        } = useGetAllTrnTicketsTrnTicketGetQuery(
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
         upload_date: selectedItem?.upload_date || "",
         ticket_id: selectedItem?.ticket_id || 0,
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
        await updateTrnTicketDocuments({
           ...tenantIDHeader(),
          id: selectedItem.id,
          trnTicketDocumentsUpdate: values
        }).unwrap();
        toast.success(`Ticket Documents updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Ticket Documents');
      }
    } else {
      try {
        await createTrnTicketDocuments({
           ...tenantIDHeader(),
          trnTicketDocumentsInsert: values
        }).unwrap();
        toast.success(`Ticket Documents created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Ticket Documents');
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
                              <CustomDatePicker
                                control={form.control}
                                name='upload_date'
                                label='Upload Date'
                                isRequired={false}
                                viewType='grid'
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <Controller
                                control={form.control}
                                name="ticket_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Ticket Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="ticket_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedTrnTicketData?.map((item:any) => ({
                                            label: item.cost_centre_name || "",
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
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
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