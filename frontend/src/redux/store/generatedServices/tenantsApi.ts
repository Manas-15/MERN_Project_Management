import { tenantsBaseApi as api } from '../base/tenantsBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    groupUpdateTenantsGroupUpdatePost: build.mutation<
      GroupUpdateTenantsGroupUpdatePostApiResponse,
      GroupUpdateTenantsGroupUpdatePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/tenants/group_update`,
        method: 'POST',
        body: queryArg.tenantUserMultiSelect,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          action: queryArg.action
        }
      })
    }),
    getTenantUsersTenantsIdUsersGet: build.query<
      GetTenantUsersTenantsIdUsersGetApiResponse,
      GetTenantUsersTenantsIdUsersGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/tenants/${queryArg.id}/users`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          tenant_id: queryArg.tenantId,
          tenant_id__in: queryArg.tenantIdIn,
          user_id: queryArg.userId,
          user_id__in: queryArg.userIdIn,
          status: queryArg.status,
          status__in: queryArg.statusIn,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    updateTenantUserTenantsIdUsersUserIdPatch: build.mutation<
      UpdateTenantUserTenantsIdUsersUserIdPatchApiResponse,
      UpdateTenantUserTenantsIdUsersUserIdPatchApiArg
    >({
      query: (queryArg: any) => ({
        url: `/tenants/${queryArg.id}/users/${queryArg.userId}`,
        method: 'PATCH',
        body: queryArg.tenantUserBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTenantSubscriptionTenantsSubscriptionGet: build.query<
      GetTenantSubscriptionTenantsSubscriptionGetApiResponse,
      GetTenantSubscriptionTenantsSubscriptionGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/tenants/subscription`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    generateApiKeyTenantsApiKeyPost: build.mutation<
      GenerateApiKeyTenantsApiKeyPostApiResponse,
      GenerateApiKeyTenantsApiKeyPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/tenants/api_key`,
        method: 'POST',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          tenant_id: queryArg.tenantId
        }
      })
    }),
    getApiKeyTenantsViewApiKeyGet: build.query<
      GetApiKeyTenantsViewApiKeyGetApiResponse,
      GetApiKeyTenantsViewApiKeyGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/tenants/view_api_key`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          tenant_id: queryArg.tenantId
        }
      })
    })
  }),
  overrideExisting: false
});
export { injectedRtkApi as tenantsApi };
export type GroupUpdateTenantsGroupUpdatePostApiResponse =
  /** status 200 Successful Response */ any;
export type GroupUpdateTenantsGroupUpdatePostApiArg = {
  action: TenantUserActionEnum;
  'x-tenant-id': number;
  tenantUserMultiSelect: TenantUserMultiSelect;
};
export type GetTenantUsersTenantsIdUsersGetApiResponse =
  /** status 200 Successful Response */ PaginatedTenantTenantMemberBaseResponse;
export type GetTenantUsersTenantsIdUsersGetApiArg = {
  id: number;
  orderBy?: string | null;
  tenantId?: number | null;
  tenantIdIn?: string | null;
  userId?: number | null;
  userIdIn?: string | null;
  status?: number | null;
  statusIn?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type UpdateTenantUserTenantsIdUsersUserIdPatchApiResponse =
  /** status 200 Successful Response */ TenantMemberBaseResponse;
export type UpdateTenantUserTenantsIdUsersUserIdPatchApiArg = {
  id: number;
  userId: string;
  'x-tenant-id': number;
  tenantUserBaseUpdate: TenantUserBaseUpdate;
};
export type GetTenantSubscriptionTenantsSubscriptionGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTenantSubscriptionTenantsSubscriptionGetApiArg = {
  'x-tenant-id': number;
};
export type GenerateApiKeyTenantsApiKeyPostApiResponse =
  /** status 200 Successful Response */ TenantOverviewResponse;
export type GenerateApiKeyTenantsApiKeyPostApiArg = {
  tenantId: number;
  'x-tenant-id': number;
};
export type GetApiKeyTenantsViewApiKeyGetApiResponse =
  /** status 200 Successful Response */ TenantApiKeyResponse;
export type GetApiKeyTenantsViewApiKeyGetApiArg = {
  tenantId: number;
  'x-tenant-id': number;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type TenantUserActionEnum = 'status' | 'assign_project' | 'is_approver';
export type TenantUserStatusEnum = 'active' | 'inactive';
export type TenantUserMultiSelect = {
  user_ids: string[];
  project_id?: number | null;
  status?: TenantUserStatusEnum | null;
  is_approver?: number | null;
};
export type TenantMemberBaseResponse = {
  user_id?: string | null;
  resource_id?: number | null;
  file_id?: number | null;
  tenant_id?: number | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  status?: string | null;
  profile_image?: string | null;
  resource_name?: string | null;
  resource_type?: string | null;
  user_type?: string | null;
  approver_id?: number | null;
  is_approver?: number | null;
  visited_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: number | null;
  updated_by?: number | null;
};
export type PaginatedMeta = {
  current_page: number;
  items_per_page: number;
  total_pages: number;
  total_items: number;
};
export type PaginatedTenantTenantMemberBaseResponse = {
  items: TenantMemberBaseResponse[];
  meta: PaginatedMeta;
  tenant_id: number;
  tenant_name: string;
};
export type TenantUserTypeEnum =
  | 'admin'
  | 'owner'
  | 'auditor'
  | 'project_user'
  | 'project_admin'
  | 'client'
  | 'guest';
export type TenantUserBaseUpdate = {
  user_type?: TenantUserTypeEnum | null;
  status?: TenantUserStatusEnum | null;
};
export type TenantOverviewResponse = {
  id?: number | null;
  name?: string | null;
  website?: string | null;
  phone?: string | null;
  is_active?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_description?: string | null;
  currency_code?: string | null;
  api_key?: string | null;
};
export type TenantApiKeyResponse = {
  id?: number | null;
  name?: string | null;
  api_key?: string | null;
};
export const {
  useGroupUpdateTenantsGroupUpdatePostMutation,
  useGetTenantUsersTenantsIdUsersGetQuery,
  useUpdateTenantUserTenantsIdUsersUserIdPatchMutation,
  useGetTenantSubscriptionTenantsSubscriptionGetQuery,
  useGenerateApiKeyTenantsApiKeyPostMutation,
  useGetApiKeyTenantsViewApiKeyGetQuery
} = injectedRtkApi;
