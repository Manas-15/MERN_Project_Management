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
import { Controller, useForm } from 'react-hook-form';
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
  useCreateSetAstActivityNamesSetAstActivityNamesPostMutation,
  useGetAllSetAstActivityNamessSetAstActivityNamesGetQuery,
  useUpdateSetAstActivityNamesSetAstActivityNamesIdPutMutation,
  useDeleteSetAstActivityNamesSetAstActivityNamesIdDeleteMutation,
  useGetSetAstActivityNamesSetAstActivityNamesIdGetQuery,
  useGetAllSetAstActivityNamesEventGetQuery,
  useCreateSetAstActivityNamesSetAstActivityNamesEventPostMutation,
  useUpdateSetAstActivityNamesSetAstActivityNamesEventIdPutMutation,
  useDeleteSetAstActivityNamesSetAstActivityNamesEventIdDeleteMutation,
  useGetSetAstActivityNamesSetAstActivityNamesEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  activity_name: z.string().nonempty({
    message: 'Activity Name is required'
  }),
  uom: z.string().nonempty({
    message: 'Uom is required'
  })
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

export default function ActivityNamesInlineForm({
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
  const [createSetAstActivityNames] =
    useCreateSetAstActivityNamesSetAstActivityNamesPostMutation();
  const [updateSetAstActivityNames] =
    useUpdateSetAstActivityNamesSetAstActivityNamesIdPutMutation();

  //make changes for dropdown field options

  //FIXME Default values to Templatize this
  const defaultValues = {
    activity_name: selectedItem?.activity_name || '',
    uom: selectedItem?.uom || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSetAstActivityNames({
          ...tenantIDHeader(),
          id: selectedItem.id,
          setAstActivityNamesUpdate: values
        }).unwrap();
        toast.success(`Activity Names updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Activity Names');
      }
    } else {
      try {
        await createSetAstActivityNames({
          ...tenantIDHeader(),
          setAstActivityNamesInsert: values
        }).unwrap();
        toast.success(`Activity Names created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Activity Names');
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
          <Card className='form-dynamic-height mx-auto w-full items-center justify-end space-x-2 overflow-hidden'>
            <CardContent className='form-dynamic-height overflow-y-auto px-6'>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='activity_name'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Activity Name</FormLabel>
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
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='uom'
                  render={({ field }) => (
                    <FormItem viewType='inline' className='flex items-center'>
                      <FormLabel className='w-[15%]'>Uom</FormLabel>
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
