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
    useCreateSetAssetTypeSetAssetTypePostMutation, 
    useGetAllSetAssetTypesSetAssetTypeGetQuery, 
    useUpdateSetAssetTypeSetAssetTypeIdPutMutation, 
    useDeleteSetAssetTypeSetAssetTypeIdDeleteMutation, 
    useGetSetAssetTypeSetAssetTypeIdGetQuery, 
    useGetAllSetAssetTypeEventGetQuery, 
    useCreateSetAssetTypeSetAssetTypeEventPostMutation, 
    useUpdateSetAssetTypeSetAssetTypeEventIdPutMutation, 
    useDeleteSetAssetTypeSetAssetTypeEventIdDeleteMutation, 
    useGetSetAssetTypeSetAssetTypeEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            asset_type_name: z.string().nonempty({
              message: 'Asset Type Name is required'
            }),
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

export default function AssetTypesGridForm({
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

 const [createSetAssetType] = useCreateSetAssetTypeSetAssetTypePostMutation();
 const [updateSetAssetType] = useUpdateSetAssetTypeSetAssetTypeIdPutMutation();

//make changes for dropdown field options

//FIXME Default values to Templatize this
const defaultValues = {
         asset_type_name: selectedItem?.asset_type_name || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSetAssetType({
           ...tenantIDHeader(),
          id: selectedItem.id,
          setAssetTypeUpdate: values
        }).unwrap();
        toast.success(`Asset Types updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Asset Types');
      }
    } else {
      try {
        await createSetAssetType({
           ...tenantIDHeader(),
          setAssetTypeInsert: values
        }).unwrap();
        toast.success(`Asset Types created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Asset Types');
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
                                name="asset_type_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Asset Type Name</FormLabel>
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