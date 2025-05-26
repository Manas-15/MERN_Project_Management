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
    useCreateAssetServiceCheckListAssetServiceCheckListPostMutation, 
    useGetAllAssetServiceCheckListsAssetServiceCheckListGetQuery, 
    useUpdateAssetServiceCheckListAssetServiceCheckListIdPutMutation, 
    useDeleteAssetServiceCheckListAssetServiceCheckListIdDeleteMutation, 
    useGetAssetServiceCheckListAssetServiceCheckListIdGetQuery, 
    useGetAllAssetServiceCheckListEventGetQuery, 
    useCreateAssetServiceCheckListAssetServiceCheckListEventPostMutation, 
    useUpdateAssetServiceCheckListAssetServiceCheckListEventIdPutMutation, 
    useDeleteAssetServiceCheckListAssetServiceCheckListEventIdDeleteMutation, 
    useGetAssetServiceCheckListAssetServiceCheckListEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllAssetMatrixsAssetMatrixGetQuery,
          useGetAllAssetMatrixSectionsAssetMatrixSectionGetQuery,
          useGetAllAssetMatrixSubSectionsAssetMatrixSubSectionGetQuery,
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            assetmatrix_id: z.number().min(1, {
              message: 'Assetmatrix Id is required'
            }),
            matrix_id: z.string().nonempty({
              message: 'Matrix Id is required'
            }),
            checksheet_name: z.number().min(1, {
              message: 'Checksheet Name is required'
            }),
            section_id: z.number().min(1, {
              message: 'Section Id is required'
            }),
            section_name: z.string().nonempty({
              message: 'Section Name is required'
            }),
            sub_section_id: z.number().min(1, {
              message: 'Sub Section Id is required'
            }),
            sub_section_name: z.string().nonempty({
              message: 'Sub Section Name is required'
            }),
            tracking_status: z.boolean(),
            hour_meter_flag: z.boolean(),
            hour_meter: z.number().min(1, {
              message: 'Hour Meter is required'
            }),
            drum_hour_flag: z.boolean(),
            drum_hours: z.number().min(1, {
              message: 'Drum Hours is required'
            }),
            days_flag: z.boolean(),
            days: z.number().min(1, {
              message: 'Days is required'
            }),
            range_option: z.boolean(),
            range_start: z.number().min(1, {
              message: 'Range Start is required'
            }),
            range_end: z.number().min(1, {
              message: 'Range End is required'
            }),
            critical_level: z.string().nonempty({
              message: 'Critical Level is required'
            }),
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

export default function ServiceChecklistsGridForm({
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

 const [createAssetServiceCheckList] = useCreateAssetServiceCheckListAssetServiceCheckListPostMutation();
 const [updateAssetServiceCheckList] = useUpdateAssetServiceCheckListAssetServiceCheckListIdPutMutation();

//make changes for dropdown field options
        const {
          data: fetchedAssetMatrixData,
          refetch: refetchAssetMatrixList
        } = useGetAllAssetMatrixsAssetMatrixGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );
        const {
          data: fetchedAssetMatrixSectionData,
          refetch: refetchAssetMatrixSectionList
        } = useGetAllAssetMatrixSectionsAssetMatrixSectionGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );
        const {
          data: fetchedAssetMatrixSubSectionData,
          refetch: refetchAssetMatrixSubSectionList
        } = useGetAllAssetMatrixSubSectionsAssetMatrixSubSectionGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );

