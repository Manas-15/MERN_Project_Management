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
  useCreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPostMutation,
  useGetAllSetAstSubAssemblyCategorysSetAstSubAssemblyCategoryGetQuery,
  useUpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdPutMutation,
  useDeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteMutation,
  useGetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGetQuery,
  useGetAllSetAstSubAssemblyCategoryEventGetQuery,
  useCreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventPostMutation,
  useUpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdPutMutation,
  useDeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdDeleteMutation,
  useGetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  category_name: z.string().nonempty({
    message: 'Category Name is required'
  }),
  create_by: z.string()
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

export default function SubAssemblyCategoriesGridForm({
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
  const [createSetAstSubAssemblyCategory] =
    useCreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPostMutation();
  const [updateSetAstSubAssemblyCategory] =
    useUpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdPutMutation();

  //make changes for dropdown field options

  //FIXME Default values to Templatize this
  const defaultValues = {
    category_name: selectedItem?.category_name || '',
    create_by: selectedItem?.create_by || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSetAstSubAssemblyCategory({
          ...tenantIDHeader(),
          id: selectedItem.id,
          setAstSubAssemblyCategoryUpdate: values
        }).unwrap();
        toast.success(`Sub Assembly Categories updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Sub Assembly Categories');
      }
    } else {
      try {
        await createSetAstSubAssemblyCategory({
          ...tenantIDHeader(),
          setAstSubAssemblyCategoryInsert: values
        }).unwrap();
        toast.success(`Sub Assembly Categories created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Sub Assembly Categories');
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
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='category_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category Name</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='create_by'
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
