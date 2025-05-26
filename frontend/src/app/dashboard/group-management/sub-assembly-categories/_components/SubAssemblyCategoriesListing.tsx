'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  type MRT_PaginationState,
  MRT_ColumnFiltersState
} from 'material-react-table';
import { toast } from 'sonner';
import { Modal } from '@/components/ui/modal';
import { AlertModal } from '@/components/modal/alert-modal';
import { useRouter, useSearchParams } from 'next/navigation';
import { VisibilityOutlined, Delete } from '@mui/icons-material';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';
import { ErrorBoundary } from 'react-error-boundary';
import { tenantIDHeader } from '@/libs/authHeader';
import { useTranslation } from 'react-i18next';
// import { serialize } from '@/libs/searchparams';
import {
  customPagination,
  capitalize,
  ellipsis,
  getFilterValue
} from '@/common/utills/utilities';
import moment from 'moment';
import { Pencil, Trash2 } from 'lucide-react';
import MuiTanstackTable from '@/components/muiTable/TanstackTable';
import SubAssemblyCategoriesForm from './SubAssemblyCategoriesForm';
import SubAssemblyCategoriesInlineForm from './SubAssemblyCategoriesInlineForm';
import SubAssemblyCategoriesGridForm from './SubAssemblyCategoriesGridForm';
import SubAssemblyCategoriesGlobalForm from './SubAssemblyCategoriesGlobalForm';
import {
  useCreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPostMutation,
  useGetAllSetAstSubAssemblyCategorysSetAstSubAssemblyCategoryGetQuery,
  useUpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdPutMutation,
  useDeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteMutation,
  useGetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGetQuery,
  useGetAllSetAstSubAssemblyCategoryEventGetQuery,
  useCreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventPostMutation,
  useUpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdPutMutation,
  useDeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdDeleteMutation,
  useGetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdGetQuery
} from '@/redux/store/generatedServices/assetApi';

