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
  useCreateSaasChatsSaasChatsPostMutation,
  useGetAllSaasChatssSaasChatsGetQuery,
  useUpdateSaasChatsSaasChatsIdPutMutation,
  useDeleteSaasChatsSaasChatsIdDeleteMutation,
  useGetSaasChatsSaasChatsIdGetQuery,
  useGetAllSaasChatsEventGetQuery,
  useCreateSaasChatsSaasChatsEventPostMutation,
  useUpdateSaasChatsSaasChatsEventIdPutMutation,
  useDeleteSaasChatsSaasChatsEventIdDeleteMutation,
  useGetSaasChatsSaasChatsEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  thread: z.number().min(1, {
    message: 'Thread is required'
  }),
  user_id: z.string(),
  receiver_id: z.string(),
  chat_group_id: z.number().min(1, {
    message: 'Chat Group Id is required'
  }),
  group_receiver_id: z.string().nonempty({
    message: 'Group Receiver Id is required'
  }),
  message: z.string().nonempty({
    message: 'Message is required'
  }),
  attachment: z.string().nonempty({
    message: 'Attachment is required'
  }),
  extension: z.string().nonempty({
    message: 'Extension is required'
  }),
  ip: z.string().nonempty({
    message: 'Ip is required'
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

export default function ChatsForm({
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
  const [createSaasChats] = useCreateSaasChatsSaasChatsPostMutation();
  const [updateSaasChats] = useUpdateSaasChatsSaasChatsIdPutMutation();

  //make changes for dropdown field options

  //FIXME Default values to Templatize this
  const defaultValues = {
    thread: selectedItem?.thread || 0,
    user_id: selectedItem?.user_id || '',
    receiver_id: selectedItem?.receiver_id || '',
    chat_group_id: selectedItem?.chat_group_id || 0,
    group_receiver_id: selectedItem?.group_receiver_id || '',
    message: selectedItem?.message || '',
    attachment: selectedItem?.attachment || '',
    extension: selectedItem?.extension || '',
    ip: selectedItem?.ip || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSaasChats({
          ...tenantIDHeader(),
          id: selectedItem.id,
          saasChatsUpdate: values
        }).unwrap();
        toast.success(`Chats updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Chats');
      }
    } else {
      try {
        await createSaasChats({
          ...tenantIDHeader(),
          saasChatsInsert: values
        }).unwrap();
        toast.success(`Chats created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Chats');
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
                  name='thread'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Thread</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='user_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Id</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='receiver_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Receiver Id</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='chat_group_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chat Group Id</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='group_receiver_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Group Receiver Id</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='attachment'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Attachment</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='extension'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Extension</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='ip'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ip</FormLabel>
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
