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
  useCreateTrnProductivityTrnProductivityPostMutation,
  useGetAllTrnProductivitysTrnProductivityGetQuery,
  useUpdateTrnProductivityTrnProductivityIdPutMutation,
  useDeleteTrnProductivityTrnProductivityIdDeleteMutation,
  useGetTrnProductivityTrnProductivityIdGetQuery,
  useGetAllTrnProductivityEventGetQuery,
  useCreateTrnProductivityTrnProductivityEventPostMutation,
  useUpdateTrnProductivityTrnProductivityEventIdPutMutation,
  useDeleteTrnProductivityTrnProductivityEventIdDeleteMutation,
  useGetTrnProductivityTrnProductivityEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
  useGetAllResAssetsResAssetGetQuery,
  useGetAllRefWorkstationsRefWorkstationGetQuery,
  useGetAllSetAstActivityNamessSetAstActivityNamesGetQuery,
  useGetAllSetInvUomsSetInvUomGetQuery
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  trn_fnyr: z.number().min(1, {
    message: 'Transaction Fnyr is required'
  }),
  trn_number: z.number().min(1, {
    message: 'Transaction Number is required'
  }),
  trn_date: z.string(),
  roster_id: z.number().min(1, {
    message: 'Roster Id is required'
  }),
  asset_id: z.number().min(1, {
    message: 'Asset Id is required'
  }),
  asset_name: z.string().nonempty({
    message: 'Asset Name is required'
  }),
  site_id: z.number().min(1, {
    message: 'Site Id is required'
  }),
  workstation_id: z.number().min(1, {
    message: 'Workstation Id is required'
  }),
  workstation_name: z.string().nonempty({
    message: 'Workstation Name is required'
  }),
  activity_name_id: z.number().min(1, {
    message: 'Activity Name Id is required'
  }),
  activity_name: z.string().nonempty({
    message: 'Activity Name is required'
  }),
  net_productivity: z.number().min(1, {
    message: 'Net Productivity is required'
  }),
  productivity_unit: z.number().min(1, {
    message: 'Productivity Unit is required'
  }),
  no_of_trips: z.number().min(1, {
    message: 'No Of Trips is required'
  }),
  material_name_id: z.number().min(1, {
    message: 'Material Name Id is required'
  }),
  material_name: z.string().nonempty({
    message: 'Material Name is required'
  }),
  employee_id: z.number().min(1, {
    message: 'Employee Id is required'
  }),
  employee_name: z.string().nonempty({
    message: 'Employee Name is required'
  }),
  attachment: z.string().nonempty({
    message: 'Attachment is required'
  }),
  remarks: z.string().nonempty({
    message: 'Remarks is required'
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

export default function ProductivityGlobalForm({
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
  const [createTrnProductivity] =
    useCreateTrnProductivityTrnProductivityPostMutation();
  const [updateTrnProductivity] =
    useUpdateTrnProductivityTrnProductivityIdPutMutation();

  //make changes for dropdown field options
  const { data: fetchedResAssetData, refetch: refetchResAssetList } =
    useGetAllResAssetsResAssetGetQuery(
      {
        ...tenantIDHeader()
      },
      {
        refetchOnMountOrArgChange: true
      }
    );
  const {
    data: fetchedRefWorkstationData,
    refetch: refetchRefWorkstationList
  } = useGetAllRefWorkstationsRefWorkstationGetQuery(
    {
      ...tenantIDHeader()
    },
    {
      refetchOnMountOrArgChange: true
    }
  );
  const {
    data: fetchedSetAstActivityNamesData,
    refetch: refetchSetAstActivityNamesList
  } = useGetAllSetAstActivityNamessSetAstActivityNamesGetQuery(
    {
      ...tenantIDHeader()
    },
    {
      refetchOnMountOrArgChange: true
    }
  );
  const { data: fetchedSetInvUomData, refetch: refetchSetInvUomList } =
    useGetAllSetInvUomsSetInvUomGetQuery(
      {
        ...tenantIDHeader()
      },
      {
        refetchOnMountOrArgChange: true
      }
    );

  //FIXME Default values to Templatize this
  const defaultValues = {
    trn_fnyr: selectedItem?.trn_fnyr || 0,
    trn_number: selectedItem?.trn_number || 0,
    trn_date: selectedItem?.trn_date || '',
    roster_id: selectedItem?.roster_id || 0,
    asset_id: selectedItem?.asset_id || 0,
    asset_name: selectedItem?.asset_name || '',
    site_id: selectedItem?.site_id || 0,
    workstation_id: selectedItem?.workstation_id || 0,
    workstation_name: selectedItem?.workstation_name || '',
    activity_name_id: selectedItem?.activity_name_id || 0,
    activity_name: selectedItem?.activity_name || '',
    net_productivity: selectedItem?.net_productivity || '',
    productivity_unit: selectedItem?.productivity_unit || 0,
    no_of_trips: selectedItem?.no_of_trips || 0,
    material_name_id: selectedItem?.material_name_id || 0,
    material_name: selectedItem?.material_name || '',
    employee_id: selectedItem?.employee_id || 0,
    employee_name: selectedItem?.employee_name || '',
    attachment: selectedItem?.attachment || '',
    remarks: selectedItem?.remarks || '',
    create_by: selectedItem?.create_by || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnProductivity({
          ...tenantIDHeader(),
          id: selectedItem.id,
          trnProductivityUpdate: values
        }).unwrap();
        toast.success(`Productivity updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Productivity');
      }
    } else {
      try {
        await createTrnProductivity({
          ...tenantIDHeader(),
          trnProductivityInsert: values
        }).unwrap();
        toast.success(`Productivity created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Productivity');
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
                <Controller
                  control={form.control}
                  name='asset_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asset Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='asset_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedResAssetData?.map((item: any) => ({
                            label: item.asset_type_name || '',
                            value: item.id || ''
                          })) ||
                          selectFieldOptions ||
                          []
                        }
                      />
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
                <Controller
                  control={form.control}
                  name='workstation_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Workstation Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='workstation_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedRefWorkstationData?.map((item: any) => ({
                            label: item.workstation_name || '',
                            value: item.id || ''
                          })) ||
                          selectFieldOptions ||
                          []
                        }
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='workstation_name'
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
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <Controller
                  control={form.control}
                  name='activity_name_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Activity Name Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='activity_name_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedSetAstActivityNamesData?.map((item: any) => ({
                            label: item.activity_name || '',
                            value: item.id || ''
                          })) ||
                          selectFieldOptions ||
                          []
                        }
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='activity_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Activity Name</FormLabel>
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
                  name='net_productivity'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Net Productivity</FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <Controller
                  control={form.control}
                  name='productivity_unit'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Productivity Unit</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='productivity_unit'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          fetchedSetInvUomData?.map((item: any) => ({
                            label: item.FIXME || '',
                            value: item.id || ''
                          })) ||
                          selectFieldOptions ||
                          []
                        }
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='mb-6 grid grid-cols-1 gap-6'>
                <FormField
                  control={form.control}
                  name='no_of_trips'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>No Of Trips</FormLabel>
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
                  name='material_name_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Material Name Id</FormLabel>
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
                  name='material_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Material Name</FormLabel>
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
                  name='employee_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employee Id</FormLabel>
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
                  name='employee_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employee Name</FormLabel>
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
                  name='remarks'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Remarks</FormLabel>
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
