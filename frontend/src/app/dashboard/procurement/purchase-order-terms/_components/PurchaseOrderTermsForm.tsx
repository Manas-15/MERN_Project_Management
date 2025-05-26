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
    useCreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsPostMutation, 
    useGetAllTrnPurchaseOrderTermssTrnPurchaseOrderTermsGetQuery, 
    useUpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPutMutation, 
    useDeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDeleteMutation, 
    useGetTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGetQuery, 
    useGetAllTrnPurchaseOrderTermsEventGetQuery, 
    useCreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventPostMutation, 
    useUpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdPutMutation, 
    useDeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdDeleteMutation, 
    useGetTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllTrnPurchaseOrdersTrnPurchaseOrderGetQuery,
          useGetAllPurchaseOrderTermssPurchaseOrderTermsGetQuery,
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            po_id: z.number().min(1, {
              message: 'Po Id is required'
            }),
            po_fnyr: z.number().min(1, {
              message: 'Po Fnyr is required'
            }),
            term_id: z.number().min(1, {
              message: 'Term Id is required'
            }),
            term_desc: z.string().nonempty({
              message: 'Term Desc is required'
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
 

export default function PurchaseOrderTermsForm({
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

 const [createTrnPurchaseOrderTerms] = useCreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsPostMutation();
  const [updateTrnPurchaseOrderTerms] = useUpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPutMutation();


//make changes for dropdown field options
        const {
          data: fetchedTrnPurchaseOrderData,
          refetch: refetchTrnPurchaseOrderList
        } = useGetAllTrnPurchaseOrdersTrnPurchaseOrderGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );
        const {
          data: fetchedPurchaseOrderTermsData,
          refetch: refetchPurchaseOrderTermsList
        } = useGetAllPurchaseOrderTermssPurchaseOrderTermsGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );



//FIXME Default values to Templatize this
const defaultValues = {
         po_id: selectedItem?.po_id || 0,
         po_fnyr: selectedItem?.po_fnyr || 0,
         term_id: selectedItem?.term_id || 0,
         term_desc: selectedItem?.term_desc || "",
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnPurchaseOrderTerms({
           ...tenantIDHeader(),
          id: selectedItem.id,
          trnPurchaseOrderTermsUpdate: values
        }).unwrap();
        toast.success(`Purchase Order Terms updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Purchase Order Terms');
      }
    } else {
      try {
        await createTrnPurchaseOrderTerms({
           ...tenantIDHeader(),
          trnPurchaseOrderTermsInsert: values
        }).unwrap();
        toast.success(`Purchase Order Terms created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Purchase Order Terms');
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
                                name="po_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Po Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="po_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedTrnPurchaseOrderData?.map((item:any) => ({
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
                                name="po_fnyr"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Po Fnyr</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <Controller
                                control={form.control}
                                name="term_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Term Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="term_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedPurchaseOrderTermsData?.map((item:any) => ({
                                            label: item.term_name || "",
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
                                name="term_desc"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Term Desc</FormLabel>
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