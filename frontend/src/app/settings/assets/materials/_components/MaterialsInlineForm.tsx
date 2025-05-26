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
    useCreateRefAstMaterialRefAstMaterialPostMutation, 
    useGetAllRefAstMaterialsRefAstMaterialGetQuery, 
    useUpdateRefAstMaterialRefAstMaterialIdPutMutation, 
    useDeleteRefAstMaterialRefAstMaterialIdDeleteMutation, 
    useGetRefAstMaterialRefAstMaterialIdGetQuery, 
    useGetAllRefAstMaterialEventGetQuery, 
    useCreateRefAstMaterialRefAstMaterialEventPostMutation, 
    useUpdateRefAstMaterialRefAstMaterialEventIdPutMutation, 
    useDeleteRefAstMaterialRefAstMaterialEventIdDeleteMutation, 
    useGetRefAstMaterialRefAstMaterialEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            material_name: z.string().nonempty({
              message: 'Material Name is required'
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

  //file_id: z.array(z.number()).optional(), // Optional array of file_ids

export default function MaterialsInlineForm({
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

const [createRefAstMaterial] = useCreateRefAstMaterialRefAstMaterialPostMutation();
const [updateRefAstMaterial] = useUpdateRefAstMaterialRefAstMaterialIdPutMutation();

//make changes for dropdown field options

//FIXME Default values to Templatize this
const defaultValues = {
         material_name: selectedItem?.material_name || "",
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
        await updateRefAstMaterial({
           ...tenantIDHeader(),
          id: selectedItem.id,
          refAstMaterialUpdate: values
        }).unwrap();
        toast.success(`Materials updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Materials');
      }
    } else {
      try {
        await createRefAstMaterial({
           ...tenantIDHeader(),
          refAstMaterialInsert: values
        }).unwrap();
        toast.success(`Materials created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Materials');
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
                                name="material_name"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Material Name</FormLabel>
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
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="create_by"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Create By</FormLabel>
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