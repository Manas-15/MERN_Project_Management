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
    useCreateRefWorkstationRefWorkstationPostMutation, 
    useGetAllRefWorkstationsRefWorkstationGetQuery, 
    useUpdateRefWorkstationRefWorkstationIdPutMutation, 
    useDeleteRefWorkstationRefWorkstationIdDeleteMutation, 
    useGetRefWorkstationRefWorkstationIdGetQuery, 
    useGetAllRefWorkstationEventGetQuery, 
    useCreateRefWorkstationRefWorkstationEventPostMutation, 
    useUpdateRefWorkstationRefWorkstationEventIdPutMutation, 
    useDeleteRefWorkstationRefWorkstationEventIdDeleteMutation, 
    useGetRefWorkstationRefWorkstationEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            organization_id: z.number().min(1, {
              message: 'Organization Id is required'
            }),
            serial_number: z.number().min(1, {
              message: 'Serial Number is required'
            }),
            workstation_name: z.string().nonempty({
              message: 'Workstation Name is required'
            }),
            workstation_code: z.string().nonempty({
              message: 'Workstation Code is required'
            }),
            associated_site: z.string(),
            notes: z.string().nonempty({
              message: 'Notes is required'
            }),
            active_flag: z.boolean(),
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

export default function WorkstationsGridForm({
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

 const [createRefWorkstation] = useCreateRefWorkstationRefWorkstationPostMutation();
 const [updateRefWorkstation] = useUpdateRefWorkstationRefWorkstationIdPutMutation();

//make changes for dropdown field options

//FIXME Default values to Templatize this
const defaultValues = {
         organization_id: selectedItem?.organization_id || 0,
         serial_number: selectedItem?.serial_number || 0,
         workstation_name: selectedItem?.workstation_name || "",
         workstation_code: selectedItem?.workstation_code || "",
         associated_site: selectedItem?.associated_site || "",
         notes: selectedItem?.notes || "",
         active_flag: selectedItem?.active_flag || false,
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateRefWorkstation({
           ...tenantIDHeader(),
          id: selectedItem.id,
          refWorkstationUpdate: values
        }).unwrap();
        toast.success(`Workstations updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Workstations');
      }
    } else {
      try {
        await createRefWorkstation({
           ...tenantIDHeader(),
          refWorkstationInsert: values
        }).unwrap();
        toast.success(`Workstations created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Workstations');
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
                                name="organization_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Organization Id</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="serial_number"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Serial Number</FormLabel>
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
                                name="workstation_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Workstation Name</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="workstation_code"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Workstation Code</FormLabel>
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
                                name="associated_site"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Associated Site</FormLabel>
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
                                  name="active_flag"
                                  render={({ field }) => (
                                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                        <FormControl>
                                          <Checkbox
                                            checked={field?.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <div className='space-y-1 leading-none'>
                                          <FormLabel>Active Flag</FormLabel>
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