const SubAssemblyCategoriesListing: React.FC<{
  isCreatePopupOpen: boolean;
  setIsCreatePopupOpen: (isOpen: boolean) => void;
  formType: string;
  setFormType: (value: string) => void;
}> = ({
  isCreatePopupOpen,
  setIsCreatePopupOpen,
  formType = '',
  setFormType
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  // const key = serialize(Object.fromEntries(searchParams.entries()));
  const [isDataReady, setIsDataReady] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [rowCount, setRowCount] = useState(0);
  const [orderBy, setOrderBy] = useState('-id');
  const [pagination, setPagination] =
    useState<MRT_PaginationState>(customPagination);
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = useState<any>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});
  //keep track of rows that have been edited
  //const [editedUsers, setEditedUsers] = useState({});

  //FIXME
  const [updateSetAstSubAssemblyCategory] =
    useUpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdPutMutation();
  const [deleteSetAstSubAssemblyCategory] =
    useDeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteMutation();

  useEffect(() => {
    if (sorting?.length > 0) {
      setOrderBy(`${sorting[0]?.desc ? '-' : ''}${sorting[0]?.id}`);
    }
  }, [sorting]);

  const {
    data: fetchedSetAstSubAssemblyCategoryData,
    isError: isLoadingError,
    isFetching: isFetchingData,
    isLoading: isLoadingData,
    refetch: refetchSetAstSubAssemblyCategoryList
  } = useGetAllSetAstSubAssemblyCategorysSetAstSubAssemblyCategoryGetQuery(
    {
      ...tenantIDHeader()
      //orderBy: orderBy,
      //page: pagination.pageIndex + 1,
      //size: pagination.pageSize,
      //getAll: false,
      //add your code for filter functionality
    },
    {
      refetchOnMountOrArgChange: true
    }
  );

  useEffect(() => {
    if (
      !isLoadingData &&
      !isLoadingError &&
      fetchedSetAstSubAssemblyCategoryData
    ) {
      setIsDataReady(true);
      setRowCount(fetchedSetAstSubAssemblyCategoryData.meta?.total_items);
    }
  }, [fetchedSetAstSubAssemblyCategoryData, isLoadingData, isLoadingError]);

  //Info: The following data is used for the columns
  const columns = useMemo<any>(
    () => [
      {
        accessorKey: 'category_name',
        header: `Category Name`,
        size: 150,
        enableSorting: true,
        enableColumnFilter: false,
        enableEditing: true,
        enableResizing: true,
        enableHiding: true,
        enablePinning: true,
        enableGrouping: false,
        Cell: ({ cell, row }: any) => {
          const value = cell.getValue();
          return (
            <div className='flex items-center'>
              <div
                className='group relative flex max-w-[220px] cursor-pointer items-center truncate hover:text-blue-500'
                onClick={() =>
                  router.push(
                    `/dashboard/group-management/sub-assembly-categories/${row.original.id}`
                  )
                }
              >
                <div className='truncate' title={value}>
                  {value ? ellipsis(value, '150') : '-'}
                </div>
              </div>
            </div>
          );
        },
        muiEditTextFieldProps: ({ cell, row }: any) =>
          createEditTextFieldProps(cell, row)
      },
      {
        accessorKey: 'create_by',
        header: `Create By`,
        size: 150,
        enableSorting: true,
        enableColumnFilter: false,
        enableEditing: true,
        enableResizing: true,
        enableHiding: true,
        enablePinning: true,
        enableGrouping: false,
        Cell: ({ cell, row }: any) => {
          const value = cell.getValue();
          return <div className='flex items-center'>{value ? value : '-'}</div>;
        },
        muiEditTextFieldProps: ({ cell, row }: any) =>
          createEditTextFieldProps(cell, row)
      }
    ],
    []
  );

  const kababMenuOptions = [
    {
      label: 'View',
      icon: VisibilityOutlined,
      size: 20,
      onClick: (row: any) =>
        router.push(
          `/dashboard/group-management/sub-assembly-categories/${row.original.id}`
        )
    },
    {
      label: 'Edit',
      icon: Pencil,
      size: 20,
      onClick: (row: any) => {
        setFormType('Edit');
        setSelectedItem(row.original);
        setIsCreatePopupOpen(true);
      }
    },
    {
      label: 'Delete',
      icon: Delete,
      size: 20,
      onClick: (row: any) => {
        setSelectedItem(row.original);
        setIsDeletePopupOpen(true);
      }
    }
  ];

  const onConfirm = async () => {
    //FIXME
    try {
      if (selectedItem?.id) {
        await deleteSetAstSubAssemblyCategory({
          ...tenantIDHeader(),
          id: selectedItem.id
        });
        setIsDeletePopupOpen(false);
        toast.success('Sub Assembly Categories deleted successfully');
        refetchSetAstSubAssemblyCategoryList(); // Call refetch here
        setSelectedItem(null);
      } else {
        throw new Error('Selected Sub Assembly Categories ID is undefined');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const inlineEditApi = async (inpdata: any) => {
    //FIXME
    try {
      if (!inpdata?.id) throw new Error('Selected item ID is undefined');
      await updateSetAstSubAssemblyCategory({
        ...tenantIDHeader(),
        id: inpdata.id,
        setAstSubAssemblyCategoryUpdate: inpdata
      }).unwrap();

      toast.success('Sub Assembly Categories updated successfully');
      refetchSetAstSubAssemblyCategoryList();
    } catch (error) {
      toast.error('Failed to update Sub Assembly Categories');
    }
  };

  const createEditTextFieldProps = (cell: any, row: any) => ({
    type: 'text',
    required: true,
    error: !!validationErrors?.[cell.id],
    helperText: validationErrors?.[cell.id],
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      const columnId = cell.column.id;

      if (newValue !== row.original[columnId]) {
        inlineEditApi({
          id: row.original.id,
          [columnId]: newValue
        });
      }
    }
  });

  return (
    <>
      {isCreatePopupOpen && (
        <Modal
          title={
            selectedItem
              ? 'Edit Sub Assembly Categories'
              : 'Create Sub Assembly Categories'
          }
          description=''
          isOpen={isCreatePopupOpen}
          onClose={() => setIsCreatePopupOpen(false)}
          className={`max-w-[1200px]`}
        >
          <SubAssemblyCategoriesGridForm
            setOpen={setIsCreatePopupOpen}
            refetchList={refetchSetAstSubAssemblyCategoryList}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            formType={formType}
          />
        </Modal>
      )}

      <AlertModal
        isOpen={isDeletePopupOpen}
        onClose={() => setIsDeletePopupOpen(false)}
        onConfirm={onConfirm}
        loading={false}
        message={`Are you sure you want to remove this SubAssemblyCategories ?`}
        //fix here for dynamic name
      />

      <ErrorBoundary fallback={<div>Error loading data!</div>}>
        {isDataReady ? (
          <MuiTanstackTable
            tableTitle=''
            columns={columns}
            importedData={fetchedSetAstSubAssemblyCategoryData ?? []}
            rowCount={rowCount}
            pagination={pagination}
            setPagination={setPagination}
            sorting={sorting}
            setSorting={setSorting}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
            enableGlobalFilter={false}
            enableColumnFilters={false}
            enableEditing={false}
            isLoadingData={isLoadingData}
            isFetchingData={isFetchingData}
            isLoadingError={isLoadingError}
            enableRowActions={true}
            menuOptions={kababMenuOptions}
            enableColumnResizing={false}
            globalSearchPlaceholder='Search by Name'
          />
        ) : (
          <DataTableSkeleton columnCount={5} rowCount={10} />
        )}
      </ErrorBoundary>
    </>
  );
};
export default SubAssemblyCategoriesListing;
