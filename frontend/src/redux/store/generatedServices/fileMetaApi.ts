import { fileMetaBaseApi as api } from '../base/fileMetaBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    uploadFileFilesUploadPost: build.mutation<
      UploadFileFilesUploadPostApiResponse,
      UploadFileFilesUploadPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/files/upload/`,
        method: 'POST',
        body: queryArg.bodyUploadFileFilesUploadPost,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getFilesIdGet: build.query<GetFilesIdGetApiResponse, GetFilesIdGetApiArg>({
      query: (queryArg: any) => ({
        url: `/files/${queryArg.id}/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllFilemetaFilesGet: build.query<
      GetAllFilemetaFilesGetApiResponse,
      GetAllFilemetaFilesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/files/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          file_name_name: queryArg.fileNameName,
          file_name__icontains: queryArg.fileNameIcontains,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    })
  }),
  overrideExisting: false
});
export { injectedRtkApi as fileMetaApi };
export type UploadFileFilesUploadPostApiResponse =
  /** status 200 Successful Response */ FileMetaBaseResponse;
export type UploadFileFilesUploadPostApiArg = {
  'x-tenant-id': number;
  bodyUploadFileFilesUploadPost: BodyUploadFileFilesUploadPost;
};
export type GetFilesIdGetApiResponse =
  /** status 200 Successful Response */ FileMetaBaseResponse;
export type GetFilesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type GetAllFilemetaFilesGetApiResponse =
  /** status 200 Successful Response */ PaginatedFileMetaBaseResponse;
export type GetAllFilemetaFilesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  fileNameName?: string | null;
  fileNameIcontains?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type FileMetaBaseResponse = {
  id: number;
  file_name?: string | null;
  upload_name?: string | null;
  file_type?: string | null;
  thumb_name?: string | null;
  file_size?: number | null;
  url?: string | null;
  created_at?: string | null;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type BodyUploadFileFilesUploadPost = {
  file: Blob;
};
export type PaginatedMeta = {
  current_page: number;
  items_per_page: number;
  total_pages: number;
  total_items: number;
};
export type PaginatedFileMetaBaseResponse = {
  items: FileMetaBaseResponse[];
  meta: PaginatedMeta;
};
export const {
  useUploadFileFilesUploadPostMutation,
  useGetFilesIdGetQuery,
  useGetAllFilemetaFilesGetQuery
} = injectedRtkApi;