//FIXME Default values to Templatize this
const defaultValues = {
         assetmatrix_id: selectedItem?.assetmatrix_id || 0,
         matrix_id: selectedItem?.matrix_id || "",
         checksheet_name: selectedItem?.checksheet_name || 0,
         section_id: selectedItem?.section_id || 0,
         section_name: selectedItem?.section_name || "",
         sub_section_id: selectedItem?.sub_section_id || 0,
         sub_section_name: selectedItem?.sub_section_name || "",
         tracking_status: selectedItem?.tracking_status || false,
         hour_meter_flag: selectedItem?.hour_meter_flag || false,
         hour_meter: selectedItem?.hour_meter || 0,
         drum_hour_flag: selectedItem?.drum_hour_flag || false,
         drum_hours: selectedItem?.drum_hours || 0,
         days_flag: selectedItem?.days_flag || false,
         days: selectedItem?.days || 0,
         range_option: selectedItem?.range_option || false,
         range_start: selectedItem?.range_start || 0,
         range_end: selectedItem?.range_end || 0,
         critical_level: selectedItem?.critical_level || "",
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateAssetServiceCheckList({
           ...tenantIDHeader(),
          id: selectedItem.id,
          assetServiceCheckListUpdate: values
        }).unwrap();
        toast.success(`Service Checklists updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Service Checklists');
      }
    } else {
      try {
        await createAssetServiceCheckList({
           ...tenantIDHeader(),
          assetServiceCheckListInsert: values
        }).unwrap();
        toast.success(`Service Checklists created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Service Checklists');
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
                              <Controller
                                control={form.control}
                                name="assetmatrix_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Assetmatrix Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="assetmatrix_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedAssetMatrixData?.map((item:any) => ({
                                            label: item.asset_type_name || "",
                                            value: item.id || "",
                                          })) || selectFieldOptions || []
                                      }
                                    />
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="matrix_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Matrix Id</FormLabel>
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
                                name="checksheet_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Checksheet Name</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <Controller
                                control={form.control}
                                name="section_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Section Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="section_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedAssetMatrixSectionData?.map((item:any) => ({
                                            label: item.section_name || "",
                                            value: item.id || "",
                                          })) || selectFieldOptions || []
                                      }
                                    />
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="section_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Section Name</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <Controller
                                control={form.control}
                                name="sub_section_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Sub Section Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="sub_section_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedAssetMatrixSubSectionData?.map((item:any) => ({
                                            label: item.section_name || "",
                                            value: item.id || "",
                                          })) || selectFieldOptions || []
                                      }
                                    />
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="sub_section_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Sub Section Name</FormLabel>
                                    <FormControl>
                                      <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                                <FormField
                                  control={form.control}
                                  name="tracking_status"
                                  render={({ field }) => (
                                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                        <FormControl>
                                          <Checkbox
                                            checked={field?.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <div className='space-y-1 leading-none'>
                                          <FormLabel>Tracking Status</FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                                <FormField
                                  control={form.control}
                                  name="hour_meter_flag"
                                  render={({ field }) => (
                                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                        <FormControl>
                                          <Checkbox
                                            checked={field?.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <div className='space-y-1 leading-none'>
                                          <FormLabel>Hour Meter Flag</FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              <FormField
                                control={form.control}
                                name="hour_meter"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Hour Meter</FormLabel>
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
                                  name="drum_hour_flag"
                                  render={({ field }) => (
                                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                        <FormControl>
                                          <Checkbox
                                            checked={field?.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <div className='space-y-1 leading-none'>
                                          <FormLabel>Drum Hour Flag</FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              <FormField
                                control={form.control}
                                name="drum_hours"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Drum Hours</FormLabel>
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
                                  name="days_flag"
                                  render={({ field }) => (
                                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                        <FormControl>
                                          <Checkbox
                                            checked={field?.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <div className='space-y-1 leading-none'>
                                          <FormLabel>Days Flag</FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              <FormField
                                control={form.control}
                                name="days"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Days</FormLabel>
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
                                  name="range_option"
                                  render={({ field }) => (
                                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                        <FormControl>
                                          <Checkbox
                                            checked={field?.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <div className='space-y-1 leading-none'>
                                          <FormLabel>Range Option</FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              <FormField
                                control={form.control}
                                name="range_start"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Range Start</FormLabel>
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
                                name="range_end"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Range End</FormLabel>
                                    <FormControl>
                                      <Input type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="critical_level"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Critical Level</FormLabel>
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