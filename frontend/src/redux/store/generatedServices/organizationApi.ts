import { organizationBaseApi as api } from '../base/organizationBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createOrganizationsPost: build.mutation<
      CreateOrganizationsPostApiResponse,
      CreateOrganizationsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/organizations/`,
        method: 'POST',
        body: queryArg.organizationBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllOrganizationOrganizationsGet: build.query<
      GetAllOrganizationOrganizationsGetApiResponse,
      GetAllOrganizationOrganizationsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/organizations/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getOrganizationHirachyOrganizationsHirachyGet: build.query<
      GetOrganizationHirachyOrganizationsHirachyGetApiResponse,
      GetOrganizationHirachyOrganizationsHirachyGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/organizations/hirachy`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getOrganizationsIdGet: build.query<
      GetOrganizationsIdGetApiResponse,
      GetOrganizationsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/organizations/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateOrganizationsIdPut: build.mutation<
      UpdateOrganizationsIdPutApiResponse,
      UpdateOrganizationsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/organizations/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.organizationBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteOrganizationsIdDelete: build.mutation<
      DeleteOrganizationsIdDeleteApiResponse,
      DeleteOrganizationsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/organizations/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createOrganizationTypesPost: build.mutation<
      CreateOrganizationTypesPostApiResponse,
      CreateOrganizationTypesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/organization_types/`,
        method: 'POST',
        body: queryArg.organizationTypeBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllOrganizationTypeOrganizationTypesGet: build.query<
      GetAllOrganizationTypeOrganizationTypesGetApiResponse,
      GetAllOrganizationTypeOrganizationTypesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/organization_types/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getOrganizationTypesIdGet: build.query<
      GetOrganizationTypesIdGetApiResponse,
      GetOrganizationTypesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/organization_types/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateOrganizationTypesIdPut: build.mutation<
      UpdateOrganizationTypesIdPutApiResponse,
      UpdateOrganizationTypesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/organization_types/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.organizationTypeBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteOrganizationTypesIdDelete: build.mutation<
      DeleteOrganizationTypesIdDeleteApiResponse,
      DeleteOrganizationTypesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/organization_types/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    })
  }),
  overrideExisting: false
});
export { injectedRtkApi as organizationApi };
export type CreateOrganizationsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateOrganizationsPostApiArg = {
  'x-tenant-id': number;
  organizationBaseCreate: OrganizationBaseCreate;
};
export type GetAllOrganizationOrganizationsGetApiResponse =
  /** status 200 Successful Response */ PaginatedOrganizationBaseResponse;
export type GetAllOrganizationOrganizationsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetOrganizationHirachyOrganizationsHirachyGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetOrganizationHirachyOrganizationsHirachyGetApiArg = {
  'x-tenant-id': number;
};
export type GetOrganizationsIdGetApiResponse =
  /** status 200 Successful Response */ OrganizationBaseResponse;
export type GetOrganizationsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateOrganizationsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateOrganizationsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  organizationBaseUpdate: OrganizationBaseUpdate;
};
export type DeleteOrganizationsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteOrganizationsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateOrganizationTypesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateOrganizationTypesPostApiArg = {
  'x-tenant-id': number;
  organizationTypeBaseCreate: OrganizationTypeBaseCreate;
};
export type GetAllOrganizationTypeOrganizationTypesGetApiResponse =
  /** status 200 Successful Response */ PaginatedOrganizationTypeBaseResponse;
export type GetAllOrganizationTypeOrganizationTypesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetOrganizationTypesIdGetApiResponse =
  /** status 200 Successful Response */ OrganizationTypeBaseResponse;
export type GetOrganizationTypesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateOrganizationTypesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateOrganizationTypesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  organizationTypeBaseUpdate: OrganizationTypeBaseUpdate;
};
export type DeleteOrganizationTypesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteOrganizationTypesIdDeleteApiArg = {
  id: number;
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
export type OrganizationBaseCreate = {
  name: string;
  type?: string | null;
  parent_id?: number | null;
};
export type OrganizationBaseResponse = {
  id: number;
  name?: string | null;
  type?: string | null;
  parent_id?: number | null;
  tenant_id?: number | null;
  is_active?: boolean | null;
  created_by?: string | null;
  updated_by?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
};
export type PaginatedMeta = {
  current_page: number;
  items_per_page: number;
  total_pages: number;
  total_items: number;
};
export type PaginatedOrganizationBaseResponse = {
  items: OrganizationBaseResponse[];
  meta: PaginatedMeta;
};
export type OrganizationBaseUpdate = {
  name?: string | null;
  type?: string | null;
  parent_id?: number | null;
};
export type OrganizationTypeBaseCreate = {
  name: string;
};
export type OrganizationTypeBaseResponse = {
  id: number;
  name?: string | null;
  tenant_id?: number | null;
  is_active?: boolean | null;
  created_by?: string | null;
  updated_by?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
};
export type PaginatedOrganizationTypeBaseResponse = {
  items: OrganizationTypeBaseResponse[];
  meta: PaginatedMeta;
};
export type OrganizationTypeBaseUpdate = {
  name?: string | null;
  is_active?: boolean | null;
};
export const {
  useCreateOrganizationsPostMutation,
  useGetAllOrganizationOrganizationsGetQuery,
  useGetOrganizationHirachyOrganizationsHirachyGetQuery,
  useGetOrganizationsIdGetQuery,
  useUpdateOrganizationsIdPutMutation,
  useDeleteOrganizationsIdDeleteMutation,
  useCreateOrganizationTypesPostMutation,
  useGetAllOrganizationTypeOrganizationTypesGetQuery,
  useGetOrganizationTypesIdGetQuery,
  useUpdateOrganizationTypesIdPutMutation,
  useDeleteOrganizationTypesIdDeleteMutation
} = injectedRtkApi;
