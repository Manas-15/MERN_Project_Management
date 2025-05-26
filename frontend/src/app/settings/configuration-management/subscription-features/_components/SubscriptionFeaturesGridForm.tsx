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
  useCreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesPostMutation,
  useGetAllSaasRefSubscriptionFeaturessSaasRefSubscriptionFeaturesGetQuery,
  useUpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdPutMutation,
  useDeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdDeleteMutation,
  useGetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdGetQuery,
  useGetAllSaasRefSubscriptionFeaturesEventGetQuery,
  useCreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventPostMutation,
  useUpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdPutMutation,
  useDeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdDeleteMutation,
  useGetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

// import { useGetAllSaasRefSubscriptionssSaasRefSubscriptionsGetQuery } from '@/redux/store/generatedServices/assetApi';

//FIXME validation schema to Templatize this
const formSchema = z.object({
  subscription_id: z.number().min(1, {
    message: 'Subscription Id is required'
  }),
  feature_id: z.number().min(1, {
    message: 'Feature Id is required'
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

export default function SubscriptionFeaturesGridForm({
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
  const [createSaasRefSubscriptionFeatures] =
    useCreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesPostMutation();
  const [updateSaasRefSubscriptionFeatures] =
    useUpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdPutMutation();

  //make changes for dropdown field options
  // const {
  //   data: fetchedSaasRefSubscriptionsData,
  //   refetch: refetchSaasRefSubscriptionsList
  // } = useGetAllSaasRefSubscriptionssSaasRefSubscriptionsGetQuery(
  //   {
  //     ...tenantIDHeader()
  //   },
  //   {
  //     refetchOnMountOrArgChange: true
  //   }
  // );

  //FIXME Default values to Templatize this
  const defaultValues = {
    subscription_id: selectedItem?.subscription_id || 0,
    feature_id: selectedItem?.feature_id || 0
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedItem) {
      try {
        await updateSaasRefSubscriptionFeatures({
          ...tenantIDHeader(),
          id: selectedItem.id,
          saasRefSubscriptionFeaturesUpdate: values
        }).unwrap();
        toast.success(`Subscription Features updated successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to update Subscription Features');
      }
    } else {
      try {
        await createSaasRefSubscriptionFeatures({
          ...tenantIDHeader(),
          saasRefSubscriptionFeaturesInsert: values
        }).unwrap();
        toast.success(`Subscription Features created successfully`);
        afterSubmit();
      } catch (error) {
        toast.error('Failed to create Subscription Features');
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
                  name='subscription_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subscription Id</FormLabel>
                      <MultiSelectSearchDropdown
                        {...field} // Spread the form field props
                        keyName='subscription_id'
                        isSearchable={true}
                        multiSelect={false}
                        placeholder='Select...'
                        control={form.control} // Control passed from react-hook-form
                        options={
                          // fetchedSaasRefSubscriptionsData?.map((item: any) => ({
                          //   label: item.subscription_name || '',
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
                  name='feature_id'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Feature Id</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
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
