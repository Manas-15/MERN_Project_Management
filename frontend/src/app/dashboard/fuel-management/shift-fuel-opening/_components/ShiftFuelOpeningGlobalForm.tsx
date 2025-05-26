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
  useCreateTrnShiftFuelOpeningTrnShiftFuelOpeningPostMutation,
  useGetAllTrnShiftFuelOpeningsTrnShiftFuelOpeningGetQuery,
  useUpdateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPutMutation,
  useDeleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDeleteMutation,
  useGetTrnShiftFuelOpeningTrnShiftFuelOpeningIdGetQuery,
  useGetAllTrnShiftFuelOpeningEventGetQuery,
  useCreateTrnShiftFuelOpeningTrnShiftFuelOpeningEventPostMutation,
  useUpdateTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdPutMutation,
  useDeleteTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdDeleteMutation,
  useGetTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  trn_fnyr: z.number().min(1, {
    message: 'Transaction Fnyr is required'
  }),
  trn_number: z.number().min(1, {
    message: 'Transaction Number is required'
  }),
  trn_date: z.string(),
  asset_id: z.number().min(1, {
    message: 'Asset Id is required'
  }),
  asset_name: z.string().nonempty({
    message: 'Asset Name is required'
  }),
  site_id: z.number().min(1, {
    message: 'Site Id is required'
  }),
  roster_id: z.number().min(1, {
    message: 'Roster Id is required'
  }),
  previous_opening_balance: z.number().min(1, {
    message: 'Previous Opening Balance is required'
  }),
  opening_balance: z.number().min(1, {
    message: 'Opening Balance is required'
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

export default function ShiftFuelOpeningGlobalForm({
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
  const [createTrnShiftFuelOpening] =
    useCreateTrnShiftFuelOpeningTrnShiftFuelOpeningPostMutation();
  const [updateTrnShiftFuelOpening] =
    useUpdateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPutMutation();

  //make changes for dropdown field options

  //FIXME Default values to Templatize this
  const defaultValues = {
    trn_fnyr: selectedItem?.trn_fnyr || 0,
    trn_number: selectedItem?.trn_number || 0,
    trn_date: selectedItem?.trn_date || '',
    asset_id: selectedItem?.asset_id || 0,
    asset_name: selectedItem?.asset_name || '',
    site_id: selectedItem?.site_id || 0,
    roster_id: selectedItem?.roster_id || 0,
    previous_opening_balance: selectedItem?.previous_opening_balance || '',
    opening_balance: selectedItem?.opening_balance || '',
    create_by: selectedItem?.create_by || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnShiftFuelOpening({
          ...tenantIDHeader(),
          id: selectedItem.id,
          trnShiftFuelOpeningUpdate: values
        }).unwrap();
        toast.success(`Shift Fuel Opening updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Shift Fuel Opening');
      }
    } else {
      try {
        await createTrnShiftFuelOpening({
          ...tenantIDHeader(),
          trnShiftFuelOpeningInsert: values
        }).unwrap();
        toast.success(`Shift Fuel Opening created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Shift Fuel Opening');
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
                  name='trn_fnyr'
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
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='trn_number'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Transaction Number</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <CustomDatePicker
                  control={form.control}
                  name='trn_date'
                  label='Transaction Date'
                  isRequired={false}
                  viewType='grid'
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='asset_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asset Id</FormLabel>
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
                  name='asset_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asset Name</FormLabel>
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
                  name='site_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site Id</FormLabel>
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
                  name='roster_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roster Id</FormLabel>
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
                  name='previous_opening_balance'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Previous Opening Balance</FormLabel>
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
                  name='opening_balance'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Opening Balance</FormLabel>
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
