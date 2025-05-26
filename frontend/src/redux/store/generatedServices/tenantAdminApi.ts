import { tenantAdminBaseApi as api } from '../base/tenantAdminBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllTenantTenantAdminGet: build.query<
      GetAllTenantTenantAdminGetApiResponse,
      GetAllTenantTenantAdminGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/tenant-admin/`,
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          name: queryArg.name,
          name__in: queryArg.nameIn,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getTenantAdminIdGet: build.query<
      GetTenantAdminIdGetApiResponse,
      GetTenantAdminIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/tenant-admin/${queryArg.id}` })
    }),
    updateTenantAdminIdPut: build.mutation<
      UpdateTenantAdminIdPutApiResponse,
      UpdateTenantAdminIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/tenant-admin/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.tenantBaseUpdate
      })
    })
  }),
  overrideExisting: false
});
export { injectedRtkApi as tenantAdminApi };
export type GetAllTenantTenantAdminGetApiResponse =
  /** status 200 Successful Response */ PaginatedTenantBaseResponse;
export type GetAllTenantTenantAdminGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  name?: string | null;
  nameIn?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
};
export type GetTenantAdminIdGetApiResponse =
  /** status 200 Successful Response */ TenantBaseResponse;
export type GetTenantAdminIdGetApiArg = {
  id: number;
};
export type UpdateTenantAdminIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTenantAdminIdPutApiArg = {
  id: number;
  tenantBaseUpdate: TenantBaseUpdate;
};
export type TenantBaseResponse = {
  id: number;
  name?: string | null;
  subscription_id?: string | null;
  website?: string | null;
  phone?: string | null;
  billing_address?: string | null;
  is_active?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_description?: string | null;
};
export type PaginatedMeta = {
  current_page: number;
  items_per_page: number;
  total_pages: number;
  total_items: number;
};
export type PaginatedTenantBaseResponse = {
  items: TenantBaseResponse[];
  meta: PaginatedMeta;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type TenantBaseUpdate = {
  name?: string | null;
  subscription_id?: string | null;
  website?: string | null;
  phone?: string | null;
  billing_address?: string | null;
  is_active?: number | null;
  tenant_description?: string | null;
};
export const {
  useGetAllTenantTenantAdminGetQuery,
  useGetTenantAdminIdGetQuery,
  useUpdateTenantAdminIdPutMutation
} = injectedRtkApi;
