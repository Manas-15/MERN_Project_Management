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
    useCreateTrnTicketTrnTicketPostMutation, 
    useGetAllTrnTicketsTrnTicketGetQuery, 
    useUpdateTrnTicketTrnTicketIdPutMutation, 
    useDeleteTrnTicketTrnTicketIdDeleteMutation, 
    useGetTrnTicketTrnTicketIdGetQuery, 
    useGetAllTrnTicketEventGetQuery, 
    useCreateTrnTicketTrnTicketEventPostMutation, 
    useUpdateTrnTicketTrnTicketEventIdPutMutation, 
    useDeleteTrnTicketTrnTicketEventIdDeleteMutation, 
    useGetTrnTicketTrnTicketEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

import {
          useGetAllResAssetsResAssetGetQuery,
          useGetAllSetSiteGroupingsSetSiteGroupingGetQuery,
} from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
            trn_fnyr: z.number().min(1, {
              message: 'Transaction Fnyr is required'
            }),
            trn_number: z.string().nonempty({
              message: 'Transaction Number is required'
            }),
            trn_date: z.string(),
            cost_centre: z.number().min(1, {
              message: 'Cost Centre is required'
            }),
            cost_centre_name: z.string().nonempty({
              message: 'Cost Centre Name is required'
            }),
            header: z.string().nonempty({
              message: 'Header is required'
            }),
            ticket_type: z.number().min(1, {
              message: 'Ticket Type is required'
            }),
            ticket_type_name: z.string().nonempty({
              message: 'Ticket Type Name is required'
            }),
            ticket_for: z.string().nonempty({
              message: 'Ticket For is required'
            }),
            site_id: z.number().min(1, {
              message: 'Site Id is required'
            }),
            site_name: z.string().nonempty({
              message: 'Site Name is required'
            }),
            site_user_id: z.number().min(1, {
              message: 'Site User Id is required'
            }),
            site_user_name: z.string().nonempty({
              message: 'Site User Name is required'
            }),
            last_updated: z.string(),
            ticket_status: z.string().nonempty({
              message: 'Ticket Status is required'
            }),
            status_id: z.number().min(1, {
              message: 'Status Id is required'
            }),
            status_name: z.string().nonempty({
              message: 'Status Name is required'
            }),
            estimate_days: z.number().min(1, {
              message: 'Estimate Days is required'
            }),
            remarks: z.string().nonempty({
              message: 'Remarks is required'
            }),
            failure_start_time: z.string().nonempty({
              message: 'Failure Start Time is required'
            }),
            failure_closing_time: z.string().nonempty({
              message: 'Failure Closing Time is required'
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

  //file_id: z.array(z.number()).optional(), // Optional array of file_ids

export default function TicketsInlineForm({
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

const [createTrnTicket] = useCreateTrnTicketTrnTicketPostMutation();
const [updateTrnTicket] = useUpdateTrnTicketTrnTicketIdPutMutation();

//make changes for dropdown field options
        const {
          data: fetchedResAssetData,
          refetch: refetchResAssetList
        } = useGetAllResAssetsResAssetGetQuery(
          {
            ...tenantIDHeader()
          },
          {
            refetchOnMountOrArgChange: true
          }
        );
        const {
          data: fetchedSetSiteGroupingData,
          refetch: refetchSetSiteGroupingList
        } = useGetAllSetSiteGroupingsSetSiteGroupingGetQuery(
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
         trn_number: selectedItem?.trn_number || "",
         trn_date: selectedItem?.trn_date || "",
         cost_centre: selectedItem?.cost_centre || 0,
         cost_centre_name: selectedItem?.cost_centre_name || "",
         header: selectedItem?.header || "",
         ticket_type: selectedItem?.ticket_type || 0,
         ticket_type_name: selectedItem?.ticket_type_name || "",
         ticket_for: selectedItem?.ticket_for || "",
         site_id: selectedItem?.site_id || 0,
         site_name: selectedItem?.site_name || "",
         site_user_id: selectedItem?.site_user_id || 0,
         site_user_name: selectedItem?.site_user_name || "",
         last_updated: selectedItem?.last_updated || "",
         ticket_status: selectedItem?.ticket_status || "",
         status_id: selectedItem?.status_id || 0,
         status_name: selectedItem?.status_name || "",
         estimate_days: selectedItem?.estimate_days || 0,
         remarks: selectedItem?.remarks || "",
         failure_start_time: selectedItem?.failure_start_time || null,
         failure_closing_time: selectedItem?.failure_closing_time || null,
         create_by: selectedItem?.create_by || "",
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateTrnTicket({
           ...tenantIDHeader(),
          id: selectedItem.id,
          trnTicketUpdate: values
        }).unwrap();
        toast.success(`Tickets updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Tickets');
      }
    } else {
      try {
        await createTrnTicket({
           ...tenantIDHeader(),
          trnTicketInsert: values
        }).unwrap();
        toast.success(`Tickets created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Tickets');
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
                                name="trn_fnyr"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Transaction Fnyr</FormLabel>
                                    <div className='flex w-[85%] flex-col'>
                                      <FormControl>
                                        <Input type='number' {...field} />
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
                                name="trn_number"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Transaction Number</FormLabel>
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
                                <CustomDatePicker
                                  control={form.control}
                                  name='trn_date'
                                  label='Transaction Date'
                                  isRequired={false}
                                  viewType='inline'
                                />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <Controller
                                control={form.control}
                                name="cost_centre"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Cost Centre</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="cost_centre"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedResAssetData?.map((item:any) => ({
                                            label: item.asset_type_name || "",
                                            value: item.id || "",
                                          })) || selectFieldOptions || []
                                      }
                                    />
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="cost_centre_name"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Cost Centre Name</FormLabel>
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
                                name="header"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Header</FormLabel>
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
                                name="ticket_type"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Ticket Type</FormLabel>
                                    <div className='flex w-[85%] flex-col'>
                                      <FormControl>
                                        <Input type='number' {...field} />
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
                                name="ticket_type_name"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Ticket Type Name</FormLabel>
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
                                name="ticket_for"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Ticket For</FormLabel>
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
                              <Controller
                                control={form.control}
                                name="site_id"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Site Id</FormLabel>
                                    <MultiSelectSearchDropdown
                                      {...field} // Spread the form field props
                                      keyName="site_id"
                                      isSearchable={true}
                                      multiSelect={false}
                                      placeholder='Select...'
                                      control={form.control} // Control passed from react-hook-form
                                      options={
                                         fetchedSetSiteGroupingData?.map((item:any) => ({
                                            label: item.group_name || "",
                                            value: item.id || "",
                                          })) || selectFieldOptions || []
                                      }
                                    />
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="site_name"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Site Name</FormLabel>
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
                                name="site_user_id"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Site User Id</FormLabel>
                                    <div className='flex w-[85%] flex-col'>
                                      <FormControl>
                                        <Input type='number' {...field} />
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
                                name="site_user_name"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Site User Name</FormLabel>
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
                                <CustomDatePicker
                                  control={form.control}
                                  name='last_updated'
                                  label='Last Updated'
                                  isRequired={false}
                                  viewType='inline'
                                />
                          </div>
                          <div className="mb-6 grid grid-cols-1 gap-6">
                              <FormField
                                control={form.control}
                                name="ticket_status"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Ticket Status</FormLabel>
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
                                name="status_id"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Status Id</FormLabel>
                                    <div className='flex w-[85%] flex-col'>
                                      <FormControl>
                                        <Input type='number' {...field} />
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
                                name="status_name"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Status Name</FormLabel>
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
                                name="estimate_days"
                                render={({ field }) => (
                                 <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Estimate Days</FormLabel>
                                    <div className='flex w-[85%] flex-col'>
                                      <FormControl>
                                        <Input type='number' {...field} />
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
                                name="remarks"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Remarks</FormLabel>
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
                                name="failure_start_time"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Failure Start Time</FormLabel>
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
                                name="failure_closing_time"
                                render={({ field }) => (
                                  <FormItem viewType='inline' className='flex items-center'>
                                    <FormLabel className='w-[15%]'>Failure Closing Time</FormLabel>
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