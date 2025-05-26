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
  useCreateTeamsPostMutation,
  useGetAllTeamTeamsGetQuery,
  useGetTeamsIdGetQuery,
  useUpdateTeamsIdPutMutation,
  useDeleteTeamsIdDeleteMutation
} from '@/redux/store/generatedServices/assetApi';

// import { useGetAllSaasOrganizationssSaasOrganizationsGetQuery } from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  organization_id: z.number().min(1, {
    message: 'Organization Id is required'
  }),
  parent_id: z.number().min(1, {
    message: 'Parent Id is required'
  }),
  team_name: z.string().nonempty({
    message: 'Team Name is required'
  }),
  status: z.string().nonempty({
    message: 'Status is required'
  }),
  effective_start_date: z.string().nonempty({
    message: 'Effective Start Date is required'
  }),
  effective_end_date: z.string().nonempty({
    message: 'Effective End Date is required'
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

export default function TeamsGridForm({
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
  const [createSaasTeams] = useCreateTeamsPostMutation();
  const [updateSaasTeams] = useUpdateTeamsIdPutMutation();

  //make changes for dropdown field options
  const {
    data: fetchedSaasOrganizationsData,
    refetch: refetchSaasOrganizationsList
  } = useGetAllTeamTeamsGetQuery(
    {
      ...tenantIDHeader()
    },
    {
      refetchOnMountOrArgChange: true
    }
  );

  //FIXME Default values to Templatize this
  const defaultValues = {
    organization_id: selectedItem?.organization_id || 0,
    parent_id: selectedItem?.parent_id || 0,
    team_name: selectedItem?.team_name || '',
    status: selectedItem?.status || '',
    effective_start_date: selectedItem?.effective_start_date || null,
    effective_end_date: selectedItem?.effective_end_date || null
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSaasTeams({
          ...tenantIDHeader(),
          id: selectedItem.id,
          teamBaseUpdate: values
        }).unwrap();
        toast.success(`Teams updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Teams');
      }
    } else {
      try {
        await createSaasTeams({
          ...tenantIDHeader(),
          teamBaseCreate: values
        }).unwrap();
        toast.success(`Teams created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Teams');
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
                <Controller
                  control={form.control}
                  name='organization_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='organization_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          // fetchedSaasOrganizationsData?.map((item: any) => ({
                          //   label: item.organization_name || '',
                          //   value: item.id || ''
                          // })) ||
                          selectFieldOptions || []
                        }
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='parent_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent Id</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='team_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team Name</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Controller
                  control={form.control}
                  name='status'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='status'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          [
                            { label: 'Active', value: 'active' },
                            { label: 'In Active', value: 'in_active' },
                            { label: 'Pending', value: 'pending' },
                            { label: 'Completed', value: 'completed' }
                          ]?.map((item: any) => ({
                            label: item.label,
                            value: item.value
                          })) || []
                        }
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='effective_start_date'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Effective Start Date</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='effective_end_date'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Effective End Date</FormLabel>
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
