import { assetBaseApi as api } from '../base/assetBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    authJwtLoginV1AuthJwtLoginPost: build.mutation<
      AuthJwtLoginV1AuthJwtLoginPostApiResponse,
      AuthJwtLoginV1AuthJwtLoginPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/v1/auth/jwt/login`,
        method: 'POST',
        body: queryArg.bodyAuthJwtLoginV1AuthJwtLoginPost
      })
    }),
    authJwtLogoutV1AuthJwtLogoutPost: build.mutation<
      AuthJwtLogoutV1AuthJwtLogoutPostApiResponse,
      AuthJwtLogoutV1AuthJwtLogoutPostApiArg
    >({
      query: () => ({ url: `/v1/auth/jwt/logout`, method: 'POST' })
    }),
    registerRegisterV1AuthRegisterPost: build.mutation<
      RegisterRegisterV1AuthRegisterPostApiResponse,
      RegisterRegisterV1AuthRegisterPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/v1/auth/register`,
        method: 'POST',
        body: queryArg.userCreate
      })
    }),
    resetForgotPasswordV1AuthForgotPasswordPost: build.mutation<
      ResetForgotPasswordV1AuthForgotPasswordPostApiResponse,
      ResetForgotPasswordV1AuthForgotPasswordPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/v1/auth/forgot-password`,
        method: 'POST',
        body: queryArg.bodyResetForgotPasswordV1AuthForgotPasswordPost
      })
    }),
    resetResetPasswordV1AuthResetPasswordPost: build.mutation<
      ResetResetPasswordV1AuthResetPasswordPostApiResponse,
      ResetResetPasswordV1AuthResetPasswordPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/v1/auth/reset-password`,
        method: 'POST',
        body: queryArg.bodyResetResetPasswordV1AuthResetPasswordPost
      })
    }),
    verifyRequestTokenV1AuthRequestVerifyTokenPost: build.mutation<
      VerifyRequestTokenV1AuthRequestVerifyTokenPostApiResponse,
      VerifyRequestTokenV1AuthRequestVerifyTokenPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/v1/auth/request-verify-token`,
        method: 'POST',
        body: queryArg.bodyVerifyRequestTokenV1AuthRequestVerifyTokenPost
      })
    }),
    verifyVerifyV1AuthVerifyPost: build.mutation<
      VerifyVerifyV1AuthVerifyPostApiResponse,
      VerifyVerifyV1AuthVerifyPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/v1/auth/verify`,
        method: 'POST',
        body: queryArg.bodyVerifyVerifyV1AuthVerifyPost
      })
    }),
    usersCurrentUserV1UsersMeGet: build.query<
      UsersCurrentUserV1UsersMeGetApiResponse,
      UsersCurrentUserV1UsersMeGetApiArg
    >({
      query: () => ({ url: `/v1/users/me` })
    }),
    usersPatchCurrentUserV1UsersMePatch: build.mutation<
      UsersPatchCurrentUserV1UsersMePatchApiResponse,
      UsersPatchCurrentUserV1UsersMePatchApiArg
    >({
      query: (queryArg: any) => ({
        url: `/v1/users/me`,
        method: 'PATCH',
        body: queryArg.userUpdate
      })
    }),
    usersUserV1UsersIdGet: build.query<
      UsersUserV1UsersIdGetApiResponse,
      UsersUserV1UsersIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/v1/users/${queryArg.id}` })
    }),
    usersPatchUserV1UsersIdPatch: build.mutation<
      UsersPatchUserV1UsersIdPatchApiResponse,
      UsersPatchUserV1UsersIdPatchApiArg
    >({
      query: (queryArg: any) => ({
        url: `/v1/users/${queryArg.id}`,
        method: 'PATCH',
        body: queryArg.userUpdate
      })
    }),
    usersDeleteUserV1UsersIdDelete: build.mutation<
      UsersDeleteUserV1UsersIdDeleteApiResponse,
      UsersDeleteUserV1UsersIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/v1/users/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    createAssetMatrixAssetMatrixPost: build.mutation<
      CreateAssetMatrixAssetMatrixPostApiResponse,
      CreateAssetMatrixAssetMatrixPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix/`,
        method: 'POST',
        body: queryArg.assetMatrixInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllAssetMatrixsAssetMatrixGet: build.query<
      GetAllAssetMatrixsAssetMatrixGetApiResponse,
      GetAllAssetMatrixsAssetMatrixGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateAssetMatrixAssetMatrixIdPut: build.mutation<
      UpdateAssetMatrixAssetMatrixIdPutApiResponse,
      UpdateAssetMatrixAssetMatrixIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteAssetMatrixAssetMatrixIdDelete: build.mutation<
      DeleteAssetMatrixAssetMatrixIdDeleteApiResponse,
      DeleteAssetMatrixAssetMatrixIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAssetMatrixAssetMatrixIdGet: build.query<
      GetAssetMatrixAssetMatrixIdGetApiResponse,
      GetAssetMatrixAssetMatrixIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllAssetMatrixEventGet: build.query<
      GetAllAssetMatrixEventGetApiResponse,
      GetAllAssetMatrixEventGetApiArg
    >({
      query: () => ({ url: `/asset_matrix/event/` })
    }),
    createAssetMatrixAssetMatrixEventPost: build.mutation<
      CreateAssetMatrixAssetMatrixEventPostApiResponse,
      CreateAssetMatrixAssetMatrixEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix/event/`,
        method: 'POST',
        body: queryArg.assetMatrixInsert
      })
    }),
    updateAssetMatrixAssetMatrixEventIdPut: build.mutation<
      UpdateAssetMatrixAssetMatrixEventIdPutApiResponse,
      UpdateAssetMatrixAssetMatrixEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixUpdate
      })
    }),
    deleteAssetMatrixAssetMatrixEventIdDelete: build.mutation<
      DeleteAssetMatrixAssetMatrixEventIdDeleteApiResponse,
      DeleteAssetMatrixAssetMatrixEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getAssetMatrixAssetMatrixEventIdGet: build.query<
      GetAssetMatrixAssetMatrixEventIdGetApiResponse,
      GetAssetMatrixAssetMatrixEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/asset_matrix/event/${queryArg.id}` })
    }),
    createAssetMatrixDocumentAssetMatrixDocumentPost: build.mutation<
      CreateAssetMatrixDocumentAssetMatrixDocumentPostApiResponse,
      CreateAssetMatrixDocumentAssetMatrixDocumentPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_document/`,
        method: 'POST',
        body: queryArg.assetMatrixDocumentInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllAssetMatrixDocumentsAssetMatrixDocumentGet: build.query<
      GetAllAssetMatrixDocumentsAssetMatrixDocumentGetApiResponse,
      GetAllAssetMatrixDocumentsAssetMatrixDocumentGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_document/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateAssetMatrixDocumentAssetMatrixDocumentIdPut: build.mutation<
      UpdateAssetMatrixDocumentAssetMatrixDocumentIdPutApiResponse,
      UpdateAssetMatrixDocumentAssetMatrixDocumentIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_document/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixDocumentUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteAssetMatrixDocumentAssetMatrixDocumentIdDelete: build.mutation<
      DeleteAssetMatrixDocumentAssetMatrixDocumentIdDeleteApiResponse,
      DeleteAssetMatrixDocumentAssetMatrixDocumentIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_document/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAssetMatrixDocumentAssetMatrixDocumentIdGet: build.query<
      GetAssetMatrixDocumentAssetMatrixDocumentIdGetApiResponse,
      GetAssetMatrixDocumentAssetMatrixDocumentIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_document/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllAssetMatrixDocumentEventGet: build.query<
      GetAllAssetMatrixDocumentEventGetApiResponse,
      GetAllAssetMatrixDocumentEventGetApiArg
    >({
      query: () => ({ url: `/asset_matrix_document/event/` })
    }),
    createAssetMatrixDocumentAssetMatrixDocumentEventPost: build.mutation<
      CreateAssetMatrixDocumentAssetMatrixDocumentEventPostApiResponse,
      CreateAssetMatrixDocumentAssetMatrixDocumentEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_document/event/`,
        method: 'POST',
        body: queryArg.assetMatrixDocumentInsert
      })
    }),
    updateAssetMatrixDocumentAssetMatrixDocumentEventIdPut: build.mutation<
      UpdateAssetMatrixDocumentAssetMatrixDocumentEventIdPutApiResponse,
      UpdateAssetMatrixDocumentAssetMatrixDocumentEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_document/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixDocumentUpdate
      })
    }),
    deleteAssetMatrixDocumentAssetMatrixDocumentEventIdDelete: build.mutation<
      DeleteAssetMatrixDocumentAssetMatrixDocumentEventIdDeleteApiResponse,
      DeleteAssetMatrixDocumentAssetMatrixDocumentEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_document/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getAssetMatrixDocumentAssetMatrixDocumentEventIdGet: build.query<
      GetAssetMatrixDocumentAssetMatrixDocumentEventIdGetApiResponse,
      GetAssetMatrixDocumentAssetMatrixDocumentEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_document/event/${queryArg.id}`
      })
    }),
    createAssetMatrixSectionAssetMatrixSectionPost: build.mutation<
      CreateAssetMatrixSectionAssetMatrixSectionPostApiResponse,
      CreateAssetMatrixSectionAssetMatrixSectionPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_section/`,
        method: 'POST',
        body: queryArg.assetMatrixSectionInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllAssetMatrixSectionsAssetMatrixSectionGet: build.query<
      GetAllAssetMatrixSectionsAssetMatrixSectionGetApiResponse,
      GetAllAssetMatrixSectionsAssetMatrixSectionGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_section/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateAssetMatrixSectionAssetMatrixSectionIdPut: build.mutation<
      UpdateAssetMatrixSectionAssetMatrixSectionIdPutApiResponse,
      UpdateAssetMatrixSectionAssetMatrixSectionIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_section/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixSectionUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteAssetMatrixSectionAssetMatrixSectionIdDelete: build.mutation<
      DeleteAssetMatrixSectionAssetMatrixSectionIdDeleteApiResponse,
      DeleteAssetMatrixSectionAssetMatrixSectionIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_section/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAssetMatrixSectionAssetMatrixSectionIdGet: build.query<
      GetAssetMatrixSectionAssetMatrixSectionIdGetApiResponse,
      GetAssetMatrixSectionAssetMatrixSectionIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_section/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllAssetMatrixSectionEventGet: build.query<
      GetAllAssetMatrixSectionEventGetApiResponse,
      GetAllAssetMatrixSectionEventGetApiArg
    >({
      query: () => ({ url: `/asset_matrix_section/event/` })
    }),
    createAssetMatrixSectionAssetMatrixSectionEventPost: build.mutation<
      CreateAssetMatrixSectionAssetMatrixSectionEventPostApiResponse,
      CreateAssetMatrixSectionAssetMatrixSectionEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_section/event/`,
        method: 'POST',
        body: queryArg.assetMatrixSectionInsert
      })
    }),
    updateAssetMatrixSectionAssetMatrixSectionEventIdPut: build.mutation<
      UpdateAssetMatrixSectionAssetMatrixSectionEventIdPutApiResponse,
      UpdateAssetMatrixSectionAssetMatrixSectionEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_section/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixSectionUpdate
      })
    }),
    deleteAssetMatrixSectionAssetMatrixSectionEventIdDelete: build.mutation<
      DeleteAssetMatrixSectionAssetMatrixSectionEventIdDeleteApiResponse,
      DeleteAssetMatrixSectionAssetMatrixSectionEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_section/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getAssetMatrixSectionAssetMatrixSectionEventIdGet: build.query<
      GetAssetMatrixSectionAssetMatrixSectionEventIdGetApiResponse,
      GetAssetMatrixSectionAssetMatrixSectionEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_section/event/${queryArg.id}`
      })
    }),
    createAssetMatrixSubSectionAssetMatrixSubSectionPost: build.mutation<
      CreateAssetMatrixSubSectionAssetMatrixSubSectionPostApiResponse,
      CreateAssetMatrixSubSectionAssetMatrixSubSectionPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_sub_section/`,
        method: 'POST',
        body: queryArg.assetMatrixSubSectionInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllAssetMatrixSubSectionsAssetMatrixSubSectionGet: build.query<
      GetAllAssetMatrixSubSectionsAssetMatrixSubSectionGetApiResponse,
      GetAllAssetMatrixSubSectionsAssetMatrixSubSectionGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_sub_section/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateAssetMatrixSubSectionAssetMatrixSubSectionIdPut: build.mutation<
      UpdateAssetMatrixSubSectionAssetMatrixSubSectionIdPutApiResponse,
      UpdateAssetMatrixSubSectionAssetMatrixSubSectionIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_sub_section/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixSubSectionUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteAssetMatrixSubSectionAssetMatrixSubSectionIdDelete: build.mutation<
      DeleteAssetMatrixSubSectionAssetMatrixSubSectionIdDeleteApiResponse,
      DeleteAssetMatrixSubSectionAssetMatrixSubSectionIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_sub_section/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAssetMatrixSubSectionAssetMatrixSubSectionIdGet: build.query<
      GetAssetMatrixSubSectionAssetMatrixSubSectionIdGetApiResponse,
      GetAssetMatrixSubSectionAssetMatrixSubSectionIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_sub_section/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllAssetMatrixSubSectionEventGet: build.query<
      GetAllAssetMatrixSubSectionEventGetApiResponse,
      GetAllAssetMatrixSubSectionEventGetApiArg
    >({
      query: () => ({ url: `/asset_matrix_sub_section/event/` })
    }),
    createAssetMatrixSubSectionAssetMatrixSubSectionEventPost: build.mutation<
      CreateAssetMatrixSubSectionAssetMatrixSubSectionEventPostApiResponse,
      CreateAssetMatrixSubSectionAssetMatrixSubSectionEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_sub_section/event/`,
        method: 'POST',
        body: queryArg.assetMatrixSubSectionInsert
      })
    }),
    updateAssetMatrixSubSectionAssetMatrixSubSectionEventIdPut: build.mutation<
      UpdateAssetMatrixSubSectionAssetMatrixSubSectionEventIdPutApiResponse,
      UpdateAssetMatrixSubSectionAssetMatrixSubSectionEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_sub_section/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixSubSectionUpdate
      })
    }),
    deleteAssetMatrixSubSectionAssetMatrixSubSectionEventIdDelete:
      build.mutation<
        DeleteAssetMatrixSubSectionAssetMatrixSubSectionEventIdDeleteApiResponse,
        DeleteAssetMatrixSubSectionAssetMatrixSubSectionEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/asset_matrix_sub_section/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getAssetMatrixSubSectionAssetMatrixSubSectionEventIdGet: build.query<
      GetAssetMatrixSubSectionAssetMatrixSubSectionEventIdGetApiResponse,
      GetAssetMatrixSubSectionAssetMatrixSubSectionEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_sub_section/event/${queryArg.id}`
      })
    }),
    createAssetServiceCheckListAssetServiceCheckListPost: build.mutation<
      CreateAssetServiceCheckListAssetServiceCheckListPostApiResponse,
      CreateAssetServiceCheckListAssetServiceCheckListPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list/`,
        method: 'POST',
        body: queryArg.assetServiceCheckListInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllAssetServiceCheckListsAssetServiceCheckListGet: build.query<
      GetAllAssetServiceCheckListsAssetServiceCheckListGetApiResponse,
      GetAllAssetServiceCheckListsAssetServiceCheckListGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateAssetServiceCheckListAssetServiceCheckListIdPut: build.mutation<
      UpdateAssetServiceCheckListAssetServiceCheckListIdPutApiResponse,
      UpdateAssetServiceCheckListAssetServiceCheckListIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetServiceCheckListUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteAssetServiceCheckListAssetServiceCheckListIdDelete: build.mutation<
      DeleteAssetServiceCheckListAssetServiceCheckListIdDeleteApiResponse,
      DeleteAssetServiceCheckListAssetServiceCheckListIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAssetServiceCheckListAssetServiceCheckListIdGet: build.query<
      GetAssetServiceCheckListAssetServiceCheckListIdGetApiResponse,
      GetAssetServiceCheckListAssetServiceCheckListIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllAssetServiceCheckListEventGet: build.query<
      GetAllAssetServiceCheckListEventGetApiResponse,
      GetAllAssetServiceCheckListEventGetApiArg
    >({
      query: () => ({ url: `/asset_service_check_list/event/` })
    }),
    createAssetServiceCheckListAssetServiceCheckListEventPost: build.mutation<
      CreateAssetServiceCheckListAssetServiceCheckListEventPostApiResponse,
      CreateAssetServiceCheckListAssetServiceCheckListEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list/event/`,
        method: 'POST',
        body: queryArg.assetServiceCheckListInsert
      })
    }),
    updateAssetServiceCheckListAssetServiceCheckListEventIdPut: build.mutation<
      UpdateAssetServiceCheckListAssetServiceCheckListEventIdPutApiResponse,
      UpdateAssetServiceCheckListAssetServiceCheckListEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetServiceCheckListUpdate
      })
    }),
    deleteAssetServiceCheckListAssetServiceCheckListEventIdDelete:
      build.mutation<
        DeleteAssetServiceCheckListAssetServiceCheckListEventIdDeleteApiResponse,
        DeleteAssetServiceCheckListAssetServiceCheckListEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/asset_service_check_list/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getAssetServiceCheckListAssetServiceCheckListEventIdGet: build.query<
      GetAssetServiceCheckListAssetServiceCheckListEventIdGetApiResponse,
      GetAssetServiceCheckListAssetServiceCheckListEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list/event/${queryArg.id}`
      })
    }),
    createAssetServiceCheckListItemsAssetServiceCheckListItemsPost:
      build.mutation<
        CreateAssetServiceCheckListItemsAssetServiceCheckListItemsPostApiResponse,
        CreateAssetServiceCheckListItemsAssetServiceCheckListItemsPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/asset_service_check_list_items/`,
          method: 'POST',
          body: queryArg.assetServiceCheckListItemsInsert,
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    getAllAssetServiceCheckListItemssAssetServiceCheckListItemsGet: build.query<
      GetAllAssetServiceCheckListItemssAssetServiceCheckListItemsGetApiResponse,
      GetAllAssetServiceCheckListItemssAssetServiceCheckListItemsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list_items/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateAssetServiceCheckListItemsAssetServiceCheckListItemsIdPut:
      build.mutation<
        UpdateAssetServiceCheckListItemsAssetServiceCheckListItemsIdPutApiResponse,
        UpdateAssetServiceCheckListItemsAssetServiceCheckListItemsIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/asset_service_check_list_items/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.assetServiceCheckListItemsUpdate,
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    deleteAssetServiceCheckListItemsAssetServiceCheckListItemsIdDelete:
      build.mutation<
        DeleteAssetServiceCheckListItemsAssetServiceCheckListItemsIdDeleteApiResponse,
        DeleteAssetServiceCheckListItemsAssetServiceCheckListItemsIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/asset_service_check_list_items/${queryArg.id}`,
          method: 'DELETE',
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    getAssetServiceCheckListItemsAssetServiceCheckListItemsIdGet: build.query<
      GetAssetServiceCheckListItemsAssetServiceCheckListItemsIdGetApiResponse,
      GetAssetServiceCheckListItemsAssetServiceCheckListItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list_items/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllAssetServiceCheckListItemsEventGet: build.query<
      GetAllAssetServiceCheckListItemsEventGetApiResponse,
      GetAllAssetServiceCheckListItemsEventGetApiArg
    >({
      query: () => ({ url: `/asset_service_check_list_items/event/` })
    }),
    createAssetServiceCheckListItemsAssetServiceCheckListItemsEventPost:
      build.mutation<
        CreateAssetServiceCheckListItemsAssetServiceCheckListItemsEventPostApiResponse,
        CreateAssetServiceCheckListItemsAssetServiceCheckListItemsEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/asset_service_check_list_items/event/`,
          method: 'POST',
          body: queryArg.assetServiceCheckListItemsInsert
        })
      }),
    updateAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdPut:
      build.mutation<
        UpdateAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdPutApiResponse,
        UpdateAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/asset_service_check_list_items/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.assetServiceCheckListItemsUpdate
        })
      }),
    deleteAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdDelete:
      build.mutation<
        DeleteAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdDeleteApiResponse,
        DeleteAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/asset_service_check_list_items/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdGet:
      build.query<
        GetAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdGetApiResponse,
        GetAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdGetApiArg
      >({
        query: (queryArg: any) => ({
          url: `/asset_service_check_list_items/event/${queryArg.id}`
        })
      }),
    createFiscalyearFiscalyearPost: build.mutation<
      CreateFiscalyearFiscalyearPostApiResponse,
      CreateFiscalyearFiscalyearPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/fiscalyear/`,
        method: 'POST',
        body: queryArg.fiscalyearInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllFiscalyearsFiscalyearGet: build.query<
      GetAllFiscalyearsFiscalyearGetApiResponse,
      GetAllFiscalyearsFiscalyearGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/fiscalyear/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateFiscalyearFiscalyearIdPut: build.mutation<
      UpdateFiscalyearFiscalyearIdPutApiResponse,
      UpdateFiscalyearFiscalyearIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/fiscalyear/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.fiscalyearUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteFiscalyearFiscalyearIdDelete: build.mutation<
      DeleteFiscalyearFiscalyearIdDeleteApiResponse,
      DeleteFiscalyearFiscalyearIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/fiscalyear/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getFiscalyearFiscalyearIdGet: build.query<
      GetFiscalyearFiscalyearIdGetApiResponse,
      GetFiscalyearFiscalyearIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/fiscalyear/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllFiscalyearEventGet: build.query<
      GetAllFiscalyearEventGetApiResponse,
      GetAllFiscalyearEventGetApiArg
    >({
      query: () => ({ url: `/fiscalyear/event/` })
    }),
    createFiscalyearFiscalyearEventPost: build.mutation<
      CreateFiscalyearFiscalyearEventPostApiResponse,
      CreateFiscalyearFiscalyearEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/fiscalyear/event/`,
        method: 'POST',
        body: queryArg.fiscalyearInsert
      })
    }),
    updateFiscalyearFiscalyearEventIdPut: build.mutation<
      UpdateFiscalyearFiscalyearEventIdPutApiResponse,
      UpdateFiscalyearFiscalyearEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/fiscalyear/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.fiscalyearUpdate
      })
    }),
    deleteFiscalyearFiscalyearEventIdDelete: build.mutation<
      DeleteFiscalyearFiscalyearEventIdDeleteApiResponse,
      DeleteFiscalyearFiscalyearEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/fiscalyear/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getFiscalyearFiscalyearEventIdGet: build.query<
      GetFiscalyearFiscalyearEventIdGetApiResponse,
      GetFiscalyearFiscalyearEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/fiscalyear/event/${queryArg.id}` })
    }),
    createGrpWarehouseGrpWarehousePost: build.mutation<
      CreateGrpWarehouseGrpWarehousePostApiResponse,
      CreateGrpWarehouseGrpWarehousePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/grp_warehouse/`,
        method: 'POST',
        body: queryArg.grpWarehouseInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllGrpWarehousesGrpWarehouseGet: build.query<
      GetAllGrpWarehousesGrpWarehouseGetApiResponse,
      GetAllGrpWarehousesGrpWarehouseGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/grp_warehouse/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateGrpWarehouseGrpWarehouseIdPut: build.mutation<
      UpdateGrpWarehouseGrpWarehouseIdPutApiResponse,
      UpdateGrpWarehouseGrpWarehouseIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/grp_warehouse/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.grpWarehouseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteGrpWarehouseGrpWarehouseIdDelete: build.mutation<
      DeleteGrpWarehouseGrpWarehouseIdDeleteApiResponse,
      DeleteGrpWarehouseGrpWarehouseIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/grp_warehouse/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getGrpWarehouseGrpWarehouseIdGet: build.query<
      GetGrpWarehouseGrpWarehouseIdGetApiResponse,
      GetGrpWarehouseGrpWarehouseIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/grp_warehouse/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllGrpWarehouseEventGet: build.query<
      GetAllGrpWarehouseEventGetApiResponse,
      GetAllGrpWarehouseEventGetApiArg
    >({
      query: () => ({ url: `/grp_warehouse/event/` })
    }),
    createGrpWarehouseGrpWarehouseEventPost: build.mutation<
      CreateGrpWarehouseGrpWarehouseEventPostApiResponse,
      CreateGrpWarehouseGrpWarehouseEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/grp_warehouse/event/`,
        method: 'POST',
        body: queryArg.grpWarehouseInsert
      })
    }),
    updateGrpWarehouseGrpWarehouseEventIdPut: build.mutation<
      UpdateGrpWarehouseGrpWarehouseEventIdPutApiResponse,
      UpdateGrpWarehouseGrpWarehouseEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/grp_warehouse/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.grpWarehouseUpdate
      })
    }),
    deleteGrpWarehouseGrpWarehouseEventIdDelete: build.mutation<
      DeleteGrpWarehouseGrpWarehouseEventIdDeleteApiResponse,
      DeleteGrpWarehouseGrpWarehouseEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/grp_warehouse/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getGrpWarehouseGrpWarehouseEventIdGet: build.query<
      GetGrpWarehouseGrpWarehouseEventIdGetApiResponse,
      GetGrpWarehouseGrpWarehouseEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/grp_warehouse/event/${queryArg.id}` })
    }),
    createInvItemConfigurationInvItemConfigurationPost: build.mutation<
      CreateInvItemConfigurationInvItemConfigurationPostApiResponse,
      CreateInvItemConfigurationInvItemConfigurationPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inv_item_configuration/`,
        method: 'POST',
        body: queryArg.invItemConfigurationInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllInvItemConfigurationsInvItemConfigurationGet: build.query<
      GetAllInvItemConfigurationsInvItemConfigurationGetApiResponse,
      GetAllInvItemConfigurationsInvItemConfigurationGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inv_item_configuration/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateInvItemConfigurationInvItemConfigurationIdPut: build.mutation<
      UpdateInvItemConfigurationInvItemConfigurationIdPutApiResponse,
      UpdateInvItemConfigurationInvItemConfigurationIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inv_item_configuration/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.invItemConfigurationUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteInvItemConfigurationInvItemConfigurationIdDelete: build.mutation<
      DeleteInvItemConfigurationInvItemConfigurationIdDeleteApiResponse,
      DeleteInvItemConfigurationInvItemConfigurationIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inv_item_configuration/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getInvItemConfigurationInvItemConfigurationIdGet: build.query<
      GetInvItemConfigurationInvItemConfigurationIdGetApiResponse,
      GetInvItemConfigurationInvItemConfigurationIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inv_item_configuration/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllInvItemConfigurationEventGet: build.query<
      GetAllInvItemConfigurationEventGetApiResponse,
      GetAllInvItemConfigurationEventGetApiArg
    >({
      query: () => ({ url: `/inv_item_configuration/event/` })
    }),
    createInvItemConfigurationInvItemConfigurationEventPost: build.mutation<
      CreateInvItemConfigurationInvItemConfigurationEventPostApiResponse,
      CreateInvItemConfigurationInvItemConfigurationEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inv_item_configuration/event/`,
        method: 'POST',
        body: queryArg.invItemConfigurationInsert
      })
    }),
    updateInvItemConfigurationInvItemConfigurationEventIdPut: build.mutation<
      UpdateInvItemConfigurationInvItemConfigurationEventIdPutApiResponse,
      UpdateInvItemConfigurationInvItemConfigurationEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inv_item_configuration/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.invItemConfigurationUpdate
      })
    }),
    deleteInvItemConfigurationInvItemConfigurationEventIdDelete: build.mutation<
      DeleteInvItemConfigurationInvItemConfigurationEventIdDeleteApiResponse,
      DeleteInvItemConfigurationInvItemConfigurationEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inv_item_configuration/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getInvItemConfigurationInvItemConfigurationEventIdGet: build.query<
      GetInvItemConfigurationInvItemConfigurationEventIdGetApiResponse,
      GetInvItemConfigurationInvItemConfigurationEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inv_item_configuration/event/${queryArg.id}`
      })
    }),
    createItemOpeningBalanceItemOpeningBalancePost: build.mutation<
      CreateItemOpeningBalanceItemOpeningBalancePostApiResponse,
      CreateItemOpeningBalanceItemOpeningBalancePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_opening_balance/`,
        method: 'POST',
        body: queryArg.itemOpeningBalanceInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllItemOpeningBalancesItemOpeningBalanceGet: build.query<
      GetAllItemOpeningBalancesItemOpeningBalanceGetApiResponse,
      GetAllItemOpeningBalancesItemOpeningBalanceGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_opening_balance/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateItemOpeningBalanceItemOpeningBalanceIdPut: build.mutation<
      UpdateItemOpeningBalanceItemOpeningBalanceIdPutApiResponse,
      UpdateItemOpeningBalanceItemOpeningBalanceIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_opening_balance/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.itemOpeningBalanceUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteItemOpeningBalanceItemOpeningBalanceIdDelete: build.mutation<
      DeleteItemOpeningBalanceItemOpeningBalanceIdDeleteApiResponse,
      DeleteItemOpeningBalanceItemOpeningBalanceIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_opening_balance/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getItemOpeningBalanceItemOpeningBalanceIdGet: build.query<
      GetItemOpeningBalanceItemOpeningBalanceIdGetApiResponse,
      GetItemOpeningBalanceItemOpeningBalanceIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_opening_balance/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllItemOpeningBalanceEventGet: build.query<
      GetAllItemOpeningBalanceEventGetApiResponse,
      GetAllItemOpeningBalanceEventGetApiArg
    >({
      query: () => ({ url: `/item_opening_balance/event/` })
    }),
    createItemOpeningBalanceItemOpeningBalanceEventPost: build.mutation<
      CreateItemOpeningBalanceItemOpeningBalanceEventPostApiResponse,
      CreateItemOpeningBalanceItemOpeningBalanceEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_opening_balance/event/`,
        method: 'POST',
        body: queryArg.itemOpeningBalanceInsert
      })
    }),
    updateItemOpeningBalanceItemOpeningBalanceEventIdPut: build.mutation<
      UpdateItemOpeningBalanceItemOpeningBalanceEventIdPutApiResponse,
      UpdateItemOpeningBalanceItemOpeningBalanceEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_opening_balance/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.itemOpeningBalanceUpdate
      })
    }),
    deleteItemOpeningBalanceItemOpeningBalanceEventIdDelete: build.mutation<
      DeleteItemOpeningBalanceItemOpeningBalanceEventIdDeleteApiResponse,
      DeleteItemOpeningBalanceItemOpeningBalanceEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_opening_balance/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getItemOpeningBalanceItemOpeningBalanceEventIdGet: build.query<
      GetItemOpeningBalanceItemOpeningBalanceEventIdGetApiResponse,
      GetItemOpeningBalanceItemOpeningBalanceEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_opening_balance/event/${queryArg.id}`
      })
    }),
    createPoplistsPoplistsPost: build.mutation<
      CreatePoplistsPoplistsPostApiResponse,
      CreatePoplistsPoplistsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/poplists/`,
        method: 'POST',
        body: queryArg.poplistsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllPoplistssPoplistsGet: build.query<
      GetAllPoplistssPoplistsGetApiResponse,
      GetAllPoplistssPoplistsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/poplists/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updatePoplistsPoplistsIdPut: build.mutation<
      UpdatePoplistsPoplistsIdPutApiResponse,
      UpdatePoplistsPoplistsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/poplists/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.poplistsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deletePoplistsPoplistsIdDelete: build.mutation<
      DeletePoplistsPoplistsIdDeleteApiResponse,
      DeletePoplistsPoplistsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/poplists/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getPoplistsPoplistsIdGet: build.query<
      GetPoplistsPoplistsIdGetApiResponse,
      GetPoplistsPoplistsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/poplists/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllPoplistsEventGet: build.query<
      GetAllPoplistsEventGetApiResponse,
      GetAllPoplistsEventGetApiArg
    >({
      query: () => ({ url: `/poplists/event/` })
    }),
    createPoplistsPoplistsEventPost: build.mutation<
      CreatePoplistsPoplistsEventPostApiResponse,
      CreatePoplistsPoplistsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/poplists/event/`,
        method: 'POST',
        body: queryArg.poplistsInsert
      })
    }),
    updatePoplistsPoplistsEventIdPut: build.mutation<
      UpdatePoplistsPoplistsEventIdPutApiResponse,
      UpdatePoplistsPoplistsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/poplists/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.poplistsUpdate
      })
    }),
    deletePoplistsPoplistsEventIdDelete: build.mutation<
      DeletePoplistsPoplistsEventIdDeleteApiResponse,
      DeletePoplistsPoplistsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/poplists/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getPoplistsPoplistsEventIdGet: build.query<
      GetPoplistsPoplistsEventIdGetApiResponse,
      GetPoplistsPoplistsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/poplists/event/${queryArg.id}` })
    }),
    createPurchaseOrderTermsPurchaseOrderTermsPost: build.mutation<
      CreatePurchaseOrderTermsPurchaseOrderTermsPostApiResponse,
      CreatePurchaseOrderTermsPurchaseOrderTermsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_order_terms/`,
        method: 'POST',
        body: queryArg.purchaseOrderTermsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllPurchaseOrderTermssPurchaseOrderTermsGet: build.query<
      GetAllPurchaseOrderTermssPurchaseOrderTermsGetApiResponse,
      GetAllPurchaseOrderTermssPurchaseOrderTermsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_order_terms/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updatePurchaseOrderTermsPurchaseOrderTermsIdPut: build.mutation<
      UpdatePurchaseOrderTermsPurchaseOrderTermsIdPutApiResponse,
      UpdatePurchaseOrderTermsPurchaseOrderTermsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_order_terms/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.purchaseOrderTermsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deletePurchaseOrderTermsPurchaseOrderTermsIdDelete: build.mutation<
      DeletePurchaseOrderTermsPurchaseOrderTermsIdDeleteApiResponse,
      DeletePurchaseOrderTermsPurchaseOrderTermsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_order_terms/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getPurchaseOrderTermsPurchaseOrderTermsIdGet: build.query<
      GetPurchaseOrderTermsPurchaseOrderTermsIdGetApiResponse,
      GetPurchaseOrderTermsPurchaseOrderTermsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_order_terms/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllPurchaseOrderTermsEventGet: build.query<
      GetAllPurchaseOrderTermsEventGetApiResponse,
      GetAllPurchaseOrderTermsEventGetApiArg
    >({
      query: () => ({ url: `/purchase_order_terms/event/` })
    }),
    createPurchaseOrderTermsPurchaseOrderTermsEventPost: build.mutation<
      CreatePurchaseOrderTermsPurchaseOrderTermsEventPostApiResponse,
      CreatePurchaseOrderTermsPurchaseOrderTermsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_order_terms/event/`,
        method: 'POST',
        body: queryArg.purchaseOrderTermsInsert
      })
    }),
    updatePurchaseOrderTermsPurchaseOrderTermsEventIdPut: build.mutation<
      UpdatePurchaseOrderTermsPurchaseOrderTermsEventIdPutApiResponse,
      UpdatePurchaseOrderTermsPurchaseOrderTermsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_order_terms/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.purchaseOrderTermsUpdate
      })
    }),
    deletePurchaseOrderTermsPurchaseOrderTermsEventIdDelete: build.mutation<
      DeletePurchaseOrderTermsPurchaseOrderTermsEventIdDeleteApiResponse,
      DeletePurchaseOrderTermsPurchaseOrderTermsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_order_terms/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getPurchaseOrderTermsPurchaseOrderTermsEventIdGet: build.query<
      GetPurchaseOrderTermsPurchaseOrderTermsEventIdGetApiResponse,
      GetPurchaseOrderTermsPurchaseOrderTermsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_order_terms/event/${queryArg.id}`
      })
    }),
    createRefAstMaterialRefAstMaterialPost: build.mutation<
      CreateRefAstMaterialRefAstMaterialPostApiResponse,
      CreateRefAstMaterialRefAstMaterialPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_ast_material/`,
        method: 'POST',
        body: queryArg.refAstMaterialInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefAstMaterialsRefAstMaterialGet: build.query<
      GetAllRefAstMaterialsRefAstMaterialGetApiResponse,
      GetAllRefAstMaterialsRefAstMaterialGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_ast_material/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateRefAstMaterialRefAstMaterialIdPut: build.mutation<
      UpdateRefAstMaterialRefAstMaterialIdPutApiResponse,
      UpdateRefAstMaterialRefAstMaterialIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_ast_material/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refAstMaterialUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteRefAstMaterialRefAstMaterialIdDelete: build.mutation<
      DeleteRefAstMaterialRefAstMaterialIdDeleteApiResponse,
      DeleteRefAstMaterialRefAstMaterialIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_ast_material/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getRefAstMaterialRefAstMaterialIdGet: build.query<
      GetRefAstMaterialRefAstMaterialIdGetApiResponse,
      GetRefAstMaterialRefAstMaterialIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_ast_material/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefAstMaterialEventGet: build.query<
      GetAllRefAstMaterialEventGetApiResponse,
      GetAllRefAstMaterialEventGetApiArg
    >({
      query: () => ({ url: `/ref_ast_material/event/` })
    }),
    createRefAstMaterialRefAstMaterialEventPost: build.mutation<
      CreateRefAstMaterialRefAstMaterialEventPostApiResponse,
      CreateRefAstMaterialRefAstMaterialEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_ast_material/event/`,
        method: 'POST',
        body: queryArg.refAstMaterialInsert
      })
    }),
    updateRefAstMaterialRefAstMaterialEventIdPut: build.mutation<
      UpdateRefAstMaterialRefAstMaterialEventIdPutApiResponse,
      UpdateRefAstMaterialRefAstMaterialEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_ast_material/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refAstMaterialUpdate
      })
    }),
    deleteRefAstMaterialRefAstMaterialEventIdDelete: build.mutation<
      DeleteRefAstMaterialRefAstMaterialEventIdDeleteApiResponse,
      DeleteRefAstMaterialRefAstMaterialEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_ast_material/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefAstMaterialRefAstMaterialEventIdGet: build.query<
      GetRefAstMaterialRefAstMaterialEventIdGetApiResponse,
      GetRefAstMaterialRefAstMaterialEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_ast_material/event/${queryArg.id}`
      })
    }),
    createRefFuelStationRefFuelStationPost: build.mutation<
      CreateRefFuelStationRefFuelStationPostApiResponse,
      CreateRefFuelStationRefFuelStationPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_fuel_station/`,
        method: 'POST',
        body: queryArg.refFuelStationInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefFuelStationsRefFuelStationGet: build.query<
      GetAllRefFuelStationsRefFuelStationGetApiResponse,
      GetAllRefFuelStationsRefFuelStationGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_fuel_station/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateRefFuelStationRefFuelStationIdPut: build.mutation<
      UpdateRefFuelStationRefFuelStationIdPutApiResponse,
      UpdateRefFuelStationRefFuelStationIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_fuel_station/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refFuelStationUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteRefFuelStationRefFuelStationIdDelete: build.mutation<
      DeleteRefFuelStationRefFuelStationIdDeleteApiResponse,
      DeleteRefFuelStationRefFuelStationIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_fuel_station/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getRefFuelStationRefFuelStationIdGet: build.query<
      GetRefFuelStationRefFuelStationIdGetApiResponse,
      GetRefFuelStationRefFuelStationIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_fuel_station/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefFuelStationEventGet: build.query<
      GetAllRefFuelStationEventGetApiResponse,
      GetAllRefFuelStationEventGetApiArg
    >({
      query: () => ({ url: `/ref_fuel_station/event/` })
    }),
    createRefFuelStationRefFuelStationEventPost: build.mutation<
      CreateRefFuelStationRefFuelStationEventPostApiResponse,
      CreateRefFuelStationRefFuelStationEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_fuel_station/event/`,
        method: 'POST',
        body: queryArg.refFuelStationInsert
      })
    }),
    updateRefFuelStationRefFuelStationEventIdPut: build.mutation<
      UpdateRefFuelStationRefFuelStationEventIdPutApiResponse,
      UpdateRefFuelStationRefFuelStationEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_fuel_station/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refFuelStationUpdate
      })
    }),
    deleteRefFuelStationRefFuelStationEventIdDelete: build.mutation<
      DeleteRefFuelStationRefFuelStationEventIdDeleteApiResponse,
      DeleteRefFuelStationRefFuelStationEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_fuel_station/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefFuelStationRefFuelStationEventIdGet: build.query<
      GetRefFuelStationRefFuelStationEventIdGetApiResponse,
      GetRefFuelStationRefFuelStationEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_fuel_station/event/${queryArg.id}`
      })
    }),
    createRefPartyRefPartyPost: build.mutation<
      CreateRefPartyRefPartyPostApiResponse,
      CreateRefPartyRefPartyPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_party/`,
        method: 'POST',
        body: queryArg.refPartyInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefPartysRefPartyGet: build.query<
      GetAllRefPartysRefPartyGetApiResponse,
      GetAllRefPartysRefPartyGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_party/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateRefPartyRefPartyIdPut: build.mutation<
      UpdateRefPartyRefPartyIdPutApiResponse,
      UpdateRefPartyRefPartyIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_party/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refPartyUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteRefPartyRefPartyIdDelete: build.mutation<
      DeleteRefPartyRefPartyIdDeleteApiResponse,
      DeleteRefPartyRefPartyIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_party/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getRefPartyRefPartyIdGet: build.query<
      GetRefPartyRefPartyIdGetApiResponse,
      GetRefPartyRefPartyIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_party/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefPartyEventGet: build.query<
      GetAllRefPartyEventGetApiResponse,
      GetAllRefPartyEventGetApiArg
    >({
      query: () => ({ url: `/ref_party/event/` })
    }),
    createRefPartyRefPartyEventPost: build.mutation<
      CreateRefPartyRefPartyEventPostApiResponse,
      CreateRefPartyRefPartyEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_party/event/`,
        method: 'POST',
        body: queryArg.refPartyInsert
      })
    }),
    updateRefPartyRefPartyEventIdPut: build.mutation<
      UpdateRefPartyRefPartyEventIdPutApiResponse,
      UpdateRefPartyRefPartyEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_party/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refPartyUpdate
      })
    }),
    deleteRefPartyRefPartyEventIdDelete: build.mutation<
      DeleteRefPartyRefPartyEventIdDeleteApiResponse,
      DeleteRefPartyRefPartyEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_party/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefPartyRefPartyEventIdGet: build.query<
      GetRefPartyRefPartyEventIdGetApiResponse,
      GetRefPartyRefPartyEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/ref_party/event/${queryArg.id}` })
    }),
    createRefRosterRefRosterPost: build.mutation<
      CreateRefRosterRefRosterPostApiResponse,
      CreateRefRosterRefRosterPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_roster/`,
        method: 'POST',
        body: queryArg.refRosterInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefRostersRefRosterGet: build.query<
      GetAllRefRostersRefRosterGetApiResponse,
      GetAllRefRostersRefRosterGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_roster/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateRefRosterRefRosterIdPut: build.mutation<
      UpdateRefRosterRefRosterIdPutApiResponse,
      UpdateRefRosterRefRosterIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_roster/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refRosterUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteRefRosterRefRosterIdDelete: build.mutation<
      DeleteRefRosterRefRosterIdDeleteApiResponse,
      DeleteRefRosterRefRosterIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_roster/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getRefRosterRefRosterIdGet: build.query<
      GetRefRosterRefRosterIdGetApiResponse,
      GetRefRosterRefRosterIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_roster/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefRosterEventGet: build.query<
      GetAllRefRosterEventGetApiResponse,
      GetAllRefRosterEventGetApiArg
    >({
      query: () => ({ url: `/ref_roster/event/` })
    }),
    createRefRosterRefRosterEventPost: build.mutation<
      CreateRefRosterRefRosterEventPostApiResponse,
      CreateRefRosterRefRosterEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_roster/event/`,
        method: 'POST',
        body: queryArg.refRosterInsert
      })
    }),
    updateRefRosterRefRosterEventIdPut: build.mutation<
      UpdateRefRosterRefRosterEventIdPutApiResponse,
      UpdateRefRosterRefRosterEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_roster/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refRosterUpdate
      })
    }),
    deleteRefRosterRefRosterEventIdDelete: build.mutation<
      DeleteRefRosterRefRosterEventIdDeleteApiResponse,
      DeleteRefRosterRefRosterEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_roster/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefRosterRefRosterEventIdGet: build.query<
      GetRefRosterRefRosterEventIdGetApiResponse,
      GetRefRosterRefRosterEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/ref_roster/event/${queryArg.id}` })
    }),
    createRefSubAssemblyRefSubAssemblyPost: build.mutation<
      CreateRefSubAssemblyRefSubAssemblyPostApiResponse,
      CreateRefSubAssemblyRefSubAssemblyPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_sub_assembly/`,
        method: 'POST',
        body: queryArg.refSubAssemblyInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefSubAssemblysRefSubAssemblyGet: build.query<
      GetAllRefSubAssemblysRefSubAssemblyGetApiResponse,
      GetAllRefSubAssemblysRefSubAssemblyGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_sub_assembly/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateRefSubAssemblyRefSubAssemblyIdPut: build.mutation<
      UpdateRefSubAssemblyRefSubAssemblyIdPutApiResponse,
      UpdateRefSubAssemblyRefSubAssemblyIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_sub_assembly/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refSubAssemblyUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteRefSubAssemblyRefSubAssemblyIdDelete: build.mutation<
      DeleteRefSubAssemblyRefSubAssemblyIdDeleteApiResponse,
      DeleteRefSubAssemblyRefSubAssemblyIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_sub_assembly/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getRefSubAssemblyRefSubAssemblyIdGet: build.query<
      GetRefSubAssemblyRefSubAssemblyIdGetApiResponse,
      GetRefSubAssemblyRefSubAssemblyIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_sub_assembly/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefSubAssemblyEventGet: build.query<
      GetAllRefSubAssemblyEventGetApiResponse,
      GetAllRefSubAssemblyEventGetApiArg
    >({
      query: () => ({ url: `/ref_sub_assembly/event/` })
    }),
    createRefSubAssemblyRefSubAssemblyEventPost: build.mutation<
      CreateRefSubAssemblyRefSubAssemblyEventPostApiResponse,
      CreateRefSubAssemblyRefSubAssemblyEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_sub_assembly/event/`,
        method: 'POST',
        body: queryArg.refSubAssemblyInsert
      })
    }),
    updateRefSubAssemblyRefSubAssemblyEventIdPut: build.mutation<
      UpdateRefSubAssemblyRefSubAssemblyEventIdPutApiResponse,
      UpdateRefSubAssemblyRefSubAssemblyEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_sub_assembly/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refSubAssemblyUpdate
      })
    }),
    deleteRefSubAssemblyRefSubAssemblyEventIdDelete: build.mutation<
      DeleteRefSubAssemblyRefSubAssemblyEventIdDeleteApiResponse,
      DeleteRefSubAssemblyRefSubAssemblyEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_sub_assembly/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefSubAssemblyRefSubAssemblyEventIdGet: build.query<
      GetRefSubAssemblyRefSubAssemblyEventIdGetApiResponse,
      GetRefSubAssemblyRefSubAssemblyEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_sub_assembly/event/${queryArg.id}`
      })
    }),
    createRefTaxRefTaxPost: build.mutation<
      CreateRefTaxRefTaxPostApiResponse,
      CreateRefTaxRefTaxPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_tax/`,
        method: 'POST',
        body: queryArg.refTaxInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefTaxsRefTaxGet: build.query<
      GetAllRefTaxsRefTaxGetApiResponse,
      GetAllRefTaxsRefTaxGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_tax/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateRefTaxRefTaxIdPut: build.mutation<
      UpdateRefTaxRefTaxIdPutApiResponse,
      UpdateRefTaxRefTaxIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_tax/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refTaxUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteRefTaxRefTaxIdDelete: build.mutation<
      DeleteRefTaxRefTaxIdDeleteApiResponse,
      DeleteRefTaxRefTaxIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_tax/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getRefTaxRefTaxIdGet: build.query<
      GetRefTaxRefTaxIdGetApiResponse,
      GetRefTaxRefTaxIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_tax/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefTaxEventGet: build.query<
      GetAllRefTaxEventGetApiResponse,
      GetAllRefTaxEventGetApiArg
    >({
      query: () => ({ url: `/ref_tax/event/` })
    }),
    createRefTaxRefTaxEventPost: build.mutation<
      CreateRefTaxRefTaxEventPostApiResponse,
      CreateRefTaxRefTaxEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_tax/event/`,
        method: 'POST',
        body: queryArg.refTaxInsert
      })
    }),
    updateRefTaxRefTaxEventIdPut: build.mutation<
      UpdateRefTaxRefTaxEventIdPutApiResponse,
      UpdateRefTaxRefTaxEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_tax/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refTaxUpdate
      })
    }),
    deleteRefTaxRefTaxEventIdDelete: build.mutation<
      DeleteRefTaxRefTaxEventIdDeleteApiResponse,
      DeleteRefTaxRefTaxEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_tax/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefTaxRefTaxEventIdGet: build.query<
      GetRefTaxRefTaxEventIdGetApiResponse,
      GetRefTaxRefTaxEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/ref_tax/event/${queryArg.id}` })
    }),
    createRefVendorRefVendorPost: build.mutation<
      CreateRefVendorRefVendorPostApiResponse,
      CreateRefVendorRefVendorPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_vendor/`,
        method: 'POST',
        body: queryArg.refVendorInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefVendorsRefVendorGet: build.query<
      GetAllRefVendorsRefVendorGetApiResponse,
      GetAllRefVendorsRefVendorGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_vendor/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateRefVendorRefVendorIdPut: build.mutation<
      UpdateRefVendorRefVendorIdPutApiResponse,
      UpdateRefVendorRefVendorIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_vendor/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refVendorUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteRefVendorRefVendorIdDelete: build.mutation<
      DeleteRefVendorRefVendorIdDeleteApiResponse,
      DeleteRefVendorRefVendorIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_vendor/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getRefVendorRefVendorIdGet: build.query<
      GetRefVendorRefVendorIdGetApiResponse,
      GetRefVendorRefVendorIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_vendor/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefVendorEventGet: build.query<
      GetAllRefVendorEventGetApiResponse,
      GetAllRefVendorEventGetApiArg
    >({
      query: () => ({ url: `/ref_vendor/event/` })
    }),
    createRefVendorRefVendorEventPost: build.mutation<
      CreateRefVendorRefVendorEventPostApiResponse,
      CreateRefVendorRefVendorEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_vendor/event/`,
        method: 'POST',
        body: queryArg.refVendorInsert
      })
    }),
    updateRefVendorRefVendorEventIdPut: build.mutation<
      UpdateRefVendorRefVendorEventIdPutApiResponse,
      UpdateRefVendorRefVendorEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_vendor/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refVendorUpdate
      })
    }),
    deleteRefVendorRefVendorEventIdDelete: build.mutation<
      DeleteRefVendorRefVendorEventIdDeleteApiResponse,
      DeleteRefVendorRefVendorEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_vendor/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefVendorRefVendorEventIdGet: build.query<
      GetRefVendorRefVendorEventIdGetApiResponse,
      GetRefVendorRefVendorEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/ref_vendor/event/${queryArg.id}` })
    }),
    createRefWorkstationRefWorkstationPost: build.mutation<
      CreateRefWorkstationRefWorkstationPostApiResponse,
      CreateRefWorkstationRefWorkstationPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_workstation/`,
        method: 'POST',
        body: queryArg.refWorkstationInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefWorkstationsRefWorkstationGet: build.query<
      GetAllRefWorkstationsRefWorkstationGetApiResponse,
      GetAllRefWorkstationsRefWorkstationGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_workstation/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateRefWorkstationRefWorkstationIdPut: build.mutation<
      UpdateRefWorkstationRefWorkstationIdPutApiResponse,
      UpdateRefWorkstationRefWorkstationIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_workstation/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refWorkstationUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteRefWorkstationRefWorkstationIdDelete: build.mutation<
      DeleteRefWorkstationRefWorkstationIdDeleteApiResponse,
      DeleteRefWorkstationRefWorkstationIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_workstation/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getRefWorkstationRefWorkstationIdGet: build.query<
      GetRefWorkstationRefWorkstationIdGetApiResponse,
      GetRefWorkstationRefWorkstationIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_workstation/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllRefWorkstationEventGet: build.query<
      GetAllRefWorkstationEventGetApiResponse,
      GetAllRefWorkstationEventGetApiArg
    >({
      query: () => ({ url: `/ref_workstation/event/` })
    }),
    createRefWorkstationRefWorkstationEventPost: build.mutation<
      CreateRefWorkstationRefWorkstationEventPostApiResponse,
      CreateRefWorkstationRefWorkstationEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_workstation/event/`,
        method: 'POST',
        body: queryArg.refWorkstationInsert
      })
    }),
    updateRefWorkstationRefWorkstationEventIdPut: build.mutation<
      UpdateRefWorkstationRefWorkstationEventIdPutApiResponse,
      UpdateRefWorkstationRefWorkstationEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_workstation/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refWorkstationUpdate
      })
    }),
    deleteRefWorkstationRefWorkstationEventIdDelete: build.mutation<
      DeleteRefWorkstationRefWorkstationEventIdDeleteApiResponse,
      DeleteRefWorkstationRefWorkstationEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_workstation/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefWorkstationRefWorkstationEventIdGet: build.query<
      GetRefWorkstationRefWorkstationEventIdGetApiResponse,
      GetRefWorkstationRefWorkstationEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_workstation/event/${queryArg.id}`
      })
    }),
    createResAssetResAssetPost: build.mutation<
      CreateResAssetResAssetPostApiResponse,
      CreateResAssetResAssetPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/res_asset/`,
        method: 'POST',
        body: queryArg.resAssetInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllResAssetsResAssetGet: build.query<
      GetAllResAssetsResAssetGetApiResponse,
      GetAllResAssetsResAssetGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/res_asset/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateResAssetResAssetIdPut: build.mutation<
      UpdateResAssetResAssetIdPutApiResponse,
      UpdateResAssetResAssetIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/res_asset/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.resAssetUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteResAssetResAssetIdDelete: build.mutation<
      DeleteResAssetResAssetIdDeleteApiResponse,
      DeleteResAssetResAssetIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/res_asset/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getResAssetResAssetIdGet: build.query<
      GetResAssetResAssetIdGetApiResponse,
      GetResAssetResAssetIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/res_asset/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllResAssetEventGet: build.query<
      GetAllResAssetEventGetApiResponse,
      GetAllResAssetEventGetApiArg
    >({
      query: () => ({ url: `/res_asset/event/` })
    }),
    createResAssetResAssetEventPost: build.mutation<
      CreateResAssetResAssetEventPostApiResponse,
      CreateResAssetResAssetEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/res_asset/event/`,
        method: 'POST',
        body: queryArg.resAssetInsert
      })
    }),
    updateResAssetResAssetEventIdPut: build.mutation<
      UpdateResAssetResAssetEventIdPutApiResponse,
      UpdateResAssetResAssetEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/res_asset/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.resAssetUpdate
      })
    }),
    deleteResAssetResAssetEventIdDelete: build.mutation<
      DeleteResAssetResAssetEventIdDeleteApiResponse,
      DeleteResAssetResAssetEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/res_asset/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getResAssetResAssetEventIdGet: build.query<
      GetResAssetResAssetEventIdGetApiResponse,
      GetResAssetResAssetEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/res_asset/event/${queryArg.id}` })
    }),
    createSaasApiKeyAuditSaasApiKeyAuditPost: build.mutation<
      CreateSaasApiKeyAuditSaasApiKeyAuditPostApiResponse,
      CreateSaasApiKeyAuditSaasApiKeyAuditPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_api_key_audit/`,
        method: 'POST',
        body: queryArg.saasApiKeyAuditInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasApiKeyAuditsSaasApiKeyAuditGet: build.query<
      GetAllSaasApiKeyAuditsSaasApiKeyAuditGetApiResponse,
      GetAllSaasApiKeyAuditsSaasApiKeyAuditGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_api_key_audit/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSaasApiKeyAuditSaasApiKeyAuditIdPut: build.mutation<
      UpdateSaasApiKeyAuditSaasApiKeyAuditIdPutApiResponse,
      UpdateSaasApiKeyAuditSaasApiKeyAuditIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_api_key_audit/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasApiKeyAuditUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSaasApiKeyAuditSaasApiKeyAuditIdDelete: build.mutation<
      DeleteSaasApiKeyAuditSaasApiKeyAuditIdDeleteApiResponse,
      DeleteSaasApiKeyAuditSaasApiKeyAuditIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_api_key_audit/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSaasApiKeyAuditSaasApiKeyAuditIdGet: build.query<
      GetSaasApiKeyAuditSaasApiKeyAuditIdGetApiResponse,
      GetSaasApiKeyAuditSaasApiKeyAuditIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_api_key_audit/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasApiKeyAuditEventGet: build.query<
      GetAllSaasApiKeyAuditEventGetApiResponse,
      GetAllSaasApiKeyAuditEventGetApiArg
    >({
      query: () => ({ url: `/saas_api_key_audit/event/` })
    }),
    createSaasApiKeyAuditSaasApiKeyAuditEventPost: build.mutation<
      CreateSaasApiKeyAuditSaasApiKeyAuditEventPostApiResponse,
      CreateSaasApiKeyAuditSaasApiKeyAuditEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_api_key_audit/event/`,
        method: 'POST',
        body: queryArg.saasApiKeyAuditInsert
      })
    }),
    updateSaasApiKeyAuditSaasApiKeyAuditEventIdPut: build.mutation<
      UpdateSaasApiKeyAuditSaasApiKeyAuditEventIdPutApiResponse,
      UpdateSaasApiKeyAuditSaasApiKeyAuditEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_api_key_audit/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasApiKeyAuditUpdate
      })
    }),
    deleteSaasApiKeyAuditSaasApiKeyAuditEventIdDelete: build.mutation<
      DeleteSaasApiKeyAuditSaasApiKeyAuditEventIdDeleteApiResponse,
      DeleteSaasApiKeyAuditSaasApiKeyAuditEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_api_key_audit/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasApiKeyAuditSaasApiKeyAuditEventIdGet: build.query<
      GetSaasApiKeyAuditSaasApiKeyAuditEventIdGetApiResponse,
      GetSaasApiKeyAuditSaasApiKeyAuditEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_api_key_audit/event/${queryArg.id}`
      })
    }),
    createSaasChatsSaasChatsPost: build.mutation<
      CreateSaasChatsSaasChatsPostApiResponse,
      CreateSaasChatsSaasChatsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_chats/`,
        method: 'POST',
        body: queryArg.saasChatsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasChatssSaasChatsGet: build.query<
      GetAllSaasChatssSaasChatsGetApiResponse,
      GetAllSaasChatssSaasChatsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_chats/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSaasChatsSaasChatsIdPut: build.mutation<
      UpdateSaasChatsSaasChatsIdPutApiResponse,
      UpdateSaasChatsSaasChatsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_chats/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasChatsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSaasChatsSaasChatsIdDelete: build.mutation<
      DeleteSaasChatsSaasChatsIdDeleteApiResponse,
      DeleteSaasChatsSaasChatsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_chats/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSaasChatsSaasChatsIdGet: build.query<
      GetSaasChatsSaasChatsIdGetApiResponse,
      GetSaasChatsSaasChatsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_chats/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasChatsEventGet: build.query<
      GetAllSaasChatsEventGetApiResponse,
      GetAllSaasChatsEventGetApiArg
    >({
      query: () => ({ url: `/saas_chats/event/` })
    }),
    createSaasChatsSaasChatsEventPost: build.mutation<
      CreateSaasChatsSaasChatsEventPostApiResponse,
      CreateSaasChatsSaasChatsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_chats/event/`,
        method: 'POST',
        body: queryArg.saasChatsInsert
      })
    }),
    updateSaasChatsSaasChatsEventIdPut: build.mutation<
      UpdateSaasChatsSaasChatsEventIdPutApiResponse,
      UpdateSaasChatsSaasChatsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_chats/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasChatsUpdate
      })
    }),
    deleteSaasChatsSaasChatsEventIdDelete: build.mutation<
      DeleteSaasChatsSaasChatsEventIdDeleteApiResponse,
      DeleteSaasChatsSaasChatsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_chats/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasChatsSaasChatsEventIdGet: build.query<
      GetSaasChatsSaasChatsEventIdGetApiResponse,
      GetSaasChatsSaasChatsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_chats/event/${queryArg.id}` })
    }),
    createSaasCustomersSaasCustomersPost: build.mutation<
      CreateSaasCustomersSaasCustomersPostApiResponse,
      CreateSaasCustomersSaasCustomersPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_customers/`,
        method: 'POST',
        body: queryArg.saasCustomersInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasCustomerssSaasCustomersGet: build.query<
      GetAllSaasCustomerssSaasCustomersGetApiResponse,
      GetAllSaasCustomerssSaasCustomersGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_customers/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSaasCustomersSaasCustomersIdPut: build.mutation<
      UpdateSaasCustomersSaasCustomersIdPutApiResponse,
      UpdateSaasCustomersSaasCustomersIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_customers/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasCustomersUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSaasCustomersSaasCustomersIdDelete: build.mutation<
      DeleteSaasCustomersSaasCustomersIdDeleteApiResponse,
      DeleteSaasCustomersSaasCustomersIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_customers/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSaasCustomersSaasCustomersIdGet: build.query<
      GetSaasCustomersSaasCustomersIdGetApiResponse,
      GetSaasCustomersSaasCustomersIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_customers/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasCustomersEventGet: build.query<
      GetAllSaasCustomersEventGetApiResponse,
      GetAllSaasCustomersEventGetApiArg
    >({
      query: () => ({ url: `/saas_customers/event/` })
    }),
    createSaasCustomersSaasCustomersEventPost: build.mutation<
      CreateSaasCustomersSaasCustomersEventPostApiResponse,
      CreateSaasCustomersSaasCustomersEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_customers/event/`,
        method: 'POST',
        body: queryArg.saasCustomersInsert
      })
    }),
    updateSaasCustomersSaasCustomersEventIdPut: build.mutation<
      UpdateSaasCustomersSaasCustomersEventIdPutApiResponse,
      UpdateSaasCustomersSaasCustomersEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_customers/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasCustomersUpdate
      })
    }),
    deleteSaasCustomersSaasCustomersEventIdDelete: build.mutation<
      DeleteSaasCustomersSaasCustomersEventIdDeleteApiResponse,
      DeleteSaasCustomersSaasCustomersEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_customers/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasCustomersSaasCustomersEventIdGet: build.query<
      GetSaasCustomersSaasCustomersEventIdGetApiResponse,
      GetSaasCustomersSaasCustomersEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_customers/event/${queryArg.id}`
      })
    }),
    createSaasEntitySharesSaasEntitySharesPost: build.mutation<
      CreateSaasEntitySharesSaasEntitySharesPostApiResponse,
      CreateSaasEntitySharesSaasEntitySharesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_entity_shares/`,
        method: 'POST',
        body: queryArg.saasEntitySharesInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasEntitySharessSaasEntitySharesGet: build.query<
      GetAllSaasEntitySharessSaasEntitySharesGetApiResponse,
      GetAllSaasEntitySharessSaasEntitySharesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_entity_shares/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSaasEntitySharesSaasEntitySharesIdPut: build.mutation<
      UpdateSaasEntitySharesSaasEntitySharesIdPutApiResponse,
      UpdateSaasEntitySharesSaasEntitySharesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_entity_shares/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasEntitySharesUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSaasEntitySharesSaasEntitySharesIdDelete: build.mutation<
      DeleteSaasEntitySharesSaasEntitySharesIdDeleteApiResponse,
      DeleteSaasEntitySharesSaasEntitySharesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_entity_shares/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSaasEntitySharesSaasEntitySharesIdGet: build.query<
      GetSaasEntitySharesSaasEntitySharesIdGetApiResponse,
      GetSaasEntitySharesSaasEntitySharesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_entity_shares/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasEntitySharesEventGet: build.query<
      GetAllSaasEntitySharesEventGetApiResponse,
      GetAllSaasEntitySharesEventGetApiArg
    >({
      query: () => ({ url: `/saas_entity_shares/event/` })
    }),
    createSaasEntitySharesSaasEntitySharesEventPost: build.mutation<
      CreateSaasEntitySharesSaasEntitySharesEventPostApiResponse,
      CreateSaasEntitySharesSaasEntitySharesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_entity_shares/event/`,
        method: 'POST',
        body: queryArg.saasEntitySharesInsert
      })
    }),
    updateSaasEntitySharesSaasEntitySharesEventIdPut: build.mutation<
      UpdateSaasEntitySharesSaasEntitySharesEventIdPutApiResponse,
      UpdateSaasEntitySharesSaasEntitySharesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_entity_shares/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasEntitySharesUpdate
      })
    }),
    deleteSaasEntitySharesSaasEntitySharesEventIdDelete: build.mutation<
      DeleteSaasEntitySharesSaasEntitySharesEventIdDeleteApiResponse,
      DeleteSaasEntitySharesSaasEntitySharesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_entity_shares/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasEntitySharesSaasEntitySharesEventIdGet: build.query<
      GetSaasEntitySharesSaasEntitySharesEventIdGetApiResponse,
      GetSaasEntitySharesSaasEntitySharesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_entity_shares/event/${queryArg.id}`
      })
    }),
    createSaasFlexEntitySaasFlexEntityPost: build.mutation<
      CreateSaasFlexEntitySaasFlexEntityPostApiResponse,
      CreateSaasFlexEntitySaasFlexEntityPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_entity/`,
        method: 'POST',
        body: queryArg.saasFlexEntityInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasFlexEntitysSaasFlexEntityGet: build.query<
      GetAllSaasFlexEntitysSaasFlexEntityGetApiResponse,
      GetAllSaasFlexEntitysSaasFlexEntityGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_entity/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSaasFlexEntitySaasFlexEntityIdPut: build.mutation<
      UpdateSaasFlexEntitySaasFlexEntityIdPutApiResponse,
      UpdateSaasFlexEntitySaasFlexEntityIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_entity/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasFlexEntityUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSaasFlexEntitySaasFlexEntityIdDelete: build.mutation<
      DeleteSaasFlexEntitySaasFlexEntityIdDeleteApiResponse,
      DeleteSaasFlexEntitySaasFlexEntityIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_entity/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSaasFlexEntitySaasFlexEntityIdGet: build.query<
      GetSaasFlexEntitySaasFlexEntityIdGetApiResponse,
      GetSaasFlexEntitySaasFlexEntityIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_entity/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasFlexEntityEventGet: build.query<
      GetAllSaasFlexEntityEventGetApiResponse,
      GetAllSaasFlexEntityEventGetApiArg
    >({
      query: () => ({ url: `/saas_flex_entity/event/` })
    }),
    createSaasFlexEntitySaasFlexEntityEventPost: build.mutation<
      CreateSaasFlexEntitySaasFlexEntityEventPostApiResponse,
      CreateSaasFlexEntitySaasFlexEntityEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_entity/event/`,
        method: 'POST',
        body: queryArg.saasFlexEntityInsert
      })
    }),
    updateSaasFlexEntitySaasFlexEntityEventIdPut: build.mutation<
      UpdateSaasFlexEntitySaasFlexEntityEventIdPutApiResponse,
      UpdateSaasFlexEntitySaasFlexEntityEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_entity/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasFlexEntityUpdate
      })
    }),
    deleteSaasFlexEntitySaasFlexEntityEventIdDelete: build.mutation<
      DeleteSaasFlexEntitySaasFlexEntityEventIdDeleteApiResponse,
      DeleteSaasFlexEntitySaasFlexEntityEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_entity/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasFlexEntitySaasFlexEntityEventIdGet: build.query<
      GetSaasFlexEntitySaasFlexEntityEventIdGetApiResponse,
      GetSaasFlexEntitySaasFlexEntityEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_entity/event/${queryArg.id}`
      })
    }),
    createSaasFlexFieldsSaasFlexFieldsPost: build.mutation<
      CreateSaasFlexFieldsSaasFlexFieldsPostApiResponse,
      CreateSaasFlexFieldsSaasFlexFieldsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_fields/`,
        method: 'POST',
        body: queryArg.saasFlexFieldsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasFlexFieldssSaasFlexFieldsGet: build.query<
      GetAllSaasFlexFieldssSaasFlexFieldsGetApiResponse,
      GetAllSaasFlexFieldssSaasFlexFieldsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_fields/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSaasFlexFieldsSaasFlexFieldsIdPut: build.mutation<
      UpdateSaasFlexFieldsSaasFlexFieldsIdPutApiResponse,
      UpdateSaasFlexFieldsSaasFlexFieldsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_fields/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasFlexFieldsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSaasFlexFieldsSaasFlexFieldsIdDelete: build.mutation<
      DeleteSaasFlexFieldsSaasFlexFieldsIdDeleteApiResponse,
      DeleteSaasFlexFieldsSaasFlexFieldsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_fields/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSaasFlexFieldsSaasFlexFieldsIdGet: build.query<
      GetSaasFlexFieldsSaasFlexFieldsIdGetApiResponse,
      GetSaasFlexFieldsSaasFlexFieldsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_fields/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasFlexFieldsEventGet: build.query<
      GetAllSaasFlexFieldsEventGetApiResponse,
      GetAllSaasFlexFieldsEventGetApiArg
    >({
      query: () => ({ url: `/saas_flex_fields/event/` })
    }),
    createSaasFlexFieldsSaasFlexFieldsEventPost: build.mutation<
      CreateSaasFlexFieldsSaasFlexFieldsEventPostApiResponse,
      CreateSaasFlexFieldsSaasFlexFieldsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_fields/event/`,
        method: 'POST',
        body: queryArg.saasFlexFieldsInsert
      })
    }),
    updateSaasFlexFieldsSaasFlexFieldsEventIdPut: build.mutation<
      UpdateSaasFlexFieldsSaasFlexFieldsEventIdPutApiResponse,
      UpdateSaasFlexFieldsSaasFlexFieldsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_fields/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasFlexFieldsUpdate
      })
    }),
    deleteSaasFlexFieldsSaasFlexFieldsEventIdDelete: build.mutation<
      DeleteSaasFlexFieldsSaasFlexFieldsEventIdDeleteApiResponse,
      DeleteSaasFlexFieldsSaasFlexFieldsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_fields/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasFlexFieldsSaasFlexFieldsEventIdGet: build.query<
      GetSaasFlexFieldsSaasFlexFieldsEventIdGetApiResponse,
      GetSaasFlexFieldsSaasFlexFieldsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_fields/event/${queryArg.id}`
      })
    }),
    createSaasFlexFieldValuesSaasFlexFieldValuesPost: build.mutation<
      CreateSaasFlexFieldValuesSaasFlexFieldValuesPostApiResponse,
      CreateSaasFlexFieldValuesSaasFlexFieldValuesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_field_values/`,
        method: 'POST',
        body: queryArg.saasFlexFieldValuesInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasFlexFieldValuessSaasFlexFieldValuesGet: build.query<
      GetAllSaasFlexFieldValuessSaasFlexFieldValuesGetApiResponse,
      GetAllSaasFlexFieldValuessSaasFlexFieldValuesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_field_values/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSaasFlexFieldValuesSaasFlexFieldValuesIdPut: build.mutation<
      UpdateSaasFlexFieldValuesSaasFlexFieldValuesIdPutApiResponse,
      UpdateSaasFlexFieldValuesSaasFlexFieldValuesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_field_values/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasFlexFieldValuesUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSaasFlexFieldValuesSaasFlexFieldValuesIdDelete: build.mutation<
      DeleteSaasFlexFieldValuesSaasFlexFieldValuesIdDeleteApiResponse,
      DeleteSaasFlexFieldValuesSaasFlexFieldValuesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_field_values/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSaasFlexFieldValuesSaasFlexFieldValuesIdGet: build.query<
      GetSaasFlexFieldValuesSaasFlexFieldValuesIdGetApiResponse,
      GetSaasFlexFieldValuesSaasFlexFieldValuesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_field_values/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasFlexFieldValuesEventGet: build.query<
      GetAllSaasFlexFieldValuesEventGetApiResponse,
      GetAllSaasFlexFieldValuesEventGetApiArg
    >({
      query: () => ({ url: `/saas_flex_field_values/event/` })
    }),
    createSaasFlexFieldValuesSaasFlexFieldValuesEventPost: build.mutation<
      CreateSaasFlexFieldValuesSaasFlexFieldValuesEventPostApiResponse,
      CreateSaasFlexFieldValuesSaasFlexFieldValuesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_field_values/event/`,
        method: 'POST',
        body: queryArg.saasFlexFieldValuesInsert
      })
    }),
    updateSaasFlexFieldValuesSaasFlexFieldValuesEventIdPut: build.mutation<
      UpdateSaasFlexFieldValuesSaasFlexFieldValuesEventIdPutApiResponse,
      UpdateSaasFlexFieldValuesSaasFlexFieldValuesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_field_values/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasFlexFieldValuesUpdate
      })
    }),
    deleteSaasFlexFieldValuesSaasFlexFieldValuesEventIdDelete: build.mutation<
      DeleteSaasFlexFieldValuesSaasFlexFieldValuesEventIdDeleteApiResponse,
      DeleteSaasFlexFieldValuesSaasFlexFieldValuesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_field_values/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasFlexFieldValuesSaasFlexFieldValuesEventIdGet: build.query<
      GetSaasFlexFieldValuesSaasFlexFieldValuesEventIdGetApiResponse,
      GetSaasFlexFieldValuesSaasFlexFieldValuesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_field_values/event/${queryArg.id}`
      })
    }),
    createSaasRefConfigurationsSaasRefConfigurationsPost: build.mutation<
      CreateSaasRefConfigurationsSaasRefConfigurationsPostApiResponse,
      CreateSaasRefConfigurationsSaasRefConfigurationsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_configurations/`,
        method: 'POST',
        body: queryArg.saasRefConfigurationsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRefConfigurationssSaasRefConfigurationsGet: build.query<
      GetAllSaasRefConfigurationssSaasRefConfigurationsGetApiResponse,
      GetAllSaasRefConfigurationssSaasRefConfigurationsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_configurations/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSaasRefConfigurationsSaasRefConfigurationsIdPut: build.mutation<
      UpdateSaasRefConfigurationsSaasRefConfigurationsIdPutApiResponse,
      UpdateSaasRefConfigurationsSaasRefConfigurationsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_configurations/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefConfigurationsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSaasRefConfigurationsSaasRefConfigurationsIdDelete: build.mutation<
      DeleteSaasRefConfigurationsSaasRefConfigurationsIdDeleteApiResponse,
      DeleteSaasRefConfigurationsSaasRefConfigurationsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_configurations/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSaasRefConfigurationsSaasRefConfigurationsIdGet: build.query<
      GetSaasRefConfigurationsSaasRefConfigurationsIdGetApiResponse,
      GetSaasRefConfigurationsSaasRefConfigurationsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_configurations/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRefConfigurationsEventGet: build.query<
      GetAllSaasRefConfigurationsEventGetApiResponse,
      GetAllSaasRefConfigurationsEventGetApiArg
    >({
      query: () => ({ url: `/saas_ref_configurations/event/` })
    }),
    createSaasRefConfigurationsSaasRefConfigurationsEventPost: build.mutation<
      CreateSaasRefConfigurationsSaasRefConfigurationsEventPostApiResponse,
      CreateSaasRefConfigurationsSaasRefConfigurationsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_configurations/event/`,
        method: 'POST',
        body: queryArg.saasRefConfigurationsInsert
      })
    }),
    updateSaasRefConfigurationsSaasRefConfigurationsEventIdPut: build.mutation<
      UpdateSaasRefConfigurationsSaasRefConfigurationsEventIdPutApiResponse,
      UpdateSaasRefConfigurationsSaasRefConfigurationsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_configurations/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefConfigurationsUpdate
      })
    }),
    deleteSaasRefConfigurationsSaasRefConfigurationsEventIdDelete:
      build.mutation<
        DeleteSaasRefConfigurationsSaasRefConfigurationsEventIdDeleteApiResponse,
        DeleteSaasRefConfigurationsSaasRefConfigurationsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_configurations/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSaasRefConfigurationsSaasRefConfigurationsEventIdGet: build.query<
      GetSaasRefConfigurationsSaasRefConfigurationsEventIdGetApiResponse,
      GetSaasRefConfigurationsSaasRefConfigurationsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_configurations/event/${queryArg.id}`
      })
    }),
    createSaasRefDocumentsSaasRefDocumentsPost: build.mutation<
      CreateSaasRefDocumentsSaasRefDocumentsPostApiResponse,
      CreateSaasRefDocumentsSaasRefDocumentsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_documents/`,
        method: 'POST',
        body: queryArg.saasRefDocumentsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRefDocumentssSaasRefDocumentsGet: build.query<
      GetAllSaasRefDocumentssSaasRefDocumentsGetApiResponse,
      GetAllSaasRefDocumentssSaasRefDocumentsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_documents/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSaasRefDocumentsSaasRefDocumentsIdPut: build.mutation<
      UpdateSaasRefDocumentsSaasRefDocumentsIdPutApiResponse,
      UpdateSaasRefDocumentsSaasRefDocumentsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_documents/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefDocumentsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSaasRefDocumentsSaasRefDocumentsIdDelete: build.mutation<
      DeleteSaasRefDocumentsSaasRefDocumentsIdDeleteApiResponse,
      DeleteSaasRefDocumentsSaasRefDocumentsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_documents/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSaasRefDocumentsSaasRefDocumentsIdGet: build.query<
      GetSaasRefDocumentsSaasRefDocumentsIdGetApiResponse,
      GetSaasRefDocumentsSaasRefDocumentsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_documents/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRefDocumentsEventGet: build.query<
      GetAllSaasRefDocumentsEventGetApiResponse,
      GetAllSaasRefDocumentsEventGetApiArg
    >({
      query: () => ({ url: `/saas_ref_documents/event/` })
    }),
    createSaasRefDocumentsSaasRefDocumentsEventPost: build.mutation<
      CreateSaasRefDocumentsSaasRefDocumentsEventPostApiResponse,
      CreateSaasRefDocumentsSaasRefDocumentsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_documents/event/`,
        method: 'POST',
        body: queryArg.saasRefDocumentsInsert
      })
    }),
    updateSaasRefDocumentsSaasRefDocumentsEventIdPut: build.mutation<
      UpdateSaasRefDocumentsSaasRefDocumentsEventIdPutApiResponse,
      UpdateSaasRefDocumentsSaasRefDocumentsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_documents/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefDocumentsUpdate
      })
    }),
    deleteSaasRefDocumentsSaasRefDocumentsEventIdDelete: build.mutation<
      DeleteSaasRefDocumentsSaasRefDocumentsEventIdDeleteApiResponse,
      DeleteSaasRefDocumentsSaasRefDocumentsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_documents/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefDocumentsSaasRefDocumentsEventIdGet: build.query<
      GetSaasRefDocumentsSaasRefDocumentsEventIdGetApiResponse,
      GetSaasRefDocumentsSaasRefDocumentsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_documents/event/${queryArg.id}`
      })
    }),
    createSaasRefFeaturesSaasRefFeaturesPost: build.mutation<
      CreateSaasRefFeaturesSaasRefFeaturesPostApiResponse,
      CreateSaasRefFeaturesSaasRefFeaturesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_features/`,
        method: 'POST',
        body: queryArg.saasRefFeaturesInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRefFeaturessSaasRefFeaturesGet: build.query<
      GetAllSaasRefFeaturessSaasRefFeaturesGetApiResponse,
      GetAllSaasRefFeaturessSaasRefFeaturesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_features/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSaasRefFeaturesSaasRefFeaturesIdPut: build.mutation<
      UpdateSaasRefFeaturesSaasRefFeaturesIdPutApiResponse,
      UpdateSaasRefFeaturesSaasRefFeaturesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_features/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefFeaturesUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSaasRefFeaturesSaasRefFeaturesIdDelete: build.mutation<
      DeleteSaasRefFeaturesSaasRefFeaturesIdDeleteApiResponse,
      DeleteSaasRefFeaturesSaasRefFeaturesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_features/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSaasRefFeaturesSaasRefFeaturesIdGet: build.query<
      GetSaasRefFeaturesSaasRefFeaturesIdGetApiResponse,
      GetSaasRefFeaturesSaasRefFeaturesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_features/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRefFeaturesEventGet: build.query<
      GetAllSaasRefFeaturesEventGetApiResponse,
      GetAllSaasRefFeaturesEventGetApiArg
    >({
      query: () => ({ url: `/saas_ref_features/event/` })
    }),
    createSaasRefFeaturesSaasRefFeaturesEventPost: build.mutation<
      CreateSaasRefFeaturesSaasRefFeaturesEventPostApiResponse,
      CreateSaasRefFeaturesSaasRefFeaturesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_features/event/`,
        method: 'POST',
        body: queryArg.saasRefFeaturesInsert
      })
    }),
    updateSaasRefFeaturesSaasRefFeaturesEventIdPut: build.mutation<
      UpdateSaasRefFeaturesSaasRefFeaturesEventIdPutApiResponse,
      UpdateSaasRefFeaturesSaasRefFeaturesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_features/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefFeaturesUpdate
      })
    }),
    deleteSaasRefFeaturesSaasRefFeaturesEventIdDelete: build.mutation<
      DeleteSaasRefFeaturesSaasRefFeaturesEventIdDeleteApiResponse,
      DeleteSaasRefFeaturesSaasRefFeaturesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_features/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefFeaturesSaasRefFeaturesEventIdGet: build.query<
      GetSaasRefFeaturesSaasRefFeaturesEventIdGetApiResponse,
      GetSaasRefFeaturesSaasRefFeaturesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_features/event/${queryArg.id}`
      })
    }),
    createSaasRefModulesSaasRefModulesPost: build.mutation<
      CreateSaasRefModulesSaasRefModulesPostApiResponse,
      CreateSaasRefModulesSaasRefModulesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_modules/`,
        method: 'POST',
        body: queryArg.saasRefModulesInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRefModulessSaasRefModulesGet: build.query<
      GetAllSaasRefModulessSaasRefModulesGetApiResponse,
      GetAllSaasRefModulessSaasRefModulesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_modules/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSaasRefModulesSaasRefModulesIdPut: build.mutation<
      UpdateSaasRefModulesSaasRefModulesIdPutApiResponse,
      UpdateSaasRefModulesSaasRefModulesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_modules/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefModulesUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSaasRefModulesSaasRefModulesIdDelete: build.mutation<
      DeleteSaasRefModulesSaasRefModulesIdDeleteApiResponse,
      DeleteSaasRefModulesSaasRefModulesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_modules/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSaasRefModulesSaasRefModulesIdGet: build.query<
      GetSaasRefModulesSaasRefModulesIdGetApiResponse,
      GetSaasRefModulesSaasRefModulesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_modules/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRefModulesEventGet: build.query<
      GetAllSaasRefModulesEventGetApiResponse,
      GetAllSaasRefModulesEventGetApiArg
    >({
      query: () => ({ url: `/saas_ref_modules/event/` })
    }),
    createSaasRefModulesSaasRefModulesEventPost: build.mutation<
      CreateSaasRefModulesSaasRefModulesEventPostApiResponse,
      CreateSaasRefModulesSaasRefModulesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_modules/event/`,
        method: 'POST',
        body: queryArg.saasRefModulesInsert
      })
    }),
    updateSaasRefModulesSaasRefModulesEventIdPut: build.mutation<
      UpdateSaasRefModulesSaasRefModulesEventIdPutApiResponse,
      UpdateSaasRefModulesSaasRefModulesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_modules/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefModulesUpdate
      })
    }),
    deleteSaasRefModulesSaasRefModulesEventIdDelete: build.mutation<
      DeleteSaasRefModulesSaasRefModulesEventIdDeleteApiResponse,
      DeleteSaasRefModulesSaasRefModulesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_modules/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefModulesSaasRefModulesEventIdGet: build.query<
      GetSaasRefModulesSaasRefModulesEventIdGetApiResponse,
      GetSaasRefModulesSaasRefModulesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_modules/event/${queryArg.id}`
      })
    }),
    createSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesPost:
      build.mutation<
        CreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesPostApiResponse,
        CreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_subscription_features/`,
          method: 'POST',
          body: queryArg.saasRefSubscriptionFeaturesInsert,
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    getAllSaasRefSubscriptionFeaturessSaasRefSubscriptionFeaturesGet:
      build.query<
        GetAllSaasRefSubscriptionFeaturessSaasRefSubscriptionFeaturesGetApiResponse,
        GetAllSaasRefSubscriptionFeaturessSaasRefSubscriptionFeaturesGetApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_subscription_features/`,
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    updateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdPut:
      build.mutation<
        UpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdPutApiResponse,
        UpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_subscription_features/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.saasRefSubscriptionFeaturesUpdate,
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    deleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdDelete:
      build.mutation<
        DeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdDeleteApiResponse,
        DeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_subscription_features/${queryArg.id}`,
          method: 'DELETE',
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    getSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdGet: build.query<
      GetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdGetApiResponse,
      GetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_subscription_features/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRefSubscriptionFeaturesEventGet: build.query<
      GetAllSaasRefSubscriptionFeaturesEventGetApiResponse,
      GetAllSaasRefSubscriptionFeaturesEventGetApiArg
    >({
      query: () => ({ url: `/saas_ref_subscription_features/event/` })
    }),
    createSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventPost:
      build.mutation<
        CreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventPostApiResponse,
        CreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_subscription_features/event/`,
          method: 'POST',
          body: queryArg.saasRefSubscriptionFeaturesInsert
        })
      }),
    updateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdPut:
      build.mutation<
        UpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdPutApiResponse,
        UpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_subscription_features/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.saasRefSubscriptionFeaturesUpdate
        })
      }),
    deleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdDelete:
      build.mutation<
        DeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdDeleteApiResponse,
        DeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_subscription_features/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdGet:
      build.query<
        GetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdGetApiResponse,
        GetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdGetApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_subscription_features/event/${queryArg.id}`
        })
      }),
    createSaasRefTenantCurrenciesSaasRefTenantCurrenciesPost: build.mutation<
      CreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesPostApiResponse,
      CreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_tenant_currencies/`,
        method: 'POST',
        body: queryArg.saasRefTenantCurrenciesInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRefTenantCurrenciessSaasRefTenantCurrenciesGet: build.query<
      GetAllSaasRefTenantCurrenciessSaasRefTenantCurrenciesGetApiResponse,
      GetAllSaasRefTenantCurrenciessSaasRefTenantCurrenciesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_tenant_currencies/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdPut: build.mutation<
      UpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdPutApiResponse,
      UpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_tenant_currencies/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefTenantCurrenciesUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdDelete:
      build.mutation<
        DeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdDeleteApiResponse,
        DeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_tenant_currencies/${queryArg.id}`,
          method: 'DELETE',
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    getSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdGet: build.query<
      GetSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdGetApiResponse,
      GetSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_tenant_currencies/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRefTenantCurrenciesEventGet: build.query<
      GetAllSaasRefTenantCurrenciesEventGetApiResponse,
      GetAllSaasRefTenantCurrenciesEventGetApiArg
    >({
      query: () => ({ url: `/saas_ref_tenant_currencies/event/` })
    }),
    createSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventPost:
      build.mutation<
        CreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventPostApiResponse,
        CreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_tenant_currencies/event/`,
          method: 'POST',
          body: queryArg.saasRefTenantCurrenciesInsert
        })
      }),
    updateSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdPut:
      build.mutation<
        UpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdPutApiResponse,
        UpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_tenant_currencies/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.saasRefTenantCurrenciesUpdate
        })
      }),
    deleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdDelete:
      build.mutation<
        DeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdDeleteApiResponse,
        DeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_tenant_currencies/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdGet: build.query<
      GetSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdGetApiResponse,
      GetSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_tenant_currencies/event/${queryArg.id}`
      })
    }),
    createSaasRefWorkflowsSaasRefWorkflowsPost: build.mutation<
      CreateSaasRefWorkflowsSaasRefWorkflowsPostApiResponse,
      CreateSaasRefWorkflowsSaasRefWorkflowsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_workflows/`,
        method: 'POST',
        body: queryArg.saasRefWorkflowsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRefWorkflowssSaasRefWorkflowsGet: build.query<
      GetAllSaasRefWorkflowssSaasRefWorkflowsGetApiResponse,
      GetAllSaasRefWorkflowssSaasRefWorkflowsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_workflows/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSaasRefWorkflowsSaasRefWorkflowsIdPut: build.mutation<
      UpdateSaasRefWorkflowsSaasRefWorkflowsIdPutApiResponse,
      UpdateSaasRefWorkflowsSaasRefWorkflowsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_workflows/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefWorkflowsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSaasRefWorkflowsSaasRefWorkflowsIdDelete: build.mutation<
      DeleteSaasRefWorkflowsSaasRefWorkflowsIdDeleteApiResponse,
      DeleteSaasRefWorkflowsSaasRefWorkflowsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_workflows/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSaasRefWorkflowsSaasRefWorkflowsIdGet: build.query<
      GetSaasRefWorkflowsSaasRefWorkflowsIdGetApiResponse,
      GetSaasRefWorkflowsSaasRefWorkflowsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_workflows/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRefWorkflowsEventGet: build.query<
      GetAllSaasRefWorkflowsEventGetApiResponse,
      GetAllSaasRefWorkflowsEventGetApiArg
    >({
      query: () => ({ url: `/saas_ref_workflows/event/` })
    }),
    createSaasRefWorkflowsSaasRefWorkflowsEventPost: build.mutation<
      CreateSaasRefWorkflowsSaasRefWorkflowsEventPostApiResponse,
      CreateSaasRefWorkflowsSaasRefWorkflowsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_workflows/event/`,
        method: 'POST',
        body: queryArg.saasRefWorkflowsInsert
      })
    }),
    updateSaasRefWorkflowsSaasRefWorkflowsEventIdPut: build.mutation<
      UpdateSaasRefWorkflowsSaasRefWorkflowsEventIdPutApiResponse,
      UpdateSaasRefWorkflowsSaasRefWorkflowsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_workflows/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefWorkflowsUpdate
      })
    }),
    deleteSaasRefWorkflowsSaasRefWorkflowsEventIdDelete: build.mutation<
      DeleteSaasRefWorkflowsSaasRefWorkflowsEventIdDeleteApiResponse,
      DeleteSaasRefWorkflowsSaasRefWorkflowsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_workflows/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefWorkflowsSaasRefWorkflowsEventIdGet: build.query<
      GetSaasRefWorkflowsSaasRefWorkflowsEventIdGetApiResponse,
      GetSaasRefWorkflowsSaasRefWorkflowsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_workflows/event/${queryArg.id}`
      })
    }),
    createSaasRolePermissionSaasRolePermissionPost: build.mutation<
      CreateSaasRolePermissionSaasRolePermissionPostApiResponse,
      CreateSaasRolePermissionSaasRolePermissionPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_role_permission/`,
        method: 'POST',
        body: queryArg.saasRolePermissionInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRolePermissionsSaasRolePermissionGet: build.query<
      GetAllSaasRolePermissionsSaasRolePermissionGetApiResponse,
      GetAllSaasRolePermissionsSaasRolePermissionGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_role_permission/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSaasRolePermissionSaasRolePermissionIdPut: build.mutation<
      UpdateSaasRolePermissionSaasRolePermissionIdPutApiResponse,
      UpdateSaasRolePermissionSaasRolePermissionIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_role_permission/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRolePermissionUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSaasRolePermissionSaasRolePermissionIdDelete: build.mutation<
      DeleteSaasRolePermissionSaasRolePermissionIdDeleteApiResponse,
      DeleteSaasRolePermissionSaasRolePermissionIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_role_permission/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSaasRolePermissionSaasRolePermissionIdGet: build.query<
      GetSaasRolePermissionSaasRolePermissionIdGetApiResponse,
      GetSaasRolePermissionSaasRolePermissionIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_role_permission/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSaasRolePermissionEventGet: build.query<
      GetAllSaasRolePermissionEventGetApiResponse,
      GetAllSaasRolePermissionEventGetApiArg
    >({
      query: () => ({ url: `/saas_role_permission/event/` })
    }),
    createSaasRolePermissionSaasRolePermissionEventPost: build.mutation<
      CreateSaasRolePermissionSaasRolePermissionEventPostApiResponse,
      CreateSaasRolePermissionSaasRolePermissionEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_role_permission/event/`,
        method: 'POST',
        body: queryArg.saasRolePermissionInsert
      })
    }),
    updateSaasRolePermissionSaasRolePermissionEventIdPut: build.mutation<
      UpdateSaasRolePermissionSaasRolePermissionEventIdPutApiResponse,
      UpdateSaasRolePermissionSaasRolePermissionEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_role_permission/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRolePermissionUpdate
      })
    }),
    deleteSaasRolePermissionSaasRolePermissionEventIdDelete: build.mutation<
      DeleteSaasRolePermissionSaasRolePermissionEventIdDeleteApiResponse,
      DeleteSaasRolePermissionSaasRolePermissionEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_role_permission/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRolePermissionSaasRolePermissionEventIdGet: build.query<
      GetSaasRolePermissionSaasRolePermissionEventIdGetApiResponse,
      GetSaasRolePermissionSaasRolePermissionEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_role_permission/event/${queryArg.id}`
      })
    }),
    createSetAssetTypeSetAssetTypePost: build.mutation<
      CreateSetAssetTypeSetAssetTypePostApiResponse,
      CreateSetAssetTypeSetAssetTypePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_asset_type/`,
        method: 'POST',
        body: queryArg.setAssetTypeInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAssetTypesSetAssetTypeGet: build.query<
      GetAllSetAssetTypesSetAssetTypeGetApiResponse,
      GetAllSetAssetTypesSetAssetTypeGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_asset_type/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSetAssetTypeSetAssetTypeIdPut: build.mutation<
      UpdateSetAssetTypeSetAssetTypeIdPutApiResponse,
      UpdateSetAssetTypeSetAssetTypeIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_asset_type/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAssetTypeUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSetAssetTypeSetAssetTypeIdDelete: build.mutation<
      DeleteSetAssetTypeSetAssetTypeIdDeleteApiResponse,
      DeleteSetAssetTypeSetAssetTypeIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_asset_type/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSetAssetTypeSetAssetTypeIdGet: build.query<
      GetSetAssetTypeSetAssetTypeIdGetApiResponse,
      GetSetAssetTypeSetAssetTypeIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_asset_type/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAssetTypeEventGet: build.query<
      GetAllSetAssetTypeEventGetApiResponse,
      GetAllSetAssetTypeEventGetApiArg
    >({
      query: () => ({ url: `/set_asset_type/event/` })
    }),
    createSetAssetTypeSetAssetTypeEventPost: build.mutation<
      CreateSetAssetTypeSetAssetTypeEventPostApiResponse,
      CreateSetAssetTypeSetAssetTypeEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_asset_type/event/`,
        method: 'POST',
        body: queryArg.setAssetTypeInsert
      })
    }),
    updateSetAssetTypeSetAssetTypeEventIdPut: build.mutation<
      UpdateSetAssetTypeSetAssetTypeEventIdPutApiResponse,
      UpdateSetAssetTypeSetAssetTypeEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_asset_type/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAssetTypeUpdate
      })
    }),
    deleteSetAssetTypeSetAssetTypeEventIdDelete: build.mutation<
      DeleteSetAssetTypeSetAssetTypeEventIdDeleteApiResponse,
      DeleteSetAssetTypeSetAssetTypeEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_asset_type/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAssetTypeSetAssetTypeEventIdGet: build.query<
      GetSetAssetTypeSetAssetTypeEventIdGetApiResponse,
      GetSetAssetTypeSetAssetTypeEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_asset_type/event/${queryArg.id}`
      })
    }),
    createSetAstActivityNamesSetAstActivityNamesPost: build.mutation<
      CreateSetAstActivityNamesSetAstActivityNamesPostApiResponse,
      CreateSetAstActivityNamesSetAstActivityNamesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_activity_names/`,
        method: 'POST',
        body: queryArg.setAstActivityNamesInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAstActivityNamessSetAstActivityNamesGet: build.query<
      GetAllSetAstActivityNamessSetAstActivityNamesGetApiResponse,
      GetAllSetAstActivityNamessSetAstActivityNamesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_activity_names/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSetAstActivityNamesSetAstActivityNamesIdPut: build.mutation<
      UpdateSetAstActivityNamesSetAstActivityNamesIdPutApiResponse,
      UpdateSetAstActivityNamesSetAstActivityNamesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_activity_names/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstActivityNamesUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSetAstActivityNamesSetAstActivityNamesIdDelete: build.mutation<
      DeleteSetAstActivityNamesSetAstActivityNamesIdDeleteApiResponse,
      DeleteSetAstActivityNamesSetAstActivityNamesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_activity_names/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSetAstActivityNamesSetAstActivityNamesIdGet: build.query<
      GetSetAstActivityNamesSetAstActivityNamesIdGetApiResponse,
      GetSetAstActivityNamesSetAstActivityNamesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_activity_names/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAstActivityNamesEventGet: build.query<
      GetAllSetAstActivityNamesEventGetApiResponse,
      GetAllSetAstActivityNamesEventGetApiArg
    >({
      query: () => ({ url: `/set_ast_activity_names/event/` })
    }),
    createSetAstActivityNamesSetAstActivityNamesEventPost: build.mutation<
      CreateSetAstActivityNamesSetAstActivityNamesEventPostApiResponse,
      CreateSetAstActivityNamesSetAstActivityNamesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_activity_names/event/`,
        method: 'POST',
        body: queryArg.setAstActivityNamesInsert
      })
    }),
    updateSetAstActivityNamesSetAstActivityNamesEventIdPut: build.mutation<
      UpdateSetAstActivityNamesSetAstActivityNamesEventIdPutApiResponse,
      UpdateSetAstActivityNamesSetAstActivityNamesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_activity_names/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstActivityNamesUpdate
      })
    }),
    deleteSetAstActivityNamesSetAstActivityNamesEventIdDelete: build.mutation<
      DeleteSetAstActivityNamesSetAstActivityNamesEventIdDeleteApiResponse,
      DeleteSetAstActivityNamesSetAstActivityNamesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_activity_names/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstActivityNamesSetAstActivityNamesEventIdGet: build.query<
      GetSetAstActivityNamesSetAstActivityNamesEventIdGetApiResponse,
      GetSetAstActivityNamesSetAstActivityNamesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_activity_names/event/${queryArg.id}`
      })
    }),
    createSetAstAssetTypeGroupSetAstAssetTypeGroupPost: build.mutation<
      CreateSetAstAssetTypeGroupSetAstAssetTypeGroupPostApiResponse,
      CreateSetAstAssetTypeGroupSetAstAssetTypeGroupPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_asset_type_group/`,
        method: 'POST',
        body: queryArg.setAstAssetTypeGroupInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAstAssetTypeGroupsSetAstAssetTypeGroupGet: build.query<
      GetAllSetAstAssetTypeGroupsSetAstAssetTypeGroupGetApiResponse,
      GetAllSetAstAssetTypeGroupsSetAstAssetTypeGroupGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_asset_type_group/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSetAstAssetTypeGroupSetAstAssetTypeGroupIdPut: build.mutation<
      UpdateSetAstAssetTypeGroupSetAstAssetTypeGroupIdPutApiResponse,
      UpdateSetAstAssetTypeGroupSetAstAssetTypeGroupIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_asset_type_group/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstAssetTypeGroupUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSetAstAssetTypeGroupSetAstAssetTypeGroupIdDelete: build.mutation<
      DeleteSetAstAssetTypeGroupSetAstAssetTypeGroupIdDeleteApiResponse,
      DeleteSetAstAssetTypeGroupSetAstAssetTypeGroupIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_asset_type_group/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSetAstAssetTypeGroupSetAstAssetTypeGroupIdGet: build.query<
      GetSetAstAssetTypeGroupSetAstAssetTypeGroupIdGetApiResponse,
      GetSetAstAssetTypeGroupSetAstAssetTypeGroupIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_asset_type_group/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAstAssetTypeGroupEventGet: build.query<
      GetAllSetAstAssetTypeGroupEventGetApiResponse,
      GetAllSetAstAssetTypeGroupEventGetApiArg
    >({
      query: () => ({ url: `/set_ast_asset_type_group/event/` })
    }),
    createSetAstAssetTypeGroupSetAstAssetTypeGroupEventPost: build.mutation<
      CreateSetAstAssetTypeGroupSetAstAssetTypeGroupEventPostApiResponse,
      CreateSetAstAssetTypeGroupSetAstAssetTypeGroupEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_asset_type_group/event/`,
        method: 'POST',
        body: queryArg.setAstAssetTypeGroupInsert
      })
    }),
    updateSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdPut: build.mutation<
      UpdateSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdPutApiResponse,
      UpdateSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_asset_type_group/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstAssetTypeGroupUpdate
      })
    }),
    deleteSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdDelete: build.mutation<
      DeleteSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdDeleteApiResponse,
      DeleteSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_asset_type_group/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdGet: build.query<
      GetSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdGetApiResponse,
      GetSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_asset_type_group/event/${queryArg.id}`
      })
    }),
    createSetAstOwnerCategorySetAstOwnerCategoryPost: build.mutation<
      CreateSetAstOwnerCategorySetAstOwnerCategoryPostApiResponse,
      CreateSetAstOwnerCategorySetAstOwnerCategoryPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_owner_category/`,
        method: 'POST',
        body: queryArg.setAstOwnerCategoryInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAstOwnerCategorysSetAstOwnerCategoryGet: build.query<
      GetAllSetAstOwnerCategorysSetAstOwnerCategoryGetApiResponse,
      GetAllSetAstOwnerCategorysSetAstOwnerCategoryGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_owner_category/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSetAstOwnerCategorySetAstOwnerCategoryIdPut: build.mutation<
      UpdateSetAstOwnerCategorySetAstOwnerCategoryIdPutApiResponse,
      UpdateSetAstOwnerCategorySetAstOwnerCategoryIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_owner_category/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstOwnerCategoryUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSetAstOwnerCategorySetAstOwnerCategoryIdDelete: build.mutation<
      DeleteSetAstOwnerCategorySetAstOwnerCategoryIdDeleteApiResponse,
      DeleteSetAstOwnerCategorySetAstOwnerCategoryIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_owner_category/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSetAstOwnerCategorySetAstOwnerCategoryIdGet: build.query<
      GetSetAstOwnerCategorySetAstOwnerCategoryIdGetApiResponse,
      GetSetAstOwnerCategorySetAstOwnerCategoryIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_owner_category/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAstOwnerCategoryEventGet: build.query<
      GetAllSetAstOwnerCategoryEventGetApiResponse,
      GetAllSetAstOwnerCategoryEventGetApiArg
    >({
      query: () => ({ url: `/set_ast_owner_category/event/` })
    }),
    createSetAstOwnerCategorySetAstOwnerCategoryEventPost: build.mutation<
      CreateSetAstOwnerCategorySetAstOwnerCategoryEventPostApiResponse,
      CreateSetAstOwnerCategorySetAstOwnerCategoryEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_owner_category/event/`,
        method: 'POST',
        body: queryArg.setAstOwnerCategoryInsert
      })
    }),
    updateSetAstOwnerCategorySetAstOwnerCategoryEventIdPut: build.mutation<
      UpdateSetAstOwnerCategorySetAstOwnerCategoryEventIdPutApiResponse,
      UpdateSetAstOwnerCategorySetAstOwnerCategoryEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_owner_category/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstOwnerCategoryUpdate
      })
    }),
    deleteSetAstOwnerCategorySetAstOwnerCategoryEventIdDelete: build.mutation<
      DeleteSetAstOwnerCategorySetAstOwnerCategoryEventIdDeleteApiResponse,
      DeleteSetAstOwnerCategorySetAstOwnerCategoryEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_owner_category/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstOwnerCategorySetAstOwnerCategoryEventIdGet: build.query<
      GetSetAstOwnerCategorySetAstOwnerCategoryEventIdGetApiResponse,
      GetSetAstOwnerCategorySetAstOwnerCategoryEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_owner_category/event/${queryArg.id}`
      })
    }),
    createSetAstSiteActivitySetAstSiteActivityPost: build.mutation<
      CreateSetAstSiteActivitySetAstSiteActivityPostApiResponse,
      CreateSetAstSiteActivitySetAstSiteActivityPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_site_activity/`,
        method: 'POST',
        body: queryArg.setAstSiteActivityInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAstSiteActivitysSetAstSiteActivityGet: build.query<
      GetAllSetAstSiteActivitysSetAstSiteActivityGetApiResponse,
      GetAllSetAstSiteActivitysSetAstSiteActivityGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_site_activity/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSetAstSiteActivitySetAstSiteActivityIdPut: build.mutation<
      UpdateSetAstSiteActivitySetAstSiteActivityIdPutApiResponse,
      UpdateSetAstSiteActivitySetAstSiteActivityIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_site_activity/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstSiteActivityUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSetAstSiteActivitySetAstSiteActivityIdDelete: build.mutation<
      DeleteSetAstSiteActivitySetAstSiteActivityIdDeleteApiResponse,
      DeleteSetAstSiteActivitySetAstSiteActivityIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_site_activity/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSetAstSiteActivitySetAstSiteActivityIdGet: build.query<
      GetSetAstSiteActivitySetAstSiteActivityIdGetApiResponse,
      GetSetAstSiteActivitySetAstSiteActivityIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_site_activity/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAstSiteActivityEventGet: build.query<
      GetAllSetAstSiteActivityEventGetApiResponse,
      GetAllSetAstSiteActivityEventGetApiArg
    >({
      query: () => ({ url: `/set_ast_site_activity/event/` })
    }),
    createSetAstSiteActivitySetAstSiteActivityEventPost: build.mutation<
      CreateSetAstSiteActivitySetAstSiteActivityEventPostApiResponse,
      CreateSetAstSiteActivitySetAstSiteActivityEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_site_activity/event/`,
        method: 'POST',
        body: queryArg.setAstSiteActivityInsert
      })
    }),
    updateSetAstSiteActivitySetAstSiteActivityEventIdPut: build.mutation<
      UpdateSetAstSiteActivitySetAstSiteActivityEventIdPutApiResponse,
      UpdateSetAstSiteActivitySetAstSiteActivityEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_site_activity/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstSiteActivityUpdate
      })
    }),
    deleteSetAstSiteActivitySetAstSiteActivityEventIdDelete: build.mutation<
      DeleteSetAstSiteActivitySetAstSiteActivityEventIdDeleteApiResponse,
      DeleteSetAstSiteActivitySetAstSiteActivityEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_site_activity/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstSiteActivitySetAstSiteActivityEventIdGet: build.query<
      GetSetAstSiteActivitySetAstSiteActivityEventIdGetApiResponse,
      GetSetAstSiteActivitySetAstSiteActivityEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_site_activity/event/${queryArg.id}`
      })
    }),
    createSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPost:
      build.mutation<
        CreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPostApiResponse,
        CreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_ast_sub_assembly_category/`,
          method: 'POST',
          body: queryArg.setAstSubAssemblyCategoryInsert,
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    getAllSetAstSubAssemblyCategorysSetAstSubAssemblyCategoryGet: build.query<
      GetAllSetAstSubAssemblyCategorysSetAstSubAssemblyCategoryGetApiResponse,
      GetAllSetAstSubAssemblyCategorysSetAstSubAssemblyCategoryGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_sub_assembly_category/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdPut:
      build.mutation<
        UpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdPutApiResponse,
        UpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_ast_sub_assembly_category/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.setAstSubAssemblyCategoryUpdate,
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    deleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDelete:
      build.mutation<
        DeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteApiResponse,
        DeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_ast_sub_assembly_category/${queryArg.id}`,
          method: 'DELETE',
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    getSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGet: build.query<
      GetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGetApiResponse,
      GetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_sub_assembly_category/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAstSubAssemblyCategoryEventGet: build.query<
      GetAllSetAstSubAssemblyCategoryEventGetApiResponse,
      GetAllSetAstSubAssemblyCategoryEventGetApiArg
    >({
      query: () => ({ url: `/set_ast_sub_assembly_category/event/` })
    }),
    createSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventPost:
      build.mutation<
        CreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventPostApiResponse,
        CreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_ast_sub_assembly_category/event/`,
          method: 'POST',
          body: queryArg.setAstSubAssemblyCategoryInsert
        })
      }),
    updateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdPut:
      build.mutation<
        UpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdPutApiResponse,
        UpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_ast_sub_assembly_category/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.setAstSubAssemblyCategoryUpdate
        })
      }),
    deleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdDelete:
      build.mutation<
        DeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdDeleteApiResponse,
        DeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_ast_sub_assembly_category/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdGet:
      build.query<
        GetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdGetApiResponse,
        GetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdGetApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_ast_sub_assembly_category/event/${queryArg.id}`
        })
      }),
    createSetAstTicketTypeSetAstTicketTypePost: build.mutation<
      CreateSetAstTicketTypeSetAstTicketTypePostApiResponse,
      CreateSetAstTicketTypeSetAstTicketTypePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_ticket_type/`,
        method: 'POST',
        body: queryArg.setAstTicketTypeInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAstTicketTypesSetAstTicketTypeGet: build.query<
      GetAllSetAstTicketTypesSetAstTicketTypeGetApiResponse,
      GetAllSetAstTicketTypesSetAstTicketTypeGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_ticket_type/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSetAstTicketTypeSetAstTicketTypeIdPut: build.mutation<
      UpdateSetAstTicketTypeSetAstTicketTypeIdPutApiResponse,
      UpdateSetAstTicketTypeSetAstTicketTypeIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_ticket_type/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstTicketTypeUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSetAstTicketTypeSetAstTicketTypeIdDelete: build.mutation<
      DeleteSetAstTicketTypeSetAstTicketTypeIdDeleteApiResponse,
      DeleteSetAstTicketTypeSetAstTicketTypeIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_ticket_type/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSetAstTicketTypeSetAstTicketTypeIdGet: build.query<
      GetSetAstTicketTypeSetAstTicketTypeIdGetApiResponse,
      GetSetAstTicketTypeSetAstTicketTypeIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_ticket_type/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAstTicketTypeEventGet: build.query<
      GetAllSetAstTicketTypeEventGetApiResponse,
      GetAllSetAstTicketTypeEventGetApiArg
    >({
      query: () => ({ url: `/set_ast_ticket_type/event/` })
    }),
    createSetAstTicketTypeSetAstTicketTypeEventPost: build.mutation<
      CreateSetAstTicketTypeSetAstTicketTypeEventPostApiResponse,
      CreateSetAstTicketTypeSetAstTicketTypeEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_ticket_type/event/`,
        method: 'POST',
        body: queryArg.setAstTicketTypeInsert
      })
    }),
    updateSetAstTicketTypeSetAstTicketTypeEventIdPut: build.mutation<
      UpdateSetAstTicketTypeSetAstTicketTypeEventIdPutApiResponse,
      UpdateSetAstTicketTypeSetAstTicketTypeEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_ticket_type/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstTicketTypeUpdate
      })
    }),
    deleteSetAstTicketTypeSetAstTicketTypeEventIdDelete: build.mutation<
      DeleteSetAstTicketTypeSetAstTicketTypeEventIdDeleteApiResponse,
      DeleteSetAstTicketTypeSetAstTicketTypeEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_ticket_type/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstTicketTypeSetAstTicketTypeEventIdGet: build.query<
      GetSetAstTicketTypeSetAstTicketTypeEventIdGetApiResponse,
      GetSetAstTicketTypeSetAstTicketTypeEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_ticket_type/event/${queryArg.id}`
      })
    }),
    createSetAstTransactionDelaySetAstTransactionDelayPost: build.mutation<
      CreateSetAstTransactionDelaySetAstTransactionDelayPostApiResponse,
      CreateSetAstTransactionDelaySetAstTransactionDelayPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_transaction_delay/`,
        method: 'POST',
        body: queryArg.setAstTransactionDelayInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAstTransactionDelaysSetAstTransactionDelayGet: build.query<
      GetAllSetAstTransactionDelaysSetAstTransactionDelayGetApiResponse,
      GetAllSetAstTransactionDelaysSetAstTransactionDelayGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_transaction_delay/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSetAstTransactionDelaySetAstTransactionDelayIdPut: build.mutation<
      UpdateSetAstTransactionDelaySetAstTransactionDelayIdPutApiResponse,
      UpdateSetAstTransactionDelaySetAstTransactionDelayIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_transaction_delay/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstTransactionDelayUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSetAstTransactionDelaySetAstTransactionDelayIdDelete: build.mutation<
      DeleteSetAstTransactionDelaySetAstTransactionDelayIdDeleteApiResponse,
      DeleteSetAstTransactionDelaySetAstTransactionDelayIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_transaction_delay/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSetAstTransactionDelaySetAstTransactionDelayIdGet: build.query<
      GetSetAstTransactionDelaySetAstTransactionDelayIdGetApiResponse,
      GetSetAstTransactionDelaySetAstTransactionDelayIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_transaction_delay/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetAstTransactionDelayEventGet: build.query<
      GetAllSetAstTransactionDelayEventGetApiResponse,
      GetAllSetAstTransactionDelayEventGetApiArg
    >({
      query: () => ({ url: `/set_ast_transaction_delay/event/` })
    }),
    createSetAstTransactionDelaySetAstTransactionDelayEventPost: build.mutation<
      CreateSetAstTransactionDelaySetAstTransactionDelayEventPostApiResponse,
      CreateSetAstTransactionDelaySetAstTransactionDelayEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_transaction_delay/event/`,
        method: 'POST',
        body: queryArg.setAstTransactionDelayInsert
      })
    }),
    updateSetAstTransactionDelaySetAstTransactionDelayEventIdPut:
      build.mutation<
        UpdateSetAstTransactionDelaySetAstTransactionDelayEventIdPutApiResponse,
        UpdateSetAstTransactionDelaySetAstTransactionDelayEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_ast_transaction_delay/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.setAstTransactionDelayUpdate
        })
      }),
    deleteSetAstTransactionDelaySetAstTransactionDelayEventIdDelete:
      build.mutation<
        DeleteSetAstTransactionDelaySetAstTransactionDelayEventIdDeleteApiResponse,
        DeleteSetAstTransactionDelaySetAstTransactionDelayEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_ast_transaction_delay/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSetAstTransactionDelaySetAstTransactionDelayEventIdGet: build.query<
      GetSetAstTransactionDelaySetAstTransactionDelayEventIdGetApiResponse,
      GetSetAstTransactionDelaySetAstTransactionDelayEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_transaction_delay/event/${queryArg.id}`
      })
    }),
    createSetEntitiesSetEntitiesPost: build.mutation<
      CreateSetEntitiesSetEntitiesPostApiResponse,
      CreateSetEntitiesSetEntitiesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_entities/`,
        method: 'POST',
        body: queryArg.setEntitiesInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetEntitiessSetEntitiesGet: build.query<
      GetAllSetEntitiessSetEntitiesGetApiResponse,
      GetAllSetEntitiessSetEntitiesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_entities/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSetEntitiesSetEntitiesIdPut: build.mutation<
      UpdateSetEntitiesSetEntitiesIdPutApiResponse,
      UpdateSetEntitiesSetEntitiesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_entities/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setEntitiesUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSetEntitiesSetEntitiesIdDelete: build.mutation<
      DeleteSetEntitiesSetEntitiesIdDeleteApiResponse,
      DeleteSetEntitiesSetEntitiesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_entities/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSetEntitiesSetEntitiesIdGet: build.query<
      GetSetEntitiesSetEntitiesIdGetApiResponse,
      GetSetEntitiesSetEntitiesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_entities/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetEntitiesEventGet: build.query<
      GetAllSetEntitiesEventGetApiResponse,
      GetAllSetEntitiesEventGetApiArg
    >({
      query: () => ({ url: `/set_entities/event/` })
    }),
    createSetEntitiesSetEntitiesEventPost: build.mutation<
      CreateSetEntitiesSetEntitiesEventPostApiResponse,
      CreateSetEntitiesSetEntitiesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_entities/event/`,
        method: 'POST',
        body: queryArg.setEntitiesInsert
      })
    }),
    updateSetEntitiesSetEntitiesEventIdPut: build.mutation<
      UpdateSetEntitiesSetEntitiesEventIdPutApiResponse,
      UpdateSetEntitiesSetEntitiesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_entities/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setEntitiesUpdate
      })
    }),
    deleteSetEntitiesSetEntitiesEventIdDelete: build.mutation<
      DeleteSetEntitiesSetEntitiesEventIdDeleteApiResponse,
      DeleteSetEntitiesSetEntitiesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_entities/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetEntitiesSetEntitiesEventIdGet: build.query<
      GetSetEntitiesSetEntitiesEventIdGetApiResponse,
      GetSetEntitiesSetEntitiesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/set_entities/event/${queryArg.id}` })
    }),
    createSetGenMydashboardSetGenMydashboardPost: build.mutation<
      CreateSetGenMydashboardSetGenMydashboardPostApiResponse,
      CreateSetGenMydashboardSetGenMydashboardPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_gen_mydashboard/`,
        method: 'POST',
        body: queryArg.setGenMydashboardInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetGenMydashboardsSetGenMydashboardGet: build.query<
      GetAllSetGenMydashboardsSetGenMydashboardGetApiResponse,
      GetAllSetGenMydashboardsSetGenMydashboardGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_gen_mydashboard/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSetGenMydashboardSetGenMydashboardIdPut: build.mutation<
      UpdateSetGenMydashboardSetGenMydashboardIdPutApiResponse,
      UpdateSetGenMydashboardSetGenMydashboardIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_gen_mydashboard/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setGenMydashboardUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSetGenMydashboardSetGenMydashboardIdDelete: build.mutation<
      DeleteSetGenMydashboardSetGenMydashboardIdDeleteApiResponse,
      DeleteSetGenMydashboardSetGenMydashboardIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_gen_mydashboard/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSetGenMydashboardSetGenMydashboardIdGet: build.query<
      GetSetGenMydashboardSetGenMydashboardIdGetApiResponse,
      GetSetGenMydashboardSetGenMydashboardIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_gen_mydashboard/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetGenMydashboardEventGet: build.query<
      GetAllSetGenMydashboardEventGetApiResponse,
      GetAllSetGenMydashboardEventGetApiArg
    >({
      query: () => ({ url: `/set_gen_mydashboard/event/` })
    }),
    createSetGenMydashboardSetGenMydashboardEventPost: build.mutation<
      CreateSetGenMydashboardSetGenMydashboardEventPostApiResponse,
      CreateSetGenMydashboardSetGenMydashboardEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_gen_mydashboard/event/`,
        method: 'POST',
        body: queryArg.setGenMydashboardInsert
      })
    }),
    updateSetGenMydashboardSetGenMydashboardEventIdPut: build.mutation<
      UpdateSetGenMydashboardSetGenMydashboardEventIdPutApiResponse,
      UpdateSetGenMydashboardSetGenMydashboardEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_gen_mydashboard/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setGenMydashboardUpdate
      })
    }),
    deleteSetGenMydashboardSetGenMydashboardEventIdDelete: build.mutation<
      DeleteSetGenMydashboardSetGenMydashboardEventIdDeleteApiResponse,
      DeleteSetGenMydashboardSetGenMydashboardEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_gen_mydashboard/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetGenMydashboardSetGenMydashboardEventIdGet: build.query<
      GetSetGenMydashboardSetGenMydashboardEventIdGetApiResponse,
      GetSetGenMydashboardSetGenMydashboardEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_gen_mydashboard/event/${queryArg.id}`
      })
    }),
    createSetInvUomSetInvUomPost: build.mutation<
      CreateSetInvUomSetInvUomPostApiResponse,
      CreateSetInvUomSetInvUomPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_inv_uom/`,
        method: 'POST',
        body: queryArg.setInvUomInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetInvUomsSetInvUomGet: build.query<
      GetAllSetInvUomsSetInvUomGetApiResponse,
      GetAllSetInvUomsSetInvUomGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_inv_uom/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSetInvUomSetInvUomIdPut: build.mutation<
      UpdateSetInvUomSetInvUomIdPutApiResponse,
      UpdateSetInvUomSetInvUomIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_inv_uom/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setInvUomUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSetInvUomSetInvUomIdDelete: build.mutation<
      DeleteSetInvUomSetInvUomIdDeleteApiResponse,
      DeleteSetInvUomSetInvUomIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_inv_uom/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSetInvUomSetInvUomIdGet: build.query<
      GetSetInvUomSetInvUomIdGetApiResponse,
      GetSetInvUomSetInvUomIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_inv_uom/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetInvUomEventGet: build.query<
      GetAllSetInvUomEventGetApiResponse,
      GetAllSetInvUomEventGetApiArg
    >({
      query: () => ({ url: `/set_inv_uom/event/` })
    }),
    createSetInvUomSetInvUomEventPost: build.mutation<
      CreateSetInvUomSetInvUomEventPostApiResponse,
      CreateSetInvUomSetInvUomEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_inv_uom/event/`,
        method: 'POST',
        body: queryArg.setInvUomInsert
      })
    }),
    updateSetInvUomSetInvUomEventIdPut: build.mutation<
      UpdateSetInvUomSetInvUomEventIdPutApiResponse,
      UpdateSetInvUomSetInvUomEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_inv_uom/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setInvUomUpdate
      })
    }),
    deleteSetInvUomSetInvUomEventIdDelete: build.mutation<
      DeleteSetInvUomSetInvUomEventIdDeleteApiResponse,
      DeleteSetInvUomSetInvUomEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_inv_uom/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetInvUomSetInvUomEventIdGet: build.query<
      GetSetInvUomSetInvUomEventIdGetApiResponse,
      GetSetInvUomSetInvUomEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/set_inv_uom/event/${queryArg.id}` })
    }),
    createSetSiteGroupingSetSiteGroupingPost: build.mutation<
      CreateSetSiteGroupingSetSiteGroupingPostApiResponse,
      CreateSetSiteGroupingSetSiteGroupingPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_site_grouping/`,
        method: 'POST',
        body: queryArg.setSiteGroupingInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetSiteGroupingsSetSiteGroupingGet: build.query<
      GetAllSetSiteGroupingsSetSiteGroupingGetApiResponse,
      GetAllSetSiteGroupingsSetSiteGroupingGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_site_grouping/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSetSiteGroupingSetSiteGroupingIdPut: build.mutation<
      UpdateSetSiteGroupingSetSiteGroupingIdPutApiResponse,
      UpdateSetSiteGroupingSetSiteGroupingIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_site_grouping/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setSiteGroupingUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSetSiteGroupingSetSiteGroupingIdDelete: build.mutation<
      DeleteSetSiteGroupingSetSiteGroupingIdDeleteApiResponse,
      DeleteSetSiteGroupingSetSiteGroupingIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_site_grouping/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSetSiteGroupingSetSiteGroupingIdGet: build.query<
      GetSetSiteGroupingSetSiteGroupingIdGetApiResponse,
      GetSetSiteGroupingSetSiteGroupingIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_site_grouping/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetSiteGroupingEventGet: build.query<
      GetAllSetSiteGroupingEventGetApiResponse,
      GetAllSetSiteGroupingEventGetApiArg
    >({
      query: () => ({ url: `/set_site_grouping/event/` })
    }),
    createSetSiteGroupingSetSiteGroupingEventPost: build.mutation<
      CreateSetSiteGroupingSetSiteGroupingEventPostApiResponse,
      CreateSetSiteGroupingSetSiteGroupingEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_site_grouping/event/`,
        method: 'POST',
        body: queryArg.setSiteGroupingInsert
      })
    }),
    updateSetSiteGroupingSetSiteGroupingEventIdPut: build.mutation<
      UpdateSetSiteGroupingSetSiteGroupingEventIdPutApiResponse,
      UpdateSetSiteGroupingSetSiteGroupingEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_site_grouping/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setSiteGroupingUpdate
      })
    }),
    deleteSetSiteGroupingSetSiteGroupingEventIdDelete: build.mutation<
      DeleteSetSiteGroupingSetSiteGroupingEventIdDeleteApiResponse,
      DeleteSetSiteGroupingSetSiteGroupingEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_site_grouping/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetSiteGroupingSetSiteGroupingEventIdGet: build.query<
      GetSetSiteGroupingSetSiteGroupingEventIdGetApiResponse,
      GetSetSiteGroupingSetSiteGroupingEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_site_grouping/event/${queryArg.id}`
      })
    }),
    createSetTenantConfigurationsSetTenantConfigurationsPost: build.mutation<
      CreateSetTenantConfigurationsSetTenantConfigurationsPostApiResponse,
      CreateSetTenantConfigurationsSetTenantConfigurationsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_configurations/`,
        method: 'POST',
        body: queryArg.setTenantConfigurationsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetTenantConfigurationssSetTenantConfigurationsGet: build.query<
      GetAllSetTenantConfigurationssSetTenantConfigurationsGetApiResponse,
      GetAllSetTenantConfigurationssSetTenantConfigurationsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_configurations/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSetTenantConfigurationsSetTenantConfigurationsIdPut: build.mutation<
      UpdateSetTenantConfigurationsSetTenantConfigurationsIdPutApiResponse,
      UpdateSetTenantConfigurationsSetTenantConfigurationsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_configurations/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setTenantConfigurationsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSetTenantConfigurationsSetTenantConfigurationsIdDelete:
      build.mutation<
        DeleteSetTenantConfigurationsSetTenantConfigurationsIdDeleteApiResponse,
        DeleteSetTenantConfigurationsSetTenantConfigurationsIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_tenant_configurations/${queryArg.id}`,
          method: 'DELETE',
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    getSetTenantConfigurationsSetTenantConfigurationsIdGet: build.query<
      GetSetTenantConfigurationsSetTenantConfigurationsIdGetApiResponse,
      GetSetTenantConfigurationsSetTenantConfigurationsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_configurations/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetTenantConfigurationsEventGet: build.query<
      GetAllSetTenantConfigurationsEventGetApiResponse,
      GetAllSetTenantConfigurationsEventGetApiArg
    >({
      query: () => ({ url: `/set_tenant_configurations/event/` })
    }),
    createSetTenantConfigurationsSetTenantConfigurationsEventPost:
      build.mutation<
        CreateSetTenantConfigurationsSetTenantConfigurationsEventPostApiResponse,
        CreateSetTenantConfigurationsSetTenantConfigurationsEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_tenant_configurations/event/`,
          method: 'POST',
          body: queryArg.setTenantConfigurationsInsert
        })
      }),
    updateSetTenantConfigurationsSetTenantConfigurationsEventIdPut:
      build.mutation<
        UpdateSetTenantConfigurationsSetTenantConfigurationsEventIdPutApiResponse,
        UpdateSetTenantConfigurationsSetTenantConfigurationsEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_tenant_configurations/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.setTenantConfigurationsUpdate
        })
      }),
    deleteSetTenantConfigurationsSetTenantConfigurationsEventIdDelete:
      build.mutation<
        DeleteSetTenantConfigurationsSetTenantConfigurationsEventIdDeleteApiResponse,
        DeleteSetTenantConfigurationsSetTenantConfigurationsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_tenant_configurations/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSetTenantConfigurationsSetTenantConfigurationsEventIdGet: build.query<
      GetSetTenantConfigurationsSetTenantConfigurationsEventIdGetApiResponse,
      GetSetTenantConfigurationsSetTenantConfigurationsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_configurations/event/${queryArg.id}`
      })
    }),
    createSetTenantWorkflowsSetTenantWorkflowsPost: build.mutation<
      CreateSetTenantWorkflowsSetTenantWorkflowsPostApiResponse,
      CreateSetTenantWorkflowsSetTenantWorkflowsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_workflows/`,
        method: 'POST',
        body: queryArg.setTenantWorkflowsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetTenantWorkflowssSetTenantWorkflowsGet: build.query<
      GetAllSetTenantWorkflowssSetTenantWorkflowsGetApiResponse,
      GetAllSetTenantWorkflowssSetTenantWorkflowsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_workflows/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSetTenantWorkflowsSetTenantWorkflowsIdPut: build.mutation<
      UpdateSetTenantWorkflowsSetTenantWorkflowsIdPutApiResponse,
      UpdateSetTenantWorkflowsSetTenantWorkflowsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_workflows/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setTenantWorkflowsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSetTenantWorkflowsSetTenantWorkflowsIdDelete: build.mutation<
      DeleteSetTenantWorkflowsSetTenantWorkflowsIdDeleteApiResponse,
      DeleteSetTenantWorkflowsSetTenantWorkflowsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_workflows/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSetTenantWorkflowsSetTenantWorkflowsIdGet: build.query<
      GetSetTenantWorkflowsSetTenantWorkflowsIdGetApiResponse,
      GetSetTenantWorkflowsSetTenantWorkflowsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_workflows/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSetTenantWorkflowsEventGet: build.query<
      GetAllSetTenantWorkflowsEventGetApiResponse,
      GetAllSetTenantWorkflowsEventGetApiArg
    >({
      query: () => ({ url: `/set_tenant_workflows/event/` })
    }),
    createSetTenantWorkflowsSetTenantWorkflowsEventPost: build.mutation<
      CreateSetTenantWorkflowsSetTenantWorkflowsEventPostApiResponse,
      CreateSetTenantWorkflowsSetTenantWorkflowsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_workflows/event/`,
        method: 'POST',
        body: queryArg.setTenantWorkflowsInsert
      })
    }),
    updateSetTenantWorkflowsSetTenantWorkflowsEventIdPut: build.mutation<
      UpdateSetTenantWorkflowsSetTenantWorkflowsEventIdPutApiResponse,
      UpdateSetTenantWorkflowsSetTenantWorkflowsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_workflows/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setTenantWorkflowsUpdate
      })
    }),
    deleteSetTenantWorkflowsSetTenantWorkflowsEventIdDelete: build.mutation<
      DeleteSetTenantWorkflowsSetTenantWorkflowsEventIdDeleteApiResponse,
      DeleteSetTenantWorkflowsSetTenantWorkflowsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_workflows/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetTenantWorkflowsSetTenantWorkflowsEventIdGet: build.query<
      GetSetTenantWorkflowsSetTenantWorkflowsEventIdGetApiResponse,
      GetSetTenantWorkflowsSetTenantWorkflowsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_workflows/event/${queryArg.id}`
      })
    }),
    createSitesSitesPost: build.mutation<
      CreateSitesSitesPostApiResponse,
      CreateSitesSitesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/sites/`,
        method: 'POST',
        body: queryArg.sitesInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSitessSitesGet: build.query<
      GetAllSitessSitesGetApiResponse,
      GetAllSitessSitesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/sites/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateSitesSitesIdPut: build.mutation<
      UpdateSitesSitesIdPutApiResponse,
      UpdateSitesSitesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/sites/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.sitesUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteSitesSitesIdDelete: build.mutation<
      DeleteSitesSitesIdDeleteApiResponse,
      DeleteSitesSitesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/sites/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getSitesSitesIdGet: build.query<
      GetSitesSitesIdGetApiResponse,
      GetSitesSitesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/sites/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllSitesEventGet: build.query<
      GetAllSitesEventGetApiResponse,
      GetAllSitesEventGetApiArg
    >({
      query: () => ({ url: `/sites/event/` })
    }),
    createSitesSitesEventPost: build.mutation<
      CreateSitesSitesEventPostApiResponse,
      CreateSitesSitesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/sites/event/`,
        method: 'POST',
        body: queryArg.sitesInsert
      })
    }),
    updateSitesSitesEventIdPut: build.mutation<
      UpdateSitesSitesEventIdPutApiResponse,
      UpdateSitesSitesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/sites/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.sitesUpdate
      })
    }),
    deleteSitesSitesEventIdDelete: build.mutation<
      DeleteSitesSitesEventIdDeleteApiResponse,
      DeleteSitesSitesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/sites/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSitesSitesEventIdGet: build.query<
      GetSitesSitesEventIdGetApiResponse,
      GetSitesSitesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/sites/event/${queryArg.id}` })
    }),
    createTeamUsersTeamUsersPost: build.mutation<
      CreateTeamUsersTeamUsersPostApiResponse,
      CreateTeamUsersTeamUsersPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/team_users/`,
        method: 'POST',
        body: queryArg.teamUsersInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTeamUserssTeamUsersGet: build.query<
      GetAllTeamUserssTeamUsersGetApiResponse,
      GetAllTeamUserssTeamUsersGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/team_users/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTeamUsersTeamUsersIdPut: build.mutation<
      UpdateTeamUsersTeamUsersIdPutApiResponse,
      UpdateTeamUsersTeamUsersIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/team_users/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.teamUsersUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTeamUsersTeamUsersIdDelete: build.mutation<
      DeleteTeamUsersTeamUsersIdDeleteApiResponse,
      DeleteTeamUsersTeamUsersIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/team_users/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTeamUsersTeamUsersIdGet: build.query<
      GetTeamUsersTeamUsersIdGetApiResponse,
      GetTeamUsersTeamUsersIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/team_users/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTeamUsersEventGet: build.query<
      GetAllTeamUsersEventGetApiResponse,
      GetAllTeamUsersEventGetApiArg
    >({
      query: () => ({ url: `/team_users/event/` })
    }),
    createTeamUsersTeamUsersEventPost: build.mutation<
      CreateTeamUsersTeamUsersEventPostApiResponse,
      CreateTeamUsersTeamUsersEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/team_users/event/`,
        method: 'POST',
        body: queryArg.teamUsersInsert
      })
    }),
    updateTeamUsersTeamUsersEventIdPut: build.mutation<
      UpdateTeamUsersTeamUsersEventIdPutApiResponse,
      UpdateTeamUsersTeamUsersEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/team_users/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.teamUsersUpdate
      })
    }),
    deleteTeamUsersTeamUsersEventIdDelete: build.mutation<
      DeleteTeamUsersTeamUsersEventIdDeleteApiResponse,
      DeleteTeamUsersTeamUsersEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/team_users/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTeamUsersTeamUsersEventIdGet: build.query<
      GetTeamUsersTeamUsersEventIdGetApiResponse,
      GetTeamUsersTeamUsersEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/team_users/event/${queryArg.id}` })
    }),
    createTransactionNoSettingsTransactionNoSettingsPost: build.mutation<
      CreateTransactionNoSettingsTransactionNoSettingsPostApiResponse,
      CreateTransactionNoSettingsTransactionNoSettingsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/transaction_no_settings/`,
        method: 'POST',
        body: queryArg.transactionNoSettingsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTransactionNoSettingssTransactionNoSettingsGet: build.query<
      GetAllTransactionNoSettingssTransactionNoSettingsGetApiResponse,
      GetAllTransactionNoSettingssTransactionNoSettingsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/transaction_no_settings/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTransactionNoSettingsTransactionNoSettingsIdPut: build.mutation<
      UpdateTransactionNoSettingsTransactionNoSettingsIdPutApiResponse,
      UpdateTransactionNoSettingsTransactionNoSettingsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/transaction_no_settings/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.transactionNoSettingsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTransactionNoSettingsTransactionNoSettingsIdDelete: build.mutation<
      DeleteTransactionNoSettingsTransactionNoSettingsIdDeleteApiResponse,
      DeleteTransactionNoSettingsTransactionNoSettingsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/transaction_no_settings/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTransactionNoSettingsTransactionNoSettingsIdGet: build.query<
      GetTransactionNoSettingsTransactionNoSettingsIdGetApiResponse,
      GetTransactionNoSettingsTransactionNoSettingsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/transaction_no_settings/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTransactionNoSettingsEventGet: build.query<
      GetAllTransactionNoSettingsEventGetApiResponse,
      GetAllTransactionNoSettingsEventGetApiArg
    >({
      query: () => ({ url: `/transaction_no_settings/event/` })
    }),
    createTransactionNoSettingsTransactionNoSettingsEventPost: build.mutation<
      CreateTransactionNoSettingsTransactionNoSettingsEventPostApiResponse,
      CreateTransactionNoSettingsTransactionNoSettingsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/transaction_no_settings/event/`,
        method: 'POST',
        body: queryArg.transactionNoSettingsInsert
      })
    }),
    updateTransactionNoSettingsTransactionNoSettingsEventIdPut: build.mutation<
      UpdateTransactionNoSettingsTransactionNoSettingsEventIdPutApiResponse,
      UpdateTransactionNoSettingsTransactionNoSettingsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/transaction_no_settings/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.transactionNoSettingsUpdate
      })
    }),
    deleteTransactionNoSettingsTransactionNoSettingsEventIdDelete:
      build.mutation<
        DeleteTransactionNoSettingsTransactionNoSettingsEventIdDeleteApiResponse,
        DeleteTransactionNoSettingsTransactionNoSettingsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/transaction_no_settings/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTransactionNoSettingsTransactionNoSettingsEventIdGet: build.query<
      GetTransactionNoSettingsTransactionNoSettingsEventIdGetApiResponse,
      GetTransactionNoSettingsTransactionNoSettingsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/transaction_no_settings/event/${queryArg.id}`
      })
    }),
    createTrnAssetDocumentTrnAssetDocumentPost: build.mutation<
      CreateTrnAssetDocumentTrnAssetDocumentPostApiResponse,
      CreateTrnAssetDocumentTrnAssetDocumentPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_document/`,
        method: 'POST',
        body: queryArg.trnAssetDocumentInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnAssetDocumentsTrnAssetDocumentGet: build.query<
      GetAllTrnAssetDocumentsTrnAssetDocumentGetApiResponse,
      GetAllTrnAssetDocumentsTrnAssetDocumentGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_document/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnAssetDocumentTrnAssetDocumentIdPut: build.mutation<
      UpdateTrnAssetDocumentTrnAssetDocumentIdPutApiResponse,
      UpdateTrnAssetDocumentTrnAssetDocumentIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_document/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetDocumentUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnAssetDocumentTrnAssetDocumentIdDelete: build.mutation<
      DeleteTrnAssetDocumentTrnAssetDocumentIdDeleteApiResponse,
      DeleteTrnAssetDocumentTrnAssetDocumentIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_document/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnAssetDocumentTrnAssetDocumentIdGet: build.query<
      GetTrnAssetDocumentTrnAssetDocumentIdGetApiResponse,
      GetTrnAssetDocumentTrnAssetDocumentIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_document/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnAssetDocumentEventGet: build.query<
      GetAllTrnAssetDocumentEventGetApiResponse,
      GetAllTrnAssetDocumentEventGetApiArg
    >({
      query: () => ({ url: `/trn_asset_document/event/` })
    }),
    createTrnAssetDocumentTrnAssetDocumentEventPost: build.mutation<
      CreateTrnAssetDocumentTrnAssetDocumentEventPostApiResponse,
      CreateTrnAssetDocumentTrnAssetDocumentEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_document/event/`,
        method: 'POST',
        body: queryArg.trnAssetDocumentInsert
      })
    }),
    updateTrnAssetDocumentTrnAssetDocumentEventIdPut: build.mutation<
      UpdateTrnAssetDocumentTrnAssetDocumentEventIdPutApiResponse,
      UpdateTrnAssetDocumentTrnAssetDocumentEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_document/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetDocumentUpdate
      })
    }),
    deleteTrnAssetDocumentTrnAssetDocumentEventIdDelete: build.mutation<
      DeleteTrnAssetDocumentTrnAssetDocumentEventIdDeleteApiResponse,
      DeleteTrnAssetDocumentTrnAssetDocumentEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_document/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetDocumentTrnAssetDocumentEventIdGet: build.query<
      GetTrnAssetDocumentTrnAssetDocumentEventIdGetApiResponse,
      GetTrnAssetDocumentTrnAssetDocumentEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_document/event/${queryArg.id}`
      })
    }),
    createTrnAssetMovmentTrnAssetMovmentPost: build.mutation<
      CreateTrnAssetMovmentTrnAssetMovmentPostApiResponse,
      CreateTrnAssetMovmentTrnAssetMovmentPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_movment/`,
        method: 'POST',
        body: queryArg.trnAssetMovmentInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnAssetMovmentsTrnAssetMovmentGet: build.query<
      GetAllTrnAssetMovmentsTrnAssetMovmentGetApiResponse,
      GetAllTrnAssetMovmentsTrnAssetMovmentGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_movment/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnAssetMovmentTrnAssetMovmentIdPut: build.mutation<
      UpdateTrnAssetMovmentTrnAssetMovmentIdPutApiResponse,
      UpdateTrnAssetMovmentTrnAssetMovmentIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_movment/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetMovmentUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnAssetMovmentTrnAssetMovmentIdDelete: build.mutation<
      DeleteTrnAssetMovmentTrnAssetMovmentIdDeleteApiResponse,
      DeleteTrnAssetMovmentTrnAssetMovmentIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_movment/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnAssetMovmentTrnAssetMovmentIdGet: build.query<
      GetTrnAssetMovmentTrnAssetMovmentIdGetApiResponse,
      GetTrnAssetMovmentTrnAssetMovmentIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_movment/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnAssetMovmentEventGet: build.query<
      GetAllTrnAssetMovmentEventGetApiResponse,
      GetAllTrnAssetMovmentEventGetApiArg
    >({
      query: () => ({ url: `/trn_asset_movment/event/` })
    }),
    createTrnAssetMovmentTrnAssetMovmentEventPost: build.mutation<
      CreateTrnAssetMovmentTrnAssetMovmentEventPostApiResponse,
      CreateTrnAssetMovmentTrnAssetMovmentEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_movment/event/`,
        method: 'POST',
        body: queryArg.trnAssetMovmentInsert
      })
    }),
    updateTrnAssetMovmentTrnAssetMovmentEventIdPut: build.mutation<
      UpdateTrnAssetMovmentTrnAssetMovmentEventIdPutApiResponse,
      UpdateTrnAssetMovmentTrnAssetMovmentEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_movment/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetMovmentUpdate
      })
    }),
    deleteTrnAssetMovmentTrnAssetMovmentEventIdDelete: build.mutation<
      DeleteTrnAssetMovmentTrnAssetMovmentEventIdDeleteApiResponse,
      DeleteTrnAssetMovmentTrnAssetMovmentEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_movment/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetMovmentTrnAssetMovmentEventIdGet: build.query<
      GetTrnAssetMovmentTrnAssetMovmentEventIdGetApiResponse,
      GetTrnAssetMovmentTrnAssetMovmentEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_movment/event/${queryArg.id}`
      })
    }),
    createTrnAssetOwnershipTrnAssetOwnershipPost: build.mutation<
      CreateTrnAssetOwnershipTrnAssetOwnershipPostApiResponse,
      CreateTrnAssetOwnershipTrnAssetOwnershipPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_ownership/`,
        method: 'POST',
        body: queryArg.trnAssetOwnershipInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnAssetOwnershipsTrnAssetOwnershipGet: build.query<
      GetAllTrnAssetOwnershipsTrnAssetOwnershipGetApiResponse,
      GetAllTrnAssetOwnershipsTrnAssetOwnershipGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_ownership/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnAssetOwnershipTrnAssetOwnershipIdPut: build.mutation<
      UpdateTrnAssetOwnershipTrnAssetOwnershipIdPutApiResponse,
      UpdateTrnAssetOwnershipTrnAssetOwnershipIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_ownership/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetOwnershipUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnAssetOwnershipTrnAssetOwnershipIdDelete: build.mutation<
      DeleteTrnAssetOwnershipTrnAssetOwnershipIdDeleteApiResponse,
      DeleteTrnAssetOwnershipTrnAssetOwnershipIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_ownership/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnAssetOwnershipTrnAssetOwnershipIdGet: build.query<
      GetTrnAssetOwnershipTrnAssetOwnershipIdGetApiResponse,
      GetTrnAssetOwnershipTrnAssetOwnershipIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_ownership/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnAssetOwnershipEventGet: build.query<
      GetAllTrnAssetOwnershipEventGetApiResponse,
      GetAllTrnAssetOwnershipEventGetApiArg
    >({
      query: () => ({ url: `/trn_asset_ownership/event/` })
    }),
    createTrnAssetOwnershipTrnAssetOwnershipEventPost: build.mutation<
      CreateTrnAssetOwnershipTrnAssetOwnershipEventPostApiResponse,
      CreateTrnAssetOwnershipTrnAssetOwnershipEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_ownership/event/`,
        method: 'POST',
        body: queryArg.trnAssetOwnershipInsert
      })
    }),
    updateTrnAssetOwnershipTrnAssetOwnershipEventIdPut: build.mutation<
      UpdateTrnAssetOwnershipTrnAssetOwnershipEventIdPutApiResponse,
      UpdateTrnAssetOwnershipTrnAssetOwnershipEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_ownership/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetOwnershipUpdate
      })
    }),
    deleteTrnAssetOwnershipTrnAssetOwnershipEventIdDelete: build.mutation<
      DeleteTrnAssetOwnershipTrnAssetOwnershipEventIdDeleteApiResponse,
      DeleteTrnAssetOwnershipTrnAssetOwnershipEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_ownership/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetOwnershipTrnAssetOwnershipEventIdGet: build.query<
      GetTrnAssetOwnershipTrnAssetOwnershipEventIdGetApiResponse,
      GetTrnAssetOwnershipTrnAssetOwnershipEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_ownership/event/${queryArg.id}`
      })
    }),
    createTrnAssetRosterTrnAssetRosterPost: build.mutation<
      CreateTrnAssetRosterTrnAssetRosterPostApiResponse,
      CreateTrnAssetRosterTrnAssetRosterPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_roster/`,
        method: 'POST',
        body: queryArg.trnAssetRosterInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnAssetRostersTrnAssetRosterGet: build.query<
      GetAllTrnAssetRostersTrnAssetRosterGetApiResponse,
      GetAllTrnAssetRostersTrnAssetRosterGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_roster/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnAssetRosterTrnAssetRosterIdPut: build.mutation<
      UpdateTrnAssetRosterTrnAssetRosterIdPutApiResponse,
      UpdateTrnAssetRosterTrnAssetRosterIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_roster/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetRosterUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnAssetRosterTrnAssetRosterIdDelete: build.mutation<
      DeleteTrnAssetRosterTrnAssetRosterIdDeleteApiResponse,
      DeleteTrnAssetRosterTrnAssetRosterIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_roster/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnAssetRosterTrnAssetRosterIdGet: build.query<
      GetTrnAssetRosterTrnAssetRosterIdGetApiResponse,
      GetTrnAssetRosterTrnAssetRosterIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_roster/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnAssetRosterEventGet: build.query<
      GetAllTrnAssetRosterEventGetApiResponse,
      GetAllTrnAssetRosterEventGetApiArg
    >({
      query: () => ({ url: `/trn_asset_roster/event/` })
    }),
    createTrnAssetRosterTrnAssetRosterEventPost: build.mutation<
      CreateTrnAssetRosterTrnAssetRosterEventPostApiResponse,
      CreateTrnAssetRosterTrnAssetRosterEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_roster/event/`,
        method: 'POST',
        body: queryArg.trnAssetRosterInsert
      })
    }),
    updateTrnAssetRosterTrnAssetRosterEventIdPut: build.mutation<
      UpdateTrnAssetRosterTrnAssetRosterEventIdPutApiResponse,
      UpdateTrnAssetRosterTrnAssetRosterEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_roster/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetRosterUpdate
      })
    }),
    deleteTrnAssetRosterTrnAssetRosterEventIdDelete: build.mutation<
      DeleteTrnAssetRosterTrnAssetRosterEventIdDeleteApiResponse,
      DeleteTrnAssetRosterTrnAssetRosterEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_roster/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetRosterTrnAssetRosterEventIdGet: build.query<
      GetTrnAssetRosterTrnAssetRosterEventIdGetApiResponse,
      GetTrnAssetRosterTrnAssetRosterEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_roster/event/${queryArg.id}`
      })
    }),
    createTrnAssetSiteLinkingTrnAssetSiteLinkingPost: build.mutation<
      CreateTrnAssetSiteLinkingTrnAssetSiteLinkingPostApiResponse,
      CreateTrnAssetSiteLinkingTrnAssetSiteLinkingPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_site_linking/`,
        method: 'POST',
        body: queryArg.trnAssetSiteLinkingInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnAssetSiteLinkingsTrnAssetSiteLinkingGet: build.query<
      GetAllTrnAssetSiteLinkingsTrnAssetSiteLinkingGetApiResponse,
      GetAllTrnAssetSiteLinkingsTrnAssetSiteLinkingGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_site_linking/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnAssetSiteLinkingTrnAssetSiteLinkingIdPut: build.mutation<
      UpdateTrnAssetSiteLinkingTrnAssetSiteLinkingIdPutApiResponse,
      UpdateTrnAssetSiteLinkingTrnAssetSiteLinkingIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_site_linking/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetSiteLinkingUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnAssetSiteLinkingTrnAssetSiteLinkingIdDelete: build.mutation<
      DeleteTrnAssetSiteLinkingTrnAssetSiteLinkingIdDeleteApiResponse,
      DeleteTrnAssetSiteLinkingTrnAssetSiteLinkingIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_site_linking/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnAssetSiteLinkingTrnAssetSiteLinkingIdGet: build.query<
      GetTrnAssetSiteLinkingTrnAssetSiteLinkingIdGetApiResponse,
      GetTrnAssetSiteLinkingTrnAssetSiteLinkingIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_site_linking/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnAssetSiteLinkingEventGet: build.query<
      GetAllTrnAssetSiteLinkingEventGetApiResponse,
      GetAllTrnAssetSiteLinkingEventGetApiArg
    >({
      query: () => ({ url: `/trn_asset_site_linking/event/` })
    }),
    createTrnAssetSiteLinkingTrnAssetSiteLinkingEventPost: build.mutation<
      CreateTrnAssetSiteLinkingTrnAssetSiteLinkingEventPostApiResponse,
      CreateTrnAssetSiteLinkingTrnAssetSiteLinkingEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_site_linking/event/`,
        method: 'POST',
        body: queryArg.trnAssetSiteLinkingInsert
      })
    }),
    updateTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdPut: build.mutation<
      UpdateTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdPutApiResponse,
      UpdateTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_site_linking/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetSiteLinkingUpdate
      })
    }),
    deleteTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdDelete: build.mutation<
      DeleteTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdDeleteApiResponse,
      DeleteTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_site_linking/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdGet: build.query<
      GetTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdGetApiResponse,
      GetTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_site_linking/event/${queryArg.id}`
      })
    }),
    createTrnCounterlogTrnCounterlogPost: build.mutation<
      CreateTrnCounterlogTrnCounterlogPostApiResponse,
      CreateTrnCounterlogTrnCounterlogPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_counterlog/`,
        method: 'POST',
        body: queryArg.trnCounterlogInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnCounterlogsTrnCounterlogGet: build.query<
      GetAllTrnCounterlogsTrnCounterlogGetApiResponse,
      GetAllTrnCounterlogsTrnCounterlogGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_counterlog/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnCounterlogTrnCounterlogIdPut: build.mutation<
      UpdateTrnCounterlogTrnCounterlogIdPutApiResponse,
      UpdateTrnCounterlogTrnCounterlogIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_counterlog/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnCounterlogUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnCounterlogTrnCounterlogIdDelete: build.mutation<
      DeleteTrnCounterlogTrnCounterlogIdDeleteApiResponse,
      DeleteTrnCounterlogTrnCounterlogIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_counterlog/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnCounterlogTrnCounterlogIdGet: build.query<
      GetTrnCounterlogTrnCounterlogIdGetApiResponse,
      GetTrnCounterlogTrnCounterlogIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_counterlog/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnCounterlogEventGet: build.query<
      GetAllTrnCounterlogEventGetApiResponse,
      GetAllTrnCounterlogEventGetApiArg
    >({
      query: () => ({ url: `/trn_counterlog/event/` })
    }),
    createTrnCounterlogTrnCounterlogEventPost: build.mutation<
      CreateTrnCounterlogTrnCounterlogEventPostApiResponse,
      CreateTrnCounterlogTrnCounterlogEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_counterlog/event/`,
        method: 'POST',
        body: queryArg.trnCounterlogInsert
      })
    }),
    updateTrnCounterlogTrnCounterlogEventIdPut: build.mutation<
      UpdateTrnCounterlogTrnCounterlogEventIdPutApiResponse,
      UpdateTrnCounterlogTrnCounterlogEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_counterlog/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnCounterlogUpdate
      })
    }),
    deleteTrnCounterlogTrnCounterlogEventIdDelete: build.mutation<
      DeleteTrnCounterlogTrnCounterlogEventIdDeleteApiResponse,
      DeleteTrnCounterlogTrnCounterlogEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_counterlog/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnCounterlogTrnCounterlogEventIdGet: build.query<
      GetTrnCounterlogTrnCounterlogEventIdGetApiResponse,
      GetTrnCounterlogTrnCounterlogEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_counterlog/event/${queryArg.id}`
      })
    }),
    createTrnDowntimeTrnDowntimePost: build.mutation<
      CreateTrnDowntimeTrnDowntimePostApiResponse,
      CreateTrnDowntimeTrnDowntimePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_downtime/`,
        method: 'POST',
        body: queryArg.trnDowntimeInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnDowntimesTrnDowntimeGet: build.query<
      GetAllTrnDowntimesTrnDowntimeGetApiResponse,
      GetAllTrnDowntimesTrnDowntimeGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_downtime/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnDowntimeTrnDowntimeIdPut: build.mutation<
      UpdateTrnDowntimeTrnDowntimeIdPutApiResponse,
      UpdateTrnDowntimeTrnDowntimeIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_downtime/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnDowntimeUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnDowntimeTrnDowntimeIdDelete: build.mutation<
      DeleteTrnDowntimeTrnDowntimeIdDeleteApiResponse,
      DeleteTrnDowntimeTrnDowntimeIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_downtime/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnDowntimeTrnDowntimeIdGet: build.query<
      GetTrnDowntimeTrnDowntimeIdGetApiResponse,
      GetTrnDowntimeTrnDowntimeIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_downtime/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnDowntimeEventGet: build.query<
      GetAllTrnDowntimeEventGetApiResponse,
      GetAllTrnDowntimeEventGetApiArg
    >({
      query: () => ({ url: `/trn_downtime/event/` })
    }),
    createTrnDowntimeTrnDowntimeEventPost: build.mutation<
      CreateTrnDowntimeTrnDowntimeEventPostApiResponse,
      CreateTrnDowntimeTrnDowntimeEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_downtime/event/`,
        method: 'POST',
        body: queryArg.trnDowntimeInsert
      })
    }),
    updateTrnDowntimeTrnDowntimeEventIdPut: build.mutation<
      UpdateTrnDowntimeTrnDowntimeEventIdPutApiResponse,
      UpdateTrnDowntimeTrnDowntimeEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_downtime/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnDowntimeUpdate
      })
    }),
    deleteTrnDowntimeTrnDowntimeEventIdDelete: build.mutation<
      DeleteTrnDowntimeTrnDowntimeEventIdDeleteApiResponse,
      DeleteTrnDowntimeTrnDowntimeEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_downtime/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnDowntimeTrnDowntimeEventIdGet: build.query<
      GetTrnDowntimeTrnDowntimeEventIdGetApiResponse,
      GetTrnDowntimeTrnDowntimeEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_downtime/event/${queryArg.id}` })
    }),
    createTrnEngagementTrnEngagementPost: build.mutation<
      CreateTrnEngagementTrnEngagementPostApiResponse,
      CreateTrnEngagementTrnEngagementPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_engagement/`,
        method: 'POST',
        body: queryArg.trnEngagementInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnEngagementsTrnEngagementGet: build.query<
      GetAllTrnEngagementsTrnEngagementGetApiResponse,
      GetAllTrnEngagementsTrnEngagementGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_engagement/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnEngagementTrnEngagementIdPut: build.mutation<
      UpdateTrnEngagementTrnEngagementIdPutApiResponse,
      UpdateTrnEngagementTrnEngagementIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_engagement/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnEngagementUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnEngagementTrnEngagementIdDelete: build.mutation<
      DeleteTrnEngagementTrnEngagementIdDeleteApiResponse,
      DeleteTrnEngagementTrnEngagementIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_engagement/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnEngagementTrnEngagementIdGet: build.query<
      GetTrnEngagementTrnEngagementIdGetApiResponse,
      GetTrnEngagementTrnEngagementIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_engagement/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnEngagementEventGet: build.query<
      GetAllTrnEngagementEventGetApiResponse,
      GetAllTrnEngagementEventGetApiArg
    >({
      query: () => ({ url: `/trn_engagement/event/` })
    }),
    createTrnEngagementTrnEngagementEventPost: build.mutation<
      CreateTrnEngagementTrnEngagementEventPostApiResponse,
      CreateTrnEngagementTrnEngagementEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_engagement/event/`,
        method: 'POST',
        body: queryArg.trnEngagementInsert
      })
    }),
    updateTrnEngagementTrnEngagementEventIdPut: build.mutation<
      UpdateTrnEngagementTrnEngagementEventIdPutApiResponse,
      UpdateTrnEngagementTrnEngagementEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_engagement/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnEngagementUpdate
      })
    }),
    deleteTrnEngagementTrnEngagementEventIdDelete: build.mutation<
      DeleteTrnEngagementTrnEngagementEventIdDeleteApiResponse,
      DeleteTrnEngagementTrnEngagementEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_engagement/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnEngagementTrnEngagementEventIdGet: build.query<
      GetTrnEngagementTrnEngagementEventIdGetApiResponse,
      GetTrnEngagementTrnEngagementEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_engagement/event/${queryArg.id}`
      })
    }),
    createTrnEntityWorkflowTrnEntityWorkflowPost: build.mutation<
      CreateTrnEntityWorkflowTrnEntityWorkflowPostApiResponse,
      CreateTrnEntityWorkflowTrnEntityWorkflowPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_entity_workflow/`,
        method: 'POST',
        body: queryArg.trnEntityWorkflowInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnEntityWorkflowsTrnEntityWorkflowGet: build.query<
      GetAllTrnEntityWorkflowsTrnEntityWorkflowGetApiResponse,
      GetAllTrnEntityWorkflowsTrnEntityWorkflowGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_entity_workflow/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnEntityWorkflowTrnEntityWorkflowIdPut: build.mutation<
      UpdateTrnEntityWorkflowTrnEntityWorkflowIdPutApiResponse,
      UpdateTrnEntityWorkflowTrnEntityWorkflowIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_entity_workflow/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnEntityWorkflowUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnEntityWorkflowTrnEntityWorkflowIdDelete: build.mutation<
      DeleteTrnEntityWorkflowTrnEntityWorkflowIdDeleteApiResponse,
      DeleteTrnEntityWorkflowTrnEntityWorkflowIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_entity_workflow/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnEntityWorkflowTrnEntityWorkflowIdGet: build.query<
      GetTrnEntityWorkflowTrnEntityWorkflowIdGetApiResponse,
      GetTrnEntityWorkflowTrnEntityWorkflowIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_entity_workflow/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnEntityWorkflowEventGet: build.query<
      GetAllTrnEntityWorkflowEventGetApiResponse,
      GetAllTrnEntityWorkflowEventGetApiArg
    >({
      query: () => ({ url: `/trn_entity_workflow/event/` })
    }),
    createTrnEntityWorkflowTrnEntityWorkflowEventPost: build.mutation<
      CreateTrnEntityWorkflowTrnEntityWorkflowEventPostApiResponse,
      CreateTrnEntityWorkflowTrnEntityWorkflowEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_entity_workflow/event/`,
        method: 'POST',
        body: queryArg.trnEntityWorkflowInsert
      })
    }),
    updateTrnEntityWorkflowTrnEntityWorkflowEventIdPut: build.mutation<
      UpdateTrnEntityWorkflowTrnEntityWorkflowEventIdPutApiResponse,
      UpdateTrnEntityWorkflowTrnEntityWorkflowEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_entity_workflow/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnEntityWorkflowUpdate
      })
    }),
    deleteTrnEntityWorkflowTrnEntityWorkflowEventIdDelete: build.mutation<
      DeleteTrnEntityWorkflowTrnEntityWorkflowEventIdDeleteApiResponse,
      DeleteTrnEntityWorkflowTrnEntityWorkflowEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_entity_workflow/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnEntityWorkflowTrnEntityWorkflowEventIdGet: build.query<
      GetTrnEntityWorkflowTrnEntityWorkflowEventIdGetApiResponse,
      GetTrnEntityWorkflowTrnEntityWorkflowEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_entity_workflow/event/${queryArg.id}`
      })
    }),
    createTrnFsFuelIssueTrnFsFuelIssuePost: build.mutation<
      CreateTrnFsFuelIssueTrnFsFuelIssuePostApiResponse,
      CreateTrnFsFuelIssueTrnFsFuelIssuePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_issue/`,
        method: 'POST',
        body: queryArg.trnFsFuelIssueInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnFsFuelIssuesTrnFsFuelIssueGet: build.query<
      GetAllTrnFsFuelIssuesTrnFsFuelIssueGetApiResponse,
      GetAllTrnFsFuelIssuesTrnFsFuelIssueGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_issue/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnFsFuelIssueTrnFsFuelIssueIdPut: build.mutation<
      UpdateTrnFsFuelIssueTrnFsFuelIssueIdPutApiResponse,
      UpdateTrnFsFuelIssueTrnFsFuelIssueIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_issue/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFsFuelIssueUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnFsFuelIssueTrnFsFuelIssueIdDelete: build.mutation<
      DeleteTrnFsFuelIssueTrnFsFuelIssueIdDeleteApiResponse,
      DeleteTrnFsFuelIssueTrnFsFuelIssueIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_issue/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnFsFuelIssueTrnFsFuelIssueIdGet: build.query<
      GetTrnFsFuelIssueTrnFsFuelIssueIdGetApiResponse,
      GetTrnFsFuelIssueTrnFsFuelIssueIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_issue/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnFsFuelIssueEventGet: build.query<
      GetAllTrnFsFuelIssueEventGetApiResponse,
      GetAllTrnFsFuelIssueEventGetApiArg
    >({
      query: () => ({ url: `/trn_fs_fuel_issue/event/` })
    }),
    createTrnFsFuelIssueTrnFsFuelIssueEventPost: build.mutation<
      CreateTrnFsFuelIssueTrnFsFuelIssueEventPostApiResponse,
      CreateTrnFsFuelIssueTrnFsFuelIssueEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_issue/event/`,
        method: 'POST',
        body: queryArg.trnFsFuelIssueInsert
      })
    }),
    updateTrnFsFuelIssueTrnFsFuelIssueEventIdPut: build.mutation<
      UpdateTrnFsFuelIssueTrnFsFuelIssueEventIdPutApiResponse,
      UpdateTrnFsFuelIssueTrnFsFuelIssueEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_issue/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFsFuelIssueUpdate
      })
    }),
    deleteTrnFsFuelIssueTrnFsFuelIssueEventIdDelete: build.mutation<
      DeleteTrnFsFuelIssueTrnFsFuelIssueEventIdDeleteApiResponse,
      DeleteTrnFsFuelIssueTrnFsFuelIssueEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_issue/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnFsFuelIssueTrnFsFuelIssueEventIdGet: build.query<
      GetTrnFsFuelIssueTrnFsFuelIssueEventIdGetApiResponse,
      GetTrnFsFuelIssueTrnFsFuelIssueEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_issue/event/${queryArg.id}`
      })
    }),
    createTrnFsFuelReceiveTrnFsFuelReceivePost: build.mutation<
      CreateTrnFsFuelReceiveTrnFsFuelReceivePostApiResponse,
      CreateTrnFsFuelReceiveTrnFsFuelReceivePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_receive/`,
        method: 'POST',
        body: queryArg.trnFsFuelReceiveInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnFsFuelReceivesTrnFsFuelReceiveGet: build.query<
      GetAllTrnFsFuelReceivesTrnFsFuelReceiveGetApiResponse,
      GetAllTrnFsFuelReceivesTrnFsFuelReceiveGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_receive/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnFsFuelReceiveTrnFsFuelReceiveIdPut: build.mutation<
      UpdateTrnFsFuelReceiveTrnFsFuelReceiveIdPutApiResponse,
      UpdateTrnFsFuelReceiveTrnFsFuelReceiveIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_receive/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFsFuelReceiveUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnFsFuelReceiveTrnFsFuelReceiveIdDelete: build.mutation<
      DeleteTrnFsFuelReceiveTrnFsFuelReceiveIdDeleteApiResponse,
      DeleteTrnFsFuelReceiveTrnFsFuelReceiveIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_receive/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnFsFuelReceiveTrnFsFuelReceiveIdGet: build.query<
      GetTrnFsFuelReceiveTrnFsFuelReceiveIdGetApiResponse,
      GetTrnFsFuelReceiveTrnFsFuelReceiveIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_receive/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnFsFuelReceiveEventGet: build.query<
      GetAllTrnFsFuelReceiveEventGetApiResponse,
      GetAllTrnFsFuelReceiveEventGetApiArg
    >({
      query: () => ({ url: `/trn_fs_fuel_receive/event/` })
    }),
    createTrnFsFuelReceiveTrnFsFuelReceiveEventPost: build.mutation<
      CreateTrnFsFuelReceiveTrnFsFuelReceiveEventPostApiResponse,
      CreateTrnFsFuelReceiveTrnFsFuelReceiveEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_receive/event/`,
        method: 'POST',
        body: queryArg.trnFsFuelReceiveInsert
      })
    }),
    updateTrnFsFuelReceiveTrnFsFuelReceiveEventIdPut: build.mutation<
      UpdateTrnFsFuelReceiveTrnFsFuelReceiveEventIdPutApiResponse,
      UpdateTrnFsFuelReceiveTrnFsFuelReceiveEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_receive/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFsFuelReceiveUpdate
      })
    }),
    deleteTrnFsFuelReceiveTrnFsFuelReceiveEventIdDelete: build.mutation<
      DeleteTrnFsFuelReceiveTrnFsFuelReceiveEventIdDeleteApiResponse,
      DeleteTrnFsFuelReceiveTrnFsFuelReceiveEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_receive/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnFsFuelReceiveTrnFsFuelReceiveEventIdGet: build.query<
      GetTrnFsFuelReceiveTrnFsFuelReceiveEventIdGetApiResponse,
      GetTrnFsFuelReceiveTrnFsFuelReceiveEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_receive/event/${queryArg.id}`
      })
    }),
    createTrnFsFuelTransferTrnFsFuelTransferPost: build.mutation<
      CreateTrnFsFuelTransferTrnFsFuelTransferPostApiResponse,
      CreateTrnFsFuelTransferTrnFsFuelTransferPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_transfer/`,
        method: 'POST',
        body: queryArg.trnFsFuelTransferInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnFsFuelTransfersTrnFsFuelTransferGet: build.query<
      GetAllTrnFsFuelTransfersTrnFsFuelTransferGetApiResponse,
      GetAllTrnFsFuelTransfersTrnFsFuelTransferGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_transfer/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnFsFuelTransferTrnFsFuelTransferIdPut: build.mutation<
      UpdateTrnFsFuelTransferTrnFsFuelTransferIdPutApiResponse,
      UpdateTrnFsFuelTransferTrnFsFuelTransferIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_transfer/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFsFuelTransferUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnFsFuelTransferTrnFsFuelTransferIdDelete: build.mutation<
      DeleteTrnFsFuelTransferTrnFsFuelTransferIdDeleteApiResponse,
      DeleteTrnFsFuelTransferTrnFsFuelTransferIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_transfer/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnFsFuelTransferTrnFsFuelTransferIdGet: build.query<
      GetTrnFsFuelTransferTrnFsFuelTransferIdGetApiResponse,
      GetTrnFsFuelTransferTrnFsFuelTransferIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_transfer/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnFsFuelTransferEventGet: build.query<
      GetAllTrnFsFuelTransferEventGetApiResponse,
      GetAllTrnFsFuelTransferEventGetApiArg
    >({
      query: () => ({ url: `/trn_fs_fuel_transfer/event/` })
    }),
    createTrnFsFuelTransferTrnFsFuelTransferEventPost: build.mutation<
      CreateTrnFsFuelTransferTrnFsFuelTransferEventPostApiResponse,
      CreateTrnFsFuelTransferTrnFsFuelTransferEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_transfer/event/`,
        method: 'POST',
        body: queryArg.trnFsFuelTransferInsert
      })
    }),
    updateTrnFsFuelTransferTrnFsFuelTransferEventIdPut: build.mutation<
      UpdateTrnFsFuelTransferTrnFsFuelTransferEventIdPutApiResponse,
      UpdateTrnFsFuelTransferTrnFsFuelTransferEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_transfer/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFsFuelTransferUpdate
      })
    }),
    deleteTrnFsFuelTransferTrnFsFuelTransferEventIdDelete: build.mutation<
      DeleteTrnFsFuelTransferTrnFsFuelTransferEventIdDeleteApiResponse,
      DeleteTrnFsFuelTransferTrnFsFuelTransferEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_transfer/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnFsFuelTransferTrnFsFuelTransferEventIdGet: build.query<
      GetTrnFsFuelTransferTrnFsFuelTransferEventIdGetApiResponse,
      GetTrnFsFuelTransferTrnFsFuelTransferEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_transfer/event/${queryArg.id}`
      })
    }),
    createTrnFuelFeedinTrnFuelFeedinPost: build.mutation<
      CreateTrnFuelFeedinTrnFuelFeedinPostApiResponse,
      CreateTrnFuelFeedinTrnFuelFeedinPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin/`,
        method: 'POST',
        body: queryArg.trnFuelFeedinInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnFuelFeedinsTrnFuelFeedinGet: build.query<
      GetAllTrnFuelFeedinsTrnFuelFeedinGetApiResponse,
      GetAllTrnFuelFeedinsTrnFuelFeedinGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnFuelFeedinTrnFuelFeedinIdPut: build.mutation<
      UpdateTrnFuelFeedinTrnFuelFeedinIdPutApiResponse,
      UpdateTrnFuelFeedinTrnFuelFeedinIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFuelFeedinUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnFuelFeedinTrnFuelFeedinIdDelete: build.mutation<
      DeleteTrnFuelFeedinTrnFuelFeedinIdDeleteApiResponse,
      DeleteTrnFuelFeedinTrnFuelFeedinIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnFuelFeedinTrnFuelFeedinIdGet: build.query<
      GetTrnFuelFeedinTrnFuelFeedinIdGetApiResponse,
      GetTrnFuelFeedinTrnFuelFeedinIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnFuelFeedinEventGet: build.query<
      GetAllTrnFuelFeedinEventGetApiResponse,
      GetAllTrnFuelFeedinEventGetApiArg
    >({
      query: () => ({ url: `/trn_fuel_feedin/event/` })
    }),
    createTrnFuelFeedinTrnFuelFeedinEventPost: build.mutation<
      CreateTrnFuelFeedinTrnFuelFeedinEventPostApiResponse,
      CreateTrnFuelFeedinTrnFuelFeedinEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin/event/`,
        method: 'POST',
        body: queryArg.trnFuelFeedinInsert
      })
    }),
    updateTrnFuelFeedinTrnFuelFeedinEventIdPut: build.mutation<
      UpdateTrnFuelFeedinTrnFuelFeedinEventIdPutApiResponse,
      UpdateTrnFuelFeedinTrnFuelFeedinEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFuelFeedinUpdate
      })
    }),
    deleteTrnFuelFeedinTrnFuelFeedinEventIdDelete: build.mutation<
      DeleteTrnFuelFeedinTrnFuelFeedinEventIdDeleteApiResponse,
      DeleteTrnFuelFeedinTrnFuelFeedinEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnFuelFeedinTrnFuelFeedinEventIdGet: build.query<
      GetTrnFuelFeedinTrnFuelFeedinEventIdGetApiResponse,
      GetTrnFuelFeedinTrnFuelFeedinEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin/event/${queryArg.id}`
      })
    }),
    createTrnHrEmployeeTrnHrEmployeePost: build.mutation<
      CreateTrnHrEmployeeTrnHrEmployeePostApiResponse,
      CreateTrnHrEmployeeTrnHrEmployeePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee/`,
        method: 'POST',
        body: queryArg.trnHrEmployeeInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnHrEmployeesTrnHrEmployeeGet: build.query<
      GetAllTrnHrEmployeesTrnHrEmployeeGetApiResponse,
      GetAllTrnHrEmployeesTrnHrEmployeeGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnHrEmployeeTrnHrEmployeeIdPut: build.mutation<
      UpdateTrnHrEmployeeTrnHrEmployeeIdPutApiResponse,
      UpdateTrnHrEmployeeTrnHrEmployeeIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnHrEmployeeUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnHrEmployeeTrnHrEmployeeIdDelete: build.mutation<
      DeleteTrnHrEmployeeTrnHrEmployeeIdDeleteApiResponse,
      DeleteTrnHrEmployeeTrnHrEmployeeIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnHrEmployeeTrnHrEmployeeIdGet: build.query<
      GetTrnHrEmployeeTrnHrEmployeeIdGetApiResponse,
      GetTrnHrEmployeeTrnHrEmployeeIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnHrEmployeeEventGet: build.query<
      GetAllTrnHrEmployeeEventGetApiResponse,
      GetAllTrnHrEmployeeEventGetApiArg
    >({
      query: () => ({ url: `/trn_hr_employee/event/` })
    }),
    createTrnHrEmployeeTrnHrEmployeeEventPost: build.mutation<
      CreateTrnHrEmployeeTrnHrEmployeeEventPostApiResponse,
      CreateTrnHrEmployeeTrnHrEmployeeEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee/event/`,
        method: 'POST',
        body: queryArg.trnHrEmployeeInsert
      })
    }),
    updateTrnHrEmployeeTrnHrEmployeeEventIdPut: build.mutation<
      UpdateTrnHrEmployeeTrnHrEmployeeEventIdPutApiResponse,
      UpdateTrnHrEmployeeTrnHrEmployeeEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnHrEmployeeUpdate
      })
    }),
    deleteTrnHrEmployeeTrnHrEmployeeEventIdDelete: build.mutation<
      DeleteTrnHrEmployeeTrnHrEmployeeEventIdDeleteApiResponse,
      DeleteTrnHrEmployeeTrnHrEmployeeEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnHrEmployeeTrnHrEmployeeEventIdGet: build.query<
      GetTrnHrEmployeeTrnHrEmployeeEventIdGetApiResponse,
      GetTrnHrEmployeeTrnHrEmployeeEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee/event/${queryArg.id}`
      })
    }),
    createTrnHrEmployeeAssetTrnHrEmployeeAssetPost: build.mutation<
      CreateTrnHrEmployeeAssetTrnHrEmployeeAssetPostApiResponse,
      CreateTrnHrEmployeeAssetTrnHrEmployeeAssetPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee_asset/`,
        method: 'POST',
        body: queryArg.trnHrEmployeeAssetInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnHrEmployeeAssetsTrnHrEmployeeAssetGet: build.query<
      GetAllTrnHrEmployeeAssetsTrnHrEmployeeAssetGetApiResponse,
      GetAllTrnHrEmployeeAssetsTrnHrEmployeeAssetGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee_asset/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPut: build.mutation<
      UpdateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPutApiResponse,
      UpdateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee_asset/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnHrEmployeeAssetUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDelete: build.mutation<
      DeleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDeleteApiResponse,
      DeleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee_asset/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnHrEmployeeAssetTrnHrEmployeeAssetIdGet: build.query<
      GetTrnHrEmployeeAssetTrnHrEmployeeAssetIdGetApiResponse,
      GetTrnHrEmployeeAssetTrnHrEmployeeAssetIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee_asset/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnHrEmployeeAssetEventGet: build.query<
      GetAllTrnHrEmployeeAssetEventGetApiResponse,
      GetAllTrnHrEmployeeAssetEventGetApiArg
    >({
      query: () => ({ url: `/trn_hr_employee_asset/event/` })
    }),
    createTrnHrEmployeeAssetTrnHrEmployeeAssetEventPost: build.mutation<
      CreateTrnHrEmployeeAssetTrnHrEmployeeAssetEventPostApiResponse,
      CreateTrnHrEmployeeAssetTrnHrEmployeeAssetEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee_asset/event/`,
        method: 'POST',
        body: queryArg.trnHrEmployeeAssetInsert
      })
    }),
    updateTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdPut: build.mutation<
      UpdateTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdPutApiResponse,
      UpdateTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee_asset/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnHrEmployeeAssetUpdate
      })
    }),
    deleteTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdDelete: build.mutation<
      DeleteTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdDeleteApiResponse,
      DeleteTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee_asset/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdGet: build.query<
      GetTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdGetApiResponse,
      GetTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee_asset/event/${queryArg.id}`
      })
    }),
    createTrnInvAllocationTrnInvAllocationPost: build.mutation<
      CreateTrnInvAllocationTrnInvAllocationPostApiResponse,
      CreateTrnInvAllocationTrnInvAllocationPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation/`,
        method: 'POST',
        body: queryArg.trnInvAllocationInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvAllocationsTrnInvAllocationGet: build.query<
      GetAllTrnInvAllocationsTrnInvAllocationGetApiResponse,
      GetAllTrnInvAllocationsTrnInvAllocationGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvAllocationTrnInvAllocationIdPut: build.mutation<
      UpdateTrnInvAllocationTrnInvAllocationIdPutApiResponse,
      UpdateTrnInvAllocationTrnInvAllocationIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvAllocationUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvAllocationTrnInvAllocationIdDelete: build.mutation<
      DeleteTrnInvAllocationTrnInvAllocationIdDeleteApiResponse,
      DeleteTrnInvAllocationTrnInvAllocationIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvAllocationTrnInvAllocationIdGet: build.query<
      GetTrnInvAllocationTrnInvAllocationIdGetApiResponse,
      GetTrnInvAllocationTrnInvAllocationIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvAllocationEventGet: build.query<
      GetAllTrnInvAllocationEventGetApiResponse,
      GetAllTrnInvAllocationEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_allocation/event/` })
    }),
    createTrnInvAllocationTrnInvAllocationEventPost: build.mutation<
      CreateTrnInvAllocationTrnInvAllocationEventPostApiResponse,
      CreateTrnInvAllocationTrnInvAllocationEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation/event/`,
        method: 'POST',
        body: queryArg.trnInvAllocationInsert
      })
    }),
    updateTrnInvAllocationTrnInvAllocationEventIdPut: build.mutation<
      UpdateTrnInvAllocationTrnInvAllocationEventIdPutApiResponse,
      UpdateTrnInvAllocationTrnInvAllocationEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvAllocationUpdate
      })
    }),
    deleteTrnInvAllocationTrnInvAllocationEventIdDelete: build.mutation<
      DeleteTrnInvAllocationTrnInvAllocationEventIdDeleteApiResponse,
      DeleteTrnInvAllocationTrnInvAllocationEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvAllocationTrnInvAllocationEventIdGet: build.query<
      GetTrnInvAllocationTrnInvAllocationEventIdGetApiResponse,
      GetTrnInvAllocationTrnInvAllocationEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation/event/${queryArg.id}`
      })
    }),
    createTrnInvConsumptionTrnInvConsumptionPost: build.mutation<
      CreateTrnInvConsumptionTrnInvConsumptionPostApiResponse,
      CreateTrnInvConsumptionTrnInvConsumptionPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption/`,
        method: 'POST',
        body: queryArg.trnInvConsumptionInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvConsumptionsTrnInvConsumptionGet: build.query<
      GetAllTrnInvConsumptionsTrnInvConsumptionGetApiResponse,
      GetAllTrnInvConsumptionsTrnInvConsumptionGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvConsumptionTrnInvConsumptionIdPut: build.mutation<
      UpdateTrnInvConsumptionTrnInvConsumptionIdPutApiResponse,
      UpdateTrnInvConsumptionTrnInvConsumptionIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvConsumptionUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvConsumptionTrnInvConsumptionIdDelete: build.mutation<
      DeleteTrnInvConsumptionTrnInvConsumptionIdDeleteApiResponse,
      DeleteTrnInvConsumptionTrnInvConsumptionIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvConsumptionTrnInvConsumptionIdGet: build.query<
      GetTrnInvConsumptionTrnInvConsumptionIdGetApiResponse,
      GetTrnInvConsumptionTrnInvConsumptionIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvConsumptionEventGet: build.query<
      GetAllTrnInvConsumptionEventGetApiResponse,
      GetAllTrnInvConsumptionEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_consumption/event/` })
    }),
    createTrnInvConsumptionTrnInvConsumptionEventPost: build.mutation<
      CreateTrnInvConsumptionTrnInvConsumptionEventPostApiResponse,
      CreateTrnInvConsumptionTrnInvConsumptionEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption/event/`,
        method: 'POST',
        body: queryArg.trnInvConsumptionInsert
      })
    }),
    updateTrnInvConsumptionTrnInvConsumptionEventIdPut: build.mutation<
      UpdateTrnInvConsumptionTrnInvConsumptionEventIdPutApiResponse,
      UpdateTrnInvConsumptionTrnInvConsumptionEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvConsumptionUpdate
      })
    }),
    deleteTrnInvConsumptionTrnInvConsumptionEventIdDelete: build.mutation<
      DeleteTrnInvConsumptionTrnInvConsumptionEventIdDeleteApiResponse,
      DeleteTrnInvConsumptionTrnInvConsumptionEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvConsumptionTrnInvConsumptionEventIdGet: build.query<
      GetTrnInvConsumptionTrnInvConsumptionEventIdGetApiResponse,
      GetTrnInvConsumptionTrnInvConsumptionEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption/event/${queryArg.id}`
      })
    }),
    createTrnInvConsumptionItemsTrnInvConsumptionItemsPost: build.mutation<
      CreateTrnInvConsumptionItemsTrnInvConsumptionItemsPostApiResponse,
      CreateTrnInvConsumptionItemsTrnInvConsumptionItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption_items/`,
        method: 'POST',
        body: queryArg.trnInvConsumptionItemsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvConsumptionItemssTrnInvConsumptionItemsGet: build.query<
      GetAllTrnInvConsumptionItemssTrnInvConsumptionItemsGetApiResponse,
      GetAllTrnInvConsumptionItemssTrnInvConsumptionItemsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption_items/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvConsumptionItemsTrnInvConsumptionItemsIdPut: build.mutation<
      UpdateTrnInvConsumptionItemsTrnInvConsumptionItemsIdPutApiResponse,
      UpdateTrnInvConsumptionItemsTrnInvConsumptionItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvConsumptionItemsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvConsumptionItemsTrnInvConsumptionItemsIdDelete: build.mutation<
      DeleteTrnInvConsumptionItemsTrnInvConsumptionItemsIdDeleteApiResponse,
      DeleteTrnInvConsumptionItemsTrnInvConsumptionItemsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption_items/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvConsumptionItemsTrnInvConsumptionItemsIdGet: build.query<
      GetTrnInvConsumptionItemsTrnInvConsumptionItemsIdGetApiResponse,
      GetTrnInvConsumptionItemsTrnInvConsumptionItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption_items/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvConsumptionItemsEventGet: build.query<
      GetAllTrnInvConsumptionItemsEventGetApiResponse,
      GetAllTrnInvConsumptionItemsEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_consumption_items/event/` })
    }),
    createTrnInvConsumptionItemsTrnInvConsumptionItemsEventPost: build.mutation<
      CreateTrnInvConsumptionItemsTrnInvConsumptionItemsEventPostApiResponse,
      CreateTrnInvConsumptionItemsTrnInvConsumptionItemsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption_items/event/`,
        method: 'POST',
        body: queryArg.trnInvConsumptionItemsInsert
      })
    }),
    updateTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdPut:
      build.mutation<
        UpdateTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdPutApiResponse,
        UpdateTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_consumption_items/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvConsumptionItemsUpdate
        })
      }),
    deleteTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdDelete:
      build.mutation<
        DeleteTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdDeleteApiResponse,
        DeleteTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_consumption_items/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdGet: build.query<
      GetTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdGetApiResponse,
      GetTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption_items/event/${queryArg.id}`
      })
    }),
    createTrnInvItemTrnInvItemPost: build.mutation<
      CreateTrnInvItemTrnInvItemPostApiResponse,
      CreateTrnInvItemTrnInvItemPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item/`,
        method: 'POST',
        body: queryArg.trnInvItemInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemsTrnInvItemGet: build.query<
      GetAllTrnInvItemsTrnInvItemGetApiResponse,
      GetAllTrnInvItemsTrnInvItemGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvItemTrnInvItemIdPut: build.mutation<
      UpdateTrnInvItemTrnInvItemIdPutApiResponse,
      UpdateTrnInvItemTrnInvItemIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvItemTrnInvItemIdDelete: build.mutation<
      DeleteTrnInvItemTrnInvItemIdDeleteApiResponse,
      DeleteTrnInvItemTrnInvItemIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvItemTrnInvItemIdGet: build.query<
      GetTrnInvItemTrnInvItemIdGetApiResponse,
      GetTrnInvItemTrnInvItemIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemEventGet: build.query<
      GetAllTrnInvItemEventGetApiResponse,
      GetAllTrnInvItemEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item/event/` })
    }),
    createTrnInvItemTrnInvItemEventPost: build.mutation<
      CreateTrnInvItemTrnInvItemEventPostApiResponse,
      CreateTrnInvItemTrnInvItemEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item/event/`,
        method: 'POST',
        body: queryArg.trnInvItemInsert
      })
    }),
    updateTrnInvItemTrnInvItemEventIdPut: build.mutation<
      UpdateTrnInvItemTrnInvItemEventIdPutApiResponse,
      UpdateTrnInvItemTrnInvItemEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemUpdate
      })
    }),
    deleteTrnInvItemTrnInvItemEventIdDelete: build.mutation<
      DeleteTrnInvItemTrnInvItemEventIdDeleteApiResponse,
      DeleteTrnInvItemTrnInvItemEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemTrnInvItemEventIdGet: build.query<
      GetTrnInvItemTrnInvItemEventIdGetApiResponse,
      GetTrnInvItemTrnInvItemEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_inv_item/event/${queryArg.id}` })
    }),
    createTrnInvItemAdjustmentTrnInvItemAdjustmentPost: build.mutation<
      CreateTrnInvItemAdjustmentTrnInvItemAdjustmentPostApiResponse,
      CreateTrnInvItemAdjustmentTrnInvItemAdjustmentPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment/`,
        method: 'POST',
        body: queryArg.trnInvItemAdjustmentInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemAdjustmentsTrnInvItemAdjustmentGet: build.query<
      GetAllTrnInvItemAdjustmentsTrnInvItemAdjustmentGetApiResponse,
      GetAllTrnInvItemAdjustmentsTrnInvItemAdjustmentGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPut: build.mutation<
      UpdateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPutApiResponse,
      UpdateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemAdjustmentUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDelete: build.mutation<
      DeleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDeleteApiResponse,
      DeleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvItemAdjustmentTrnInvItemAdjustmentIdGet: build.query<
      GetTrnInvItemAdjustmentTrnInvItemAdjustmentIdGetApiResponse,
      GetTrnInvItemAdjustmentTrnInvItemAdjustmentIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemAdjustmentEventGet: build.query<
      GetAllTrnInvItemAdjustmentEventGetApiResponse,
      GetAllTrnInvItemAdjustmentEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_adjustment/event/` })
    }),
    createTrnInvItemAdjustmentTrnInvItemAdjustmentEventPost: build.mutation<
      CreateTrnInvItemAdjustmentTrnInvItemAdjustmentEventPostApiResponse,
      CreateTrnInvItemAdjustmentTrnInvItemAdjustmentEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment/event/`,
        method: 'POST',
        body: queryArg.trnInvItemAdjustmentInsert
      })
    }),
    updateTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdPut: build.mutation<
      UpdateTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdPutApiResponse,
      UpdateTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemAdjustmentUpdate
      })
    }),
    deleteTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdDelete: build.mutation<
      DeleteTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdDeleteApiResponse,
      DeleteTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdGet: build.query<
      GetTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdGetApiResponse,
      GetTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment/event/${queryArg.id}`
      })
    }),
    createTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlPost: build.mutation<
      CreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlPostApiResponse,
      CreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment_dtl/`,
        method: 'POST',
        body: queryArg.trnInvItemAdjustmentDtlInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemAdjustmentDtlsTrnInvItemAdjustmentDtlGet: build.query<
      GetAllTrnInvItemAdjustmentDtlsTrnInvItemAdjustmentDtlGetApiResponse,
      GetAllTrnInvItemAdjustmentDtlsTrnInvItemAdjustmentDtlGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment_dtl/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdPut: build.mutation<
      UpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdPutApiResponse,
      UpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment_dtl/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemAdjustmentDtlUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdDelete:
      build.mutation<
        DeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdDeleteApiResponse,
        DeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_item_adjustment_dtl/${queryArg.id}`,
          method: 'DELETE',
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    getTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdGet: build.query<
      GetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdGetApiResponse,
      GetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment_dtl/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemAdjustmentDtlEventGet: build.query<
      GetAllTrnInvItemAdjustmentDtlEventGetApiResponse,
      GetAllTrnInvItemAdjustmentDtlEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_adjustment_dtl/event/` })
    }),
    createTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventPost:
      build.mutation<
        CreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventPostApiResponse,
        CreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_item_adjustment_dtl/event/`,
          method: 'POST',
          body: queryArg.trnInvItemAdjustmentDtlInsert
        })
      }),
    updateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdPut:
      build.mutation<
        UpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdPutApiResponse,
        UpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_item_adjustment_dtl/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvItemAdjustmentDtlUpdate
        })
      }),
    deleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdDelete:
      build.mutation<
        DeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdDeleteApiResponse,
        DeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_item_adjustment_dtl/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdGet: build.query<
      GetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdGetApiResponse,
      GetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment_dtl/event/${queryArg.id}`
      })
    }),
    createTrnInvItemAllocationTrnInvItemAllocationPost: build.mutation<
      CreateTrnInvItemAllocationTrnInvItemAllocationPostApiResponse,
      CreateTrnInvItemAllocationTrnInvItemAllocationPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_allocation/`,
        method: 'POST',
        body: queryArg.trnInvItemAllocationInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemAllocationsTrnInvItemAllocationGet: build.query<
      GetAllTrnInvItemAllocationsTrnInvItemAllocationGetApiResponse,
      GetAllTrnInvItemAllocationsTrnInvItemAllocationGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_allocation/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvItemAllocationTrnInvItemAllocationIdPut: build.mutation<
      UpdateTrnInvItemAllocationTrnInvItemAllocationIdPutApiResponse,
      UpdateTrnInvItemAllocationTrnInvItemAllocationIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_allocation/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemAllocationUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvItemAllocationTrnInvItemAllocationIdDelete: build.mutation<
      DeleteTrnInvItemAllocationTrnInvItemAllocationIdDeleteApiResponse,
      DeleteTrnInvItemAllocationTrnInvItemAllocationIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_allocation/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvItemAllocationTrnInvItemAllocationIdGet: build.query<
      GetTrnInvItemAllocationTrnInvItemAllocationIdGetApiResponse,
      GetTrnInvItemAllocationTrnInvItemAllocationIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_allocation/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemAllocationEventGet: build.query<
      GetAllTrnInvItemAllocationEventGetApiResponse,
      GetAllTrnInvItemAllocationEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_allocation/event/` })
    }),
    createTrnInvItemAllocationTrnInvItemAllocationEventPost: build.mutation<
      CreateTrnInvItemAllocationTrnInvItemAllocationEventPostApiResponse,
      CreateTrnInvItemAllocationTrnInvItemAllocationEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_allocation/event/`,
        method: 'POST',
        body: queryArg.trnInvItemAllocationInsert
      })
    }),
    updateTrnInvItemAllocationTrnInvItemAllocationEventIdPut: build.mutation<
      UpdateTrnInvItemAllocationTrnInvItemAllocationEventIdPutApiResponse,
      UpdateTrnInvItemAllocationTrnInvItemAllocationEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_allocation/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemAllocationUpdate
      })
    }),
    deleteTrnInvItemAllocationTrnInvItemAllocationEventIdDelete: build.mutation<
      DeleteTrnInvItemAllocationTrnInvItemAllocationEventIdDeleteApiResponse,
      DeleteTrnInvItemAllocationTrnInvItemAllocationEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_allocation/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemAllocationTrnInvItemAllocationEventIdGet: build.query<
      GetTrnInvItemAllocationTrnInvItemAllocationEventIdGetApiResponse,
      GetTrnInvItemAllocationTrnInvItemAllocationEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_allocation/event/${queryArg.id}`
      })
    }),
    createTrnInvItemDemandTrnInvItemDemandPost: build.mutation<
      CreateTrnInvItemDemandTrnInvItemDemandPostApiResponse,
      CreateTrnInvItemDemandTrnInvItemDemandPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand/`,
        method: 'POST',
        body: queryArg.trnInvItemDemandInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemDemandsTrnInvItemDemandGet: build.query<
      GetAllTrnInvItemDemandsTrnInvItemDemandGetApiResponse,
      GetAllTrnInvItemDemandsTrnInvItemDemandGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvItemDemandTrnInvItemDemandIdPut: build.mutation<
      UpdateTrnInvItemDemandTrnInvItemDemandIdPutApiResponse,
      UpdateTrnInvItemDemandTrnInvItemDemandIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemDemandUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvItemDemandTrnInvItemDemandIdDelete: build.mutation<
      DeleteTrnInvItemDemandTrnInvItemDemandIdDeleteApiResponse,
      DeleteTrnInvItemDemandTrnInvItemDemandIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvItemDemandTrnInvItemDemandIdGet: build.query<
      GetTrnInvItemDemandTrnInvItemDemandIdGetApiResponse,
      GetTrnInvItemDemandTrnInvItemDemandIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemDemandEventGet: build.query<
      GetAllTrnInvItemDemandEventGetApiResponse,
      GetAllTrnInvItemDemandEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_demand/event/` })
    }),
    createTrnInvItemDemandTrnInvItemDemandEventPost: build.mutation<
      CreateTrnInvItemDemandTrnInvItemDemandEventPostApiResponse,
      CreateTrnInvItemDemandTrnInvItemDemandEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand/event/`,
        method: 'POST',
        body: queryArg.trnInvItemDemandInsert
      })
    }),
    updateTrnInvItemDemandTrnInvItemDemandEventIdPut: build.mutation<
      UpdateTrnInvItemDemandTrnInvItemDemandEventIdPutApiResponse,
      UpdateTrnInvItemDemandTrnInvItemDemandEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemDemandUpdate
      })
    }),
    deleteTrnInvItemDemandTrnInvItemDemandEventIdDelete: build.mutation<
      DeleteTrnInvItemDemandTrnInvItemDemandEventIdDeleteApiResponse,
      DeleteTrnInvItemDemandTrnInvItemDemandEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemDemandTrnInvItemDemandEventIdGet: build.query<
      GetTrnInvItemDemandTrnInvItemDemandEventIdGetApiResponse,
      GetTrnInvItemDemandTrnInvItemDemandEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand/event/${queryArg.id}`
      })
    }),
    createTrnInvItemDemandItemsTrnInvItemDemandItemsPost: build.mutation<
      CreateTrnInvItemDemandItemsTrnInvItemDemandItemsPostApiResponse,
      CreateTrnInvItemDemandItemsTrnInvItemDemandItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_items/`,
        method: 'POST',
        body: queryArg.trnInvItemDemandItemsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemDemandItemssTrnInvItemDemandItemsGet: build.query<
      GetAllTrnInvItemDemandItemssTrnInvItemDemandItemsGetApiResponse,
      GetAllTrnInvItemDemandItemssTrnInvItemDemandItemsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_items/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvItemDemandItemsTrnInvItemDemandItemsIdPut: build.mutation<
      UpdateTrnInvItemDemandItemsTrnInvItemDemandItemsIdPutApiResponse,
      UpdateTrnInvItemDemandItemsTrnInvItemDemandItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemDemandItemsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvItemDemandItemsTrnInvItemDemandItemsIdDelete: build.mutation<
      DeleteTrnInvItemDemandItemsTrnInvItemDemandItemsIdDeleteApiResponse,
      DeleteTrnInvItemDemandItemsTrnInvItemDemandItemsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_items/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvItemDemandItemsTrnInvItemDemandItemsIdGet: build.query<
      GetTrnInvItemDemandItemsTrnInvItemDemandItemsIdGetApiResponse,
      GetTrnInvItemDemandItemsTrnInvItemDemandItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_items/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemDemandItemsEventGet: build.query<
      GetAllTrnInvItemDemandItemsEventGetApiResponse,
      GetAllTrnInvItemDemandItemsEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_demand_items/event/` })
    }),
    createTrnInvItemDemandItemsTrnInvItemDemandItemsEventPost: build.mutation<
      CreateTrnInvItemDemandItemsTrnInvItemDemandItemsEventPostApiResponse,
      CreateTrnInvItemDemandItemsTrnInvItemDemandItemsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_items/event/`,
        method: 'POST',
        body: queryArg.trnInvItemDemandItemsInsert
      })
    }),
    updateTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdPut: build.mutation<
      UpdateTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdPutApiResponse,
      UpdateTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_items/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemDemandItemsUpdate
      })
    }),
    deleteTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdDelete:
      build.mutation<
        DeleteTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdDeleteApiResponse,
        DeleteTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_item_demand_items/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdGet: build.query<
      GetTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdGetApiResponse,
      GetTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_items/event/${queryArg.id}`
      })
    }),
    createTrnInvItemTransferTrnInvItemTransferPost: build.mutation<
      CreateTrnInvItemTransferTrnInvItemTransferPostApiResponse,
      CreateTrnInvItemTransferTrnInvItemTransferPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer/`,
        method: 'POST',
        body: queryArg.trnInvItemTransferInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemTransfersTrnInvItemTransferGet: build.query<
      GetAllTrnInvItemTransfersTrnInvItemTransferGetApiResponse,
      GetAllTrnInvItemTransfersTrnInvItemTransferGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvItemTransferTrnInvItemTransferIdPut: build.mutation<
      UpdateTrnInvItemTransferTrnInvItemTransferIdPutApiResponse,
      UpdateTrnInvItemTransferTrnInvItemTransferIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemTransferUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvItemTransferTrnInvItemTransferIdDelete: build.mutation<
      DeleteTrnInvItemTransferTrnInvItemTransferIdDeleteApiResponse,
      DeleteTrnInvItemTransferTrnInvItemTransferIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvItemTransferTrnInvItemTransferIdGet: build.query<
      GetTrnInvItemTransferTrnInvItemTransferIdGetApiResponse,
      GetTrnInvItemTransferTrnInvItemTransferIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemTransferEventGet: build.query<
      GetAllTrnInvItemTransferEventGetApiResponse,
      GetAllTrnInvItemTransferEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_transfer/event/` })
    }),
    createTrnInvItemTransferTrnInvItemTransferEventPost: build.mutation<
      CreateTrnInvItemTransferTrnInvItemTransferEventPostApiResponse,
      CreateTrnInvItemTransferTrnInvItemTransferEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer/event/`,
        method: 'POST',
        body: queryArg.trnInvItemTransferInsert
      })
    }),
    updateTrnInvItemTransferTrnInvItemTransferEventIdPut: build.mutation<
      UpdateTrnInvItemTransferTrnInvItemTransferEventIdPutApiResponse,
      UpdateTrnInvItemTransferTrnInvItemTransferEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemTransferUpdate
      })
    }),
    deleteTrnInvItemTransferTrnInvItemTransferEventIdDelete: build.mutation<
      DeleteTrnInvItemTransferTrnInvItemTransferEventIdDeleteApiResponse,
      DeleteTrnInvItemTransferTrnInvItemTransferEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemTransferTrnInvItemTransferEventIdGet: build.query<
      GetTrnInvItemTransferTrnInvItemTransferEventIdGetApiResponse,
      GetTrnInvItemTransferTrnInvItemTransferEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer/event/${queryArg.id}`
      })
    }),
    createTrnInvItemTransferDtlTrnInvItemTransferDtlPost: build.mutation<
      CreateTrnInvItemTransferDtlTrnInvItemTransferDtlPostApiResponse,
      CreateTrnInvItemTransferDtlTrnInvItemTransferDtlPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer_dtl/`,
        method: 'POST',
        body: queryArg.trnInvItemTransferDtlInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemTransferDtlsTrnInvItemTransferDtlGet: build.query<
      GetAllTrnInvItemTransferDtlsTrnInvItemTransferDtlGetApiResponse,
      GetAllTrnInvItemTransferDtlsTrnInvItemTransferDtlGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer_dtl/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvItemTransferDtlTrnInvItemTransferDtlIdPut: build.mutation<
      UpdateTrnInvItemTransferDtlTrnInvItemTransferDtlIdPutApiResponse,
      UpdateTrnInvItemTransferDtlTrnInvItemTransferDtlIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer_dtl/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemTransferDtlUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvItemTransferDtlTrnInvItemTransferDtlIdDelete: build.mutation<
      DeleteTrnInvItemTransferDtlTrnInvItemTransferDtlIdDeleteApiResponse,
      DeleteTrnInvItemTransferDtlTrnInvItemTransferDtlIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer_dtl/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvItemTransferDtlTrnInvItemTransferDtlIdGet: build.query<
      GetTrnInvItemTransferDtlTrnInvItemTransferDtlIdGetApiResponse,
      GetTrnInvItemTransferDtlTrnInvItemTransferDtlIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer_dtl/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvItemTransferDtlEventGet: build.query<
      GetAllTrnInvItemTransferDtlEventGetApiResponse,
      GetAllTrnInvItemTransferDtlEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_transfer_dtl/event/` })
    }),
    createTrnInvItemTransferDtlTrnInvItemTransferDtlEventPost: build.mutation<
      CreateTrnInvItemTransferDtlTrnInvItemTransferDtlEventPostApiResponse,
      CreateTrnInvItemTransferDtlTrnInvItemTransferDtlEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer_dtl/event/`,
        method: 'POST',
        body: queryArg.trnInvItemTransferDtlInsert
      })
    }),
    updateTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdPut: build.mutation<
      UpdateTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdPutApiResponse,
      UpdateTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer_dtl/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemTransferDtlUpdate
      })
    }),
    deleteTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdDelete:
      build.mutation<
        DeleteTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdDeleteApiResponse,
        DeleteTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_item_transfer_dtl/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdGet: build.query<
      GetTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdGetApiResponse,
      GetTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer_dtl/event/${queryArg.id}`
      })
    }),
    createTrnInvLogisticsTrnInvLogisticsPost: build.mutation<
      CreateTrnInvLogisticsTrnInvLogisticsPostApiResponse,
      CreateTrnInvLogisticsTrnInvLogisticsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics/`,
        method: 'POST',
        body: queryArg.trnInvLogisticsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvLogisticssTrnInvLogisticsGet: build.query<
      GetAllTrnInvLogisticssTrnInvLogisticsGetApiResponse,
      GetAllTrnInvLogisticssTrnInvLogisticsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvLogisticsTrnInvLogisticsIdPut: build.mutation<
      UpdateTrnInvLogisticsTrnInvLogisticsIdPutApiResponse,
      UpdateTrnInvLogisticsTrnInvLogisticsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvLogisticsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvLogisticsTrnInvLogisticsIdDelete: build.mutation<
      DeleteTrnInvLogisticsTrnInvLogisticsIdDeleteApiResponse,
      DeleteTrnInvLogisticsTrnInvLogisticsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvLogisticsTrnInvLogisticsIdGet: build.query<
      GetTrnInvLogisticsTrnInvLogisticsIdGetApiResponse,
      GetTrnInvLogisticsTrnInvLogisticsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvLogisticsEventGet: build.query<
      GetAllTrnInvLogisticsEventGetApiResponse,
      GetAllTrnInvLogisticsEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_logistics/event/` })
    }),
    createTrnInvLogisticsTrnInvLogisticsEventPost: build.mutation<
      CreateTrnInvLogisticsTrnInvLogisticsEventPostApiResponse,
      CreateTrnInvLogisticsTrnInvLogisticsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics/event/`,
        method: 'POST',
        body: queryArg.trnInvLogisticsInsert
      })
    }),
    updateTrnInvLogisticsTrnInvLogisticsEventIdPut: build.mutation<
      UpdateTrnInvLogisticsTrnInvLogisticsEventIdPutApiResponse,
      UpdateTrnInvLogisticsTrnInvLogisticsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvLogisticsUpdate
      })
    }),
    deleteTrnInvLogisticsTrnInvLogisticsEventIdDelete: build.mutation<
      DeleteTrnInvLogisticsTrnInvLogisticsEventIdDeleteApiResponse,
      DeleteTrnInvLogisticsTrnInvLogisticsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvLogisticsTrnInvLogisticsEventIdGet: build.query<
      GetTrnInvLogisticsTrnInvLogisticsEventIdGetApiResponse,
      GetTrnInvLogisticsTrnInvLogisticsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics/event/${queryArg.id}`
      })
    }),
    createTrnInvLogisticsDtlTrnInvLogisticsDtlPost: build.mutation<
      CreateTrnInvLogisticsDtlTrnInvLogisticsDtlPostApiResponse,
      CreateTrnInvLogisticsDtlTrnInvLogisticsDtlPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_dtl/`,
        method: 'POST',
        body: queryArg.trnInvLogisticsDtlInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvLogisticsDtlsTrnInvLogisticsDtlGet: build.query<
      GetAllTrnInvLogisticsDtlsTrnInvLogisticsDtlGetApiResponse,
      GetAllTrnInvLogisticsDtlsTrnInvLogisticsDtlGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_dtl/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPut: build.mutation<
      UpdateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPutApiResponse,
      UpdateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_dtl/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvLogisticsDtlUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDelete: build.mutation<
      DeleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDeleteApiResponse,
      DeleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_dtl/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvLogisticsDtlTrnInvLogisticsDtlIdGet: build.query<
      GetTrnInvLogisticsDtlTrnInvLogisticsDtlIdGetApiResponse,
      GetTrnInvLogisticsDtlTrnInvLogisticsDtlIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_dtl/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvLogisticsDtlEventGet: build.query<
      GetAllTrnInvLogisticsDtlEventGetApiResponse,
      GetAllTrnInvLogisticsDtlEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_logistics_dtl/event/` })
    }),
    createTrnInvLogisticsDtlTrnInvLogisticsDtlEventPost: build.mutation<
      CreateTrnInvLogisticsDtlTrnInvLogisticsDtlEventPostApiResponse,
      CreateTrnInvLogisticsDtlTrnInvLogisticsDtlEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_dtl/event/`,
        method: 'POST',
        body: queryArg.trnInvLogisticsDtlInsert
      })
    }),
    updateTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdPut: build.mutation<
      UpdateTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdPutApiResponse,
      UpdateTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_dtl/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvLogisticsDtlUpdate
      })
    }),
    deleteTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdDelete: build.mutation<
      DeleteTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdDeleteApiResponse,
      DeleteTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_dtl/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdGet: build.query<
      GetTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdGetApiResponse,
      GetTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_dtl/event/${queryArg.id}`
      })
    }),
    createTrnInvPurchaseTrnInvPurchasePost: build.mutation<
      CreateTrnInvPurchaseTrnInvPurchasePostApiResponse,
      CreateTrnInvPurchaseTrnInvPurchasePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvPurchasesTrnInvPurchaseGet: build.query<
      GetAllTrnInvPurchasesTrnInvPurchaseGetApiResponse,
      GetAllTrnInvPurchasesTrnInvPurchaseGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvPurchaseTrnInvPurchaseIdPut: build.mutation<
      UpdateTrnInvPurchaseTrnInvPurchaseIdPutApiResponse,
      UpdateTrnInvPurchaseTrnInvPurchaseIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvPurchaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvPurchaseTrnInvPurchaseIdDelete: build.mutation<
      DeleteTrnInvPurchaseTrnInvPurchaseIdDeleteApiResponse,
      DeleteTrnInvPurchaseTrnInvPurchaseIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvPurchaseTrnInvPurchaseIdGet: build.query<
      GetTrnInvPurchaseTrnInvPurchaseIdGetApiResponse,
      GetTrnInvPurchaseTrnInvPurchaseIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvPurchaseEventGet: build.query<
      GetAllTrnInvPurchaseEventGetApiResponse,
      GetAllTrnInvPurchaseEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_purchase/event/` })
    }),
    createTrnInvPurchaseTrnInvPurchaseEventPost: build.mutation<
      CreateTrnInvPurchaseTrnInvPurchaseEventPostApiResponse,
      CreateTrnInvPurchaseTrnInvPurchaseEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase/event/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseInsert
      })
    }),
    updateTrnInvPurchaseTrnInvPurchaseEventIdPut: build.mutation<
      UpdateTrnInvPurchaseTrnInvPurchaseEventIdPutApiResponse,
      UpdateTrnInvPurchaseTrnInvPurchaseEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvPurchaseUpdate
      })
    }),
    deleteTrnInvPurchaseTrnInvPurchaseEventIdDelete: build.mutation<
      DeleteTrnInvPurchaseTrnInvPurchaseEventIdDeleteApiResponse,
      DeleteTrnInvPurchaseTrnInvPurchaseEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvPurchaseTrnInvPurchaseEventIdGet: build.query<
      GetTrnInvPurchaseTrnInvPurchaseEventIdGetApiResponse,
      GetTrnInvPurchaseTrnInvPurchaseEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase/event/${queryArg.id}`
      })
    }),
    createTrnInvPurchaseDocumentTrnInvPurchaseDocumentPost: build.mutation<
      CreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentPostApiResponse,
      CreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_document/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseDocumentInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvPurchaseDocumentsTrnInvPurchaseDocumentGet: build.query<
      GetAllTrnInvPurchaseDocumentsTrnInvPurchaseDocumentGetApiResponse,
      GetAllTrnInvPurchaseDocumentsTrnInvPurchaseDocumentGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_document/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdPut: build.mutation<
      UpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdPutApiResponse,
      UpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_document/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvPurchaseDocumentUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdDelete: build.mutation<
      DeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdDeleteApiResponse,
      DeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_document/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdGet: build.query<
      GetTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdGetApiResponse,
      GetTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_document/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvPurchaseDocumentEventGet: build.query<
      GetAllTrnInvPurchaseDocumentEventGetApiResponse,
      GetAllTrnInvPurchaseDocumentEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_purchase_document/event/` })
    }),
    createTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventPost: build.mutation<
      CreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventPostApiResponse,
      CreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_document/event/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseDocumentInsert
      })
    }),
    updateTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdPut:
      build.mutation<
        UpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdPutApiResponse,
        UpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_purchase_document/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvPurchaseDocumentUpdate
        })
      }),
    deleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdDelete:
      build.mutation<
        DeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdDeleteApiResponse,
        DeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_purchase_document/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdGet: build.query<
      GetTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdGetApiResponse,
      GetTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_document/event/${queryArg.id}`
      })
    }),
    createTrnInvPurchaseItemsTrnInvPurchaseItemsPost: build.mutation<
      CreateTrnInvPurchaseItemsTrnInvPurchaseItemsPostApiResponse,
      CreateTrnInvPurchaseItemsTrnInvPurchaseItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_items/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseItemsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvPurchaseItemssTrnInvPurchaseItemsGet: build.query<
      GetAllTrnInvPurchaseItemssTrnInvPurchaseItemsGetApiResponse,
      GetAllTrnInvPurchaseItemssTrnInvPurchaseItemsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_items/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvPurchaseItemsTrnInvPurchaseItemsIdPut: build.mutation<
      UpdateTrnInvPurchaseItemsTrnInvPurchaseItemsIdPutApiResponse,
      UpdateTrnInvPurchaseItemsTrnInvPurchaseItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvPurchaseItemsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvPurchaseItemsTrnInvPurchaseItemsIdDelete: build.mutation<
      DeleteTrnInvPurchaseItemsTrnInvPurchaseItemsIdDeleteApiResponse,
      DeleteTrnInvPurchaseItemsTrnInvPurchaseItemsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_items/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvPurchaseItemsTrnInvPurchaseItemsIdGet: build.query<
      GetTrnInvPurchaseItemsTrnInvPurchaseItemsIdGetApiResponse,
      GetTrnInvPurchaseItemsTrnInvPurchaseItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_items/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvPurchaseItemsEventGet: build.query<
      GetAllTrnInvPurchaseItemsEventGetApiResponse,
      GetAllTrnInvPurchaseItemsEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_purchase_items/event/` })
    }),
    createTrnInvPurchaseItemsTrnInvPurchaseItemsEventPost: build.mutation<
      CreateTrnInvPurchaseItemsTrnInvPurchaseItemsEventPostApiResponse,
      CreateTrnInvPurchaseItemsTrnInvPurchaseItemsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_items/event/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseItemsInsert
      })
    }),
    updateTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdPut: build.mutation<
      UpdateTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdPutApiResponse,
      UpdateTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_items/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvPurchaseItemsUpdate
      })
    }),
    deleteTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdDelete: build.mutation<
      DeleteTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdDeleteApiResponse,
      DeleteTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_items/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdGet: build.query<
      GetTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdGetApiResponse,
      GetTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_items/event/${queryArg.id}`
      })
    }),
    createTrnInvPurchaseReqTrnInvPurchaseReqPost: build.mutation<
      CreateTrnInvPurchaseReqTrnInvPurchaseReqPostApiResponse,
      CreateTrnInvPurchaseReqTrnInvPurchaseReqPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_req/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseReqInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvPurchaseReqsTrnInvPurchaseReqGet: build.query<
      GetAllTrnInvPurchaseReqsTrnInvPurchaseReqGetApiResponse,
      GetAllTrnInvPurchaseReqsTrnInvPurchaseReqGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_req/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnInvPurchaseReqTrnInvPurchaseReqIdPut: build.mutation<
      UpdateTrnInvPurchaseReqTrnInvPurchaseReqIdPutApiResponse,
      UpdateTrnInvPurchaseReqTrnInvPurchaseReqIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_req/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvPurchaseReqUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnInvPurchaseReqTrnInvPurchaseReqIdDelete: build.mutation<
      DeleteTrnInvPurchaseReqTrnInvPurchaseReqIdDeleteApiResponse,
      DeleteTrnInvPurchaseReqTrnInvPurchaseReqIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_req/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnInvPurchaseReqTrnInvPurchaseReqIdGet: build.query<
      GetTrnInvPurchaseReqTrnInvPurchaseReqIdGetApiResponse,
      GetTrnInvPurchaseReqTrnInvPurchaseReqIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_req/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnInvPurchaseReqEventGet: build.query<
      GetAllTrnInvPurchaseReqEventGetApiResponse,
      GetAllTrnInvPurchaseReqEventGetApiArg
    >({
      query: () => ({ url: `/trn_inv_purchase_req/event/` })
    }),
    createTrnInvPurchaseReqTrnInvPurchaseReqEventPost: build.mutation<
      CreateTrnInvPurchaseReqTrnInvPurchaseReqEventPostApiResponse,
      CreateTrnInvPurchaseReqTrnInvPurchaseReqEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_req/event/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseReqInsert
      })
    }),
    updateTrnInvPurchaseReqTrnInvPurchaseReqEventIdPut: build.mutation<
      UpdateTrnInvPurchaseReqTrnInvPurchaseReqEventIdPutApiResponse,
      UpdateTrnInvPurchaseReqTrnInvPurchaseReqEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_req/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvPurchaseReqUpdate
      })
    }),
    deleteTrnInvPurchaseReqTrnInvPurchaseReqEventIdDelete: build.mutation<
      DeleteTrnInvPurchaseReqTrnInvPurchaseReqEventIdDeleteApiResponse,
      DeleteTrnInvPurchaseReqTrnInvPurchaseReqEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_req/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvPurchaseReqTrnInvPurchaseReqEventIdGet: build.query<
      GetTrnInvPurchaseReqTrnInvPurchaseReqEventIdGetApiResponse,
      GetTrnInvPurchaseReqTrnInvPurchaseReqEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_req/event/${queryArg.id}`
      })
    }),
    createTrnProductivityTrnProductivityPost: build.mutation<
      CreateTrnProductivityTrnProductivityPostApiResponse,
      CreateTrnProductivityTrnProductivityPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity/`,
        method: 'POST',
        body: queryArg.trnProductivityInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnProductivitysTrnProductivityGet: build.query<
      GetAllTrnProductivitysTrnProductivityGetApiResponse,
      GetAllTrnProductivitysTrnProductivityGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnProductivityTrnProductivityIdPut: build.mutation<
      UpdateTrnProductivityTrnProductivityIdPutApiResponse,
      UpdateTrnProductivityTrnProductivityIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnProductivityUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnProductivityTrnProductivityIdDelete: build.mutation<
      DeleteTrnProductivityTrnProductivityIdDeleteApiResponse,
      DeleteTrnProductivityTrnProductivityIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnProductivityTrnProductivityIdGet: build.query<
      GetTrnProductivityTrnProductivityIdGetApiResponse,
      GetTrnProductivityTrnProductivityIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnProductivityEventGet: build.query<
      GetAllTrnProductivityEventGetApiResponse,
      GetAllTrnProductivityEventGetApiArg
    >({
      query: () => ({ url: `/trn_productivity/event/` })
    }),
    createTrnProductivityTrnProductivityEventPost: build.mutation<
      CreateTrnProductivityTrnProductivityEventPostApiResponse,
      CreateTrnProductivityTrnProductivityEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity/event/`,
        method: 'POST',
        body: queryArg.trnProductivityInsert
      })
    }),
    updateTrnProductivityTrnProductivityEventIdPut: build.mutation<
      UpdateTrnProductivityTrnProductivityEventIdPutApiResponse,
      UpdateTrnProductivityTrnProductivityEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnProductivityUpdate
      })
    }),
    deleteTrnProductivityTrnProductivityEventIdDelete: build.mutation<
      DeleteTrnProductivityTrnProductivityEventIdDeleteApiResponse,
      DeleteTrnProductivityTrnProductivityEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnProductivityTrnProductivityEventIdGet: build.query<
      GetTrnProductivityTrnProductivityEventIdGetApiResponse,
      GetTrnProductivityTrnProductivityEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity/event/${queryArg.id}`
      })
    }),
    createTrnPurchaseOrderTrnPurchaseOrderPost: build.mutation<
      CreateTrnPurchaseOrderTrnPurchaseOrderPostApiResponse,
      CreateTrnPurchaseOrderTrnPurchaseOrderPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order/`,
        method: 'POST',
        body: queryArg.trnPurchaseOrderInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnPurchaseOrdersTrnPurchaseOrderGet: build.query<
      GetAllTrnPurchaseOrdersTrnPurchaseOrderGetApiResponse,
      GetAllTrnPurchaseOrdersTrnPurchaseOrderGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnPurchaseOrderTrnPurchaseOrderIdPut: build.mutation<
      UpdateTrnPurchaseOrderTrnPurchaseOrderIdPutApiResponse,
      UpdateTrnPurchaseOrderTrnPurchaseOrderIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseOrderUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnPurchaseOrderTrnPurchaseOrderIdDelete: build.mutation<
      DeleteTrnPurchaseOrderTrnPurchaseOrderIdDeleteApiResponse,
      DeleteTrnPurchaseOrderTrnPurchaseOrderIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnPurchaseOrderTrnPurchaseOrderIdGet: build.query<
      GetTrnPurchaseOrderTrnPurchaseOrderIdGetApiResponse,
      GetTrnPurchaseOrderTrnPurchaseOrderIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnPurchaseOrderEventGet: build.query<
      GetAllTrnPurchaseOrderEventGetApiResponse,
      GetAllTrnPurchaseOrderEventGetApiArg
    >({
      query: () => ({ url: `/trn_purchase_order/event/` })
    }),
    createTrnPurchaseOrderTrnPurchaseOrderEventPost: build.mutation<
      CreateTrnPurchaseOrderTrnPurchaseOrderEventPostApiResponse,
      CreateTrnPurchaseOrderTrnPurchaseOrderEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order/event/`,
        method: 'POST',
        body: queryArg.trnPurchaseOrderInsert
      })
    }),
    updateTrnPurchaseOrderTrnPurchaseOrderEventIdPut: build.mutation<
      UpdateTrnPurchaseOrderTrnPurchaseOrderEventIdPutApiResponse,
      UpdateTrnPurchaseOrderTrnPurchaseOrderEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseOrderUpdate
      })
    }),
    deleteTrnPurchaseOrderTrnPurchaseOrderEventIdDelete: build.mutation<
      DeleteTrnPurchaseOrderTrnPurchaseOrderEventIdDeleteApiResponse,
      DeleteTrnPurchaseOrderTrnPurchaseOrderEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnPurchaseOrderTrnPurchaseOrderEventIdGet: build.query<
      GetTrnPurchaseOrderTrnPurchaseOrderEventIdGetApiResponse,
      GetTrnPurchaseOrderTrnPurchaseOrderEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order/event/${queryArg.id}`
      })
    }),
    createTrnPurchaseOrderItemsTrnPurchaseOrderItemsPost: build.mutation<
      CreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsPostApiResponse,
      CreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_items/`,
        method: 'POST',
        body: queryArg.trnPurchaseOrderItemsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnPurchaseOrderItemssTrnPurchaseOrderItemsGet: build.query<
      GetAllTrnPurchaseOrderItemssTrnPurchaseOrderItemsGetApiResponse,
      GetAllTrnPurchaseOrderItemssTrnPurchaseOrderItemsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_items/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdPut: build.mutation<
      UpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdPutApiResponse,
      UpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseOrderItemsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdDelete: build.mutation<
      DeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdDeleteApiResponse,
      DeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_items/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdGet: build.query<
      GetTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdGetApiResponse,
      GetTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_items/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnPurchaseOrderItemsEventGet: build.query<
      GetAllTrnPurchaseOrderItemsEventGetApiResponse,
      GetAllTrnPurchaseOrderItemsEventGetApiArg
    >({
      query: () => ({ url: `/trn_purchase_order_items/event/` })
    }),
    createTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventPost: build.mutation<
      CreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventPostApiResponse,
      CreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_items/event/`,
        method: 'POST',
        body: queryArg.trnPurchaseOrderItemsInsert
      })
    }),
    updateTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdPut: build.mutation<
      UpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdPutApiResponse,
      UpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_items/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseOrderItemsUpdate
      })
    }),
    deleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdDelete:
      build.mutation<
        DeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdDeleteApiResponse,
        DeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_purchase_order_items/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdGet: build.query<
      GetTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdGetApiResponse,
      GetTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_items/event/${queryArg.id}`
      })
    }),
    createTrnPurchaseOrderTermsTrnPurchaseOrderTermsPost: build.mutation<
      CreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsPostApiResponse,
      CreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_terms/`,
        method: 'POST',
        body: queryArg.trnPurchaseOrderTermsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnPurchaseOrderTermssTrnPurchaseOrderTermsGet: build.query<
      GetAllTrnPurchaseOrderTermssTrnPurchaseOrderTermsGetApiResponse,
      GetAllTrnPurchaseOrderTermssTrnPurchaseOrderTermsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_terms/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPut: build.mutation<
      UpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPutApiResponse,
      UpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_terms/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseOrderTermsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDelete: build.mutation<
      DeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDeleteApiResponse,
      DeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_terms/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGet: build.query<
      GetTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGetApiResponse,
      GetTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_terms/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnPurchaseOrderTermsEventGet: build.query<
      GetAllTrnPurchaseOrderTermsEventGetApiResponse,
      GetAllTrnPurchaseOrderTermsEventGetApiArg
    >({
      query: () => ({ url: `/trn_purchase_order_terms/event/` })
    }),
    createTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventPost: build.mutation<
      CreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventPostApiResponse,
      CreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_terms/event/`,
        method: 'POST',
        body: queryArg.trnPurchaseOrderTermsInsert
      })
    }),
    updateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdPut: build.mutation<
      UpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdPutApiResponse,
      UpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_terms/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseOrderTermsUpdate
      })
    }),
    deleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdDelete:
      build.mutation<
        DeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdDeleteApiResponse,
        DeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_purchase_order_terms/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdGet: build.query<
      GetTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdGetApiResponse,
      GetTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_terms/event/${queryArg.id}`
      })
    }),
    createTrnPurchaseReqItemsTrnPurchaseReqItemsPost: build.mutation<
      CreateTrnPurchaseReqItemsTrnPurchaseReqItemsPostApiResponse,
      CreateTrnPurchaseReqItemsTrnPurchaseReqItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_items/`,
        method: 'POST',
        body: queryArg.trnPurchaseReqItemsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnPurchaseReqItemssTrnPurchaseReqItemsGet: build.query<
      GetAllTrnPurchaseReqItemssTrnPurchaseReqItemsGetApiResponse,
      GetAllTrnPurchaseReqItemssTrnPurchaseReqItemsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_items/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPut: build.mutation<
      UpdateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPutApiResponse,
      UpdateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseReqItemsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDelete: build.mutation<
      DeleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDeleteApiResponse,
      DeleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_items/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnPurchaseReqItemsTrnPurchaseReqItemsIdGet: build.query<
      GetTrnPurchaseReqItemsTrnPurchaseReqItemsIdGetApiResponse,
      GetTrnPurchaseReqItemsTrnPurchaseReqItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_items/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnPurchaseReqItemsEventGet: build.query<
      GetAllTrnPurchaseReqItemsEventGetApiResponse,
      GetAllTrnPurchaseReqItemsEventGetApiArg
    >({
      query: () => ({ url: `/trn_purchase_req_items/event/` })
    }),
    createTrnPurchaseReqItemsTrnPurchaseReqItemsEventPost: build.mutation<
      CreateTrnPurchaseReqItemsTrnPurchaseReqItemsEventPostApiResponse,
      CreateTrnPurchaseReqItemsTrnPurchaseReqItemsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_items/event/`,
        method: 'POST',
        body: queryArg.trnPurchaseReqItemsInsert
      })
    }),
    updateTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdPut: build.mutation<
      UpdateTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdPutApiResponse,
      UpdateTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_items/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseReqItemsUpdate
      })
    }),
    deleteTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdDelete: build.mutation<
      DeleteTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdDeleteApiResponse,
      DeleteTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_items/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdGet: build.query<
      GetTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdGetApiResponse,
      GetTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_items/event/${queryArg.id}`
      })
    }),
    createTrnRoutineServiceCheckTrnRoutineServiceCheckPost: build.mutation<
      CreateTrnRoutineServiceCheckTrnRoutineServiceCheckPostApiResponse,
      CreateTrnRoutineServiceCheckTrnRoutineServiceCheckPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_routine_service_check/`,
        method: 'POST',
        body: queryArg.trnRoutineServiceCheckInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnRoutineServiceChecksTrnRoutineServiceCheckGet: build.query<
      GetAllTrnRoutineServiceChecksTrnRoutineServiceCheckGetApiResponse,
      GetAllTrnRoutineServiceChecksTrnRoutineServiceCheckGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_routine_service_check/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPut: build.mutation<
      UpdateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPutApiResponse,
      UpdateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_routine_service_check/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnRoutineServiceCheckUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDelete: build.mutation<
      DeleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDeleteApiResponse,
      DeleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_routine_service_check/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnRoutineServiceCheckTrnRoutineServiceCheckIdGet: build.query<
      GetTrnRoutineServiceCheckTrnRoutineServiceCheckIdGetApiResponse,
      GetTrnRoutineServiceCheckTrnRoutineServiceCheckIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_routine_service_check/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnRoutineServiceCheckEventGet: build.query<
      GetAllTrnRoutineServiceCheckEventGetApiResponse,
      GetAllTrnRoutineServiceCheckEventGetApiArg
    >({
      query: () => ({ url: `/trn_routine_service_check/event/` })
    }),
    createTrnRoutineServiceCheckTrnRoutineServiceCheckEventPost: build.mutation<
      CreateTrnRoutineServiceCheckTrnRoutineServiceCheckEventPostApiResponse,
      CreateTrnRoutineServiceCheckTrnRoutineServiceCheckEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_routine_service_check/event/`,
        method: 'POST',
        body: queryArg.trnRoutineServiceCheckInsert
      })
    }),
    updateTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdPut:
      build.mutation<
        UpdateTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdPutApiResponse,
        UpdateTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_routine_service_check/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnRoutineServiceCheckUpdate
        })
      }),
    deleteTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdDelete:
      build.mutation<
        DeleteTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdDeleteApiResponse,
        DeleteTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_routine_service_check/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdGet: build.query<
      GetTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdGetApiResponse,
      GetTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_routine_service_check/event/${queryArg.id}`
      })
    }),
    createTrnShiftFuelOpeningTrnShiftFuelOpeningPost: build.mutation<
      CreateTrnShiftFuelOpeningTrnShiftFuelOpeningPostApiResponse,
      CreateTrnShiftFuelOpeningTrnShiftFuelOpeningPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_shift_fuel_opening/`,
        method: 'POST',
        body: queryArg.trnShiftFuelOpeningInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnShiftFuelOpeningsTrnShiftFuelOpeningGet: build.query<
      GetAllTrnShiftFuelOpeningsTrnShiftFuelOpeningGetApiResponse,
      GetAllTrnShiftFuelOpeningsTrnShiftFuelOpeningGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_shift_fuel_opening/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPut: build.mutation<
      UpdateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPutApiResponse,
      UpdateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_shift_fuel_opening/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnShiftFuelOpeningUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDelete: build.mutation<
      DeleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDeleteApiResponse,
      DeleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_shift_fuel_opening/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnShiftFuelOpeningTrnShiftFuelOpeningIdGet: build.query<
      GetTrnShiftFuelOpeningTrnShiftFuelOpeningIdGetApiResponse,
      GetTrnShiftFuelOpeningTrnShiftFuelOpeningIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_shift_fuel_opening/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnShiftFuelOpeningEventGet: build.query<
      GetAllTrnShiftFuelOpeningEventGetApiResponse,
      GetAllTrnShiftFuelOpeningEventGetApiArg
    >({
      query: () => ({ url: `/trn_shift_fuel_opening/event/` })
    }),
    createTrnShiftFuelOpeningTrnShiftFuelOpeningEventPost: build.mutation<
      CreateTrnShiftFuelOpeningTrnShiftFuelOpeningEventPostApiResponse,
      CreateTrnShiftFuelOpeningTrnShiftFuelOpeningEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_shift_fuel_opening/event/`,
        method: 'POST',
        body: queryArg.trnShiftFuelOpeningInsert
      })
    }),
    updateTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdPut: build.mutation<
      UpdateTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdPutApiResponse,
      UpdateTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_shift_fuel_opening/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnShiftFuelOpeningUpdate
      })
    }),
    deleteTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdDelete: build.mutation<
      DeleteTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdDeleteApiResponse,
      DeleteTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_shift_fuel_opening/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdGet: build.query<
      GetTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdGetApiResponse,
      GetTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_shift_fuel_opening/event/${queryArg.id}`
      })
    }),
    createTrnTicketTrnTicketPost: build.mutation<
      CreateTrnTicketTrnTicketPostApiResponse,
      CreateTrnTicketTrnTicketPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket/`,
        method: 'POST',
        body: queryArg.trnTicketInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnTicketsTrnTicketGet: build.query<
      GetAllTrnTicketsTrnTicketGetApiResponse,
      GetAllTrnTicketsTrnTicketGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnTicketTrnTicketIdPut: build.mutation<
      UpdateTrnTicketTrnTicketIdPutApiResponse,
      UpdateTrnTicketTrnTicketIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnTicketUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnTicketTrnTicketIdDelete: build.mutation<
      DeleteTrnTicketTrnTicketIdDeleteApiResponse,
      DeleteTrnTicketTrnTicketIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnTicketTrnTicketIdGet: build.query<
      GetTrnTicketTrnTicketIdGetApiResponse,
      GetTrnTicketTrnTicketIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnTicketEventGet: build.query<
      GetAllTrnTicketEventGetApiResponse,
      GetAllTrnTicketEventGetApiArg
    >({
      query: () => ({ url: `/trn_ticket/event/` })
    }),
    createTrnTicketTrnTicketEventPost: build.mutation<
      CreateTrnTicketTrnTicketEventPostApiResponse,
      CreateTrnTicketTrnTicketEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket/event/`,
        method: 'POST',
        body: queryArg.trnTicketInsert
      })
    }),
    updateTrnTicketTrnTicketEventIdPut: build.mutation<
      UpdateTrnTicketTrnTicketEventIdPutApiResponse,
      UpdateTrnTicketTrnTicketEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnTicketUpdate
      })
    }),
    deleteTrnTicketTrnTicketEventIdDelete: build.mutation<
      DeleteTrnTicketTrnTicketEventIdDeleteApiResponse,
      DeleteTrnTicketTrnTicketEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnTicketTrnTicketEventIdGet: build.query<
      GetTrnTicketTrnTicketEventIdGetApiResponse,
      GetTrnTicketTrnTicketEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_ticket/event/${queryArg.id}` })
    }),
    createTrnTicketDocumentsTrnTicketDocumentsPost: build.mutation<
      CreateTrnTicketDocumentsTrnTicketDocumentsPostApiResponse,
      CreateTrnTicketDocumentsTrnTicketDocumentsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_documents/`,
        method: 'POST',
        body: queryArg.trnTicketDocumentsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnTicketDocumentssTrnTicketDocumentsGet: build.query<
      GetAllTrnTicketDocumentssTrnTicketDocumentsGetApiResponse,
      GetAllTrnTicketDocumentssTrnTicketDocumentsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_documents/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnTicketDocumentsTrnTicketDocumentsIdPut: build.mutation<
      UpdateTrnTicketDocumentsTrnTicketDocumentsIdPutApiResponse,
      UpdateTrnTicketDocumentsTrnTicketDocumentsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_documents/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnTicketDocumentsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnTicketDocumentsTrnTicketDocumentsIdDelete: build.mutation<
      DeleteTrnTicketDocumentsTrnTicketDocumentsIdDeleteApiResponse,
      DeleteTrnTicketDocumentsTrnTicketDocumentsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_documents/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnTicketDocumentsTrnTicketDocumentsIdGet: build.query<
      GetTrnTicketDocumentsTrnTicketDocumentsIdGetApiResponse,
      GetTrnTicketDocumentsTrnTicketDocumentsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_documents/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnTicketDocumentsEventGet: build.query<
      GetAllTrnTicketDocumentsEventGetApiResponse,
      GetAllTrnTicketDocumentsEventGetApiArg
    >({
      query: () => ({ url: `/trn_ticket_documents/event/` })
    }),
    createTrnTicketDocumentsTrnTicketDocumentsEventPost: build.mutation<
      CreateTrnTicketDocumentsTrnTicketDocumentsEventPostApiResponse,
      CreateTrnTicketDocumentsTrnTicketDocumentsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_documents/event/`,
        method: 'POST',
        body: queryArg.trnTicketDocumentsInsert
      })
    }),
    updateTrnTicketDocumentsTrnTicketDocumentsEventIdPut: build.mutation<
      UpdateTrnTicketDocumentsTrnTicketDocumentsEventIdPutApiResponse,
      UpdateTrnTicketDocumentsTrnTicketDocumentsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_documents/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnTicketDocumentsUpdate
      })
    }),
    deleteTrnTicketDocumentsTrnTicketDocumentsEventIdDelete: build.mutation<
      DeleteTrnTicketDocumentsTrnTicketDocumentsEventIdDeleteApiResponse,
      DeleteTrnTicketDocumentsTrnTicketDocumentsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_documents/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnTicketDocumentsTrnTicketDocumentsEventIdGet: build.query<
      GetTrnTicketDocumentsTrnTicketDocumentsEventIdGetApiResponse,
      GetTrnTicketDocumentsTrnTicketDocumentsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_documents/event/${queryArg.id}`
      })
    }),
    createTrnWarehouseIndentTrnWarehouseIndentPost: build.mutation<
      CreateTrnWarehouseIndentTrnWarehouseIndentPostApiResponse,
      CreateTrnWarehouseIndentTrnWarehouseIndentPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent/`,
        method: 'POST',
        body: queryArg.trnWarehouseIndentInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnWarehouseIndentsTrnWarehouseIndentGet: build.query<
      GetAllTrnWarehouseIndentsTrnWarehouseIndentGetApiResponse,
      GetAllTrnWarehouseIndentsTrnWarehouseIndentGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnWarehouseIndentTrnWarehouseIndentIdPut: build.mutation<
      UpdateTrnWarehouseIndentTrnWarehouseIndentIdPutApiResponse,
      UpdateTrnWarehouseIndentTrnWarehouseIndentIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnWarehouseIndentUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnWarehouseIndentTrnWarehouseIndentIdDelete: build.mutation<
      DeleteTrnWarehouseIndentTrnWarehouseIndentIdDeleteApiResponse,
      DeleteTrnWarehouseIndentTrnWarehouseIndentIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTrnWarehouseIndentTrnWarehouseIndentIdGet: build.query<
      GetTrnWarehouseIndentTrnWarehouseIndentIdGetApiResponse,
      GetTrnWarehouseIndentTrnWarehouseIndentIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnWarehouseIndentEventGet: build.query<
      GetAllTrnWarehouseIndentEventGetApiResponse,
      GetAllTrnWarehouseIndentEventGetApiArg
    >({
      query: () => ({ url: `/trn_warehouse_indent/event/` })
    }),
    createTrnWarehouseIndentTrnWarehouseIndentEventPost: build.mutation<
      CreateTrnWarehouseIndentTrnWarehouseIndentEventPostApiResponse,
      CreateTrnWarehouseIndentTrnWarehouseIndentEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent/event/`,
        method: 'POST',
        body: queryArg.trnWarehouseIndentInsert
      })
    }),
    updateTrnWarehouseIndentTrnWarehouseIndentEventIdPut: build.mutation<
      UpdateTrnWarehouseIndentTrnWarehouseIndentEventIdPutApiResponse,
      UpdateTrnWarehouseIndentTrnWarehouseIndentEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnWarehouseIndentUpdate
      })
    }),
    deleteTrnWarehouseIndentTrnWarehouseIndentEventIdDelete: build.mutation<
      DeleteTrnWarehouseIndentTrnWarehouseIndentEventIdDeleteApiResponse,
      DeleteTrnWarehouseIndentTrnWarehouseIndentEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnWarehouseIndentTrnWarehouseIndentEventIdGet: build.query<
      GetTrnWarehouseIndentTrnWarehouseIndentEventIdGetApiResponse,
      GetTrnWarehouseIndentTrnWarehouseIndentEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent/event/${queryArg.id}`
      })
    }),
    createTrnWarehouseIndentItemsTrnWarehouseIndentItemsPost: build.mutation<
      CreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsPostApiResponse,
      CreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent_items/`,
        method: 'POST',
        body: queryArg.trnWarehouseIndentItemsInsert,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnWarehouseIndentItemssTrnWarehouseIndentItemsGet: build.query<
      GetAllTrnWarehouseIndentItemssTrnWarehouseIndentItemsGetApiResponse,
      GetAllTrnWarehouseIndentItemssTrnWarehouseIndentItemsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent_items/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdPut: build.mutation<
      UpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdPutApiResponse,
      UpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnWarehouseIndentItemsUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdDelete:
      build.mutation<
        DeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdDeleteApiResponse,
        DeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_warehouse_indent_items/${queryArg.id}`,
          method: 'DELETE',
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    getTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdGet: build.query<
      GetTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdGetApiResponse,
      GetTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent_items/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTrnWarehouseIndentItemsEventGet: build.query<
      GetAllTrnWarehouseIndentItemsEventGetApiResponse,
      GetAllTrnWarehouseIndentItemsEventGetApiArg
    >({
      query: () => ({ url: `/trn_warehouse_indent_items/event/` })
    }),
    createTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventPost:
      build.mutation<
        CreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventPostApiResponse,
        CreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_warehouse_indent_items/event/`,
          method: 'POST',
          body: queryArg.trnWarehouseIndentItemsInsert
        })
      }),
    updateTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdPut:
      build.mutation<
        UpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdPutApiResponse,
        UpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_warehouse_indent_items/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnWarehouseIndentItemsUpdate
        })
      }),
    deleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdDelete:
      build.mutation<
        DeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdDeleteApiResponse,
        DeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_warehouse_indent_items/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdGet: build.query<
      GetTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdGetApiResponse,
      GetTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent_items/event/${queryArg.id}`
      })
    }),
    listRolesRolesModulesGet: build.query<
      ListRolesRolesModulesGetApiResponse,
      ListRolesRolesModulesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/roles/modules`,
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          module_name: queryArg.moduleName,
          is_active: queryArg.isActive,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    createRoleRolesPost: build.mutation<
      CreateRoleRolesPostApiResponse,
      CreateRoleRolesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/roles/`,
        method: 'POST',
        body: queryArg.roleBaseCreate
      })
    }),
    listRolesRolesGet: build.query<
      ListRolesRolesGetApiResponse,
      ListRolesRolesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/roles/`,
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          role_name: queryArg.roleName,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getRoleRolesRoleIdGet: build.query<
      GetRoleRolesRoleIdGetApiResponse,
      GetRoleRolesRoleIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/roles/${queryArg.roleId}` })
    }),
    updateRoleRolesRoleIdPut: build.mutation<
      UpdateRoleRolesRoleIdPutApiResponse,
      UpdateRoleRolesRoleIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/roles/${queryArg.roleId}`,
        method: 'PUT',
        body: queryArg.roleBaseUpdate
      })
    }),
    deleteRoleRolesRoleIdDelete: build.mutation<
      DeleteRoleRolesRoleIdDeleteApiResponse,
      DeleteRoleRolesRoleIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/roles/${queryArg.roleId}`,
        method: 'DELETE'
      })
    }),
    createRolePermissionRolesRolePermissionsPost: build.mutation<
      CreateRolePermissionRolesRolePermissionsPostApiResponse,
      CreateRolePermissionRolesRolePermissionsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/roles/role_permissions`,
        method: 'POST',
        body: queryArg.rolePermissionBaseCreate
      })
    }),
    getSubscriptionsIdGet: build.query<
      GetSubscriptionsIdGetApiResponse,
      GetSubscriptionsIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/subscriptions/${queryArg.id}` })
    }),
    getAllSubscriptionSubscriptionsGet: build.query<
      GetAllSubscriptionSubscriptionsGetApiResponse,
      GetAllSubscriptionSubscriptionsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/subscriptions/`,
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          subscription_name: queryArg.subscriptionName,
          subscription_name__icontains: queryArg.subscriptionNameIcontains,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getSubscriptionsIdFeaturesGet: build.query<
      GetSubscriptionsIdFeaturesGetApiResponse,
      GetSubscriptionsIdFeaturesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/subscriptions/${queryArg.id}/features`
      })
    }),
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
    }),
    createUserInvitationsPost: build.mutation<
      CreateUserInvitationsPostApiResponse,
      CreateUserInvitationsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/user_invitations/`,
        method: 'POST',
        body: queryArg.userInvitationBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllUserInvitationUserInvitationsGet: build.query<
      GetAllUserInvitationUserInvitationsGetApiResponse,
      GetAllUserInvitationUserInvitationsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/user_invitations/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          invite_first_name: queryArg.inviteFirstName,
          invite_last_name: queryArg.inviteLastName,
          invite_email: queryArg.inviteEmail,
          invite_role: queryArg.inviteRole,
          invite_status: queryArg.inviteStatus,
          invited_by: queryArg.invitedBy,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getUserInvitationsIdGet: build.query<
      GetUserInvitationsIdGetApiResponse,
      GetUserInvitationsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/user_invitations/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateUserInvitationsIdPut: build.mutation<
      UpdateUserInvitationsIdPutApiResponse,
      UpdateUserInvitationsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/user_invitations/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.userInvitationBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteUserInvitationsIdDelete: build.mutation<
      DeleteUserInvitationsIdDeleteApiResponse,
      DeleteUserInvitationsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/user_invitations/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getProfileUsersProfileGet: build.query<
      GetProfileUsersProfileGetApiResponse,
      GetProfileUsersProfileGetApiArg
    >({
      query: () => ({ url: `/users/profile` })
    }),
    updateProfileUsersProfilePut: build.mutation<
      UpdateProfileUsersProfilePutApiResponse,
      UpdateProfileUsersProfilePutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/profile`,
        method: 'PUT',
        body: queryArg.userProfileUpdate
      })
    }),
    updateProfilephotoUsersProfilephotoPost: build.mutation<
      UpdateProfilephotoUsersProfilephotoPostApiResponse,
      UpdateProfilephotoUsersProfilephotoPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/profilephoto`,
        method: 'POST',
        body: queryArg.bodyUpdateProfilephotoUsersProfilephotoPost
      })
    }),
    getTenantUsersTenantGet: build.query<
      GetTenantUsersTenantGetApiResponse,
      GetTenantUsersTenantGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/tenant`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTenantUsersTenantPut: build.mutation<
      UpdateTenantUsersTenantPutApiResponse,
      UpdateTenantUsersTenantPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/tenant`,
        method: 'PUT',
        body: queryArg.tenantOverviewUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getTenantownerUsersTenantownerGet: build.query<
      GetTenantownerUsersTenantownerGetApiResponse,
      GetTenantownerUsersTenantownerGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/tenantowner`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTenantUsersTenantsGet: build.query<
      GetAllTenantUsersTenantsGetApiResponse,
      GetAllTenantUsersTenantsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/tenants`,
        params: {
          order_by: queryArg.orderBy,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    assignRoleUsersRolePost: build.mutation<
      AssignRoleUsersRolePostApiResponse,
      AssignRoleUsersRolePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/role`,
        method: 'POST',
        body: queryArg.userRoleBaseCreate
      })
    }),
    getAllRoleUsersRoleGet: build.query<
      GetAllRoleUsersRoleGetApiResponse,
      GetAllRoleUsersRoleGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/role`,
        params: {
          order_by: queryArg.orderBy,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    deleteRoleUsersRoleDelete: build.mutation<
      DeleteRoleUsersRoleDeleteApiResponse,
      DeleteRoleUsersRoleDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/role`,
        method: 'DELETE',
        body: queryArg.userRoleBaseUpdate
      })
    }),
    createUsersDevicetokenPost: build.mutation<
      CreateUsersDevicetokenPostApiResponse,
      CreateUsersDevicetokenPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/devicetoken`,
        method: 'POST',
        body: queryArg.deviceTokenBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllDeviceTokenUsersDevicetokensGet: build.query<
      GetAllDeviceTokenUsersDevicetokensGetApiResponse,
      GetAllDeviceTokenUsersDevicetokensGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/devicetokens`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          tenant_id: queryArg.tenantId,
          user_id: queryArg.userId,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    sendOtpUsersSendOtpPost: build.mutation<
      SendOtpUsersSendOtpPostApiResponse,
      SendOtpUsersSendOtpPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/send-otp/`,
        method: 'POST',
        params: {
          mobile_number: queryArg.mobileNumber
        }
      })
    }),
    sendOtpUsersSendOtpByMailPost: build.mutation<
      SendOtpUsersSendOtpByMailPostApiResponse,
      SendOtpUsersSendOtpByMailPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/send-otp_by_mail/`,
        method: 'POST',
        params: {
          mail: queryArg.mail
        }
      })
    }),
    verifyOtpUsersVerifyOtpPost: build.mutation<
      VerifyOtpUsersVerifyOtpPostApiResponse,
      VerifyOtpUsersVerifyOtpPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/verify-otp/`,
        method: 'POST',
        params: {
          otp: queryArg.otp,
          mail: queryArg.mail,
          mobile_number: queryArg.mobileNumber
        }
      })
    }),
    validateTokenAndRegisterUsersValidateTokenPost: build.mutation<
      ValidateTokenAndRegisterUsersValidateTokenPostApiResponse,
      ValidateTokenAndRegisterUsersValidateTokenPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/validate-token/`,
        method: 'POST',
        body: queryArg.userRegisterDetails,
        params: {
          token: queryArg.token
        }
      })
    }),
    getRolePermissionUsersUserIdRolePermissionGet: build.query<
      GetRolePermissionUsersUserIdRolePermissionGetApiResponse,
      GetRolePermissionUsersUserIdRolePermissionGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/users/${queryArg.userId}/role-permission`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createResourcesPost: build.mutation<
      CreateResourcesPostApiResponse,
      CreateResourcesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/resources/`,
        method: 'POST',
        body: queryArg.resourceBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllResourceResourcesGet: build.query<
      GetAllResourceResourcesGetApiResponse,
      GetAllResourceResourcesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/resources/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          created_by: queryArg.createdBy,
          resource_name: queryArg.resourceName,
          resource_name__icontains: queryArg.resourceNameIcontains,
          first_name: queryArg.firstName,
          first_name__icontains: queryArg.firstNameIcontains,
          last_name: queryArg.lastName,
          last_name__icontains: queryArg.lastNameIcontains,
          email: queryArg.email,
          email__icontains: queryArg.emailIcontains,
          is_user_login: queryArg.isUserLogin,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getResourcesIdGet: build.query<
      GetResourcesIdGetApiResponse,
      GetResourcesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/resources/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateResourcesIdPut: build.mutation<
      UpdateResourcesIdPutApiResponse,
      UpdateResourcesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/resources/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.resourceBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteResourcesIdDelete: build.mutation<
      DeleteResourcesIdDeleteApiResponse,
      DeleteResourcesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/resources/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createTeamsPost: build.mutation<
      CreateTeamsPostApiResponse,
      CreateTeamsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/teams/`,
        method: 'POST',
        body: queryArg.teamBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTeamTeamsGet: build.query<
      GetAllTeamTeamsGetApiResponse,
      GetAllTeamTeamsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/teams/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          tenant_id: queryArg.tenantId,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getTeamsIdGet: build.query<GetTeamsIdGetApiResponse, GetTeamsIdGetApiArg>({
      query: (queryArg: any) => ({
        url: `/teams/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTeamsIdPut: build.mutation<
      UpdateTeamsIdPutApiResponse,
      UpdateTeamsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/teams/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.teamBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTeamsIdDelete: build.mutation<
      DeleteTeamsIdDeleteApiResponse,
      DeleteTeamsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/teams/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createTeamResourcesPost: build.mutation<
      CreateTeamResourcesPostApiResponse,
      CreateTeamResourcesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/team_resources/`,
        method: 'POST',
        body: queryArg.teamResourceBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTeamResourceTeamResourcesGet: build.query<
      GetAllTeamResourceTeamResourcesGetApiResponse,
      GetAllTeamResourceTeamResourcesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/team_resources/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          tenant_id: queryArg.tenantId,
          os_team_id: queryArg.osTeamId,
          resource_id: queryArg.resourceId,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    deleteTeamResourcesIdDelete: build.mutation<
      DeleteTeamResourcesIdDeleteApiResponse,
      DeleteTeamResourcesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/team_resources/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    activateDeactivateTeamMembersTeamResourcesActivateDeactivatePost:
      build.mutation<
        ActivateDeactivateTeamMembersTeamResourcesActivateDeactivatePostApiResponse,
        ActivateDeactivateTeamMembersTeamResourcesActivateDeactivatePostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/team_resources/activate-deactivate`,
          method: 'POST',
          body: queryArg.teamResourceUpdateRequest,
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      })
  }),
  overrideExisting: false
});
export { injectedRtkApi as assetApi };
export type AuthJwtLoginV1AuthJwtLoginPostApiResponse =
  /** status 200 Successful Response */ BearerResponse;
export type AuthJwtLoginV1AuthJwtLoginPostApiArg = {
  bodyAuthJwtLoginV1AuthJwtLoginPost: BodyAuthJwtLoginV1AuthJwtLoginPost;
};
export type AuthJwtLogoutV1AuthJwtLogoutPostApiResponse =
  /** status 200 Successful Response */ any;
export type AuthJwtLogoutV1AuthJwtLogoutPostApiArg = void;
export type RegisterRegisterV1AuthRegisterPostApiResponse =
  /** status 201 Successful Response */ UserRead;
export type RegisterRegisterV1AuthRegisterPostApiArg = {
  userCreate: UserCreate;
};
export type ResetForgotPasswordV1AuthForgotPasswordPostApiResponse =
  /** status 202 Successful Response */ any;
export type ResetForgotPasswordV1AuthForgotPasswordPostApiArg = {
  bodyResetForgotPasswordV1AuthForgotPasswordPost: BodyResetForgotPasswordV1AuthForgotPasswordPost;
};
export type ResetResetPasswordV1AuthResetPasswordPostApiResponse =
  /** status 200 Successful Response */ any;
export type ResetResetPasswordV1AuthResetPasswordPostApiArg = {
  bodyResetResetPasswordV1AuthResetPasswordPost: BodyResetResetPasswordV1AuthResetPasswordPost;
};
export type VerifyRequestTokenV1AuthRequestVerifyTokenPostApiResponse =
  /** status 202 Successful Response */ any;
export type VerifyRequestTokenV1AuthRequestVerifyTokenPostApiArg = {
  bodyVerifyRequestTokenV1AuthRequestVerifyTokenPost: BodyVerifyRequestTokenV1AuthRequestVerifyTokenPost;
};
export type VerifyVerifyV1AuthVerifyPostApiResponse =
  /** status 200 Successful Response */ UserRead;
export type VerifyVerifyV1AuthVerifyPostApiArg = {
  bodyVerifyVerifyV1AuthVerifyPost: BodyVerifyVerifyV1AuthVerifyPost;
};
export type UsersCurrentUserV1UsersMeGetApiResponse =
  /** status 200 Successful Response */ UserRead;
export type UsersCurrentUserV1UsersMeGetApiArg = void;
export type UsersPatchCurrentUserV1UsersMePatchApiResponse =
  /** status 200 Successful Response */ UserRead;
export type UsersPatchCurrentUserV1UsersMePatchApiArg = {
  userUpdate: UserUpdate;
};
export type UsersUserV1UsersIdGetApiResponse =
  /** status 200 Successful Response */ UserRead;
export type UsersUserV1UsersIdGetApiArg = {
  id: string;
};
export type UsersPatchUserV1UsersIdPatchApiResponse =
  /** status 200 Successful Response */ UserRead;
export type UsersPatchUserV1UsersIdPatchApiArg = {
  id: string;
  userUpdate: UserUpdate;
};
export type UsersDeleteUserV1UsersIdDeleteApiResponse = unknown;
export type UsersDeleteUserV1UsersIdDeleteApiArg = {
  id: string;
};
export type CreateAssetMatrixAssetMatrixPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixAssetMatrixPostApiArg = {
  'x-tenant-id': string;
  assetMatrixInsert: AssetMatrixInsert;
};
export type GetAllAssetMatrixsAssetMatrixGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetMatrixsAssetMatrixGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateAssetMatrixAssetMatrixIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixAssetMatrixIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  assetMatrixUpdate: AssetMatrixUpdate;
};
export type DeleteAssetMatrixAssetMatrixIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixAssetMatrixIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAssetMatrixAssetMatrixIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixAssetMatrixIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllAssetMatrixEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetMatrixEventGetApiArg = void;
export type CreateAssetMatrixAssetMatrixEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixAssetMatrixEventPostApiArg = {
  assetMatrixInsert: AssetMatrixInsert;
};
export type UpdateAssetMatrixAssetMatrixEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixAssetMatrixEventIdPutApiArg = {
  id: number;
  assetMatrixUpdate: AssetMatrixUpdate;
};
export type DeleteAssetMatrixAssetMatrixEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixAssetMatrixEventIdDeleteApiArg = {
  id: number;
};
export type GetAssetMatrixAssetMatrixEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixAssetMatrixEventIdGetApiArg = {
  id: number;
};
export type CreateAssetMatrixDocumentAssetMatrixDocumentPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixDocumentAssetMatrixDocumentPostApiArg = {
  'x-tenant-id': string;
  assetMatrixDocumentInsert: AssetMatrixDocumentInsert;
};
export type GetAllAssetMatrixDocumentsAssetMatrixDocumentGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetMatrixDocumentsAssetMatrixDocumentGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateAssetMatrixDocumentAssetMatrixDocumentIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixDocumentAssetMatrixDocumentIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  assetMatrixDocumentUpdate: AssetMatrixDocumentUpdate;
};
export type DeleteAssetMatrixDocumentAssetMatrixDocumentIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixDocumentAssetMatrixDocumentIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAssetMatrixDocumentAssetMatrixDocumentIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixDocumentAssetMatrixDocumentIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllAssetMatrixDocumentEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetMatrixDocumentEventGetApiArg = void;
export type CreateAssetMatrixDocumentAssetMatrixDocumentEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixDocumentAssetMatrixDocumentEventPostApiArg = {
  assetMatrixDocumentInsert: AssetMatrixDocumentInsert;
};
export type UpdateAssetMatrixDocumentAssetMatrixDocumentEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixDocumentAssetMatrixDocumentEventIdPutApiArg = {
  id: number;
  assetMatrixDocumentUpdate: AssetMatrixDocumentUpdate;
};
export type DeleteAssetMatrixDocumentAssetMatrixDocumentEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixDocumentAssetMatrixDocumentEventIdDeleteApiArg = {
  id: number;
};
export type GetAssetMatrixDocumentAssetMatrixDocumentEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixDocumentAssetMatrixDocumentEventIdGetApiArg = {
  id: number;
};
export type CreateAssetMatrixSectionAssetMatrixSectionPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixSectionAssetMatrixSectionPostApiArg = {
  'x-tenant-id': string;
  assetMatrixSectionInsert: AssetMatrixSectionInsert;
};
export type GetAllAssetMatrixSectionsAssetMatrixSectionGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetMatrixSectionsAssetMatrixSectionGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateAssetMatrixSectionAssetMatrixSectionIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixSectionAssetMatrixSectionIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  assetMatrixSectionUpdate: AssetMatrixSectionUpdate;
};
export type DeleteAssetMatrixSectionAssetMatrixSectionIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixSectionAssetMatrixSectionIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAssetMatrixSectionAssetMatrixSectionIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixSectionAssetMatrixSectionIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllAssetMatrixSectionEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetMatrixSectionEventGetApiArg = void;
export type CreateAssetMatrixSectionAssetMatrixSectionEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixSectionAssetMatrixSectionEventPostApiArg = {
  assetMatrixSectionInsert: AssetMatrixSectionInsert;
};
export type UpdateAssetMatrixSectionAssetMatrixSectionEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixSectionAssetMatrixSectionEventIdPutApiArg = {
  id: number;
  assetMatrixSectionUpdate: AssetMatrixSectionUpdate;
};
export type DeleteAssetMatrixSectionAssetMatrixSectionEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixSectionAssetMatrixSectionEventIdDeleteApiArg = {
  id: number;
};
export type GetAssetMatrixSectionAssetMatrixSectionEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixSectionAssetMatrixSectionEventIdGetApiArg = {
  id: number;
};
export type CreateAssetMatrixSubSectionAssetMatrixSubSectionPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixSubSectionAssetMatrixSubSectionPostApiArg = {
  'x-tenant-id': string;
  assetMatrixSubSectionInsert: AssetMatrixSubSectionInsert;
};
export type GetAllAssetMatrixSubSectionsAssetMatrixSubSectionGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetMatrixSubSectionsAssetMatrixSubSectionGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateAssetMatrixSubSectionAssetMatrixSubSectionIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixSubSectionAssetMatrixSubSectionIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  assetMatrixSubSectionUpdate: AssetMatrixSubSectionUpdate;
};
export type DeleteAssetMatrixSubSectionAssetMatrixSubSectionIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixSubSectionAssetMatrixSubSectionIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAssetMatrixSubSectionAssetMatrixSubSectionIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixSubSectionAssetMatrixSubSectionIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllAssetMatrixSubSectionEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetMatrixSubSectionEventGetApiArg = void;
export type CreateAssetMatrixSubSectionAssetMatrixSubSectionEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixSubSectionAssetMatrixSubSectionEventPostApiArg = {
  assetMatrixSubSectionInsert: AssetMatrixSubSectionInsert;
};
export type UpdateAssetMatrixSubSectionAssetMatrixSubSectionEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixSubSectionAssetMatrixSubSectionEventIdPutApiArg = {
  id: number;
  assetMatrixSubSectionUpdate: AssetMatrixSubSectionUpdate;
};
export type DeleteAssetMatrixSubSectionAssetMatrixSubSectionEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixSubSectionAssetMatrixSubSectionEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetAssetMatrixSubSectionAssetMatrixSubSectionEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixSubSectionAssetMatrixSubSectionEventIdGetApiArg = {
  id: number;
};
export type CreateAssetServiceCheckListAssetServiceCheckListPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetServiceCheckListAssetServiceCheckListPostApiArg = {
  'x-tenant-id': string;
  assetServiceCheckListInsert: AssetServiceCheckListInsert;
};
export type GetAllAssetServiceCheckListsAssetServiceCheckListGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetServiceCheckListsAssetServiceCheckListGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateAssetServiceCheckListAssetServiceCheckListIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetServiceCheckListAssetServiceCheckListIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  assetServiceCheckListUpdate: AssetServiceCheckListUpdate;
};
export type DeleteAssetServiceCheckListAssetServiceCheckListIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetServiceCheckListAssetServiceCheckListIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAssetServiceCheckListAssetServiceCheckListIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetServiceCheckListAssetServiceCheckListIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllAssetServiceCheckListEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetServiceCheckListEventGetApiArg = void;
export type CreateAssetServiceCheckListAssetServiceCheckListEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetServiceCheckListAssetServiceCheckListEventPostApiArg = {
  assetServiceCheckListInsert: AssetServiceCheckListInsert;
};
export type UpdateAssetServiceCheckListAssetServiceCheckListEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetServiceCheckListAssetServiceCheckListEventIdPutApiArg = {
  id: number;
  assetServiceCheckListUpdate: AssetServiceCheckListUpdate;
};
export type DeleteAssetServiceCheckListAssetServiceCheckListEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetServiceCheckListAssetServiceCheckListEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetAssetServiceCheckListAssetServiceCheckListEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetServiceCheckListAssetServiceCheckListEventIdGetApiArg = {
  id: number;
};
export type CreateAssetServiceCheckListItemsAssetServiceCheckListItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetServiceCheckListItemsAssetServiceCheckListItemsPostApiArg =
  {
    'x-tenant-id': string;
    assetServiceCheckListItemsInsert: AssetServiceCheckListItemsInsert;
  };
export type GetAllAssetServiceCheckListItemssAssetServiceCheckListItemsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetServiceCheckListItemssAssetServiceCheckListItemsGetApiArg =
  {
    'x-tenant-id': string;
  };
export type UpdateAssetServiceCheckListItemsAssetServiceCheckListItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetServiceCheckListItemsAssetServiceCheckListItemsIdPutApiArg =
  {
    id: number;
    'x-tenant-id': string;
    assetServiceCheckListItemsUpdate: AssetServiceCheckListItemsUpdate;
  };
export type DeleteAssetServiceCheckListItemsAssetServiceCheckListItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetServiceCheckListItemsAssetServiceCheckListItemsIdDeleteApiArg =
  {
    id: number;
    'x-tenant-id': string;
  };
export type GetAssetServiceCheckListItemsAssetServiceCheckListItemsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetServiceCheckListItemsAssetServiceCheckListItemsIdGetApiArg =
  {
    id: number;
    'x-tenant-id': string;
  };
export type GetAllAssetServiceCheckListItemsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetServiceCheckListItemsEventGetApiArg = void;
export type CreateAssetServiceCheckListItemsAssetServiceCheckListItemsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetServiceCheckListItemsAssetServiceCheckListItemsEventPostApiArg =
  {
    assetServiceCheckListItemsInsert: AssetServiceCheckListItemsInsert;
  };
export type UpdateAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdPutApiArg =
  {
    id: number;
    assetServiceCheckListItemsUpdate: AssetServiceCheckListItemsUpdate;
  };
export type DeleteAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdGetApiArg =
  {
    id: number;
  };
export type CreateFiscalyearFiscalyearPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateFiscalyearFiscalyearPostApiArg = {
  'x-tenant-id': string;
  fiscalyearInsert: FiscalyearInsert;
};
export type GetAllFiscalyearsFiscalyearGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllFiscalyearsFiscalyearGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateFiscalyearFiscalyearIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateFiscalyearFiscalyearIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  fiscalyearUpdate: FiscalyearUpdate;
};
export type DeleteFiscalyearFiscalyearIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteFiscalyearFiscalyearIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetFiscalyearFiscalyearIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetFiscalyearFiscalyearIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllFiscalyearEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllFiscalyearEventGetApiArg = void;
export type CreateFiscalyearFiscalyearEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateFiscalyearFiscalyearEventPostApiArg = {
  fiscalyearInsert: FiscalyearInsert;
};
export type UpdateFiscalyearFiscalyearEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateFiscalyearFiscalyearEventIdPutApiArg = {
  id: number;
  fiscalyearUpdate: FiscalyearUpdate;
};
export type DeleteFiscalyearFiscalyearEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteFiscalyearFiscalyearEventIdDeleteApiArg = {
  id: number;
};
export type GetFiscalyearFiscalyearEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetFiscalyearFiscalyearEventIdGetApiArg = {
  id: number;
};
export type CreateGrpWarehouseGrpWarehousePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateGrpWarehouseGrpWarehousePostApiArg = {
  'x-tenant-id': string;
  grpWarehouseInsert: GrpWarehouseInsert;
};
export type GetAllGrpWarehousesGrpWarehouseGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllGrpWarehousesGrpWarehouseGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateGrpWarehouseGrpWarehouseIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateGrpWarehouseGrpWarehouseIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  grpWarehouseUpdate: GrpWarehouseUpdate;
};
export type DeleteGrpWarehouseGrpWarehouseIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteGrpWarehouseGrpWarehouseIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetGrpWarehouseGrpWarehouseIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetGrpWarehouseGrpWarehouseIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllGrpWarehouseEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllGrpWarehouseEventGetApiArg = void;
export type CreateGrpWarehouseGrpWarehouseEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateGrpWarehouseGrpWarehouseEventPostApiArg = {
  grpWarehouseInsert: GrpWarehouseInsert;
};
export type UpdateGrpWarehouseGrpWarehouseEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateGrpWarehouseGrpWarehouseEventIdPutApiArg = {
  id: number;
  grpWarehouseUpdate: GrpWarehouseUpdate;
};
export type DeleteGrpWarehouseGrpWarehouseEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteGrpWarehouseGrpWarehouseEventIdDeleteApiArg = {
  id: number;
};
export type GetGrpWarehouseGrpWarehouseEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetGrpWarehouseGrpWarehouseEventIdGetApiArg = {
  id: number;
};
export type CreateInvItemConfigurationInvItemConfigurationPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateInvItemConfigurationInvItemConfigurationPostApiArg = {
  'x-tenant-id': string;
  invItemConfigurationInsert: InvItemConfigurationInsert;
};
export type GetAllInvItemConfigurationsInvItemConfigurationGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllInvItemConfigurationsInvItemConfigurationGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateInvItemConfigurationInvItemConfigurationIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateInvItemConfigurationInvItemConfigurationIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  invItemConfigurationUpdate: InvItemConfigurationUpdate;
};
export type DeleteInvItemConfigurationInvItemConfigurationIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteInvItemConfigurationInvItemConfigurationIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetInvItemConfigurationInvItemConfigurationIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetInvItemConfigurationInvItemConfigurationIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllInvItemConfigurationEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllInvItemConfigurationEventGetApiArg = void;
export type CreateInvItemConfigurationInvItemConfigurationEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateInvItemConfigurationInvItemConfigurationEventPostApiArg = {
  invItemConfigurationInsert: InvItemConfigurationInsert;
};
export type UpdateInvItemConfigurationInvItemConfigurationEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateInvItemConfigurationInvItemConfigurationEventIdPutApiArg = {
  id: number;
  invItemConfigurationUpdate: InvItemConfigurationUpdate;
};
export type DeleteInvItemConfigurationInvItemConfigurationEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteInvItemConfigurationInvItemConfigurationEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetInvItemConfigurationInvItemConfigurationEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetInvItemConfigurationInvItemConfigurationEventIdGetApiArg = {
  id: number;
};
export type CreateItemOpeningBalanceItemOpeningBalancePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateItemOpeningBalanceItemOpeningBalancePostApiArg = {
  'x-tenant-id': string;
  itemOpeningBalanceInsert: ItemOpeningBalanceInsert;
};
export type GetAllItemOpeningBalancesItemOpeningBalanceGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllItemOpeningBalancesItemOpeningBalanceGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateItemOpeningBalanceItemOpeningBalanceIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateItemOpeningBalanceItemOpeningBalanceIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  itemOpeningBalanceUpdate: ItemOpeningBalanceUpdate;
};
export type DeleteItemOpeningBalanceItemOpeningBalanceIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteItemOpeningBalanceItemOpeningBalanceIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetItemOpeningBalanceItemOpeningBalanceIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetItemOpeningBalanceItemOpeningBalanceIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllItemOpeningBalanceEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllItemOpeningBalanceEventGetApiArg = void;
export type CreateItemOpeningBalanceItemOpeningBalanceEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateItemOpeningBalanceItemOpeningBalanceEventPostApiArg = {
  itemOpeningBalanceInsert: ItemOpeningBalanceInsert;
};
export type UpdateItemOpeningBalanceItemOpeningBalanceEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateItemOpeningBalanceItemOpeningBalanceEventIdPutApiArg = {
  id: number;
  itemOpeningBalanceUpdate: ItemOpeningBalanceUpdate;
};
export type DeleteItemOpeningBalanceItemOpeningBalanceEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteItemOpeningBalanceItemOpeningBalanceEventIdDeleteApiArg = {
  id: number;
};
export type GetItemOpeningBalanceItemOpeningBalanceEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetItemOpeningBalanceItemOpeningBalanceEventIdGetApiArg = {
  id: number;
};
export type CreatePoplistsPoplistsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreatePoplistsPoplistsPostApiArg = {
  'x-tenant-id': string;
  poplistsInsert: PoplistsInsert;
};
export type GetAllPoplistssPoplistsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllPoplistssPoplistsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdatePoplistsPoplistsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdatePoplistsPoplistsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  poplistsUpdate: PoplistsUpdate;
};
export type DeletePoplistsPoplistsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeletePoplistsPoplistsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetPoplistsPoplistsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetPoplistsPoplistsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllPoplistsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllPoplistsEventGetApiArg = void;
export type CreatePoplistsPoplistsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreatePoplistsPoplistsEventPostApiArg = {
  poplistsInsert: PoplistsInsert;
};
export type UpdatePoplistsPoplistsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdatePoplistsPoplistsEventIdPutApiArg = {
  id: number;
  poplistsUpdate: PoplistsUpdate;
};
export type DeletePoplistsPoplistsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeletePoplistsPoplistsEventIdDeleteApiArg = {
  id: number;
};
export type GetPoplistsPoplistsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetPoplistsPoplistsEventIdGetApiArg = {
  id: number;
};
export type CreatePurchaseOrderTermsPurchaseOrderTermsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreatePurchaseOrderTermsPurchaseOrderTermsPostApiArg = {
  'x-tenant-id': string;
  purchaseOrderTermsInsert: PurchaseOrderTermsInsert;
};
export type GetAllPurchaseOrderTermssPurchaseOrderTermsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllPurchaseOrderTermssPurchaseOrderTermsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdatePurchaseOrderTermsPurchaseOrderTermsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdatePurchaseOrderTermsPurchaseOrderTermsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  purchaseOrderTermsUpdate: PurchaseOrderTermsUpdate;
};
export type DeletePurchaseOrderTermsPurchaseOrderTermsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeletePurchaseOrderTermsPurchaseOrderTermsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetPurchaseOrderTermsPurchaseOrderTermsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetPurchaseOrderTermsPurchaseOrderTermsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllPurchaseOrderTermsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllPurchaseOrderTermsEventGetApiArg = void;
export type CreatePurchaseOrderTermsPurchaseOrderTermsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreatePurchaseOrderTermsPurchaseOrderTermsEventPostApiArg = {
  purchaseOrderTermsInsert: PurchaseOrderTermsInsert;
};
export type UpdatePurchaseOrderTermsPurchaseOrderTermsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdatePurchaseOrderTermsPurchaseOrderTermsEventIdPutApiArg = {
  id: number;
  purchaseOrderTermsUpdate: PurchaseOrderTermsUpdate;
};
export type DeletePurchaseOrderTermsPurchaseOrderTermsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeletePurchaseOrderTermsPurchaseOrderTermsEventIdDeleteApiArg = {
  id: number;
};
export type GetPurchaseOrderTermsPurchaseOrderTermsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetPurchaseOrderTermsPurchaseOrderTermsEventIdGetApiArg = {
  id: number;
};
export type CreateRefAstMaterialRefAstMaterialPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefAstMaterialRefAstMaterialPostApiArg = {
  'x-tenant-id': string;
  refAstMaterialInsert: RefAstMaterialInsert;
};
export type GetAllRefAstMaterialsRefAstMaterialGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefAstMaterialsRefAstMaterialGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateRefAstMaterialRefAstMaterialIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefAstMaterialRefAstMaterialIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  refAstMaterialUpdate: RefAstMaterialUpdate;
};
export type DeleteRefAstMaterialRefAstMaterialIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefAstMaterialRefAstMaterialIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetRefAstMaterialRefAstMaterialIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefAstMaterialRefAstMaterialIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllRefAstMaterialEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefAstMaterialEventGetApiArg = void;
export type CreateRefAstMaterialRefAstMaterialEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefAstMaterialRefAstMaterialEventPostApiArg = {
  refAstMaterialInsert: RefAstMaterialInsert;
};
export type UpdateRefAstMaterialRefAstMaterialEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefAstMaterialRefAstMaterialEventIdPutApiArg = {
  id: number;
  refAstMaterialUpdate: RefAstMaterialUpdate;
};
export type DeleteRefAstMaterialRefAstMaterialEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefAstMaterialRefAstMaterialEventIdDeleteApiArg = {
  id: number;
};
export type GetRefAstMaterialRefAstMaterialEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefAstMaterialRefAstMaterialEventIdGetApiArg = {
  id: number;
};
export type CreateRefFuelStationRefFuelStationPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefFuelStationRefFuelStationPostApiArg = {
  'x-tenant-id': string;
  refFuelStationInsert: RefFuelStationInsert;
};
export type GetAllRefFuelStationsRefFuelStationGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefFuelStationsRefFuelStationGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateRefFuelStationRefFuelStationIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefFuelStationRefFuelStationIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  refFuelStationUpdate: RefFuelStationUpdate;
};
export type DeleteRefFuelStationRefFuelStationIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefFuelStationRefFuelStationIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetRefFuelStationRefFuelStationIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefFuelStationRefFuelStationIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllRefFuelStationEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefFuelStationEventGetApiArg = void;
export type CreateRefFuelStationRefFuelStationEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefFuelStationRefFuelStationEventPostApiArg = {
  refFuelStationInsert: RefFuelStationInsert;
};
export type UpdateRefFuelStationRefFuelStationEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefFuelStationRefFuelStationEventIdPutApiArg = {
  id: number;
  refFuelStationUpdate: RefFuelStationUpdate;
};
export type DeleteRefFuelStationRefFuelStationEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefFuelStationRefFuelStationEventIdDeleteApiArg = {
  id: number;
};
export type GetRefFuelStationRefFuelStationEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefFuelStationRefFuelStationEventIdGetApiArg = {
  id: number;
};
export type CreateRefPartyRefPartyPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefPartyRefPartyPostApiArg = {
  'x-tenant-id': string;
  refPartyInsert: RefPartyInsert;
};
export type GetAllRefPartysRefPartyGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefPartysRefPartyGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateRefPartyRefPartyIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefPartyRefPartyIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  refPartyUpdate: RefPartyUpdate;
};
export type DeleteRefPartyRefPartyIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefPartyRefPartyIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetRefPartyRefPartyIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefPartyRefPartyIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllRefPartyEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefPartyEventGetApiArg = void;
export type CreateRefPartyRefPartyEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefPartyRefPartyEventPostApiArg = {
  refPartyInsert: RefPartyInsert;
};
export type UpdateRefPartyRefPartyEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefPartyRefPartyEventIdPutApiArg = {
  id: number;
  refPartyUpdate: RefPartyUpdate;
};
export type DeleteRefPartyRefPartyEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefPartyRefPartyEventIdDeleteApiArg = {
  id: number;
};
export type GetRefPartyRefPartyEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefPartyRefPartyEventIdGetApiArg = {
  id: number;
};
export type CreateRefRosterRefRosterPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefRosterRefRosterPostApiArg = {
  'x-tenant-id': string;
  refRosterInsert: RefRosterInsert;
};
export type GetAllRefRostersRefRosterGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefRostersRefRosterGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateRefRosterRefRosterIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefRosterRefRosterIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  refRosterUpdate: RefRosterUpdate;
};
export type DeleteRefRosterRefRosterIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefRosterRefRosterIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetRefRosterRefRosterIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefRosterRefRosterIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllRefRosterEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefRosterEventGetApiArg = void;
export type CreateRefRosterRefRosterEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefRosterRefRosterEventPostApiArg = {
  refRosterInsert: RefRosterInsert;
};
export type UpdateRefRosterRefRosterEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefRosterRefRosterEventIdPutApiArg = {
  id: number;
  refRosterUpdate: RefRosterUpdate;
};
export type DeleteRefRosterRefRosterEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefRosterRefRosterEventIdDeleteApiArg = {
  id: number;
};
export type GetRefRosterRefRosterEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefRosterRefRosterEventIdGetApiArg = {
  id: number;
};
export type CreateRefSubAssemblyRefSubAssemblyPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefSubAssemblyRefSubAssemblyPostApiArg = {
  'x-tenant-id': string;
  refSubAssemblyInsert: RefSubAssemblyInsert;
};
export type GetAllRefSubAssemblysRefSubAssemblyGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefSubAssemblysRefSubAssemblyGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateRefSubAssemblyRefSubAssemblyIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefSubAssemblyRefSubAssemblyIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  refSubAssemblyUpdate: RefSubAssemblyUpdate;
};
export type DeleteRefSubAssemblyRefSubAssemblyIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefSubAssemblyRefSubAssemblyIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetRefSubAssemblyRefSubAssemblyIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefSubAssemblyRefSubAssemblyIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllRefSubAssemblyEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefSubAssemblyEventGetApiArg = void;
export type CreateRefSubAssemblyRefSubAssemblyEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefSubAssemblyRefSubAssemblyEventPostApiArg = {
  refSubAssemblyInsert: RefSubAssemblyInsert;
};
export type UpdateRefSubAssemblyRefSubAssemblyEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefSubAssemblyRefSubAssemblyEventIdPutApiArg = {
  id: number;
  refSubAssemblyUpdate: RefSubAssemblyUpdate;
};
export type DeleteRefSubAssemblyRefSubAssemblyEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefSubAssemblyRefSubAssemblyEventIdDeleteApiArg = {
  id: number;
};
export type GetRefSubAssemblyRefSubAssemblyEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefSubAssemblyRefSubAssemblyEventIdGetApiArg = {
  id: number;
};
export type CreateRefTaxRefTaxPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefTaxRefTaxPostApiArg = {
  'x-tenant-id': string;
  refTaxInsert: RefTaxInsert;
};
export type GetAllRefTaxsRefTaxGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefTaxsRefTaxGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateRefTaxRefTaxIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefTaxRefTaxIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  refTaxUpdate: RefTaxUpdate;
};
export type DeleteRefTaxRefTaxIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefTaxRefTaxIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetRefTaxRefTaxIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefTaxRefTaxIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllRefTaxEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefTaxEventGetApiArg = void;
export type CreateRefTaxRefTaxEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefTaxRefTaxEventPostApiArg = {
  refTaxInsert: RefTaxInsert;
};
export type UpdateRefTaxRefTaxEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefTaxRefTaxEventIdPutApiArg = {
  id: number;
  refTaxUpdate: RefTaxUpdate;
};
export type DeleteRefTaxRefTaxEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefTaxRefTaxEventIdDeleteApiArg = {
  id: number;
};
export type GetRefTaxRefTaxEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefTaxRefTaxEventIdGetApiArg = {
  id: number;
};
export type CreateRefVendorRefVendorPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefVendorRefVendorPostApiArg = {
  'x-tenant-id': string;
  refVendorInsert: RefVendorInsert;
};
export type GetAllRefVendorsRefVendorGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefVendorsRefVendorGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateRefVendorRefVendorIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefVendorRefVendorIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  refVendorUpdate: RefVendorUpdate;
};
export type DeleteRefVendorRefVendorIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefVendorRefVendorIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetRefVendorRefVendorIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefVendorRefVendorIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllRefVendorEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefVendorEventGetApiArg = void;
export type CreateRefVendorRefVendorEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefVendorRefVendorEventPostApiArg = {
  refVendorInsert: RefVendorInsert;
};
export type UpdateRefVendorRefVendorEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefVendorRefVendorEventIdPutApiArg = {
  id: number;
  refVendorUpdate: RefVendorUpdate;
};
export type DeleteRefVendorRefVendorEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefVendorRefVendorEventIdDeleteApiArg = {
  id: number;
};
export type GetRefVendorRefVendorEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefVendorRefVendorEventIdGetApiArg = {
  id: number;
};
export type CreateRefWorkstationRefWorkstationPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefWorkstationRefWorkstationPostApiArg = {
  'x-tenant-id': string;
  refWorkstationInsert: RefWorkstationInsert;
};
export type GetAllRefWorkstationsRefWorkstationGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefWorkstationsRefWorkstationGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateRefWorkstationRefWorkstationIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefWorkstationRefWorkstationIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  refWorkstationUpdate: RefWorkstationUpdate;
};
export type DeleteRefWorkstationRefWorkstationIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefWorkstationRefWorkstationIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetRefWorkstationRefWorkstationIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefWorkstationRefWorkstationIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllRefWorkstationEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefWorkstationEventGetApiArg = void;
export type CreateRefWorkstationRefWorkstationEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefWorkstationRefWorkstationEventPostApiArg = {
  refWorkstationInsert: RefWorkstationInsert;
};
export type UpdateRefWorkstationRefWorkstationEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefWorkstationRefWorkstationEventIdPutApiArg = {
  id: number;
  refWorkstationUpdate: RefWorkstationUpdate;
};
export type DeleteRefWorkstationRefWorkstationEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefWorkstationRefWorkstationEventIdDeleteApiArg = {
  id: number;
};
export type GetRefWorkstationRefWorkstationEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefWorkstationRefWorkstationEventIdGetApiArg = {
  id: number;
};
export type CreateResAssetResAssetPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateResAssetResAssetPostApiArg = {
  'x-tenant-id': string;
  resAssetInsert: ResAssetInsert;
};
export type GetAllResAssetsResAssetGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllResAssetsResAssetGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateResAssetResAssetIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateResAssetResAssetIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  resAssetUpdate: ResAssetUpdate;
};
export type DeleteResAssetResAssetIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteResAssetResAssetIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetResAssetResAssetIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetResAssetResAssetIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllResAssetEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllResAssetEventGetApiArg = void;
export type CreateResAssetResAssetEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateResAssetResAssetEventPostApiArg = {
  resAssetInsert: ResAssetInsert;
};
export type UpdateResAssetResAssetEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateResAssetResAssetEventIdPutApiArg = {
  id: number;
  resAssetUpdate: ResAssetUpdate;
};
export type DeleteResAssetResAssetEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteResAssetResAssetEventIdDeleteApiArg = {
  id: number;
};
export type GetResAssetResAssetEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetResAssetResAssetEventIdGetApiArg = {
  id: number;
};
export type CreateSaasApiKeyAuditSaasApiKeyAuditPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasApiKeyAuditSaasApiKeyAuditPostApiArg = {
  'x-tenant-id': string;
  saasApiKeyAuditInsert: SaasApiKeyAuditInsert;
};
export type GetAllSaasApiKeyAuditsSaasApiKeyAuditGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasApiKeyAuditsSaasApiKeyAuditGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSaasApiKeyAuditSaasApiKeyAuditIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasApiKeyAuditSaasApiKeyAuditIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  saasApiKeyAuditUpdate: SaasApiKeyAuditUpdate;
};
export type DeleteSaasApiKeyAuditSaasApiKeyAuditIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasApiKeyAuditSaasApiKeyAuditIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSaasApiKeyAuditSaasApiKeyAuditIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasApiKeyAuditSaasApiKeyAuditIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSaasApiKeyAuditEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasApiKeyAuditEventGetApiArg = void;
export type CreateSaasApiKeyAuditSaasApiKeyAuditEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasApiKeyAuditSaasApiKeyAuditEventPostApiArg = {
  saasApiKeyAuditInsert: SaasApiKeyAuditInsert;
};
export type UpdateSaasApiKeyAuditSaasApiKeyAuditEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasApiKeyAuditSaasApiKeyAuditEventIdPutApiArg = {
  id: number;
  saasApiKeyAuditUpdate: SaasApiKeyAuditUpdate;
};
export type DeleteSaasApiKeyAuditSaasApiKeyAuditEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasApiKeyAuditSaasApiKeyAuditEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasApiKeyAuditSaasApiKeyAuditEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasApiKeyAuditSaasApiKeyAuditEventIdGetApiArg = {
  id: number;
};
export type CreateSaasChatsSaasChatsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasChatsSaasChatsPostApiArg = {
  'x-tenant-id': string;
  saasChatsInsert: SaasChatsInsert;
};
export type GetAllSaasChatssSaasChatsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasChatssSaasChatsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSaasChatsSaasChatsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasChatsSaasChatsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  saasChatsUpdate: SaasChatsUpdate;
};
export type DeleteSaasChatsSaasChatsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasChatsSaasChatsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSaasChatsSaasChatsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasChatsSaasChatsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSaasChatsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasChatsEventGetApiArg = void;
export type CreateSaasChatsSaasChatsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasChatsSaasChatsEventPostApiArg = {
  saasChatsInsert: SaasChatsInsert;
};
export type UpdateSaasChatsSaasChatsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasChatsSaasChatsEventIdPutApiArg = {
  id: number;
  saasChatsUpdate: SaasChatsUpdate;
};
export type DeleteSaasChatsSaasChatsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasChatsSaasChatsEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasChatsSaasChatsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasChatsSaasChatsEventIdGetApiArg = {
  id: number;
};
export type CreateSaasCustomersSaasCustomersPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasCustomersSaasCustomersPostApiArg = {
  'x-tenant-id': string;
  saasCustomersInsert: SaasCustomersInsert;
};
export type GetAllSaasCustomerssSaasCustomersGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasCustomerssSaasCustomersGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSaasCustomersSaasCustomersIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasCustomersSaasCustomersIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  saasCustomersUpdate: SaasCustomersUpdate;
};
export type DeleteSaasCustomersSaasCustomersIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasCustomersSaasCustomersIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSaasCustomersSaasCustomersIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasCustomersSaasCustomersIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSaasCustomersEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasCustomersEventGetApiArg = void;
export type CreateSaasCustomersSaasCustomersEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasCustomersSaasCustomersEventPostApiArg = {
  saasCustomersInsert: SaasCustomersInsert;
};
export type UpdateSaasCustomersSaasCustomersEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasCustomersSaasCustomersEventIdPutApiArg = {
  id: number;
  saasCustomersUpdate: SaasCustomersUpdate;
};
export type DeleteSaasCustomersSaasCustomersEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasCustomersSaasCustomersEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasCustomersSaasCustomersEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasCustomersSaasCustomersEventIdGetApiArg = {
  id: number;
};
export type CreateSaasEntitySharesSaasEntitySharesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasEntitySharesSaasEntitySharesPostApiArg = {
  'x-tenant-id': string;
  saasEntitySharesInsert: SaasEntitySharesInsert;
};
export type GetAllSaasEntitySharessSaasEntitySharesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasEntitySharessSaasEntitySharesGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSaasEntitySharesSaasEntitySharesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasEntitySharesSaasEntitySharesIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  saasEntitySharesUpdate: SaasEntitySharesUpdate;
};
export type DeleteSaasEntitySharesSaasEntitySharesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasEntitySharesSaasEntitySharesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSaasEntitySharesSaasEntitySharesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasEntitySharesSaasEntitySharesIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSaasEntitySharesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasEntitySharesEventGetApiArg = void;
export type CreateSaasEntitySharesSaasEntitySharesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasEntitySharesSaasEntitySharesEventPostApiArg = {
  saasEntitySharesInsert: SaasEntitySharesInsert;
};
export type UpdateSaasEntitySharesSaasEntitySharesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasEntitySharesSaasEntitySharesEventIdPutApiArg = {
  id: number;
  saasEntitySharesUpdate: SaasEntitySharesUpdate;
};
export type DeleteSaasEntitySharesSaasEntitySharesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasEntitySharesSaasEntitySharesEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasEntitySharesSaasEntitySharesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasEntitySharesSaasEntitySharesEventIdGetApiArg = {
  id: number;
};
export type CreateSaasFlexEntitySaasFlexEntityPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasFlexEntitySaasFlexEntityPostApiArg = {
  'x-tenant-id': string;
  saasFlexEntityInsert: SaasFlexEntityInsert;
};
export type GetAllSaasFlexEntitysSaasFlexEntityGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasFlexEntitysSaasFlexEntityGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSaasFlexEntitySaasFlexEntityIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasFlexEntitySaasFlexEntityIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  saasFlexEntityUpdate: SaasFlexEntityUpdate;
};
export type DeleteSaasFlexEntitySaasFlexEntityIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasFlexEntitySaasFlexEntityIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSaasFlexEntitySaasFlexEntityIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasFlexEntitySaasFlexEntityIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSaasFlexEntityEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasFlexEntityEventGetApiArg = void;
export type CreateSaasFlexEntitySaasFlexEntityEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasFlexEntitySaasFlexEntityEventPostApiArg = {
  saasFlexEntityInsert: SaasFlexEntityInsert;
};
export type UpdateSaasFlexEntitySaasFlexEntityEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasFlexEntitySaasFlexEntityEventIdPutApiArg = {
  id: number;
  saasFlexEntityUpdate: SaasFlexEntityUpdate;
};
export type DeleteSaasFlexEntitySaasFlexEntityEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasFlexEntitySaasFlexEntityEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasFlexEntitySaasFlexEntityEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasFlexEntitySaasFlexEntityEventIdGetApiArg = {
  id: number;
};
export type CreateSaasFlexFieldsSaasFlexFieldsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasFlexFieldsSaasFlexFieldsPostApiArg = {
  'x-tenant-id': string;
  saasFlexFieldsInsert: SaasFlexFieldsInsert;
};
export type GetAllSaasFlexFieldssSaasFlexFieldsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasFlexFieldssSaasFlexFieldsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSaasFlexFieldsSaasFlexFieldsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasFlexFieldsSaasFlexFieldsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  saasFlexFieldsUpdate: SaasFlexFieldsUpdate;
};
export type DeleteSaasFlexFieldsSaasFlexFieldsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasFlexFieldsSaasFlexFieldsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSaasFlexFieldsSaasFlexFieldsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasFlexFieldsSaasFlexFieldsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSaasFlexFieldsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasFlexFieldsEventGetApiArg = void;
export type CreateSaasFlexFieldsSaasFlexFieldsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasFlexFieldsSaasFlexFieldsEventPostApiArg = {
  saasFlexFieldsInsert: SaasFlexFieldsInsert;
};
export type UpdateSaasFlexFieldsSaasFlexFieldsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasFlexFieldsSaasFlexFieldsEventIdPutApiArg = {
  id: number;
  saasFlexFieldsUpdate: SaasFlexFieldsUpdate;
};
export type DeleteSaasFlexFieldsSaasFlexFieldsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasFlexFieldsSaasFlexFieldsEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasFlexFieldsSaasFlexFieldsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasFlexFieldsSaasFlexFieldsEventIdGetApiArg = {
  id: number;
};
export type CreateSaasFlexFieldValuesSaasFlexFieldValuesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasFlexFieldValuesSaasFlexFieldValuesPostApiArg = {
  'x-tenant-id': string;
  saasFlexFieldValuesInsert: SaasFlexFieldValuesInsert;
};
export type GetAllSaasFlexFieldValuessSaasFlexFieldValuesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasFlexFieldValuessSaasFlexFieldValuesGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSaasFlexFieldValuesSaasFlexFieldValuesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasFlexFieldValuesSaasFlexFieldValuesIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  saasFlexFieldValuesUpdate: SaasFlexFieldValuesUpdate;
};
export type DeleteSaasFlexFieldValuesSaasFlexFieldValuesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasFlexFieldValuesSaasFlexFieldValuesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSaasFlexFieldValuesSaasFlexFieldValuesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasFlexFieldValuesSaasFlexFieldValuesIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSaasFlexFieldValuesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasFlexFieldValuesEventGetApiArg = void;
export type CreateSaasFlexFieldValuesSaasFlexFieldValuesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasFlexFieldValuesSaasFlexFieldValuesEventPostApiArg = {
  saasFlexFieldValuesInsert: SaasFlexFieldValuesInsert;
};
export type UpdateSaasFlexFieldValuesSaasFlexFieldValuesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasFlexFieldValuesSaasFlexFieldValuesEventIdPutApiArg = {
  id: number;
  saasFlexFieldValuesUpdate: SaasFlexFieldValuesUpdate;
};
export type DeleteSaasFlexFieldValuesSaasFlexFieldValuesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasFlexFieldValuesSaasFlexFieldValuesEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasFlexFieldValuesSaasFlexFieldValuesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasFlexFieldValuesSaasFlexFieldValuesEventIdGetApiArg = {
  id: number;
};
export type CreateSaasRefConfigurationsSaasRefConfigurationsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefConfigurationsSaasRefConfigurationsPostApiArg = {
  'x-tenant-id': string;
  saasRefConfigurationsInsert: SaasRefConfigurationsInsert;
};
export type GetAllSaasRefConfigurationssSaasRefConfigurationsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefConfigurationssSaasRefConfigurationsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSaasRefConfigurationsSaasRefConfigurationsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefConfigurationsSaasRefConfigurationsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  saasRefConfigurationsUpdate: SaasRefConfigurationsUpdate;
};
export type DeleteSaasRefConfigurationsSaasRefConfigurationsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefConfigurationsSaasRefConfigurationsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSaasRefConfigurationsSaasRefConfigurationsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefConfigurationsSaasRefConfigurationsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSaasRefConfigurationsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefConfigurationsEventGetApiArg = void;
export type CreateSaasRefConfigurationsSaasRefConfigurationsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefConfigurationsSaasRefConfigurationsEventPostApiArg = {
  saasRefConfigurationsInsert: SaasRefConfigurationsInsert;
};
export type UpdateSaasRefConfigurationsSaasRefConfigurationsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefConfigurationsSaasRefConfigurationsEventIdPutApiArg = {
  id: number;
  saasRefConfigurationsUpdate: SaasRefConfigurationsUpdate;
};
export type DeleteSaasRefConfigurationsSaasRefConfigurationsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefConfigurationsSaasRefConfigurationsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSaasRefConfigurationsSaasRefConfigurationsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefConfigurationsSaasRefConfigurationsEventIdGetApiArg = {
  id: number;
};
export type CreateSaasRefDocumentsSaasRefDocumentsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefDocumentsSaasRefDocumentsPostApiArg = {
  'x-tenant-id': string;
  saasRefDocumentsInsert: SaasRefDocumentsInsert;
};
export type GetAllSaasRefDocumentssSaasRefDocumentsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefDocumentssSaasRefDocumentsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSaasRefDocumentsSaasRefDocumentsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefDocumentsSaasRefDocumentsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  saasRefDocumentsUpdate: SaasRefDocumentsUpdate;
};
export type DeleteSaasRefDocumentsSaasRefDocumentsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefDocumentsSaasRefDocumentsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSaasRefDocumentsSaasRefDocumentsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefDocumentsSaasRefDocumentsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSaasRefDocumentsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefDocumentsEventGetApiArg = void;
export type CreateSaasRefDocumentsSaasRefDocumentsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefDocumentsSaasRefDocumentsEventPostApiArg = {
  saasRefDocumentsInsert: SaasRefDocumentsInsert;
};
export type UpdateSaasRefDocumentsSaasRefDocumentsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefDocumentsSaasRefDocumentsEventIdPutApiArg = {
  id: number;
  saasRefDocumentsUpdate: SaasRefDocumentsUpdate;
};
export type DeleteSaasRefDocumentsSaasRefDocumentsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefDocumentsSaasRefDocumentsEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefDocumentsSaasRefDocumentsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefDocumentsSaasRefDocumentsEventIdGetApiArg = {
  id: number;
};
export type CreateSaasRefFeaturesSaasRefFeaturesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefFeaturesSaasRefFeaturesPostApiArg = {
  'x-tenant-id': string;
  saasRefFeaturesInsert: SaasRefFeaturesInsert;
};
export type GetAllSaasRefFeaturessSaasRefFeaturesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefFeaturessSaasRefFeaturesGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSaasRefFeaturesSaasRefFeaturesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefFeaturesSaasRefFeaturesIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  saasRefFeaturesUpdate: SaasRefFeaturesUpdate;
};
export type DeleteSaasRefFeaturesSaasRefFeaturesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefFeaturesSaasRefFeaturesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSaasRefFeaturesSaasRefFeaturesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefFeaturesSaasRefFeaturesIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSaasRefFeaturesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefFeaturesEventGetApiArg = void;
export type CreateSaasRefFeaturesSaasRefFeaturesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefFeaturesSaasRefFeaturesEventPostApiArg = {
  saasRefFeaturesInsert: SaasRefFeaturesInsert;
};
export type UpdateSaasRefFeaturesSaasRefFeaturesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefFeaturesSaasRefFeaturesEventIdPutApiArg = {
  id: number;
  saasRefFeaturesUpdate: SaasRefFeaturesUpdate;
};
export type DeleteSaasRefFeaturesSaasRefFeaturesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefFeaturesSaasRefFeaturesEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefFeaturesSaasRefFeaturesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefFeaturesSaasRefFeaturesEventIdGetApiArg = {
  id: number;
};
export type CreateSaasRefModulesSaasRefModulesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefModulesSaasRefModulesPostApiArg = {
  'x-tenant-id': string;
  saasRefModulesInsert: SaasRefModulesInsert;
};
export type GetAllSaasRefModulessSaasRefModulesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefModulessSaasRefModulesGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSaasRefModulesSaasRefModulesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefModulesSaasRefModulesIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  saasRefModulesUpdate: SaasRefModulesUpdate;
};
export type DeleteSaasRefModulesSaasRefModulesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefModulesSaasRefModulesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSaasRefModulesSaasRefModulesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefModulesSaasRefModulesIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSaasRefModulesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefModulesEventGetApiArg = void;
export type CreateSaasRefModulesSaasRefModulesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefModulesSaasRefModulesEventPostApiArg = {
  saasRefModulesInsert: SaasRefModulesInsert;
};
export type UpdateSaasRefModulesSaasRefModulesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefModulesSaasRefModulesEventIdPutApiArg = {
  id: number;
  saasRefModulesUpdate: SaasRefModulesUpdate;
};
export type DeleteSaasRefModulesSaasRefModulesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefModulesSaasRefModulesEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefModulesSaasRefModulesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefModulesSaasRefModulesEventIdGetApiArg = {
  id: number;
};
export type CreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesPostApiArg =
  {
    'x-tenant-id': string;
    saasRefSubscriptionFeaturesInsert: SaasRefSubscriptionFeaturesInsert;
  };
export type GetAllSaasRefSubscriptionFeaturessSaasRefSubscriptionFeaturesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefSubscriptionFeaturessSaasRefSubscriptionFeaturesGetApiArg =
  {
    'x-tenant-id': string;
  };
export type UpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdPutApiArg =
  {
    id: number;
    'x-tenant-id': string;
    saasRefSubscriptionFeaturesUpdate: SaasRefSubscriptionFeaturesUpdate;
  };
export type DeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdDeleteApiArg =
  {
    id: number;
    'x-tenant-id': string;
  };
export type GetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdGetApiArg =
  {
    id: number;
    'x-tenant-id': string;
  };
export type GetAllSaasRefSubscriptionFeaturesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefSubscriptionFeaturesEventGetApiArg = void;
export type CreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventPostApiArg =
  {
    saasRefSubscriptionFeaturesInsert: SaasRefSubscriptionFeaturesInsert;
  };
export type UpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdPutApiArg =
  {
    id: number;
    saasRefSubscriptionFeaturesUpdate: SaasRefSubscriptionFeaturesUpdate;
  };
export type DeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdGetApiArg =
  {
    id: number;
  };
export type CreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesPostApiArg = {
  'x-tenant-id': string;
  saasRefTenantCurrenciesInsert: SaasRefTenantCurrenciesInsert;
};
export type GetAllSaasRefTenantCurrenciessSaasRefTenantCurrenciesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefTenantCurrenciessSaasRefTenantCurrenciesGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  saasRefTenantCurrenciesUpdate: SaasRefTenantCurrenciesUpdate;
};
export type DeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdDeleteApiArg =
  {
    id: number;
    'x-tenant-id': string;
  };
export type GetSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSaasRefTenantCurrenciesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefTenantCurrenciesEventGetApiArg = void;
export type CreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventPostApiArg =
  {
    saasRefTenantCurrenciesInsert: SaasRefTenantCurrenciesInsert;
  };
export type UpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdPutApiArg =
  {
    id: number;
    saasRefTenantCurrenciesUpdate: SaasRefTenantCurrenciesUpdate;
  };
export type DeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdGetApiArg =
  {
    id: number;
  };
export type CreateSaasRefWorkflowsSaasRefWorkflowsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefWorkflowsSaasRefWorkflowsPostApiArg = {
  'x-tenant-id': string;
  saasRefWorkflowsInsert: SaasRefWorkflowsInsert;
};
export type GetAllSaasRefWorkflowssSaasRefWorkflowsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefWorkflowssSaasRefWorkflowsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSaasRefWorkflowsSaasRefWorkflowsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefWorkflowsSaasRefWorkflowsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  saasRefWorkflowsUpdate: SaasRefWorkflowsUpdate;
};
export type DeleteSaasRefWorkflowsSaasRefWorkflowsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefWorkflowsSaasRefWorkflowsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSaasRefWorkflowsSaasRefWorkflowsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefWorkflowsSaasRefWorkflowsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSaasRefWorkflowsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefWorkflowsEventGetApiArg = void;
export type CreateSaasRefWorkflowsSaasRefWorkflowsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefWorkflowsSaasRefWorkflowsEventPostApiArg = {
  saasRefWorkflowsInsert: SaasRefWorkflowsInsert;
};
export type UpdateSaasRefWorkflowsSaasRefWorkflowsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefWorkflowsSaasRefWorkflowsEventIdPutApiArg = {
  id: number;
  saasRefWorkflowsUpdate: SaasRefWorkflowsUpdate;
};
export type DeleteSaasRefWorkflowsSaasRefWorkflowsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefWorkflowsSaasRefWorkflowsEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefWorkflowsSaasRefWorkflowsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefWorkflowsSaasRefWorkflowsEventIdGetApiArg = {
  id: number;
};
export type CreateSaasRolePermissionSaasRolePermissionPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRolePermissionSaasRolePermissionPostApiArg = {
  'x-tenant-id': string;
  saasRolePermissionInsert: SaasRolePermissionInsert;
};
export type GetAllSaasRolePermissionsSaasRolePermissionGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRolePermissionsSaasRolePermissionGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSaasRolePermissionSaasRolePermissionIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRolePermissionSaasRolePermissionIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  saasRolePermissionUpdate: SaasRolePermissionUpdate;
};
export type DeleteSaasRolePermissionSaasRolePermissionIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRolePermissionSaasRolePermissionIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSaasRolePermissionSaasRolePermissionIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRolePermissionSaasRolePermissionIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSaasRolePermissionEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRolePermissionEventGetApiArg = void;
export type CreateSaasRolePermissionSaasRolePermissionEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRolePermissionSaasRolePermissionEventPostApiArg = {
  saasRolePermissionInsert: SaasRolePermissionInsert;
};
export type UpdateSaasRolePermissionSaasRolePermissionEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRolePermissionSaasRolePermissionEventIdPutApiArg = {
  id: number;
  saasRolePermissionUpdate: SaasRolePermissionUpdate;
};
export type DeleteSaasRolePermissionSaasRolePermissionEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRolePermissionSaasRolePermissionEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasRolePermissionSaasRolePermissionEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRolePermissionSaasRolePermissionEventIdGetApiArg = {
  id: number;
};
export type CreateSetAssetTypeSetAssetTypePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAssetTypeSetAssetTypePostApiArg = {
  'x-tenant-id': string;
  setAssetTypeInsert: SetAssetTypeInsert;
};
export type GetAllSetAssetTypesSetAssetTypeGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAssetTypesSetAssetTypeGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSetAssetTypeSetAssetTypeIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAssetTypeSetAssetTypeIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  setAssetTypeUpdate: SetAssetTypeUpdate;
};
export type DeleteSetAssetTypeSetAssetTypeIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAssetTypeSetAssetTypeIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSetAssetTypeSetAssetTypeIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAssetTypeSetAssetTypeIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSetAssetTypeEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAssetTypeEventGetApiArg = void;
export type CreateSetAssetTypeSetAssetTypeEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAssetTypeSetAssetTypeEventPostApiArg = {
  setAssetTypeInsert: SetAssetTypeInsert;
};
export type UpdateSetAssetTypeSetAssetTypeEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAssetTypeSetAssetTypeEventIdPutApiArg = {
  id: number;
  setAssetTypeUpdate: SetAssetTypeUpdate;
};
export type DeleteSetAssetTypeSetAssetTypeEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAssetTypeSetAssetTypeEventIdDeleteApiArg = {
  id: number;
};
export type GetSetAssetTypeSetAssetTypeEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAssetTypeSetAssetTypeEventIdGetApiArg = {
  id: number;
};
export type CreateSetAstActivityNamesSetAstActivityNamesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstActivityNamesSetAstActivityNamesPostApiArg = {
  'x-tenant-id': string;
  setAstActivityNamesInsert: SetAstActivityNamesInsert;
};
export type GetAllSetAstActivityNamessSetAstActivityNamesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstActivityNamessSetAstActivityNamesGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSetAstActivityNamesSetAstActivityNamesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstActivityNamesSetAstActivityNamesIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  setAstActivityNamesUpdate: SetAstActivityNamesUpdate;
};
export type DeleteSetAstActivityNamesSetAstActivityNamesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstActivityNamesSetAstActivityNamesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSetAstActivityNamesSetAstActivityNamesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstActivityNamesSetAstActivityNamesIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSetAstActivityNamesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstActivityNamesEventGetApiArg = void;
export type CreateSetAstActivityNamesSetAstActivityNamesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstActivityNamesSetAstActivityNamesEventPostApiArg = {
  setAstActivityNamesInsert: SetAstActivityNamesInsert;
};
export type UpdateSetAstActivityNamesSetAstActivityNamesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstActivityNamesSetAstActivityNamesEventIdPutApiArg = {
  id: number;
  setAstActivityNamesUpdate: SetAstActivityNamesUpdate;
};
export type DeleteSetAstActivityNamesSetAstActivityNamesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstActivityNamesSetAstActivityNamesEventIdDeleteApiArg = {
  id: number;
};
export type GetSetAstActivityNamesSetAstActivityNamesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstActivityNamesSetAstActivityNamesEventIdGetApiArg = {
  id: number;
};
export type CreateSetAstAssetTypeGroupSetAstAssetTypeGroupPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstAssetTypeGroupSetAstAssetTypeGroupPostApiArg = {
  'x-tenant-id': string;
  setAstAssetTypeGroupInsert: SetAstAssetTypeGroupInsert;
};
export type GetAllSetAstAssetTypeGroupsSetAstAssetTypeGroupGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstAssetTypeGroupsSetAstAssetTypeGroupGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSetAstAssetTypeGroupSetAstAssetTypeGroupIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstAssetTypeGroupSetAstAssetTypeGroupIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  setAstAssetTypeGroupUpdate: SetAstAssetTypeGroupUpdate;
};
export type DeleteSetAstAssetTypeGroupSetAstAssetTypeGroupIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstAssetTypeGroupSetAstAssetTypeGroupIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSetAstAssetTypeGroupSetAstAssetTypeGroupIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstAssetTypeGroupSetAstAssetTypeGroupIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSetAstAssetTypeGroupEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstAssetTypeGroupEventGetApiArg = void;
export type CreateSetAstAssetTypeGroupSetAstAssetTypeGroupEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstAssetTypeGroupSetAstAssetTypeGroupEventPostApiArg = {
  setAstAssetTypeGroupInsert: SetAstAssetTypeGroupInsert;
};
export type UpdateSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdPutApiArg = {
  id: number;
  setAstAssetTypeGroupUpdate: SetAstAssetTypeGroupUpdate;
};
export type DeleteSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdGetApiArg = {
  id: number;
};
export type CreateSetAstOwnerCategorySetAstOwnerCategoryPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstOwnerCategorySetAstOwnerCategoryPostApiArg = {
  'x-tenant-id': string;
  setAstOwnerCategoryInsert: SetAstOwnerCategoryInsert;
};
export type GetAllSetAstOwnerCategorysSetAstOwnerCategoryGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstOwnerCategorysSetAstOwnerCategoryGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSetAstOwnerCategorySetAstOwnerCategoryIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstOwnerCategorySetAstOwnerCategoryIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  setAstOwnerCategoryUpdate: SetAstOwnerCategoryUpdate;
};
export type DeleteSetAstOwnerCategorySetAstOwnerCategoryIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstOwnerCategorySetAstOwnerCategoryIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSetAstOwnerCategorySetAstOwnerCategoryIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstOwnerCategorySetAstOwnerCategoryIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSetAstOwnerCategoryEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstOwnerCategoryEventGetApiArg = void;
export type CreateSetAstOwnerCategorySetAstOwnerCategoryEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstOwnerCategorySetAstOwnerCategoryEventPostApiArg = {
  setAstOwnerCategoryInsert: SetAstOwnerCategoryInsert;
};
export type UpdateSetAstOwnerCategorySetAstOwnerCategoryEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstOwnerCategorySetAstOwnerCategoryEventIdPutApiArg = {
  id: number;
  setAstOwnerCategoryUpdate: SetAstOwnerCategoryUpdate;
};
export type DeleteSetAstOwnerCategorySetAstOwnerCategoryEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstOwnerCategorySetAstOwnerCategoryEventIdDeleteApiArg = {
  id: number;
};
export type GetSetAstOwnerCategorySetAstOwnerCategoryEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstOwnerCategorySetAstOwnerCategoryEventIdGetApiArg = {
  id: number;
};
export type CreateSetAstSiteActivitySetAstSiteActivityPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstSiteActivitySetAstSiteActivityPostApiArg = {
  'x-tenant-id': string;
  setAstSiteActivityInsert: SetAstSiteActivityInsert;
};
export type GetAllSetAstSiteActivitysSetAstSiteActivityGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstSiteActivitysSetAstSiteActivityGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSetAstSiteActivitySetAstSiteActivityIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstSiteActivitySetAstSiteActivityIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  setAstSiteActivityUpdate: SetAstSiteActivityUpdate;
};
export type DeleteSetAstSiteActivitySetAstSiteActivityIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstSiteActivitySetAstSiteActivityIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSetAstSiteActivitySetAstSiteActivityIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstSiteActivitySetAstSiteActivityIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSetAstSiteActivityEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstSiteActivityEventGetApiArg = void;
export type CreateSetAstSiteActivitySetAstSiteActivityEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstSiteActivitySetAstSiteActivityEventPostApiArg = {
  setAstSiteActivityInsert: SetAstSiteActivityInsert;
};
export type UpdateSetAstSiteActivitySetAstSiteActivityEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstSiteActivitySetAstSiteActivityEventIdPutApiArg = {
  id: number;
  setAstSiteActivityUpdate: SetAstSiteActivityUpdate;
};
export type DeleteSetAstSiteActivitySetAstSiteActivityEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstSiteActivitySetAstSiteActivityEventIdDeleteApiArg = {
  id: number;
};
export type GetSetAstSiteActivitySetAstSiteActivityEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstSiteActivitySetAstSiteActivityEventIdGetApiArg = {
  id: number;
};
export type CreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPostApiArg =
  {
    'x-tenant-id': string;
    setAstSubAssemblyCategoryInsert: SetAstSubAssemblyCategoryInsert;
  };
export type GetAllSetAstSubAssemblyCategorysSetAstSubAssemblyCategoryGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstSubAssemblyCategorysSetAstSubAssemblyCategoryGetApiArg =
  {
    'x-tenant-id': string;
  };
export type UpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdPutApiArg =
  {
    id: number;
    'x-tenant-id': string;
    setAstSubAssemblyCategoryUpdate: SetAstSubAssemblyCategoryUpdate;
  };
export type DeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteApiArg =
  {
    id: number;
    'x-tenant-id': string;
  };
export type GetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSetAstSubAssemblyCategoryEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstSubAssemblyCategoryEventGetApiArg = void;
export type CreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventPostApiArg =
  {
    setAstSubAssemblyCategoryInsert: SetAstSubAssemblyCategoryInsert;
  };
export type UpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdPutApiArg =
  {
    id: number;
    setAstSubAssemblyCategoryUpdate: SetAstSubAssemblyCategoryUpdate;
  };
export type DeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdGetApiArg =
  {
    id: number;
  };
export type CreateSetAstTicketTypeSetAstTicketTypePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstTicketTypeSetAstTicketTypePostApiArg = {
  'x-tenant-id': string;
  setAstTicketTypeInsert: SetAstTicketTypeInsert;
};
export type GetAllSetAstTicketTypesSetAstTicketTypeGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstTicketTypesSetAstTicketTypeGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSetAstTicketTypeSetAstTicketTypeIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstTicketTypeSetAstTicketTypeIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  setAstTicketTypeUpdate: SetAstTicketTypeUpdate;
};
export type DeleteSetAstTicketTypeSetAstTicketTypeIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstTicketTypeSetAstTicketTypeIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSetAstTicketTypeSetAstTicketTypeIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstTicketTypeSetAstTicketTypeIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSetAstTicketTypeEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstTicketTypeEventGetApiArg = void;
export type CreateSetAstTicketTypeSetAstTicketTypeEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstTicketTypeSetAstTicketTypeEventPostApiArg = {
  setAstTicketTypeInsert: SetAstTicketTypeInsert;
};
export type UpdateSetAstTicketTypeSetAstTicketTypeEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstTicketTypeSetAstTicketTypeEventIdPutApiArg = {
  id: number;
  setAstTicketTypeUpdate: SetAstTicketTypeUpdate;
};
export type DeleteSetAstTicketTypeSetAstTicketTypeEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstTicketTypeSetAstTicketTypeEventIdDeleteApiArg = {
  id: number;
};
export type GetSetAstTicketTypeSetAstTicketTypeEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstTicketTypeSetAstTicketTypeEventIdGetApiArg = {
  id: number;
};
export type CreateSetAstTransactionDelaySetAstTransactionDelayPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstTransactionDelaySetAstTransactionDelayPostApiArg = {
  'x-tenant-id': string;
  setAstTransactionDelayInsert: SetAstTransactionDelayInsert;
};
export type GetAllSetAstTransactionDelaysSetAstTransactionDelayGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstTransactionDelaysSetAstTransactionDelayGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSetAstTransactionDelaySetAstTransactionDelayIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstTransactionDelaySetAstTransactionDelayIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  setAstTransactionDelayUpdate: SetAstTransactionDelayUpdate;
};
export type DeleteSetAstTransactionDelaySetAstTransactionDelayIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstTransactionDelaySetAstTransactionDelayIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSetAstTransactionDelaySetAstTransactionDelayIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstTransactionDelaySetAstTransactionDelayIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSetAstTransactionDelayEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstTransactionDelayEventGetApiArg = void;
export type CreateSetAstTransactionDelaySetAstTransactionDelayEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstTransactionDelaySetAstTransactionDelayEventPostApiArg =
  {
    setAstTransactionDelayInsert: SetAstTransactionDelayInsert;
  };
export type UpdateSetAstTransactionDelaySetAstTransactionDelayEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstTransactionDelaySetAstTransactionDelayEventIdPutApiArg =
  {
    id: number;
    setAstTransactionDelayUpdate: SetAstTransactionDelayUpdate;
  };
export type DeleteSetAstTransactionDelaySetAstTransactionDelayEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstTransactionDelaySetAstTransactionDelayEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSetAstTransactionDelaySetAstTransactionDelayEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstTransactionDelaySetAstTransactionDelayEventIdGetApiArg = {
  id: number;
};
export type CreateSetEntitiesSetEntitiesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetEntitiesSetEntitiesPostApiArg = {
  'x-tenant-id': string;
  setEntitiesInsert: SetEntitiesInsert;
};
export type GetAllSetEntitiessSetEntitiesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetEntitiessSetEntitiesGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSetEntitiesSetEntitiesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetEntitiesSetEntitiesIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  setEntitiesUpdate: SetEntitiesUpdate;
};
export type DeleteSetEntitiesSetEntitiesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetEntitiesSetEntitiesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSetEntitiesSetEntitiesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetEntitiesSetEntitiesIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSetEntitiesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetEntitiesEventGetApiArg = void;
export type CreateSetEntitiesSetEntitiesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetEntitiesSetEntitiesEventPostApiArg = {
  setEntitiesInsert: SetEntitiesInsert;
};
export type UpdateSetEntitiesSetEntitiesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetEntitiesSetEntitiesEventIdPutApiArg = {
  id: number;
  setEntitiesUpdate: SetEntitiesUpdate;
};
export type DeleteSetEntitiesSetEntitiesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetEntitiesSetEntitiesEventIdDeleteApiArg = {
  id: number;
};
export type GetSetEntitiesSetEntitiesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetEntitiesSetEntitiesEventIdGetApiArg = {
  id: number;
};
export type CreateSetGenMydashboardSetGenMydashboardPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetGenMydashboardSetGenMydashboardPostApiArg = {
  'x-tenant-id': string;
  setGenMydashboardInsert: SetGenMydashboardInsert;
};
export type GetAllSetGenMydashboardsSetGenMydashboardGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetGenMydashboardsSetGenMydashboardGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSetGenMydashboardSetGenMydashboardIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetGenMydashboardSetGenMydashboardIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  setGenMydashboardUpdate: SetGenMydashboardUpdate;
};
export type DeleteSetGenMydashboardSetGenMydashboardIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetGenMydashboardSetGenMydashboardIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSetGenMydashboardSetGenMydashboardIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetGenMydashboardSetGenMydashboardIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSetGenMydashboardEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetGenMydashboardEventGetApiArg = void;
export type CreateSetGenMydashboardSetGenMydashboardEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetGenMydashboardSetGenMydashboardEventPostApiArg = {
  setGenMydashboardInsert: SetGenMydashboardInsert;
};
export type UpdateSetGenMydashboardSetGenMydashboardEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetGenMydashboardSetGenMydashboardEventIdPutApiArg = {
  id: number;
  setGenMydashboardUpdate: SetGenMydashboardUpdate;
};
export type DeleteSetGenMydashboardSetGenMydashboardEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetGenMydashboardSetGenMydashboardEventIdDeleteApiArg = {
  id: number;
};
export type GetSetGenMydashboardSetGenMydashboardEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetGenMydashboardSetGenMydashboardEventIdGetApiArg = {
  id: number;
};
export type CreateSetInvUomSetInvUomPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetInvUomSetInvUomPostApiArg = {
  'x-tenant-id': string;
  setInvUomInsert: SetInvUomInsert;
};
export type GetAllSetInvUomsSetInvUomGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetInvUomsSetInvUomGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSetInvUomSetInvUomIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetInvUomSetInvUomIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  setInvUomUpdate: SetInvUomUpdate;
};
export type DeleteSetInvUomSetInvUomIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetInvUomSetInvUomIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSetInvUomSetInvUomIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetInvUomSetInvUomIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSetInvUomEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetInvUomEventGetApiArg = void;
export type CreateSetInvUomSetInvUomEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetInvUomSetInvUomEventPostApiArg = {
  setInvUomInsert: SetInvUomInsert;
};
export type UpdateSetInvUomSetInvUomEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetInvUomSetInvUomEventIdPutApiArg = {
  id: number;
  setInvUomUpdate: SetInvUomUpdate;
};
export type DeleteSetInvUomSetInvUomEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetInvUomSetInvUomEventIdDeleteApiArg = {
  id: number;
};
export type GetSetInvUomSetInvUomEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetInvUomSetInvUomEventIdGetApiArg = {
  id: number;
};
export type CreateSetSiteGroupingSetSiteGroupingPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetSiteGroupingSetSiteGroupingPostApiArg = {
  'x-tenant-id': string;
  setSiteGroupingInsert: SetSiteGroupingInsert;
};
export type GetAllSetSiteGroupingsSetSiteGroupingGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetSiteGroupingsSetSiteGroupingGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSetSiteGroupingSetSiteGroupingIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetSiteGroupingSetSiteGroupingIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  setSiteGroupingUpdate: SetSiteGroupingUpdate;
};
export type DeleteSetSiteGroupingSetSiteGroupingIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetSiteGroupingSetSiteGroupingIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSetSiteGroupingSetSiteGroupingIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetSiteGroupingSetSiteGroupingIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSetSiteGroupingEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetSiteGroupingEventGetApiArg = void;
export type CreateSetSiteGroupingSetSiteGroupingEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetSiteGroupingSetSiteGroupingEventPostApiArg = {
  setSiteGroupingInsert: SetSiteGroupingInsert;
};
export type UpdateSetSiteGroupingSetSiteGroupingEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetSiteGroupingSetSiteGroupingEventIdPutApiArg = {
  id: number;
  setSiteGroupingUpdate: SetSiteGroupingUpdate;
};
export type DeleteSetSiteGroupingSetSiteGroupingEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetSiteGroupingSetSiteGroupingEventIdDeleteApiArg = {
  id: number;
};
export type GetSetSiteGroupingSetSiteGroupingEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetSiteGroupingSetSiteGroupingEventIdGetApiArg = {
  id: number;
};
export type CreateSetTenantConfigurationsSetTenantConfigurationsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetTenantConfigurationsSetTenantConfigurationsPostApiArg = {
  'x-tenant-id': string;
  setTenantConfigurationsInsert: SetTenantConfigurationsInsert;
};
export type GetAllSetTenantConfigurationssSetTenantConfigurationsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetTenantConfigurationssSetTenantConfigurationsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSetTenantConfigurationsSetTenantConfigurationsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetTenantConfigurationsSetTenantConfigurationsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  setTenantConfigurationsUpdate: SetTenantConfigurationsUpdate;
};
export type DeleteSetTenantConfigurationsSetTenantConfigurationsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetTenantConfigurationsSetTenantConfigurationsIdDeleteApiArg =
  {
    id: number;
    'x-tenant-id': string;
  };
export type GetSetTenantConfigurationsSetTenantConfigurationsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetTenantConfigurationsSetTenantConfigurationsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSetTenantConfigurationsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetTenantConfigurationsEventGetApiArg = void;
export type CreateSetTenantConfigurationsSetTenantConfigurationsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetTenantConfigurationsSetTenantConfigurationsEventPostApiArg =
  {
    setTenantConfigurationsInsert: SetTenantConfigurationsInsert;
  };
export type UpdateSetTenantConfigurationsSetTenantConfigurationsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetTenantConfigurationsSetTenantConfigurationsEventIdPutApiArg =
  {
    id: number;
    setTenantConfigurationsUpdate: SetTenantConfigurationsUpdate;
  };
export type DeleteSetTenantConfigurationsSetTenantConfigurationsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetTenantConfigurationsSetTenantConfigurationsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSetTenantConfigurationsSetTenantConfigurationsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetTenantConfigurationsSetTenantConfigurationsEventIdGetApiArg =
  {
    id: number;
  };
export type CreateSetTenantWorkflowsSetTenantWorkflowsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetTenantWorkflowsSetTenantWorkflowsPostApiArg = {
  'x-tenant-id': string;
  setTenantWorkflowsInsert: SetTenantWorkflowsInsert;
};
export type GetAllSetTenantWorkflowssSetTenantWorkflowsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetTenantWorkflowssSetTenantWorkflowsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSetTenantWorkflowsSetTenantWorkflowsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetTenantWorkflowsSetTenantWorkflowsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  setTenantWorkflowsUpdate: SetTenantWorkflowsUpdate;
};
export type DeleteSetTenantWorkflowsSetTenantWorkflowsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetTenantWorkflowsSetTenantWorkflowsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSetTenantWorkflowsSetTenantWorkflowsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetTenantWorkflowsSetTenantWorkflowsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSetTenantWorkflowsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetTenantWorkflowsEventGetApiArg = void;
export type CreateSetTenantWorkflowsSetTenantWorkflowsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetTenantWorkflowsSetTenantWorkflowsEventPostApiArg = {
  setTenantWorkflowsInsert: SetTenantWorkflowsInsert;
};
export type UpdateSetTenantWorkflowsSetTenantWorkflowsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetTenantWorkflowsSetTenantWorkflowsEventIdPutApiArg = {
  id: number;
  setTenantWorkflowsUpdate: SetTenantWorkflowsUpdate;
};
export type DeleteSetTenantWorkflowsSetTenantWorkflowsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetTenantWorkflowsSetTenantWorkflowsEventIdDeleteApiArg = {
  id: number;
};
export type GetSetTenantWorkflowsSetTenantWorkflowsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetTenantWorkflowsSetTenantWorkflowsEventIdGetApiArg = {
  id: number;
};
export type CreateSitesSitesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSitesSitesPostApiArg = {
  'x-tenant-id': string;
  sitesInsert: SitesInsert;
};
export type GetAllSitessSitesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSitessSitesGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateSitesSitesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSitesSitesIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  sitesUpdate: SitesUpdate;
};
export type DeleteSitesSitesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSitesSitesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetSitesSitesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSitesSitesIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllSitesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSitesEventGetApiArg = void;
export type CreateSitesSitesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSitesSitesEventPostApiArg = {
  sitesInsert: SitesInsert;
};
export type UpdateSitesSitesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSitesSitesEventIdPutApiArg = {
  id: number;
  sitesUpdate: SitesUpdate;
};
export type DeleteSitesSitesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSitesSitesEventIdDeleteApiArg = {
  id: number;
};
export type GetSitesSitesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSitesSitesEventIdGetApiArg = {
  id: number;
};
export type CreateTeamUsersTeamUsersPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTeamUsersTeamUsersPostApiArg = {
  'x-tenant-id': string;
  teamUsersInsert: TeamUsersInsert;
};
export type GetAllTeamUserssTeamUsersGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTeamUserssTeamUsersGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTeamUsersTeamUsersIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTeamUsersTeamUsersIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  teamUsersUpdate: TeamUsersUpdate;
};
export type DeleteTeamUsersTeamUsersIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTeamUsersTeamUsersIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTeamUsersTeamUsersIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTeamUsersTeamUsersIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTeamUsersEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTeamUsersEventGetApiArg = void;
export type CreateTeamUsersTeamUsersEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTeamUsersTeamUsersEventPostApiArg = {
  teamUsersInsert: TeamUsersInsert;
};
export type UpdateTeamUsersTeamUsersEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTeamUsersTeamUsersEventIdPutApiArg = {
  id: number;
  teamUsersUpdate: TeamUsersUpdate;
};
export type DeleteTeamUsersTeamUsersEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTeamUsersTeamUsersEventIdDeleteApiArg = {
  id: number;
};
export type GetTeamUsersTeamUsersEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTeamUsersTeamUsersEventIdGetApiArg = {
  id: number;
};
export type CreateTransactionNoSettingsTransactionNoSettingsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTransactionNoSettingsTransactionNoSettingsPostApiArg = {
  'x-tenant-id': string;
  transactionNoSettingsInsert: TransactionNoSettingsInsert;
};
export type GetAllTransactionNoSettingssTransactionNoSettingsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTransactionNoSettingssTransactionNoSettingsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTransactionNoSettingsTransactionNoSettingsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTransactionNoSettingsTransactionNoSettingsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  transactionNoSettingsUpdate: TransactionNoSettingsUpdate;
};
export type DeleteTransactionNoSettingsTransactionNoSettingsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTransactionNoSettingsTransactionNoSettingsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTransactionNoSettingsTransactionNoSettingsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTransactionNoSettingsTransactionNoSettingsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTransactionNoSettingsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTransactionNoSettingsEventGetApiArg = void;
export type CreateTransactionNoSettingsTransactionNoSettingsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTransactionNoSettingsTransactionNoSettingsEventPostApiArg = {
  transactionNoSettingsInsert: TransactionNoSettingsInsert;
};
export type UpdateTransactionNoSettingsTransactionNoSettingsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTransactionNoSettingsTransactionNoSettingsEventIdPutApiArg = {
  id: number;
  transactionNoSettingsUpdate: TransactionNoSettingsUpdate;
};
export type DeleteTransactionNoSettingsTransactionNoSettingsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTransactionNoSettingsTransactionNoSettingsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTransactionNoSettingsTransactionNoSettingsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTransactionNoSettingsTransactionNoSettingsEventIdGetApiArg = {
  id: number;
};
export type CreateTrnAssetDocumentTrnAssetDocumentPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetDocumentTrnAssetDocumentPostApiArg = {
  'x-tenant-id': string;
  trnAssetDocumentInsert: TrnAssetDocumentInsert;
};
export type GetAllTrnAssetDocumentsTrnAssetDocumentGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetDocumentsTrnAssetDocumentGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnAssetDocumentTrnAssetDocumentIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetDocumentTrnAssetDocumentIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnAssetDocumentUpdate: TrnAssetDocumentUpdate;
};
export type DeleteTrnAssetDocumentTrnAssetDocumentIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetDocumentTrnAssetDocumentIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnAssetDocumentTrnAssetDocumentIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetDocumentTrnAssetDocumentIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnAssetDocumentEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetDocumentEventGetApiArg = void;
export type CreateTrnAssetDocumentTrnAssetDocumentEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetDocumentTrnAssetDocumentEventPostApiArg = {
  trnAssetDocumentInsert: TrnAssetDocumentInsert;
};
export type UpdateTrnAssetDocumentTrnAssetDocumentEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetDocumentTrnAssetDocumentEventIdPutApiArg = {
  id: number;
  trnAssetDocumentUpdate: TrnAssetDocumentUpdate;
};
export type DeleteTrnAssetDocumentTrnAssetDocumentEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetDocumentTrnAssetDocumentEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetDocumentTrnAssetDocumentEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetDocumentTrnAssetDocumentEventIdGetApiArg = {
  id: number;
};
export type CreateTrnAssetMovmentTrnAssetMovmentPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetMovmentTrnAssetMovmentPostApiArg = {
  'x-tenant-id': string;
  trnAssetMovmentInsert: TrnAssetMovmentInsert;
};
export type GetAllTrnAssetMovmentsTrnAssetMovmentGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetMovmentsTrnAssetMovmentGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnAssetMovmentTrnAssetMovmentIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetMovmentTrnAssetMovmentIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnAssetMovmentUpdate: TrnAssetMovmentUpdate;
};
export type DeleteTrnAssetMovmentTrnAssetMovmentIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetMovmentTrnAssetMovmentIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnAssetMovmentTrnAssetMovmentIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetMovmentTrnAssetMovmentIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnAssetMovmentEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetMovmentEventGetApiArg = void;
export type CreateTrnAssetMovmentTrnAssetMovmentEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetMovmentTrnAssetMovmentEventPostApiArg = {
  trnAssetMovmentInsert: TrnAssetMovmentInsert;
};
export type UpdateTrnAssetMovmentTrnAssetMovmentEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetMovmentTrnAssetMovmentEventIdPutApiArg = {
  id: number;
  trnAssetMovmentUpdate: TrnAssetMovmentUpdate;
};
export type DeleteTrnAssetMovmentTrnAssetMovmentEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetMovmentTrnAssetMovmentEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetMovmentTrnAssetMovmentEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetMovmentTrnAssetMovmentEventIdGetApiArg = {
  id: number;
};
export type CreateTrnAssetOwnershipTrnAssetOwnershipPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetOwnershipTrnAssetOwnershipPostApiArg = {
  'x-tenant-id': string;
  trnAssetOwnershipInsert: TrnAssetOwnershipInsert;
};
export type GetAllTrnAssetOwnershipsTrnAssetOwnershipGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetOwnershipsTrnAssetOwnershipGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnAssetOwnershipTrnAssetOwnershipIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetOwnershipTrnAssetOwnershipIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnAssetOwnershipUpdate: TrnAssetOwnershipUpdate;
};
export type DeleteTrnAssetOwnershipTrnAssetOwnershipIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetOwnershipTrnAssetOwnershipIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnAssetOwnershipTrnAssetOwnershipIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetOwnershipTrnAssetOwnershipIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnAssetOwnershipEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetOwnershipEventGetApiArg = void;
export type CreateTrnAssetOwnershipTrnAssetOwnershipEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetOwnershipTrnAssetOwnershipEventPostApiArg = {
  trnAssetOwnershipInsert: TrnAssetOwnershipInsert;
};
export type UpdateTrnAssetOwnershipTrnAssetOwnershipEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetOwnershipTrnAssetOwnershipEventIdPutApiArg = {
  id: number;
  trnAssetOwnershipUpdate: TrnAssetOwnershipUpdate;
};
export type DeleteTrnAssetOwnershipTrnAssetOwnershipEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetOwnershipTrnAssetOwnershipEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetOwnershipTrnAssetOwnershipEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetOwnershipTrnAssetOwnershipEventIdGetApiArg = {
  id: number;
};
export type CreateTrnAssetRosterTrnAssetRosterPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetRosterTrnAssetRosterPostApiArg = {
  'x-tenant-id': string;
  trnAssetRosterInsert: TrnAssetRosterInsert;
};
export type GetAllTrnAssetRostersTrnAssetRosterGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetRostersTrnAssetRosterGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnAssetRosterTrnAssetRosterIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetRosterTrnAssetRosterIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnAssetRosterUpdate: TrnAssetRosterUpdate;
};
export type DeleteTrnAssetRosterTrnAssetRosterIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetRosterTrnAssetRosterIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnAssetRosterTrnAssetRosterIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetRosterTrnAssetRosterIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnAssetRosterEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetRosterEventGetApiArg = void;
export type CreateTrnAssetRosterTrnAssetRosterEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetRosterTrnAssetRosterEventPostApiArg = {
  trnAssetRosterInsert: TrnAssetRosterInsert;
};
export type UpdateTrnAssetRosterTrnAssetRosterEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetRosterTrnAssetRosterEventIdPutApiArg = {
  id: number;
  trnAssetRosterUpdate: TrnAssetRosterUpdate;
};
export type DeleteTrnAssetRosterTrnAssetRosterEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetRosterTrnAssetRosterEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetRosterTrnAssetRosterEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetRosterTrnAssetRosterEventIdGetApiArg = {
  id: number;
};
export type CreateTrnAssetSiteLinkingTrnAssetSiteLinkingPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetSiteLinkingTrnAssetSiteLinkingPostApiArg = {
  'x-tenant-id': string;
  trnAssetSiteLinkingInsert: TrnAssetSiteLinkingInsert;
};
export type GetAllTrnAssetSiteLinkingsTrnAssetSiteLinkingGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetSiteLinkingsTrnAssetSiteLinkingGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnAssetSiteLinkingTrnAssetSiteLinkingIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetSiteLinkingTrnAssetSiteLinkingIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnAssetSiteLinkingUpdate: TrnAssetSiteLinkingUpdate;
};
export type DeleteTrnAssetSiteLinkingTrnAssetSiteLinkingIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetSiteLinkingTrnAssetSiteLinkingIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnAssetSiteLinkingTrnAssetSiteLinkingIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetSiteLinkingTrnAssetSiteLinkingIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnAssetSiteLinkingEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetSiteLinkingEventGetApiArg = void;
export type CreateTrnAssetSiteLinkingTrnAssetSiteLinkingEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetSiteLinkingTrnAssetSiteLinkingEventPostApiArg = {
  trnAssetSiteLinkingInsert: TrnAssetSiteLinkingInsert;
};
export type UpdateTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdPutApiArg = {
  id: number;
  trnAssetSiteLinkingUpdate: TrnAssetSiteLinkingUpdate;
};
export type DeleteTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdGetApiArg = {
  id: number;
};
export type CreateTrnCounterlogTrnCounterlogPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnCounterlogTrnCounterlogPostApiArg = {
  'x-tenant-id': string;
  trnCounterlogInsert: TrnCounterlogInsert;
};
export type GetAllTrnCounterlogsTrnCounterlogGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnCounterlogsTrnCounterlogGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnCounterlogTrnCounterlogIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnCounterlogTrnCounterlogIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnCounterlogUpdate: TrnCounterlogUpdate;
};
export type DeleteTrnCounterlogTrnCounterlogIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnCounterlogTrnCounterlogIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnCounterlogTrnCounterlogIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnCounterlogTrnCounterlogIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnCounterlogEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnCounterlogEventGetApiArg = void;
export type CreateTrnCounterlogTrnCounterlogEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnCounterlogTrnCounterlogEventPostApiArg = {
  trnCounterlogInsert: TrnCounterlogInsert;
};
export type UpdateTrnCounterlogTrnCounterlogEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnCounterlogTrnCounterlogEventIdPutApiArg = {
  id: number;
  trnCounterlogUpdate: TrnCounterlogUpdate;
};
export type DeleteTrnCounterlogTrnCounterlogEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnCounterlogTrnCounterlogEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnCounterlogTrnCounterlogEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnCounterlogTrnCounterlogEventIdGetApiArg = {
  id: number;
};
export type CreateTrnDowntimeTrnDowntimePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnDowntimeTrnDowntimePostApiArg = {
  'x-tenant-id': string;
  trnDowntimeInsert: TrnDowntimeInsert;
};
export type GetAllTrnDowntimesTrnDowntimeGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnDowntimesTrnDowntimeGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnDowntimeTrnDowntimeIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnDowntimeTrnDowntimeIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnDowntimeUpdate: TrnDowntimeUpdate;
};
export type DeleteTrnDowntimeTrnDowntimeIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnDowntimeTrnDowntimeIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnDowntimeTrnDowntimeIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnDowntimeTrnDowntimeIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnDowntimeEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnDowntimeEventGetApiArg = void;
export type CreateTrnDowntimeTrnDowntimeEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnDowntimeTrnDowntimeEventPostApiArg = {
  trnDowntimeInsert: TrnDowntimeInsert;
};
export type UpdateTrnDowntimeTrnDowntimeEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnDowntimeTrnDowntimeEventIdPutApiArg = {
  id: number;
  trnDowntimeUpdate: TrnDowntimeUpdate;
};
export type DeleteTrnDowntimeTrnDowntimeEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnDowntimeTrnDowntimeEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnDowntimeTrnDowntimeEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnDowntimeTrnDowntimeEventIdGetApiArg = {
  id: number;
};
export type CreateTrnEngagementTrnEngagementPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnEngagementTrnEngagementPostApiArg = {
  'x-tenant-id': string;
  trnEngagementInsert: TrnEngagementInsert;
};
export type GetAllTrnEngagementsTrnEngagementGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnEngagementsTrnEngagementGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnEngagementTrnEngagementIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnEngagementTrnEngagementIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnEngagementUpdate: TrnEngagementUpdate;
};
export type DeleteTrnEngagementTrnEngagementIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnEngagementTrnEngagementIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnEngagementTrnEngagementIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnEngagementTrnEngagementIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnEngagementEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnEngagementEventGetApiArg = void;
export type CreateTrnEngagementTrnEngagementEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnEngagementTrnEngagementEventPostApiArg = {
  trnEngagementInsert: TrnEngagementInsert;
};
export type UpdateTrnEngagementTrnEngagementEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnEngagementTrnEngagementEventIdPutApiArg = {
  id: number;
  trnEngagementUpdate: TrnEngagementUpdate;
};
export type DeleteTrnEngagementTrnEngagementEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnEngagementTrnEngagementEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnEngagementTrnEngagementEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnEngagementTrnEngagementEventIdGetApiArg = {
  id: number;
};
export type CreateTrnEntityWorkflowTrnEntityWorkflowPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnEntityWorkflowTrnEntityWorkflowPostApiArg = {
  'x-tenant-id': string;
  trnEntityWorkflowInsert: TrnEntityWorkflowInsert;
};
export type GetAllTrnEntityWorkflowsTrnEntityWorkflowGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnEntityWorkflowsTrnEntityWorkflowGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnEntityWorkflowTrnEntityWorkflowIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnEntityWorkflowTrnEntityWorkflowIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnEntityWorkflowUpdate: TrnEntityWorkflowUpdate;
};
export type DeleteTrnEntityWorkflowTrnEntityWorkflowIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnEntityWorkflowTrnEntityWorkflowIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnEntityWorkflowTrnEntityWorkflowIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnEntityWorkflowTrnEntityWorkflowIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnEntityWorkflowEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnEntityWorkflowEventGetApiArg = void;
export type CreateTrnEntityWorkflowTrnEntityWorkflowEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnEntityWorkflowTrnEntityWorkflowEventPostApiArg = {
  trnEntityWorkflowInsert: TrnEntityWorkflowInsert;
};
export type UpdateTrnEntityWorkflowTrnEntityWorkflowEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnEntityWorkflowTrnEntityWorkflowEventIdPutApiArg = {
  id: number;
  trnEntityWorkflowUpdate: TrnEntityWorkflowUpdate;
};
export type DeleteTrnEntityWorkflowTrnEntityWorkflowEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnEntityWorkflowTrnEntityWorkflowEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnEntityWorkflowTrnEntityWorkflowEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnEntityWorkflowTrnEntityWorkflowEventIdGetApiArg = {
  id: number;
};
export type CreateTrnFsFuelIssueTrnFsFuelIssuePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFsFuelIssueTrnFsFuelIssuePostApiArg = {
  'x-tenant-id': string;
  trnFsFuelIssueInsert: TrnFsFuelIssueInsert;
};
export type GetAllTrnFsFuelIssuesTrnFsFuelIssueGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnFsFuelIssuesTrnFsFuelIssueGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnFsFuelIssueTrnFsFuelIssueIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFsFuelIssueTrnFsFuelIssueIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnFsFuelIssueUpdate: TrnFsFuelIssueUpdate;
};
export type DeleteTrnFsFuelIssueTrnFsFuelIssueIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFsFuelIssueTrnFsFuelIssueIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnFsFuelIssueTrnFsFuelIssueIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFsFuelIssueTrnFsFuelIssueIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnFsFuelIssueEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnFsFuelIssueEventGetApiArg = void;
export type CreateTrnFsFuelIssueTrnFsFuelIssueEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFsFuelIssueTrnFsFuelIssueEventPostApiArg = {
  trnFsFuelIssueInsert: TrnFsFuelIssueInsert;
};
export type UpdateTrnFsFuelIssueTrnFsFuelIssueEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFsFuelIssueTrnFsFuelIssueEventIdPutApiArg = {
  id: number;
  trnFsFuelIssueUpdate: TrnFsFuelIssueUpdate;
};
export type DeleteTrnFsFuelIssueTrnFsFuelIssueEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFsFuelIssueTrnFsFuelIssueEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnFsFuelIssueTrnFsFuelIssueEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFsFuelIssueTrnFsFuelIssueEventIdGetApiArg = {
  id: number;
};
export type CreateTrnFsFuelReceiveTrnFsFuelReceivePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFsFuelReceiveTrnFsFuelReceivePostApiArg = {
  'x-tenant-id': string;
  trnFsFuelReceiveInsert: TrnFsFuelReceiveInsert;
};
export type GetAllTrnFsFuelReceivesTrnFsFuelReceiveGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnFsFuelReceivesTrnFsFuelReceiveGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnFsFuelReceiveTrnFsFuelReceiveIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFsFuelReceiveTrnFsFuelReceiveIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnFsFuelReceiveUpdate: TrnFsFuelReceiveUpdate;
};
export type DeleteTrnFsFuelReceiveTrnFsFuelReceiveIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFsFuelReceiveTrnFsFuelReceiveIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnFsFuelReceiveTrnFsFuelReceiveIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFsFuelReceiveTrnFsFuelReceiveIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnFsFuelReceiveEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnFsFuelReceiveEventGetApiArg = void;
export type CreateTrnFsFuelReceiveTrnFsFuelReceiveEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFsFuelReceiveTrnFsFuelReceiveEventPostApiArg = {
  trnFsFuelReceiveInsert: TrnFsFuelReceiveInsert;
};
export type UpdateTrnFsFuelReceiveTrnFsFuelReceiveEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFsFuelReceiveTrnFsFuelReceiveEventIdPutApiArg = {
  id: number;
  trnFsFuelReceiveUpdate: TrnFsFuelReceiveUpdate;
};
export type DeleteTrnFsFuelReceiveTrnFsFuelReceiveEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFsFuelReceiveTrnFsFuelReceiveEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnFsFuelReceiveTrnFsFuelReceiveEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFsFuelReceiveTrnFsFuelReceiveEventIdGetApiArg = {
  id: number;
};
export type CreateTrnFsFuelTransferTrnFsFuelTransferPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFsFuelTransferTrnFsFuelTransferPostApiArg = {
  'x-tenant-id': string;
  trnFsFuelTransferInsert: TrnFsFuelTransferInsert;
};
export type GetAllTrnFsFuelTransfersTrnFsFuelTransferGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnFsFuelTransfersTrnFsFuelTransferGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnFsFuelTransferTrnFsFuelTransferIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFsFuelTransferTrnFsFuelTransferIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnFsFuelTransferUpdate: TrnFsFuelTransferUpdate;
};
export type DeleteTrnFsFuelTransferTrnFsFuelTransferIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFsFuelTransferTrnFsFuelTransferIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnFsFuelTransferTrnFsFuelTransferIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFsFuelTransferTrnFsFuelTransferIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnFsFuelTransferEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnFsFuelTransferEventGetApiArg = void;
export type CreateTrnFsFuelTransferTrnFsFuelTransferEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFsFuelTransferTrnFsFuelTransferEventPostApiArg = {
  trnFsFuelTransferInsert: TrnFsFuelTransferInsert;
};
export type UpdateTrnFsFuelTransferTrnFsFuelTransferEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFsFuelTransferTrnFsFuelTransferEventIdPutApiArg = {
  id: number;
  trnFsFuelTransferUpdate: TrnFsFuelTransferUpdate;
};
export type DeleteTrnFsFuelTransferTrnFsFuelTransferEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFsFuelTransferTrnFsFuelTransferEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnFsFuelTransferTrnFsFuelTransferEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFsFuelTransferTrnFsFuelTransferEventIdGetApiArg = {
  id: number;
};
export type CreateTrnFuelFeedinTrnFuelFeedinPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFuelFeedinTrnFuelFeedinPostApiArg = {
  'x-tenant-id': string;
  trnFuelFeedinInsert: TrnFuelFeedinInsert;
};
export type GetAllTrnFuelFeedinsTrnFuelFeedinGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnFuelFeedinsTrnFuelFeedinGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnFuelFeedinTrnFuelFeedinIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFuelFeedinTrnFuelFeedinIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnFuelFeedinUpdate: TrnFuelFeedinUpdate;
};
export type DeleteTrnFuelFeedinTrnFuelFeedinIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFuelFeedinTrnFuelFeedinIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnFuelFeedinTrnFuelFeedinIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFuelFeedinTrnFuelFeedinIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnFuelFeedinEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnFuelFeedinEventGetApiArg = void;
export type CreateTrnFuelFeedinTrnFuelFeedinEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFuelFeedinTrnFuelFeedinEventPostApiArg = {
  trnFuelFeedinInsert: TrnFuelFeedinInsert;
};
export type UpdateTrnFuelFeedinTrnFuelFeedinEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFuelFeedinTrnFuelFeedinEventIdPutApiArg = {
  id: number;
  trnFuelFeedinUpdate: TrnFuelFeedinUpdate;
};
export type DeleteTrnFuelFeedinTrnFuelFeedinEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFuelFeedinTrnFuelFeedinEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnFuelFeedinTrnFuelFeedinEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFuelFeedinTrnFuelFeedinEventIdGetApiArg = {
  id: number;
};
export type CreateTrnHrEmployeeTrnHrEmployeePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnHrEmployeeTrnHrEmployeePostApiArg = {
  'x-tenant-id': string;
  trnHrEmployeeInsert: TrnHrEmployeeInsert;
};
export type GetAllTrnHrEmployeesTrnHrEmployeeGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnHrEmployeesTrnHrEmployeeGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnHrEmployeeTrnHrEmployeeIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnHrEmployeeTrnHrEmployeeIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnHrEmployeeUpdate: TrnHrEmployeeUpdate;
};
export type DeleteTrnHrEmployeeTrnHrEmployeeIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnHrEmployeeTrnHrEmployeeIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnHrEmployeeTrnHrEmployeeIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnHrEmployeeTrnHrEmployeeIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnHrEmployeeEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnHrEmployeeEventGetApiArg = void;
export type CreateTrnHrEmployeeTrnHrEmployeeEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnHrEmployeeTrnHrEmployeeEventPostApiArg = {
  trnHrEmployeeInsert: TrnHrEmployeeInsert;
};
export type UpdateTrnHrEmployeeTrnHrEmployeeEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnHrEmployeeTrnHrEmployeeEventIdPutApiArg = {
  id: number;
  trnHrEmployeeUpdate: TrnHrEmployeeUpdate;
};
export type DeleteTrnHrEmployeeTrnHrEmployeeEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnHrEmployeeTrnHrEmployeeEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnHrEmployeeTrnHrEmployeeEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnHrEmployeeTrnHrEmployeeEventIdGetApiArg = {
  id: number;
};
export type CreateTrnHrEmployeeAssetTrnHrEmployeeAssetPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnHrEmployeeAssetTrnHrEmployeeAssetPostApiArg = {
  'x-tenant-id': string;
  trnHrEmployeeAssetInsert: TrnHrEmployeeAssetInsert;
};
export type GetAllTrnHrEmployeeAssetsTrnHrEmployeeAssetGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnHrEmployeeAssetsTrnHrEmployeeAssetGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnHrEmployeeAssetUpdate: TrnHrEmployeeAssetUpdate;
};
export type DeleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnHrEmployeeAssetTrnHrEmployeeAssetIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnHrEmployeeAssetTrnHrEmployeeAssetIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnHrEmployeeAssetEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnHrEmployeeAssetEventGetApiArg = void;
export type CreateTrnHrEmployeeAssetTrnHrEmployeeAssetEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnHrEmployeeAssetTrnHrEmployeeAssetEventPostApiArg = {
  trnHrEmployeeAssetInsert: TrnHrEmployeeAssetInsert;
};
export type UpdateTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdPutApiArg = {
  id: number;
  trnHrEmployeeAssetUpdate: TrnHrEmployeeAssetUpdate;
};
export type DeleteTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvAllocationTrnInvAllocationPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvAllocationTrnInvAllocationPostApiArg = {
  'x-tenant-id': string;
  trnInvAllocationInsert: TrnInvAllocationInsert;
};
export type GetAllTrnInvAllocationsTrnInvAllocationGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvAllocationsTrnInvAllocationGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvAllocationTrnInvAllocationIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvAllocationTrnInvAllocationIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvAllocationUpdate: TrnInvAllocationUpdate;
};
export type DeleteTrnInvAllocationTrnInvAllocationIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvAllocationTrnInvAllocationIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvAllocationTrnInvAllocationIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvAllocationTrnInvAllocationIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvAllocationEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvAllocationEventGetApiArg = void;
export type CreateTrnInvAllocationTrnInvAllocationEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvAllocationTrnInvAllocationEventPostApiArg = {
  trnInvAllocationInsert: TrnInvAllocationInsert;
};
export type UpdateTrnInvAllocationTrnInvAllocationEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvAllocationTrnInvAllocationEventIdPutApiArg = {
  id: number;
  trnInvAllocationUpdate: TrnInvAllocationUpdate;
};
export type DeleteTrnInvAllocationTrnInvAllocationEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvAllocationTrnInvAllocationEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvAllocationTrnInvAllocationEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvAllocationTrnInvAllocationEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvConsumptionTrnInvConsumptionPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvConsumptionTrnInvConsumptionPostApiArg = {
  'x-tenant-id': string;
  trnInvConsumptionInsert: TrnInvConsumptionInsert;
};
export type GetAllTrnInvConsumptionsTrnInvConsumptionGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvConsumptionsTrnInvConsumptionGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvConsumptionTrnInvConsumptionIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvConsumptionTrnInvConsumptionIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvConsumptionUpdate: TrnInvConsumptionUpdate;
};
export type DeleteTrnInvConsumptionTrnInvConsumptionIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvConsumptionTrnInvConsumptionIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvConsumptionTrnInvConsumptionIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvConsumptionTrnInvConsumptionIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvConsumptionEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvConsumptionEventGetApiArg = void;
export type CreateTrnInvConsumptionTrnInvConsumptionEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvConsumptionTrnInvConsumptionEventPostApiArg = {
  trnInvConsumptionInsert: TrnInvConsumptionInsert;
};
export type UpdateTrnInvConsumptionTrnInvConsumptionEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvConsumptionTrnInvConsumptionEventIdPutApiArg = {
  id: number;
  trnInvConsumptionUpdate: TrnInvConsumptionUpdate;
};
export type DeleteTrnInvConsumptionTrnInvConsumptionEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvConsumptionTrnInvConsumptionEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvConsumptionTrnInvConsumptionEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvConsumptionTrnInvConsumptionEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvConsumptionItemsTrnInvConsumptionItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvConsumptionItemsTrnInvConsumptionItemsPostApiArg = {
  'x-tenant-id': string;
  trnInvConsumptionItemsInsert: TrnInvConsumptionItemsInsert;
};
export type GetAllTrnInvConsumptionItemssTrnInvConsumptionItemsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvConsumptionItemssTrnInvConsumptionItemsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvConsumptionItemsTrnInvConsumptionItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvConsumptionItemsTrnInvConsumptionItemsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvConsumptionItemsUpdate: TrnInvConsumptionItemsUpdate;
};
export type DeleteTrnInvConsumptionItemsTrnInvConsumptionItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvConsumptionItemsTrnInvConsumptionItemsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvConsumptionItemsTrnInvConsumptionItemsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvConsumptionItemsTrnInvConsumptionItemsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvConsumptionItemsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvConsumptionItemsEventGetApiArg = void;
export type CreateTrnInvConsumptionItemsTrnInvConsumptionItemsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvConsumptionItemsTrnInvConsumptionItemsEventPostApiArg =
  {
    trnInvConsumptionItemsInsert: TrnInvConsumptionItemsInsert;
  };
export type UpdateTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdPutApiArg =
  {
    id: number;
    trnInvConsumptionItemsUpdate: TrnInvConsumptionItemsUpdate;
  };
export type DeleteTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvItemTrnInvItemPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemTrnInvItemPostApiArg = {
  'x-tenant-id': string;
  trnInvItemInsert: TrnInvItemInsert;
};
export type GetAllTrnInvItemsTrnInvItemGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemsTrnInvItemGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvItemTrnInvItemIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemTrnInvItemIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvItemUpdate: TrnInvItemUpdate;
};
export type DeleteTrnInvItemTrnInvItemIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemTrnInvItemIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvItemTrnInvItemIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemTrnInvItemIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvItemEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemEventGetApiArg = void;
export type CreateTrnInvItemTrnInvItemEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemTrnInvItemEventPostApiArg = {
  trnInvItemInsert: TrnInvItemInsert;
};
export type UpdateTrnInvItemTrnInvItemEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemTrnInvItemEventIdPutApiArg = {
  id: number;
  trnInvItemUpdate: TrnInvItemUpdate;
};
export type DeleteTrnInvItemTrnInvItemEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemTrnInvItemEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvItemTrnInvItemEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemTrnInvItemEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvItemAdjustmentTrnInvItemAdjustmentPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemAdjustmentTrnInvItemAdjustmentPostApiArg = {
  'x-tenant-id': string;
  trnInvItemAdjustmentInsert: TrnInvItemAdjustmentInsert;
};
export type GetAllTrnInvItemAdjustmentsTrnInvItemAdjustmentGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemAdjustmentsTrnInvItemAdjustmentGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvItemAdjustmentUpdate: TrnInvItemAdjustmentUpdate;
};
export type DeleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvItemAdjustmentTrnInvItemAdjustmentIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemAdjustmentTrnInvItemAdjustmentIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvItemAdjustmentEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemAdjustmentEventGetApiArg = void;
export type CreateTrnInvItemAdjustmentTrnInvItemAdjustmentEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemAdjustmentTrnInvItemAdjustmentEventPostApiArg = {
  trnInvItemAdjustmentInsert: TrnInvItemAdjustmentInsert;
};
export type UpdateTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdPutApiArg = {
  id: number;
  trnInvItemAdjustmentUpdate: TrnInvItemAdjustmentUpdate;
};
export type DeleteTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlPostApiArg = {
  'x-tenant-id': string;
  trnInvItemAdjustmentDtlInsert: TrnInvItemAdjustmentDtlInsert;
};
export type GetAllTrnInvItemAdjustmentDtlsTrnInvItemAdjustmentDtlGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemAdjustmentDtlsTrnInvItemAdjustmentDtlGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvItemAdjustmentDtlUpdate: TrnInvItemAdjustmentDtlUpdate;
};
export type DeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdDeleteApiArg =
  {
    id: number;
    'x-tenant-id': string;
  };
export type GetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvItemAdjustmentDtlEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemAdjustmentDtlEventGetApiArg = void;
export type CreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventPostApiArg =
  {
    trnInvItemAdjustmentDtlInsert: TrnInvItemAdjustmentDtlInsert;
  };
export type UpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdPutApiArg =
  {
    id: number;
    trnInvItemAdjustmentDtlUpdate: TrnInvItemAdjustmentDtlUpdate;
  };
export type DeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdGetApiArg =
  {
    id: number;
  };
export type CreateTrnInvItemAllocationTrnInvItemAllocationPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemAllocationTrnInvItemAllocationPostApiArg = {
  'x-tenant-id': string;
  trnInvItemAllocationInsert: TrnInvItemAllocationInsert;
};
export type GetAllTrnInvItemAllocationsTrnInvItemAllocationGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemAllocationsTrnInvItemAllocationGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvItemAllocationTrnInvItemAllocationIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemAllocationTrnInvItemAllocationIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvItemAllocationUpdate: TrnInvItemAllocationUpdate;
};
export type DeleteTrnInvItemAllocationTrnInvItemAllocationIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemAllocationTrnInvItemAllocationIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvItemAllocationTrnInvItemAllocationIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemAllocationTrnInvItemAllocationIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvItemAllocationEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemAllocationEventGetApiArg = void;
export type CreateTrnInvItemAllocationTrnInvItemAllocationEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemAllocationTrnInvItemAllocationEventPostApiArg = {
  trnInvItemAllocationInsert: TrnInvItemAllocationInsert;
};
export type UpdateTrnInvItemAllocationTrnInvItemAllocationEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemAllocationTrnInvItemAllocationEventIdPutApiArg = {
  id: number;
  trnInvItemAllocationUpdate: TrnInvItemAllocationUpdate;
};
export type DeleteTrnInvItemAllocationTrnInvItemAllocationEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemAllocationTrnInvItemAllocationEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemAllocationTrnInvItemAllocationEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemAllocationTrnInvItemAllocationEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvItemDemandTrnInvItemDemandPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemDemandTrnInvItemDemandPostApiArg = {
  'x-tenant-id': string;
  trnInvItemDemandInsert: TrnInvItemDemandInsert;
};
export type GetAllTrnInvItemDemandsTrnInvItemDemandGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemDemandsTrnInvItemDemandGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvItemDemandTrnInvItemDemandIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemDemandTrnInvItemDemandIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvItemDemandUpdate: TrnInvItemDemandUpdate;
};
export type DeleteTrnInvItemDemandTrnInvItemDemandIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemDemandTrnInvItemDemandIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvItemDemandTrnInvItemDemandIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemDemandTrnInvItemDemandIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvItemDemandEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemDemandEventGetApiArg = void;
export type CreateTrnInvItemDemandTrnInvItemDemandEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemDemandTrnInvItemDemandEventPostApiArg = {
  trnInvItemDemandInsert: TrnInvItemDemandInsert;
};
export type UpdateTrnInvItemDemandTrnInvItemDemandEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemDemandTrnInvItemDemandEventIdPutApiArg = {
  id: number;
  trnInvItemDemandUpdate: TrnInvItemDemandUpdate;
};
export type DeleteTrnInvItemDemandTrnInvItemDemandEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemDemandTrnInvItemDemandEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvItemDemandTrnInvItemDemandEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemDemandTrnInvItemDemandEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvItemDemandItemsTrnInvItemDemandItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemDemandItemsTrnInvItemDemandItemsPostApiArg = {
  'x-tenant-id': string;
  trnInvItemDemandItemsInsert: TrnInvItemDemandItemsInsert;
};
export type GetAllTrnInvItemDemandItemssTrnInvItemDemandItemsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemDemandItemssTrnInvItemDemandItemsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvItemDemandItemsTrnInvItemDemandItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemDemandItemsTrnInvItemDemandItemsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvItemDemandItemsUpdate: TrnInvItemDemandItemsUpdate;
};
export type DeleteTrnInvItemDemandItemsTrnInvItemDemandItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemDemandItemsTrnInvItemDemandItemsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvItemDemandItemsTrnInvItemDemandItemsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemDemandItemsTrnInvItemDemandItemsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvItemDemandItemsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemDemandItemsEventGetApiArg = void;
export type CreateTrnInvItemDemandItemsTrnInvItemDemandItemsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemDemandItemsTrnInvItemDemandItemsEventPostApiArg = {
  trnInvItemDemandItemsInsert: TrnInvItemDemandItemsInsert;
};
export type UpdateTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdPutApiArg = {
  id: number;
  trnInvItemDemandItemsUpdate: TrnInvItemDemandItemsUpdate;
};
export type DeleteTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvItemTransferTrnInvItemTransferPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemTransferTrnInvItemTransferPostApiArg = {
  'x-tenant-id': string;
  trnInvItemTransferInsert: TrnInvItemTransferInsert;
};
export type GetAllTrnInvItemTransfersTrnInvItemTransferGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemTransfersTrnInvItemTransferGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvItemTransferTrnInvItemTransferIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemTransferTrnInvItemTransferIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvItemTransferUpdate: TrnInvItemTransferUpdate;
};
export type DeleteTrnInvItemTransferTrnInvItemTransferIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemTransferTrnInvItemTransferIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvItemTransferTrnInvItemTransferIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemTransferTrnInvItemTransferIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvItemTransferEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemTransferEventGetApiArg = void;
export type CreateTrnInvItemTransferTrnInvItemTransferEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemTransferTrnInvItemTransferEventPostApiArg = {
  trnInvItemTransferInsert: TrnInvItemTransferInsert;
};
export type UpdateTrnInvItemTransferTrnInvItemTransferEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemTransferTrnInvItemTransferEventIdPutApiArg = {
  id: number;
  trnInvItemTransferUpdate: TrnInvItemTransferUpdate;
};
export type DeleteTrnInvItemTransferTrnInvItemTransferEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemTransferTrnInvItemTransferEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvItemTransferTrnInvItemTransferEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemTransferTrnInvItemTransferEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvItemTransferDtlTrnInvItemTransferDtlPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemTransferDtlTrnInvItemTransferDtlPostApiArg = {
  'x-tenant-id': string;
  trnInvItemTransferDtlInsert: TrnInvItemTransferDtlInsert;
};
export type GetAllTrnInvItemTransferDtlsTrnInvItemTransferDtlGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemTransferDtlsTrnInvItemTransferDtlGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvItemTransferDtlTrnInvItemTransferDtlIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemTransferDtlTrnInvItemTransferDtlIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvItemTransferDtlUpdate: TrnInvItemTransferDtlUpdate;
};
export type DeleteTrnInvItemTransferDtlTrnInvItemTransferDtlIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemTransferDtlTrnInvItemTransferDtlIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvItemTransferDtlTrnInvItemTransferDtlIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemTransferDtlTrnInvItemTransferDtlIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvItemTransferDtlEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemTransferDtlEventGetApiArg = void;
export type CreateTrnInvItemTransferDtlTrnInvItemTransferDtlEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemTransferDtlTrnInvItemTransferDtlEventPostApiArg = {
  trnInvItemTransferDtlInsert: TrnInvItemTransferDtlInsert;
};
export type UpdateTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdPutApiArg = {
  id: number;
  trnInvItemTransferDtlUpdate: TrnInvItemTransferDtlUpdate;
};
export type DeleteTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvLogisticsTrnInvLogisticsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvLogisticsTrnInvLogisticsPostApiArg = {
  'x-tenant-id': string;
  trnInvLogisticsInsert: TrnInvLogisticsInsert;
};
export type GetAllTrnInvLogisticssTrnInvLogisticsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvLogisticssTrnInvLogisticsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvLogisticsTrnInvLogisticsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvLogisticsTrnInvLogisticsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvLogisticsUpdate: TrnInvLogisticsUpdate;
};
export type DeleteTrnInvLogisticsTrnInvLogisticsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvLogisticsTrnInvLogisticsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvLogisticsTrnInvLogisticsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvLogisticsTrnInvLogisticsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvLogisticsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvLogisticsEventGetApiArg = void;
export type CreateTrnInvLogisticsTrnInvLogisticsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvLogisticsTrnInvLogisticsEventPostApiArg = {
  trnInvLogisticsInsert: TrnInvLogisticsInsert;
};
export type UpdateTrnInvLogisticsTrnInvLogisticsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvLogisticsTrnInvLogisticsEventIdPutApiArg = {
  id: number;
  trnInvLogisticsUpdate: TrnInvLogisticsUpdate;
};
export type DeleteTrnInvLogisticsTrnInvLogisticsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvLogisticsTrnInvLogisticsEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvLogisticsTrnInvLogisticsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvLogisticsTrnInvLogisticsEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvLogisticsDtlTrnInvLogisticsDtlPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvLogisticsDtlTrnInvLogisticsDtlPostApiArg = {
  'x-tenant-id': string;
  trnInvLogisticsDtlInsert: TrnInvLogisticsDtlInsert;
};
export type GetAllTrnInvLogisticsDtlsTrnInvLogisticsDtlGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvLogisticsDtlsTrnInvLogisticsDtlGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvLogisticsDtlUpdate: TrnInvLogisticsDtlUpdate;
};
export type DeleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvLogisticsDtlTrnInvLogisticsDtlIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvLogisticsDtlTrnInvLogisticsDtlIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvLogisticsDtlEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvLogisticsDtlEventGetApiArg = void;
export type CreateTrnInvLogisticsDtlTrnInvLogisticsDtlEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvLogisticsDtlTrnInvLogisticsDtlEventPostApiArg = {
  trnInvLogisticsDtlInsert: TrnInvLogisticsDtlInsert;
};
export type UpdateTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdPutApiArg = {
  id: number;
  trnInvLogisticsDtlUpdate: TrnInvLogisticsDtlUpdate;
};
export type DeleteTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvPurchaseTrnInvPurchasePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseTrnInvPurchasePostApiArg = {
  'x-tenant-id': string;
  trnInvPurchaseInsert: TrnInvPurchaseInsert;
};
export type GetAllTrnInvPurchasesTrnInvPurchaseGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvPurchasesTrnInvPurchaseGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvPurchaseTrnInvPurchaseIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseTrnInvPurchaseIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvPurchaseUpdate: TrnInvPurchaseUpdate;
};
export type DeleteTrnInvPurchaseTrnInvPurchaseIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseTrnInvPurchaseIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvPurchaseTrnInvPurchaseIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseTrnInvPurchaseIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvPurchaseEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvPurchaseEventGetApiArg = void;
export type CreateTrnInvPurchaseTrnInvPurchaseEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseTrnInvPurchaseEventPostApiArg = {
  trnInvPurchaseInsert: TrnInvPurchaseInsert;
};
export type UpdateTrnInvPurchaseTrnInvPurchaseEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseTrnInvPurchaseEventIdPutApiArg = {
  id: number;
  trnInvPurchaseUpdate: TrnInvPurchaseUpdate;
};
export type DeleteTrnInvPurchaseTrnInvPurchaseEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseTrnInvPurchaseEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvPurchaseTrnInvPurchaseEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseTrnInvPurchaseEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentPostApiArg = {
  'x-tenant-id': string;
  trnInvPurchaseDocumentInsert: TrnInvPurchaseDocumentInsert;
};
export type GetAllTrnInvPurchaseDocumentsTrnInvPurchaseDocumentGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvPurchaseDocumentsTrnInvPurchaseDocumentGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvPurchaseDocumentUpdate: TrnInvPurchaseDocumentUpdate;
};
export type DeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvPurchaseDocumentEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvPurchaseDocumentEventGetApiArg = void;
export type CreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventPostApiArg =
  {
    trnInvPurchaseDocumentInsert: TrnInvPurchaseDocumentInsert;
  };
export type UpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdPutApiArg =
  {
    id: number;
    trnInvPurchaseDocumentUpdate: TrnInvPurchaseDocumentUpdate;
  };
export type DeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvPurchaseItemsTrnInvPurchaseItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseItemsTrnInvPurchaseItemsPostApiArg = {
  'x-tenant-id': string;
  trnInvPurchaseItemsInsert: TrnInvPurchaseItemsInsert;
};
export type GetAllTrnInvPurchaseItemssTrnInvPurchaseItemsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvPurchaseItemssTrnInvPurchaseItemsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvPurchaseItemsTrnInvPurchaseItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseItemsTrnInvPurchaseItemsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvPurchaseItemsUpdate: TrnInvPurchaseItemsUpdate;
};
export type DeleteTrnInvPurchaseItemsTrnInvPurchaseItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseItemsTrnInvPurchaseItemsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvPurchaseItemsTrnInvPurchaseItemsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseItemsTrnInvPurchaseItemsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvPurchaseItemsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvPurchaseItemsEventGetApiArg = void;
export type CreateTrnInvPurchaseItemsTrnInvPurchaseItemsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseItemsTrnInvPurchaseItemsEventPostApiArg = {
  trnInvPurchaseItemsInsert: TrnInvPurchaseItemsInsert;
};
export type UpdateTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdPutApiArg = {
  id: number;
  trnInvPurchaseItemsUpdate: TrnInvPurchaseItemsUpdate;
};
export type DeleteTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdGetApiArg = {
  id: number;
};
export type CreateTrnInvPurchaseReqTrnInvPurchaseReqPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseReqTrnInvPurchaseReqPostApiArg = {
  'x-tenant-id': string;
  trnInvPurchaseReqInsert: TrnInvPurchaseReqInsert;
};
export type GetAllTrnInvPurchaseReqsTrnInvPurchaseReqGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvPurchaseReqsTrnInvPurchaseReqGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnInvPurchaseReqTrnInvPurchaseReqIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseReqTrnInvPurchaseReqIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnInvPurchaseReqUpdate: TrnInvPurchaseReqUpdate;
};
export type DeleteTrnInvPurchaseReqTrnInvPurchaseReqIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseReqTrnInvPurchaseReqIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnInvPurchaseReqTrnInvPurchaseReqIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseReqTrnInvPurchaseReqIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnInvPurchaseReqEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvPurchaseReqEventGetApiArg = void;
export type CreateTrnInvPurchaseReqTrnInvPurchaseReqEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseReqTrnInvPurchaseReqEventPostApiArg = {
  trnInvPurchaseReqInsert: TrnInvPurchaseReqInsert;
};
export type UpdateTrnInvPurchaseReqTrnInvPurchaseReqEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseReqTrnInvPurchaseReqEventIdPutApiArg = {
  id: number;
  trnInvPurchaseReqUpdate: TrnInvPurchaseReqUpdate;
};
export type DeleteTrnInvPurchaseReqTrnInvPurchaseReqEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseReqTrnInvPurchaseReqEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvPurchaseReqTrnInvPurchaseReqEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseReqTrnInvPurchaseReqEventIdGetApiArg = {
  id: number;
};
export type CreateTrnProductivityTrnProductivityPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnProductivityTrnProductivityPostApiArg = {
  'x-tenant-id': string;
  trnProductivityInsert: TrnProductivityInsert;
};
export type GetAllTrnProductivitysTrnProductivityGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnProductivitysTrnProductivityGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnProductivityTrnProductivityIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnProductivityTrnProductivityIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnProductivityUpdate: TrnProductivityUpdate;
};
export type DeleteTrnProductivityTrnProductivityIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnProductivityTrnProductivityIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnProductivityTrnProductivityIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnProductivityTrnProductivityIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnProductivityEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnProductivityEventGetApiArg = void;
export type CreateTrnProductivityTrnProductivityEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnProductivityTrnProductivityEventPostApiArg = {
  trnProductivityInsert: TrnProductivityInsert;
};
export type UpdateTrnProductivityTrnProductivityEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnProductivityTrnProductivityEventIdPutApiArg = {
  id: number;
  trnProductivityUpdate: TrnProductivityUpdate;
};
export type DeleteTrnProductivityTrnProductivityEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnProductivityTrnProductivityEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnProductivityTrnProductivityEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnProductivityTrnProductivityEventIdGetApiArg = {
  id: number;
};
export type CreateTrnPurchaseOrderTrnPurchaseOrderPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseOrderTrnPurchaseOrderPostApiArg = {
  'x-tenant-id': string;
  trnPurchaseOrderInsert: TrnPurchaseOrderInsert;
};
export type GetAllTrnPurchaseOrdersTrnPurchaseOrderGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseOrdersTrnPurchaseOrderGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnPurchaseOrderTrnPurchaseOrderIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseOrderTrnPurchaseOrderIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnPurchaseOrderUpdate: TrnPurchaseOrderUpdate;
};
export type DeleteTrnPurchaseOrderTrnPurchaseOrderIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseOrderTrnPurchaseOrderIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnPurchaseOrderTrnPurchaseOrderIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseOrderTrnPurchaseOrderIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnPurchaseOrderEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseOrderEventGetApiArg = void;
export type CreateTrnPurchaseOrderTrnPurchaseOrderEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseOrderTrnPurchaseOrderEventPostApiArg = {
  trnPurchaseOrderInsert: TrnPurchaseOrderInsert;
};
export type UpdateTrnPurchaseOrderTrnPurchaseOrderEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseOrderTrnPurchaseOrderEventIdPutApiArg = {
  id: number;
  trnPurchaseOrderUpdate: TrnPurchaseOrderUpdate;
};
export type DeleteTrnPurchaseOrderTrnPurchaseOrderEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseOrderTrnPurchaseOrderEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnPurchaseOrderTrnPurchaseOrderEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseOrderTrnPurchaseOrderEventIdGetApiArg = {
  id: number;
};
export type CreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsPostApiArg = {
  'x-tenant-id': string;
  trnPurchaseOrderItemsInsert: TrnPurchaseOrderItemsInsert;
};
export type GetAllTrnPurchaseOrderItemssTrnPurchaseOrderItemsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseOrderItemssTrnPurchaseOrderItemsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnPurchaseOrderItemsUpdate: TrnPurchaseOrderItemsUpdate;
};
export type DeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnPurchaseOrderItemsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseOrderItemsEventGetApiArg = void;
export type CreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventPostApiArg = {
  trnPurchaseOrderItemsInsert: TrnPurchaseOrderItemsInsert;
};
export type UpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdPutApiArg = {
  id: number;
  trnPurchaseOrderItemsUpdate: TrnPurchaseOrderItemsUpdate;
};
export type DeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdGetApiArg = {
  id: number;
};
export type CreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsPostApiArg = {
  'x-tenant-id': string;
  trnPurchaseOrderTermsInsert: TrnPurchaseOrderTermsInsert;
};
export type GetAllTrnPurchaseOrderTermssTrnPurchaseOrderTermsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseOrderTermssTrnPurchaseOrderTermsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnPurchaseOrderTermsUpdate: TrnPurchaseOrderTermsUpdate;
};
export type DeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnPurchaseOrderTermsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseOrderTermsEventGetApiArg = void;
export type CreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventPostApiArg = {
  trnPurchaseOrderTermsInsert: TrnPurchaseOrderTermsInsert;
};
export type UpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdPutApiArg = {
  id: number;
  trnPurchaseOrderTermsUpdate: TrnPurchaseOrderTermsUpdate;
};
export type DeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdGetApiArg = {
  id: number;
};
export type CreateTrnPurchaseReqItemsTrnPurchaseReqItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseReqItemsTrnPurchaseReqItemsPostApiArg = {
  'x-tenant-id': string;
  trnPurchaseReqItemsInsert: TrnPurchaseReqItemsInsert;
};
export type GetAllTrnPurchaseReqItemssTrnPurchaseReqItemsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseReqItemssTrnPurchaseReqItemsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnPurchaseReqItemsUpdate: TrnPurchaseReqItemsUpdate;
};
export type DeleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnPurchaseReqItemsTrnPurchaseReqItemsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseReqItemsTrnPurchaseReqItemsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnPurchaseReqItemsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseReqItemsEventGetApiArg = void;
export type CreateTrnPurchaseReqItemsTrnPurchaseReqItemsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseReqItemsTrnPurchaseReqItemsEventPostApiArg = {
  trnPurchaseReqItemsInsert: TrnPurchaseReqItemsInsert;
};
export type UpdateTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdPutApiArg = {
  id: number;
  trnPurchaseReqItemsUpdate: TrnPurchaseReqItemsUpdate;
};
export type DeleteTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdGetApiArg = {
  id: number;
};
export type CreateTrnRoutineServiceCheckTrnRoutineServiceCheckPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnRoutineServiceCheckTrnRoutineServiceCheckPostApiArg = {
  'x-tenant-id': string;
  trnRoutineServiceCheckInsert: TrnRoutineServiceCheckInsert;
};
export type GetAllTrnRoutineServiceChecksTrnRoutineServiceCheckGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnRoutineServiceChecksTrnRoutineServiceCheckGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnRoutineServiceCheckUpdate: TrnRoutineServiceCheckUpdate;
};
export type DeleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnRoutineServiceCheckTrnRoutineServiceCheckIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnRoutineServiceCheckTrnRoutineServiceCheckIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnRoutineServiceCheckEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnRoutineServiceCheckEventGetApiArg = void;
export type CreateTrnRoutineServiceCheckTrnRoutineServiceCheckEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnRoutineServiceCheckTrnRoutineServiceCheckEventPostApiArg =
  {
    trnRoutineServiceCheckInsert: TrnRoutineServiceCheckInsert;
  };
export type UpdateTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdPutApiArg =
  {
    id: number;
    trnRoutineServiceCheckUpdate: TrnRoutineServiceCheckUpdate;
  };
export type DeleteTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdGetApiArg = {
  id: number;
};
export type CreateTrnShiftFuelOpeningTrnShiftFuelOpeningPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnShiftFuelOpeningTrnShiftFuelOpeningPostApiArg = {
  'x-tenant-id': string;
  trnShiftFuelOpeningInsert: TrnShiftFuelOpeningInsert;
};
export type GetAllTrnShiftFuelOpeningsTrnShiftFuelOpeningGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnShiftFuelOpeningsTrnShiftFuelOpeningGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnShiftFuelOpeningUpdate: TrnShiftFuelOpeningUpdate;
};
export type DeleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnShiftFuelOpeningTrnShiftFuelOpeningIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnShiftFuelOpeningTrnShiftFuelOpeningIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnShiftFuelOpeningEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnShiftFuelOpeningEventGetApiArg = void;
export type CreateTrnShiftFuelOpeningTrnShiftFuelOpeningEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnShiftFuelOpeningTrnShiftFuelOpeningEventPostApiArg = {
  trnShiftFuelOpeningInsert: TrnShiftFuelOpeningInsert;
};
export type UpdateTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdPutApiArg = {
  id: number;
  trnShiftFuelOpeningUpdate: TrnShiftFuelOpeningUpdate;
};
export type DeleteTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdGetApiArg = {
  id: number;
};
export type CreateTrnTicketTrnTicketPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnTicketTrnTicketPostApiArg = {
  'x-tenant-id': string;
  trnTicketInsert: TrnTicketInsert;
};
export type GetAllTrnTicketsTrnTicketGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnTicketsTrnTicketGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnTicketTrnTicketIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnTicketTrnTicketIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnTicketUpdate: TrnTicketUpdate;
};
export type DeleteTrnTicketTrnTicketIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnTicketTrnTicketIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnTicketTrnTicketIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnTicketTrnTicketIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnTicketEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnTicketEventGetApiArg = void;
export type CreateTrnTicketTrnTicketEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnTicketTrnTicketEventPostApiArg = {
  trnTicketInsert: TrnTicketInsert;
};
export type UpdateTrnTicketTrnTicketEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnTicketTrnTicketEventIdPutApiArg = {
  id: number;
  trnTicketUpdate: TrnTicketUpdate;
};
export type DeleteTrnTicketTrnTicketEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnTicketTrnTicketEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnTicketTrnTicketEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnTicketTrnTicketEventIdGetApiArg = {
  id: number;
};
export type CreateTrnTicketDocumentsTrnTicketDocumentsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnTicketDocumentsTrnTicketDocumentsPostApiArg = {
  'x-tenant-id': string;
  trnTicketDocumentsInsert: TrnTicketDocumentsInsert;
};
export type GetAllTrnTicketDocumentssTrnTicketDocumentsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnTicketDocumentssTrnTicketDocumentsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnTicketDocumentsTrnTicketDocumentsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnTicketDocumentsTrnTicketDocumentsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnTicketDocumentsUpdate: TrnTicketDocumentsUpdate;
};
export type DeleteTrnTicketDocumentsTrnTicketDocumentsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnTicketDocumentsTrnTicketDocumentsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnTicketDocumentsTrnTicketDocumentsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnTicketDocumentsTrnTicketDocumentsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnTicketDocumentsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnTicketDocumentsEventGetApiArg = void;
export type CreateTrnTicketDocumentsTrnTicketDocumentsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnTicketDocumentsTrnTicketDocumentsEventPostApiArg = {
  trnTicketDocumentsInsert: TrnTicketDocumentsInsert;
};
export type UpdateTrnTicketDocumentsTrnTicketDocumentsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnTicketDocumentsTrnTicketDocumentsEventIdPutApiArg = {
  id: number;
  trnTicketDocumentsUpdate: TrnTicketDocumentsUpdate;
};
export type DeleteTrnTicketDocumentsTrnTicketDocumentsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnTicketDocumentsTrnTicketDocumentsEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnTicketDocumentsTrnTicketDocumentsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnTicketDocumentsTrnTicketDocumentsEventIdGetApiArg = {
  id: number;
};
export type CreateTrnWarehouseIndentTrnWarehouseIndentPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnWarehouseIndentTrnWarehouseIndentPostApiArg = {
  'x-tenant-id': string;
  trnWarehouseIndentInsert: TrnWarehouseIndentInsert;
};
export type GetAllTrnWarehouseIndentsTrnWarehouseIndentGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnWarehouseIndentsTrnWarehouseIndentGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnWarehouseIndentTrnWarehouseIndentIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnWarehouseIndentTrnWarehouseIndentIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnWarehouseIndentUpdate: TrnWarehouseIndentUpdate;
};
export type DeleteTrnWarehouseIndentTrnWarehouseIndentIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnWarehouseIndentTrnWarehouseIndentIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetTrnWarehouseIndentTrnWarehouseIndentIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnWarehouseIndentTrnWarehouseIndentIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnWarehouseIndentEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnWarehouseIndentEventGetApiArg = void;
export type CreateTrnWarehouseIndentTrnWarehouseIndentEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnWarehouseIndentTrnWarehouseIndentEventPostApiArg = {
  trnWarehouseIndentInsert: TrnWarehouseIndentInsert;
};
export type UpdateTrnWarehouseIndentTrnWarehouseIndentEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnWarehouseIndentTrnWarehouseIndentEventIdPutApiArg = {
  id: number;
  trnWarehouseIndentUpdate: TrnWarehouseIndentUpdate;
};
export type DeleteTrnWarehouseIndentTrnWarehouseIndentEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnWarehouseIndentTrnWarehouseIndentEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnWarehouseIndentTrnWarehouseIndentEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnWarehouseIndentTrnWarehouseIndentEventIdGetApiArg = {
  id: number;
};
export type CreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsPostApiArg = {
  'x-tenant-id': string;
  trnWarehouseIndentItemsInsert: TrnWarehouseIndentItemsInsert;
};
export type GetAllTrnWarehouseIndentItemssTrnWarehouseIndentItemsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnWarehouseIndentItemssTrnWarehouseIndentItemsGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  trnWarehouseIndentItemsUpdate: TrnWarehouseIndentItemsUpdate;
};
export type DeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdDeleteApiArg =
  {
    id: number;
    'x-tenant-id': string;
  };
export type GetTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetAllTrnWarehouseIndentItemsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnWarehouseIndentItemsEventGetApiArg = void;
export type CreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventPostApiArg =
  {
    trnWarehouseIndentItemsInsert: TrnWarehouseIndentItemsInsert;
  };
export type UpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdPutApiArg =
  {
    id: number;
    trnWarehouseIndentItemsUpdate: TrnWarehouseIndentItemsUpdate;
  };
export type DeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdGetApiArg =
  {
    id: number;
  };
export type ListRolesRolesModulesGetApiResponse =
  /** status 200 Successful Response */ PaginatedModuleBaseResponse;
export type ListRolesRolesModulesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  moduleName?: string | null;
  isActive?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
};
export type CreateRoleRolesPostApiResponse =
  /** status 200 Successful Response */ RoleBaseResponse;
export type CreateRoleRolesPostApiArg = {
  roleBaseCreate: RoleBaseCreate;
};
export type ListRolesRolesGetApiResponse =
  /** status 200 Successful Response */ PaginatedRoleBaseResponse;
export type ListRolesRolesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  roleName?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
};
export type GetRoleRolesRoleIdGetApiResponse =
  /** status 200 Successful Response */ RoleBaseResponse;
export type GetRoleRolesRoleIdGetApiArg = {
  roleId: number;
};
export type UpdateRoleRolesRoleIdPutApiResponse =
  /** status 200 Successful Response */ RoleBaseResponse;
export type UpdateRoleRolesRoleIdPutApiArg = {
  roleId: number;
  roleBaseUpdate: RoleBaseUpdate;
};
export type DeleteRoleRolesRoleIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRoleRolesRoleIdDeleteApiArg = {
  roleId: number;
};
export type CreateRolePermissionRolesRolePermissionsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRolePermissionRolesRolePermissionsPostApiArg = {
  rolePermissionBaseCreate: RolePermissionBaseCreate;
};
export type GetSubscriptionsIdGetApiResponse =
  /** status 200 Successful Response */ SubscriptionBaseResponse;
export type GetSubscriptionsIdGetApiArg = {
  id: number;
};
export type GetAllSubscriptionSubscriptionsGetApiResponse =
  /** status 200 Successful Response */ PaginatedSubscriptionBaseResponse;
export type GetAllSubscriptionSubscriptionsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  subscriptionName?: string | null;
  subscriptionNameIcontains?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
};
export type GetSubscriptionsIdFeaturesGetApiResponse =
  /** status 200 Successful Response */ SubscriptionFeatureBaseResponse[];
export type GetSubscriptionsIdFeaturesGetApiArg = {
  id: number;
};
export type GroupUpdateTenantsGroupUpdatePostApiResponse =
  /** status 200 Successful Response */ any;
export type GroupUpdateTenantsGroupUpdatePostApiArg = {
  action: TenantUserActionEnum;
  'x-tenant-id': string;
  tenantUserMultiSelect: TenantUserMultiSelect;
};
export type GetTenantUsersTenantsIdUsersGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTenantUsersTenantsIdUsersGetApiArg = {
  id: number;
  orderBy?: string | null;
  tenantId?: string | null;
  tenantIdIn?: string | null;
  userId?: string | null;
  userIdIn?: string | null;
  status?: number | null;
  statusIn?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': string;
};
export type UpdateTenantUserTenantsIdUsersUserIdPatchApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTenantUserTenantsIdUsersUserIdPatchApiArg = {
  id: number;
  userId: string;
  'x-tenant-id': string;
  tenantUserBaseUpdate: TenantUserBaseUpdate;
};
export type GetTenantSubscriptionTenantsSubscriptionGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTenantSubscriptionTenantsSubscriptionGetApiArg = {
  'x-tenant-id': string;
};
export type GenerateApiKeyTenantsApiKeyPostApiResponse =
  /** status 200 Successful Response */ TenantOverviewResponse;
export type GenerateApiKeyTenantsApiKeyPostApiArg = {
  tenantId: number;
  'x-tenant-id': string;
};
export type GetApiKeyTenantsViewApiKeyGetApiResponse =
  /** status 200 Successful Response */ TenantApiKeyResponse;
export type GetApiKeyTenantsViewApiKeyGetApiArg = {
  tenantId: number;
  'x-tenant-id': string;
};
export type CreateUserInvitationsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateUserInvitationsPostApiArg = {
  'x-tenant-id': string;
  userInvitationBaseCreate: UserInvitationBaseCreate;
};
export type GetAllUserInvitationUserInvitationsGetApiResponse =
  /** status 200 Successful Response */ PaginatedUserInvitationDetailBaseResponse;
export type GetAllUserInvitationUserInvitationsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  inviteFirstName?: string | null;
  inviteLastName?: string | null;
  inviteEmail?: string | null;
  inviteRole?: string | null;
  inviteStatus?: string | null;
  invitedBy?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': string;
};
export type GetUserInvitationsIdGetApiResponse =
  /** status 200 Successful Response */ UserInvitationBaseResponse;
export type GetUserInvitationsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type UpdateUserInvitationsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateUserInvitationsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  userInvitationBaseUpdate: UserInvitationBaseUpdate;
};
export type DeleteUserInvitationsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteUserInvitationsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type GetProfileUsersProfileGetApiResponse =
  /** status 200 Successful Response */ UserProfileResponse;
export type GetProfileUsersProfileGetApiArg = void;
export type UpdateProfileUsersProfilePutApiResponse =
  /** status 200 Successful Response */ UserProfileResponse;
export type UpdateProfileUsersProfilePutApiArg = {
  userProfileUpdate: UserProfileUpdate;
};
export type UpdateProfilephotoUsersProfilephotoPostApiResponse =
  /** status 200 Successful Response */ UserProfileImageResponse;
export type UpdateProfilephotoUsersProfilephotoPostApiArg = {
  bodyUpdateProfilephotoUsersProfilephotoPost: BodyUpdateProfilephotoUsersProfilephotoPost;
};
export type GetTenantUsersTenantGetApiResponse =
  /** status 200 Successful Response */ TenantOverviewResponse;
export type GetTenantUsersTenantGetApiArg = {
  'x-tenant-id': string;
};
export type UpdateTenantUsersTenantPutApiResponse =
  /** status 200 Successful Response */ TenantOverviewResponse;
export type UpdateTenantUsersTenantPutApiArg = {
  'x-tenant-id': string;
  tenantOverviewUpdate: TenantOverviewUpdate;
};
export type GetTenantownerUsersTenantownerGetApiResponse =
  /** status 200 Successful Response */ TenantOwnerResponse;
export type GetTenantownerUsersTenantownerGetApiArg = {
  'x-tenant-id': string;
};
export type GetAllTenantUsersTenantsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTenantUsersTenantsGetApiArg = {
  orderBy?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
};
export type AssignRoleUsersRolePostApiResponse =
  /** status 200 Successful Response */ any;
export type AssignRoleUsersRolePostApiArg = {
  userRoleBaseCreate: UserRoleBaseCreate;
};
export type GetAllRoleUsersRoleGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRoleUsersRoleGetApiArg = {
  orderBy?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
};
export type DeleteRoleUsersRoleDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRoleUsersRoleDeleteApiArg = {
  userRoleBaseUpdate: UserRoleBaseUpdate;
};
export type CreateUsersDevicetokenPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateUsersDevicetokenPostApiArg = {
  'x-tenant-id': string;
  deviceTokenBaseCreate: DeviceTokenBaseCreate;
};
export type GetAllDeviceTokenUsersDevicetokensGetApiResponse =
  /** status 200 Successful Response */ PaginatedDeviceTokenBaseRespone;
export type GetAllDeviceTokenUsersDevicetokensGetApiArg = {
  orderBy?: string | null;
  tenantId?: number | null;
  userId?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': string;
};
export type SendOtpUsersSendOtpPostApiResponse =
  /** status 200 Successful Response */ any;
export type SendOtpUsersSendOtpPostApiArg = {
  mobileNumber: string;
};
export type SendOtpUsersSendOtpByMailPostApiResponse =
  /** status 200 Successful Response */ any;
export type SendOtpUsersSendOtpByMailPostApiArg = {
  mail: string;
};
export type VerifyOtpUsersVerifyOtpPostApiResponse =
  /** status 200 Successful Response */ any;
export type VerifyOtpUsersVerifyOtpPostApiArg = {
  otp: string;
  mail?: string | null;
  mobileNumber?: string | null;
};
export type ValidateTokenAndRegisterUsersValidateTokenPostApiResponse =
  /** status 200 Successful Response */ any;
export type ValidateTokenAndRegisterUsersValidateTokenPostApiArg = {
  token: string;
  userRegisterDetails: UserRegisterDetails;
};
export type GetRolePermissionUsersUserIdRolePermissionGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRolePermissionUsersUserIdRolePermissionGetApiArg = {
  userId: string;
  'x-tenant-id': string;
};
export type CreateResourcesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateResourcesPostApiArg = {
  'x-tenant-id': string;
  resourceBaseCreate: ResourceBaseCreate;
};
export type GetAllResourceResourcesGetApiResponse =
  /** status 200 Successful Response */ PaginatedResourceBaseResponse;
export type GetAllResourceResourcesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  createdBy?: string | null;
  resourceName?: string | null;
  resourceNameIcontains?: string | null;
  firstName?: string | null;
  firstNameIcontains?: string | null;
  lastName?: string | null;
  lastNameIcontains?: string | null;
  email?: string | null;
  emailIcontains?: string | null;
  isUserLogin?: boolean | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': string;
};
export type GetResourcesIdGetApiResponse =
  /** status 200 Successful Response */ ResourceBaseResponse;
export type GetResourcesIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type UpdateResourcesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateResourcesIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  resourceBaseUpdate: ResourceBaseUpdate;
};
export type DeleteResourcesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteResourcesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type CreateTeamsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTeamsPostApiArg = {
  'x-tenant-id': string;
  teamBaseCreate: TeamBaseCreate;
};
export type GetAllTeamTeamsGetApiResponse =
  /** status 200 Successful Response */ PaginatedTeamBaseResponse;
export type GetAllTeamTeamsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  tenantId?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': string;
};
export type GetTeamsIdGetApiResponse =
  /** status 200 Successful Response */ TeamDetailBaseResponse;
export type GetTeamsIdGetApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type UpdateTeamsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTeamsIdPutApiArg = {
  id: number;
  'x-tenant-id': string;
  teamBaseUpdate: TeamBaseUpdate;
};
export type DeleteTeamsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTeamsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type CreateTeamResourcesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTeamResourcesPostApiArg = {
  'x-tenant-id': string;
  teamResourceBaseCreate: TeamResourceBaseCreate;
};
export type GetAllTeamResourceTeamResourcesGetApiResponse =
  /** status 200 Successful Response */ PaginatedTeamResourceBaseResponse;
export type GetAllTeamResourceTeamResourcesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  tenantId?: number | null;
  osTeamId?: number | null;
  resourceId?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': string;
};
export type DeleteTeamResourcesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTeamResourcesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': string;
};
export type ActivateDeactivateTeamMembersTeamResourcesActivateDeactivatePostApiResponse =
  /** status 200 Successful Response */ any;
export type ActivateDeactivateTeamMembersTeamResourcesActivateDeactivatePostApiArg =
  {
    'x-tenant-id': string;
    teamResourceUpdateRequest: TeamResourceUpdateRequest;
  };
export type BearerResponse = {
  access_token: string;
  token_type: string;
};
export type ErrorModel = {
  detail:
    | string
    | {
        [key: string]: string;
      };
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type BodyAuthJwtLoginV1AuthJwtLoginPost = {
  grant_type?: string | null;
  username: string;
  password: string;
  scope?: string;
  client_id?: string | null;
  client_secret?: string | null;
};
export type UserRead = {
  id: string;
  email: string;
  is_active?: boolean;
  is_superuser?: boolean;
  is_verified?: boolean;
};
export type UserCreate = {
  email: string;
  password: string;
  is_active?: boolean | null;
  is_superuser?: boolean | null;
  is_verified?: boolean | null;
  invite_token?: string | null;
  first_name?: string | null;
  last_name?: string | null;
};
export type BodyResetForgotPasswordV1AuthForgotPasswordPost = {
  email: string;
};
export type BodyResetResetPasswordV1AuthResetPasswordPost = {
  token: string;
  password: string;
};
export type BodyVerifyRequestTokenV1AuthRequestVerifyTokenPost = {
  email: string;
};
export type BodyVerifyVerifyV1AuthVerifyPost = {
  token: string;
};
export type UserUpdate = {
  password?: string | null;
  email?: string | null;
  is_active?: boolean | null;
  is_superuser?: boolean | null;
  is_verified?: boolean | null;
};
export type AssetMatrixInsert = {
  matrix_id: string;
  serial_number: number;
  asset_type: number;
  party_id: number;
  model: string;
  asset_type_name?: string | null;
  manufacturer_name?: string | null;
  variant?: string | null;
  asset_capacity?: string | null;
  fuel_consumption?: string | null;
  fuel_type?: string | null;
  fuel_tank_capacity?: number | null;
  electrical_systme?: string | null;
  hour_meter?: boolean | null;
  odo_meter?: boolean | null;
  operation_cycle?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetMatrixUpdate = {
  matrix_id: string;
  serial_number: number;
  asset_type: number;
  party_id: number;
  model: string;
  asset_type_name?: string | null;
  manufacturer_name?: string | null;
  variant?: string | null;
  asset_capacity?: string | null;
  fuel_consumption?: string | null;
  fuel_type?: string | null;
  fuel_tank_capacity?: number | null;
  electrical_systme?: string | null;
  hour_meter?: boolean | null;
  odo_meter?: boolean | null;
  operation_cycle?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetMatrixDocumentInsert = {
  asset_matrix_id: number;
  matrix_name: string;
  document_id: number;
  document_name?: string | null;
  document_number?: string | null;
  document_path?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetMatrixDocumentUpdate = {
  asset_matrix_id: number;
  matrix_name: string;
  document_id: number;
  document_name?: string | null;
  document_number?: string | null;
  document_path?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetMatrixSectionInsert = {
  matrix_id: string;
  section_name: string;
  assetmatrix_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetMatrixSectionUpdate = {
  matrix_id: string;
  section_name: string;
  assetmatrix_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetMatrixSubSectionInsert = {
  matrix_id: string;
  section_id: number;
  section_name: string;
  sub_section_name: string;
  assetmatrix_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetMatrixSubSectionUpdate = {
  matrix_id: string;
  section_id: number;
  section_name: string;
  sub_section_name: string;
  assetmatrix_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetServiceCheckListInsert = {
  assetmatrix_id: number;
  matrix_id: string;
  checksheet_name: number;
  section_name: string;
  sub_section_name: string;
  section_id?: number | null;
  sub_section_id?: number | null;
  tracking_status?: boolean | null;
  hour_meter_flag?: boolean | null;
  hour_meter?: number | null;
  drum_hour_flag?: boolean | null;
  drum_hours?: number | null;
  days_flag?: boolean | null;
  days?: number | null;
  range_option?: boolean | null;
  range_start?: number | null;
  range_end?: number | null;
  critical_level?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetServiceCheckListUpdate = {
  assetmatrix_id: number;
  matrix_id: string;
  checksheet_name: number;
  section_name: string;
  sub_section_name: string;
  section_id?: number | null;
  sub_section_id?: number | null;
  tracking_status?: boolean | null;
  hour_meter_flag?: boolean | null;
  hour_meter?: number | null;
  drum_hour_flag?: boolean | null;
  drum_hours?: number | null;
  days_flag?: boolean | null;
  days?: number | null;
  range_option?: boolean | null;
  range_start?: number | null;
  range_end?: number | null;
  critical_level?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetServiceCheckListItemsInsert = {
  assetmatrix_id: number;
  matrix_id: string;
  section_name: string;
  sub_section_name: string;
  service_check_list_id: number;
  item_id: number;
  section_id?: number | null;
  sub_section_id?: number | null;
  check_list_name?: string | null;
  item_name?: string | null;
  item_quantity?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetServiceCheckListItemsUpdate = {
  assetmatrix_id: number;
  matrix_id: string;
  section_name: string;
  sub_section_name: string;
  service_check_list_id: number;
  item_id: number;
  section_id?: number | null;
  sub_section_id?: number | null;
  check_list_name?: string | null;
  item_name?: string | null;
  item_quantity?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type FiscalyearInsert = {
  fin_year?: string | null;
  strat_date?: string | null;
  end_date?: string | null;
  deleted_at?: string | null;
};
export type FiscalyearUpdate = {
  fin_year?: string | null;
  strat_date?: string | null;
  end_date?: string | null;
  deleted_at?: string | null;
};
export type GrpWarehouseInsert = {
  warehouse_name: string;
  warehouse_code: string;
  notes: string;
  address1: string;
  organization_id?: number | null;
  sites_id?: string | null;
  address2?: string | null;
  landmark?: string | null;
  city?: string | null;
  country?: string | null;
  supply_state?: string | null;
  district?: string | null;
  pincode?: string | null;
  phone_1?: string | null;
  phone_2?: string | null;
  email?: string | null;
  website?: string | null;
  gstin?: string | null;
  ship_label?: string | null;
  ship_address1?: string | null;
  ship_address2?: string | null;
  ship_landmark?: string | null;
  ship_city?: string | null;
  ship_country?: string | null;
  ship_state?: string | null;
  ship_district?: string | null;
  ship_pincode?: string | null;
  ship_gstin?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type GrpWarehouseUpdate = {
  warehouse_name: string;
  warehouse_code: string;
  notes: string;
  address1: string;
  organization_id?: number | null;
  sites_id?: string | null;
  address2?: string | null;
  landmark?: string | null;
  city?: string | null;
  country?: string | null;
  supply_state?: string | null;
  district?: string | null;
  pincode?: string | null;
  phone_1?: string | null;
  phone_2?: string | null;
  email?: string | null;
  website?: string | null;
  gstin?: string | null;
  ship_label?: string | null;
  ship_address1?: string | null;
  ship_address2?: string | null;
  ship_landmark?: string | null;
  ship_city?: string | null;
  ship_country?: string | null;
  ship_state?: string | null;
  ship_district?: string | null;
  ship_pincode?: string | null;
  ship_gstin?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type InvItemConfigurationInsert = {
  item_id?: number | null;
  item_name?: string | null;
  wrehouse_id?: number | null;
  wrehouse_name?: string | null;
  bin_location?: string | null;
  max_level?: number | null;
  min_level?: number | null;
  reorder_level?: number | null;
  replacement_period?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type InvItemConfigurationUpdate = {
  item_id?: number | null;
  item_name?: string | null;
  wrehouse_id?: number | null;
  wrehouse_name?: string | null;
  bin_location?: string | null;
  max_level?: number | null;
  min_level?: number | null;
  reorder_level?: number | null;
  replacement_period?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type ItemOpeningBalanceInsert = {
  item_id: number;
  organization_id?: number | null;
  item_name?: string | null;
  warehouse_id?: number | null;
  warehouse_name?: string | null;
  batch_number?: string | null;
  expiry_date?: string | null;
  balance_quantity?: number | null;
  item_unit_rate?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type ItemOpeningBalanceUpdate = {
  item_id: number;
  organization_id?: number | null;
  item_name?: string | null;
  warehouse_id?: number | null;
  warehouse_name?: string | null;
  batch_number?: string | null;
  expiry_date?: string | null;
  balance_quantity?: number | null;
  item_unit_rate?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type PoplistsInsert = {
  scrl_code: string;
  scrl_group?: string | null;
  scrl_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type PoplistsUpdate = {
  scrl_code: string;
  scrl_group?: string | null;
  scrl_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type PurchaseOrderTermsInsert = {
  term_name?: string | null;
  term_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type PurchaseOrderTermsUpdate = {
  term_name?: string | null;
  term_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefAstMaterialInsert = {
  material_name?: string | null;
  active_flag?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefAstMaterialUpdate = {
  material_name?: string | null;
  active_flag?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefFuelStationInsert = {
  serial_number: number;
  fule_station_name: string;
  fule_station_type: string;
  address: string;
  fuel_type: string;
  all_sites_indicator: boolean;
  remarks: string;
  site_id?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefFuelStationUpdate = {
  serial_number: number;
  fule_station_name: string;
  fule_station_type: string;
  address: string;
  fuel_type: string;
  all_sites_indicator: boolean;
  remarks: string;
  site_id?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefPartyInsert = {
  party_type?: string | null;
  part_name?: string | null;
  common_name?: string | null;
  notes?: string | null;
  active_status?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefPartyUpdate = {
  party_type?: string | null;
  part_name?: string | null;
  common_name?: string | null;
  notes?: string | null;
  active_status?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefRosterInsert = {
  serial_number: number;
  roster_name: string;
  no_of_shifts: number;
  shift1_name: string;
  shift1_start_time: string;
  shift1_hours: string;
  organization_id?: number | null;
  shift2_name?: string | null;
  shift2_start_time?: string | null;
  shift2_hours?: string | null;
  shift3_name?: string | null;
  shift3_start_time?: string | null;
  shift3_hours?: string | null;
  shift4_name?: string | null;
  shift4_start_time?: string | null;
  shift4_hours?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefRosterUpdate = {
  serial_number: number;
  roster_name: string;
  no_of_shifts: number;
  shift1_name: string;
  shift1_start_time: string;
  shift1_hours: string;
  organization_id?: number | null;
  shift2_name?: string | null;
  shift2_start_time?: string | null;
  shift2_hours?: string | null;
  shift3_name?: string | null;
  shift3_start_time?: string | null;
  shift3_hours?: string | null;
  shift4_name?: string | null;
  shift4_start_time?: string | null;
  shift4_hours?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefSubAssemblyInsert = {
  serial_number: number;
  name: string;
  category_id: number;
  manufacturer_id: number;
  site_id: number;
  purchase_date: string;
  purchase_price: number;
  recived_with_asset: boolean;
  manufacturer_name?: string | null;
  site_name?: string | null;
  status?: string | null;
  status_name?: string | null;
  tags?: number | null;
  tags_name?: string | null;
  machine_location?: number | null;
  location_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefSubAssemblyUpdate = {
  serial_number: number;
  name: string;
  category_id: number;
  manufacturer_id: number;
  site_id: number;
  purchase_date: string;
  purchase_price: number;
  recived_with_asset: boolean;
  manufacturer_name?: string | null;
  site_name?: string | null;
  status?: string | null;
  status_name?: string | null;
  tags?: number | null;
  tags_name?: string | null;
  machine_location?: number | null;
  location_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefTaxInsert = {
  tax_name?: string | null;
  tax_type?: string | null;
  tax_prct?: number | null;
  activation_date?: string | null;
  active_flag?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefTaxUpdate = {
  tax_name?: string | null;
  tax_type?: string | null;
  tax_prct?: number | null;
  activation_date?: string | null;
  active_flag?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefVendorInsert = {
  vendor_name: string;
  vendor_code: string;
  notes: string;
  address_lable: string;
  address_line1: string;
  address_line2?: string | null;
  landmark?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  district?: string | null;
  pincode?: string | null;
  gstin?: string | null;
  pan?: string | null;
  contact_person?: string | null;
  contact_number?: string | null;
  email?: string | null;
  website?: string | null;
  vendor_domain?: string | null;
  authorization_name?: string | null;
  area_of_ops_state?: string | null;
  area_of_ops_district?: string | null;
  active_flag?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefVendorUpdate = {
  vendor_name: string;
  vendor_code: string;
  notes: string;
  address_lable: string;
  address_line1: string;
  address_line2?: string | null;
  landmark?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  district?: string | null;
  pincode?: string | null;
  gstin?: string | null;
  pan?: string | null;
  contact_person?: string | null;
  contact_number?: string | null;
  email?: string | null;
  website?: string | null;
  vendor_domain?: string | null;
  authorization_name?: string | null;
  area_of_ops_state?: string | null;
  area_of_ops_district?: string | null;
  active_flag?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefWorkstationInsert = {
  serial_number: number;
  workstation_name: string;
  workstation_code: string;
  organization_id?: number | null;
  associated_site?: string | null;
  notes?: string | null;
  active_flag?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefWorkstationUpdate = {
  serial_number: number;
  workstation_name: string;
  workstation_code: string;
  organization_id?: number | null;
  associated_site?: string | null;
  notes?: string | null;
  active_flag?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type ResAssetInsert = {
  assetmatrix_id: number;
  matrix_id: string;
  asset_category: string;
  asset_name: string;
  roster_name: string;
  organization_id?: number | null;
  asset_type?: number | null;
  asset_type_name?: string | null;
  asset_code?: string | null;
  purchase_date?: string | null;
  purchase_price?: number | null;
  machine_number?: string | null;
  engine_number?: string | null;
  chasis_number?: string | null;
  ownership_category?: string | null;
  asset_owner?: string | null;
  asset_users?: string | null;
  roster_id?: number | null;
  invoice_rule_id?: number | null;
  site_id?: number | null;
  site_name?: string | null;
  workstation_id?: number | null;
  workstation_name?: string | null;
  asset_status?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type ResAssetUpdate = {
  assetmatrix_id: number;
  matrix_id: string;
  asset_category: string;
  asset_name: string;
  roster_name: string;
  organization_id?: number | null;
  asset_type?: number | null;
  asset_type_name?: string | null;
  asset_code?: string | null;
  purchase_date?: string | null;
  purchase_price?: number | null;
  machine_number?: string | null;
  engine_number?: string | null;
  chasis_number?: string | null;
  ownership_category?: string | null;
  asset_owner?: string | null;
  asset_users?: string | null;
  roster_id?: number | null;
  invoice_rule_id?: number | null;
  site_id?: number | null;
  site_name?: string | null;
  workstation_id?: number | null;
  workstation_name?: string | null;
  asset_status?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SaasApiKeyAuditInsert = {
  current_api_key: string;
  new_api_key: string;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasApiKeyAuditUpdate = {
  current_api_key: string;
  new_api_key: string;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasChatsInsert = {
  thread: number;
  user_id: string;
  message: string;
  attachment: string;
  ip: string;
  receiver_id?: string | null;
  chat_group_id?: number | null;
  group_receiver_id?: string | null;
  extension?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasChatsUpdate = {
  thread: number;
  user_id: string;
  message: string;
  attachment: string;
  ip: string;
  receiver_id?: string | null;
  chat_group_id?: number | null;
  group_receiver_id?: string | null;
  extension?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasCustomersInsert = {
  first_name: string;
  pincode: string;
  tenant_id?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone_number?: string | null;
  street?: string | null;
  city?: string | null;
  state?: string | null;
  zipcode?: string | null;
  customer_organization?: string | null;
  country?: string | null;
  currency_id?: number | null;
  gstin?: string | null;
  pan?: string | null;
  contact_person?: string | null;
  contact_number?: string | null;
  website?: string | null;
  notes?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasCustomersUpdate = {
  first_name: string;
  pincode: string;
  tenant_id?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone_number?: string | null;
  street?: string | null;
  city?: string | null;
  state?: string | null;
  zipcode?: string | null;
  customer_organization?: string | null;
  country?: string | null;
  currency_id?: number | null;
  gstin?: string | null;
  pan?: string | null;
  contact_person?: string | null;
  contact_number?: string | null;
  website?: string | null;
  notes?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasEntitySharesInsert = {
  tenant_id?: string | null;
  entity_id?: number | null;
  entity_type?: string | null;
  uniq_id?: string | null;
  entity_view?: string | null;
  expire_date?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasEntitySharesUpdate = {
  tenant_id?: string | null;
  entity_id?: number | null;
  entity_type?: string | null;
  uniq_id?: string | null;
  entity_view?: string | null;
  expire_date?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasFlexEntityInsert = {
  entity_id: number;
  flex_field_id: number;
  entity_name?: string | null;
  entity_type?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasFlexEntityUpdate = {
  entity_id: number;
  flex_field_id: number;
  entity_name?: string | null;
  entity_type?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasFlexFieldsInsert = {
  is_global: boolean;
  organization_id?: number | null;
  description?: string | null;
  field_name?: string | null;
  field_type?: string | null;
  flex_feild_details?: string | null;
  entity_applied?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasFlexFieldsUpdate = {
  is_global: boolean;
  organization_id?: number | null;
  description?: string | null;
  field_name?: string | null;
  field_type?: string | null;
  flex_feild_details?: string | null;
  entity_applied?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasFlexFieldValuesInsert = {
  entity_id: number;
  entity_type?: string | null;
  flex_fields?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasFlexFieldValuesUpdate = {
  entity_id: number;
  entity_type?: string | null;
  flex_fields?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefConfigurationsInsert = {
  config_name: string;
  config_value: boolean;
  is_enabled: boolean;
  config_note?: string | null;
  associated_to?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefConfigurationsUpdate = {
  config_name: string;
  config_value: boolean;
  is_enabled: boolean;
  config_note?: string | null;
  associated_to?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefDocumentsInsert = {
  document_name: string;
  is_enabled: boolean;
  associated_to?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefDocumentsUpdate = {
  document_name: string;
  is_enabled: boolean;
  associated_to?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefFeaturesInsert = {
  feature_name: string;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SaasRefFeaturesUpdate = {
  feature_name: string;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SaasRefModulesInsert = {
  module_display_name: string;
  module_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefModulesUpdate = {
  module_display_name: string;
  module_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefSubscriptionFeaturesInsert = {
  subscription_id: number;
  feature_id: number;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefSubscriptionFeaturesUpdate = {
  subscription_id: number;
  feature_id: number;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefTenantCurrenciesInsert = {
  tenant_id?: string | null;
  currency_id?: number | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefTenantCurrenciesUpdate = {
  tenant_id?: string | null;
  currency_id?: number | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefWorkflowsInsert = {
  is_default: boolean;
  is_enabled: boolean;
  stage_name?: string | null;
  status_sequence?: number | null;
  entity_type?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefWorkflowsUpdate = {
  is_default: boolean;
  is_enabled: boolean;
  stage_name?: string | null;
  status_sequence?: number | null;
  entity_type?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRolePermissionInsert = {
  role_id: number;
  module_id: number;
  action_id: number;
  access_type?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRolePermissionUpdate = {
  role_id: number;
  module_id: number;
  action_id: number;
  access_type?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAssetTypeInsert = {
  asset_type_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAssetTypeUpdate = {
  asset_type_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstActivityNamesInsert = {
  activity_name: string;
  uom?: string | null;
  is_active?: boolean | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstActivityNamesUpdate = {
  activity_name: string;
  uom?: string | null;
  is_active?: boolean | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstAssetTypeGroupInsert = {
  asset_group_name: string;
  asset_type_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstAssetTypeGroupUpdate = {
  asset_group_name: string;
  asset_type_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstOwnerCategoryInsert = {
  owner_type: string;
  owner_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstOwnerCategoryUpdate = {
  owner_type: string;
  owner_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstSiteActivityInsert = {
  activity_name_id?: number | null;
  activity_name?: string | null;
  site_id?: number | null;
  site_name?: string | null;
  activity_code?: string | null;
  active_status?: boolean | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstSiteActivityUpdate = {
  activity_name_id?: number | null;
  activity_name?: string | null;
  site_id?: number | null;
  site_name?: string | null;
  activity_code?: string | null;
  active_status?: boolean | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstSubAssemblyCategoryInsert = {
  category_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetAstSubAssemblyCategoryUpdate = {
  category_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetAstTicketTypeInsert = {
  ticket_type_name?: string | null;
  ticket_type_note?: string | null;
  repair_required?: boolean | null;
  notes?: string | null;
  is_default?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetAstTicketTypeUpdate = {
  ticket_type_name?: string | null;
  ticket_type_note?: string | null;
  repair_required?: boolean | null;
  notes?: string | null;
  is_default?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetAstTransactionDelayInsert = {
  transaction_type_name?: string | null;
  delay_value?: number | null;
  show_in_dashboard?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetAstTransactionDelayUpdate = {
  transaction_type_name?: string | null;
  delay_value?: number | null;
  show_in_dashboard?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetEntitiesInsert = {
  entity_type?: string | null;
  entity_name?: string | null;
  description?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetEntitiesUpdate = {
  entity_type?: string | null;
  entity_name?: string | null;
  description?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetGenMydashboardInsert = {
  widget: string;
  status: string;
  sequence: number;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetGenMydashboardUpdate = {
  widget: string;
  status: string;
  sequence: number;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetInvUomInsert = {
  uom?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetInvUomUpdate = {
  uom?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetSiteGroupingInsert = {
  group_name: string;
  sites_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetSiteGroupingUpdate = {
  group_name: string;
  sites_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetTenantConfigurationsInsert = {
  is_global: boolean;
  configurations_id: number;
  config_name: string;
  config_value: boolean;
  is_enabled: boolean;
  organization_id?: number | null;
  config_note?: string | null;
  entity_type?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetTenantConfigurationsUpdate = {
  is_global: boolean;
  configurations_id: number;
  config_name: string;
  config_value: boolean;
  is_enabled: boolean;
  organization_id?: number | null;
  config_note?: string | null;
  entity_type?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetTenantWorkflowsInsert = {
  is_global: boolean;
  is_default: boolean;
  is_enabled: boolean;
  organization_id?: number | null;
  entity_type?: string | null;
  workflow_id?: number | null;
  stage_name?: string | null;
  status_sequence?: number | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetTenantWorkflowsUpdate = {
  is_global: boolean;
  is_default: boolean;
  is_enabled: boolean;
  organization_id?: number | null;
  entity_type?: string | null;
  workflow_id?: number | null;
  stage_name?: string | null;
  status_sequence?: number | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SitesInsert = {
  site_group_id: number;
  site_name: string;
  site_code: string;
  all_user_indicator: boolean;
  active_status: boolean;
  organization_id?: number | null;
  associated_users?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SitesUpdate = {
  site_group_id: number;
  site_name: string;
  site_code: string;
  all_user_indicator: boolean;
  active_status: boolean;
  organization_id?: number | null;
  associated_users?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type TeamUsersInsert = {
  user_id: string;
  team_id: number;
  role: number;
  status: boolean;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type TeamUsersUpdate = {
  user_id: string;
  team_id: number;
  role: number;
  status: boolean;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type TransactionNoSettingsInsert = {
  is_global: boolean;
  applicable_date: string;
  organization_id?: number | null;
  associated_to?: string | null;
  system_generate_id?: boolean | null;
  prefix?: string | null;
  num_fmt?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type TransactionNoSettingsUpdate = {
  is_global: boolean;
  applicable_date: string;
  organization_id?: number | null;
  associated_to?: string | null;
  system_generate_id?: boolean | null;
  prefix?: string | null;
  num_fmt?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type TrnAssetDocumentInsert = {
  asset_id: number;
  asset_name: string;
  document_id: number;
  document_number?: string | null;
  document_path?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnAssetDocumentUpdate = {
  asset_id: number;
  asset_name: string;
  document_id: number;
  document_number?: string | null;
  document_path?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnAssetMovmentInsert = {
  trn_number: number;
  asset_id: number;
  asset_name: string;
  from_asset_name: string;
  to_asset_name: string;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  site_change_date?: string | null;
  from_site_id?: number | null;
  to_site_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnAssetMovmentUpdate = {
  trn_number: number;
  asset_id: number;
  asset_name: string;
  from_asset_name: string;
  to_asset_name: string;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  site_change_date?: string | null;
  from_site_id?: number | null;
  to_site_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnAssetOwnershipInsert = {
  asset_id: number;
  asset_name: string;
  ownership_category?: string | null;
  asset_owner?: string | null;
  site_id?: number | null;
  site_name?: string | null;
  workstation_id?: number | null;
  workstation_name?: string | null;
  activation_date?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnAssetOwnershipUpdate = {
  asset_id: number;
  asset_name: string;
  ownership_category?: string | null;
  asset_owner?: string | null;
  site_id?: number | null;
  site_name?: string | null;
  workstation_id?: number | null;
  workstation_name?: string | null;
  activation_date?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnAssetRosterInsert = {
  asset_code: number;
  roster_id: number;
  site_id?: number | null;
  site_name?: string | null;
  workstation_id?: number | null;
  workstation_name?: string | null;
  activation_date?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnAssetRosterUpdate = {
  asset_code: number;
  roster_id: number;
  site_id?: number | null;
  site_name?: string | null;
  workstation_id?: number | null;
  workstation_name?: string | null;
  activation_date?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnAssetSiteLinkingInsert = {
  asset_id: number;
  asset_name: string;
  site_id?: number | null;
  site_name?: string | null;
  workstation_id?: number | null;
  workstation_name?: string | null;
  user_id?: number | null;
  activation_date?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnAssetSiteLinkingUpdate = {
  asset_id: number;
  asset_name: string;
  site_id?: number | null;
  site_name?: string | null;
  workstation_id?: number | null;
  workstation_name?: string | null;
  user_id?: number | null;
  activation_date?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnCounterlogInsert = {
  trn_number: number;
  asset_name: string;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  asset_id?: number | null;
  site_id?: number | null;
  roster_id?: number | null;
  hours_previous_shift_reading?: number | null;
  hours_current_log_reading?: number | null;
  drum_hours_previous_shift_reading?: number | null;
  drum_hours_current_log_reading?: number | null;
  log_date_previous_shift?: string | null;
  log_date_current?: string | null;
  operater_name_id?: number | null;
  remarks?: string | null;
  defective_counterlog_meter?: boolean | null;
  hours_absolute_running?: number | null;
  drum_absolute_running?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnCounterlogUpdate = {
  trn_number: number;
  asset_name: string;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  asset_id?: number | null;
  site_id?: number | null;
  roster_id?: number | null;
  hours_previous_shift_reading?: number | null;
  hours_current_log_reading?: number | null;
  drum_hours_previous_shift_reading?: number | null;
  drum_hours_current_log_reading?: number | null;
  log_date_previous_shift?: string | null;
  log_date_current?: string | null;
  operater_name_id?: number | null;
  remarks?: string | null;
  defective_counterlog_meter?: boolean | null;
  hours_absolute_running?: number | null;
  drum_absolute_running?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnDowntimeInsert = {
  trn_number: number;
  asset_id: number;
  asset_name: string;
  section_name: string;
  trn_date?: string | null;
  roster_id?: number | null;
  site_id?: number | null;
  shift_meter_reading?: number | null;
  shift_drum_reading?: number | null;
  downtime_type_id?: number | null;
  downtime_duration?: string | null;
  downtime_start_time?: string | null;
  downtime_end_time?: string | null;
  fullshift?: boolean | null;
  downtime_section?: number | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnDowntimeUpdate = {
  trn_number: number;
  asset_id: number;
  asset_name: string;
  section_name: string;
  trn_date?: string | null;
  roster_id?: number | null;
  site_id?: number | null;
  shift_meter_reading?: number | null;
  shift_drum_reading?: number | null;
  downtime_type_id?: number | null;
  downtime_duration?: string | null;
  downtime_start_time?: string | null;
  downtime_end_time?: string | null;
  fullshift?: boolean | null;
  downtime_section?: number | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnEngagementInsert = {
  trn_number: number;
  asset_name: string;
  trn_date?: string | null;
  roster_id?: number | null;
  asset_id?: number | null;
  site_id?: number | null;
  engagement_duration?: string | null;
  engagement_fullshift?: boolean | null;
  engagement_start_time?: string | null;
  engagement_end_time?: string | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnEngagementUpdate = {
  trn_number: number;
  asset_name: string;
  trn_date?: string | null;
  roster_id?: number | null;
  asset_id?: number | null;
  site_id?: number | null;
  engagement_duration?: string | null;
  engagement_fullshift?: boolean | null;
  engagement_start_time?: string | null;
  engagement_end_time?: string | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnEntityWorkflowInsert = {
  organization_id?: number | null;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  entity_type?: string | null;
  workflow_id?: number | null;
  entity_id?: number | null;
  asset_status?: string | null;
  note?: string | null;
  mail_notification?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnEntityWorkflowUpdate = {
  organization_id?: number | null;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  entity_type?: string | null;
  workflow_id?: number | null;
  entity_id?: number | null;
  asset_status?: string | null;
  note?: string | null;
  mail_notification?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnFsFuelIssueInsert = {
  trn_date: string;
  trn_number: string;
  trn_fnyr?: number | null;
  fuel_station_id?: number | null;
  fuel_station_name?: string | null;
  fuel_type?: string | null;
  fuel_receiver_id?: number | null;
  fuel_receiver_name?: string | null;
  fuel_quantity?: number | null;
  fuel_unit_rate?: number | null;
  amount?: number | null;
  reference_number?: string | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnFsFuelIssueUpdate = {
  trn_date: string;
  trn_number: string;
  trn_fnyr?: number | null;
  fuel_station_id?: number | null;
  fuel_station_name?: string | null;
  fuel_type?: string | null;
  fuel_receiver_id?: number | null;
  fuel_receiver_name?: string | null;
  fuel_quantity?: number | null;
  fuel_unit_rate?: number | null;
  amount?: number | null;
  reference_number?: string | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnFsFuelReceiveInsert = {
  trn_date: string;
  trn_number: string;
  fuel_type: string;
  trn_fnyr?: number | null;
  fuel_station_id?: number | null;
  fuel_station_name?: string | null;
  fuel_quantity?: number | null;
  fuel_unit_rate?: number | null;
  amount?: number | null;
  fuel_vendor_id?: number | null;
  vendor_name?: string | null;
  reference_number?: string | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnFsFuelReceiveUpdate = {
  trn_date: string;
  trn_number: string;
  fuel_type: string;
  trn_fnyr?: number | null;
  fuel_station_id?: number | null;
  fuel_station_name?: string | null;
  fuel_quantity?: number | null;
  fuel_unit_rate?: number | null;
  amount?: number | null;
  fuel_vendor_id?: number | null;
  vendor_name?: string | null;
  reference_number?: string | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnFsFuelTransferInsert = {
  trn_date: string;
  trn_number: string;
  trn_fnyr?: number | null;
  from_station_id?: number | null;
  fuel_station_name?: string | null;
  to_station_id?: number | null;
  to_fuel_station_name?: string | null;
  fuel_quantity?: number | null;
  fuel_unit_rate?: number | null;
  amount?: number | null;
  reference_number?: string | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnFsFuelTransferUpdate = {
  trn_date: string;
  trn_number: string;
  trn_fnyr?: number | null;
  from_station_id?: number | null;
  fuel_station_name?: string | null;
  to_station_id?: number | null;
  to_fuel_station_name?: string | null;
  fuel_quantity?: number | null;
  fuel_unit_rate?: number | null;
  amount?: number | null;
  reference_number?: string | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnFuelFeedinInsert = {
  trn_number: number;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  roster_id?: number | null;
  asset_id?: number | null;
  site_id?: number | null;
  fulefeedin_station?: number | null;
  fule_station_name?: string | null;
  other_station_detail?: string | null;
  fule_type?: string | null;
  fuel_quantity?: number | null;
  fuel_unit_rate?: number | null;
  fuel_amount?: number | null;
  fuel_tank_status?: boolean | null;
  reference_number?: string | null;
  attach_invoice?: string | null;
  notes?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnFuelFeedinUpdate = {
  trn_number: number;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  roster_id?: number | null;
  asset_id?: number | null;
  site_id?: number | null;
  fulefeedin_station?: number | null;
  fule_station_name?: string | null;
  other_station_detail?: string | null;
  fule_type?: string | null;
  fuel_quantity?: number | null;
  fuel_unit_rate?: number | null;
  fuel_amount?: number | null;
  fuel_tank_status?: boolean | null;
  reference_number?: string | null;
  attach_invoice?: string | null;
  notes?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnHrEmployeeInsert = {
  first_name: string;
  transition_site_id: number;
  organization_id?: number | null;
  last_name?: string | null;
  employee_code?: string | null;
  mobile?: string | null;
  email?: string | null;
  employee_tag?: number | null;
  asset_type?: string | null;
  transition_site_name?: string | null;
  transfer_date?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnHrEmployeeUpdate = {
  first_name: string;
  transition_site_id: number;
  organization_id?: number | null;
  last_name?: string | null;
  employee_code?: string | null;
  mobile?: string | null;
  email?: string | null;
  employee_tag?: number | null;
  asset_type?: string | null;
  transition_site_name?: string | null;
  transfer_date?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnHrEmployeeAssetInsert = {
  asset_id: number;
  asset_name: string;
  operator_id: number;
  supervisior_id: number;
  engineers_id: number;
  asset_site_id?: number | null;
  site_name?: string | null;
  change_date?: string | null;
  operator_name?: string | null;
  supervisior_name?: string | null;
  engineers_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnHrEmployeeAssetUpdate = {
  asset_id: number;
  asset_name: string;
  operator_id: number;
  supervisior_id: number;
  engineers_id: number;
  asset_site_id?: number | null;
  site_name?: string | null;
  change_date?: string | null;
  operator_name?: string | null;
  supervisior_name?: string | null;
  engineers_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvAllocationInsert = {
  trn_date: string;
  trn_number: string;
  demand_id: number;
  ticket_id: number;
  warehouse_id: number;
  allocation_for: string;
  cost_centre: number;
  status_id: number;
  voucher_number: string;
  voucher_date: string;
  trn_fnyr?: number | null;
  warehouse_name?: string | null;
  cost_centre_name?: string | null;
  total_quantity?: number | null;
  sub_total_amount?: number | null;
  adjustment_amount?: number | null;
  total_amount?: number | null;
  note?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvAllocationUpdate = {
  trn_date: string;
  trn_number: string;
  demand_id: number;
  ticket_id: number;
  warehouse_id: number;
  allocation_for: string;
  cost_centre: number;
  status_id: number;
  voucher_number: string;
  voucher_date: string;
  trn_fnyr?: number | null;
  warehouse_name?: string | null;
  cost_centre_name?: string | null;
  total_quantity?: number | null;
  sub_total_amount?: number | null;
  adjustment_amount?: number | null;
  total_amount?: number | null;
  note?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvConsumptionInsert = {
  trn_date: string;
  trn_number: string;
  allocation_id: number;
  warehouse_id: number;
  status: string;
  consumption_for: string;
  voucher_number: string;
  voucher_date: string;
  update_item_config: boolean;
  trn_fnyr?: number | null;
  ticket_id?: number | null;
  warehouse_name?: string | null;
  status_id?: number | null;
  cost_centre?: number | null;
  cost_centre_name?: string | null;
  total_quantity?: number | null;
  sub_total_amount?: number | null;
  adjustment_amount?: number | null;
  total_amount?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvConsumptionUpdate = {
  trn_date: string;
  trn_number: string;
  allocation_id: number;
  warehouse_id: number;
  status: string;
  consumption_for: string;
  voucher_number: string;
  voucher_date: string;
  update_item_config: boolean;
  trn_fnyr?: number | null;
  ticket_id?: number | null;
  warehouse_name?: string | null;
  status_id?: number | null;
  cost_centre?: number | null;
  cost_centre_name?: string | null;
  total_quantity?: number | null;
  sub_total_amount?: number | null;
  adjustment_amount?: number | null;
  total_amount?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvConsumptionItemsInsert = {
  consumption_id: number;
  demand_id: number;
  item_id: number;
  demand_prending_qty: number;
  batch_number: string;
  expiry_date: string;
  unit_rate: number;
  amount: number;
  item_name?: string | null;
  consumption_quantity?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvConsumptionItemsUpdate = {
  consumption_id: number;
  demand_id: number;
  item_id: number;
  demand_prending_qty: number;
  batch_number: string;
  expiry_date: string;
  unit_rate: number;
  amount: number;
  item_name?: string | null;
  consumption_quantity?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemInsert = {
  item_name: string;
  item_code: string;
  item_category: string;
  description: string;
  uom: number;
  mpn: string;
  hsn_sac_code: string;
  generate_scrap_on_replacement: boolean;
  pricing: number;
  purchase_price: number;
  sale_consumption_price: number;
  gst: number;
  igst: number;
  organization_id?: number | null;
  party_id?: number | null;
  manufacturer_name?: string | null;
  tags?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemUpdate = {
  item_name: string;
  item_code: string;
  item_category: string;
  description: string;
  uom: number;
  mpn: string;
  hsn_sac_code: string;
  generate_scrap_on_replacement: boolean;
  pricing: number;
  purchase_price: number;
  sale_consumption_price: number;
  gst: number;
  igst: number;
  organization_id?: number | null;
  party_id?: number | null;
  manufacturer_name?: string | null;
  tags?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemAdjustmentInsert = {
  trn_date: string;
  trn_number: string;
  warehouse_id: number;
  adjustment_for: string;
  cost_centre: number;
  status: string;
  total_add_quantity: number;
  total_less_quantity: number;
  trn_fnyr?: number | null;
  warehouse_name?: string | null;
  cost_centre_name?: string | null;
  status_id?: number | null;
  notes?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemAdjustmentUpdate = {
  trn_date: string;
  trn_number: string;
  warehouse_id: number;
  adjustment_for: string;
  cost_centre: number;
  status: string;
  total_add_quantity: number;
  total_less_quantity: number;
  trn_fnyr?: number | null;
  warehouse_name?: string | null;
  cost_centre_name?: string | null;
  status_id?: number | null;
  notes?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemAdjustmentDtlInsert = {
  adjustment_id: number;
  item_id: number;
  add_quantity: number;
  less_quantity: number;
  batch_number: string;
  expiry_date: string;
  item_name?: string | null;
  adjustment_type?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemAdjustmentDtlUpdate = {
  adjustment_id: number;
  item_id: number;
  add_quantity: number;
  less_quantity: number;
  batch_number: string;
  expiry_date: string;
  item_name?: string | null;
  adjustment_type?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemAllocationInsert = {
  allocation_id: number;
  item_id: number;
  demand_prending_qty: number;
  item_name?: string | null;
  quantity?: number | null;
  batch_number?: string | null;
  expiry_date?: string | null;
  unit_rate?: number | null;
  amount?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemAllocationUpdate = {
  allocation_id: number;
  item_id: number;
  demand_prending_qty: number;
  item_name?: string | null;
  quantity?: number | null;
  batch_number?: string | null;
  expiry_date?: string | null;
  unit_rate?: number | null;
  amount?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemDemandInsert = {
  trn_date: string;
  trn_number: string;
  warehouse_id: number;
  title: string;
  demand_for: string;
  total_quantity: number;
  note: string;
  status: string;
  trn_fnyr?: number | null;
  warehouse_name?: string | null;
  cost_centre?: number | null;
  ticket_id?: number | null;
  user_tags?: string | null;
  status_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemDemandUpdate = {
  trn_date: string;
  trn_number: string;
  warehouse_id: number;
  title: string;
  demand_for: string;
  total_quantity: number;
  note: string;
  status: string;
  trn_fnyr?: number | null;
  warehouse_name?: string | null;
  cost_centre?: number | null;
  ticket_id?: number | null;
  user_tags?: string | null;
  status_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemDemandItemsInsert = {
  item_id: number;
  demand_id?: number | null;
  item_name?: string | null;
  quantity?: number | null;
  unit_rate?: number | null;
  item_amount?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemDemandItemsUpdate = {
  item_id: number;
  demand_id?: number | null;
  item_name?: string | null;
  quantity?: number | null;
  unit_rate?: number | null;
  item_amount?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemTransferInsert = {
  trn_date: string;
  trn_number: string;
  transfer_for: string;
  cost_centre: number;
  ticket_id: number;
  sub_total_amount: number;
  gst_amount: number;
  adjustment_amount: number;
  total_amount: number;
  eway_bill_date: string;
  eway_bill_number: string;
  docket_number: string;
  docket_date: string;
  transporter_vehicle_number: string;
  no_of_boxes: number;
  weight: number;
  trn_fnyr?: number | null;
  from_warehouse_id?: number | null;
  from_warehouse_name?: string | null;
  to_warehouse_id?: number | null;
  to_warehouse_name?: string | null;
  invoice_number?: string | null;
  invoice_date?: string | null;
  cost_centre_name?: string | null;
  total_quantity?: number | null;
  transporter_id?: number | null;
  transporter_name?: string | null;
  status_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemTransferUpdate = {
  trn_date: string;
  trn_number: string;
  transfer_for: string;
  cost_centre: number;
  ticket_id: number;
  sub_total_amount: number;
  gst_amount: number;
  adjustment_amount: number;
  total_amount: number;
  eway_bill_date: string;
  eway_bill_number: string;
  docket_number: string;
  docket_date: string;
  transporter_vehicle_number: string;
  no_of_boxes: number;
  weight: number;
  trn_fnyr?: number | null;
  from_warehouse_id?: number | null;
  from_warehouse_name?: string | null;
  to_warehouse_id?: number | null;
  to_warehouse_name?: string | null;
  invoice_number?: string | null;
  invoice_date?: string | null;
  cost_centre_name?: string | null;
  total_quantity?: number | null;
  transporter_id?: number | null;
  transporter_name?: string | null;
  status_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemTransferDtlInsert = {
  transfer_id: number;
  indent_id: number;
  item_id: number;
  batch_number: string;
  expiry_date: string;
  unit_rate: number;
  amount: number;
  item_name?: string | null;
  demand_prending_qty?: number | null;
  quantity?: number | null;
  gst_prct?: number | null;
  gst_amount?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemTransferDtlUpdate = {
  transfer_id: number;
  indent_id: number;
  item_id: number;
  batch_number: string;
  expiry_date: string;
  unit_rate: number;
  amount: number;
  item_name?: string | null;
  demand_prending_qty?: number | null;
  quantity?: number | null;
  gst_prct?: number | null;
  gst_amount?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvLogisticsInsert = {
  trn_date: string;
  trn_number: string;
  logistics_type: string;
  devision_id: number;
  load_type: string;
  vehicle_type: string;
  origin_type: string;
  destination_type: string;
  comments: string;
  status_id: number;
  trn_fnyr?: number | null;
  devision_name?: string | null;
  tag_user?: string | null;
  origin_cost_center?: number | null;
  destination_cost_center?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvLogisticsUpdate = {
  trn_date: string;
  trn_number: string;
  logistics_type: string;
  devision_id: number;
  load_type: string;
  vehicle_type: string;
  origin_type: string;
  destination_type: string;
  comments: string;
  status_id: number;
  trn_fnyr?: number | null;
  devision_name?: string | null;
  tag_user?: string | null;
  origin_cost_center?: number | null;
  destination_cost_center?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvLogisticsDtlInsert = {
  trn_fnyr?: number | null;
  trn_date?: string | null;
  logistic_id?: number | null;
  source_type?: string | null;
  address1?: string | null;
  address2?: string | null;
  landmark?: string | null;
  city?: string | null;
  country?: string | null;
  state?: string | null;
  district?: string | null;
  pin?: string | null;
  gstin?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvLogisticsDtlUpdate = {
  trn_fnyr?: number | null;
  trn_date?: string | null;
  logistic_id?: number | null;
  source_type?: string | null;
  address1?: string | null;
  address2?: string | null;
  landmark?: string | null;
  city?: string | null;
  country?: string | null;
  state?: string | null;
  district?: string | null;
  pin?: string | null;
  gstin?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvPurchaseInsert = {
  trn_date: string;
  trn_number: string;
  warehouse_id: number;
  vendor_id: number;
  status: string;
  bill_number: string;
  bill_date: string;
  eway_bill_number: string;
  eway_bill_date: string;
  po_number: string;
  gst_applicable: boolean;
  update_item_purchase_price: boolean;
  update_item_consumption_price: boolean;
  total_quantity: number;
  sub_total_amount: number;
  gst_amount: number;
  adjustment_amount: number;
  total_amount: number;
  trn_fnyr?: number | null;
  po_id?: number | null;
  warehouse_name?: string | null;
  vendor_name?: string | null;
  currency_code?: number | null;
  track_consumption?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvPurchaseUpdate = {
  trn_date: string;
  trn_number: string;
  warehouse_id: number;
  vendor_id: number;
  status: string;
  bill_number: string;
  bill_date: string;
  eway_bill_number: string;
  eway_bill_date: string;
  po_number: string;
  gst_applicable: boolean;
  update_item_purchase_price: boolean;
  update_item_consumption_price: boolean;
  total_quantity: number;
  sub_total_amount: number;
  gst_amount: number;
  adjustment_amount: number;
  total_amount: number;
  trn_fnyr?: number | null;
  po_id?: number | null;
  warehouse_name?: string | null;
  vendor_name?: string | null;
  currency_code?: number | null;
  track_consumption?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvPurchaseDocumentInsert = {
  purchase_id: number;
  document_type_id?: number | null;
  document_number?: string | null;
  document_file_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvPurchaseDocumentUpdate = {
  purchase_id: number;
  document_type_id?: number | null;
  document_number?: string | null;
  document_file_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvPurchaseItemsInsert = {
  purchase_id: number;
  item_id: number;
  discount: number;
  gst_prct: number;
  gst_amount: number;
  amount: number;
  item_name?: string | null;
  quantity?: number | null;
  unit_rate?: number | null;
  hsn_code?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvPurchaseItemsUpdate = {
  purchase_id: number;
  item_id: number;
  discount: number;
  gst_prct: number;
  gst_amount: number;
  amount: number;
  item_name?: string | null;
  quantity?: number | null;
  unit_rate?: number | null;
  hsn_code?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvPurchaseReqInsert = {
  trn_number: number;
  warehouse_id: number;
  status: string;
  title: string;
  priority: string;
  due_date: string;
  total_quantity: number;
  sub_total_amount: number;
  tax_amount: number;
  total_amount: number;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  warehouse_name?: string | null;
  tag_user?: number | null;
  tag_assests?: number | null;
  indent_id?: number | null;
  currency_id?: number | null;
  notes?: string | null;
  requisition_status?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvPurchaseReqUpdate = {
  trn_number: number;
  warehouse_id: number;
  status: string;
  title: string;
  priority: string;
  due_date: string;
  total_quantity: number;
  sub_total_amount: number;
  tax_amount: number;
  total_amount: number;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  warehouse_name?: string | null;
  tag_user?: number | null;
  tag_assests?: number | null;
  indent_id?: number | null;
  currency_id?: number | null;
  notes?: string | null;
  requisition_status?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnProductivityInsert = {
  trn_number: number;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  roster_id?: number | null;
  asset_id?: number | null;
  asset_name?: string | null;
  site_id?: number | null;
  workstation_id?: number | null;
  workstation_name?: string | null;
  activity_name_id?: number | null;
  activity_name?: string | null;
  net_productivity?: number | null;
  productivity_unit?: number | null;
  no_of_trips?: number | null;
  material_name_id?: number | null;
  material_name?: string | null;
  employee_id?: number | null;
  employee_name?: string | null;
  attachment?: string | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnProductivityUpdate = {
  trn_number: number;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  roster_id?: number | null;
  asset_id?: number | null;
  asset_name?: string | null;
  site_id?: number | null;
  workstation_id?: number | null;
  workstation_name?: string | null;
  activity_name_id?: number | null;
  activity_name?: string | null;
  net_productivity?: number | null;
  productivity_unit?: number | null;
  no_of_trips?: number | null;
  material_name_id?: number | null;
  material_name?: string | null;
  employee_id?: number | null;
  employee_name?: string | null;
  attachment?: string | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseOrderInsert = {
  po_type: string;
  trn_date: string;
  trn_number: string;
  warehouse_id: number;
  purchase_order_for: string;
  priority: string;
  delivery_date: string;
  quotation_number: string;
  quotation_date: string;
  tag_user_name: string;
  authorized_signatory: string;
  requisition_user: string;
  gst_applicable: boolean;
  total_quantity: number;
  sub_total_amount: number;
  adjustment_amount: number;
  total_amount: number;
  update_item_purchase_price: boolean;
  update_item_consumption_price: boolean;
  notes: string;
  trn_fnyr?: number | null;
  warehouse_name?: string | null;
  vendor_id?: number | null;
  vendor_name?: string | null;
  tag_user?: number | null;
  authorized_user?: number | null;
  requisition_id?: number | null;
  status?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseOrderUpdate = {
  po_type: string;
  trn_date: string;
  trn_number: string;
  warehouse_id: number;
  purchase_order_for: string;
  priority: string;
  delivery_date: string;
  quotation_number: string;
  quotation_date: string;
  tag_user_name: string;
  authorized_signatory: string;
  requisition_user: string;
  gst_applicable: boolean;
  total_quantity: number;
  sub_total_amount: number;
  adjustment_amount: number;
  total_amount: number;
  update_item_purchase_price: boolean;
  update_item_consumption_price: boolean;
  notes: string;
  trn_fnyr?: number | null;
  warehouse_name?: string | null;
  vendor_id?: number | null;
  vendor_name?: string | null;
  tag_user?: number | null;
  authorized_user?: number | null;
  requisition_id?: number | null;
  status?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseOrderItemsInsert = {
  po_id: number;
  item_id: number;
  requsition_qty: number;
  quantity: number;
  unit_rate: number;
  discount: number;
  gst_prct: number;
  gst_amount: number;
  amount: number;
  item_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseOrderItemsUpdate = {
  po_id: number;
  item_id: number;
  requsition_qty: number;
  quantity: number;
  unit_rate: number;
  discount: number;
  gst_prct: number;
  gst_amount: number;
  amount: number;
  item_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseOrderTermsInsert = {
  po_id: number;
  term_desc: string;
  po_fnyr?: number | null;
  term_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseOrderTermsUpdate = {
  po_id: number;
  term_desc: string;
  po_fnyr?: number | null;
  term_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseReqItemsInsert = {
  trn_number: number;
  item_id: number;
  indent_quantity: number;
  requisition_quantity: number;
  unit_rate: string;
  gst_prct: number;
  gst_amount: number;
  amount: number;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  requisition_id?: number | null;
  item_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseReqItemsUpdate = {
  trn_number: number;
  item_id: number;
  indent_quantity: number;
  requisition_quantity: number;
  unit_rate: string;
  gst_prct: number;
  gst_amount: number;
  amount: number;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  requisition_id?: number | null;
  item_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnRoutineServiceCheckInsert = {
  asset_id: number;
  asset_name: string;
  serial_number: number;
  last_service_date: string;
  service_date: string;
  service_id: string;
  previous_counter_log_hours: number;
  current_counter_log_hours: number;
  previous_drum_hours: number;
  current_drum_hours: number;
  checklist_details: string;
  check_sheet_id?: number | null;
  check_list_name?: string | null;
  site_id?: number | null;
  site_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnRoutineServiceCheckUpdate = {
  asset_id: number;
  asset_name: string;
  serial_number: number;
  last_service_date: string;
  service_date: string;
  service_id: string;
  previous_counter_log_hours: number;
  current_counter_log_hours: number;
  previous_drum_hours: number;
  current_drum_hours: number;
  checklist_details: string;
  check_sheet_id?: number | null;
  check_list_name?: string | null;
  site_id?: number | null;
  site_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnShiftFuelOpeningInsert = {
  trn_number: number;
  asset_name: string;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  asset_id?: number | null;
  site_id?: number | null;
  roster_id?: number | null;
  previous_opening_balance?: number | null;
  opening_balance?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnShiftFuelOpeningUpdate = {
  trn_number: number;
  asset_name: string;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  asset_id?: number | null;
  site_id?: number | null;
  roster_id?: number | null;
  previous_opening_balance?: number | null;
  opening_balance?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnTicketInsert = {
  trn_number: string;
  trn_date: string;
  cost_centre_name: string;
  header: string;
  ticket_type: number;
  ticket_for: string;
  last_updated: string;
  status_id: number;
  estimate_days: number;
  remarks: string;
  trn_fnyr?: number | null;
  cost_centre?: number | null;
  ticket_type_name?: string | null;
  site_id?: number | null;
  site_name?: string | null;
  site_user_id?: number | null;
  site_user_name?: string | null;
  ticket_status?: string | null;
  status_name?: string | null;
  failure_start_time?: string | null;
  failure_closing_time?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnTicketUpdate = {
  trn_number: string;
  trn_date: string;
  cost_centre_name: string;
  header: string;
  ticket_type: number;
  ticket_for: string;
  last_updated: string;
  status_id: number;
  estimate_days: number;
  remarks: string;
  trn_fnyr?: number | null;
  cost_centre?: number | null;
  ticket_type_name?: string | null;
  site_id?: number | null;
  site_name?: string | null;
  site_user_id?: number | null;
  site_user_name?: string | null;
  ticket_status?: string | null;
  status_name?: string | null;
  failure_start_time?: string | null;
  failure_closing_time?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnTicketDocumentsInsert = {
  trn_fnyr?: number | null;
  upload_date?: string | null;
  ticket_id?: number | null;
  document_type_id?: number | null;
  document_number?: string | null;
  document_file_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnTicketDocumentsUpdate = {
  trn_fnyr?: number | null;
  upload_date?: string | null;
  ticket_id?: number | null;
  document_type_id?: number | null;
  document_number?: string | null;
  document_file_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnWarehouseIndentInsert = {
  trn_number: number;
  warehouse_id: number;
  title: string;
  indent_quantity: number;
  fulfilled_quantity: number;
  date_of_indent: string;
  total_amount: number;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  warehouse_name?: string | null;
  indent_for?: string | null;
  indent_by_employee?: number | null;
  employee_name?: string | null;
  indent_status?: number | null;
  total_quantity?: number | null;
  indent_note?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnWarehouseIndentUpdate = {
  trn_number: number;
  warehouse_id: number;
  title: string;
  indent_quantity: number;
  fulfilled_quantity: number;
  date_of_indent: string;
  total_amount: number;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  warehouse_name?: string | null;
  indent_for?: string | null;
  indent_by_employee?: number | null;
  employee_name?: string | null;
  indent_status?: number | null;
  total_quantity?: number | null;
  indent_note?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnWarehouseIndentItemsInsert = {
  indent_id: number;
  item_id: number;
  quantity: number;
  unit_rate: number;
  amount: number;
  item_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnWarehouseIndentItemsUpdate = {
  indent_id: number;
  item_id: number;
  quantity: number;
  unit_rate: number;
  amount: number;
  item_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type ModuleBaseResponse = {
  id: number;
  module_name?: string | null;
  is_active?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  parent_id?: string | null;
};
export type PaginatedMeta = {
  current_page: number;
  items_per_page: number;
  total_pages: number;
  total_items: number;
};
export type PaginatedModuleBaseResponse = {
  items: ModuleBaseResponse[];
  meta: PaginatedMeta;
};
export type RoleBaseResponse = {
  id: number;
  created_at?: string | null;
  updated_at?: string | null;
  role_name?: string | null;
  role_display_name?: string | null;
};
export type RoleBaseCreate = {
  role_name: string;
  role_display_name?: string | null;
};
export type PaginatedRoleBaseResponse = {
  items: RoleBaseResponse[];
  meta: PaginatedMeta;
};
export type RoleBaseUpdate = {
  role_name?: string | null;
  role_display_name?: string | null;
};
export type ActionBaseCreate = {
  action_name: string;
  action_description?: string | null;
  action_display_name: string;
  action_type?: string | null;
  roles: number[];
};
export type RolePermissionBaseCreate = {
  module_name: string;
  module_description?: string | null;
  module_display_name?: string | null;
  actions: ActionBaseCreate[];
};
export type SubscriptionBaseResponse = {
  id: number;
  subscription_name?: string | null;
  storage_capacity_mb?: number | null;
  project_limit: number | null;
  user_limit: number | null;
  has_trial?: boolean | null;
  trial_duration_days?: number | null;
  extend_trial_flag?: boolean | null;
  extend_trial_duration_days: number | null;
  subscription_price: number | null;
  subscription_month_duration: number | null;
  is_active?: boolean | null;
  created_by: string | null;
  updated_by: string | null;
  is_default?: boolean | null;
};
export type PaginatedSubscriptionBaseResponse = {
  items: SubscriptionBaseResponse[];
  meta: PaginatedMeta;
};
export type SubscriptionFeatureBaseResponse = {
  id: number;
  subscription_id?: number | null;
  feature_id?: number | null;
  feature_name?: string | null;
};
export type TenantUserActionEnum = 'status' | 'assign_project' | 'is_approver';
export type TenantUserStatusEnum = 'active' | 'inactive';
export type TenantUserMultiSelect = {
  user_ids: string[];
  project_id?: number | null;
  status?: TenantUserStatusEnum | null;
  is_approver?: number | null;
};
export type TenantUserTypeEnum =
  | 'admin'
  | 'owner'
  | 'auditor'
  | 'project_user'
  | 'project_admin'
  | 'client'
  | 'guest'
  | 'qa&qc'
  | 'observor'
  | 'contractor'
  | 'site_engineer';
export type TenantUserBaseUpdate = {
  user_type?: TenantUserTypeEnum | null;
  status?: TenantUserStatusEnum | null;
};
export type TenantOverviewResponse = {
  id?: string | null;
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
  id?: string | null;
  name?: string | null;
  api_key?: string | null;
};
export type UserInvitationBaseCreate = {
  invited_by: string;
  invite_email: string;
  invite_role: string;
  invite_status: string;
  invite_token: string;
  invite_name?: string | null;
};
export type UserInvitationDetailBaseResponse = {
  id?: number | null;
  tenant_id?: string | null;
  invite_first_name?: string | null;
  invite_last_name?: string | null;
  invite_email?: string | null;
  invite_role?: string | null;
  invite_status?: string | null;
  invited_by?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  approver_id?: number | null;
  is_approver?: number | null;
  approver_name?: string | null;
};
export type PaginatedUserInvitationDetailBaseResponse = {
  items: UserInvitationDetailBaseResponse[];
  meta: PaginatedMeta;
};
export type UserInvitationBaseResponse = {
  id?: number | null;
  tenant_id?: string | null;
  invite_first_name?: string | null;
  invite_last_name?: string | null;
  invite_email?: string | null;
  invite_role?: string | null;
  invite_status?: string | null;
  invited_by?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  approver_id?: number | null;
  is_approver?: number | null;
};
export type UserInvitationBaseUpdate = {
  invited_by: string;
  invite_email: string;
  invite_role: string;
  invite_status: string;
  invite_token: string;
  invite_name?: string | null;
};
export type NotificationBaseResponse = {
  notification_method?: string | null;
  due_date_notification?: number | null;
  create_task_notification?: number | null;
  reply_task_notification?: number | null;
  task_status_change_notification?: number | null;
  task_mention_notification?: number | null;
};
export type TeamBaseResponse = {
  team_id?: number | null;
  team_name?: string | null;
};
export type UserProfileResponse = {
  id?: string | null;
  file_id?: number | null;
  resource_id?: number | null;
  profile_image?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  user_type?: string | null;
  time_zone?: string | null;
  time_format?: string | null;
  phone_number?: string | null;
  language?: string | null;
  notifications?: NotificationBaseResponse | null;
  teams?: TeamBaseResponse[] | null;
};
export type UserProfileUpdate = {
  first_name?: string | null;
  last_name?: string | null;
  time_zone?: string | null;
  time_format?: string | null;
  phone_number?: string | null;
  language?: string | null;
  is_active?: number | null;
};
export type UserProfileImageResponse = {
  profile_image?: string | null;
  file_id?: number | null;
};
export type BodyUpdateProfilephotoUsersProfilephotoPost = {
  file: Blob;
};
export type TenantOverviewUpdate = {
  name?: string | null;
  website?: string | null;
  phone?: string | null;
  tenant_description?: string | null;
  currency_code?: string | null;
};
export type TenantOwnerResponse = {
  id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  file_id?: number | null;
  profile_image?: string | null;
};
export type UserRoleBaseCreate = {
  role_name?: TenantUserTypeEnum | null;
  user_id?: string | null;
  is_active?: number | null;
};
export type UserRoleBaseUpdate = {
  role_id?: number | null;
  tenant_id?: number | null;
  user_id?: string | null;
  is_active?: number | null;
};
export type DeviceTokenBaseCreate = {
  user_id: string;
  device_id: string;
  token: string;
  status: string;
};
export type DeviceTokenBaseRespone = {
  id: number;
  user_id?: string | null;
  device_id?: string | null;
  token?: string | null;
  tenant_id?: number | null;
  status?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
};
export type PaginatedDeviceTokenBaseRespone = {
  items: DeviceTokenBaseRespone[];
  meta: PaginatedMeta;
};
export type UserRegisterDetails = {
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  is_active?: boolean | null;
  is_verified?: boolean | null;
  organization?: string | null;
  project?: string | null;
};
export type ResourceBaseCreate = {
  user_id?: string | null;
  resource_name?: string | null;
  resource_type: string;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone_number?: string | null;
  is_user_login?: boolean | null;
  password?: string | null;
  phone_country_code?: string | null;
  report_to?: number | null;
  role?: string | null;
  organization_id?: number | null;
};
export type ResourceBaseResponse = {
  id: number;
  tenant_id?: number | null;
  user_id?: string | null;
  resource_name?: string | null;
  resource_type?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone_number?: string | null;
  phone_country_code?: string | null;
  report_to?: number | null;
  role?: string | null;
  organization_id?: number | null;
};
export type PaginatedResourceBaseResponse = {
  items: ResourceBaseResponse[];
  meta: PaginatedMeta;
};
export type ResourceBaseUpdate = {
  password?: string | null;
  user_id?: string | null;
  resource_name?: string | null;
  resource_type?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone_number?: string | null;
  is_user_login?: boolean | null;
  phone_country_code?: string | null;
  report_to?: number | null;
  role?: string | null;
  organization_id?: number | null;
};
export type TeamBaseCreate = {
  team_name: string;
};
export type TeamBaseResponse2 = {
  id: number;
  team_name?: string | null;
  tenant_id?: number | null;
  is_deleted?: boolean | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  resource_count?: number | null;
};
export type PaginatedTeamBaseResponse = {
  items: TeamBaseResponse2[];
  meta: PaginatedMeta;
};
export type TeamResourceBaseResponse = {
  id: number;
  tenant_id?: number | null;
  resource_id?: number | null;
  os_team_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  is_active?: boolean | null;
};
export type TeamDetailBaseResponse = {
  id: number;
  team_name?: string | null;
  tenant_id?: number | null;
  is_deleted?: boolean | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  resource_count?: number | null;
  team_resources?: TeamResourceBaseResponse[] | null;
};
export type TeamBaseUpdate = {
  team_name?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
};
export type TeamResourceBaseCreate = {
  os_team_id: number;
  resource_id: number;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
};
export type PaginatedTeamResourceBaseResponse = {
  items: TeamResourceBaseResponse[];
  meta: PaginatedMeta;
};
export type TeamResourceUpdateRequest = {
  team_resource_ids: number[];
  is_active?: boolean | null;
};
export const {
  useAuthJwtLoginV1AuthJwtLoginPostMutation,
  useAuthJwtLogoutV1AuthJwtLogoutPostMutation,
  useRegisterRegisterV1AuthRegisterPostMutation,
  useResetForgotPasswordV1AuthForgotPasswordPostMutation,
  useResetResetPasswordV1AuthResetPasswordPostMutation,
  useVerifyRequestTokenV1AuthRequestVerifyTokenPostMutation,
  useVerifyVerifyV1AuthVerifyPostMutation,
  useUsersCurrentUserV1UsersMeGetQuery,
  useUsersPatchCurrentUserV1UsersMePatchMutation,
  useUsersUserV1UsersIdGetQuery,
  useUsersPatchUserV1UsersIdPatchMutation,
  useUsersDeleteUserV1UsersIdDeleteMutation,
  useCreateAssetMatrixAssetMatrixPostMutation,
  useGetAllAssetMatrixsAssetMatrixGetQuery,
  useUpdateAssetMatrixAssetMatrixIdPutMutation,
  useDeleteAssetMatrixAssetMatrixIdDeleteMutation,
  useGetAssetMatrixAssetMatrixIdGetQuery,
  useGetAllAssetMatrixEventGetQuery,
  useCreateAssetMatrixAssetMatrixEventPostMutation,
  useUpdateAssetMatrixAssetMatrixEventIdPutMutation,
  useDeleteAssetMatrixAssetMatrixEventIdDeleteMutation,
  useGetAssetMatrixAssetMatrixEventIdGetQuery,
  useCreateAssetMatrixDocumentAssetMatrixDocumentPostMutation,
  useGetAllAssetMatrixDocumentsAssetMatrixDocumentGetQuery,
  useUpdateAssetMatrixDocumentAssetMatrixDocumentIdPutMutation,
  useDeleteAssetMatrixDocumentAssetMatrixDocumentIdDeleteMutation,
  useGetAssetMatrixDocumentAssetMatrixDocumentIdGetQuery,
  useGetAllAssetMatrixDocumentEventGetQuery,
  useCreateAssetMatrixDocumentAssetMatrixDocumentEventPostMutation,
  useUpdateAssetMatrixDocumentAssetMatrixDocumentEventIdPutMutation,
  useDeleteAssetMatrixDocumentAssetMatrixDocumentEventIdDeleteMutation,
  useGetAssetMatrixDocumentAssetMatrixDocumentEventIdGetQuery,
  useCreateAssetMatrixSectionAssetMatrixSectionPostMutation,
  useGetAllAssetMatrixSectionsAssetMatrixSectionGetQuery,
  useUpdateAssetMatrixSectionAssetMatrixSectionIdPutMutation,
  useDeleteAssetMatrixSectionAssetMatrixSectionIdDeleteMutation,
  useGetAssetMatrixSectionAssetMatrixSectionIdGetQuery,
  useGetAllAssetMatrixSectionEventGetQuery,
  useCreateAssetMatrixSectionAssetMatrixSectionEventPostMutation,
  useUpdateAssetMatrixSectionAssetMatrixSectionEventIdPutMutation,
  useDeleteAssetMatrixSectionAssetMatrixSectionEventIdDeleteMutation,
  useGetAssetMatrixSectionAssetMatrixSectionEventIdGetQuery,
  useCreateAssetMatrixSubSectionAssetMatrixSubSectionPostMutation,
  useGetAllAssetMatrixSubSectionsAssetMatrixSubSectionGetQuery,
  useUpdateAssetMatrixSubSectionAssetMatrixSubSectionIdPutMutation,
  useDeleteAssetMatrixSubSectionAssetMatrixSubSectionIdDeleteMutation,
  useGetAssetMatrixSubSectionAssetMatrixSubSectionIdGetQuery,
  useGetAllAssetMatrixSubSectionEventGetQuery,
  useCreateAssetMatrixSubSectionAssetMatrixSubSectionEventPostMutation,
  useUpdateAssetMatrixSubSectionAssetMatrixSubSectionEventIdPutMutation,
  useDeleteAssetMatrixSubSectionAssetMatrixSubSectionEventIdDeleteMutation,
  useGetAssetMatrixSubSectionAssetMatrixSubSectionEventIdGetQuery,
  useCreateAssetServiceCheckListAssetServiceCheckListPostMutation,
  useGetAllAssetServiceCheckListsAssetServiceCheckListGetQuery,
  useUpdateAssetServiceCheckListAssetServiceCheckListIdPutMutation,
  useDeleteAssetServiceCheckListAssetServiceCheckListIdDeleteMutation,
  useGetAssetServiceCheckListAssetServiceCheckListIdGetQuery,
  useGetAllAssetServiceCheckListEventGetQuery,
  useCreateAssetServiceCheckListAssetServiceCheckListEventPostMutation,
  useUpdateAssetServiceCheckListAssetServiceCheckListEventIdPutMutation,
  useDeleteAssetServiceCheckListAssetServiceCheckListEventIdDeleteMutation,
  useGetAssetServiceCheckListAssetServiceCheckListEventIdGetQuery,
  useCreateAssetServiceCheckListItemsAssetServiceCheckListItemsPostMutation,
  useGetAllAssetServiceCheckListItemssAssetServiceCheckListItemsGetQuery,
  useUpdateAssetServiceCheckListItemsAssetServiceCheckListItemsIdPutMutation,
  useDeleteAssetServiceCheckListItemsAssetServiceCheckListItemsIdDeleteMutation,
  useGetAssetServiceCheckListItemsAssetServiceCheckListItemsIdGetQuery,
  useGetAllAssetServiceCheckListItemsEventGetQuery,
  useCreateAssetServiceCheckListItemsAssetServiceCheckListItemsEventPostMutation,
  useUpdateAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdPutMutation,
  useDeleteAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdDeleteMutation,
  useGetAssetServiceCheckListItemsAssetServiceCheckListItemsEventIdGetQuery,
  useCreateFiscalyearFiscalyearPostMutation,
  useGetAllFiscalyearsFiscalyearGetQuery,
  useUpdateFiscalyearFiscalyearIdPutMutation,
  useDeleteFiscalyearFiscalyearIdDeleteMutation,
  useGetFiscalyearFiscalyearIdGetQuery,
  useGetAllFiscalyearEventGetQuery,
  useCreateFiscalyearFiscalyearEventPostMutation,
  useUpdateFiscalyearFiscalyearEventIdPutMutation,
  useDeleteFiscalyearFiscalyearEventIdDeleteMutation,
  useGetFiscalyearFiscalyearEventIdGetQuery,
  useCreateGrpWarehouseGrpWarehousePostMutation,
  useGetAllGrpWarehousesGrpWarehouseGetQuery,
  useUpdateGrpWarehouseGrpWarehouseIdPutMutation,
  useDeleteGrpWarehouseGrpWarehouseIdDeleteMutation,
  useGetGrpWarehouseGrpWarehouseIdGetQuery,
  useGetAllGrpWarehouseEventGetQuery,
  useCreateGrpWarehouseGrpWarehouseEventPostMutation,
  useUpdateGrpWarehouseGrpWarehouseEventIdPutMutation,
  useDeleteGrpWarehouseGrpWarehouseEventIdDeleteMutation,
  useGetGrpWarehouseGrpWarehouseEventIdGetQuery,
  useCreateInvItemConfigurationInvItemConfigurationPostMutation,
  useGetAllInvItemConfigurationsInvItemConfigurationGetQuery,
  useUpdateInvItemConfigurationInvItemConfigurationIdPutMutation,
  useDeleteInvItemConfigurationInvItemConfigurationIdDeleteMutation,
  useGetInvItemConfigurationInvItemConfigurationIdGetQuery,
  useGetAllInvItemConfigurationEventGetQuery,
  useCreateInvItemConfigurationInvItemConfigurationEventPostMutation,
  useUpdateInvItemConfigurationInvItemConfigurationEventIdPutMutation,
  useDeleteInvItemConfigurationInvItemConfigurationEventIdDeleteMutation,
  useGetInvItemConfigurationInvItemConfigurationEventIdGetQuery,
  useCreateItemOpeningBalanceItemOpeningBalancePostMutation,
  useGetAllItemOpeningBalancesItemOpeningBalanceGetQuery,
  useUpdateItemOpeningBalanceItemOpeningBalanceIdPutMutation,
  useDeleteItemOpeningBalanceItemOpeningBalanceIdDeleteMutation,
  useGetItemOpeningBalanceItemOpeningBalanceIdGetQuery,
  useGetAllItemOpeningBalanceEventGetQuery,
  useCreateItemOpeningBalanceItemOpeningBalanceEventPostMutation,
  useUpdateItemOpeningBalanceItemOpeningBalanceEventIdPutMutation,
  useDeleteItemOpeningBalanceItemOpeningBalanceEventIdDeleteMutation,
  useGetItemOpeningBalanceItemOpeningBalanceEventIdGetQuery,
  useCreatePoplistsPoplistsPostMutation,
  useGetAllPoplistssPoplistsGetQuery,
  useUpdatePoplistsPoplistsIdPutMutation,
  useDeletePoplistsPoplistsIdDeleteMutation,
  useGetPoplistsPoplistsIdGetQuery,
  useGetAllPoplistsEventGetQuery,
  useCreatePoplistsPoplistsEventPostMutation,
  useUpdatePoplistsPoplistsEventIdPutMutation,
  useDeletePoplistsPoplistsEventIdDeleteMutation,
  useGetPoplistsPoplistsEventIdGetQuery,
  useCreatePurchaseOrderTermsPurchaseOrderTermsPostMutation,
  useGetAllPurchaseOrderTermssPurchaseOrderTermsGetQuery,
  useUpdatePurchaseOrderTermsPurchaseOrderTermsIdPutMutation,
  useDeletePurchaseOrderTermsPurchaseOrderTermsIdDeleteMutation,
  useGetPurchaseOrderTermsPurchaseOrderTermsIdGetQuery,
  useGetAllPurchaseOrderTermsEventGetQuery,
  useCreatePurchaseOrderTermsPurchaseOrderTermsEventPostMutation,
  useUpdatePurchaseOrderTermsPurchaseOrderTermsEventIdPutMutation,
  useDeletePurchaseOrderTermsPurchaseOrderTermsEventIdDeleteMutation,
  useGetPurchaseOrderTermsPurchaseOrderTermsEventIdGetQuery,
  useCreateRefAstMaterialRefAstMaterialPostMutation,
  useGetAllRefAstMaterialsRefAstMaterialGetQuery,
  useUpdateRefAstMaterialRefAstMaterialIdPutMutation,
  useDeleteRefAstMaterialRefAstMaterialIdDeleteMutation,
  useGetRefAstMaterialRefAstMaterialIdGetQuery,
  useGetAllRefAstMaterialEventGetQuery,
  useCreateRefAstMaterialRefAstMaterialEventPostMutation,
  useUpdateRefAstMaterialRefAstMaterialEventIdPutMutation,
  useDeleteRefAstMaterialRefAstMaterialEventIdDeleteMutation,
  useGetRefAstMaterialRefAstMaterialEventIdGetQuery,
  useCreateRefFuelStationRefFuelStationPostMutation,
  useGetAllRefFuelStationsRefFuelStationGetQuery,
  useUpdateRefFuelStationRefFuelStationIdPutMutation,
  useDeleteRefFuelStationRefFuelStationIdDeleteMutation,
  useGetRefFuelStationRefFuelStationIdGetQuery,
  useGetAllRefFuelStationEventGetQuery,
  useCreateRefFuelStationRefFuelStationEventPostMutation,
  useUpdateRefFuelStationRefFuelStationEventIdPutMutation,
  useDeleteRefFuelStationRefFuelStationEventIdDeleteMutation,
  useGetRefFuelStationRefFuelStationEventIdGetQuery,
  useCreateRefPartyRefPartyPostMutation,
  useGetAllRefPartysRefPartyGetQuery,
  useUpdateRefPartyRefPartyIdPutMutation,
  useDeleteRefPartyRefPartyIdDeleteMutation,
  useGetRefPartyRefPartyIdGetQuery,
  useGetAllRefPartyEventGetQuery,
  useCreateRefPartyRefPartyEventPostMutation,
  useUpdateRefPartyRefPartyEventIdPutMutation,
  useDeleteRefPartyRefPartyEventIdDeleteMutation,
  useGetRefPartyRefPartyEventIdGetQuery,
  useCreateRefRosterRefRosterPostMutation,
  useGetAllRefRostersRefRosterGetQuery,
  useUpdateRefRosterRefRosterIdPutMutation,
  useDeleteRefRosterRefRosterIdDeleteMutation,
  useGetRefRosterRefRosterIdGetQuery,
  useGetAllRefRosterEventGetQuery,
  useCreateRefRosterRefRosterEventPostMutation,
  useUpdateRefRosterRefRosterEventIdPutMutation,
  useDeleteRefRosterRefRosterEventIdDeleteMutation,
  useGetRefRosterRefRosterEventIdGetQuery,
  useCreateRefSubAssemblyRefSubAssemblyPostMutation,
  useGetAllRefSubAssemblysRefSubAssemblyGetQuery,
  useUpdateRefSubAssemblyRefSubAssemblyIdPutMutation,
  useDeleteRefSubAssemblyRefSubAssemblyIdDeleteMutation,
  useGetRefSubAssemblyRefSubAssemblyIdGetQuery,
  useGetAllRefSubAssemblyEventGetQuery,
  useCreateRefSubAssemblyRefSubAssemblyEventPostMutation,
  useUpdateRefSubAssemblyRefSubAssemblyEventIdPutMutation,
  useDeleteRefSubAssemblyRefSubAssemblyEventIdDeleteMutation,
  useGetRefSubAssemblyRefSubAssemblyEventIdGetQuery,
  useCreateRefTaxRefTaxPostMutation,
  useGetAllRefTaxsRefTaxGetQuery,
  useUpdateRefTaxRefTaxIdPutMutation,
  useDeleteRefTaxRefTaxIdDeleteMutation,
  useGetRefTaxRefTaxIdGetQuery,
  useGetAllRefTaxEventGetQuery,
  useCreateRefTaxRefTaxEventPostMutation,
  useUpdateRefTaxRefTaxEventIdPutMutation,
  useDeleteRefTaxRefTaxEventIdDeleteMutation,
  useGetRefTaxRefTaxEventIdGetQuery,
  useCreateRefVendorRefVendorPostMutation,
  useGetAllRefVendorsRefVendorGetQuery,
  useUpdateRefVendorRefVendorIdPutMutation,
  useDeleteRefVendorRefVendorIdDeleteMutation,
  useGetRefVendorRefVendorIdGetQuery,
  useGetAllRefVendorEventGetQuery,
  useCreateRefVendorRefVendorEventPostMutation,
  useUpdateRefVendorRefVendorEventIdPutMutation,
  useDeleteRefVendorRefVendorEventIdDeleteMutation,
  useGetRefVendorRefVendorEventIdGetQuery,
  useCreateRefWorkstationRefWorkstationPostMutation,
  useGetAllRefWorkstationsRefWorkstationGetQuery,
  useUpdateRefWorkstationRefWorkstationIdPutMutation,
  useDeleteRefWorkstationRefWorkstationIdDeleteMutation,
  useGetRefWorkstationRefWorkstationIdGetQuery,
  useGetAllRefWorkstationEventGetQuery,
  useCreateRefWorkstationRefWorkstationEventPostMutation,
  useUpdateRefWorkstationRefWorkstationEventIdPutMutation,
  useDeleteRefWorkstationRefWorkstationEventIdDeleteMutation,
  useGetRefWorkstationRefWorkstationEventIdGetQuery,
  useCreateResAssetResAssetPostMutation,
  useGetAllResAssetsResAssetGetQuery,
  useUpdateResAssetResAssetIdPutMutation,
  useDeleteResAssetResAssetIdDeleteMutation,
  useGetResAssetResAssetIdGetQuery,
  useGetAllResAssetEventGetQuery,
  useCreateResAssetResAssetEventPostMutation,
  useUpdateResAssetResAssetEventIdPutMutation,
  useDeleteResAssetResAssetEventIdDeleteMutation,
  useGetResAssetResAssetEventIdGetQuery,
  useCreateSaasApiKeyAuditSaasApiKeyAuditPostMutation,
  useGetAllSaasApiKeyAuditsSaasApiKeyAuditGetQuery,
  useUpdateSaasApiKeyAuditSaasApiKeyAuditIdPutMutation,
  useDeleteSaasApiKeyAuditSaasApiKeyAuditIdDeleteMutation,
  useGetSaasApiKeyAuditSaasApiKeyAuditIdGetQuery,
  useGetAllSaasApiKeyAuditEventGetQuery,
  useCreateSaasApiKeyAuditSaasApiKeyAuditEventPostMutation,
  useUpdateSaasApiKeyAuditSaasApiKeyAuditEventIdPutMutation,
  useDeleteSaasApiKeyAuditSaasApiKeyAuditEventIdDeleteMutation,
  useGetSaasApiKeyAuditSaasApiKeyAuditEventIdGetQuery,
  useCreateSaasChatsSaasChatsPostMutation,
  useGetAllSaasChatssSaasChatsGetQuery,
  useUpdateSaasChatsSaasChatsIdPutMutation,
  useDeleteSaasChatsSaasChatsIdDeleteMutation,
  useGetSaasChatsSaasChatsIdGetQuery,
  useGetAllSaasChatsEventGetQuery,
  useCreateSaasChatsSaasChatsEventPostMutation,
  useUpdateSaasChatsSaasChatsEventIdPutMutation,
  useDeleteSaasChatsSaasChatsEventIdDeleteMutation,
  useGetSaasChatsSaasChatsEventIdGetQuery,
  useCreateSaasCustomersSaasCustomersPostMutation,
  useGetAllSaasCustomerssSaasCustomersGetQuery,
  useUpdateSaasCustomersSaasCustomersIdPutMutation,
  useDeleteSaasCustomersSaasCustomersIdDeleteMutation,
  useGetSaasCustomersSaasCustomersIdGetQuery,
  useGetAllSaasCustomersEventGetQuery,
  useCreateSaasCustomersSaasCustomersEventPostMutation,
  useUpdateSaasCustomersSaasCustomersEventIdPutMutation,
  useDeleteSaasCustomersSaasCustomersEventIdDeleteMutation,
  useGetSaasCustomersSaasCustomersEventIdGetQuery,
  useCreateSaasEntitySharesSaasEntitySharesPostMutation,
  useGetAllSaasEntitySharessSaasEntitySharesGetQuery,
  useUpdateSaasEntitySharesSaasEntitySharesIdPutMutation,
  useDeleteSaasEntitySharesSaasEntitySharesIdDeleteMutation,
  useGetSaasEntitySharesSaasEntitySharesIdGetQuery,
  useGetAllSaasEntitySharesEventGetQuery,
  useCreateSaasEntitySharesSaasEntitySharesEventPostMutation,
  useUpdateSaasEntitySharesSaasEntitySharesEventIdPutMutation,
  useDeleteSaasEntitySharesSaasEntitySharesEventIdDeleteMutation,
  useGetSaasEntitySharesSaasEntitySharesEventIdGetQuery,
  useCreateSaasFlexEntitySaasFlexEntityPostMutation,
  useGetAllSaasFlexEntitysSaasFlexEntityGetQuery,
  useUpdateSaasFlexEntitySaasFlexEntityIdPutMutation,
  useDeleteSaasFlexEntitySaasFlexEntityIdDeleteMutation,
  useGetSaasFlexEntitySaasFlexEntityIdGetQuery,
  useGetAllSaasFlexEntityEventGetQuery,
  useCreateSaasFlexEntitySaasFlexEntityEventPostMutation,
  useUpdateSaasFlexEntitySaasFlexEntityEventIdPutMutation,
  useDeleteSaasFlexEntitySaasFlexEntityEventIdDeleteMutation,
  useGetSaasFlexEntitySaasFlexEntityEventIdGetQuery,
  useCreateSaasFlexFieldsSaasFlexFieldsPostMutation,
  useGetAllSaasFlexFieldssSaasFlexFieldsGetQuery,
  useUpdateSaasFlexFieldsSaasFlexFieldsIdPutMutation,
  useDeleteSaasFlexFieldsSaasFlexFieldsIdDeleteMutation,
  useGetSaasFlexFieldsSaasFlexFieldsIdGetQuery,
  useGetAllSaasFlexFieldsEventGetQuery,
  useCreateSaasFlexFieldsSaasFlexFieldsEventPostMutation,
  useUpdateSaasFlexFieldsSaasFlexFieldsEventIdPutMutation,
  useDeleteSaasFlexFieldsSaasFlexFieldsEventIdDeleteMutation,
  useGetSaasFlexFieldsSaasFlexFieldsEventIdGetQuery,
  useCreateSaasFlexFieldValuesSaasFlexFieldValuesPostMutation,
  useGetAllSaasFlexFieldValuessSaasFlexFieldValuesGetQuery,
  useUpdateSaasFlexFieldValuesSaasFlexFieldValuesIdPutMutation,
  useDeleteSaasFlexFieldValuesSaasFlexFieldValuesIdDeleteMutation,
  useGetSaasFlexFieldValuesSaasFlexFieldValuesIdGetQuery,
  useGetAllSaasFlexFieldValuesEventGetQuery,
  useCreateSaasFlexFieldValuesSaasFlexFieldValuesEventPostMutation,
  useUpdateSaasFlexFieldValuesSaasFlexFieldValuesEventIdPutMutation,
  useDeleteSaasFlexFieldValuesSaasFlexFieldValuesEventIdDeleteMutation,
  useGetSaasFlexFieldValuesSaasFlexFieldValuesEventIdGetQuery,
  useCreateSaasRefConfigurationsSaasRefConfigurationsPostMutation,
  useGetAllSaasRefConfigurationssSaasRefConfigurationsGetQuery,
  useUpdateSaasRefConfigurationsSaasRefConfigurationsIdPutMutation,
  useDeleteSaasRefConfigurationsSaasRefConfigurationsIdDeleteMutation,
  useGetSaasRefConfigurationsSaasRefConfigurationsIdGetQuery,
  useGetAllSaasRefConfigurationsEventGetQuery,
  useCreateSaasRefConfigurationsSaasRefConfigurationsEventPostMutation,
  useUpdateSaasRefConfigurationsSaasRefConfigurationsEventIdPutMutation,
  useDeleteSaasRefConfigurationsSaasRefConfigurationsEventIdDeleteMutation,
  useGetSaasRefConfigurationsSaasRefConfigurationsEventIdGetQuery,
  useCreateSaasRefDocumentsSaasRefDocumentsPostMutation,
  useGetAllSaasRefDocumentssSaasRefDocumentsGetQuery,
  useUpdateSaasRefDocumentsSaasRefDocumentsIdPutMutation,
  useDeleteSaasRefDocumentsSaasRefDocumentsIdDeleteMutation,
  useGetSaasRefDocumentsSaasRefDocumentsIdGetQuery,
  useGetAllSaasRefDocumentsEventGetQuery,
  useCreateSaasRefDocumentsSaasRefDocumentsEventPostMutation,
  useUpdateSaasRefDocumentsSaasRefDocumentsEventIdPutMutation,
  useDeleteSaasRefDocumentsSaasRefDocumentsEventIdDeleteMutation,
  useGetSaasRefDocumentsSaasRefDocumentsEventIdGetQuery,
  useCreateSaasRefFeaturesSaasRefFeaturesPostMutation,
  useGetAllSaasRefFeaturessSaasRefFeaturesGetQuery,
  useUpdateSaasRefFeaturesSaasRefFeaturesIdPutMutation,
  useDeleteSaasRefFeaturesSaasRefFeaturesIdDeleteMutation,
  useGetSaasRefFeaturesSaasRefFeaturesIdGetQuery,
  useGetAllSaasRefFeaturesEventGetQuery,
  useCreateSaasRefFeaturesSaasRefFeaturesEventPostMutation,
  useUpdateSaasRefFeaturesSaasRefFeaturesEventIdPutMutation,
  useDeleteSaasRefFeaturesSaasRefFeaturesEventIdDeleteMutation,
  useGetSaasRefFeaturesSaasRefFeaturesEventIdGetQuery,
  useCreateSaasRefModulesSaasRefModulesPostMutation,
  useGetAllSaasRefModulessSaasRefModulesGetQuery,
  useUpdateSaasRefModulesSaasRefModulesIdPutMutation,
  useDeleteSaasRefModulesSaasRefModulesIdDeleteMutation,
  useGetSaasRefModulesSaasRefModulesIdGetQuery,
  useGetAllSaasRefModulesEventGetQuery,
  useCreateSaasRefModulesSaasRefModulesEventPostMutation,
  useUpdateSaasRefModulesSaasRefModulesEventIdPutMutation,
  useDeleteSaasRefModulesSaasRefModulesEventIdDeleteMutation,
  useGetSaasRefModulesSaasRefModulesEventIdGetQuery,
  useCreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesPostMutation,
  useGetAllSaasRefSubscriptionFeaturessSaasRefSubscriptionFeaturesGetQuery,
  useUpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdPutMutation,
  useDeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdDeleteMutation,
  useGetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdGetQuery,
  useGetAllSaasRefSubscriptionFeaturesEventGetQuery,
  useCreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventPostMutation,
  useUpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdPutMutation,
  useDeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdDeleteMutation,
  useGetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesEventIdGetQuery,
  useCreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesPostMutation,
  useGetAllSaasRefTenantCurrenciessSaasRefTenantCurrenciesGetQuery,
  useUpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdPutMutation,
  useDeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdDeleteMutation,
  useGetSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdGetQuery,
  useGetAllSaasRefTenantCurrenciesEventGetQuery,
  useCreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventPostMutation,
  useUpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdPutMutation,
  useDeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdDeleteMutation,
  useGetSaasRefTenantCurrenciesSaasRefTenantCurrenciesEventIdGetQuery,
  useCreateSaasRefWorkflowsSaasRefWorkflowsPostMutation,
  useGetAllSaasRefWorkflowssSaasRefWorkflowsGetQuery,
  useUpdateSaasRefWorkflowsSaasRefWorkflowsIdPutMutation,
  useDeleteSaasRefWorkflowsSaasRefWorkflowsIdDeleteMutation,
  useGetSaasRefWorkflowsSaasRefWorkflowsIdGetQuery,
  useGetAllSaasRefWorkflowsEventGetQuery,
  useCreateSaasRefWorkflowsSaasRefWorkflowsEventPostMutation,
  useUpdateSaasRefWorkflowsSaasRefWorkflowsEventIdPutMutation,
  useDeleteSaasRefWorkflowsSaasRefWorkflowsEventIdDeleteMutation,
  useGetSaasRefWorkflowsSaasRefWorkflowsEventIdGetQuery,
  useCreateSaasRolePermissionSaasRolePermissionPostMutation,
  useGetAllSaasRolePermissionsSaasRolePermissionGetQuery,
  useUpdateSaasRolePermissionSaasRolePermissionIdPutMutation,
  useDeleteSaasRolePermissionSaasRolePermissionIdDeleteMutation,
  useGetSaasRolePermissionSaasRolePermissionIdGetQuery,
  useGetAllSaasRolePermissionEventGetQuery,
  useCreateSaasRolePermissionSaasRolePermissionEventPostMutation,
  useUpdateSaasRolePermissionSaasRolePermissionEventIdPutMutation,
  useDeleteSaasRolePermissionSaasRolePermissionEventIdDeleteMutation,
  useGetSaasRolePermissionSaasRolePermissionEventIdGetQuery,
  useCreateSetAssetTypeSetAssetTypePostMutation,
  useGetAllSetAssetTypesSetAssetTypeGetQuery,
  useUpdateSetAssetTypeSetAssetTypeIdPutMutation,
  useDeleteSetAssetTypeSetAssetTypeIdDeleteMutation,
  useGetSetAssetTypeSetAssetTypeIdGetQuery,
  useGetAllSetAssetTypeEventGetQuery,
  useCreateSetAssetTypeSetAssetTypeEventPostMutation,
  useUpdateSetAssetTypeSetAssetTypeEventIdPutMutation,
  useDeleteSetAssetTypeSetAssetTypeEventIdDeleteMutation,
  useGetSetAssetTypeSetAssetTypeEventIdGetQuery,
  useCreateSetAstActivityNamesSetAstActivityNamesPostMutation,
  useGetAllSetAstActivityNamessSetAstActivityNamesGetQuery,
  useUpdateSetAstActivityNamesSetAstActivityNamesIdPutMutation,
  useDeleteSetAstActivityNamesSetAstActivityNamesIdDeleteMutation,
  useGetSetAstActivityNamesSetAstActivityNamesIdGetQuery,
  useGetAllSetAstActivityNamesEventGetQuery,
  useCreateSetAstActivityNamesSetAstActivityNamesEventPostMutation,
  useUpdateSetAstActivityNamesSetAstActivityNamesEventIdPutMutation,
  useDeleteSetAstActivityNamesSetAstActivityNamesEventIdDeleteMutation,
  useGetSetAstActivityNamesSetAstActivityNamesEventIdGetQuery,
  useCreateSetAstAssetTypeGroupSetAstAssetTypeGroupPostMutation,
  useGetAllSetAstAssetTypeGroupsSetAstAssetTypeGroupGetQuery,
  useUpdateSetAstAssetTypeGroupSetAstAssetTypeGroupIdPutMutation,
  useDeleteSetAstAssetTypeGroupSetAstAssetTypeGroupIdDeleteMutation,
  useGetSetAstAssetTypeGroupSetAstAssetTypeGroupIdGetQuery,
  useGetAllSetAstAssetTypeGroupEventGetQuery,
  useCreateSetAstAssetTypeGroupSetAstAssetTypeGroupEventPostMutation,
  useUpdateSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdPutMutation,
  useDeleteSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdDeleteMutation,
  useGetSetAstAssetTypeGroupSetAstAssetTypeGroupEventIdGetQuery,
  useCreateSetAstOwnerCategorySetAstOwnerCategoryPostMutation,
  useGetAllSetAstOwnerCategorysSetAstOwnerCategoryGetQuery,
  useUpdateSetAstOwnerCategorySetAstOwnerCategoryIdPutMutation,
  useDeleteSetAstOwnerCategorySetAstOwnerCategoryIdDeleteMutation,
  useGetSetAstOwnerCategorySetAstOwnerCategoryIdGetQuery,
  useGetAllSetAstOwnerCategoryEventGetQuery,
  useCreateSetAstOwnerCategorySetAstOwnerCategoryEventPostMutation,
  useUpdateSetAstOwnerCategorySetAstOwnerCategoryEventIdPutMutation,
  useDeleteSetAstOwnerCategorySetAstOwnerCategoryEventIdDeleteMutation,
  useGetSetAstOwnerCategorySetAstOwnerCategoryEventIdGetQuery,
  useCreateSetAstSiteActivitySetAstSiteActivityPostMutation,
  useGetAllSetAstSiteActivitysSetAstSiteActivityGetQuery,
  useUpdateSetAstSiteActivitySetAstSiteActivityIdPutMutation,
  useDeleteSetAstSiteActivitySetAstSiteActivityIdDeleteMutation,
  useGetSetAstSiteActivitySetAstSiteActivityIdGetQuery,
  useGetAllSetAstSiteActivityEventGetQuery,
  useCreateSetAstSiteActivitySetAstSiteActivityEventPostMutation,
  useUpdateSetAstSiteActivitySetAstSiteActivityEventIdPutMutation,
  useDeleteSetAstSiteActivitySetAstSiteActivityEventIdDeleteMutation,
  useGetSetAstSiteActivitySetAstSiteActivityEventIdGetQuery,
  useCreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPostMutation,
  useGetAllSetAstSubAssemblyCategorysSetAstSubAssemblyCategoryGetQuery,
  useUpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdPutMutation,
  useDeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteMutation,
  useGetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGetQuery,
  useGetAllSetAstSubAssemblyCategoryEventGetQuery,
  useCreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventPostMutation,
  useUpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdPutMutation,
  useDeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdDeleteMutation,
  useGetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryEventIdGetQuery,
  useCreateSetAstTicketTypeSetAstTicketTypePostMutation,
  useGetAllSetAstTicketTypesSetAstTicketTypeGetQuery,
  useUpdateSetAstTicketTypeSetAstTicketTypeIdPutMutation,
  useDeleteSetAstTicketTypeSetAstTicketTypeIdDeleteMutation,
  useGetSetAstTicketTypeSetAstTicketTypeIdGetQuery,
  useGetAllSetAstTicketTypeEventGetQuery,
  useCreateSetAstTicketTypeSetAstTicketTypeEventPostMutation,
  useUpdateSetAstTicketTypeSetAstTicketTypeEventIdPutMutation,
  useDeleteSetAstTicketTypeSetAstTicketTypeEventIdDeleteMutation,
  useGetSetAstTicketTypeSetAstTicketTypeEventIdGetQuery,
  useCreateSetAstTransactionDelaySetAstTransactionDelayPostMutation,
  useGetAllSetAstTransactionDelaysSetAstTransactionDelayGetQuery,
  useUpdateSetAstTransactionDelaySetAstTransactionDelayIdPutMutation,
  useDeleteSetAstTransactionDelaySetAstTransactionDelayIdDeleteMutation,
  useGetSetAstTransactionDelaySetAstTransactionDelayIdGetQuery,
  useGetAllSetAstTransactionDelayEventGetQuery,
  useCreateSetAstTransactionDelaySetAstTransactionDelayEventPostMutation,
  useUpdateSetAstTransactionDelaySetAstTransactionDelayEventIdPutMutation,
  useDeleteSetAstTransactionDelaySetAstTransactionDelayEventIdDeleteMutation,
  useGetSetAstTransactionDelaySetAstTransactionDelayEventIdGetQuery,
  useCreateSetEntitiesSetEntitiesPostMutation,
  useGetAllSetEntitiessSetEntitiesGetQuery,
  useUpdateSetEntitiesSetEntitiesIdPutMutation,
  useDeleteSetEntitiesSetEntitiesIdDeleteMutation,
  useGetSetEntitiesSetEntitiesIdGetQuery,
  useGetAllSetEntitiesEventGetQuery,
  useCreateSetEntitiesSetEntitiesEventPostMutation,
  useUpdateSetEntitiesSetEntitiesEventIdPutMutation,
  useDeleteSetEntitiesSetEntitiesEventIdDeleteMutation,
  useGetSetEntitiesSetEntitiesEventIdGetQuery,
  useCreateSetGenMydashboardSetGenMydashboardPostMutation,
  useGetAllSetGenMydashboardsSetGenMydashboardGetQuery,
  useUpdateSetGenMydashboardSetGenMydashboardIdPutMutation,
  useDeleteSetGenMydashboardSetGenMydashboardIdDeleteMutation,
  useGetSetGenMydashboardSetGenMydashboardIdGetQuery,
  useGetAllSetGenMydashboardEventGetQuery,
  useCreateSetGenMydashboardSetGenMydashboardEventPostMutation,
  useUpdateSetGenMydashboardSetGenMydashboardEventIdPutMutation,
  useDeleteSetGenMydashboardSetGenMydashboardEventIdDeleteMutation,
  useGetSetGenMydashboardSetGenMydashboardEventIdGetQuery,
  useCreateSetInvUomSetInvUomPostMutation,
  useGetAllSetInvUomsSetInvUomGetQuery,
  useUpdateSetInvUomSetInvUomIdPutMutation,
  useDeleteSetInvUomSetInvUomIdDeleteMutation,
  useGetSetInvUomSetInvUomIdGetQuery,
  useGetAllSetInvUomEventGetQuery,
  useCreateSetInvUomSetInvUomEventPostMutation,
  useUpdateSetInvUomSetInvUomEventIdPutMutation,
  useDeleteSetInvUomSetInvUomEventIdDeleteMutation,
  useGetSetInvUomSetInvUomEventIdGetQuery,
  useCreateSetSiteGroupingSetSiteGroupingPostMutation,
  useGetAllSetSiteGroupingsSetSiteGroupingGetQuery,
  useUpdateSetSiteGroupingSetSiteGroupingIdPutMutation,
  useDeleteSetSiteGroupingSetSiteGroupingIdDeleteMutation,
  useGetSetSiteGroupingSetSiteGroupingIdGetQuery,
  useGetAllSetSiteGroupingEventGetQuery,
  useCreateSetSiteGroupingSetSiteGroupingEventPostMutation,
  useUpdateSetSiteGroupingSetSiteGroupingEventIdPutMutation,
  useDeleteSetSiteGroupingSetSiteGroupingEventIdDeleteMutation,
  useGetSetSiteGroupingSetSiteGroupingEventIdGetQuery,
  useCreateSetTenantConfigurationsSetTenantConfigurationsPostMutation,
  useGetAllSetTenantConfigurationssSetTenantConfigurationsGetQuery,
  useUpdateSetTenantConfigurationsSetTenantConfigurationsIdPutMutation,
  useDeleteSetTenantConfigurationsSetTenantConfigurationsIdDeleteMutation,
  useGetSetTenantConfigurationsSetTenantConfigurationsIdGetQuery,
  useGetAllSetTenantConfigurationsEventGetQuery,
  useCreateSetTenantConfigurationsSetTenantConfigurationsEventPostMutation,
  useUpdateSetTenantConfigurationsSetTenantConfigurationsEventIdPutMutation,
  useDeleteSetTenantConfigurationsSetTenantConfigurationsEventIdDeleteMutation,
  useGetSetTenantConfigurationsSetTenantConfigurationsEventIdGetQuery,
  useCreateSetTenantWorkflowsSetTenantWorkflowsPostMutation,
  useGetAllSetTenantWorkflowssSetTenantWorkflowsGetQuery,
  useUpdateSetTenantWorkflowsSetTenantWorkflowsIdPutMutation,
  useDeleteSetTenantWorkflowsSetTenantWorkflowsIdDeleteMutation,
  useGetSetTenantWorkflowsSetTenantWorkflowsIdGetQuery,
  useGetAllSetTenantWorkflowsEventGetQuery,
  useCreateSetTenantWorkflowsSetTenantWorkflowsEventPostMutation,
  useUpdateSetTenantWorkflowsSetTenantWorkflowsEventIdPutMutation,
  useDeleteSetTenantWorkflowsSetTenantWorkflowsEventIdDeleteMutation,
  useGetSetTenantWorkflowsSetTenantWorkflowsEventIdGetQuery,
  useCreateSitesSitesPostMutation,
  useGetAllSitessSitesGetQuery,
  useUpdateSitesSitesIdPutMutation,
  useDeleteSitesSitesIdDeleteMutation,
  useGetSitesSitesIdGetQuery,
  useGetAllSitesEventGetQuery,
  useCreateSitesSitesEventPostMutation,
  useUpdateSitesSitesEventIdPutMutation,
  useDeleteSitesSitesEventIdDeleteMutation,
  useGetSitesSitesEventIdGetQuery,
  useCreateTeamUsersTeamUsersPostMutation,
  useGetAllTeamUserssTeamUsersGetQuery,
  useUpdateTeamUsersTeamUsersIdPutMutation,
  useDeleteTeamUsersTeamUsersIdDeleteMutation,
  useGetTeamUsersTeamUsersIdGetQuery,
  useGetAllTeamUsersEventGetQuery,
  useCreateTeamUsersTeamUsersEventPostMutation,
  useUpdateTeamUsersTeamUsersEventIdPutMutation,
  useDeleteTeamUsersTeamUsersEventIdDeleteMutation,
  useGetTeamUsersTeamUsersEventIdGetQuery,
  useCreateTransactionNoSettingsTransactionNoSettingsPostMutation,
  useGetAllTransactionNoSettingssTransactionNoSettingsGetQuery,
  useUpdateTransactionNoSettingsTransactionNoSettingsIdPutMutation,
  useDeleteTransactionNoSettingsTransactionNoSettingsIdDeleteMutation,
  useGetTransactionNoSettingsTransactionNoSettingsIdGetQuery,
  useGetAllTransactionNoSettingsEventGetQuery,
  useCreateTransactionNoSettingsTransactionNoSettingsEventPostMutation,
  useUpdateTransactionNoSettingsTransactionNoSettingsEventIdPutMutation,
  useDeleteTransactionNoSettingsTransactionNoSettingsEventIdDeleteMutation,
  useGetTransactionNoSettingsTransactionNoSettingsEventIdGetQuery,
  useCreateTrnAssetDocumentTrnAssetDocumentPostMutation,
  useGetAllTrnAssetDocumentsTrnAssetDocumentGetQuery,
  useUpdateTrnAssetDocumentTrnAssetDocumentIdPutMutation,
  useDeleteTrnAssetDocumentTrnAssetDocumentIdDeleteMutation,
  useGetTrnAssetDocumentTrnAssetDocumentIdGetQuery,
  useGetAllTrnAssetDocumentEventGetQuery,
  useCreateTrnAssetDocumentTrnAssetDocumentEventPostMutation,
  useUpdateTrnAssetDocumentTrnAssetDocumentEventIdPutMutation,
  useDeleteTrnAssetDocumentTrnAssetDocumentEventIdDeleteMutation,
  useGetTrnAssetDocumentTrnAssetDocumentEventIdGetQuery,
  useCreateTrnAssetMovmentTrnAssetMovmentPostMutation,
  useGetAllTrnAssetMovmentsTrnAssetMovmentGetQuery,
  useUpdateTrnAssetMovmentTrnAssetMovmentIdPutMutation,
  useDeleteTrnAssetMovmentTrnAssetMovmentIdDeleteMutation,
  useGetTrnAssetMovmentTrnAssetMovmentIdGetQuery,
  useGetAllTrnAssetMovmentEventGetQuery,
  useCreateTrnAssetMovmentTrnAssetMovmentEventPostMutation,
  useUpdateTrnAssetMovmentTrnAssetMovmentEventIdPutMutation,
  useDeleteTrnAssetMovmentTrnAssetMovmentEventIdDeleteMutation,
  useGetTrnAssetMovmentTrnAssetMovmentEventIdGetQuery,
  useCreateTrnAssetOwnershipTrnAssetOwnershipPostMutation,
  useGetAllTrnAssetOwnershipsTrnAssetOwnershipGetQuery,
  useUpdateTrnAssetOwnershipTrnAssetOwnershipIdPutMutation,
  useDeleteTrnAssetOwnershipTrnAssetOwnershipIdDeleteMutation,
  useGetTrnAssetOwnershipTrnAssetOwnershipIdGetQuery,
  useGetAllTrnAssetOwnershipEventGetQuery,
  useCreateTrnAssetOwnershipTrnAssetOwnershipEventPostMutation,
  useUpdateTrnAssetOwnershipTrnAssetOwnershipEventIdPutMutation,
  useDeleteTrnAssetOwnershipTrnAssetOwnershipEventIdDeleteMutation,
  useGetTrnAssetOwnershipTrnAssetOwnershipEventIdGetQuery,
  useCreateTrnAssetRosterTrnAssetRosterPostMutation,
  useGetAllTrnAssetRostersTrnAssetRosterGetQuery,
  useUpdateTrnAssetRosterTrnAssetRosterIdPutMutation,
  useDeleteTrnAssetRosterTrnAssetRosterIdDeleteMutation,
  useGetTrnAssetRosterTrnAssetRosterIdGetQuery,
  useGetAllTrnAssetRosterEventGetQuery,
  useCreateTrnAssetRosterTrnAssetRosterEventPostMutation,
  useUpdateTrnAssetRosterTrnAssetRosterEventIdPutMutation,
  useDeleteTrnAssetRosterTrnAssetRosterEventIdDeleteMutation,
  useGetTrnAssetRosterTrnAssetRosterEventIdGetQuery,
  useCreateTrnAssetSiteLinkingTrnAssetSiteLinkingPostMutation,
  useGetAllTrnAssetSiteLinkingsTrnAssetSiteLinkingGetQuery,
  useUpdateTrnAssetSiteLinkingTrnAssetSiteLinkingIdPutMutation,
  useDeleteTrnAssetSiteLinkingTrnAssetSiteLinkingIdDeleteMutation,
  useGetTrnAssetSiteLinkingTrnAssetSiteLinkingIdGetQuery,
  useGetAllTrnAssetSiteLinkingEventGetQuery,
  useCreateTrnAssetSiteLinkingTrnAssetSiteLinkingEventPostMutation,
  useUpdateTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdPutMutation,
  useDeleteTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdDeleteMutation,
  useGetTrnAssetSiteLinkingTrnAssetSiteLinkingEventIdGetQuery,
  useCreateTrnCounterlogTrnCounterlogPostMutation,
  useGetAllTrnCounterlogsTrnCounterlogGetQuery,
  useUpdateTrnCounterlogTrnCounterlogIdPutMutation,
  useDeleteTrnCounterlogTrnCounterlogIdDeleteMutation,
  useGetTrnCounterlogTrnCounterlogIdGetQuery,
  useGetAllTrnCounterlogEventGetQuery,
  useCreateTrnCounterlogTrnCounterlogEventPostMutation,
  useUpdateTrnCounterlogTrnCounterlogEventIdPutMutation,
  useDeleteTrnCounterlogTrnCounterlogEventIdDeleteMutation,
  useGetTrnCounterlogTrnCounterlogEventIdGetQuery,
  useCreateTrnDowntimeTrnDowntimePostMutation,
  useGetAllTrnDowntimesTrnDowntimeGetQuery,
  useUpdateTrnDowntimeTrnDowntimeIdPutMutation,
  useDeleteTrnDowntimeTrnDowntimeIdDeleteMutation,
  useGetTrnDowntimeTrnDowntimeIdGetQuery,
  useGetAllTrnDowntimeEventGetQuery,
  useCreateTrnDowntimeTrnDowntimeEventPostMutation,
  useUpdateTrnDowntimeTrnDowntimeEventIdPutMutation,
  useDeleteTrnDowntimeTrnDowntimeEventIdDeleteMutation,
  useGetTrnDowntimeTrnDowntimeEventIdGetQuery,
  useCreateTrnEngagementTrnEngagementPostMutation,
  useGetAllTrnEngagementsTrnEngagementGetQuery,
  useUpdateTrnEngagementTrnEngagementIdPutMutation,
  useDeleteTrnEngagementTrnEngagementIdDeleteMutation,
  useGetTrnEngagementTrnEngagementIdGetQuery,
  useGetAllTrnEngagementEventGetQuery,
  useCreateTrnEngagementTrnEngagementEventPostMutation,
  useUpdateTrnEngagementTrnEngagementEventIdPutMutation,
  useDeleteTrnEngagementTrnEngagementEventIdDeleteMutation,
  useGetTrnEngagementTrnEngagementEventIdGetQuery,
  useCreateTrnEntityWorkflowTrnEntityWorkflowPostMutation,
  useGetAllTrnEntityWorkflowsTrnEntityWorkflowGetQuery,
  useUpdateTrnEntityWorkflowTrnEntityWorkflowIdPutMutation,
  useDeleteTrnEntityWorkflowTrnEntityWorkflowIdDeleteMutation,
  useGetTrnEntityWorkflowTrnEntityWorkflowIdGetQuery,
  useGetAllTrnEntityWorkflowEventGetQuery,
  useCreateTrnEntityWorkflowTrnEntityWorkflowEventPostMutation,
  useUpdateTrnEntityWorkflowTrnEntityWorkflowEventIdPutMutation,
  useDeleteTrnEntityWorkflowTrnEntityWorkflowEventIdDeleteMutation,
  useGetTrnEntityWorkflowTrnEntityWorkflowEventIdGetQuery,
  useCreateTrnFsFuelIssueTrnFsFuelIssuePostMutation,
  useGetAllTrnFsFuelIssuesTrnFsFuelIssueGetQuery,
  useUpdateTrnFsFuelIssueTrnFsFuelIssueIdPutMutation,
  useDeleteTrnFsFuelIssueTrnFsFuelIssueIdDeleteMutation,
  useGetTrnFsFuelIssueTrnFsFuelIssueIdGetQuery,
  useGetAllTrnFsFuelIssueEventGetQuery,
  useCreateTrnFsFuelIssueTrnFsFuelIssueEventPostMutation,
  useUpdateTrnFsFuelIssueTrnFsFuelIssueEventIdPutMutation,
  useDeleteTrnFsFuelIssueTrnFsFuelIssueEventIdDeleteMutation,
  useGetTrnFsFuelIssueTrnFsFuelIssueEventIdGetQuery,
  useCreateTrnFsFuelReceiveTrnFsFuelReceivePostMutation,
  useGetAllTrnFsFuelReceivesTrnFsFuelReceiveGetQuery,
  useUpdateTrnFsFuelReceiveTrnFsFuelReceiveIdPutMutation,
  useDeleteTrnFsFuelReceiveTrnFsFuelReceiveIdDeleteMutation,
  useGetTrnFsFuelReceiveTrnFsFuelReceiveIdGetQuery,
  useGetAllTrnFsFuelReceiveEventGetQuery,
  useCreateTrnFsFuelReceiveTrnFsFuelReceiveEventPostMutation,
  useUpdateTrnFsFuelReceiveTrnFsFuelReceiveEventIdPutMutation,
  useDeleteTrnFsFuelReceiveTrnFsFuelReceiveEventIdDeleteMutation,
  useGetTrnFsFuelReceiveTrnFsFuelReceiveEventIdGetQuery,
  useCreateTrnFsFuelTransferTrnFsFuelTransferPostMutation,
  useGetAllTrnFsFuelTransfersTrnFsFuelTransferGetQuery,
  useUpdateTrnFsFuelTransferTrnFsFuelTransferIdPutMutation,
  useDeleteTrnFsFuelTransferTrnFsFuelTransferIdDeleteMutation,
  useGetTrnFsFuelTransferTrnFsFuelTransferIdGetQuery,
  useGetAllTrnFsFuelTransferEventGetQuery,
  useCreateTrnFsFuelTransferTrnFsFuelTransferEventPostMutation,
  useUpdateTrnFsFuelTransferTrnFsFuelTransferEventIdPutMutation,
  useDeleteTrnFsFuelTransferTrnFsFuelTransferEventIdDeleteMutation,
  useGetTrnFsFuelTransferTrnFsFuelTransferEventIdGetQuery,
  useCreateTrnFuelFeedinTrnFuelFeedinPostMutation,
  useGetAllTrnFuelFeedinsTrnFuelFeedinGetQuery,
  useUpdateTrnFuelFeedinTrnFuelFeedinIdPutMutation,
  useDeleteTrnFuelFeedinTrnFuelFeedinIdDeleteMutation,
  useGetTrnFuelFeedinTrnFuelFeedinIdGetQuery,
  useGetAllTrnFuelFeedinEventGetQuery,
  useCreateTrnFuelFeedinTrnFuelFeedinEventPostMutation,
  useUpdateTrnFuelFeedinTrnFuelFeedinEventIdPutMutation,
  useDeleteTrnFuelFeedinTrnFuelFeedinEventIdDeleteMutation,
  useGetTrnFuelFeedinTrnFuelFeedinEventIdGetQuery,
  useCreateTrnHrEmployeeTrnHrEmployeePostMutation,
  useGetAllTrnHrEmployeesTrnHrEmployeeGetQuery,
  useUpdateTrnHrEmployeeTrnHrEmployeeIdPutMutation,
  useDeleteTrnHrEmployeeTrnHrEmployeeIdDeleteMutation,
  useGetTrnHrEmployeeTrnHrEmployeeIdGetQuery,
  useGetAllTrnHrEmployeeEventGetQuery,
  useCreateTrnHrEmployeeTrnHrEmployeeEventPostMutation,
  useUpdateTrnHrEmployeeTrnHrEmployeeEventIdPutMutation,
  useDeleteTrnHrEmployeeTrnHrEmployeeEventIdDeleteMutation,
  useGetTrnHrEmployeeTrnHrEmployeeEventIdGetQuery,
  useCreateTrnHrEmployeeAssetTrnHrEmployeeAssetPostMutation,
  useGetAllTrnHrEmployeeAssetsTrnHrEmployeeAssetGetQuery,
  useUpdateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPutMutation,
  useDeleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDeleteMutation,
  useGetTrnHrEmployeeAssetTrnHrEmployeeAssetIdGetQuery,
  useGetAllTrnHrEmployeeAssetEventGetQuery,
  useCreateTrnHrEmployeeAssetTrnHrEmployeeAssetEventPostMutation,
  useUpdateTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdPutMutation,
  useDeleteTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdDeleteMutation,
  useGetTrnHrEmployeeAssetTrnHrEmployeeAssetEventIdGetQuery,
  useCreateTrnInvAllocationTrnInvAllocationPostMutation,
  useGetAllTrnInvAllocationsTrnInvAllocationGetQuery,
  useUpdateTrnInvAllocationTrnInvAllocationIdPutMutation,
  useDeleteTrnInvAllocationTrnInvAllocationIdDeleteMutation,
  useGetTrnInvAllocationTrnInvAllocationIdGetQuery,
  useGetAllTrnInvAllocationEventGetQuery,
  useCreateTrnInvAllocationTrnInvAllocationEventPostMutation,
  useUpdateTrnInvAllocationTrnInvAllocationEventIdPutMutation,
  useDeleteTrnInvAllocationTrnInvAllocationEventIdDeleteMutation,
  useGetTrnInvAllocationTrnInvAllocationEventIdGetQuery,
  useCreateTrnInvConsumptionTrnInvConsumptionPostMutation,
  useGetAllTrnInvConsumptionsTrnInvConsumptionGetQuery,
  useUpdateTrnInvConsumptionTrnInvConsumptionIdPutMutation,
  useDeleteTrnInvConsumptionTrnInvConsumptionIdDeleteMutation,
  useGetTrnInvConsumptionTrnInvConsumptionIdGetQuery,
  useGetAllTrnInvConsumptionEventGetQuery,
  useCreateTrnInvConsumptionTrnInvConsumptionEventPostMutation,
  useUpdateTrnInvConsumptionTrnInvConsumptionEventIdPutMutation,
  useDeleteTrnInvConsumptionTrnInvConsumptionEventIdDeleteMutation,
  useGetTrnInvConsumptionTrnInvConsumptionEventIdGetQuery,
  useCreateTrnInvConsumptionItemsTrnInvConsumptionItemsPostMutation,
  useGetAllTrnInvConsumptionItemssTrnInvConsumptionItemsGetQuery,
  useUpdateTrnInvConsumptionItemsTrnInvConsumptionItemsIdPutMutation,
  useDeleteTrnInvConsumptionItemsTrnInvConsumptionItemsIdDeleteMutation,
  useGetTrnInvConsumptionItemsTrnInvConsumptionItemsIdGetQuery,
  useGetAllTrnInvConsumptionItemsEventGetQuery,
  useCreateTrnInvConsumptionItemsTrnInvConsumptionItemsEventPostMutation,
  useUpdateTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdPutMutation,
  useDeleteTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdDeleteMutation,
  useGetTrnInvConsumptionItemsTrnInvConsumptionItemsEventIdGetQuery,
  useCreateTrnInvItemTrnInvItemPostMutation,
  useGetAllTrnInvItemsTrnInvItemGetQuery,
  useUpdateTrnInvItemTrnInvItemIdPutMutation,
  useDeleteTrnInvItemTrnInvItemIdDeleteMutation,
  useGetTrnInvItemTrnInvItemIdGetQuery,
  useGetAllTrnInvItemEventGetQuery,
  useCreateTrnInvItemTrnInvItemEventPostMutation,
  useUpdateTrnInvItemTrnInvItemEventIdPutMutation,
  useDeleteTrnInvItemTrnInvItemEventIdDeleteMutation,
  useGetTrnInvItemTrnInvItemEventIdGetQuery,
  useCreateTrnInvItemAdjustmentTrnInvItemAdjustmentPostMutation,
  useGetAllTrnInvItemAdjustmentsTrnInvItemAdjustmentGetQuery,
  useUpdateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPutMutation,
  useDeleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDeleteMutation,
  useGetTrnInvItemAdjustmentTrnInvItemAdjustmentIdGetQuery,
  useGetAllTrnInvItemAdjustmentEventGetQuery,
  useCreateTrnInvItemAdjustmentTrnInvItemAdjustmentEventPostMutation,
  useUpdateTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdPutMutation,
  useDeleteTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdDeleteMutation,
  useGetTrnInvItemAdjustmentTrnInvItemAdjustmentEventIdGetQuery,
  useCreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlPostMutation,
  useGetAllTrnInvItemAdjustmentDtlsTrnInvItemAdjustmentDtlGetQuery,
  useUpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdPutMutation,
  useDeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdDeleteMutation,
  useGetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdGetQuery,
  useGetAllTrnInvItemAdjustmentDtlEventGetQuery,
  useCreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventPostMutation,
  useUpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdPutMutation,
  useDeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdDeleteMutation,
  useGetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlEventIdGetQuery,
  useCreateTrnInvItemAllocationTrnInvItemAllocationPostMutation,
  useGetAllTrnInvItemAllocationsTrnInvItemAllocationGetQuery,
  useUpdateTrnInvItemAllocationTrnInvItemAllocationIdPutMutation,
  useDeleteTrnInvItemAllocationTrnInvItemAllocationIdDeleteMutation,
  useGetTrnInvItemAllocationTrnInvItemAllocationIdGetQuery,
  useGetAllTrnInvItemAllocationEventGetQuery,
  useCreateTrnInvItemAllocationTrnInvItemAllocationEventPostMutation,
  useUpdateTrnInvItemAllocationTrnInvItemAllocationEventIdPutMutation,
  useDeleteTrnInvItemAllocationTrnInvItemAllocationEventIdDeleteMutation,
  useGetTrnInvItemAllocationTrnInvItemAllocationEventIdGetQuery,
  useCreateTrnInvItemDemandTrnInvItemDemandPostMutation,
  useGetAllTrnInvItemDemandsTrnInvItemDemandGetQuery,
  useUpdateTrnInvItemDemandTrnInvItemDemandIdPutMutation,
  useDeleteTrnInvItemDemandTrnInvItemDemandIdDeleteMutation,
  useGetTrnInvItemDemandTrnInvItemDemandIdGetQuery,
  useGetAllTrnInvItemDemandEventGetQuery,
  useCreateTrnInvItemDemandTrnInvItemDemandEventPostMutation,
  useUpdateTrnInvItemDemandTrnInvItemDemandEventIdPutMutation,
  useDeleteTrnInvItemDemandTrnInvItemDemandEventIdDeleteMutation,
  useGetTrnInvItemDemandTrnInvItemDemandEventIdGetQuery,
  useCreateTrnInvItemDemandItemsTrnInvItemDemandItemsPostMutation,
  useGetAllTrnInvItemDemandItemssTrnInvItemDemandItemsGetQuery,
  useUpdateTrnInvItemDemandItemsTrnInvItemDemandItemsIdPutMutation,
  useDeleteTrnInvItemDemandItemsTrnInvItemDemandItemsIdDeleteMutation,
  useGetTrnInvItemDemandItemsTrnInvItemDemandItemsIdGetQuery,
  useGetAllTrnInvItemDemandItemsEventGetQuery,
  useCreateTrnInvItemDemandItemsTrnInvItemDemandItemsEventPostMutation,
  useUpdateTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdPutMutation,
  useDeleteTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdDeleteMutation,
  useGetTrnInvItemDemandItemsTrnInvItemDemandItemsEventIdGetQuery,
  useCreateTrnInvItemTransferTrnInvItemTransferPostMutation,
  useGetAllTrnInvItemTransfersTrnInvItemTransferGetQuery,
  useUpdateTrnInvItemTransferTrnInvItemTransferIdPutMutation,
  useDeleteTrnInvItemTransferTrnInvItemTransferIdDeleteMutation,
  useGetTrnInvItemTransferTrnInvItemTransferIdGetQuery,
  useGetAllTrnInvItemTransferEventGetQuery,
  useCreateTrnInvItemTransferTrnInvItemTransferEventPostMutation,
  useUpdateTrnInvItemTransferTrnInvItemTransferEventIdPutMutation,
  useDeleteTrnInvItemTransferTrnInvItemTransferEventIdDeleteMutation,
  useGetTrnInvItemTransferTrnInvItemTransferEventIdGetQuery,
  useCreateTrnInvItemTransferDtlTrnInvItemTransferDtlPostMutation,
  useGetAllTrnInvItemTransferDtlsTrnInvItemTransferDtlGetQuery,
  useUpdateTrnInvItemTransferDtlTrnInvItemTransferDtlIdPutMutation,
  useDeleteTrnInvItemTransferDtlTrnInvItemTransferDtlIdDeleteMutation,
  useGetTrnInvItemTransferDtlTrnInvItemTransferDtlIdGetQuery,
  useGetAllTrnInvItemTransferDtlEventGetQuery,
  useCreateTrnInvItemTransferDtlTrnInvItemTransferDtlEventPostMutation,
  useUpdateTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdPutMutation,
  useDeleteTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdDeleteMutation,
  useGetTrnInvItemTransferDtlTrnInvItemTransferDtlEventIdGetQuery,
  useCreateTrnInvLogisticsTrnInvLogisticsPostMutation,
  useGetAllTrnInvLogisticssTrnInvLogisticsGetQuery,
  useUpdateTrnInvLogisticsTrnInvLogisticsIdPutMutation,
  useDeleteTrnInvLogisticsTrnInvLogisticsIdDeleteMutation,
  useGetTrnInvLogisticsTrnInvLogisticsIdGetQuery,
  useGetAllTrnInvLogisticsEventGetQuery,
  useCreateTrnInvLogisticsTrnInvLogisticsEventPostMutation,
  useUpdateTrnInvLogisticsTrnInvLogisticsEventIdPutMutation,
  useDeleteTrnInvLogisticsTrnInvLogisticsEventIdDeleteMutation,
  useGetTrnInvLogisticsTrnInvLogisticsEventIdGetQuery,
  useCreateTrnInvLogisticsDtlTrnInvLogisticsDtlPostMutation,
  useGetAllTrnInvLogisticsDtlsTrnInvLogisticsDtlGetQuery,
  useUpdateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPutMutation,
  useDeleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDeleteMutation,
  useGetTrnInvLogisticsDtlTrnInvLogisticsDtlIdGetQuery,
  useGetAllTrnInvLogisticsDtlEventGetQuery,
  useCreateTrnInvLogisticsDtlTrnInvLogisticsDtlEventPostMutation,
  useUpdateTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdPutMutation,
  useDeleteTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdDeleteMutation,
  useGetTrnInvLogisticsDtlTrnInvLogisticsDtlEventIdGetQuery,
  useCreateTrnInvPurchaseTrnInvPurchasePostMutation,
  useGetAllTrnInvPurchasesTrnInvPurchaseGetQuery,
  useUpdateTrnInvPurchaseTrnInvPurchaseIdPutMutation,
  useDeleteTrnInvPurchaseTrnInvPurchaseIdDeleteMutation,
  useGetTrnInvPurchaseTrnInvPurchaseIdGetQuery,
  useGetAllTrnInvPurchaseEventGetQuery,
  useCreateTrnInvPurchaseTrnInvPurchaseEventPostMutation,
  useUpdateTrnInvPurchaseTrnInvPurchaseEventIdPutMutation,
  useDeleteTrnInvPurchaseTrnInvPurchaseEventIdDeleteMutation,
  useGetTrnInvPurchaseTrnInvPurchaseEventIdGetQuery,
  useCreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentPostMutation,
  useGetAllTrnInvPurchaseDocumentsTrnInvPurchaseDocumentGetQuery,
  useUpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdPutMutation,
  useDeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdDeleteMutation,
  useGetTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdGetQuery,
  useGetAllTrnInvPurchaseDocumentEventGetQuery,
  useCreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventPostMutation,
  useUpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdPutMutation,
  useDeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdDeleteMutation,
  useGetTrnInvPurchaseDocumentTrnInvPurchaseDocumentEventIdGetQuery,
  useCreateTrnInvPurchaseItemsTrnInvPurchaseItemsPostMutation,
  useGetAllTrnInvPurchaseItemssTrnInvPurchaseItemsGetQuery,
  useUpdateTrnInvPurchaseItemsTrnInvPurchaseItemsIdPutMutation,
  useDeleteTrnInvPurchaseItemsTrnInvPurchaseItemsIdDeleteMutation,
  useGetTrnInvPurchaseItemsTrnInvPurchaseItemsIdGetQuery,
  useGetAllTrnInvPurchaseItemsEventGetQuery,
  useCreateTrnInvPurchaseItemsTrnInvPurchaseItemsEventPostMutation,
  useUpdateTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdPutMutation,
  useDeleteTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdDeleteMutation,
  useGetTrnInvPurchaseItemsTrnInvPurchaseItemsEventIdGetQuery,
  useCreateTrnInvPurchaseReqTrnInvPurchaseReqPostMutation,
  useGetAllTrnInvPurchaseReqsTrnInvPurchaseReqGetQuery,
  useUpdateTrnInvPurchaseReqTrnInvPurchaseReqIdPutMutation,
  useDeleteTrnInvPurchaseReqTrnInvPurchaseReqIdDeleteMutation,
  useGetTrnInvPurchaseReqTrnInvPurchaseReqIdGetQuery,
  useGetAllTrnInvPurchaseReqEventGetQuery,
  useCreateTrnInvPurchaseReqTrnInvPurchaseReqEventPostMutation,
  useUpdateTrnInvPurchaseReqTrnInvPurchaseReqEventIdPutMutation,
  useDeleteTrnInvPurchaseReqTrnInvPurchaseReqEventIdDeleteMutation,
  useGetTrnInvPurchaseReqTrnInvPurchaseReqEventIdGetQuery,
  useCreateTrnProductivityTrnProductivityPostMutation,
  useGetAllTrnProductivitysTrnProductivityGetQuery,
  useUpdateTrnProductivityTrnProductivityIdPutMutation,
  useDeleteTrnProductivityTrnProductivityIdDeleteMutation,
  useGetTrnProductivityTrnProductivityIdGetQuery,
  useGetAllTrnProductivityEventGetQuery,
  useCreateTrnProductivityTrnProductivityEventPostMutation,
  useUpdateTrnProductivityTrnProductivityEventIdPutMutation,
  useDeleteTrnProductivityTrnProductivityEventIdDeleteMutation,
  useGetTrnProductivityTrnProductivityEventIdGetQuery,
  useCreateTrnPurchaseOrderTrnPurchaseOrderPostMutation,
  useGetAllTrnPurchaseOrdersTrnPurchaseOrderGetQuery,
  useUpdateTrnPurchaseOrderTrnPurchaseOrderIdPutMutation,
  useDeleteTrnPurchaseOrderTrnPurchaseOrderIdDeleteMutation,
  useGetTrnPurchaseOrderTrnPurchaseOrderIdGetQuery,
  useGetAllTrnPurchaseOrderEventGetQuery,
  useCreateTrnPurchaseOrderTrnPurchaseOrderEventPostMutation,
  useUpdateTrnPurchaseOrderTrnPurchaseOrderEventIdPutMutation,
  useDeleteTrnPurchaseOrderTrnPurchaseOrderEventIdDeleteMutation,
  useGetTrnPurchaseOrderTrnPurchaseOrderEventIdGetQuery,
  useCreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsPostMutation,
  useGetAllTrnPurchaseOrderItemssTrnPurchaseOrderItemsGetQuery,
  useUpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdPutMutation,
  useDeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdDeleteMutation,
  useGetTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdGetQuery,
  useGetAllTrnPurchaseOrderItemsEventGetQuery,
  useCreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventPostMutation,
  useUpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdPutMutation,
  useDeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdDeleteMutation,
  useGetTrnPurchaseOrderItemsTrnPurchaseOrderItemsEventIdGetQuery,
  useCreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsPostMutation,
  useGetAllTrnPurchaseOrderTermssTrnPurchaseOrderTermsGetQuery,
  useUpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPutMutation,
  useDeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDeleteMutation,
  useGetTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGetQuery,
  useGetAllTrnPurchaseOrderTermsEventGetQuery,
  useCreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventPostMutation,
  useUpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdPutMutation,
  useDeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdDeleteMutation,
  useGetTrnPurchaseOrderTermsTrnPurchaseOrderTermsEventIdGetQuery,
  useCreateTrnPurchaseReqItemsTrnPurchaseReqItemsPostMutation,
  useGetAllTrnPurchaseReqItemssTrnPurchaseReqItemsGetQuery,
  useUpdateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPutMutation,
  useDeleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDeleteMutation,
  useGetTrnPurchaseReqItemsTrnPurchaseReqItemsIdGetQuery,
  useGetAllTrnPurchaseReqItemsEventGetQuery,
  useCreateTrnPurchaseReqItemsTrnPurchaseReqItemsEventPostMutation,
  useUpdateTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdPutMutation,
  useDeleteTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdDeleteMutation,
  useGetTrnPurchaseReqItemsTrnPurchaseReqItemsEventIdGetQuery,
  useCreateTrnRoutineServiceCheckTrnRoutineServiceCheckPostMutation,
  useGetAllTrnRoutineServiceChecksTrnRoutineServiceCheckGetQuery,
  useUpdateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPutMutation,
  useDeleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDeleteMutation,
  useGetTrnRoutineServiceCheckTrnRoutineServiceCheckIdGetQuery,
  useGetAllTrnRoutineServiceCheckEventGetQuery,
  useCreateTrnRoutineServiceCheckTrnRoutineServiceCheckEventPostMutation,
  useUpdateTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdPutMutation,
  useDeleteTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdDeleteMutation,
  useGetTrnRoutineServiceCheckTrnRoutineServiceCheckEventIdGetQuery,
  useCreateTrnShiftFuelOpeningTrnShiftFuelOpeningPostMutation,
  useGetAllTrnShiftFuelOpeningsTrnShiftFuelOpeningGetQuery,
  useUpdateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPutMutation,
  useDeleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDeleteMutation,
  useGetTrnShiftFuelOpeningTrnShiftFuelOpeningIdGetQuery,
  useGetAllTrnShiftFuelOpeningEventGetQuery,
  useCreateTrnShiftFuelOpeningTrnShiftFuelOpeningEventPostMutation,
  useUpdateTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdPutMutation,
  useDeleteTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdDeleteMutation,
  useGetTrnShiftFuelOpeningTrnShiftFuelOpeningEventIdGetQuery,
  useCreateTrnTicketTrnTicketPostMutation,
  useGetAllTrnTicketsTrnTicketGetQuery,
  useUpdateTrnTicketTrnTicketIdPutMutation,
  useDeleteTrnTicketTrnTicketIdDeleteMutation,
  useGetTrnTicketTrnTicketIdGetQuery,
  useGetAllTrnTicketEventGetQuery,
  useCreateTrnTicketTrnTicketEventPostMutation,
  useUpdateTrnTicketTrnTicketEventIdPutMutation,
  useDeleteTrnTicketTrnTicketEventIdDeleteMutation,
  useGetTrnTicketTrnTicketEventIdGetQuery,
  useCreateTrnTicketDocumentsTrnTicketDocumentsPostMutation,
  useGetAllTrnTicketDocumentssTrnTicketDocumentsGetQuery,
  useUpdateTrnTicketDocumentsTrnTicketDocumentsIdPutMutation,
  useDeleteTrnTicketDocumentsTrnTicketDocumentsIdDeleteMutation,
  useGetTrnTicketDocumentsTrnTicketDocumentsIdGetQuery,
  useGetAllTrnTicketDocumentsEventGetQuery,
  useCreateTrnTicketDocumentsTrnTicketDocumentsEventPostMutation,
  useUpdateTrnTicketDocumentsTrnTicketDocumentsEventIdPutMutation,
  useDeleteTrnTicketDocumentsTrnTicketDocumentsEventIdDeleteMutation,
  useGetTrnTicketDocumentsTrnTicketDocumentsEventIdGetQuery,
  useCreateTrnWarehouseIndentTrnWarehouseIndentPostMutation,
  useGetAllTrnWarehouseIndentsTrnWarehouseIndentGetQuery,
  useUpdateTrnWarehouseIndentTrnWarehouseIndentIdPutMutation,
  useDeleteTrnWarehouseIndentTrnWarehouseIndentIdDeleteMutation,
  useGetTrnWarehouseIndentTrnWarehouseIndentIdGetQuery,
  useGetAllTrnWarehouseIndentEventGetQuery,
  useCreateTrnWarehouseIndentTrnWarehouseIndentEventPostMutation,
  useUpdateTrnWarehouseIndentTrnWarehouseIndentEventIdPutMutation,
  useDeleteTrnWarehouseIndentTrnWarehouseIndentEventIdDeleteMutation,
  useGetTrnWarehouseIndentTrnWarehouseIndentEventIdGetQuery,
  useCreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsPostMutation,
  useGetAllTrnWarehouseIndentItemssTrnWarehouseIndentItemsGetQuery,
  useUpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdPutMutation,
  useDeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdDeleteMutation,
  useGetTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdGetQuery,
  useGetAllTrnWarehouseIndentItemsEventGetQuery,
  useCreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventPostMutation,
  useUpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdPutMutation,
  useDeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdDeleteMutation,
  useGetTrnWarehouseIndentItemsTrnWarehouseIndentItemsEventIdGetQuery,
  useListRolesRolesModulesGetQuery,
  useCreateRoleRolesPostMutation,
  useListRolesRolesGetQuery,
  useGetRoleRolesRoleIdGetQuery,
  useUpdateRoleRolesRoleIdPutMutation,
  useDeleteRoleRolesRoleIdDeleteMutation,
  useCreateRolePermissionRolesRolePermissionsPostMutation,
  useGetSubscriptionsIdGetQuery,
  useGetAllSubscriptionSubscriptionsGetQuery,
  useGetSubscriptionsIdFeaturesGetQuery,
  useGroupUpdateTenantsGroupUpdatePostMutation,
  useGetTenantUsersTenantsIdUsersGetQuery,
  useUpdateTenantUserTenantsIdUsersUserIdPatchMutation,
  useGetTenantSubscriptionTenantsSubscriptionGetQuery,
  useGenerateApiKeyTenantsApiKeyPostMutation,
  useGetApiKeyTenantsViewApiKeyGetQuery,
  useCreateUserInvitationsPostMutation,
  useGetAllUserInvitationUserInvitationsGetQuery,
  useGetUserInvitationsIdGetQuery,
  useUpdateUserInvitationsIdPutMutation,
  useDeleteUserInvitationsIdDeleteMutation,
  useGetProfileUsersProfileGetQuery,
  useUpdateProfileUsersProfilePutMutation,
  useUpdateProfilephotoUsersProfilephotoPostMutation,
  useGetTenantUsersTenantGetQuery,
  useUpdateTenantUsersTenantPutMutation,
  useGetTenantownerUsersTenantownerGetQuery,
  useGetAllTenantUsersTenantsGetQuery,
  useAssignRoleUsersRolePostMutation,
  useGetAllRoleUsersRoleGetQuery,
  useDeleteRoleUsersRoleDeleteMutation,
  useCreateUsersDevicetokenPostMutation,
  useGetAllDeviceTokenUsersDevicetokensGetQuery,
  useSendOtpUsersSendOtpPostMutation,
  useSendOtpUsersSendOtpByMailPostMutation,
  useVerifyOtpUsersVerifyOtpPostMutation,
  useValidateTokenAndRegisterUsersValidateTokenPostMutation,
  useGetRolePermissionUsersUserIdRolePermissionGetQuery,
  useCreateResourcesPostMutation,
  useGetAllResourceResourcesGetQuery,
  useGetResourcesIdGetQuery,
  useUpdateResourcesIdPutMutation,
  useDeleteResourcesIdDeleteMutation,
  useCreateTeamsPostMutation,
  useGetAllTeamTeamsGetQuery,
  useGetTeamsIdGetQuery,
  useUpdateTeamsIdPutMutation,
  useDeleteTeamsIdDeleteMutation,
  useCreateTeamResourcesPostMutation,
  useGetAllTeamResourceTeamResourcesGetQuery,
  useDeleteTeamResourcesIdDeleteMutation,
  useActivateDeactivateTeamMembersTeamResourcesActivateDeactivatePostMutation
} = injectedRtkApi;
