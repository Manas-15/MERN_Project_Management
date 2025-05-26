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
    useCreatePoplistsPoplistsPostMutation, 
    useGetAllPoplistssPoplistsGetQuery, 
    useUpdatePoplistsPoplistsIdPutMutation, 
    useDeletePoplistsPoplistsIdDeleteMutation, 
    useGetPoplistsPoplistsIdGetQuery, 
    useGetAllPoplistsEventGetQuery, 
    useCreatePoplistsPoplistsEventPostMutation, 
    useUpdatePoplistsPoplistsEventIdPutMutation, 
    useDeletePoplistsPoplistsEventIdDeleteMutation, 
    useGetPoplistsPoplistsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            scrl_group: z.string().nonempty({
              message: 'Scrl Group is required'
            }),
            scrl_name: z.string().nonempty({
              message: 'Scrl Name is required'
            }),
            scrl_code: z.string().nonempty({
              message: 'Scrl Code is required'
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

//file_id: z.array(z.number()).optional(), // Optional array of file_ids
 

export default function PopListsForm({
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

 const [createPoplists] = useCreatePoplistsPoplistsPostMutation();
  const [updatePoplists] = useUpdatePoplistsPoplistsIdPutMutation();


//make changes for dropdown field options



//FIXME Default values to Templatize this
const defaultValues = {
         scrl_group: selectedItem?.scrl_group || "",
         scrl_name: selectedItem?.scrl_name || "",
         scrl_code: selectedItem?.scrl_code || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updatePoplists({
           ...tenantIDHeader(),
          id: selectedItem.id,
          poplistsUpdate: values
        }).unwrap();
        toast.success(`Pop Lists updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Pop Lists');
      }
    } else {
      try {
        await createPoplists({
           ...tenantIDHeader(),
          poplistsInsert: values
        }).unwrap();
        toast.success(`Pop Lists created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Pop Lists');
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
                                name="scrl_group"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Scrl Group</FormLabel>
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
                                name="scrl_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Scrl Name</FormLabel>
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
                                name="scrl_code"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Scrl Code</FormLabel>
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