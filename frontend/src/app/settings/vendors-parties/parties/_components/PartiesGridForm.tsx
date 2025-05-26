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
    useCreateRefPartyRefPartyPostMutation, 
    useGetAllRefPartysRefPartyGetQuery, 
    useUpdateRefPartyRefPartyIdPutMutation, 
    useDeleteRefPartyRefPartyIdDeleteMutation, 
    useGetRefPartyRefPartyIdGetQuery, 
    useGetAllRefPartyEventGetQuery, 
    useCreateRefPartyRefPartyEventPostMutation, 
    useUpdateRefPartyRefPartyEventIdPutMutation, 
    useDeleteRefPartyRefPartyEventIdDeleteMutation, 
    useGetRefPartyRefPartyEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            party_type: z.string().nonempty({
              message: 'Party Type is required'
            }),
            part_name: z.string().nonempty({
              message: 'Part Name is required'
            }),
            common_name: z.string().nonempty({
              message: 'Common Name is required'
            }),
            notes: z.string().nonempty({
              message: 'Notes is required'
            }),
            active_status: z.boolean(),
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

export default function PartiesGridForm({
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

 const [createRefParty] = useCreateRefPartyRefPartyPostMutation();
 const [updateRefParty] = useUpdateRefPartyRefPartyIdPutMutation();

//make changes for dropdown field options

//FIXME Default values to Templatize this
const defaultValues = {
         party_type: selectedItem?.party_type || "",
         part_name: selectedItem?.part_name || "",
         common_name: selectedItem?.common_name || "",
         notes: selectedItem?.notes || "",
         active_status: selectedItem?.active_status || false,
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateRefParty({
           ...tenantIDHeader(),
          id: selectedItem.id,
          refPartyUpdate: values
        }).unwrap();
        toast.success(`Parties updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Parties');
      }
    } else {
      try {
        await createRefParty({
           ...tenantIDHeader(),
          refPartyInsert: values
        }).unwrap();
        toast.success(`Parties created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Parties');
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
                                name="party_type"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Party Type</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="part_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Part Name</FormLabel>
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
                                name="common_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Common Name</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="notes"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Notes</FormLabel>
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
                                  name="active_status"
                                  render={({ field }) => (
                                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                        <FormControl>
                                          <Checkbox
                                            checked={field?.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <div className='space-y-1 leading-none'>
                                          <FormLabel>Active Status</FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                  )}
                                />
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