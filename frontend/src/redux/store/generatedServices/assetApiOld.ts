import { assetBaseApi as api } from '../base/assetBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllAssetMatrixGet: build.query<
      GetAllAssetMatrixGetApiResponse,
      GetAllAssetMatrixGetApiArg
    >({
      query: () => ({ url: `/asset_matrix/` })
    }),
    createAssetMatrixAssetMatrixPost: build.mutation<
      CreateAssetMatrixAssetMatrixPostApiResponse,
      CreateAssetMatrixAssetMatrixPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix/`,
        method: 'POST',
        body: queryArg.assetMatrixInsert
      })
    }),
    updateAssetMatrixAssetMatrixIdPut: build.mutation<
      UpdateAssetMatrixAssetMatrixIdPutApiResponse,
      UpdateAssetMatrixAssetMatrixIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixUpdate
      })
    }),
    deleteAssetMatrixAssetMatrixIdDelete: build.mutation<
      DeleteAssetMatrixAssetMatrixIdDeleteApiResponse,
      DeleteAssetMatrixAssetMatrixIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getAssetMatrixAssetMatrixIdGet: build.query<
      GetAssetMatrixAssetMatrixIdGetApiResponse,
      GetAssetMatrixAssetMatrixIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/asset_matrix/${queryArg.id}` })
    }),
    getAllassetMatrixEventGet: build.query<
      GetAllassetMatrixEventGetApiResponse,
      GetAllassetMatrixEventGetApiArg
    >({
      query: () => ({ url: `asset_matrix/event/` })
    }),
    createAssetMatrixassetMatrixEventPost: build.mutation<
      CreateAssetMatrixassetMatrixEventPostApiResponse,
      CreateAssetMatrixassetMatrixEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_matrix/event/`,
        method: 'POST',
        body: queryArg.assetMatrixInsert
      })
    }),
    updateAssetMatrixassetMatrixEventIdPut: build.mutation<
      UpdateAssetMatrixassetMatrixEventIdPutApiResponse,
      UpdateAssetMatrixassetMatrixEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_matrix/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixUpdate
      })
    }),
    deleteAssetMatrixassetMatrixEventIdDelete: build.mutation<
      DeleteAssetMatrixassetMatrixEventIdDeleteApiResponse,
      DeleteAssetMatrixassetMatrixEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_matrix/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getAssetMatrixassetMatrixEventIdGet: build.query<
      GetAssetMatrixassetMatrixEventIdGetApiResponse,
      GetAssetMatrixassetMatrixEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `asset_matrix/event/${queryArg.id}` })
    }),
    getAllAssetMatrixDocumentGet: build.query<
      GetAllAssetMatrixDocumentGetApiResponse,
      GetAllAssetMatrixDocumentGetApiArg
    >({
      query: () => ({ url: `/asset_matrix_document/` })
    }),
    createAssetMatrixDocumentAssetMatrixDocumentPost: build.mutation<
      CreateAssetMatrixDocumentAssetMatrixDocumentPostApiResponse,
      CreateAssetMatrixDocumentAssetMatrixDocumentPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_document/`,
        method: 'POST',
        body: queryArg.assetMatrixDocumentInsert
      })
    }),
    updateAssetMatrixDocumentAssetMatrixDocumentIdPut: build.mutation<
      UpdateAssetMatrixDocumentAssetMatrixDocumentIdPutApiResponse,
      UpdateAssetMatrixDocumentAssetMatrixDocumentIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_document/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixDocumentUpdate
      })
    }),
    deleteAssetMatrixDocumentAssetMatrixDocumentIdDelete: build.mutation<
      DeleteAssetMatrixDocumentAssetMatrixDocumentIdDeleteApiResponse,
      DeleteAssetMatrixDocumentAssetMatrixDocumentIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_document/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getAssetMatrixDocumentAssetMatrixDocumentIdGet: build.query<
      GetAssetMatrixDocumentAssetMatrixDocumentIdGetApiResponse,
      GetAssetMatrixDocumentAssetMatrixDocumentIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_document/${queryArg.id}`
      })
    }),
    getAllassetMatrixDocumentEventGet: build.query<
      GetAllassetMatrixDocumentEventGetApiResponse,
      GetAllassetMatrixDocumentEventGetApiArg
    >({
      query: () => ({ url: `asset_matrix_document/event/` })
    }),
    createAssetMatrixDocumentassetMatrixDocumentEventPost: build.mutation<
      CreateAssetMatrixDocumentassetMatrixDocumentEventPostApiResponse,
      CreateAssetMatrixDocumentassetMatrixDocumentEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_matrix_document/event/`,
        method: 'POST',
        body: queryArg.assetMatrixDocumentInsert
      })
    }),
    updateAssetMatrixDocumentassetMatrixDocumentEventIdPut: build.mutation<
      UpdateAssetMatrixDocumentassetMatrixDocumentEventIdPutApiResponse,
      UpdateAssetMatrixDocumentassetMatrixDocumentEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_matrix_document/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixDocumentUpdate
      })
    }),
    deleteAssetMatrixDocumentassetMatrixDocumentEventIdDelete: build.mutation<
      DeleteAssetMatrixDocumentassetMatrixDocumentEventIdDeleteApiResponse,
      DeleteAssetMatrixDocumentassetMatrixDocumentEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_matrix_document/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getAssetMatrixDocumentassetMatrixDocumentEventIdGet: build.query<
      GetAssetMatrixDocumentassetMatrixDocumentEventIdGetApiResponse,
      GetAssetMatrixDocumentassetMatrixDocumentEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_matrix_document/event/${queryArg.id}`
      })
    }),
    getAllAssetMatrixSectionGet: build.query<
      GetAllAssetMatrixSectionGetApiResponse,
      GetAllAssetMatrixSectionGetApiArg
    >({
      query: () => ({ url: `/asset_matrix_section/` })
    }),
    createAssetMatrixSectionAssetMatrixSectionPost: build.mutation<
      CreateAssetMatrixSectionAssetMatrixSectionPostApiResponse,
      CreateAssetMatrixSectionAssetMatrixSectionPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_section/`,
        method: 'POST',
        body: queryArg.assetMatrixSectionInsert
      })
    }),
    updateAssetMatrixSectionAssetMatrixSectionIdPut: build.mutation<
      UpdateAssetMatrixSectionAssetMatrixSectionIdPutApiResponse,
      UpdateAssetMatrixSectionAssetMatrixSectionIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_section/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixSectionUpdate
      })
    }),
    deleteAssetMatrixSectionAssetMatrixSectionIdDelete: build.mutation<
      DeleteAssetMatrixSectionAssetMatrixSectionIdDeleteApiResponse,
      DeleteAssetMatrixSectionAssetMatrixSectionIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_section/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getAssetMatrixSectionAssetMatrixSectionIdGet: build.query<
      GetAssetMatrixSectionAssetMatrixSectionIdGetApiResponse,
      GetAssetMatrixSectionAssetMatrixSectionIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_section/${queryArg.id}`
      })
    }),
    getAllassetMatrixSectionEventGet: build.query<
      GetAllassetMatrixSectionEventGetApiResponse,
      GetAllassetMatrixSectionEventGetApiArg
    >({
      query: () => ({ url: `asset_matrix_section/event/` })
    }),
    createAssetMatrixSectionassetMatrixSectionEventPost: build.mutation<
      CreateAssetMatrixSectionassetMatrixSectionEventPostApiResponse,
      CreateAssetMatrixSectionassetMatrixSectionEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_matrix_section/event/`,
        method: 'POST',
        body: queryArg.assetMatrixSectionInsert
      })
    }),
    updateAssetMatrixSectionassetMatrixSectionEventIdPut: build.mutation<
      UpdateAssetMatrixSectionassetMatrixSectionEventIdPutApiResponse,
      UpdateAssetMatrixSectionassetMatrixSectionEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_matrix_section/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixSectionUpdate
      })
    }),
    deleteAssetMatrixSectionassetMatrixSectionEventIdDelete: build.mutation<
      DeleteAssetMatrixSectionassetMatrixSectionEventIdDeleteApiResponse,
      DeleteAssetMatrixSectionassetMatrixSectionEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_matrix_section/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getAssetMatrixSectionassetMatrixSectionEventIdGet: build.query<
      GetAssetMatrixSectionassetMatrixSectionEventIdGetApiResponse,
      GetAssetMatrixSectionassetMatrixSectionEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_matrix_section/event/${queryArg.id}`
      })
    }),
    getAllAssetMatrixSubSectionGet: build.query<
      GetAllAssetMatrixSubSectionGetApiResponse,
      GetAllAssetMatrixSubSectionGetApiArg
    >({
      query: () => ({ url: `/asset_matrix_sub_section/` })
    }),
    createAssetMatrixSubSectionAssetMatrixSubSectionPost: build.mutation<
      CreateAssetMatrixSubSectionAssetMatrixSubSectionPostApiResponse,
      CreateAssetMatrixSubSectionAssetMatrixSubSectionPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_sub_section/`,
        method: 'POST',
        body: queryArg.assetMatrixSubSectionInsert
      })
    }),
    updateAssetMatrixSubSectionAssetMatrixSubSectionIdPut: build.mutation<
      UpdateAssetMatrixSubSectionAssetMatrixSubSectionIdPutApiResponse,
      UpdateAssetMatrixSubSectionAssetMatrixSubSectionIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_sub_section/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixSubSectionUpdate
      })
    }),
    deleteAssetMatrixSubSectionAssetMatrixSubSectionIdDelete: build.mutation<
      DeleteAssetMatrixSubSectionAssetMatrixSubSectionIdDeleteApiResponse,
      DeleteAssetMatrixSubSectionAssetMatrixSubSectionIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_sub_section/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getAssetMatrixSubSectionAssetMatrixSubSectionIdGet: build.query<
      GetAssetMatrixSubSectionAssetMatrixSubSectionIdGetApiResponse,
      GetAssetMatrixSubSectionAssetMatrixSubSectionIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_matrix_sub_section/${queryArg.id}`
      })
    }),
    getAllassetMatrixSubSectionEventGet: build.query<
      GetAllassetMatrixSubSectionEventGetApiResponse,
      GetAllassetMatrixSubSectionEventGetApiArg
    >({
      query: () => ({ url: `asset_matrix_sub_section/event/` })
    }),
    createAssetMatrixSubSectionassetMatrixSubSectionEventPost: build.mutation<
      CreateAssetMatrixSubSectionassetMatrixSubSectionEventPostApiResponse,
      CreateAssetMatrixSubSectionassetMatrixSubSectionEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_matrix_sub_section/event/`,
        method: 'POST',
        body: queryArg.assetMatrixSubSectionInsert
      })
    }),
    updateAssetMatrixSubSectionassetMatrixSubSectionEventIdPut: build.mutation<
      UpdateAssetMatrixSubSectionassetMatrixSubSectionEventIdPutApiResponse,
      UpdateAssetMatrixSubSectionassetMatrixSubSectionEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_matrix_sub_section/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetMatrixSubSectionUpdate
      })
    }),
    deleteAssetMatrixSubSectionassetMatrixSubSectionEventIdDelete:
      build.mutation<
        DeleteAssetMatrixSubSectionassetMatrixSubSectionEventIdDeleteApiResponse,
        DeleteAssetMatrixSubSectionassetMatrixSubSectionEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `asset_matrix_sub_section/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getAssetMatrixSubSectionassetMatrixSubSectionEventIdGet: build.query<
      GetAssetMatrixSubSectionassetMatrixSubSectionEventIdGetApiResponse,
      GetAssetMatrixSubSectionassetMatrixSubSectionEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_matrix_sub_section/event/${queryArg.id}`
      })
    }),
    getAllAssetServiceCheckListGet: build.query<
      GetAllAssetServiceCheckListGetApiResponse,
      GetAllAssetServiceCheckListGetApiArg
    >({
      query: () => ({ url: `/asset_service_check_list/` })
    }),
    createAssetServiceCheckListAssetServiceCheckListPost: build.mutation<
      CreateAssetServiceCheckListAssetServiceCheckListPostApiResponse,
      CreateAssetServiceCheckListAssetServiceCheckListPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list/`,
        method: 'POST',
        body: queryArg.assetServiceCheckListInsert
      })
    }),
    updateAssetServiceCheckListAssetServiceCheckListIdPut: build.mutation<
      UpdateAssetServiceCheckListAssetServiceCheckListIdPutApiResponse,
      UpdateAssetServiceCheckListAssetServiceCheckListIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetServiceCheckListUpdate
      })
    }),
    deleteAssetServiceCheckListAssetServiceCheckListIdDelete: build.mutation<
      DeleteAssetServiceCheckListAssetServiceCheckListIdDeleteApiResponse,
      DeleteAssetServiceCheckListAssetServiceCheckListIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getAssetServiceCheckListAssetServiceCheckListIdGet: build.query<
      GetAssetServiceCheckListAssetServiceCheckListIdGetApiResponse,
      GetAssetServiceCheckListAssetServiceCheckListIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list/${queryArg.id}`
      })
    }),
    getAllassetServiceCheckListEventGet: build.query<
      GetAllassetServiceCheckListEventGetApiResponse,
      GetAllassetServiceCheckListEventGetApiArg
    >({
      query: () => ({ url: `asset_service_check_list/event/` })
    }),
    createAssetServiceCheckListassetServiceCheckListEventPost: build.mutation<
      CreateAssetServiceCheckListassetServiceCheckListEventPostApiResponse,
      CreateAssetServiceCheckListassetServiceCheckListEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_service_check_list/event/`,
        method: 'POST',
        body: queryArg.assetServiceCheckListInsert
      })
    }),
    updateAssetServiceCheckListassetServiceCheckListEventIdPut: build.mutation<
      UpdateAssetServiceCheckListassetServiceCheckListEventIdPutApiResponse,
      UpdateAssetServiceCheckListassetServiceCheckListEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_service_check_list/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.assetServiceCheckListUpdate
      })
    }),
    deleteAssetServiceCheckListassetServiceCheckListEventIdDelete:
      build.mutation<
        DeleteAssetServiceCheckListassetServiceCheckListEventIdDeleteApiResponse,
        DeleteAssetServiceCheckListassetServiceCheckListEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `asset_service_check_list/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getAssetServiceCheckListassetServiceCheckListEventIdGet: build.query<
      GetAssetServiceCheckListassetServiceCheckListEventIdGetApiResponse,
      GetAssetServiceCheckListassetServiceCheckListEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `asset_service_check_list/event/${queryArg.id}`
      })
    }),
    getAllAssetServiceCheckListItemsGet: build.query<
      GetAllAssetServiceCheckListItemsGetApiResponse,
      GetAllAssetServiceCheckListItemsGetApiArg
    >({
      query: () => ({ url: `/asset_service_check_list_items/` })
    }),
    createAssetServiceCheckListItemsAssetServiceCheckListItemsPost:
      build.mutation<
        CreateAssetServiceCheckListItemsAssetServiceCheckListItemsPostApiResponse,
        CreateAssetServiceCheckListItemsAssetServiceCheckListItemsPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/asset_service_check_list_items/`,
          method: 'POST',
          body: queryArg.assetServiceCheckListItemsInsert
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
          body: queryArg.assetServiceCheckListItemsUpdate
        })
      }),
    deleteAssetServiceCheckListItemsAssetServiceCheckListItemsIdDelete:
      build.mutation<
        DeleteAssetServiceCheckListItemsAssetServiceCheckListItemsIdDeleteApiResponse,
        DeleteAssetServiceCheckListItemsAssetServiceCheckListItemsIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/asset_service_check_list_items/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getAssetServiceCheckListItemsAssetServiceCheckListItemsIdGet: build.query<
      GetAssetServiceCheckListItemsAssetServiceCheckListItemsIdGetApiResponse,
      GetAssetServiceCheckListItemsAssetServiceCheckListItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/asset_service_check_list_items/${queryArg.id}`
      })
    }),
    getAllassetServiceCheckListItemsEventGet: build.query<
      GetAllassetServiceCheckListItemsEventGetApiResponse,
      GetAllassetServiceCheckListItemsEventGetApiArg
    >({
      query: () => ({ url: `asset_service_check_list_items/event/` })
    }),
    createAssetServiceCheckListItemsassetServiceCheckListItemsEventPost:
      build.mutation<
        CreateAssetServiceCheckListItemsassetServiceCheckListItemsEventPostApiResponse,
        CreateAssetServiceCheckListItemsassetServiceCheckListItemsEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `asset_service_check_list_items/event/`,
          method: 'POST',
          body: queryArg.assetServiceCheckListItemsInsert
        })
      }),
    updateAssetServiceCheckListItemsassetServiceCheckListItemsEventIdPut:
      build.mutation<
        UpdateAssetServiceCheckListItemsassetServiceCheckListItemsEventIdPutApiResponse,
        UpdateAssetServiceCheckListItemsassetServiceCheckListItemsEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `asset_service_check_list_items/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.assetServiceCheckListItemsUpdate
        })
      }),
    deleteAssetServiceCheckListItemsassetServiceCheckListItemsEventIdDelete:
      build.mutation<
        DeleteAssetServiceCheckListItemsassetServiceCheckListItemsEventIdDeleteApiResponse,
        DeleteAssetServiceCheckListItemsassetServiceCheckListItemsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `asset_service_check_list_items/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getAssetServiceCheckListItemsassetServiceCheckListItemsEventIdGet:
      build.query<
        GetAssetServiceCheckListItemsassetServiceCheckListItemsEventIdGetApiResponse,
        GetAssetServiceCheckListItemsassetServiceCheckListItemsEventIdGetApiArg
      >({
        query: (queryArg: any) => ({
          url: `asset_service_check_list_items/event/${queryArg.id}`
        })
      }),
    getAllFiscalyearGet: build.query<
      GetAllFiscalyearGetApiResponse,
      GetAllFiscalyearGetApiArg
    >({
      query: () => ({ url: `/fiscalyear/` })
    }),
    createFiscalyearFiscalyearPost: build.mutation<
      CreateFiscalyearFiscalyearPostApiResponse,
      CreateFiscalyearFiscalyearPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/fiscalyear/`,
        method: 'POST',
        body: queryArg.fiscalyearInsert
      })
    }),
    updateFiscalyearFiscalyearIdPut: build.mutation<
      UpdateFiscalyearFiscalyearIdPutApiResponse,
      UpdateFiscalyearFiscalyearIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/fiscalyear/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.fiscalyearUpdate
      })
    }),
    deleteFiscalyearFiscalyearIdDelete: build.mutation<
      DeleteFiscalyearFiscalyearIdDeleteApiResponse,
      DeleteFiscalyearFiscalyearIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/fiscalyear/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getFiscalyearFiscalyearIdGet: build.query<
      GetFiscalyearFiscalyearIdGetApiResponse,
      GetFiscalyearFiscalyearIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/fiscalyear/${queryArg.id}` })
    }),
    getAllfiscalyearEventGet: build.query<
      GetAllfiscalyearEventGetApiResponse,
      GetAllfiscalyearEventGetApiArg
    >({
      query: () => ({ url: `fiscalyear/event/` })
    }),
    createFiscalyearfiscalyearEventPost: build.mutation<
      CreateFiscalyearfiscalyearEventPostApiResponse,
      CreateFiscalyearfiscalyearEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `fiscalyear/event/`,
        method: 'POST',
        body: queryArg.fiscalyearInsert
      })
    }),
    updateFiscalyearfiscalyearEventIdPut: build.mutation<
      UpdateFiscalyearfiscalyearEventIdPutApiResponse,
      UpdateFiscalyearfiscalyearEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `fiscalyear/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.fiscalyearUpdate
      })
    }),
    deleteFiscalyearfiscalyearEventIdDelete: build.mutation<
      DeleteFiscalyearfiscalyearEventIdDeleteApiResponse,
      DeleteFiscalyearfiscalyearEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `fiscalyear/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getFiscalyearfiscalyearEventIdGet: build.query<
      GetFiscalyearfiscalyearEventIdGetApiResponse,
      GetFiscalyearfiscalyearEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `fiscalyear/event/${queryArg.id}` })
    }),
    getAllGrpWarehouseGet: build.query<
      GetAllGrpWarehouseGetApiResponse,
      GetAllGrpWarehouseGetApiArg
    >({
      query: () => ({ url: `/grp_warehouse/` })
    }),
    createGrpWarehouseGrpWarehousePost: build.mutation<
      CreateGrpWarehouseGrpWarehousePostApiResponse,
      CreateGrpWarehouseGrpWarehousePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/grp_warehouse/`,
        method: 'POST',
        body: queryArg.grpWarehouseInsert
      })
    }),
    updateGrpWarehouseGrpWarehouseIdPut: build.mutation<
      UpdateGrpWarehouseGrpWarehouseIdPutApiResponse,
      UpdateGrpWarehouseGrpWarehouseIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/grp_warehouse/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.grpWarehouseUpdate
      })
    }),
    deleteGrpWarehouseGrpWarehouseIdDelete: build.mutation<
      DeleteGrpWarehouseGrpWarehouseIdDeleteApiResponse,
      DeleteGrpWarehouseGrpWarehouseIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/grp_warehouse/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getGrpWarehouseGrpWarehouseIdGet: build.query<
      GetGrpWarehouseGrpWarehouseIdGetApiResponse,
      GetGrpWarehouseGrpWarehouseIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/grp_warehouse/${queryArg.id}` })
    }),
    getAllgrpWarehouseEventGet: build.query<
      GetAllgrpWarehouseEventGetApiResponse,
      GetAllgrpWarehouseEventGetApiArg
    >({
      query: () => ({ url: `grp_warehouse/event/` })
    }),
    createGrpWarehousegrpWarehouseEventPost: build.mutation<
      CreateGrpWarehousegrpWarehouseEventPostApiResponse,
      CreateGrpWarehousegrpWarehouseEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `grp_warehouse/event/`,
        method: 'POST',
        body: queryArg.grpWarehouseInsert
      })
    }),
    updateGrpWarehousegrpWarehouseEventIdPut: build.mutation<
      UpdateGrpWarehousegrpWarehouseEventIdPutApiResponse,
      UpdateGrpWarehousegrpWarehouseEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `grp_warehouse/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.grpWarehouseUpdate
      })
    }),
    deleteGrpWarehousegrpWarehouseEventIdDelete: build.mutation<
      DeleteGrpWarehousegrpWarehouseEventIdDeleteApiResponse,
      DeleteGrpWarehousegrpWarehouseEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `grp_warehouse/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getGrpWarehousegrpWarehouseEventIdGet: build.query<
      GetGrpWarehousegrpWarehouseEventIdGetApiResponse,
      GetGrpWarehousegrpWarehouseEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `grp_warehouse/event/${queryArg.id}` })
    }),
    getAllInvItemConfigurationGet: build.query<
      GetAllInvItemConfigurationGetApiResponse,
      GetAllInvItemConfigurationGetApiArg
    >({
      query: () => ({ url: `/inv_item_configuration/` })
    }),
    createInvItemConfigurationInvItemConfigurationPost: build.mutation<
      CreateInvItemConfigurationInvItemConfigurationPostApiResponse,
      CreateInvItemConfigurationInvItemConfigurationPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inv_item_configuration/`,
        method: 'POST',
        body: queryArg.invItemConfigurationInsert
      })
    }),
    updateInvItemConfigurationInvItemConfigurationIdPut: build.mutation<
      UpdateInvItemConfigurationInvItemConfigurationIdPutApiResponse,
      UpdateInvItemConfigurationInvItemConfigurationIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inv_item_configuration/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.invItemConfigurationUpdate
      })
    }),
    deleteInvItemConfigurationInvItemConfigurationIdDelete: build.mutation<
      DeleteInvItemConfigurationInvItemConfigurationIdDeleteApiResponse,
      DeleteInvItemConfigurationInvItemConfigurationIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inv_item_configuration/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getInvItemConfigurationInvItemConfigurationIdGet: build.query<
      GetInvItemConfigurationInvItemConfigurationIdGetApiResponse,
      GetInvItemConfigurationInvItemConfigurationIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inv_item_configuration/${queryArg.id}`
      })
    }),
    getAllinvItemConfigurationEventGet: build.query<
      GetAllinvItemConfigurationEventGetApiResponse,
      GetAllinvItemConfigurationEventGetApiArg
    >({
      query: () => ({ url: `inv_item_configuration/event/` })
    }),
    createInvItemConfigurationinvItemConfigurationEventPost: build.mutation<
      CreateInvItemConfigurationinvItemConfigurationEventPostApiResponse,
      CreateInvItemConfigurationinvItemConfigurationEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `inv_item_configuration/event/`,
        method: 'POST',
        body: queryArg.invItemConfigurationInsert
      })
    }),
    updateInvItemConfigurationinvItemConfigurationEventIdPut: build.mutation<
      UpdateInvItemConfigurationinvItemConfigurationEventIdPutApiResponse,
      UpdateInvItemConfigurationinvItemConfigurationEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `inv_item_configuration/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.invItemConfigurationUpdate
      })
    }),
    deleteInvItemConfigurationinvItemConfigurationEventIdDelete: build.mutation<
      DeleteInvItemConfigurationinvItemConfigurationEventIdDeleteApiResponse,
      DeleteInvItemConfigurationinvItemConfigurationEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `inv_item_configuration/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getInvItemConfigurationinvItemConfigurationEventIdGet: build.query<
      GetInvItemConfigurationinvItemConfigurationEventIdGetApiResponse,
      GetInvItemConfigurationinvItemConfigurationEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `inv_item_configuration/event/${queryArg.id}`
      })
    }),
    getAllItemOpeningBalanceGet: build.query<
      GetAllItemOpeningBalanceGetApiResponse,
      GetAllItemOpeningBalanceGetApiArg
    >({
      query: () => ({ url: `/item_opening_balance/` })
    }),
    createItemOpeningBalanceItemOpeningBalancePost: build.mutation<
      CreateItemOpeningBalanceItemOpeningBalancePostApiResponse,
      CreateItemOpeningBalanceItemOpeningBalancePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_opening_balance/`,
        method: 'POST',
        body: queryArg.itemOpeningBalanceInsert
      })
    }),
    updateItemOpeningBalanceItemOpeningBalanceIdPut: build.mutation<
      UpdateItemOpeningBalanceItemOpeningBalanceIdPutApiResponse,
      UpdateItemOpeningBalanceItemOpeningBalanceIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_opening_balance/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.itemOpeningBalanceUpdate
      })
    }),
    deleteItemOpeningBalanceItemOpeningBalanceIdDelete: build.mutation<
      DeleteItemOpeningBalanceItemOpeningBalanceIdDeleteApiResponse,
      DeleteItemOpeningBalanceItemOpeningBalanceIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_opening_balance/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getItemOpeningBalanceItemOpeningBalanceIdGet: build.query<
      GetItemOpeningBalanceItemOpeningBalanceIdGetApiResponse,
      GetItemOpeningBalanceItemOpeningBalanceIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_opening_balance/${queryArg.id}`
      })
    }),
    getAllitemOpeningBalanceEventGet: build.query<
      GetAllitemOpeningBalanceEventGetApiResponse,
      GetAllitemOpeningBalanceEventGetApiArg
    >({
      query: () => ({ url: `item_opening_balance/event/` })
    }),
    createItemOpeningBalanceitemOpeningBalanceEventPost: build.mutation<
      CreateItemOpeningBalanceitemOpeningBalanceEventPostApiResponse,
      CreateItemOpeningBalanceitemOpeningBalanceEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `item_opening_balance/event/`,
        method: 'POST',
        body: queryArg.itemOpeningBalanceInsert
      })
    }),
    updateItemOpeningBalanceitemOpeningBalanceEventIdPut: build.mutation<
      UpdateItemOpeningBalanceitemOpeningBalanceEventIdPutApiResponse,
      UpdateItemOpeningBalanceitemOpeningBalanceEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `item_opening_balance/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.itemOpeningBalanceUpdate
      })
    }),
    deleteItemOpeningBalanceitemOpeningBalanceEventIdDelete: build.mutation<
      DeleteItemOpeningBalanceitemOpeningBalanceEventIdDeleteApiResponse,
      DeleteItemOpeningBalanceitemOpeningBalanceEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `item_opening_balance/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getItemOpeningBalanceitemOpeningBalanceEventIdGet: build.query<
      GetItemOpeningBalanceitemOpeningBalanceEventIdGetApiResponse,
      GetItemOpeningBalanceitemOpeningBalanceEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `item_opening_balance/event/${queryArg.id}`
      })
    }),
    getAllPoplistsGet: build.query<
      GetAllPoplistsGetApiResponse,
      GetAllPoplistsGetApiArg
    >({
      query: () => ({ url: `/poplists/` })
    }),
    createPoplistsPoplistsPost: build.mutation<
      CreatePoplistsPoplistsPostApiResponse,
      CreatePoplistsPoplistsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/poplists/`,
        method: 'POST',
        body: queryArg.poplistsInsert
      })
    }),
    updatePoplistsPoplistsIdPut: build.mutation<
      UpdatePoplistsPoplistsIdPutApiResponse,
      UpdatePoplistsPoplistsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/poplists/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.poplistsUpdate
      })
    }),
    deletePoplistsPoplistsIdDelete: build.mutation<
      DeletePoplistsPoplistsIdDeleteApiResponse,
      DeletePoplistsPoplistsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/poplists/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getPoplistsPoplistsIdGet: build.query<
      GetPoplistsPoplistsIdGetApiResponse,
      GetPoplistsPoplistsIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/poplists/${queryArg.id}` })
    }),
    getAllpoplistsEventGet: build.query<
      GetAllpoplistsEventGetApiResponse,
      GetAllpoplistsEventGetApiArg
    >({
      query: () => ({ url: `poplists/event/` })
    }),
    createPoplistspoplistsEventPost: build.mutation<
      CreatePoplistspoplistsEventPostApiResponse,
      CreatePoplistspoplistsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `poplists/event/`,
        method: 'POST',
        body: queryArg.poplistsInsert
      })
    }),
    updatePoplistspoplistsEventIdPut: build.mutation<
      UpdatePoplistspoplistsEventIdPutApiResponse,
      UpdatePoplistspoplistsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `poplists/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.poplistsUpdate
      })
    }),
    deletePoplistspoplistsEventIdDelete: build.mutation<
      DeletePoplistspoplistsEventIdDeleteApiResponse,
      DeletePoplistspoplistsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `poplists/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getPoplistspoplistsEventIdGet: build.query<
      GetPoplistspoplistsEventIdGetApiResponse,
      GetPoplistspoplistsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `poplists/event/${queryArg.id}` })
    }),
    getAllPurchaseOrderTermsGet: build.query<
      GetAllPurchaseOrderTermsGetApiResponse,
      GetAllPurchaseOrderTermsGetApiArg
    >({
      query: () => ({ url: `/purchase_order_terms/` })
    }),
    createPurchaseOrderTermsPurchaseOrderTermsPost: build.mutation<
      CreatePurchaseOrderTermsPurchaseOrderTermsPostApiResponse,
      CreatePurchaseOrderTermsPurchaseOrderTermsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_order_terms/`,
        method: 'POST',
        body: queryArg.purchaseOrderTermsInsert
      })
    }),
    updatePurchaseOrderTermsPurchaseOrderTermsIdPut: build.mutation<
      UpdatePurchaseOrderTermsPurchaseOrderTermsIdPutApiResponse,
      UpdatePurchaseOrderTermsPurchaseOrderTermsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_order_terms/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.purchaseOrderTermsUpdate
      })
    }),
    deletePurchaseOrderTermsPurchaseOrderTermsIdDelete: build.mutation<
      DeletePurchaseOrderTermsPurchaseOrderTermsIdDeleteApiResponse,
      DeletePurchaseOrderTermsPurchaseOrderTermsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_order_terms/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getPurchaseOrderTermsPurchaseOrderTermsIdGet: build.query<
      GetPurchaseOrderTermsPurchaseOrderTermsIdGetApiResponse,
      GetPurchaseOrderTermsPurchaseOrderTermsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_order_terms/${queryArg.id}`
      })
    }),
    getAllpurchaseOrderTermsEventGet: build.query<
      GetAllpurchaseOrderTermsEventGetApiResponse,
      GetAllpurchaseOrderTermsEventGetApiArg
    >({
      query: () => ({ url: `purchase_order_terms/event/` })
    }),
    createPurchaseOrderTermspurchaseOrderTermsEventPost: build.mutation<
      CreatePurchaseOrderTermspurchaseOrderTermsEventPostApiResponse,
      CreatePurchaseOrderTermspurchaseOrderTermsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `purchase_order_terms/event/`,
        method: 'POST',
        body: queryArg.purchaseOrderTermsInsert
      })
    }),
    updatePurchaseOrderTermspurchaseOrderTermsEventIdPut: build.mutation<
      UpdatePurchaseOrderTermspurchaseOrderTermsEventIdPutApiResponse,
      UpdatePurchaseOrderTermspurchaseOrderTermsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `purchase_order_terms/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.purchaseOrderTermsUpdate
      })
    }),
    deletePurchaseOrderTermspurchaseOrderTermsEventIdDelete: build.mutation<
      DeletePurchaseOrderTermspurchaseOrderTermsEventIdDeleteApiResponse,
      DeletePurchaseOrderTermspurchaseOrderTermsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `purchase_order_terms/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getPurchaseOrderTermspurchaseOrderTermsEventIdGet: build.query<
      GetPurchaseOrderTermspurchaseOrderTermsEventIdGetApiResponse,
      GetPurchaseOrderTermspurchaseOrderTermsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `purchase_order_terms/event/${queryArg.id}`
      })
    }),
    getAllRefAstMaterialGet: build.query<
      GetAllRefAstMaterialGetApiResponse,
      GetAllRefAstMaterialGetApiArg
    >({
      query: () => ({ url: `/ref_ast_material/` })
    }),
    createRefAstMaterialRefAstMaterialPost: build.mutation<
      CreateRefAstMaterialRefAstMaterialPostApiResponse,
      CreateRefAstMaterialRefAstMaterialPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_ast_material/`,
        method: 'POST',
        body: queryArg.refAstMaterialInsert
      })
    }),
    updateRefAstMaterialRefAstMaterialIdPut: build.mutation<
      UpdateRefAstMaterialRefAstMaterialIdPutApiResponse,
      UpdateRefAstMaterialRefAstMaterialIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_ast_material/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refAstMaterialUpdate
      })
    }),
    deleteRefAstMaterialRefAstMaterialIdDelete: build.mutation<
      DeleteRefAstMaterialRefAstMaterialIdDeleteApiResponse,
      DeleteRefAstMaterialRefAstMaterialIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_ast_material/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefAstMaterialRefAstMaterialIdGet: build.query<
      GetRefAstMaterialRefAstMaterialIdGetApiResponse,
      GetRefAstMaterialRefAstMaterialIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/ref_ast_material/${queryArg.id}` })
    }),
    getAllrefAstMaterialEventGet: build.query<
      GetAllrefAstMaterialEventGetApiResponse,
      GetAllrefAstMaterialEventGetApiArg
    >({
      query: () => ({ url: `ref_ast_material/event/` })
    }),
    createRefAstMaterialrefAstMaterialEventPost: build.mutation<
      CreateRefAstMaterialrefAstMaterialEventPostApiResponse,
      CreateRefAstMaterialrefAstMaterialEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_ast_material/event/`,
        method: 'POST',
        body: queryArg.refAstMaterialInsert
      })
    }),
    updateRefAstMaterialrefAstMaterialEventIdPut: build.mutation<
      UpdateRefAstMaterialrefAstMaterialEventIdPutApiResponse,
      UpdateRefAstMaterialrefAstMaterialEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_ast_material/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refAstMaterialUpdate
      })
    }),
    deleteRefAstMaterialrefAstMaterialEventIdDelete: build.mutation<
      DeleteRefAstMaterialrefAstMaterialEventIdDeleteApiResponse,
      DeleteRefAstMaterialrefAstMaterialEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_ast_material/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefAstMaterialrefAstMaterialEventIdGet: build.query<
      GetRefAstMaterialrefAstMaterialEventIdGetApiResponse,
      GetRefAstMaterialrefAstMaterialEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_ast_material/event/${queryArg.id}`
      })
    }),
    getAllRefFuelStationGet: build.query<
      GetAllRefFuelStationGetApiResponse,
      GetAllRefFuelStationGetApiArg
    >({
      query: () => ({ url: `/ref_fuel_station/` })
    }),
    createRefFuelStationRefFuelStationPost: build.mutation<
      CreateRefFuelStationRefFuelStationPostApiResponse,
      CreateRefFuelStationRefFuelStationPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_fuel_station/`,
        method: 'POST',
        body: queryArg.refFuelStationInsert
      })
    }),
    updateRefFuelStationRefFuelStationIdPut: build.mutation<
      UpdateRefFuelStationRefFuelStationIdPutApiResponse,
      UpdateRefFuelStationRefFuelStationIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_fuel_station/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refFuelStationUpdate
      })
    }),
    deleteRefFuelStationRefFuelStationIdDelete: build.mutation<
      DeleteRefFuelStationRefFuelStationIdDeleteApiResponse,
      DeleteRefFuelStationRefFuelStationIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_fuel_station/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefFuelStationRefFuelStationIdGet: build.query<
      GetRefFuelStationRefFuelStationIdGetApiResponse,
      GetRefFuelStationRefFuelStationIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/ref_fuel_station/${queryArg.id}` })
    }),
    getAllrefFuelStationEventGet: build.query<
      GetAllrefFuelStationEventGetApiResponse,
      GetAllrefFuelStationEventGetApiArg
    >({
      query: () => ({ url: `ref_fuel_station/event/` })
    }),
    createRefFuelStationrefFuelStationEventPost: build.mutation<
      CreateRefFuelStationrefFuelStationEventPostApiResponse,
      CreateRefFuelStationrefFuelStationEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_fuel_station/event/`,
        method: 'POST',
        body: queryArg.refFuelStationInsert
      })
    }),
    updateRefFuelStationrefFuelStationEventIdPut: build.mutation<
      UpdateRefFuelStationrefFuelStationEventIdPutApiResponse,
      UpdateRefFuelStationrefFuelStationEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_fuel_station/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refFuelStationUpdate
      })
    }),
    deleteRefFuelStationrefFuelStationEventIdDelete: build.mutation<
      DeleteRefFuelStationrefFuelStationEventIdDeleteApiResponse,
      DeleteRefFuelStationrefFuelStationEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_fuel_station/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefFuelStationrefFuelStationEventIdGet: build.query<
      GetRefFuelStationrefFuelStationEventIdGetApiResponse,
      GetRefFuelStationrefFuelStationEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_fuel_station/event/${queryArg.id}`
      })
    }),
    getAllRefPartyGet: build.query<
      GetAllRefPartyGetApiResponse,
      GetAllRefPartyGetApiArg
    >({
      query: () => ({ url: `/ref_party/` })
    }),
    createRefPartyRefPartyPost: build.mutation<
      CreateRefPartyRefPartyPostApiResponse,
      CreateRefPartyRefPartyPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_party/`,
        method: 'POST',
        body: queryArg.refPartyInsert
      })
    }),
    updateRefPartyRefPartyIdPut: build.mutation<
      UpdateRefPartyRefPartyIdPutApiResponse,
      UpdateRefPartyRefPartyIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_party/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refPartyUpdate
      })
    }),
    deleteRefPartyRefPartyIdDelete: build.mutation<
      DeleteRefPartyRefPartyIdDeleteApiResponse,
      DeleteRefPartyRefPartyIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_party/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefPartyRefPartyIdGet: build.query<
      GetRefPartyRefPartyIdGetApiResponse,
      GetRefPartyRefPartyIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/ref_party/${queryArg.id}` })
    }),
    getAllrefPartyEventGet: build.query<
      GetAllrefPartyEventGetApiResponse,
      GetAllrefPartyEventGetApiArg
    >({
      query: () => ({ url: `ref_party/event/` })
    }),
    createRefPartyrefPartyEventPost: build.mutation<
      CreateRefPartyrefPartyEventPostApiResponse,
      CreateRefPartyrefPartyEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_party/event/`,
        method: 'POST',
        body: queryArg.refPartyInsert
      })
    }),
    updateRefPartyrefPartyEventIdPut: build.mutation<
      UpdateRefPartyrefPartyEventIdPutApiResponse,
      UpdateRefPartyrefPartyEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_party/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refPartyUpdate
      })
    }),
    deleteRefPartyrefPartyEventIdDelete: build.mutation<
      DeleteRefPartyrefPartyEventIdDeleteApiResponse,
      DeleteRefPartyrefPartyEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_party/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefPartyrefPartyEventIdGet: build.query<
      GetRefPartyrefPartyEventIdGetApiResponse,
      GetRefPartyrefPartyEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `ref_party/event/${queryArg.id}` })
    }),
    getAllRefRosterGet: build.query<
      GetAllRefRosterGetApiResponse,
      GetAllRefRosterGetApiArg
    >({
      query: () => ({ url: `/ref_roster/` })
    }),
    createRefRosterRefRosterPost: build.mutation<
      CreateRefRosterRefRosterPostApiResponse,
      CreateRefRosterRefRosterPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_roster/`,
        method: 'POST',
        body: queryArg.refRosterInsert
      })
    }),
    updateRefRosterRefRosterIdPut: build.mutation<
      UpdateRefRosterRefRosterIdPutApiResponse,
      UpdateRefRosterRefRosterIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_roster/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refRosterUpdate
      })
    }),
    deleteRefRosterRefRosterIdDelete: build.mutation<
      DeleteRefRosterRefRosterIdDeleteApiResponse,
      DeleteRefRosterRefRosterIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_roster/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefRosterRefRosterIdGet: build.query<
      GetRefRosterRefRosterIdGetApiResponse,
      GetRefRosterRefRosterIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/ref_roster/${queryArg.id}` })
    }),
    getAllrefRosterEventGet: build.query<
      GetAllrefRosterEventGetApiResponse,
      GetAllrefRosterEventGetApiArg
    >({
      query: () => ({ url: `ref_roster/event/` })
    }),
    createRefRosterrefRosterEventPost: build.mutation<
      CreateRefRosterrefRosterEventPostApiResponse,
      CreateRefRosterrefRosterEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_roster/event/`,
        method: 'POST',
        body: queryArg.refRosterInsert
      })
    }),
    updateRefRosterrefRosterEventIdPut: build.mutation<
      UpdateRefRosterrefRosterEventIdPutApiResponse,
      UpdateRefRosterrefRosterEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_roster/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refRosterUpdate
      })
    }),
    deleteRefRosterrefRosterEventIdDelete: build.mutation<
      DeleteRefRosterrefRosterEventIdDeleteApiResponse,
      DeleteRefRosterrefRosterEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_roster/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefRosterrefRosterEventIdGet: build.query<
      GetRefRosterrefRosterEventIdGetApiResponse,
      GetRefRosterrefRosterEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `ref_roster/event/${queryArg.id}` })
    }),
    getAllRefSubAssemblyGet: build.query<
      GetAllRefSubAssemblyGetApiResponse,
      GetAllRefSubAssemblyGetApiArg
    >({
      query: () => ({ url: `/ref_sub_assembly/` })
    }),
    createRefSubAssemblyRefSubAssemblyPost: build.mutation<
      CreateRefSubAssemblyRefSubAssemblyPostApiResponse,
      CreateRefSubAssemblyRefSubAssemblyPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_sub_assembly/`,
        method: 'POST',
        body: queryArg.refSubAssemblyInsert
      })
    }),
    updateRefSubAssemblyRefSubAssemblyIdPut: build.mutation<
      UpdateRefSubAssemblyRefSubAssemblyIdPutApiResponse,
      UpdateRefSubAssemblyRefSubAssemblyIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_sub_assembly/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refSubAssemblyUpdate
      })
    }),
    deleteRefSubAssemblyRefSubAssemblyIdDelete: build.mutation<
      DeleteRefSubAssemblyRefSubAssemblyIdDeleteApiResponse,
      DeleteRefSubAssemblyRefSubAssemblyIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_sub_assembly/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefSubAssemblyRefSubAssemblyIdGet: build.query<
      GetRefSubAssemblyRefSubAssemblyIdGetApiResponse,
      GetRefSubAssemblyRefSubAssemblyIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/ref_sub_assembly/${queryArg.id}` })
    }),
    getAllrefSubAssemblyEventGet: build.query<
      GetAllrefSubAssemblyEventGetApiResponse,
      GetAllrefSubAssemblyEventGetApiArg
    >({
      query: () => ({ url: `ref_sub_assembly/event/` })
    }),
    createRefSubAssemblyrefSubAssemblyEventPost: build.mutation<
      CreateRefSubAssemblyrefSubAssemblyEventPostApiResponse,
      CreateRefSubAssemblyrefSubAssemblyEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_sub_assembly/event/`,
        method: 'POST',
        body: queryArg.refSubAssemblyInsert
      })
    }),
    updateRefSubAssemblyrefSubAssemblyEventIdPut: build.mutation<
      UpdateRefSubAssemblyrefSubAssemblyEventIdPutApiResponse,
      UpdateRefSubAssemblyrefSubAssemblyEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_sub_assembly/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refSubAssemblyUpdate
      })
    }),
    deleteRefSubAssemblyrefSubAssemblyEventIdDelete: build.mutation<
      DeleteRefSubAssemblyrefSubAssemblyEventIdDeleteApiResponse,
      DeleteRefSubAssemblyrefSubAssemblyEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_sub_assembly/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefSubAssemblyrefSubAssemblyEventIdGet: build.query<
      GetRefSubAssemblyrefSubAssemblyEventIdGetApiResponse,
      GetRefSubAssemblyrefSubAssemblyEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_sub_assembly/event/${queryArg.id}`
      })
    }),
    getAllRefTaxGet: build.query<
      GetAllRefTaxGetApiResponse,
      GetAllRefTaxGetApiArg
    >({
      query: () => ({ url: `/ref_tax/` })
    }),
    createRefTaxRefTaxPost: build.mutation<
      CreateRefTaxRefTaxPostApiResponse,
      CreateRefTaxRefTaxPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_tax/`,
        method: 'POST',
        body: queryArg.refTaxInsert
      })
    }),
    updateRefTaxRefTaxIdPut: build.mutation<
      UpdateRefTaxRefTaxIdPutApiResponse,
      UpdateRefTaxRefTaxIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_tax/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refTaxUpdate
      })
    }),
    deleteRefTaxRefTaxIdDelete: build.mutation<
      DeleteRefTaxRefTaxIdDeleteApiResponse,
      DeleteRefTaxRefTaxIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_tax/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefTaxRefTaxIdGet: build.query<
      GetRefTaxRefTaxIdGetApiResponse,
      GetRefTaxRefTaxIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/ref_tax/${queryArg.id}` })
    }),
    getAllrefTaxEventGet: build.query<
      GetAllrefTaxEventGetApiResponse,
      GetAllrefTaxEventGetApiArg
    >({
      query: () => ({ url: `ref_tax/event/` })
    }),
    createRefTaxrefTaxEventPost: build.mutation<
      CreateRefTaxrefTaxEventPostApiResponse,
      CreateRefTaxrefTaxEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_tax/event/`,
        method: 'POST',
        body: queryArg.refTaxInsert
      })
    }),
    updateRefTaxrefTaxEventIdPut: build.mutation<
      UpdateRefTaxrefTaxEventIdPutApiResponse,
      UpdateRefTaxrefTaxEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_tax/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refTaxUpdate
      })
    }),
    deleteRefTaxrefTaxEventIdDelete: build.mutation<
      DeleteRefTaxrefTaxEventIdDeleteApiResponse,
      DeleteRefTaxrefTaxEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_tax/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefTaxrefTaxEventIdGet: build.query<
      GetRefTaxrefTaxEventIdGetApiResponse,
      GetRefTaxrefTaxEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `ref_tax/event/${queryArg.id}` })
    }),
    getAllRefVendorGet: build.query<
      GetAllRefVendorGetApiResponse,
      GetAllRefVendorGetApiArg
    >({
      query: () => ({ url: `/ref_vendor/` })
    }),
    createRefVendorRefVendorPost: build.mutation<
      CreateRefVendorRefVendorPostApiResponse,
      CreateRefVendorRefVendorPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_vendor/`,
        method: 'POST',
        body: queryArg.refVendorInsert
      })
    }),
    updateRefVendorRefVendorIdPut: build.mutation<
      UpdateRefVendorRefVendorIdPutApiResponse,
      UpdateRefVendorRefVendorIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_vendor/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refVendorUpdate
      })
    }),
    deleteRefVendorRefVendorIdDelete: build.mutation<
      DeleteRefVendorRefVendorIdDeleteApiResponse,
      DeleteRefVendorRefVendorIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_vendor/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefVendorRefVendorIdGet: build.query<
      GetRefVendorRefVendorIdGetApiResponse,
      GetRefVendorRefVendorIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/ref_vendor/${queryArg.id}` })
    }),
    getAllrefVendorEventGet: build.query<
      GetAllrefVendorEventGetApiResponse,
      GetAllrefVendorEventGetApiArg
    >({
      query: () => ({ url: `ref_vendor/event/` })
    }),
    createRefVendorrefVendorEventPost: build.mutation<
      CreateRefVendorrefVendorEventPostApiResponse,
      CreateRefVendorrefVendorEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_vendor/event/`,
        method: 'POST',
        body: queryArg.refVendorInsert
      })
    }),
    updateRefVendorrefVendorEventIdPut: build.mutation<
      UpdateRefVendorrefVendorEventIdPutApiResponse,
      UpdateRefVendorrefVendorEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_vendor/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refVendorUpdate
      })
    }),
    deleteRefVendorrefVendorEventIdDelete: build.mutation<
      DeleteRefVendorrefVendorEventIdDeleteApiResponse,
      DeleteRefVendorrefVendorEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_vendor/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefVendorrefVendorEventIdGet: build.query<
      GetRefVendorrefVendorEventIdGetApiResponse,
      GetRefVendorrefVendorEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `ref_vendor/event/${queryArg.id}` })
    }),
    getAllRefWorkstationGet: build.query<
      GetAllRefWorkstationGetApiResponse,
      GetAllRefWorkstationGetApiArg
    >({
      query: () => ({ url: `/ref_workstation/` })
    }),
    createRefWorkstationRefWorkstationPost: build.mutation<
      CreateRefWorkstationRefWorkstationPostApiResponse,
      CreateRefWorkstationRefWorkstationPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_workstation/`,
        method: 'POST',
        body: queryArg.refWorkstationInsert
      })
    }),
    updateRefWorkstationRefWorkstationIdPut: build.mutation<
      UpdateRefWorkstationRefWorkstationIdPutApiResponse,
      UpdateRefWorkstationRefWorkstationIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_workstation/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refWorkstationUpdate
      })
    }),
    deleteRefWorkstationRefWorkstationIdDelete: build.mutation<
      DeleteRefWorkstationRefWorkstationIdDeleteApiResponse,
      DeleteRefWorkstationRefWorkstationIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/ref_workstation/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefWorkstationRefWorkstationIdGet: build.query<
      GetRefWorkstationRefWorkstationIdGetApiResponse,
      GetRefWorkstationRefWorkstationIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/ref_workstation/${queryArg.id}` })
    }),
    getAllrefWorkstationEventGet: build.query<
      GetAllrefWorkstationEventGetApiResponse,
      GetAllrefWorkstationEventGetApiArg
    >({
      query: () => ({ url: `ref_workstation/event/` })
    }),
    createRefWorkstationrefWorkstationEventPost: build.mutation<
      CreateRefWorkstationrefWorkstationEventPostApiResponse,
      CreateRefWorkstationrefWorkstationEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_workstation/event/`,
        method: 'POST',
        body: queryArg.refWorkstationInsert
      })
    }),
    updateRefWorkstationrefWorkstationEventIdPut: build.mutation<
      UpdateRefWorkstationrefWorkstationEventIdPutApiResponse,
      UpdateRefWorkstationrefWorkstationEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_workstation/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.refWorkstationUpdate
      })
    }),
    deleteRefWorkstationrefWorkstationEventIdDelete: build.mutation<
      DeleteRefWorkstationrefWorkstationEventIdDeleteApiResponse,
      DeleteRefWorkstationrefWorkstationEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_workstation/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getRefWorkstationrefWorkstationEventIdGet: build.query<
      GetRefWorkstationrefWorkstationEventIdGetApiResponse,
      GetRefWorkstationrefWorkstationEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `ref_workstation/event/${queryArg.id}`
      })
    }),
    getAllResAssetGet: build.query<
      GetAllResAssetGetApiResponse,
      GetAllResAssetGetApiArg
    >({
      query: () => ({ url: `/res_asset/` })
    }),
    createResAssetResAssetPost: build.mutation<
      CreateResAssetResAssetPostApiResponse,
      CreateResAssetResAssetPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/res_asset/`,
        method: 'POST',
        body: queryArg.resAssetInsert
      })
    }),
    updateResAssetResAssetIdPut: build.mutation<
      UpdateResAssetResAssetIdPutApiResponse,
      UpdateResAssetResAssetIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/res_asset/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.resAssetUpdate
      })
    }),
    deleteResAssetResAssetIdDelete: build.mutation<
      DeleteResAssetResAssetIdDeleteApiResponse,
      DeleteResAssetResAssetIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/res_asset/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getResAssetResAssetIdGet: build.query<
      GetResAssetResAssetIdGetApiResponse,
      GetResAssetResAssetIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/res_asset/${queryArg.id}` })
    }),
    getAllresAssetEventGet: build.query<
      GetAllresAssetEventGetApiResponse,
      GetAllresAssetEventGetApiArg
    >({
      query: () => ({ url: `res_asset/event/` })
    }),
    createResAssetresAssetEventPost: build.mutation<
      CreateResAssetresAssetEventPostApiResponse,
      CreateResAssetresAssetEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `res_asset/event/`,
        method: 'POST',
        body: queryArg.resAssetInsert
      })
    }),
    updateResAssetresAssetEventIdPut: build.mutation<
      UpdateResAssetresAssetEventIdPutApiResponse,
      UpdateResAssetresAssetEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `res_asset/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.resAssetUpdate
      })
    }),
    deleteResAssetresAssetEventIdDelete: build.mutation<
      DeleteResAssetresAssetEventIdDeleteApiResponse,
      DeleteResAssetresAssetEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `res_asset/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getResAssetresAssetEventIdGet: build.query<
      GetResAssetresAssetEventIdGetApiResponse,
      GetResAssetresAssetEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `res_asset/event/${queryArg.id}` })
    }),
    getAllSaasApiKeyAuditGet: build.query<
      GetAllSaasApiKeyAuditGetApiResponse,
      GetAllSaasApiKeyAuditGetApiArg
    >({
      query: () => ({ url: `/saas_api_key_audit/` })
    }),
    createSaasApiKeyAuditSaasApiKeyAuditPost: build.mutation<
      CreateSaasApiKeyAuditSaasApiKeyAuditPostApiResponse,
      CreateSaasApiKeyAuditSaasApiKeyAuditPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_api_key_audit/`,
        method: 'POST',
        body: queryArg.saasApiKeyAuditInsert
      })
    }),
    updateSaasApiKeyAuditSaasApiKeyAuditIdPut: build.mutation<
      UpdateSaasApiKeyAuditSaasApiKeyAuditIdPutApiResponse,
      UpdateSaasApiKeyAuditSaasApiKeyAuditIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_api_key_audit/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasApiKeyAuditUpdate
      })
    }),
    deleteSaasApiKeyAuditSaasApiKeyAuditIdDelete: build.mutation<
      DeleteSaasApiKeyAuditSaasApiKeyAuditIdDeleteApiResponse,
      DeleteSaasApiKeyAuditSaasApiKeyAuditIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_api_key_audit/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasApiKeyAuditSaasApiKeyAuditIdGet: build.query<
      GetSaasApiKeyAuditSaasApiKeyAuditIdGetApiResponse,
      GetSaasApiKeyAuditSaasApiKeyAuditIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_api_key_audit/${queryArg.id}` })
    }),
    getAllsaasApiKeyAuditEventGet: build.query<
      GetAllsaasApiKeyAuditEventGetApiResponse,
      GetAllsaasApiKeyAuditEventGetApiArg
    >({
      query: () => ({ url: `saas_api_key_audit/event/` })
    }),
    createSaasApiKeyAuditsaasApiKeyAuditEventPost: build.mutation<
      CreateSaasApiKeyAuditsaasApiKeyAuditEventPostApiResponse,
      CreateSaasApiKeyAuditsaasApiKeyAuditEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_api_key_audit/event/`,
        method: 'POST',
        body: queryArg.saasApiKeyAuditInsert
      })
    }),
    updateSaasApiKeyAuditsaasApiKeyAuditEventIdPut: build.mutation<
      UpdateSaasApiKeyAuditsaasApiKeyAuditEventIdPutApiResponse,
      UpdateSaasApiKeyAuditsaasApiKeyAuditEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_api_key_audit/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasApiKeyAuditUpdate
      })
    }),
    deleteSaasApiKeyAuditsaasApiKeyAuditEventIdDelete: build.mutation<
      DeleteSaasApiKeyAuditsaasApiKeyAuditEventIdDeleteApiResponse,
      DeleteSaasApiKeyAuditsaasApiKeyAuditEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_api_key_audit/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasApiKeyAuditsaasApiKeyAuditEventIdGet: build.query<
      GetSaasApiKeyAuditsaasApiKeyAuditEventIdGetApiResponse,
      GetSaasApiKeyAuditsaasApiKeyAuditEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_api_key_audit/event/${queryArg.id}`
      })
    }),
    getAllSaasAuditTrailsGet: build.query<
      GetAllSaasAuditTrailsGetApiResponse,
      GetAllSaasAuditTrailsGetApiArg
    >({
      query: () => ({ url: `/saas_audit_trails/` })
    }),
    createSaasAuditTrailsSaasAuditTrailsPost: build.mutation<
      CreateSaasAuditTrailsSaasAuditTrailsPostApiResponse,
      CreateSaasAuditTrailsSaasAuditTrailsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_audit_trails/`,
        method: 'POST',
        body: queryArg.saasAuditTrailsInsert
      })
    }),
    updateSaasAuditTrailsSaasAuditTrailsIdPut: build.mutation<
      UpdateSaasAuditTrailsSaasAuditTrailsIdPutApiResponse,
      UpdateSaasAuditTrailsSaasAuditTrailsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_audit_trails/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasAuditTrailsUpdate
      })
    }),
    deleteSaasAuditTrailsSaasAuditTrailsIdDelete: build.mutation<
      DeleteSaasAuditTrailsSaasAuditTrailsIdDeleteApiResponse,
      DeleteSaasAuditTrailsSaasAuditTrailsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_audit_trails/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasAuditTrailsSaasAuditTrailsIdGet: build.query<
      GetSaasAuditTrailsSaasAuditTrailsIdGetApiResponse,
      GetSaasAuditTrailsSaasAuditTrailsIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_audit_trails/${queryArg.id}` })
    }),
    getAllsaasAuditTrailsEventGet: build.query<
      GetAllsaasAuditTrailsEventGetApiResponse,
      GetAllsaasAuditTrailsEventGetApiArg
    >({
      query: () => ({ url: `saas_audit_trails/event/` })
    }),
    createSaasAuditTrailssaasAuditTrailsEventPost: build.mutation<
      CreateSaasAuditTrailssaasAuditTrailsEventPostApiResponse,
      CreateSaasAuditTrailssaasAuditTrailsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_audit_trails/event/`,
        method: 'POST',
        body: queryArg.saasAuditTrailsInsert
      })
    }),
    updateSaasAuditTrailssaasAuditTrailsEventIdPut: build.mutation<
      UpdateSaasAuditTrailssaasAuditTrailsEventIdPutApiResponse,
      UpdateSaasAuditTrailssaasAuditTrailsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_audit_trails/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasAuditTrailsUpdate
      })
    }),
    deleteSaasAuditTrailssaasAuditTrailsEventIdDelete: build.mutation<
      DeleteSaasAuditTrailssaasAuditTrailsEventIdDeleteApiResponse,
      DeleteSaasAuditTrailssaasAuditTrailsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_audit_trails/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasAuditTrailssaasAuditTrailsEventIdGet: build.query<
      GetSaasAuditTrailssaasAuditTrailsEventIdGetApiResponse,
      GetSaasAuditTrailssaasAuditTrailsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_audit_trails/event/${queryArg.id}`
      })
    }),
    getAllSaasChatsGet: build.query<
      GetAllSaasChatsGetApiResponse,
      GetAllSaasChatsGetApiArg
    >({
      query: () => ({ url: `/saas_chats/` })
    }),
    createSaasChatsSaasChatsPost: build.mutation<
      CreateSaasChatsSaasChatsPostApiResponse,
      CreateSaasChatsSaasChatsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_chats/`,
        method: 'POST',
        body: queryArg.saasChatsInsert
      })
    }),
    updateSaasChatsSaasChatsIdPut: build.mutation<
      UpdateSaasChatsSaasChatsIdPutApiResponse,
      UpdateSaasChatsSaasChatsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_chats/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasChatsUpdate
      })
    }),
    deleteSaasChatsSaasChatsIdDelete: build.mutation<
      DeleteSaasChatsSaasChatsIdDeleteApiResponse,
      DeleteSaasChatsSaasChatsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_chats/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasChatsSaasChatsIdGet: build.query<
      GetSaasChatsSaasChatsIdGetApiResponse,
      GetSaasChatsSaasChatsIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_chats/${queryArg.id}` })
    }),
    getAllsaasChatsEventGet: build.query<
      GetAllsaasChatsEventGetApiResponse,
      GetAllsaasChatsEventGetApiArg
    >({
      query: () => ({ url: `saas_chats/event/` })
    }),
    createSaasChatssaasChatsEventPost: build.mutation<
      CreateSaasChatssaasChatsEventPostApiResponse,
      CreateSaasChatssaasChatsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_chats/event/`,
        method: 'POST',
        body: queryArg.saasChatsInsert
      })
    }),
    updateSaasChatssaasChatsEventIdPut: build.mutation<
      UpdateSaasChatssaasChatsEventIdPutApiResponse,
      UpdateSaasChatssaasChatsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_chats/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasChatsUpdate
      })
    }),
    deleteSaasChatssaasChatsEventIdDelete: build.mutation<
      DeleteSaasChatssaasChatsEventIdDeleteApiResponse,
      DeleteSaasChatssaasChatsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_chats/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasChatssaasChatsEventIdGet: build.query<
      GetSaasChatssaasChatsEventIdGetApiResponse,
      GetSaasChatssaasChatsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `saas_chats/event/${queryArg.id}` })
    }),
    getAllSaasCustomersGet: build.query<
      GetAllSaasCustomersGetApiResponse,
      GetAllSaasCustomersGetApiArg
    >({
      query: () => ({ url: `/saas_customers/` })
    }),
    createSaasCustomersSaasCustomersPost: build.mutation<
      CreateSaasCustomersSaasCustomersPostApiResponse,
      CreateSaasCustomersSaasCustomersPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_customers/`,
        method: 'POST',
        body: queryArg.saasCustomersInsert
      })
    }),
    updateSaasCustomersSaasCustomersIdPut: build.mutation<
      UpdateSaasCustomersSaasCustomersIdPutApiResponse,
      UpdateSaasCustomersSaasCustomersIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_customers/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasCustomersUpdate
      })
    }),
    deleteSaasCustomersSaasCustomersIdDelete: build.mutation<
      DeleteSaasCustomersSaasCustomersIdDeleteApiResponse,
      DeleteSaasCustomersSaasCustomersIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_customers/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasCustomersSaasCustomersIdGet: build.query<
      GetSaasCustomersSaasCustomersIdGetApiResponse,
      GetSaasCustomersSaasCustomersIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_customers/${queryArg.id}` })
    }),
    getAllsaasCustomersEventGet: build.query<
      GetAllsaasCustomersEventGetApiResponse,
      GetAllsaasCustomersEventGetApiArg
    >({
      query: () => ({ url: `saas_customers/event/` })
    }),
    createSaasCustomerssaasCustomersEventPost: build.mutation<
      CreateSaasCustomerssaasCustomersEventPostApiResponse,
      CreateSaasCustomerssaasCustomersEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_customers/event/`,
        method: 'POST',
        body: queryArg.saasCustomersInsert
      })
    }),
    updateSaasCustomerssaasCustomersEventIdPut: build.mutation<
      UpdateSaasCustomerssaasCustomersEventIdPutApiResponse,
      UpdateSaasCustomerssaasCustomersEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_customers/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasCustomersUpdate
      })
    }),
    deleteSaasCustomerssaasCustomersEventIdDelete: build.mutation<
      DeleteSaasCustomerssaasCustomersEventIdDeleteApiResponse,
      DeleteSaasCustomerssaasCustomersEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_customers/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasCustomerssaasCustomersEventIdGet: build.query<
      GetSaasCustomerssaasCustomersEventIdGetApiResponse,
      GetSaasCustomerssaasCustomersEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `saas_customers/event/${queryArg.id}` })
    }),
    getAllSaasEntitySharesGet: build.query<
      GetAllSaasEntitySharesGetApiResponse,
      GetAllSaasEntitySharesGetApiArg
    >({
      query: () => ({ url: `/saas_entity_shares/` })
    }),
    createSaasEntitySharesSaasEntitySharesPost: build.mutation<
      CreateSaasEntitySharesSaasEntitySharesPostApiResponse,
      CreateSaasEntitySharesSaasEntitySharesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_entity_shares/`,
        method: 'POST',
        body: queryArg.saasEntitySharesInsert
      })
    }),
    updateSaasEntitySharesSaasEntitySharesIdPut: build.mutation<
      UpdateSaasEntitySharesSaasEntitySharesIdPutApiResponse,
      UpdateSaasEntitySharesSaasEntitySharesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_entity_shares/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasEntitySharesUpdate
      })
    }),
    deleteSaasEntitySharesSaasEntitySharesIdDelete: build.mutation<
      DeleteSaasEntitySharesSaasEntitySharesIdDeleteApiResponse,
      DeleteSaasEntitySharesSaasEntitySharesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_entity_shares/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasEntitySharesSaasEntitySharesIdGet: build.query<
      GetSaasEntitySharesSaasEntitySharesIdGetApiResponse,
      GetSaasEntitySharesSaasEntitySharesIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_entity_shares/${queryArg.id}` })
    }),
    getAllsaasEntitySharesEventGet: build.query<
      GetAllsaasEntitySharesEventGetApiResponse,
      GetAllsaasEntitySharesEventGetApiArg
    >({
      query: () => ({ url: `saas_entity_shares/event/` })
    }),
    createSaasEntitySharessaasEntitySharesEventPost: build.mutation<
      CreateSaasEntitySharessaasEntitySharesEventPostApiResponse,
      CreateSaasEntitySharessaasEntitySharesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_entity_shares/event/`,
        method: 'POST',
        body: queryArg.saasEntitySharesInsert
      })
    }),
    updateSaasEntitySharessaasEntitySharesEventIdPut: build.mutation<
      UpdateSaasEntitySharessaasEntitySharesEventIdPutApiResponse,
      UpdateSaasEntitySharessaasEntitySharesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_entity_shares/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasEntitySharesUpdate
      })
    }),
    deleteSaasEntitySharessaasEntitySharesEventIdDelete: build.mutation<
      DeleteSaasEntitySharessaasEntitySharesEventIdDeleteApiResponse,
      DeleteSaasEntitySharessaasEntitySharesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_entity_shares/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasEntitySharessaasEntitySharesEventIdGet: build.query<
      GetSaasEntitySharessaasEntitySharesEventIdGetApiResponse,
      GetSaasEntitySharessaasEntitySharesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_entity_shares/event/${queryArg.id}`
      })
    }),
    getAllSaasFileMetasGet: build.query<
      GetAllSaasFileMetasGetApiResponse,
      GetAllSaasFileMetasGetApiArg
    >({
      query: () => ({ url: `/saas_file_metas/` })
    }),
    createSaasFileMetasSaasFileMetasPost: build.mutation<
      CreateSaasFileMetasSaasFileMetasPostApiResponse,
      CreateSaasFileMetasSaasFileMetasPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_file_metas/`,
        method: 'POST',
        body: queryArg.saasFileMetasInsert
      })
    }),
    updateSaasFileMetasSaasFileMetasIdPut: build.mutation<
      UpdateSaasFileMetasSaasFileMetasIdPutApiResponse,
      UpdateSaasFileMetasSaasFileMetasIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_file_metas/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasFileMetasUpdate
      })
    }),
    deleteSaasFileMetasSaasFileMetasIdDelete: build.mutation<
      DeleteSaasFileMetasSaasFileMetasIdDeleteApiResponse,
      DeleteSaasFileMetasSaasFileMetasIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_file_metas/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasFileMetasSaasFileMetasIdGet: build.query<
      GetSaasFileMetasSaasFileMetasIdGetApiResponse,
      GetSaasFileMetasSaasFileMetasIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_file_metas/${queryArg.id}` })
    }),
    getAllsaasFileMetasEventGet: build.query<
      GetAllsaasFileMetasEventGetApiResponse,
      GetAllsaasFileMetasEventGetApiArg
    >({
      query: () => ({ url: `saas_file_metas/event/` })
    }),
    createSaasFileMetassaasFileMetasEventPost: build.mutation<
      CreateSaasFileMetassaasFileMetasEventPostApiResponse,
      CreateSaasFileMetassaasFileMetasEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_file_metas/event/`,
        method: 'POST',
        body: queryArg.saasFileMetasInsert
      })
    }),
    updateSaasFileMetassaasFileMetasEventIdPut: build.mutation<
      UpdateSaasFileMetassaasFileMetasEventIdPutApiResponse,
      UpdateSaasFileMetassaasFileMetasEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_file_metas/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasFileMetasUpdate
      })
    }),
    deleteSaasFileMetassaasFileMetasEventIdDelete: build.mutation<
      DeleteSaasFileMetassaasFileMetasEventIdDeleteApiResponse,
      DeleteSaasFileMetassaasFileMetasEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_file_metas/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasFileMetassaasFileMetasEventIdGet: build.query<
      GetSaasFileMetassaasFileMetasEventIdGetApiResponse,
      GetSaasFileMetassaasFileMetasEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_file_metas/event/${queryArg.id}`
      })
    }),
    getAllSaasFlexEntityGet: build.query<
      GetAllSaasFlexEntityGetApiResponse,
      GetAllSaasFlexEntityGetApiArg
    >({
      query: () => ({ url: `/saas_flex_entity/` })
    }),
    createSaasFlexEntitySaasFlexEntityPost: build.mutation<
      CreateSaasFlexEntitySaasFlexEntityPostApiResponse,
      CreateSaasFlexEntitySaasFlexEntityPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_entity/`,
        method: 'POST',
        body: queryArg.saasFlexEntityInsert
      })
    }),
    updateSaasFlexEntitySaasFlexEntityIdPut: build.mutation<
      UpdateSaasFlexEntitySaasFlexEntityIdPutApiResponse,
      UpdateSaasFlexEntitySaasFlexEntityIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_entity/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasFlexEntityUpdate
      })
    }),
    deleteSaasFlexEntitySaasFlexEntityIdDelete: build.mutation<
      DeleteSaasFlexEntitySaasFlexEntityIdDeleteApiResponse,
      DeleteSaasFlexEntitySaasFlexEntityIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_entity/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasFlexEntitySaasFlexEntityIdGet: build.query<
      GetSaasFlexEntitySaasFlexEntityIdGetApiResponse,
      GetSaasFlexEntitySaasFlexEntityIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_flex_entity/${queryArg.id}` })
    }),
    getAllsaasFlexEntityEventGet: build.query<
      GetAllsaasFlexEntityEventGetApiResponse,
      GetAllsaasFlexEntityEventGetApiArg
    >({
      query: () => ({ url: `saas_flex_entity/event/` })
    }),
    createSaasFlexEntitysaasFlexEntityEventPost: build.mutation<
      CreateSaasFlexEntitysaasFlexEntityEventPostApiResponse,
      CreateSaasFlexEntitysaasFlexEntityEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_flex_entity/event/`,
        method: 'POST',
        body: queryArg.saasFlexEntityInsert
      })
    }),
    updateSaasFlexEntitysaasFlexEntityEventIdPut: build.mutation<
      UpdateSaasFlexEntitysaasFlexEntityEventIdPutApiResponse,
      UpdateSaasFlexEntitysaasFlexEntityEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_flex_entity/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasFlexEntityUpdate
      })
    }),
    deleteSaasFlexEntitysaasFlexEntityEventIdDelete: build.mutation<
      DeleteSaasFlexEntitysaasFlexEntityEventIdDeleteApiResponse,
      DeleteSaasFlexEntitysaasFlexEntityEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_flex_entity/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasFlexEntitysaasFlexEntityEventIdGet: build.query<
      GetSaasFlexEntitysaasFlexEntityEventIdGetApiResponse,
      GetSaasFlexEntitysaasFlexEntityEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_flex_entity/event/${queryArg.id}`
      })
    }),
    getAllSaasFlexFieldsGet: build.query<
      GetAllSaasFlexFieldsGetApiResponse,
      GetAllSaasFlexFieldsGetApiArg
    >({
      query: () => ({ url: `/saas_flex_fields/` })
    }),
    createSaasFlexFieldsSaasFlexFieldsPost: build.mutation<
      CreateSaasFlexFieldsSaasFlexFieldsPostApiResponse,
      CreateSaasFlexFieldsSaasFlexFieldsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_fields/`,
        method: 'POST',
        body: queryArg.saasFlexFieldsInsert
      })
    }),
    updateSaasFlexFieldsSaasFlexFieldsIdPut: build.mutation<
      UpdateSaasFlexFieldsSaasFlexFieldsIdPutApiResponse,
      UpdateSaasFlexFieldsSaasFlexFieldsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_fields/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasFlexFieldsUpdate
      })
    }),
    deleteSaasFlexFieldsSaasFlexFieldsIdDelete: build.mutation<
      DeleteSaasFlexFieldsSaasFlexFieldsIdDeleteApiResponse,
      DeleteSaasFlexFieldsSaasFlexFieldsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_fields/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasFlexFieldsSaasFlexFieldsIdGet: build.query<
      GetSaasFlexFieldsSaasFlexFieldsIdGetApiResponse,
      GetSaasFlexFieldsSaasFlexFieldsIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_flex_fields/${queryArg.id}` })
    }),
    getAllsaasFlexFieldsEventGet: build.query<
      GetAllsaasFlexFieldsEventGetApiResponse,
      GetAllsaasFlexFieldsEventGetApiArg
    >({
      query: () => ({ url: `saas_flex_fields/event/` })
    }),
    createSaasFlexFieldssaasFlexFieldsEventPost: build.mutation<
      CreateSaasFlexFieldssaasFlexFieldsEventPostApiResponse,
      CreateSaasFlexFieldssaasFlexFieldsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_flex_fields/event/`,
        method: 'POST',
        body: queryArg.saasFlexFieldsInsert
      })
    }),
    updateSaasFlexFieldssaasFlexFieldsEventIdPut: build.mutation<
      UpdateSaasFlexFieldssaasFlexFieldsEventIdPutApiResponse,
      UpdateSaasFlexFieldssaasFlexFieldsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_flex_fields/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasFlexFieldsUpdate
      })
    }),
    deleteSaasFlexFieldssaasFlexFieldsEventIdDelete: build.mutation<
      DeleteSaasFlexFieldssaasFlexFieldsEventIdDeleteApiResponse,
      DeleteSaasFlexFieldssaasFlexFieldsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_flex_fields/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasFlexFieldssaasFlexFieldsEventIdGet: build.query<
      GetSaasFlexFieldssaasFlexFieldsEventIdGetApiResponse,
      GetSaasFlexFieldssaasFlexFieldsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_flex_fields/event/${queryArg.id}`
      })
    }),
    getAllSaasFlexFieldValuesGet: build.query<
      GetAllSaasFlexFieldValuesGetApiResponse,
      GetAllSaasFlexFieldValuesGetApiArg
    >({
      query: () => ({ url: `/saas_flex_field_values/` })
    }),
    createSaasFlexFieldValuesSaasFlexFieldValuesPost: build.mutation<
      CreateSaasFlexFieldValuesSaasFlexFieldValuesPostApiResponse,
      CreateSaasFlexFieldValuesSaasFlexFieldValuesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_field_values/`,
        method: 'POST',
        body: queryArg.saasFlexFieldValuesInsert
      })
    }),
    updateSaasFlexFieldValuesSaasFlexFieldValuesIdPut: build.mutation<
      UpdateSaasFlexFieldValuesSaasFlexFieldValuesIdPutApiResponse,
      UpdateSaasFlexFieldValuesSaasFlexFieldValuesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_field_values/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasFlexFieldValuesUpdate
      })
    }),
    deleteSaasFlexFieldValuesSaasFlexFieldValuesIdDelete: build.mutation<
      DeleteSaasFlexFieldValuesSaasFlexFieldValuesIdDeleteApiResponse,
      DeleteSaasFlexFieldValuesSaasFlexFieldValuesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_field_values/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasFlexFieldValuesSaasFlexFieldValuesIdGet: build.query<
      GetSaasFlexFieldValuesSaasFlexFieldValuesIdGetApiResponse,
      GetSaasFlexFieldValuesSaasFlexFieldValuesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_flex_field_values/${queryArg.id}`
      })
    }),
    getAllsaasFlexFieldValuesEventGet: build.query<
      GetAllsaasFlexFieldValuesEventGetApiResponse,
      GetAllsaasFlexFieldValuesEventGetApiArg
    >({
      query: () => ({ url: `saas_flex_field_values/event/` })
    }),
    createSaasFlexFieldValuessaasFlexFieldValuesEventPost: build.mutation<
      CreateSaasFlexFieldValuessaasFlexFieldValuesEventPostApiResponse,
      CreateSaasFlexFieldValuessaasFlexFieldValuesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_flex_field_values/event/`,
        method: 'POST',
        body: queryArg.saasFlexFieldValuesInsert
      })
    }),
    updateSaasFlexFieldValuessaasFlexFieldValuesEventIdPut: build.mutation<
      UpdateSaasFlexFieldValuessaasFlexFieldValuesEventIdPutApiResponse,
      UpdateSaasFlexFieldValuessaasFlexFieldValuesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_flex_field_values/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasFlexFieldValuesUpdate
      })
    }),
    deleteSaasFlexFieldValuessaasFlexFieldValuesEventIdDelete: build.mutation<
      DeleteSaasFlexFieldValuessaasFlexFieldValuesEventIdDeleteApiResponse,
      DeleteSaasFlexFieldValuessaasFlexFieldValuesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_flex_field_values/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasFlexFieldValuessaasFlexFieldValuesEventIdGet: build.query<
      GetSaasFlexFieldValuessaasFlexFieldValuesEventIdGetApiResponse,
      GetSaasFlexFieldValuessaasFlexFieldValuesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_flex_field_values/event/${queryArg.id}`
      })
    }),
    getAllSaasRefActionsGet: build.query<
      GetAllSaasRefActionsGetApiResponse,
      GetAllSaasRefActionsGetApiArg
    >({
      query: () => ({ url: `/saas_ref_actions/` })
    }),
    createSaasRefActionsSaasRefActionsPost: build.mutation<
      CreateSaasRefActionsSaasRefActionsPostApiResponse,
      CreateSaasRefActionsSaasRefActionsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_actions/`,
        method: 'POST',
        body: queryArg.saasRefActionsInsert
      })
    }),
    updateSaasRefActionsSaasRefActionsIdPut: build.mutation<
      UpdateSaasRefActionsSaasRefActionsIdPutApiResponse,
      UpdateSaasRefActionsSaasRefActionsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_actions/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefActionsUpdate
      })
    }),
    deleteSaasRefActionsSaasRefActionsIdDelete: build.mutation<
      DeleteSaasRefActionsSaasRefActionsIdDeleteApiResponse,
      DeleteSaasRefActionsSaasRefActionsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_actions/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefActionsSaasRefActionsIdGet: build.query<
      GetSaasRefActionsSaasRefActionsIdGetApiResponse,
      GetSaasRefActionsSaasRefActionsIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_ref_actions/${queryArg.id}` })
    }),
    getAllsaasRefActionsEventGet: build.query<
      GetAllsaasRefActionsEventGetApiResponse,
      GetAllsaasRefActionsEventGetApiArg
    >({
      query: () => ({ url: `saas_ref_actions/event/` })
    }),
    createSaasRefActionssaasRefActionsEventPost: build.mutation<
      CreateSaasRefActionssaasRefActionsEventPostApiResponse,
      CreateSaasRefActionssaasRefActionsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_actions/event/`,
        method: 'POST',
        body: queryArg.saasRefActionsInsert
      })
    }),
    updateSaasRefActionssaasRefActionsEventIdPut: build.mutation<
      UpdateSaasRefActionssaasRefActionsEventIdPutApiResponse,
      UpdateSaasRefActionssaasRefActionsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_actions/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefActionsUpdate
      })
    }),
    deleteSaasRefActionssaasRefActionsEventIdDelete: build.mutation<
      DeleteSaasRefActionssaasRefActionsEventIdDeleteApiResponse,
      DeleteSaasRefActionssaasRefActionsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_actions/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefActionssaasRefActionsEventIdGet: build.query<
      GetSaasRefActionssaasRefActionsEventIdGetApiResponse,
      GetSaasRefActionssaasRefActionsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_actions/event/${queryArg.id}`
      })
    }),
    getAllSaasRefConfigurationsGet: build.query<
      GetAllSaasRefConfigurationsGetApiResponse,
      GetAllSaasRefConfigurationsGetApiArg
    >({
      query: () => ({ url: `/saas_ref_configurations/` })
    }),
    createSaasRefConfigurationsSaasRefConfigurationsPost: build.mutation<
      CreateSaasRefConfigurationsSaasRefConfigurationsPostApiResponse,
      CreateSaasRefConfigurationsSaasRefConfigurationsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_configurations/`,
        method: 'POST',
        body: queryArg.saasRefConfigurationsInsert
      })
    }),
    updateSaasRefConfigurationsSaasRefConfigurationsIdPut: build.mutation<
      UpdateSaasRefConfigurationsSaasRefConfigurationsIdPutApiResponse,
      UpdateSaasRefConfigurationsSaasRefConfigurationsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_configurations/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefConfigurationsUpdate
      })
    }),
    deleteSaasRefConfigurationsSaasRefConfigurationsIdDelete: build.mutation<
      DeleteSaasRefConfigurationsSaasRefConfigurationsIdDeleteApiResponse,
      DeleteSaasRefConfigurationsSaasRefConfigurationsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_configurations/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefConfigurationsSaasRefConfigurationsIdGet: build.query<
      GetSaasRefConfigurationsSaasRefConfigurationsIdGetApiResponse,
      GetSaasRefConfigurationsSaasRefConfigurationsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_configurations/${queryArg.id}`
      })
    }),
    getAllsaasRefConfigurationsEventGet: build.query<
      GetAllsaasRefConfigurationsEventGetApiResponse,
      GetAllsaasRefConfigurationsEventGetApiArg
    >({
      query: () => ({ url: `saas_ref_configurations/event/` })
    }),
    createSaasRefConfigurationssaasRefConfigurationsEventPost: build.mutation<
      CreateSaasRefConfigurationssaasRefConfigurationsEventPostApiResponse,
      CreateSaasRefConfigurationssaasRefConfigurationsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_configurations/event/`,
        method: 'POST',
        body: queryArg.saasRefConfigurationsInsert
      })
    }),
    updateSaasRefConfigurationssaasRefConfigurationsEventIdPut: build.mutation<
      UpdateSaasRefConfigurationssaasRefConfigurationsEventIdPutApiResponse,
      UpdateSaasRefConfigurationssaasRefConfigurationsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_configurations/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefConfigurationsUpdate
      })
    }),
    deleteSaasRefConfigurationssaasRefConfigurationsEventIdDelete:
      build.mutation<
        DeleteSaasRefConfigurationssaasRefConfigurationsEventIdDeleteApiResponse,
        DeleteSaasRefConfigurationssaasRefConfigurationsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `saas_ref_configurations/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSaasRefConfigurationssaasRefConfigurationsEventIdGet: build.query<
      GetSaasRefConfigurationssaasRefConfigurationsEventIdGetApiResponse,
      GetSaasRefConfigurationssaasRefConfigurationsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_configurations/event/${queryArg.id}`
      })
    }),
    getAllSaasRefCurrenciesGet: build.query<
      GetAllSaasRefCurrenciesGetApiResponse,
      GetAllSaasRefCurrenciesGetApiArg
    >({
      query: () => ({ url: `/saas_ref_currencies/` })
    }),
    createSaasRefCurrenciesSaasRefCurrenciesPost: build.mutation<
      CreateSaasRefCurrenciesSaasRefCurrenciesPostApiResponse,
      CreateSaasRefCurrenciesSaasRefCurrenciesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_currencies/`,
        method: 'POST',
        body: queryArg.saasRefCurrenciesInsert
      })
    }),
    updateSaasRefCurrenciesSaasRefCurrenciesIdPut: build.mutation<
      UpdateSaasRefCurrenciesSaasRefCurrenciesIdPutApiResponse,
      UpdateSaasRefCurrenciesSaasRefCurrenciesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_currencies/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefCurrenciesUpdate
      })
    }),
    deleteSaasRefCurrenciesSaasRefCurrenciesIdDelete: build.mutation<
      DeleteSaasRefCurrenciesSaasRefCurrenciesIdDeleteApiResponse,
      DeleteSaasRefCurrenciesSaasRefCurrenciesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_currencies/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefCurrenciesSaasRefCurrenciesIdGet: build.query<
      GetSaasRefCurrenciesSaasRefCurrenciesIdGetApiResponse,
      GetSaasRefCurrenciesSaasRefCurrenciesIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_ref_currencies/${queryArg.id}` })
    }),
    getAllsaasRefCurrenciesEventGet: build.query<
      GetAllsaasRefCurrenciesEventGetApiResponse,
      GetAllsaasRefCurrenciesEventGetApiArg
    >({
      query: () => ({ url: `saas_ref_currencies/event/` })
    }),
    createSaasRefCurrenciessaasRefCurrenciesEventPost: build.mutation<
      CreateSaasRefCurrenciessaasRefCurrenciesEventPostApiResponse,
      CreateSaasRefCurrenciessaasRefCurrenciesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_currencies/event/`,
        method: 'POST',
        body: queryArg.saasRefCurrenciesInsert
      })
    }),
    updateSaasRefCurrenciessaasRefCurrenciesEventIdPut: build.mutation<
      UpdateSaasRefCurrenciessaasRefCurrenciesEventIdPutApiResponse,
      UpdateSaasRefCurrenciessaasRefCurrenciesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_currencies/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefCurrenciesUpdate
      })
    }),
    deleteSaasRefCurrenciessaasRefCurrenciesEventIdDelete: build.mutation<
      DeleteSaasRefCurrenciessaasRefCurrenciesEventIdDeleteApiResponse,
      DeleteSaasRefCurrenciessaasRefCurrenciesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_currencies/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefCurrenciessaasRefCurrenciesEventIdGet: build.query<
      GetSaasRefCurrenciessaasRefCurrenciesEventIdGetApiResponse,
      GetSaasRefCurrenciessaasRefCurrenciesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_currencies/event/${queryArg.id}`
      })
    }),
    getAllSaasRefDocumentsGet: build.query<
      GetAllSaasRefDocumentsGetApiResponse,
      GetAllSaasRefDocumentsGetApiArg
    >({
      query: () => ({ url: `/saas_ref_documents/` })
    }),
    createSaasRefDocumentsSaasRefDocumentsPost: build.mutation<
      CreateSaasRefDocumentsSaasRefDocumentsPostApiResponse,
      CreateSaasRefDocumentsSaasRefDocumentsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_documents/`,
        method: 'POST',
        body: queryArg.saasRefDocumentsInsert
      })
    }),
    updateSaasRefDocumentsSaasRefDocumentsIdPut: build.mutation<
      UpdateSaasRefDocumentsSaasRefDocumentsIdPutApiResponse,
      UpdateSaasRefDocumentsSaasRefDocumentsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_documents/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefDocumentsUpdate
      })
    }),
    deleteSaasRefDocumentsSaasRefDocumentsIdDelete: build.mutation<
      DeleteSaasRefDocumentsSaasRefDocumentsIdDeleteApiResponse,
      DeleteSaasRefDocumentsSaasRefDocumentsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_documents/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefDocumentsSaasRefDocumentsIdGet: build.query<
      GetSaasRefDocumentsSaasRefDocumentsIdGetApiResponse,
      GetSaasRefDocumentsSaasRefDocumentsIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_ref_documents/${queryArg.id}` })
    }),
    getAllsaasRefDocumentsEventGet: build.query<
      GetAllsaasRefDocumentsEventGetApiResponse,
      GetAllsaasRefDocumentsEventGetApiArg
    >({
      query: () => ({ url: `saas_ref_documents/event/` })
    }),
    createSaasRefDocumentssaasRefDocumentsEventPost: build.mutation<
      CreateSaasRefDocumentssaasRefDocumentsEventPostApiResponse,
      CreateSaasRefDocumentssaasRefDocumentsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_documents/event/`,
        method: 'POST',
        body: queryArg.saasRefDocumentsInsert
      })
    }),
    updateSaasRefDocumentssaasRefDocumentsEventIdPut: build.mutation<
      UpdateSaasRefDocumentssaasRefDocumentsEventIdPutApiResponse,
      UpdateSaasRefDocumentssaasRefDocumentsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_documents/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefDocumentsUpdate
      })
    }),
    deleteSaasRefDocumentssaasRefDocumentsEventIdDelete: build.mutation<
      DeleteSaasRefDocumentssaasRefDocumentsEventIdDeleteApiResponse,
      DeleteSaasRefDocumentssaasRefDocumentsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_documents/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefDocumentssaasRefDocumentsEventIdGet: build.query<
      GetSaasRefDocumentssaasRefDocumentsEventIdGetApiResponse,
      GetSaasRefDocumentssaasRefDocumentsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_documents/event/${queryArg.id}`
      })
    }),
    getAllSaasRefFeaturesGet: build.query<
      GetAllSaasRefFeaturesGetApiResponse,
      GetAllSaasRefFeaturesGetApiArg
    >({
      query: () => ({ url: `/saas_ref_features/` })
    }),
    createSaasRefFeaturesSaasRefFeaturesPost: build.mutation<
      CreateSaasRefFeaturesSaasRefFeaturesPostApiResponse,
      CreateSaasRefFeaturesSaasRefFeaturesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_features/`,
        method: 'POST',
        body: queryArg.saasRefFeaturesInsert
      })
    }),
    updateSaasRefFeaturesSaasRefFeaturesIdPut: build.mutation<
      UpdateSaasRefFeaturesSaasRefFeaturesIdPutApiResponse,
      UpdateSaasRefFeaturesSaasRefFeaturesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_features/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefFeaturesUpdate
      })
    }),
    deleteSaasRefFeaturesSaasRefFeaturesIdDelete: build.mutation<
      DeleteSaasRefFeaturesSaasRefFeaturesIdDeleteApiResponse,
      DeleteSaasRefFeaturesSaasRefFeaturesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_features/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefFeaturesSaasRefFeaturesIdGet: build.query<
      GetSaasRefFeaturesSaasRefFeaturesIdGetApiResponse,
      GetSaasRefFeaturesSaasRefFeaturesIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_ref_features/${queryArg.id}` })
    }),
    getAllsaasRefFeaturesEventGet: build.query<
      GetAllsaasRefFeaturesEventGetApiResponse,
      GetAllsaasRefFeaturesEventGetApiArg
    >({
      query: () => ({ url: `saas_ref_features/event/` })
    }),
    createSaasRefFeaturessaasRefFeaturesEventPost: build.mutation<
      CreateSaasRefFeaturessaasRefFeaturesEventPostApiResponse,
      CreateSaasRefFeaturessaasRefFeaturesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_features/event/`,
        method: 'POST',
        body: queryArg.saasRefFeaturesInsert
      })
    }),
    updateSaasRefFeaturessaasRefFeaturesEventIdPut: build.mutation<
      UpdateSaasRefFeaturessaasRefFeaturesEventIdPutApiResponse,
      UpdateSaasRefFeaturessaasRefFeaturesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_features/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefFeaturesUpdate
      })
    }),
    deleteSaasRefFeaturessaasRefFeaturesEventIdDelete: build.mutation<
      DeleteSaasRefFeaturessaasRefFeaturesEventIdDeleteApiResponse,
      DeleteSaasRefFeaturessaasRefFeaturesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_features/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefFeaturessaasRefFeaturesEventIdGet: build.query<
      GetSaasRefFeaturessaasRefFeaturesEventIdGetApiResponse,
      GetSaasRefFeaturessaasRefFeaturesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_features/event/${queryArg.id}`
      })
    }),
    getAllSaasRefModulesGet: build.query<
      GetAllSaasRefModulesGetApiResponse,
      GetAllSaasRefModulesGetApiArg
    >({
      query: () => ({ url: `/saas_ref_modules/` })
    }),
    createSaasRefModulesSaasRefModulesPost: build.mutation<
      CreateSaasRefModulesSaasRefModulesPostApiResponse,
      CreateSaasRefModulesSaasRefModulesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_modules/`,
        method: 'POST',
        body: queryArg.saasRefModulesInsert
      })
    }),
    updateSaasRefModulesSaasRefModulesIdPut: build.mutation<
      UpdateSaasRefModulesSaasRefModulesIdPutApiResponse,
      UpdateSaasRefModulesSaasRefModulesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_modules/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefModulesUpdate
      })
    }),
    deleteSaasRefModulesSaasRefModulesIdDelete: build.mutation<
      DeleteSaasRefModulesSaasRefModulesIdDeleteApiResponse,
      DeleteSaasRefModulesSaasRefModulesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_modules/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefModulesSaasRefModulesIdGet: build.query<
      GetSaasRefModulesSaasRefModulesIdGetApiResponse,
      GetSaasRefModulesSaasRefModulesIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_ref_modules/${queryArg.id}` })
    }),
    getAllsaasRefModulesEventGet: build.query<
      GetAllsaasRefModulesEventGetApiResponse,
      GetAllsaasRefModulesEventGetApiArg
    >({
      query: () => ({ url: `saas_ref_modules/event/` })
    }),
    createSaasRefModulessaasRefModulesEventPost: build.mutation<
      CreateSaasRefModulessaasRefModulesEventPostApiResponse,
      CreateSaasRefModulessaasRefModulesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_modules/event/`,
        method: 'POST',
        body: queryArg.saasRefModulesInsert
      })
    }),
    updateSaasRefModulessaasRefModulesEventIdPut: build.mutation<
      UpdateSaasRefModulessaasRefModulesEventIdPutApiResponse,
      UpdateSaasRefModulessaasRefModulesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_modules/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefModulesUpdate
      })
    }),
    deleteSaasRefModulessaasRefModulesEventIdDelete: build.mutation<
      DeleteSaasRefModulessaasRefModulesEventIdDeleteApiResponse,
      DeleteSaasRefModulessaasRefModulesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_modules/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefModulessaasRefModulesEventIdGet: build.query<
      GetSaasRefModulessaasRefModulesEventIdGetApiResponse,
      GetSaasRefModulessaasRefModulesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_modules/event/${queryArg.id}`
      })
    }),
    getAllSaasRefRolesGet: build.query<
      GetAllSaasRefRolesGetApiResponse,
      GetAllSaasRefRolesGetApiArg
    >({
      query: () => ({ url: `/saas_ref_roles/` })
    }),
    createSaasRefRolesSaasRefRolesPost: build.mutation<
      CreateSaasRefRolesSaasRefRolesPostApiResponse,
      CreateSaasRefRolesSaasRefRolesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_roles/`,
        method: 'POST',
        body: queryArg.saasRefRolesInsert
      })
    }),
    updateSaasRefRolesSaasRefRolesIdPut: build.mutation<
      UpdateSaasRefRolesSaasRefRolesIdPutApiResponse,
      UpdateSaasRefRolesSaasRefRolesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_roles/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefRolesUpdate
      })
    }),
    deleteSaasRefRolesSaasRefRolesIdDelete: build.mutation<
      DeleteSaasRefRolesSaasRefRolesIdDeleteApiResponse,
      DeleteSaasRefRolesSaasRefRolesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_roles/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefRolesSaasRefRolesIdGet: build.query<
      GetSaasRefRolesSaasRefRolesIdGetApiResponse,
      GetSaasRefRolesSaasRefRolesIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_ref_roles/${queryArg.id}` })
    }),
    getAllsaasRefRolesEventGet: build.query<
      GetAllsaasRefRolesEventGetApiResponse,
      GetAllsaasRefRolesEventGetApiArg
    >({
      query: () => ({ url: `saas_ref_roles/event/` })
    }),
    createSaasRefRolessaasRefRolesEventPost: build.mutation<
      CreateSaasRefRolessaasRefRolesEventPostApiResponse,
      CreateSaasRefRolessaasRefRolesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_roles/event/`,
        method: 'POST',
        body: queryArg.saasRefRolesInsert
      })
    }),
    updateSaasRefRolessaasRefRolesEventIdPut: build.mutation<
      UpdateSaasRefRolessaasRefRolesEventIdPutApiResponse,
      UpdateSaasRefRolessaasRefRolesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_roles/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefRolesUpdate
      })
    }),
    deleteSaasRefRolessaasRefRolesEventIdDelete: build.mutation<
      DeleteSaasRefRolessaasRefRolesEventIdDeleteApiResponse,
      DeleteSaasRefRolessaasRefRolesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_roles/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefRolessaasRefRolesEventIdGet: build.query<
      GetSaasRefRolessaasRefRolesEventIdGetApiResponse,
      GetSaasRefRolessaasRefRolesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `saas_ref_roles/event/${queryArg.id}` })
    }),
    getAllSaasRefSubscriptionsGet: build.query<
      GetAllSaasRefSubscriptionsGetApiResponse,
      GetAllSaasRefSubscriptionsGetApiArg
    >({
      query: () => ({ url: `/saas_ref_subscriptions/` })
    }),
    createSaasRefSubscriptionsSaasRefSubscriptionsPost: build.mutation<
      CreateSaasRefSubscriptionsSaasRefSubscriptionsPostApiResponse,
      CreateSaasRefSubscriptionsSaasRefSubscriptionsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_subscriptions/`,
        method: 'POST',
        body: queryArg.saasRefSubscriptionsInsert
      })
    }),
    updateSaasRefSubscriptionsSaasRefSubscriptionsIdPut: build.mutation<
      UpdateSaasRefSubscriptionsSaasRefSubscriptionsIdPutApiResponse,
      UpdateSaasRefSubscriptionsSaasRefSubscriptionsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_subscriptions/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefSubscriptionsUpdate
      })
    }),
    deleteSaasRefSubscriptionsSaasRefSubscriptionsIdDelete: build.mutation<
      DeleteSaasRefSubscriptionsSaasRefSubscriptionsIdDeleteApiResponse,
      DeleteSaasRefSubscriptionsSaasRefSubscriptionsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_subscriptions/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefSubscriptionsSaasRefSubscriptionsIdGet: build.query<
      GetSaasRefSubscriptionsSaasRefSubscriptionsIdGetApiResponse,
      GetSaasRefSubscriptionsSaasRefSubscriptionsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_subscriptions/${queryArg.id}`
      })
    }),
    getAllsaasRefSubscriptionsEventGet: build.query<
      GetAllsaasRefSubscriptionsEventGetApiResponse,
      GetAllsaasRefSubscriptionsEventGetApiArg
    >({
      query: () => ({ url: `saas_ref_subscriptions/event/` })
    }),
    createSaasRefSubscriptionssaasRefSubscriptionsEventPost: build.mutation<
      CreateSaasRefSubscriptionssaasRefSubscriptionsEventPostApiResponse,
      CreateSaasRefSubscriptionssaasRefSubscriptionsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_subscriptions/event/`,
        method: 'POST',
        body: queryArg.saasRefSubscriptionsInsert
      })
    }),
    updateSaasRefSubscriptionssaasRefSubscriptionsEventIdPut: build.mutation<
      UpdateSaasRefSubscriptionssaasRefSubscriptionsEventIdPutApiResponse,
      UpdateSaasRefSubscriptionssaasRefSubscriptionsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_subscriptions/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefSubscriptionsUpdate
      })
    }),
    deleteSaasRefSubscriptionssaasRefSubscriptionsEventIdDelete: build.mutation<
      DeleteSaasRefSubscriptionssaasRefSubscriptionsEventIdDeleteApiResponse,
      DeleteSaasRefSubscriptionssaasRefSubscriptionsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_subscriptions/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefSubscriptionssaasRefSubscriptionsEventIdGet: build.query<
      GetSaasRefSubscriptionssaasRefSubscriptionsEventIdGetApiResponse,
      GetSaasRefSubscriptionssaasRefSubscriptionsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_subscriptions/event/${queryArg.id}`
      })
    }),
    getAllSaasRefSubscriptionFeaturesGet: build.query<
      GetAllSaasRefSubscriptionFeaturesGetApiResponse,
      GetAllSaasRefSubscriptionFeaturesGetApiArg
    >({
      query: () => ({ url: `/saas_ref_subscription_features/` })
    }),
    createSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesPost:
      build.mutation<
        CreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesPostApiResponse,
        CreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_subscription_features/`,
          method: 'POST',
          body: queryArg.saasRefSubscriptionFeaturesInsert
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
          body: queryArg.saasRefSubscriptionFeaturesUpdate
        })
      }),
    deleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdDelete:
      build.mutation<
        DeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdDeleteApiResponse,
        DeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_subscription_features/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdGet: build.query<
      GetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdGetApiResponse,
      GetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_subscription_features/${queryArg.id}`
      })
    }),
    getAllsaasRefSubscriptionFeaturesEventGet: build.query<
      GetAllsaasRefSubscriptionFeaturesEventGetApiResponse,
      GetAllsaasRefSubscriptionFeaturesEventGetApiArg
    >({
      query: () => ({ url: `saas_ref_subscription_features/event/` })
    }),
    createSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventPost:
      build.mutation<
        CreateSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventPostApiResponse,
        CreateSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `saas_ref_subscription_features/event/`,
          method: 'POST',
          body: queryArg.saasRefSubscriptionFeaturesInsert
        })
      }),
    updateSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdPut:
      build.mutation<
        UpdateSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdPutApiResponse,
        UpdateSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `saas_ref_subscription_features/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.saasRefSubscriptionFeaturesUpdate
        })
      }),
    deleteSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdDelete:
      build.mutation<
        DeleteSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdDeleteApiResponse,
        DeleteSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `saas_ref_subscription_features/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdGet:
      build.query<
        GetSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdGetApiResponse,
        GetSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdGetApiArg
      >({
        query: (queryArg: any) => ({
          url: `saas_ref_subscription_features/event/${queryArg.id}`
        })
      }),
    getAllSaasRefTenantCurrenciesGet: build.query<
      GetAllSaasRefTenantCurrenciesGetApiResponse,
      GetAllSaasRefTenantCurrenciesGetApiArg
    >({
      query: () => ({ url: `/saas_ref_tenant_currencies/` })
    }),
    createSaasRefTenantCurrenciesSaasRefTenantCurrenciesPost: build.mutation<
      CreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesPostApiResponse,
      CreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_tenant_currencies/`,
        method: 'POST',
        body: queryArg.saasRefTenantCurrenciesInsert
      })
    }),
    updateSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdPut: build.mutation<
      UpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdPutApiResponse,
      UpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_tenant_currencies/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefTenantCurrenciesUpdate
      })
    }),
    deleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdDelete:
      build.mutation<
        DeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdDeleteApiResponse,
        DeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_ref_tenant_currencies/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdGet: build.query<
      GetSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdGetApiResponse,
      GetSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_tenant_currencies/${queryArg.id}`
      })
    }),
    getAllsaasRefTenantCurrenciesEventGet: build.query<
      GetAllsaasRefTenantCurrenciesEventGetApiResponse,
      GetAllsaasRefTenantCurrenciesEventGetApiArg
    >({
      query: () => ({ url: `saas_ref_tenant_currencies/event/` })
    }),
    createSaasRefTenantCurrenciessaasRefTenantCurrenciesEventPost:
      build.mutation<
        CreateSaasRefTenantCurrenciessaasRefTenantCurrenciesEventPostApiResponse,
        CreateSaasRefTenantCurrenciessaasRefTenantCurrenciesEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `saas_ref_tenant_currencies/event/`,
          method: 'POST',
          body: queryArg.saasRefTenantCurrenciesInsert
        })
      }),
    updateSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdPut:
      build.mutation<
        UpdateSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdPutApiResponse,
        UpdateSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `saas_ref_tenant_currencies/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.saasRefTenantCurrenciesUpdate
        })
      }),
    deleteSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdDelete:
      build.mutation<
        DeleteSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdDeleteApiResponse,
        DeleteSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `saas_ref_tenant_currencies/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdGet: build.query<
      GetSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdGetApiResponse,
      GetSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_tenant_currencies/event/${queryArg.id}`
      })
    }),
    getAllSaasRefWorkflowsGet: build.query<
      GetAllSaasRefWorkflowsGetApiResponse,
      GetAllSaasRefWorkflowsGetApiArg
    >({
      query: () => ({ url: `/saas_ref_workflows/` })
    }),
    createSaasRefWorkflowsSaasRefWorkflowsPost: build.mutation<
      CreateSaasRefWorkflowsSaasRefWorkflowsPostApiResponse,
      CreateSaasRefWorkflowsSaasRefWorkflowsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_workflows/`,
        method: 'POST',
        body: queryArg.saasRefWorkflowsInsert
      })
    }),
    updateSaasRefWorkflowsSaasRefWorkflowsIdPut: build.mutation<
      UpdateSaasRefWorkflowsSaasRefWorkflowsIdPutApiResponse,
      UpdateSaasRefWorkflowsSaasRefWorkflowsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_workflows/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefWorkflowsUpdate
      })
    }),
    deleteSaasRefWorkflowsSaasRefWorkflowsIdDelete: build.mutation<
      DeleteSaasRefWorkflowsSaasRefWorkflowsIdDeleteApiResponse,
      DeleteSaasRefWorkflowsSaasRefWorkflowsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_ref_workflows/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefWorkflowsSaasRefWorkflowsIdGet: build.query<
      GetSaasRefWorkflowsSaasRefWorkflowsIdGetApiResponse,
      GetSaasRefWorkflowsSaasRefWorkflowsIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_ref_workflows/${queryArg.id}` })
    }),
    getAllsaasRefWorkflowsEventGet: build.query<
      GetAllsaasRefWorkflowsEventGetApiResponse,
      GetAllsaasRefWorkflowsEventGetApiArg
    >({
      query: () => ({ url: `saas_ref_workflows/event/` })
    }),
    createSaasRefWorkflowssaasRefWorkflowsEventPost: build.mutation<
      CreateSaasRefWorkflowssaasRefWorkflowsEventPostApiResponse,
      CreateSaasRefWorkflowssaasRefWorkflowsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_workflows/event/`,
        method: 'POST',
        body: queryArg.saasRefWorkflowsInsert
      })
    }),
    updateSaasRefWorkflowssaasRefWorkflowsEventIdPut: build.mutation<
      UpdateSaasRefWorkflowssaasRefWorkflowsEventIdPutApiResponse,
      UpdateSaasRefWorkflowssaasRefWorkflowsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_workflows/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRefWorkflowsUpdate
      })
    }),
    deleteSaasRefWorkflowssaasRefWorkflowsEventIdDelete: build.mutation<
      DeleteSaasRefWorkflowssaasRefWorkflowsEventIdDeleteApiResponse,
      DeleteSaasRefWorkflowssaasRefWorkflowsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_workflows/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRefWorkflowssaasRefWorkflowsEventIdGet: build.query<
      GetSaasRefWorkflowssaasRefWorkflowsEventIdGetApiResponse,
      GetSaasRefWorkflowssaasRefWorkflowsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_ref_workflows/event/${queryArg.id}`
      })
    }),
    getAllSaasRolePermissionGet: build.query<
      GetAllSaasRolePermissionGetApiResponse,
      GetAllSaasRolePermissionGetApiArg
    >({
      query: () => ({ url: `/saas_role_permission/` })
    }),
    createSaasRolePermissionSaasRolePermissionPost: build.mutation<
      CreateSaasRolePermissionSaasRolePermissionPostApiResponse,
      CreateSaasRolePermissionSaasRolePermissionPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_role_permission/`,
        method: 'POST',
        body: queryArg.saasRolePermissionInsert
      })
    }),
    updateSaasRolePermissionSaasRolePermissionIdPut: build.mutation<
      UpdateSaasRolePermissionSaasRolePermissionIdPutApiResponse,
      UpdateSaasRolePermissionSaasRolePermissionIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_role_permission/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRolePermissionUpdate
      })
    }),
    deleteSaasRolePermissionSaasRolePermissionIdDelete: build.mutation<
      DeleteSaasRolePermissionSaasRolePermissionIdDeleteApiResponse,
      DeleteSaasRolePermissionSaasRolePermissionIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_role_permission/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRolePermissionSaasRolePermissionIdGet: build.query<
      GetSaasRolePermissionSaasRolePermissionIdGetApiResponse,
      GetSaasRolePermissionSaasRolePermissionIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_role_permission/${queryArg.id}`
      })
    }),
    getAllsaasRolePermissionEventGet: build.query<
      GetAllsaasRolePermissionEventGetApiResponse,
      GetAllsaasRolePermissionEventGetApiArg
    >({
      query: () => ({ url: `saas_role_permission/event/` })
    }),
    createSaasRolePermissionsaasRolePermissionEventPost: build.mutation<
      CreateSaasRolePermissionsaasRolePermissionEventPostApiResponse,
      CreateSaasRolePermissionsaasRolePermissionEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_role_permission/event/`,
        method: 'POST',
        body: queryArg.saasRolePermissionInsert
      })
    }),
    updateSaasRolePermissionsaasRolePermissionEventIdPut: build.mutation<
      UpdateSaasRolePermissionsaasRolePermissionEventIdPutApiResponse,
      UpdateSaasRolePermissionsaasRolePermissionEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_role_permission/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasRolePermissionUpdate
      })
    }),
    deleteSaasRolePermissionsaasRolePermissionEventIdDelete: build.mutation<
      DeleteSaasRolePermissionsaasRolePermissionEventIdDeleteApiResponse,
      DeleteSaasRolePermissionsaasRolePermissionEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_role_permission/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasRolePermissionsaasRolePermissionEventIdGet: build.query<
      GetSaasRolePermissionsaasRolePermissionEventIdGetApiResponse,
      GetSaasRolePermissionsaasRolePermissionEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_role_permission/event/${queryArg.id}`
      })
    }),
    getAllSaasTeamsGet: build.query<
      GetAllSaasTeamsGetApiResponse,
      GetAllSaasTeamsGetApiArg
    >({
      query: () => ({ url: `/saas_teams/` })
    }),
    createSaasTeamsSaasTeamsPost: build.mutation<
      CreateSaasTeamsSaasTeamsPostApiResponse,
      CreateSaasTeamsSaasTeamsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_teams/`,
        method: 'POST',
        body: queryArg.saasTeamsInsert
      })
    }),
    updateSaasTeamsSaasTeamsIdPut: build.mutation<
      UpdateSaasTeamsSaasTeamsIdPutApiResponse,
      UpdateSaasTeamsSaasTeamsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_teams/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasTeamsUpdate
      })
    }),
    deleteSaasTeamsSaasTeamsIdDelete: build.mutation<
      DeleteSaasTeamsSaasTeamsIdDeleteApiResponse,
      DeleteSaasTeamsSaasTeamsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_teams/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasTeamsSaasTeamsIdGet: build.query<
      GetSaasTeamsSaasTeamsIdGetApiResponse,
      GetSaasTeamsSaasTeamsIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_teams/${queryArg.id}` })
    }),
    getAllsaasTeamsEventGet: build.query<
      GetAllsaasTeamsEventGetApiResponse,
      GetAllsaasTeamsEventGetApiArg
    >({
      query: () => ({ url: `saas_teams/event/` })
    }),
    createSaasTeamssaasTeamsEventPost: build.mutation<
      CreateSaasTeamssaasTeamsEventPostApiResponse,
      CreateSaasTeamssaasTeamsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_teams/event/`,
        method: 'POST',
        body: queryArg.saasTeamsInsert
      })
    }),
    updateSaasTeamssaasTeamsEventIdPut: build.mutation<
      UpdateSaasTeamssaasTeamsEventIdPutApiResponse,
      UpdateSaasTeamssaasTeamsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_teams/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasTeamsUpdate
      })
    }),
    deleteSaasTeamssaasTeamsEventIdDelete: build.mutation<
      DeleteSaasTeamssaasTeamsEventIdDeleteApiResponse,
      DeleteSaasTeamssaasTeamsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_teams/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasTeamssaasTeamsEventIdGet: build.query<
      GetSaasTeamssaasTeamsEventIdGetApiResponse,
      GetSaasTeamssaasTeamsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `saas_teams/event/${queryArg.id}` })
    }),
    getAllSaasTenantsGet: build.query<
      GetAllSaasTenantsGetApiResponse,
      GetAllSaasTenantsGetApiArg
    >({
      query: () => ({ url: `/saas_tenants/` })
    }),
    createSaasTenantsSaasTenantsPost: build.mutation<
      CreateSaasTenantsSaasTenantsPostApiResponse,
      CreateSaasTenantsSaasTenantsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_tenants/`,
        method: 'POST',
        body: queryArg.saasTenantsInsert
      })
    }),
    updateSaasTenantsSaasTenantsIdPut: build.mutation<
      UpdateSaasTenantsSaasTenantsIdPutApiResponse,
      UpdateSaasTenantsSaasTenantsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_tenants/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasTenantsUpdate
      })
    }),
    deleteSaasTenantsSaasTenantsIdDelete: build.mutation<
      DeleteSaasTenantsSaasTenantsIdDeleteApiResponse,
      DeleteSaasTenantsSaasTenantsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_tenants/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasTenantsSaasTenantsIdGet: build.query<
      GetSaasTenantsSaasTenantsIdGetApiResponse,
      GetSaasTenantsSaasTenantsIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_tenants/${queryArg.id}` })
    }),
    getAllsaasTenantsEventGet: build.query<
      GetAllsaasTenantsEventGetApiResponse,
      GetAllsaasTenantsEventGetApiArg
    >({
      query: () => ({ url: `saas_tenants/event/` })
    }),
    createSaasTenantssaasTenantsEventPost: build.mutation<
      CreateSaasTenantssaasTenantsEventPostApiResponse,
      CreateSaasTenantssaasTenantsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_tenants/event/`,
        method: 'POST',
        body: queryArg.saasTenantsInsert
      })
    }),
    updateSaasTenantssaasTenantsEventIdPut: build.mutation<
      UpdateSaasTenantssaasTenantsEventIdPutApiResponse,
      UpdateSaasTenantssaasTenantsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_tenants/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasTenantsUpdate
      })
    }),
    deleteSaasTenantssaasTenantsEventIdDelete: build.mutation<
      DeleteSaasTenantssaasTenantsEventIdDeleteApiResponse,
      DeleteSaasTenantssaasTenantsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_tenants/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasTenantssaasTenantsEventIdGet: build.query<
      GetSaasTenantssaasTenantsEventIdGetApiResponse,
      GetSaasTenantssaasTenantsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `saas_tenants/event/${queryArg.id}` })
    }),
    getAllSaasTenantSubscriptionsGet: build.query<
      GetAllSaasTenantSubscriptionsGetApiResponse,
      GetAllSaasTenantSubscriptionsGetApiArg
    >({
      query: () => ({ url: `/saas_tenant_subscriptions/` })
    }),
    createSaasTenantSubscriptionsSaasTenantSubscriptionsPost: build.mutation<
      CreateSaasTenantSubscriptionsSaasTenantSubscriptionsPostApiResponse,
      CreateSaasTenantSubscriptionsSaasTenantSubscriptionsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_tenant_subscriptions/`,
        method: 'POST',
        body: queryArg.saasTenantSubscriptionsInsert
      })
    }),
    updateSaasTenantSubscriptionsSaasTenantSubscriptionsIdPut: build.mutation<
      UpdateSaasTenantSubscriptionsSaasTenantSubscriptionsIdPutApiResponse,
      UpdateSaasTenantSubscriptionsSaasTenantSubscriptionsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_tenant_subscriptions/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasTenantSubscriptionsUpdate
      })
    }),
    deleteSaasTenantSubscriptionsSaasTenantSubscriptionsIdDelete:
      build.mutation<
        DeleteSaasTenantSubscriptionsSaasTenantSubscriptionsIdDeleteApiResponse,
        DeleteSaasTenantSubscriptionsSaasTenantSubscriptionsIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/saas_tenant_subscriptions/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSaasTenantSubscriptionsSaasTenantSubscriptionsIdGet: build.query<
      GetSaasTenantSubscriptionsSaasTenantSubscriptionsIdGetApiResponse,
      GetSaasTenantSubscriptionsSaasTenantSubscriptionsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_tenant_subscriptions/${queryArg.id}`
      })
    }),
    getAllsaasTenantSubscriptionsEventGet: build.query<
      GetAllsaasTenantSubscriptionsEventGetApiResponse,
      GetAllsaasTenantSubscriptionsEventGetApiArg
    >({
      query: () => ({ url: `saas_tenant_subscriptions/event/` })
    }),
    createSaasTenantSubscriptionssaasTenantSubscriptionsEventPost:
      build.mutation<
        CreateSaasTenantSubscriptionssaasTenantSubscriptionsEventPostApiResponse,
        CreateSaasTenantSubscriptionssaasTenantSubscriptionsEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `saas_tenant_subscriptions/event/`,
          method: 'POST',
          body: queryArg.saasTenantSubscriptionsInsert
        })
      }),
    updateSaasTenantSubscriptionssaasTenantSubscriptionsEventIdPut:
      build.mutation<
        UpdateSaasTenantSubscriptionssaasTenantSubscriptionsEventIdPutApiResponse,
        UpdateSaasTenantSubscriptionssaasTenantSubscriptionsEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `saas_tenant_subscriptions/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.saasTenantSubscriptionsUpdate
        })
      }),
    deleteSaasTenantSubscriptionssaasTenantSubscriptionsEventIdDelete:
      build.mutation<
        DeleteSaasTenantSubscriptionssaasTenantSubscriptionsEventIdDeleteApiResponse,
        DeleteSaasTenantSubscriptionssaasTenantSubscriptionsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `saas_tenant_subscriptions/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSaasTenantSubscriptionssaasTenantSubscriptionsEventIdGet: build.query<
      GetSaasTenantSubscriptionssaasTenantSubscriptionsEventIdGetApiResponse,
      GetSaasTenantSubscriptionssaasTenantSubscriptionsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_tenant_subscriptions/event/${queryArg.id}`
      })
    }),
    getAllSaasTenantUserGet: build.query<
      GetAllSaasTenantUserGetApiResponse,
      GetAllSaasTenantUserGetApiArg
    >({
      query: () => ({ url: `/saas_tenant_user/` })
    }),
    createSaasTenantUserSaasTenantUserPost: build.mutation<
      CreateSaasTenantUserSaasTenantUserPostApiResponse,
      CreateSaasTenantUserSaasTenantUserPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_tenant_user/`,
        method: 'POST',
        body: queryArg.saasTenantUserInsert
      })
    }),
    updateSaasTenantUserSaasTenantUserIdPut: build.mutation<
      UpdateSaasTenantUserSaasTenantUserIdPutApiResponse,
      UpdateSaasTenantUserSaasTenantUserIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_tenant_user/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasTenantUserUpdate
      })
    }),
    deleteSaasTenantUserSaasTenantUserIdDelete: build.mutation<
      DeleteSaasTenantUserSaasTenantUserIdDeleteApiResponse,
      DeleteSaasTenantUserSaasTenantUserIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_tenant_user/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasTenantUserSaasTenantUserIdGet: build.query<
      GetSaasTenantUserSaasTenantUserIdGetApiResponse,
      GetSaasTenantUserSaasTenantUserIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_tenant_user/${queryArg.id}` })
    }),
    getAllsaasTenantUserEventGet: build.query<
      GetAllsaasTenantUserEventGetApiResponse,
      GetAllsaasTenantUserEventGetApiArg
    >({
      query: () => ({ url: `saas_tenant_user/event/` })
    }),
    createSaasTenantUsersaasTenantUserEventPost: build.mutation<
      CreateSaasTenantUsersaasTenantUserEventPostApiResponse,
      CreateSaasTenantUsersaasTenantUserEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_tenant_user/event/`,
        method: 'POST',
        body: queryArg.saasTenantUserInsert
      })
    }),
    updateSaasTenantUsersaasTenantUserEventIdPut: build.mutation<
      UpdateSaasTenantUsersaasTenantUserEventIdPutApiResponse,
      UpdateSaasTenantUsersaasTenantUserEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_tenant_user/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasTenantUserUpdate
      })
    }),
    deleteSaasTenantUsersaasTenantUserEventIdDelete: build.mutation<
      DeleteSaasTenantUsersaasTenantUserEventIdDeleteApiResponse,
      DeleteSaasTenantUsersaasTenantUserEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_tenant_user/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasTenantUsersaasTenantUserEventIdGet: build.query<
      GetSaasTenantUsersaasTenantUserEventIdGetApiResponse,
      GetSaasTenantUsersaasTenantUserEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_tenant_user/event/${queryArg.id}`
      })
    }),
    getAllSaasUserGet: build.query<
      GetAllSaasUserGetApiResponse,
      GetAllSaasUserGetApiArg
    >({
      query: () => ({ url: `/saas_user/` })
    }),
    createSaasUserSaasUserPost: build.mutation<
      CreateSaasUserSaasUserPostApiResponse,
      CreateSaasUserSaasUserPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_user/`,
        method: 'POST',
        body: queryArg.saasUserInsert
      })
    }),
    updateSaasUserSaasUserIdPut: build.mutation<
      UpdateSaasUserSaasUserIdPutApiResponse,
      UpdateSaasUserSaasUserIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_user/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasUserUpdate
      })
    }),
    deleteSaasUserSaasUserIdDelete: build.mutation<
      DeleteSaasUserSaasUserIdDeleteApiResponse,
      DeleteSaasUserSaasUserIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_user/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasUserSaasUserIdGet: build.query<
      GetSaasUserSaasUserIdGetApiResponse,
      GetSaasUserSaasUserIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_user/${queryArg.id}` })
    }),
    getAllsaasUserEventGet: build.query<
      GetAllsaasUserEventGetApiResponse,
      GetAllsaasUserEventGetApiArg
    >({
      query: () => ({ url: `saas_user/event/` })
    }),
    createSaasUsersaasUserEventPost: build.mutation<
      CreateSaasUsersaasUserEventPostApiResponse,
      CreateSaasUsersaasUserEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_user/event/`,
        method: 'POST',
        body: queryArg.saasUserInsert
      })
    }),
    updateSaasUsersaasUserEventIdPut: build.mutation<
      UpdateSaasUsersaasUserEventIdPutApiResponse,
      UpdateSaasUsersaasUserEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_user/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasUserUpdate
      })
    }),
    deleteSaasUsersaasUserEventIdDelete: build.mutation<
      DeleteSaasUsersaasUserEventIdDeleteApiResponse,
      DeleteSaasUsersaasUserEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_user/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasUsersaasUserEventIdGet: build.query<
      GetSaasUsersaasUserEventIdGetApiResponse,
      GetSaasUsersaasUserEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `saas_user/event/${queryArg.id}` })
    }),
    getAllSaasUserInvitationsGet: build.query<
      GetAllSaasUserInvitationsGetApiResponse,
      GetAllSaasUserInvitationsGetApiArg
    >({
      query: () => ({ url: `/saas_user_invitations/` })
    }),
    createSaasUserInvitationsSaasUserInvitationsPost: build.mutation<
      CreateSaasUserInvitationsSaasUserInvitationsPostApiResponse,
      CreateSaasUserInvitationsSaasUserInvitationsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_user_invitations/`,
        method: 'POST',
        body: queryArg.saasUserInvitationsInsert
      })
    }),
    updateSaasUserInvitationsSaasUserInvitationsIdPut: build.mutation<
      UpdateSaasUserInvitationsSaasUserInvitationsIdPutApiResponse,
      UpdateSaasUserInvitationsSaasUserInvitationsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_user_invitations/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasUserInvitationsUpdate
      })
    }),
    deleteSaasUserInvitationsSaasUserInvitationsIdDelete: build.mutation<
      DeleteSaasUserInvitationsSaasUserInvitationsIdDeleteApiResponse,
      DeleteSaasUserInvitationsSaasUserInvitationsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_user_invitations/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasUserInvitationsSaasUserInvitationsIdGet: build.query<
      GetSaasUserInvitationsSaasUserInvitationsIdGetApiResponse,
      GetSaasUserInvitationsSaasUserInvitationsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_user_invitations/${queryArg.id}`
      })
    }),
    getAllsaasUserInvitationsEventGet: build.query<
      GetAllsaasUserInvitationsEventGetApiResponse,
      GetAllsaasUserInvitationsEventGetApiArg
    >({
      query: () => ({ url: `saas_user_invitations/event/` })
    }),
    createSaasUserInvitationssaasUserInvitationsEventPost: build.mutation<
      CreateSaasUserInvitationssaasUserInvitationsEventPostApiResponse,
      CreateSaasUserInvitationssaasUserInvitationsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_user_invitations/event/`,
        method: 'POST',
        body: queryArg.saasUserInvitationsInsert
      })
    }),
    updateSaasUserInvitationssaasUserInvitationsEventIdPut: build.mutation<
      UpdateSaasUserInvitationssaasUserInvitationsEventIdPutApiResponse,
      UpdateSaasUserInvitationssaasUserInvitationsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_user_invitations/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasUserInvitationsUpdate
      })
    }),
    deleteSaasUserInvitationssaasUserInvitationsEventIdDelete: build.mutation<
      DeleteSaasUserInvitationssaasUserInvitationsEventIdDeleteApiResponse,
      DeleteSaasUserInvitationssaasUserInvitationsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_user_invitations/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasUserInvitationssaasUserInvitationsEventIdGet: build.query<
      GetSaasUserInvitationssaasUserInvitationsEventIdGetApiResponse,
      GetSaasUserInvitationssaasUserInvitationsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_user_invitations/event/${queryArg.id}`
      })
    }),
    getAllSaasUserRoleGet: build.query<
      GetAllSaasUserRoleGetApiResponse,
      GetAllSaasUserRoleGetApiArg
    >({
      query: () => ({ url: `/saas_user_role/` })
    }),
    createSaasUserRoleSaasUserRolePost: build.mutation<
      CreateSaasUserRoleSaasUserRolePostApiResponse,
      CreateSaasUserRoleSaasUserRolePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_user_role/`,
        method: 'POST',
        body: queryArg.saasUserRoleInsert
      })
    }),
    updateSaasUserRoleSaasUserRoleIdPut: build.mutation<
      UpdateSaasUserRoleSaasUserRoleIdPutApiResponse,
      UpdateSaasUserRoleSaasUserRoleIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_user_role/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasUserRoleUpdate
      })
    }),
    deleteSaasUserRoleSaasUserRoleIdDelete: build.mutation<
      DeleteSaasUserRoleSaasUserRoleIdDeleteApiResponse,
      DeleteSaasUserRoleSaasUserRoleIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/saas_user_role/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasUserRoleSaasUserRoleIdGet: build.query<
      GetSaasUserRoleSaasUserRoleIdGetApiResponse,
      GetSaasUserRoleSaasUserRoleIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/saas_user_role/${queryArg.id}` })
    }),
    getAllsaasUserRoleEventGet: build.query<
      GetAllsaasUserRoleEventGetApiResponse,
      GetAllsaasUserRoleEventGetApiArg
    >({
      query: () => ({ url: `saas_user_role/event/` })
    }),
    createSaasUserRolesaasUserRoleEventPost: build.mutation<
      CreateSaasUserRolesaasUserRoleEventPostApiResponse,
      CreateSaasUserRolesaasUserRoleEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_user_role/event/`,
        method: 'POST',
        body: queryArg.saasUserRoleInsert
      })
    }),
    updateSaasUserRolesaasUserRoleEventIdPut: build.mutation<
      UpdateSaasUserRolesaasUserRoleEventIdPutApiResponse,
      UpdateSaasUserRolesaasUserRoleEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_user_role/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.saasUserRoleUpdate
      })
    }),
    deleteSaasUserRolesaasUserRoleEventIdDelete: build.mutation<
      DeleteSaasUserRolesaasUserRoleEventIdDeleteApiResponse,
      DeleteSaasUserRolesaasUserRoleEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `saas_user_role/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSaasUserRolesaasUserRoleEventIdGet: build.query<
      GetSaasUserRolesaasUserRoleEventIdGetApiResponse,
      GetSaasUserRolesaasUserRoleEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `saas_user_role/event/${queryArg.id}` })
    }),
    getAllSetAssetTypeGet: build.query<
      GetAllSetAssetTypeGetApiResponse,
      GetAllSetAssetTypeGetApiArg
    >({
      query: () => ({ url: `/set_asset_type/` })
    }),
    createSetAssetTypeSetAssetTypePost: build.mutation<
      CreateSetAssetTypeSetAssetTypePostApiResponse,
      CreateSetAssetTypeSetAssetTypePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_asset_type/`,
        method: 'POST',
        body: queryArg.setAssetTypeInsert
      })
    }),
    updateSetAssetTypeSetAssetTypeIdPut: build.mutation<
      UpdateSetAssetTypeSetAssetTypeIdPutApiResponse,
      UpdateSetAssetTypeSetAssetTypeIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_asset_type/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAssetTypeUpdate
      })
    }),
    deleteSetAssetTypeSetAssetTypeIdDelete: build.mutation<
      DeleteSetAssetTypeSetAssetTypeIdDeleteApiResponse,
      DeleteSetAssetTypeSetAssetTypeIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_asset_type/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAssetTypeSetAssetTypeIdGet: build.query<
      GetSetAssetTypeSetAssetTypeIdGetApiResponse,
      GetSetAssetTypeSetAssetTypeIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/set_asset_type/${queryArg.id}` })
    }),
    getAllsetAssetTypeEventGet: build.query<
      GetAllsetAssetTypeEventGetApiResponse,
      GetAllsetAssetTypeEventGetApiArg
    >({
      query: () => ({ url: `set_asset_type/event/` })
    }),
    createSetAssetTypesetAssetTypeEventPost: build.mutation<
      CreateSetAssetTypesetAssetTypeEventPostApiResponse,
      CreateSetAssetTypesetAssetTypeEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_asset_type/event/`,
        method: 'POST',
        body: queryArg.setAssetTypeInsert
      })
    }),
    updateSetAssetTypesetAssetTypeEventIdPut: build.mutation<
      UpdateSetAssetTypesetAssetTypeEventIdPutApiResponse,
      UpdateSetAssetTypesetAssetTypeEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_asset_type/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAssetTypeUpdate
      })
    }),
    deleteSetAssetTypesetAssetTypeEventIdDelete: build.mutation<
      DeleteSetAssetTypesetAssetTypeEventIdDeleteApiResponse,
      DeleteSetAssetTypesetAssetTypeEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_asset_type/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAssetTypesetAssetTypeEventIdGet: build.query<
      GetSetAssetTypesetAssetTypeEventIdGetApiResponse,
      GetSetAssetTypesetAssetTypeEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `set_asset_type/event/${queryArg.id}` })
    }),
    getAllSetAstActivityNamesGet: build.query<
      GetAllSetAstActivityNamesGetApiResponse,
      GetAllSetAstActivityNamesGetApiArg
    >({
      query: () => ({ url: `/set_ast_activity_names/` })
    }),
    createSetAstActivityNamesSetAstActivityNamesPost: build.mutation<
      CreateSetAstActivityNamesSetAstActivityNamesPostApiResponse,
      CreateSetAstActivityNamesSetAstActivityNamesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_activity_names/`,
        method: 'POST',
        body: queryArg.setAstActivityNamesInsert
      })
    }),
    updateSetAstActivityNamesSetAstActivityNamesIdPut: build.mutation<
      UpdateSetAstActivityNamesSetAstActivityNamesIdPutApiResponse,
      UpdateSetAstActivityNamesSetAstActivityNamesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_activity_names/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstActivityNamesUpdate
      })
    }),
    deleteSetAstActivityNamesSetAstActivityNamesIdDelete: build.mutation<
      DeleteSetAstActivityNamesSetAstActivityNamesIdDeleteApiResponse,
      DeleteSetAstActivityNamesSetAstActivityNamesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_activity_names/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstActivityNamesSetAstActivityNamesIdGet: build.query<
      GetSetAstActivityNamesSetAstActivityNamesIdGetApiResponse,
      GetSetAstActivityNamesSetAstActivityNamesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_activity_names/${queryArg.id}`
      })
    }),
    getAllsetAstActivityNamesEventGet: build.query<
      GetAllsetAstActivityNamesEventGetApiResponse,
      GetAllsetAstActivityNamesEventGetApiArg
    >({
      query: () => ({ url: `set_ast_activity_names/event/` })
    }),
    createSetAstActivityNamessetAstActivityNamesEventPost: build.mutation<
      CreateSetAstActivityNamessetAstActivityNamesEventPostApiResponse,
      CreateSetAstActivityNamessetAstActivityNamesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_activity_names/event/`,
        method: 'POST',
        body: queryArg.setAstActivityNamesInsert
      })
    }),
    updateSetAstActivityNamessetAstActivityNamesEventIdPut: build.mutation<
      UpdateSetAstActivityNamessetAstActivityNamesEventIdPutApiResponse,
      UpdateSetAstActivityNamessetAstActivityNamesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_activity_names/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstActivityNamesUpdate
      })
    }),
    deleteSetAstActivityNamessetAstActivityNamesEventIdDelete: build.mutation<
      DeleteSetAstActivityNamessetAstActivityNamesEventIdDeleteApiResponse,
      DeleteSetAstActivityNamessetAstActivityNamesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_activity_names/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstActivityNamessetAstActivityNamesEventIdGet: build.query<
      GetSetAstActivityNamessetAstActivityNamesEventIdGetApiResponse,
      GetSetAstActivityNamessetAstActivityNamesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_activity_names/event/${queryArg.id}`
      })
    }),
    getAllSetAstAssetTypeGroupGet: build.query<
      GetAllSetAstAssetTypeGroupGetApiResponse,
      GetAllSetAstAssetTypeGroupGetApiArg
    >({
      query: () => ({ url: `/set_ast_asset_type_group/` })
    }),
    createSetAstAssetTypeGroupSetAstAssetTypeGroupPost: build.mutation<
      CreateSetAstAssetTypeGroupSetAstAssetTypeGroupPostApiResponse,
      CreateSetAstAssetTypeGroupSetAstAssetTypeGroupPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_asset_type_group/`,
        method: 'POST',
        body: queryArg.setAstAssetTypeGroupInsert
      })
    }),
    updateSetAstAssetTypeGroupSetAstAssetTypeGroupIdPut: build.mutation<
      UpdateSetAstAssetTypeGroupSetAstAssetTypeGroupIdPutApiResponse,
      UpdateSetAstAssetTypeGroupSetAstAssetTypeGroupIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_asset_type_group/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstAssetTypeGroupUpdate
      })
    }),
    deleteSetAstAssetTypeGroupSetAstAssetTypeGroupIdDelete: build.mutation<
      DeleteSetAstAssetTypeGroupSetAstAssetTypeGroupIdDeleteApiResponse,
      DeleteSetAstAssetTypeGroupSetAstAssetTypeGroupIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_asset_type_group/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstAssetTypeGroupSetAstAssetTypeGroupIdGet: build.query<
      GetSetAstAssetTypeGroupSetAstAssetTypeGroupIdGetApiResponse,
      GetSetAstAssetTypeGroupSetAstAssetTypeGroupIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_asset_type_group/${queryArg.id}`
      })
    }),
    getAllsetAstAssetTypeGroupEventGet: build.query<
      GetAllsetAstAssetTypeGroupEventGetApiResponse,
      GetAllsetAstAssetTypeGroupEventGetApiArg
    >({
      query: () => ({ url: `set_ast_asset_type_group/event/` })
    }),
    createSetAstAssetTypeGroupsetAstAssetTypeGroupEventPost: build.mutation<
      CreateSetAstAssetTypeGroupsetAstAssetTypeGroupEventPostApiResponse,
      CreateSetAstAssetTypeGroupsetAstAssetTypeGroupEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_asset_type_group/event/`,
        method: 'POST',
        body: queryArg.setAstAssetTypeGroupInsert
      })
    }),
    updateSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdPut: build.mutation<
      UpdateSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdPutApiResponse,
      UpdateSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_asset_type_group/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstAssetTypeGroupUpdate
      })
    }),
    deleteSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdDelete: build.mutation<
      DeleteSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdDeleteApiResponse,
      DeleteSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_asset_type_group/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdGet: build.query<
      GetSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdGetApiResponse,
      GetSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_asset_type_group/event/${queryArg.id}`
      })
    }),
    getAllSetAstOwnerCategoryGet: build.query<
      GetAllSetAstOwnerCategoryGetApiResponse,
      GetAllSetAstOwnerCategoryGetApiArg
    >({
      query: () => ({ url: `/set_ast_owner_category/` })
    }),
    createSetAstOwnerCategorySetAstOwnerCategoryPost: build.mutation<
      CreateSetAstOwnerCategorySetAstOwnerCategoryPostApiResponse,
      CreateSetAstOwnerCategorySetAstOwnerCategoryPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_owner_category/`,
        method: 'POST',
        body: queryArg.setAstOwnerCategoryInsert
      })
    }),
    updateSetAstOwnerCategorySetAstOwnerCategoryIdPut: build.mutation<
      UpdateSetAstOwnerCategorySetAstOwnerCategoryIdPutApiResponse,
      UpdateSetAstOwnerCategorySetAstOwnerCategoryIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_owner_category/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstOwnerCategoryUpdate
      })
    }),
    deleteSetAstOwnerCategorySetAstOwnerCategoryIdDelete: build.mutation<
      DeleteSetAstOwnerCategorySetAstOwnerCategoryIdDeleteApiResponse,
      DeleteSetAstOwnerCategorySetAstOwnerCategoryIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_owner_category/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstOwnerCategorySetAstOwnerCategoryIdGet: build.query<
      GetSetAstOwnerCategorySetAstOwnerCategoryIdGetApiResponse,
      GetSetAstOwnerCategorySetAstOwnerCategoryIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_owner_category/${queryArg.id}`
      })
    }),
    getAllsetAstOwnerCategoryEventGet: build.query<
      GetAllsetAstOwnerCategoryEventGetApiResponse,
      GetAllsetAstOwnerCategoryEventGetApiArg
    >({
      query: () => ({ url: `set_ast_owner_category/event/` })
    }),
    createSetAstOwnerCategorysetAstOwnerCategoryEventPost: build.mutation<
      CreateSetAstOwnerCategorysetAstOwnerCategoryEventPostApiResponse,
      CreateSetAstOwnerCategorysetAstOwnerCategoryEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_owner_category/event/`,
        method: 'POST',
        body: queryArg.setAstOwnerCategoryInsert
      })
    }),
    updateSetAstOwnerCategorysetAstOwnerCategoryEventIdPut: build.mutation<
      UpdateSetAstOwnerCategorysetAstOwnerCategoryEventIdPutApiResponse,
      UpdateSetAstOwnerCategorysetAstOwnerCategoryEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_owner_category/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstOwnerCategoryUpdate
      })
    }),
    deleteSetAstOwnerCategorysetAstOwnerCategoryEventIdDelete: build.mutation<
      DeleteSetAstOwnerCategorysetAstOwnerCategoryEventIdDeleteApiResponse,
      DeleteSetAstOwnerCategorysetAstOwnerCategoryEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_owner_category/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstOwnerCategorysetAstOwnerCategoryEventIdGet: build.query<
      GetSetAstOwnerCategorysetAstOwnerCategoryEventIdGetApiResponse,
      GetSetAstOwnerCategorysetAstOwnerCategoryEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_owner_category/event/${queryArg.id}`
      })
    }),
    getAllSetAstSiteActivityGet: build.query<
      GetAllSetAstSiteActivityGetApiResponse,
      GetAllSetAstSiteActivityGetApiArg
    >({
      query: () => ({ url: `/set_ast_site_activity/` })
    }),
    createSetAstSiteActivitySetAstSiteActivityPost: build.mutation<
      CreateSetAstSiteActivitySetAstSiteActivityPostApiResponse,
      CreateSetAstSiteActivitySetAstSiteActivityPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_site_activity/`,
        method: 'POST',
        body: queryArg.setAstSiteActivityInsert
      })
    }),
    updateSetAstSiteActivitySetAstSiteActivityIdPut: build.mutation<
      UpdateSetAstSiteActivitySetAstSiteActivityIdPutApiResponse,
      UpdateSetAstSiteActivitySetAstSiteActivityIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_site_activity/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstSiteActivityUpdate
      })
    }),
    deleteSetAstSiteActivitySetAstSiteActivityIdDelete: build.mutation<
      DeleteSetAstSiteActivitySetAstSiteActivityIdDeleteApiResponse,
      DeleteSetAstSiteActivitySetAstSiteActivityIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_site_activity/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstSiteActivitySetAstSiteActivityIdGet: build.query<
      GetSetAstSiteActivitySetAstSiteActivityIdGetApiResponse,
      GetSetAstSiteActivitySetAstSiteActivityIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_site_activity/${queryArg.id}`
      })
    }),
    getAllsetAstSiteActivityEventGet: build.query<
      GetAllsetAstSiteActivityEventGetApiResponse,
      GetAllsetAstSiteActivityEventGetApiArg
    >({
      query: () => ({ url: `set_ast_site_activity/event/` })
    }),
    createSetAstSiteActivitysetAstSiteActivityEventPost: build.mutation<
      CreateSetAstSiteActivitysetAstSiteActivityEventPostApiResponse,
      CreateSetAstSiteActivitysetAstSiteActivityEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_site_activity/event/`,
        method: 'POST',
        body: queryArg.setAstSiteActivityInsert
      })
    }),
    updateSetAstSiteActivitysetAstSiteActivityEventIdPut: build.mutation<
      UpdateSetAstSiteActivitysetAstSiteActivityEventIdPutApiResponse,
      UpdateSetAstSiteActivitysetAstSiteActivityEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_site_activity/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstSiteActivityUpdate
      })
    }),
    deleteSetAstSiteActivitysetAstSiteActivityEventIdDelete: build.mutation<
      DeleteSetAstSiteActivitysetAstSiteActivityEventIdDeleteApiResponse,
      DeleteSetAstSiteActivitysetAstSiteActivityEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_site_activity/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstSiteActivitysetAstSiteActivityEventIdGet: build.query<
      GetSetAstSiteActivitysetAstSiteActivityEventIdGetApiResponse,
      GetSetAstSiteActivitysetAstSiteActivityEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_site_activity/event/${queryArg.id}`
      })
    }),
    getAllSetAstSubAssemblyCategoryGet: build.query<
      GetAllSetAstSubAssemblyCategoryGetApiResponse,
      GetAllSetAstSubAssemblyCategoryGetApiArg
    >({
      query: () => ({ url: `/set_ast_sub_assembly_category/` })
    }),
    createSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPost:
      build.mutation<
        CreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPostApiResponse,
        CreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_ast_sub_assembly_category/`,
          method: 'POST',
          body: queryArg.setAstSubAssemblyCategoryInsert
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
          body: queryArg.setAstSubAssemblyCategoryUpdate
        })
      }),
    deleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDelete:
      build.mutation<
        DeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteApiResponse,
        DeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/set_ast_sub_assembly_category/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGet: build.query<
      GetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGetApiResponse,
      GetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_sub_assembly_category/${queryArg.id}`
      })
    }),
    getAllsetAstSubAssemblyCategoryEventGet: build.query<
      GetAllsetAstSubAssemblyCategoryEventGetApiResponse,
      GetAllsetAstSubAssemblyCategoryEventGetApiArg
    >({
      query: () => ({ url: `set_ast_sub_assembly_category/event/` })
    }),
    createSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventPost:
      build.mutation<
        CreateSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventPostApiResponse,
        CreateSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `set_ast_sub_assembly_category/event/`,
          method: 'POST',
          body: queryArg.setAstSubAssemblyCategoryInsert
        })
      }),
    updateSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdPut:
      build.mutation<
        UpdateSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdPutApiResponse,
        UpdateSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `set_ast_sub_assembly_category/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.setAstSubAssemblyCategoryUpdate
        })
      }),
    deleteSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdDelete:
      build.mutation<
        DeleteSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdDeleteApiResponse,
        DeleteSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `set_ast_sub_assembly_category/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdGet:
      build.query<
        GetSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdGetApiResponse,
        GetSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdGetApiArg
      >({
        query: (queryArg: any) => ({
          url: `set_ast_sub_assembly_category/event/${queryArg.id}`
        })
      }),
    getAllSetAstTicketTypeGet: build.query<
      GetAllSetAstTicketTypeGetApiResponse,
      GetAllSetAstTicketTypeGetApiArg
    >({
      query: () => ({ url: `/set_ast_ticket_type/` })
    }),
    createSetAstTicketTypeSetAstTicketTypePost: build.mutation<
      CreateSetAstTicketTypeSetAstTicketTypePostApiResponse,
      CreateSetAstTicketTypeSetAstTicketTypePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_ticket_type/`,
        method: 'POST',
        body: queryArg.setAstTicketTypeInsert
      })
    }),
    updateSetAstTicketTypeSetAstTicketTypeIdPut: build.mutation<
      UpdateSetAstTicketTypeSetAstTicketTypeIdPutApiResponse,
      UpdateSetAstTicketTypeSetAstTicketTypeIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_ticket_type/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstTicketTypeUpdate
      })
    }),
    deleteSetAstTicketTypeSetAstTicketTypeIdDelete: build.mutation<
      DeleteSetAstTicketTypeSetAstTicketTypeIdDeleteApiResponse,
      DeleteSetAstTicketTypeSetAstTicketTypeIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_ticket_type/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstTicketTypeSetAstTicketTypeIdGet: build.query<
      GetSetAstTicketTypeSetAstTicketTypeIdGetApiResponse,
      GetSetAstTicketTypeSetAstTicketTypeIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/set_ast_ticket_type/${queryArg.id}` })
    }),
    getAllsetAstTicketTypeEventGet: build.query<
      GetAllsetAstTicketTypeEventGetApiResponse,
      GetAllsetAstTicketTypeEventGetApiArg
    >({
      query: () => ({ url: `set_ast_ticket_type/event/` })
    }),
    createSetAstTicketTypesetAstTicketTypeEventPost: build.mutation<
      CreateSetAstTicketTypesetAstTicketTypeEventPostApiResponse,
      CreateSetAstTicketTypesetAstTicketTypeEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_ticket_type/event/`,
        method: 'POST',
        body: queryArg.setAstTicketTypeInsert
      })
    }),
    updateSetAstTicketTypesetAstTicketTypeEventIdPut: build.mutation<
      UpdateSetAstTicketTypesetAstTicketTypeEventIdPutApiResponse,
      UpdateSetAstTicketTypesetAstTicketTypeEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_ticket_type/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstTicketTypeUpdate
      })
    }),
    deleteSetAstTicketTypesetAstTicketTypeEventIdDelete: build.mutation<
      DeleteSetAstTicketTypesetAstTicketTypeEventIdDeleteApiResponse,
      DeleteSetAstTicketTypesetAstTicketTypeEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_ticket_type/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstTicketTypesetAstTicketTypeEventIdGet: build.query<
      GetSetAstTicketTypesetAstTicketTypeEventIdGetApiResponse,
      GetSetAstTicketTypesetAstTicketTypeEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_ticket_type/event/${queryArg.id}`
      })
    }),
    getAllSetAstTransactionDelayGet: build.query<
      GetAllSetAstTransactionDelayGetApiResponse,
      GetAllSetAstTransactionDelayGetApiArg
    >({
      query: () => ({ url: `/set_ast_transaction_delay/` })
    }),
    createSetAstTransactionDelaySetAstTransactionDelayPost: build.mutation<
      CreateSetAstTransactionDelaySetAstTransactionDelayPostApiResponse,
      CreateSetAstTransactionDelaySetAstTransactionDelayPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_transaction_delay/`,
        method: 'POST',
        body: queryArg.setAstTransactionDelayInsert
      })
    }),
    updateSetAstTransactionDelaySetAstTransactionDelayIdPut: build.mutation<
      UpdateSetAstTransactionDelaySetAstTransactionDelayIdPutApiResponse,
      UpdateSetAstTransactionDelaySetAstTransactionDelayIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_transaction_delay/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setAstTransactionDelayUpdate
      })
    }),
    deleteSetAstTransactionDelaySetAstTransactionDelayIdDelete: build.mutation<
      DeleteSetAstTransactionDelaySetAstTransactionDelayIdDeleteApiResponse,
      DeleteSetAstTransactionDelaySetAstTransactionDelayIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_transaction_delay/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetAstTransactionDelaySetAstTransactionDelayIdGet: build.query<
      GetSetAstTransactionDelaySetAstTransactionDelayIdGetApiResponse,
      GetSetAstTransactionDelaySetAstTransactionDelayIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_ast_transaction_delay/${queryArg.id}`
      })
    }),
    getAllsetAstTransactionDelayEventGet: build.query<
      GetAllsetAstTransactionDelayEventGetApiResponse,
      GetAllsetAstTransactionDelayEventGetApiArg
    >({
      query: () => ({ url: `set_ast_transaction_delay/event/` })
    }),
    createSetAstTransactionDelaysetAstTransactionDelayEventPost: build.mutation<
      CreateSetAstTransactionDelaysetAstTransactionDelayEventPostApiResponse,
      CreateSetAstTransactionDelaysetAstTransactionDelayEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_transaction_delay/event/`,
        method: 'POST',
        body: queryArg.setAstTransactionDelayInsert
      })
    }),
    updateSetAstTransactionDelaysetAstTransactionDelayEventIdPut:
      build.mutation<
        UpdateSetAstTransactionDelaysetAstTransactionDelayEventIdPutApiResponse,
        UpdateSetAstTransactionDelaysetAstTransactionDelayEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `set_ast_transaction_delay/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.setAstTransactionDelayUpdate
        })
      }),
    deleteSetAstTransactionDelaysetAstTransactionDelayEventIdDelete:
      build.mutation<
        DeleteSetAstTransactionDelaysetAstTransactionDelayEventIdDeleteApiResponse,
        DeleteSetAstTransactionDelaysetAstTransactionDelayEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `set_ast_transaction_delay/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getSetAstTransactionDelaysetAstTransactionDelayEventIdGet: build.query<
      GetSetAstTransactionDelaysetAstTransactionDelayEventIdGetApiResponse,
      GetSetAstTransactionDelaysetAstTransactionDelayEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_ast_transaction_delay/event/${queryArg.id}`
      })
    }),
    getAllSetEntitiesGet: build.query<
      GetAllSetEntitiesGetApiResponse,
      GetAllSetEntitiesGetApiArg
    >({
      query: () => ({ url: `/set_entities/` })
    }),
    createSetEntitiesSetEntitiesPost: build.mutation<
      CreateSetEntitiesSetEntitiesPostApiResponse,
      CreateSetEntitiesSetEntitiesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_entities/`,
        method: 'POST',
        body: queryArg.setEntitiesInsert
      })
    }),
    updateSetEntitiesSetEntitiesIdPut: build.mutation<
      UpdateSetEntitiesSetEntitiesIdPutApiResponse,
      UpdateSetEntitiesSetEntitiesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_entities/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setEntitiesUpdate
      })
    }),
    deleteSetEntitiesSetEntitiesIdDelete: build.mutation<
      DeleteSetEntitiesSetEntitiesIdDeleteApiResponse,
      DeleteSetEntitiesSetEntitiesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_entities/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetEntitiesSetEntitiesIdGet: build.query<
      GetSetEntitiesSetEntitiesIdGetApiResponse,
      GetSetEntitiesSetEntitiesIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/set_entities/${queryArg.id}` })
    }),
    getAllsetEntitiesEventGet: build.query<
      GetAllsetEntitiesEventGetApiResponse,
      GetAllsetEntitiesEventGetApiArg
    >({
      query: () => ({ url: `set_entities/event/` })
    }),
    createSetEntitiessetEntitiesEventPost: build.mutation<
      CreateSetEntitiessetEntitiesEventPostApiResponse,
      CreateSetEntitiessetEntitiesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_entities/event/`,
        method: 'POST',
        body: queryArg.setEntitiesInsert
      })
    }),
    updateSetEntitiessetEntitiesEventIdPut: build.mutation<
      UpdateSetEntitiessetEntitiesEventIdPutApiResponse,
      UpdateSetEntitiessetEntitiesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_entities/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setEntitiesUpdate
      })
    }),
    deleteSetEntitiessetEntitiesEventIdDelete: build.mutation<
      DeleteSetEntitiessetEntitiesEventIdDeleteApiResponse,
      DeleteSetEntitiessetEntitiesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_entities/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetEntitiessetEntitiesEventIdGet: build.query<
      GetSetEntitiessetEntitiesEventIdGetApiResponse,
      GetSetEntitiessetEntitiesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `set_entities/event/${queryArg.id}` })
    }),
    getAllSetGenMydashboardGet: build.query<
      GetAllSetGenMydashboardGetApiResponse,
      GetAllSetGenMydashboardGetApiArg
    >({
      query: () => ({ url: `/set_gen_mydashboard/` })
    }),
    createSetGenMydashboardSetGenMydashboardPost: build.mutation<
      CreateSetGenMydashboardSetGenMydashboardPostApiResponse,
      CreateSetGenMydashboardSetGenMydashboardPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_gen_mydashboard/`,
        method: 'POST',
        body: queryArg.setGenMydashboardInsert
      })
    }),
    updateSetGenMydashboardSetGenMydashboardIdPut: build.mutation<
      UpdateSetGenMydashboardSetGenMydashboardIdPutApiResponse,
      UpdateSetGenMydashboardSetGenMydashboardIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_gen_mydashboard/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setGenMydashboardUpdate
      })
    }),
    deleteSetGenMydashboardSetGenMydashboardIdDelete: build.mutation<
      DeleteSetGenMydashboardSetGenMydashboardIdDeleteApiResponse,
      DeleteSetGenMydashboardSetGenMydashboardIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_gen_mydashboard/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetGenMydashboardSetGenMydashboardIdGet: build.query<
      GetSetGenMydashboardSetGenMydashboardIdGetApiResponse,
      GetSetGenMydashboardSetGenMydashboardIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/set_gen_mydashboard/${queryArg.id}` })
    }),
    getAllsetGenMydashboardEventGet: build.query<
      GetAllsetGenMydashboardEventGetApiResponse,
      GetAllsetGenMydashboardEventGetApiArg
    >({
      query: () => ({ url: `set_gen_mydashboard/event/` })
    }),
    createSetGenMydashboardsetGenMydashboardEventPost: build.mutation<
      CreateSetGenMydashboardsetGenMydashboardEventPostApiResponse,
      CreateSetGenMydashboardsetGenMydashboardEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_gen_mydashboard/event/`,
        method: 'POST',
        body: queryArg.setGenMydashboardInsert
      })
    }),
    updateSetGenMydashboardsetGenMydashboardEventIdPut: build.mutation<
      UpdateSetGenMydashboardsetGenMydashboardEventIdPutApiResponse,
      UpdateSetGenMydashboardsetGenMydashboardEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_gen_mydashboard/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setGenMydashboardUpdate
      })
    }),
    deleteSetGenMydashboardsetGenMydashboardEventIdDelete: build.mutation<
      DeleteSetGenMydashboardsetGenMydashboardEventIdDeleteApiResponse,
      DeleteSetGenMydashboardsetGenMydashboardEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_gen_mydashboard/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetGenMydashboardsetGenMydashboardEventIdGet: build.query<
      GetSetGenMydashboardsetGenMydashboardEventIdGetApiResponse,
      GetSetGenMydashboardsetGenMydashboardEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_gen_mydashboard/event/${queryArg.id}`
      })
    }),
    getAllSetInvUomGet: build.query<
      GetAllSetInvUomGetApiResponse,
      GetAllSetInvUomGetApiArg
    >({
      query: () => ({ url: `/set_inv_uom/` })
    }),
    createSetInvUomSetInvUomPost: build.mutation<
      CreateSetInvUomSetInvUomPostApiResponse,
      CreateSetInvUomSetInvUomPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_inv_uom/`,
        method: 'POST',
        body: queryArg.setInvUomInsert
      })
    }),
    updateSetInvUomSetInvUomIdPut: build.mutation<
      UpdateSetInvUomSetInvUomIdPutApiResponse,
      UpdateSetInvUomSetInvUomIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_inv_uom/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setInvUomUpdate
      })
    }),
    deleteSetInvUomSetInvUomIdDelete: build.mutation<
      DeleteSetInvUomSetInvUomIdDeleteApiResponse,
      DeleteSetInvUomSetInvUomIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_inv_uom/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetInvUomSetInvUomIdGet: build.query<
      GetSetInvUomSetInvUomIdGetApiResponse,
      GetSetInvUomSetInvUomIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/set_inv_uom/${queryArg.id}` })
    }),
    getAllsetInvUomEventGet: build.query<
      GetAllsetInvUomEventGetApiResponse,
      GetAllsetInvUomEventGetApiArg
    >({
      query: () => ({ url: `set_inv_uom/event/` })
    }),
    createSetInvUomsetInvUomEventPost: build.mutation<
      CreateSetInvUomsetInvUomEventPostApiResponse,
      CreateSetInvUomsetInvUomEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_inv_uom/event/`,
        method: 'POST',
        body: queryArg.setInvUomInsert
      })
    }),
    updateSetInvUomsetInvUomEventIdPut: build.mutation<
      UpdateSetInvUomsetInvUomEventIdPutApiResponse,
      UpdateSetInvUomsetInvUomEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_inv_uom/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setInvUomUpdate
      })
    }),
    deleteSetInvUomsetInvUomEventIdDelete: build.mutation<
      DeleteSetInvUomsetInvUomEventIdDeleteApiResponse,
      DeleteSetInvUomsetInvUomEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_inv_uom/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetInvUomsetInvUomEventIdGet: build.query<
      GetSetInvUomsetInvUomEventIdGetApiResponse,
      GetSetInvUomsetInvUomEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `set_inv_uom/event/${queryArg.id}` })
    }),
    getAllSetSiteGroupingGet: build.query<
      GetAllSetSiteGroupingGetApiResponse,
      GetAllSetSiteGroupingGetApiArg
    >({
      query: () => ({ url: `/set_site_grouping/` })
    }),
    createSetSiteGroupingSetSiteGroupingPost: build.mutation<
      CreateSetSiteGroupingSetSiteGroupingPostApiResponse,
      CreateSetSiteGroupingSetSiteGroupingPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_site_grouping/`,
        method: 'POST',
        body: queryArg.setSiteGroupingInsert
      })
    }),
    updateSetSiteGroupingSetSiteGroupingIdPut: build.mutation<
      UpdateSetSiteGroupingSetSiteGroupingIdPutApiResponse,
      UpdateSetSiteGroupingSetSiteGroupingIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_site_grouping/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setSiteGroupingUpdate
      })
    }),
    deleteSetSiteGroupingSetSiteGroupingIdDelete: build.mutation<
      DeleteSetSiteGroupingSetSiteGroupingIdDeleteApiResponse,
      DeleteSetSiteGroupingSetSiteGroupingIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_site_grouping/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetSiteGroupingSetSiteGroupingIdGet: build.query<
      GetSetSiteGroupingSetSiteGroupingIdGetApiResponse,
      GetSetSiteGroupingSetSiteGroupingIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/set_site_grouping/${queryArg.id}` })
    }),
    getAllsetSiteGroupingEventGet: build.query<
      GetAllsetSiteGroupingEventGetApiResponse,
      GetAllsetSiteGroupingEventGetApiArg
    >({
      query: () => ({ url: `set_site_grouping/event/` })
    }),
    createSetSiteGroupingsetSiteGroupingEventPost: build.mutation<
      CreateSetSiteGroupingsetSiteGroupingEventPostApiResponse,
      CreateSetSiteGroupingsetSiteGroupingEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_site_grouping/event/`,
        method: 'POST',
        body: queryArg.setSiteGroupingInsert
      })
    }),
    updateSetSiteGroupingsetSiteGroupingEventIdPut: build.mutation<
      UpdateSetSiteGroupingsetSiteGroupingEventIdPutApiResponse,
      UpdateSetSiteGroupingsetSiteGroupingEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_site_grouping/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setSiteGroupingUpdate
      })
    }),
    deleteSetSiteGroupingsetSiteGroupingEventIdDelete: build.mutation<
      DeleteSetSiteGroupingsetSiteGroupingEventIdDeleteApiResponse,
      DeleteSetSiteGroupingsetSiteGroupingEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_site_grouping/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetSiteGroupingsetSiteGroupingEventIdGet: build.query<
      GetSetSiteGroupingsetSiteGroupingEventIdGetApiResponse,
      GetSetSiteGroupingsetSiteGroupingEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_site_grouping/event/${queryArg.id}`
      })
    }),
    getAllSetTenantWorkflowsGet: build.query<
      GetAllSetTenantWorkflowsGetApiResponse,
      GetAllSetTenantWorkflowsGetApiArg
    >({
      query: () => ({ url: `/set_tenant_workflows/` })
    }),
    createSetTenantWorkflowsSetTenantWorkflowsPost: build.mutation<
      CreateSetTenantWorkflowsSetTenantWorkflowsPostApiResponse,
      CreateSetTenantWorkflowsSetTenantWorkflowsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_workflows/`,
        method: 'POST',
        body: queryArg.setTenantWorkflowsInsert
      })
    }),
    updateSetTenantWorkflowsSetTenantWorkflowsIdPut: build.mutation<
      UpdateSetTenantWorkflowsSetTenantWorkflowsIdPutApiResponse,
      UpdateSetTenantWorkflowsSetTenantWorkflowsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_workflows/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setTenantWorkflowsUpdate
      })
    }),
    deleteSetTenantWorkflowsSetTenantWorkflowsIdDelete: build.mutation<
      DeleteSetTenantWorkflowsSetTenantWorkflowsIdDeleteApiResponse,
      DeleteSetTenantWorkflowsSetTenantWorkflowsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_workflows/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetTenantWorkflowsSetTenantWorkflowsIdGet: build.query<
      GetSetTenantWorkflowsSetTenantWorkflowsIdGetApiResponse,
      GetSetTenantWorkflowsSetTenantWorkflowsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/set_tenant_workflows/${queryArg.id}`
      })
    }),
    getAllsetTenantWorkflowsEventGet: build.query<
      GetAllsetTenantWorkflowsEventGetApiResponse,
      GetAllsetTenantWorkflowsEventGetApiArg
    >({
      query: () => ({ url: `set_tenant_workflows/event/` })
    }),
    createSetTenantWorkflowssetTenantWorkflowsEventPost: build.mutation<
      CreateSetTenantWorkflowssetTenantWorkflowsEventPostApiResponse,
      CreateSetTenantWorkflowssetTenantWorkflowsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_tenant_workflows/event/`,
        method: 'POST',
        body: queryArg.setTenantWorkflowsInsert
      })
    }),
    updateSetTenantWorkflowssetTenantWorkflowsEventIdPut: build.mutation<
      UpdateSetTenantWorkflowssetTenantWorkflowsEventIdPutApiResponse,
      UpdateSetTenantWorkflowssetTenantWorkflowsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_tenant_workflows/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.setTenantWorkflowsUpdate
      })
    }),
    deleteSetTenantWorkflowssetTenantWorkflowsEventIdDelete: build.mutation<
      DeleteSetTenantWorkflowssetTenantWorkflowsEventIdDeleteApiResponse,
      DeleteSetTenantWorkflowssetTenantWorkflowsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_tenant_workflows/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSetTenantWorkflowssetTenantWorkflowsEventIdGet: build.query<
      GetSetTenantWorkflowssetTenantWorkflowsEventIdGetApiResponse,
      GetSetTenantWorkflowssetTenantWorkflowsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `set_tenant_workflows/event/${queryArg.id}`
      })
    }),
    getAllSitesGet: build.query<
      GetAllSitesGetApiResponse,
      GetAllSitesGetApiArg
    >({
      query: () => ({ url: `/sites/` })
    }),
    createSitesSitesPost: build.mutation<
      CreateSitesSitesPostApiResponse,
      CreateSitesSitesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/sites/`,
        method: 'POST',
        body: queryArg.sitesInsert
      })
    }),
    updateSitesSitesIdPut: build.mutation<
      UpdateSitesSitesIdPutApiResponse,
      UpdateSitesSitesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/sites/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.sitesUpdate
      })
    }),
    deleteSitesSitesIdDelete: build.mutation<
      DeleteSitesSitesIdDeleteApiResponse,
      DeleteSitesSitesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/sites/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSitesSitesIdGet: build.query<
      GetSitesSitesIdGetApiResponse,
      GetSitesSitesIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/sites/${queryArg.id}` })
    }),
    getAllsitesEventGet: build.query<
      GetAllsitesEventGetApiResponse,
      GetAllsitesEventGetApiArg
    >({
      query: () => ({ url: `sites/event/` })
    }),
    createSitessitesEventPost: build.mutation<
      CreateSitessitesEventPostApiResponse,
      CreateSitessitesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `sites/event/`,
        method: 'POST',
        body: queryArg.sitesInsert
      })
    }),
    updateSitessitesEventIdPut: build.mutation<
      UpdateSitessitesEventIdPutApiResponse,
      UpdateSitessitesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `sites/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.sitesUpdate
      })
    }),
    deleteSitessitesEventIdDelete: build.mutation<
      DeleteSitessitesEventIdDeleteApiResponse,
      DeleteSitessitesEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `sites/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getSitessitesEventIdGet: build.query<
      GetSitessitesEventIdGetApiResponse,
      GetSitessitesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `sites/event/${queryArg.id}` })
    }),
    getAllTeamUsersGet: build.query<
      GetAllTeamUsersGetApiResponse,
      GetAllTeamUsersGetApiArg
    >({
      query: () => ({ url: `/team_users/` })
    }),
    createTeamUsersTeamUsersPost: build.mutation<
      CreateTeamUsersTeamUsersPostApiResponse,
      CreateTeamUsersTeamUsersPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/team_users/`,
        method: 'POST',
        body: queryArg.teamUsersInsert
      })
    }),
    updateTeamUsersTeamUsersIdPut: build.mutation<
      UpdateTeamUsersTeamUsersIdPutApiResponse,
      UpdateTeamUsersTeamUsersIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/team_users/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.teamUsersUpdate
      })
    }),
    deleteTeamUsersTeamUsersIdDelete: build.mutation<
      DeleteTeamUsersTeamUsersIdDeleteApiResponse,
      DeleteTeamUsersTeamUsersIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/team_users/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTeamUsersTeamUsersIdGet: build.query<
      GetTeamUsersTeamUsersIdGetApiResponse,
      GetTeamUsersTeamUsersIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/team_users/${queryArg.id}` })
    }),
    getAllteamUsersEventGet: build.query<
      GetAllteamUsersEventGetApiResponse,
      GetAllteamUsersEventGetApiArg
    >({
      query: () => ({ url: `team_users/event/` })
    }),
    createTeamUsersteamUsersEventPost: build.mutation<
      CreateTeamUsersteamUsersEventPostApiResponse,
      CreateTeamUsersteamUsersEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `team_users/event/`,
        method: 'POST',
        body: queryArg.teamUsersInsert
      })
    }),
    updateTeamUsersteamUsersEventIdPut: build.mutation<
      UpdateTeamUsersteamUsersEventIdPutApiResponse,
      UpdateTeamUsersteamUsersEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `team_users/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.teamUsersUpdate
      })
    }),
    deleteTeamUsersteamUsersEventIdDelete: build.mutation<
      DeleteTeamUsersteamUsersEventIdDeleteApiResponse,
      DeleteTeamUsersteamUsersEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `team_users/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTeamUsersteamUsersEventIdGet: build.query<
      GetTeamUsersteamUsersEventIdGetApiResponse,
      GetTeamUsersteamUsersEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `team_users/event/${queryArg.id}` })
    }),
    getAllTransactionNoSettingsGet: build.query<
      GetAllTransactionNoSettingsGetApiResponse,
      GetAllTransactionNoSettingsGetApiArg
    >({
      query: () => ({ url: `/transaction_no_settings/` })
    }),
    createTransactionNoSettingsTransactionNoSettingsPost: build.mutation<
      CreateTransactionNoSettingsTransactionNoSettingsPostApiResponse,
      CreateTransactionNoSettingsTransactionNoSettingsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/transaction_no_settings/`,
        method: 'POST',
        body: queryArg.transactionNoSettingsInsert
      })
    }),
    updateTransactionNoSettingsTransactionNoSettingsIdPut: build.mutation<
      UpdateTransactionNoSettingsTransactionNoSettingsIdPutApiResponse,
      UpdateTransactionNoSettingsTransactionNoSettingsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/transaction_no_settings/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.transactionNoSettingsUpdate
      })
    }),
    deleteTransactionNoSettingsTransactionNoSettingsIdDelete: build.mutation<
      DeleteTransactionNoSettingsTransactionNoSettingsIdDeleteApiResponse,
      DeleteTransactionNoSettingsTransactionNoSettingsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/transaction_no_settings/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTransactionNoSettingsTransactionNoSettingsIdGet: build.query<
      GetTransactionNoSettingsTransactionNoSettingsIdGetApiResponse,
      GetTransactionNoSettingsTransactionNoSettingsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/transaction_no_settings/${queryArg.id}`
      })
    }),
    getAlltransactionNoSettingsEventGet: build.query<
      GetAlltransactionNoSettingsEventGetApiResponse,
      GetAlltransactionNoSettingsEventGetApiArg
    >({
      query: () => ({ url: `transaction_no_settings/event/` })
    }),
    createTransactionNoSettingstransactionNoSettingsEventPost: build.mutation<
      CreateTransactionNoSettingstransactionNoSettingsEventPostApiResponse,
      CreateTransactionNoSettingstransactionNoSettingsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `transaction_no_settings/event/`,
        method: 'POST',
        body: queryArg.transactionNoSettingsInsert
      })
    }),
    updateTransactionNoSettingstransactionNoSettingsEventIdPut: build.mutation<
      UpdateTransactionNoSettingstransactionNoSettingsEventIdPutApiResponse,
      UpdateTransactionNoSettingstransactionNoSettingsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `transaction_no_settings/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.transactionNoSettingsUpdate
      })
    }),
    deleteTransactionNoSettingstransactionNoSettingsEventIdDelete:
      build.mutation<
        DeleteTransactionNoSettingstransactionNoSettingsEventIdDeleteApiResponse,
        DeleteTransactionNoSettingstransactionNoSettingsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `transaction_no_settings/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTransactionNoSettingstransactionNoSettingsEventIdGet: build.query<
      GetTransactionNoSettingstransactionNoSettingsEventIdGetApiResponse,
      GetTransactionNoSettingstransactionNoSettingsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `transaction_no_settings/event/${queryArg.id}`
      })
    }),
    getAllTrnAssetAttributeGet: build.query<
      GetAllTrnAssetAttributeGetApiResponse,
      GetAllTrnAssetAttributeGetApiArg
    >({
      query: () => ({ url: `/trn_asset_attribute/` })
    }),
    createTrnAssetAttributeTrnAssetAttributePost: build.mutation<
      CreateTrnAssetAttributeTrnAssetAttributePostApiResponse,
      CreateTrnAssetAttributeTrnAssetAttributePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_attribute/`,
        method: 'POST',
        body: queryArg.trnAssetAttributeInsert
      })
    }),
    updateTrnAssetAttributeTrnAssetAttributeIdPut: build.mutation<
      UpdateTrnAssetAttributeTrnAssetAttributeIdPutApiResponse,
      UpdateTrnAssetAttributeTrnAssetAttributeIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_attribute/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetAttributeUpdate
      })
    }),
    deleteTrnAssetAttributeTrnAssetAttributeIdDelete: build.mutation<
      DeleteTrnAssetAttributeTrnAssetAttributeIdDeleteApiResponse,
      DeleteTrnAssetAttributeTrnAssetAttributeIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_attribute/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetAttributeTrnAssetAttributeIdGet: build.query<
      GetTrnAssetAttributeTrnAssetAttributeIdGetApiResponse,
      GetTrnAssetAttributeTrnAssetAttributeIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_asset_attribute/${queryArg.id}` })
    }),
    getAlltrnAssetAttributeEventGet: build.query<
      GetAlltrnAssetAttributeEventGetApiResponse,
      GetAlltrnAssetAttributeEventGetApiArg
    >({
      query: () => ({ url: `trn_asset_attribute/event/` })
    }),
    createTrnAssetAttributetrnAssetAttributeEventPost: build.mutation<
      CreateTrnAssetAttributetrnAssetAttributeEventPostApiResponse,
      CreateTrnAssetAttributetrnAssetAttributeEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_attribute/event/`,
        method: 'POST',
        body: queryArg.trnAssetAttributeInsert
      })
    }),
    updateTrnAssetAttributetrnAssetAttributeEventIdPut: build.mutation<
      UpdateTrnAssetAttributetrnAssetAttributeEventIdPutApiResponse,
      UpdateTrnAssetAttributetrnAssetAttributeEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_attribute/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetAttributeUpdate
      })
    }),
    deleteTrnAssetAttributetrnAssetAttributeEventIdDelete: build.mutation<
      DeleteTrnAssetAttributetrnAssetAttributeEventIdDeleteApiResponse,
      DeleteTrnAssetAttributetrnAssetAttributeEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_attribute/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetAttributetrnAssetAttributeEventIdGet: build.query<
      GetTrnAssetAttributetrnAssetAttributeEventIdGetApiResponse,
      GetTrnAssetAttributetrnAssetAttributeEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_attribute/event/${queryArg.id}`
      })
    }),
    getAllTrnAssetDocumentGet: build.query<
      GetAllTrnAssetDocumentGetApiResponse,
      GetAllTrnAssetDocumentGetApiArg
    >({
      query: () => ({ url: `/trn_asset_document/` })
    }),
    createTrnAssetDocumentTrnAssetDocumentPost: build.mutation<
      CreateTrnAssetDocumentTrnAssetDocumentPostApiResponse,
      CreateTrnAssetDocumentTrnAssetDocumentPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_document/`,
        method: 'POST',
        body: queryArg.trnAssetDocumentInsert
      })
    }),
    updateTrnAssetDocumentTrnAssetDocumentIdPut: build.mutation<
      UpdateTrnAssetDocumentTrnAssetDocumentIdPutApiResponse,
      UpdateTrnAssetDocumentTrnAssetDocumentIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_document/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetDocumentUpdate
      })
    }),
    deleteTrnAssetDocumentTrnAssetDocumentIdDelete: build.mutation<
      DeleteTrnAssetDocumentTrnAssetDocumentIdDeleteApiResponse,
      DeleteTrnAssetDocumentTrnAssetDocumentIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_document/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetDocumentTrnAssetDocumentIdGet: build.query<
      GetTrnAssetDocumentTrnAssetDocumentIdGetApiResponse,
      GetTrnAssetDocumentTrnAssetDocumentIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_asset_document/${queryArg.id}` })
    }),
    getAlltrnAssetDocumentEventGet: build.query<
      GetAlltrnAssetDocumentEventGetApiResponse,
      GetAlltrnAssetDocumentEventGetApiArg
    >({
      query: () => ({ url: `trn_asset_document/event/` })
    }),
    createTrnAssetDocumenttrnAssetDocumentEventPost: build.mutation<
      CreateTrnAssetDocumenttrnAssetDocumentEventPostApiResponse,
      CreateTrnAssetDocumenttrnAssetDocumentEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_document/event/`,
        method: 'POST',
        body: queryArg.trnAssetDocumentInsert
      })
    }),
    updateTrnAssetDocumenttrnAssetDocumentEventIdPut: build.mutation<
      UpdateTrnAssetDocumenttrnAssetDocumentEventIdPutApiResponse,
      UpdateTrnAssetDocumenttrnAssetDocumentEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_document/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetDocumentUpdate
      })
    }),
    deleteTrnAssetDocumenttrnAssetDocumentEventIdDelete: build.mutation<
      DeleteTrnAssetDocumenttrnAssetDocumentEventIdDeleteApiResponse,
      DeleteTrnAssetDocumenttrnAssetDocumentEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_document/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetDocumenttrnAssetDocumentEventIdGet: build.query<
      GetTrnAssetDocumenttrnAssetDocumentEventIdGetApiResponse,
      GetTrnAssetDocumenttrnAssetDocumentEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_document/event/${queryArg.id}`
      })
    }),
    getAllTrnAssetMovmentGet: build.query<
      GetAllTrnAssetMovmentGetApiResponse,
      GetAllTrnAssetMovmentGetApiArg
    >({
      query: () => ({ url: `/trn_asset_movment/` })
    }),
    createTrnAssetMovmentTrnAssetMovmentPost: build.mutation<
      CreateTrnAssetMovmentTrnAssetMovmentPostApiResponse,
      CreateTrnAssetMovmentTrnAssetMovmentPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_movment/`,
        method: 'POST',
        body: queryArg.trnAssetMovmentInsert
      })
    }),
    updateTrnAssetMovmentTrnAssetMovmentIdPut: build.mutation<
      UpdateTrnAssetMovmentTrnAssetMovmentIdPutApiResponse,
      UpdateTrnAssetMovmentTrnAssetMovmentIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_movment/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetMovmentUpdate
      })
    }),
    deleteTrnAssetMovmentTrnAssetMovmentIdDelete: build.mutation<
      DeleteTrnAssetMovmentTrnAssetMovmentIdDeleteApiResponse,
      DeleteTrnAssetMovmentTrnAssetMovmentIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_movment/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetMovmentTrnAssetMovmentIdGet: build.query<
      GetTrnAssetMovmentTrnAssetMovmentIdGetApiResponse,
      GetTrnAssetMovmentTrnAssetMovmentIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_asset_movment/${queryArg.id}` })
    }),
    getAlltrnAssetMovmentEventGet: build.query<
      GetAlltrnAssetMovmentEventGetApiResponse,
      GetAlltrnAssetMovmentEventGetApiArg
    >({
      query: () => ({ url: `trn_asset_movment/event/` })
    }),
    createTrnAssetMovmenttrnAssetMovmentEventPost: build.mutation<
      CreateTrnAssetMovmenttrnAssetMovmentEventPostApiResponse,
      CreateTrnAssetMovmenttrnAssetMovmentEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_movment/event/`,
        method: 'POST',
        body: queryArg.trnAssetMovmentInsert
      })
    }),
    updateTrnAssetMovmenttrnAssetMovmentEventIdPut: build.mutation<
      UpdateTrnAssetMovmenttrnAssetMovmentEventIdPutApiResponse,
      UpdateTrnAssetMovmenttrnAssetMovmentEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_movment/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetMovmentUpdate
      })
    }),
    deleteTrnAssetMovmenttrnAssetMovmentEventIdDelete: build.mutation<
      DeleteTrnAssetMovmenttrnAssetMovmentEventIdDeleteApiResponse,
      DeleteTrnAssetMovmenttrnAssetMovmentEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_movment/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetMovmenttrnAssetMovmentEventIdGet: build.query<
      GetTrnAssetMovmenttrnAssetMovmentEventIdGetApiResponse,
      GetTrnAssetMovmenttrnAssetMovmentEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_movment/event/${queryArg.id}`
      })
    }),
    getAllTrnAssetOwnershipGet: build.query<
      GetAllTrnAssetOwnershipGetApiResponse,
      GetAllTrnAssetOwnershipGetApiArg
    >({
      query: () => ({ url: `/trn_asset_ownership/` })
    }),
    createTrnAssetOwnershipTrnAssetOwnershipPost: build.mutation<
      CreateTrnAssetOwnershipTrnAssetOwnershipPostApiResponse,
      CreateTrnAssetOwnershipTrnAssetOwnershipPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_ownership/`,
        method: 'POST',
        body: queryArg.trnAssetOwnershipInsert
      })
    }),
    updateTrnAssetOwnershipTrnAssetOwnershipIdPut: build.mutation<
      UpdateTrnAssetOwnershipTrnAssetOwnershipIdPutApiResponse,
      UpdateTrnAssetOwnershipTrnAssetOwnershipIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_ownership/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetOwnershipUpdate
      })
    }),
    deleteTrnAssetOwnershipTrnAssetOwnershipIdDelete: build.mutation<
      DeleteTrnAssetOwnershipTrnAssetOwnershipIdDeleteApiResponse,
      DeleteTrnAssetOwnershipTrnAssetOwnershipIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_ownership/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetOwnershipTrnAssetOwnershipIdGet: build.query<
      GetTrnAssetOwnershipTrnAssetOwnershipIdGetApiResponse,
      GetTrnAssetOwnershipTrnAssetOwnershipIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_asset_ownership/${queryArg.id}` })
    }),
    getAlltrnAssetOwnershipEventGet: build.query<
      GetAlltrnAssetOwnershipEventGetApiResponse,
      GetAlltrnAssetOwnershipEventGetApiArg
    >({
      query: () => ({ url: `trn_asset_ownership/event/` })
    }),
    createTrnAssetOwnershiptrnAssetOwnershipEventPost: build.mutation<
      CreateTrnAssetOwnershiptrnAssetOwnershipEventPostApiResponse,
      CreateTrnAssetOwnershiptrnAssetOwnershipEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_ownership/event/`,
        method: 'POST',
        body: queryArg.trnAssetOwnershipInsert
      })
    }),
    updateTrnAssetOwnershiptrnAssetOwnershipEventIdPut: build.mutation<
      UpdateTrnAssetOwnershiptrnAssetOwnershipEventIdPutApiResponse,
      UpdateTrnAssetOwnershiptrnAssetOwnershipEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_ownership/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetOwnershipUpdate
      })
    }),
    deleteTrnAssetOwnershiptrnAssetOwnershipEventIdDelete: build.mutation<
      DeleteTrnAssetOwnershiptrnAssetOwnershipEventIdDeleteApiResponse,
      DeleteTrnAssetOwnershiptrnAssetOwnershipEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_ownership/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetOwnershiptrnAssetOwnershipEventIdGet: build.query<
      GetTrnAssetOwnershiptrnAssetOwnershipEventIdGetApiResponse,
      GetTrnAssetOwnershiptrnAssetOwnershipEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_ownership/event/${queryArg.id}`
      })
    }),
    getAllTrnAssetRosterGet: build.query<
      GetAllTrnAssetRosterGetApiResponse,
      GetAllTrnAssetRosterGetApiArg
    >({
      query: () => ({ url: `/trn_asset_roster/` })
    }),
    createTrnAssetRosterTrnAssetRosterPost: build.mutation<
      CreateTrnAssetRosterTrnAssetRosterPostApiResponse,
      CreateTrnAssetRosterTrnAssetRosterPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_roster/`,
        method: 'POST',
        body: queryArg.trnAssetRosterInsert
      })
    }),
    updateTrnAssetRosterTrnAssetRosterIdPut: build.mutation<
      UpdateTrnAssetRosterTrnAssetRosterIdPutApiResponse,
      UpdateTrnAssetRosterTrnAssetRosterIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_roster/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetRosterUpdate
      })
    }),
    deleteTrnAssetRosterTrnAssetRosterIdDelete: build.mutation<
      DeleteTrnAssetRosterTrnAssetRosterIdDeleteApiResponse,
      DeleteTrnAssetRosterTrnAssetRosterIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_roster/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetRosterTrnAssetRosterIdGet: build.query<
      GetTrnAssetRosterTrnAssetRosterIdGetApiResponse,
      GetTrnAssetRosterTrnAssetRosterIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_asset_roster/${queryArg.id}` })
    }),
    getAlltrnAssetRosterEventGet: build.query<
      GetAlltrnAssetRosterEventGetApiResponse,
      GetAlltrnAssetRosterEventGetApiArg
    >({
      query: () => ({ url: `trn_asset_roster/event/` })
    }),
    createTrnAssetRostertrnAssetRosterEventPost: build.mutation<
      CreateTrnAssetRostertrnAssetRosterEventPostApiResponse,
      CreateTrnAssetRostertrnAssetRosterEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_roster/event/`,
        method: 'POST',
        body: queryArg.trnAssetRosterInsert
      })
    }),
    updateTrnAssetRostertrnAssetRosterEventIdPut: build.mutation<
      UpdateTrnAssetRostertrnAssetRosterEventIdPutApiResponse,
      UpdateTrnAssetRostertrnAssetRosterEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_roster/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetRosterUpdate
      })
    }),
    deleteTrnAssetRostertrnAssetRosterEventIdDelete: build.mutation<
      DeleteTrnAssetRostertrnAssetRosterEventIdDeleteApiResponse,
      DeleteTrnAssetRostertrnAssetRosterEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_roster/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetRostertrnAssetRosterEventIdGet: build.query<
      GetTrnAssetRostertrnAssetRosterEventIdGetApiResponse,
      GetTrnAssetRostertrnAssetRosterEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_roster/event/${queryArg.id}`
      })
    }),
    getAllTrnAssetSiteLinkingGet: build.query<
      GetAllTrnAssetSiteLinkingGetApiResponse,
      GetAllTrnAssetSiteLinkingGetApiArg
    >({
      query: () => ({ url: `/trn_asset_site_linking/` })
    }),
    createTrnAssetSiteLinkingTrnAssetSiteLinkingPost: build.mutation<
      CreateTrnAssetSiteLinkingTrnAssetSiteLinkingPostApiResponse,
      CreateTrnAssetSiteLinkingTrnAssetSiteLinkingPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_site_linking/`,
        method: 'POST',
        body: queryArg.trnAssetSiteLinkingInsert
      })
    }),
    updateTrnAssetSiteLinkingTrnAssetSiteLinkingIdPut: build.mutation<
      UpdateTrnAssetSiteLinkingTrnAssetSiteLinkingIdPutApiResponse,
      UpdateTrnAssetSiteLinkingTrnAssetSiteLinkingIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_site_linking/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetSiteLinkingUpdate
      })
    }),
    deleteTrnAssetSiteLinkingTrnAssetSiteLinkingIdDelete: build.mutation<
      DeleteTrnAssetSiteLinkingTrnAssetSiteLinkingIdDeleteApiResponse,
      DeleteTrnAssetSiteLinkingTrnAssetSiteLinkingIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_site_linking/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetSiteLinkingTrnAssetSiteLinkingIdGet: build.query<
      GetTrnAssetSiteLinkingTrnAssetSiteLinkingIdGetApiResponse,
      GetTrnAssetSiteLinkingTrnAssetSiteLinkingIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_asset_site_linking/${queryArg.id}`
      })
    }),
    getAlltrnAssetSiteLinkingEventGet: build.query<
      GetAlltrnAssetSiteLinkingEventGetApiResponse,
      GetAlltrnAssetSiteLinkingEventGetApiArg
    >({
      query: () => ({ url: `trn_asset_site_linking/event/` })
    }),
    createTrnAssetSiteLinkingtrnAssetSiteLinkingEventPost: build.mutation<
      CreateTrnAssetSiteLinkingtrnAssetSiteLinkingEventPostApiResponse,
      CreateTrnAssetSiteLinkingtrnAssetSiteLinkingEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_site_linking/event/`,
        method: 'POST',
        body: queryArg.trnAssetSiteLinkingInsert
      })
    }),
    updateTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdPut: build.mutation<
      UpdateTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdPutApiResponse,
      UpdateTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_site_linking/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnAssetSiteLinkingUpdate
      })
    }),
    deleteTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdDelete: build.mutation<
      DeleteTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdDeleteApiResponse,
      DeleteTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_site_linking/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdGet: build.query<
      GetTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdGetApiResponse,
      GetTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_asset_site_linking/event/${queryArg.id}`
      })
    }),
    getAllTrnCounterlogGet: build.query<
      GetAllTrnCounterlogGetApiResponse,
      GetAllTrnCounterlogGetApiArg
    >({
      query: () => ({ url: `/trn_counterlog/` })
    }),
    createTrnCounterlogTrnCounterlogPost: build.mutation<
      CreateTrnCounterlogTrnCounterlogPostApiResponse,
      CreateTrnCounterlogTrnCounterlogPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_counterlog/`,
        method: 'POST',
        body: queryArg.trnCounterlogInsert
      })
    }),
    updateTrnCounterlogTrnCounterlogIdPut: build.mutation<
      UpdateTrnCounterlogTrnCounterlogIdPutApiResponse,
      UpdateTrnCounterlogTrnCounterlogIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_counterlog/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnCounterlogUpdate
      })
    }),
    deleteTrnCounterlogTrnCounterlogIdDelete: build.mutation<
      DeleteTrnCounterlogTrnCounterlogIdDeleteApiResponse,
      DeleteTrnCounterlogTrnCounterlogIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_counterlog/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnCounterlogTrnCounterlogIdGet: build.query<
      GetTrnCounterlogTrnCounterlogIdGetApiResponse,
      GetTrnCounterlogTrnCounterlogIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_counterlog/${queryArg.id}` })
    }),
    getAlltrnCounterlogEventGet: build.query<
      GetAlltrnCounterlogEventGetApiResponse,
      GetAlltrnCounterlogEventGetApiArg
    >({
      query: () => ({ url: `trn_counterlog/event/` })
    }),
    createTrnCounterlogtrnCounterlogEventPost: build.mutation<
      CreateTrnCounterlogtrnCounterlogEventPostApiResponse,
      CreateTrnCounterlogtrnCounterlogEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_counterlog/event/`,
        method: 'POST',
        body: queryArg.trnCounterlogInsert
      })
    }),
    updateTrnCounterlogtrnCounterlogEventIdPut: build.mutation<
      UpdateTrnCounterlogtrnCounterlogEventIdPutApiResponse,
      UpdateTrnCounterlogtrnCounterlogEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_counterlog/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnCounterlogUpdate
      })
    }),
    deleteTrnCounterlogtrnCounterlogEventIdDelete: build.mutation<
      DeleteTrnCounterlogtrnCounterlogEventIdDeleteApiResponse,
      DeleteTrnCounterlogtrnCounterlogEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_counterlog/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnCounterlogtrnCounterlogEventIdGet: build.query<
      GetTrnCounterlogtrnCounterlogEventIdGetApiResponse,
      GetTrnCounterlogtrnCounterlogEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `trn_counterlog/event/${queryArg.id}` })
    }),
    getAllTrnDowntimeGet: build.query<
      GetAllTrnDowntimeGetApiResponse,
      GetAllTrnDowntimeGetApiArg
    >({
      query: () => ({ url: `/trn_downtime/` })
    }),
    createTrnDowntimeTrnDowntimePost: build.mutation<
      CreateTrnDowntimeTrnDowntimePostApiResponse,
      CreateTrnDowntimeTrnDowntimePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_downtime/`,
        method: 'POST',
        body: queryArg.trnDowntimeInsert
      })
    }),
    updateTrnDowntimeTrnDowntimeIdPut: build.mutation<
      UpdateTrnDowntimeTrnDowntimeIdPutApiResponse,
      UpdateTrnDowntimeTrnDowntimeIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_downtime/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnDowntimeUpdate
      })
    }),
    deleteTrnDowntimeTrnDowntimeIdDelete: build.mutation<
      DeleteTrnDowntimeTrnDowntimeIdDeleteApiResponse,
      DeleteTrnDowntimeTrnDowntimeIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_downtime/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnDowntimeTrnDowntimeIdGet: build.query<
      GetTrnDowntimeTrnDowntimeIdGetApiResponse,
      GetTrnDowntimeTrnDowntimeIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_downtime/${queryArg.id}` })
    }),
    getAlltrnDowntimeEventGet: build.query<
      GetAlltrnDowntimeEventGetApiResponse,
      GetAlltrnDowntimeEventGetApiArg
    >({
      query: () => ({ url: `trn_downtime/event/` })
    }),
    createTrnDowntimetrnDowntimeEventPost: build.mutation<
      CreateTrnDowntimetrnDowntimeEventPostApiResponse,
      CreateTrnDowntimetrnDowntimeEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_downtime/event/`,
        method: 'POST',
        body: queryArg.trnDowntimeInsert
      })
    }),
    updateTrnDowntimetrnDowntimeEventIdPut: build.mutation<
      UpdateTrnDowntimetrnDowntimeEventIdPutApiResponse,
      UpdateTrnDowntimetrnDowntimeEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_downtime/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnDowntimeUpdate
      })
    }),
    deleteTrnDowntimetrnDowntimeEventIdDelete: build.mutation<
      DeleteTrnDowntimetrnDowntimeEventIdDeleteApiResponse,
      DeleteTrnDowntimetrnDowntimeEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_downtime/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnDowntimetrnDowntimeEventIdGet: build.query<
      GetTrnDowntimetrnDowntimeEventIdGetApiResponse,
      GetTrnDowntimetrnDowntimeEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `trn_downtime/event/${queryArg.id}` })
    }),
    getAllTrnEngagementGet: build.query<
      GetAllTrnEngagementGetApiResponse,
      GetAllTrnEngagementGetApiArg
    >({
      query: () => ({ url: `/trn_engagement/` })
    }),
    createTrnEngagementTrnEngagementPost: build.mutation<
      CreateTrnEngagementTrnEngagementPostApiResponse,
      CreateTrnEngagementTrnEngagementPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_engagement/`,
        method: 'POST',
        body: queryArg.trnEngagementInsert
      })
    }),
    updateTrnEngagementTrnEngagementIdPut: build.mutation<
      UpdateTrnEngagementTrnEngagementIdPutApiResponse,
      UpdateTrnEngagementTrnEngagementIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_engagement/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnEngagementUpdate
      })
    }),
    deleteTrnEngagementTrnEngagementIdDelete: build.mutation<
      DeleteTrnEngagementTrnEngagementIdDeleteApiResponse,
      DeleteTrnEngagementTrnEngagementIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_engagement/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnEngagementTrnEngagementIdGet: build.query<
      GetTrnEngagementTrnEngagementIdGetApiResponse,
      GetTrnEngagementTrnEngagementIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_engagement/${queryArg.id}` })
    }),
    getAlltrnEngagementEventGet: build.query<
      GetAlltrnEngagementEventGetApiResponse,
      GetAlltrnEngagementEventGetApiArg
    >({
      query: () => ({ url: `trn_engagement/event/` })
    }),
    createTrnEngagementtrnEngagementEventPost: build.mutation<
      CreateTrnEngagementtrnEngagementEventPostApiResponse,
      CreateTrnEngagementtrnEngagementEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_engagement/event/`,
        method: 'POST',
        body: queryArg.trnEngagementInsert
      })
    }),
    updateTrnEngagementtrnEngagementEventIdPut: build.mutation<
      UpdateTrnEngagementtrnEngagementEventIdPutApiResponse,
      UpdateTrnEngagementtrnEngagementEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_engagement/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnEngagementUpdate
      })
    }),
    deleteTrnEngagementtrnEngagementEventIdDelete: build.mutation<
      DeleteTrnEngagementtrnEngagementEventIdDeleteApiResponse,
      DeleteTrnEngagementtrnEngagementEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_engagement/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnEngagementtrnEngagementEventIdGet: build.query<
      GetTrnEngagementtrnEngagementEventIdGetApiResponse,
      GetTrnEngagementtrnEngagementEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `trn_engagement/event/${queryArg.id}` })
    }),
    getAllTrnFsFuelIssueGet: build.query<
      GetAllTrnFsFuelIssueGetApiResponse,
      GetAllTrnFsFuelIssueGetApiArg
    >({
      query: () => ({ url: `/trn_fs_fuel_issue/` })
    }),
    createTrnFsFuelIssueTrnFsFuelIssuePost: build.mutation<
      CreateTrnFsFuelIssueTrnFsFuelIssuePostApiResponse,
      CreateTrnFsFuelIssueTrnFsFuelIssuePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_issue/`,
        method: 'POST',
        body: queryArg.trnFsFuelIssueInsert
      })
    }),
    updateTrnFsFuelIssueTrnFsFuelIssueIdPut: build.mutation<
      UpdateTrnFsFuelIssueTrnFsFuelIssueIdPutApiResponse,
      UpdateTrnFsFuelIssueTrnFsFuelIssueIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_issue/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFsFuelIssueUpdate
      })
    }),
    deleteTrnFsFuelIssueTrnFsFuelIssueIdDelete: build.mutation<
      DeleteTrnFsFuelIssueTrnFsFuelIssueIdDeleteApiResponse,
      DeleteTrnFsFuelIssueTrnFsFuelIssueIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_issue/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnFsFuelIssueTrnFsFuelIssueIdGet: build.query<
      GetTrnFsFuelIssueTrnFsFuelIssueIdGetApiResponse,
      GetTrnFsFuelIssueTrnFsFuelIssueIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_fs_fuel_issue/${queryArg.id}` })
    }),
    getAlltrnFsFuelIssueEventGet: build.query<
      GetAlltrnFsFuelIssueEventGetApiResponse,
      GetAlltrnFsFuelIssueEventGetApiArg
    >({
      query: () => ({ url: `trn_fs_fuel_issue/event/` })
    }),
    createTrnFsFuelIssuetrnFsFuelIssueEventPost: build.mutation<
      CreateTrnFsFuelIssuetrnFsFuelIssueEventPostApiResponse,
      CreateTrnFsFuelIssuetrnFsFuelIssueEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fs_fuel_issue/event/`,
        method: 'POST',
        body: queryArg.trnFsFuelIssueInsert
      })
    }),
    updateTrnFsFuelIssuetrnFsFuelIssueEventIdPut: build.mutation<
      UpdateTrnFsFuelIssuetrnFsFuelIssueEventIdPutApiResponse,
      UpdateTrnFsFuelIssuetrnFsFuelIssueEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fs_fuel_issue/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFsFuelIssueUpdate
      })
    }),
    deleteTrnFsFuelIssuetrnFsFuelIssueEventIdDelete: build.mutation<
      DeleteTrnFsFuelIssuetrnFsFuelIssueEventIdDeleteApiResponse,
      DeleteTrnFsFuelIssuetrnFsFuelIssueEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fs_fuel_issue/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnFsFuelIssuetrnFsFuelIssueEventIdGet: build.query<
      GetTrnFsFuelIssuetrnFsFuelIssueEventIdGetApiResponse,
      GetTrnFsFuelIssuetrnFsFuelIssueEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fs_fuel_issue/event/${queryArg.id}`
      })
    }),
    getAllTrnFsFuelReceiveGet: build.query<
      GetAllTrnFsFuelReceiveGetApiResponse,
      GetAllTrnFsFuelReceiveGetApiArg
    >({
      query: () => ({ url: `/trn_fs_fuel_receive/` })
    }),
    createTrnFsFuelReceiveTrnFsFuelReceivePost: build.mutation<
      CreateTrnFsFuelReceiveTrnFsFuelReceivePostApiResponse,
      CreateTrnFsFuelReceiveTrnFsFuelReceivePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_receive/`,
        method: 'POST',
        body: queryArg.trnFsFuelReceiveInsert
      })
    }),
    updateTrnFsFuelReceiveTrnFsFuelReceiveIdPut: build.mutation<
      UpdateTrnFsFuelReceiveTrnFsFuelReceiveIdPutApiResponse,
      UpdateTrnFsFuelReceiveTrnFsFuelReceiveIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_receive/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFsFuelReceiveUpdate
      })
    }),
    deleteTrnFsFuelReceiveTrnFsFuelReceiveIdDelete: build.mutation<
      DeleteTrnFsFuelReceiveTrnFsFuelReceiveIdDeleteApiResponse,
      DeleteTrnFsFuelReceiveTrnFsFuelReceiveIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_receive/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnFsFuelReceiveTrnFsFuelReceiveIdGet: build.query<
      GetTrnFsFuelReceiveTrnFsFuelReceiveIdGetApiResponse,
      GetTrnFsFuelReceiveTrnFsFuelReceiveIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_fs_fuel_receive/${queryArg.id}` })
    }),
    getAlltrnFsFuelReceiveEventGet: build.query<
      GetAlltrnFsFuelReceiveEventGetApiResponse,
      GetAlltrnFsFuelReceiveEventGetApiArg
    >({
      query: () => ({ url: `trn_fs_fuel_receive/event/` })
    }),
    createTrnFsFuelReceivetrnFsFuelReceiveEventPost: build.mutation<
      CreateTrnFsFuelReceivetrnFsFuelReceiveEventPostApiResponse,
      CreateTrnFsFuelReceivetrnFsFuelReceiveEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fs_fuel_receive/event/`,
        method: 'POST',
        body: queryArg.trnFsFuelReceiveInsert
      })
    }),
    updateTrnFsFuelReceivetrnFsFuelReceiveEventIdPut: build.mutation<
      UpdateTrnFsFuelReceivetrnFsFuelReceiveEventIdPutApiResponse,
      UpdateTrnFsFuelReceivetrnFsFuelReceiveEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fs_fuel_receive/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFsFuelReceiveUpdate
      })
    }),
    deleteTrnFsFuelReceivetrnFsFuelReceiveEventIdDelete: build.mutation<
      DeleteTrnFsFuelReceivetrnFsFuelReceiveEventIdDeleteApiResponse,
      DeleteTrnFsFuelReceivetrnFsFuelReceiveEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fs_fuel_receive/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnFsFuelReceivetrnFsFuelReceiveEventIdGet: build.query<
      GetTrnFsFuelReceivetrnFsFuelReceiveEventIdGetApiResponse,
      GetTrnFsFuelReceivetrnFsFuelReceiveEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fs_fuel_receive/event/${queryArg.id}`
      })
    }),
    getAllTrnFsFuelTransferGet: build.query<
      GetAllTrnFsFuelTransferGetApiResponse,
      GetAllTrnFsFuelTransferGetApiArg
    >({
      query: () => ({ url: `/trn_fs_fuel_transfer/` })
    }),
    createTrnFsFuelTransferTrnFsFuelTransferPost: build.mutation<
      CreateTrnFsFuelTransferTrnFsFuelTransferPostApiResponse,
      CreateTrnFsFuelTransferTrnFsFuelTransferPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_transfer/`,
        method: 'POST',
        body: queryArg.trnFsFuelTransferInsert
      })
    }),
    updateTrnFsFuelTransferTrnFsFuelTransferIdPut: build.mutation<
      UpdateTrnFsFuelTransferTrnFsFuelTransferIdPutApiResponse,
      UpdateTrnFsFuelTransferTrnFsFuelTransferIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_transfer/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFsFuelTransferUpdate
      })
    }),
    deleteTrnFsFuelTransferTrnFsFuelTransferIdDelete: build.mutation<
      DeleteTrnFsFuelTransferTrnFsFuelTransferIdDeleteApiResponse,
      DeleteTrnFsFuelTransferTrnFsFuelTransferIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_transfer/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnFsFuelTransferTrnFsFuelTransferIdGet: build.query<
      GetTrnFsFuelTransferTrnFsFuelTransferIdGetApiResponse,
      GetTrnFsFuelTransferTrnFsFuelTransferIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fs_fuel_transfer/${queryArg.id}`
      })
    }),
    getAlltrnFsFuelTransferEventGet: build.query<
      GetAlltrnFsFuelTransferEventGetApiResponse,
      GetAlltrnFsFuelTransferEventGetApiArg
    >({
      query: () => ({ url: `trn_fs_fuel_transfer/event/` })
    }),
    createTrnFsFuelTransfertrnFsFuelTransferEventPost: build.mutation<
      CreateTrnFsFuelTransfertrnFsFuelTransferEventPostApiResponse,
      CreateTrnFsFuelTransfertrnFsFuelTransferEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fs_fuel_transfer/event/`,
        method: 'POST',
        body: queryArg.trnFsFuelTransferInsert
      })
    }),
    updateTrnFsFuelTransfertrnFsFuelTransferEventIdPut: build.mutation<
      UpdateTrnFsFuelTransfertrnFsFuelTransferEventIdPutApiResponse,
      UpdateTrnFsFuelTransfertrnFsFuelTransferEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fs_fuel_transfer/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFsFuelTransferUpdate
      })
    }),
    deleteTrnFsFuelTransfertrnFsFuelTransferEventIdDelete: build.mutation<
      DeleteTrnFsFuelTransfertrnFsFuelTransferEventIdDeleteApiResponse,
      DeleteTrnFsFuelTransfertrnFsFuelTransferEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fs_fuel_transfer/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnFsFuelTransfertrnFsFuelTransferEventIdGet: build.query<
      GetTrnFsFuelTransfertrnFsFuelTransferEventIdGetApiResponse,
      GetTrnFsFuelTransfertrnFsFuelTransferEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fs_fuel_transfer/event/${queryArg.id}`
      })
    }),
    getAllTrnFuelFeedinGet: build.query<
      GetAllTrnFuelFeedinGetApiResponse,
      GetAllTrnFuelFeedinGetApiArg
    >({
      query: () => ({ url: `/trn_fuel_feedin/` })
    }),
    createTrnFuelFeedinTrnFuelFeedinPost: build.mutation<
      CreateTrnFuelFeedinTrnFuelFeedinPostApiResponse,
      CreateTrnFuelFeedinTrnFuelFeedinPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin/`,
        method: 'POST',
        body: queryArg.trnFuelFeedinInsert
      })
    }),
    updateTrnFuelFeedinTrnFuelFeedinIdPut: build.mutation<
      UpdateTrnFuelFeedinTrnFuelFeedinIdPutApiResponse,
      UpdateTrnFuelFeedinTrnFuelFeedinIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFuelFeedinUpdate
      })
    }),
    deleteTrnFuelFeedinTrnFuelFeedinIdDelete: build.mutation<
      DeleteTrnFuelFeedinTrnFuelFeedinIdDeleteApiResponse,
      DeleteTrnFuelFeedinTrnFuelFeedinIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnFuelFeedinTrnFuelFeedinIdGet: build.query<
      GetTrnFuelFeedinTrnFuelFeedinIdGetApiResponse,
      GetTrnFuelFeedinTrnFuelFeedinIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_fuel_feedin/${queryArg.id}` })
    }),
    getAlltrnFuelFeedinEventGet: build.query<
      GetAlltrnFuelFeedinEventGetApiResponse,
      GetAlltrnFuelFeedinEventGetApiArg
    >({
      query: () => ({ url: `trn_fuel_feedin/event/` })
    }),
    createTrnFuelFeedintrnFuelFeedinEventPost: build.mutation<
      CreateTrnFuelFeedintrnFuelFeedinEventPostApiResponse,
      CreateTrnFuelFeedintrnFuelFeedinEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fuel_feedin/event/`,
        method: 'POST',
        body: queryArg.trnFuelFeedinInsert
      })
    }),
    updateTrnFuelFeedintrnFuelFeedinEventIdPut: build.mutation<
      UpdateTrnFuelFeedintrnFuelFeedinEventIdPutApiResponse,
      UpdateTrnFuelFeedintrnFuelFeedinEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fuel_feedin/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFuelFeedinUpdate
      })
    }),
    deleteTrnFuelFeedintrnFuelFeedinEventIdDelete: build.mutation<
      DeleteTrnFuelFeedintrnFuelFeedinEventIdDeleteApiResponse,
      DeleteTrnFuelFeedintrnFuelFeedinEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fuel_feedin/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnFuelFeedintrnFuelFeedinEventIdGet: build.query<
      GetTrnFuelFeedintrnFuelFeedinEventIdGetApiResponse,
      GetTrnFuelFeedintrnFuelFeedinEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fuel_feedin/event/${queryArg.id}`
      })
    }),
    getAllTrnFuelFeedinAttributeGet: build.query<
      GetAllTrnFuelFeedinAttributeGetApiResponse,
      GetAllTrnFuelFeedinAttributeGetApiArg
    >({
      query: () => ({ url: `/trn_fuel_feedin_attribute/` })
    }),
    createTrnFuelFeedinAttributeTrnFuelFeedinAttributePost: build.mutation<
      CreateTrnFuelFeedinAttributeTrnFuelFeedinAttributePostApiResponse,
      CreateTrnFuelFeedinAttributeTrnFuelFeedinAttributePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin_attribute/`,
        method: 'POST',
        body: queryArg.trnFuelFeedinAttributeInsert
      })
    }),
    updateTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdPut: build.mutation<
      UpdateTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdPutApiResponse,
      UpdateTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin_attribute/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnFuelFeedinAttributeUpdate
      })
    }),
    deleteTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdDelete: build.mutation<
      DeleteTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdDeleteApiResponse,
      DeleteTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin_attribute/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdGet: build.query<
      GetTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdGetApiResponse,
      GetTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_fuel_feedin_attribute/${queryArg.id}`
      })
    }),
    getAlltrnFuelFeedinAttributeEventGet: build.query<
      GetAlltrnFuelFeedinAttributeEventGetApiResponse,
      GetAlltrnFuelFeedinAttributeEventGetApiArg
    >({
      query: () => ({ url: `trn_fuel_feedin_attribute/event/` })
    }),
    createTrnFuelFeedinAttributetrnFuelFeedinAttributeEventPost: build.mutation<
      CreateTrnFuelFeedinAttributetrnFuelFeedinAttributeEventPostApiResponse,
      CreateTrnFuelFeedinAttributetrnFuelFeedinAttributeEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fuel_feedin_attribute/event/`,
        method: 'POST',
        body: queryArg.trnFuelFeedinAttributeInsert
      })
    }),
    updateTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdPut:
      build.mutation<
        UpdateTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdPutApiResponse,
        UpdateTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_fuel_feedin_attribute/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnFuelFeedinAttributeUpdate
        })
      }),
    deleteTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdDelete:
      build.mutation<
        DeleteTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdDeleteApiResponse,
        DeleteTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_fuel_feedin_attribute/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdGet: build.query<
      GetTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdGetApiResponse,
      GetTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_fuel_feedin_attribute/event/${queryArg.id}`
      })
    }),
    getAllTrnHrEmployeeGet: build.query<
      GetAllTrnHrEmployeeGetApiResponse,
      GetAllTrnHrEmployeeGetApiArg
    >({
      query: () => ({ url: `/trn_hr_employee/` })
    }),
    createTrnHrEmployeeTrnHrEmployeePost: build.mutation<
      CreateTrnHrEmployeeTrnHrEmployeePostApiResponse,
      CreateTrnHrEmployeeTrnHrEmployeePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee/`,
        method: 'POST',
        body: queryArg.trnHrEmployeeInsert
      })
    }),
    updateTrnHrEmployeeTrnHrEmployeeIdPut: build.mutation<
      UpdateTrnHrEmployeeTrnHrEmployeeIdPutApiResponse,
      UpdateTrnHrEmployeeTrnHrEmployeeIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnHrEmployeeUpdate
      })
    }),
    deleteTrnHrEmployeeTrnHrEmployeeIdDelete: build.mutation<
      DeleteTrnHrEmployeeTrnHrEmployeeIdDeleteApiResponse,
      DeleteTrnHrEmployeeTrnHrEmployeeIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnHrEmployeeTrnHrEmployeeIdGet: build.query<
      GetTrnHrEmployeeTrnHrEmployeeIdGetApiResponse,
      GetTrnHrEmployeeTrnHrEmployeeIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_hr_employee/${queryArg.id}` })
    }),
    getAlltrnHrEmployeeEventGet: build.query<
      GetAlltrnHrEmployeeEventGetApiResponse,
      GetAlltrnHrEmployeeEventGetApiArg
    >({
      query: () => ({ url: `trn_hr_employee/event/` })
    }),
    createTrnHrEmployeetrnHrEmployeeEventPost: build.mutation<
      CreateTrnHrEmployeetrnHrEmployeeEventPostApiResponse,
      CreateTrnHrEmployeetrnHrEmployeeEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_hr_employee/event/`,
        method: 'POST',
        body: queryArg.trnHrEmployeeInsert
      })
    }),
    updateTrnHrEmployeetrnHrEmployeeEventIdPut: build.mutation<
      UpdateTrnHrEmployeetrnHrEmployeeEventIdPutApiResponse,
      UpdateTrnHrEmployeetrnHrEmployeeEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_hr_employee/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnHrEmployeeUpdate
      })
    }),
    deleteTrnHrEmployeetrnHrEmployeeEventIdDelete: build.mutation<
      DeleteTrnHrEmployeetrnHrEmployeeEventIdDeleteApiResponse,
      DeleteTrnHrEmployeetrnHrEmployeeEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_hr_employee/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnHrEmployeetrnHrEmployeeEventIdGet: build.query<
      GetTrnHrEmployeetrnHrEmployeeEventIdGetApiResponse,
      GetTrnHrEmployeetrnHrEmployeeEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_hr_employee/event/${queryArg.id}`
      })
    }),
    getAllTrnHrEmployeeAssetGet: build.query<
      GetAllTrnHrEmployeeAssetGetApiResponse,
      GetAllTrnHrEmployeeAssetGetApiArg
    >({
      query: () => ({ url: `/trn_hr_employee_asset/` })
    }),
    createTrnHrEmployeeAssetTrnHrEmployeeAssetPost: build.mutation<
      CreateTrnHrEmployeeAssetTrnHrEmployeeAssetPostApiResponse,
      CreateTrnHrEmployeeAssetTrnHrEmployeeAssetPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee_asset/`,
        method: 'POST',
        body: queryArg.trnHrEmployeeAssetInsert
      })
    }),
    updateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPut: build.mutation<
      UpdateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPutApiResponse,
      UpdateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee_asset/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnHrEmployeeAssetUpdate
      })
    }),
    deleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDelete: build.mutation<
      DeleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDeleteApiResponse,
      DeleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee_asset/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnHrEmployeeAssetTrnHrEmployeeAssetIdGet: build.query<
      GetTrnHrEmployeeAssetTrnHrEmployeeAssetIdGetApiResponse,
      GetTrnHrEmployeeAssetTrnHrEmployeeAssetIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_hr_employee_asset/${queryArg.id}`
      })
    }),
    getAlltrnHrEmployeeAssetEventGet: build.query<
      GetAlltrnHrEmployeeAssetEventGetApiResponse,
      GetAlltrnHrEmployeeAssetEventGetApiArg
    >({
      query: () => ({ url: `trn_hr_employee_asset/event/` })
    }),
    createTrnHrEmployeeAssettrnHrEmployeeAssetEventPost: build.mutation<
      CreateTrnHrEmployeeAssettrnHrEmployeeAssetEventPostApiResponse,
      CreateTrnHrEmployeeAssettrnHrEmployeeAssetEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_hr_employee_asset/event/`,
        method: 'POST',
        body: queryArg.trnHrEmployeeAssetInsert
      })
    }),
    updateTrnHrEmployeeAssettrnHrEmployeeAssetEventIdPut: build.mutation<
      UpdateTrnHrEmployeeAssettrnHrEmployeeAssetEventIdPutApiResponse,
      UpdateTrnHrEmployeeAssettrnHrEmployeeAssetEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_hr_employee_asset/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnHrEmployeeAssetUpdate
      })
    }),
    deleteTrnHrEmployeeAssettrnHrEmployeeAssetEventIdDelete: build.mutation<
      DeleteTrnHrEmployeeAssettrnHrEmployeeAssetEventIdDeleteApiResponse,
      DeleteTrnHrEmployeeAssettrnHrEmployeeAssetEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_hr_employee_asset/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnHrEmployeeAssettrnHrEmployeeAssetEventIdGet: build.query<
      GetTrnHrEmployeeAssettrnHrEmployeeAssetEventIdGetApiResponse,
      GetTrnHrEmployeeAssettrnHrEmployeeAssetEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_hr_employee_asset/event/${queryArg.id}`
      })
    }),
    getAllTrnInvAdjustmentAttributeGet: build.query<
      GetAllTrnInvAdjustmentAttributeGetApiResponse,
      GetAllTrnInvAdjustmentAttributeGetApiArg
    >({
      query: () => ({ url: `/trn_inv_adjustment_attribute/` })
    }),
    createTrnInvAdjustmentAttributeTrnInvAdjustmentAttributePost:
      build.mutation<
        CreateTrnInvAdjustmentAttributeTrnInvAdjustmentAttributePostApiResponse,
        CreateTrnInvAdjustmentAttributeTrnInvAdjustmentAttributePostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_adjustment_attribute/`,
          method: 'POST',
          body: queryArg.trnInvAdjustmentAttributeInsert
        })
      }),
    updateTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdPut:
      build.mutation<
        UpdateTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdPutApiResponse,
        UpdateTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_adjustment_attribute/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvAdjustmentAttributeUpdate
        })
      }),
    deleteTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdDelete:
      build.mutation<
        DeleteTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdDeleteApiResponse,
        DeleteTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_adjustment_attribute/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdGet: build.query<
      GetTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdGetApiResponse,
      GetTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_adjustment_attribute/${queryArg.id}`
      })
    }),
    getAlltrnInvAdjustmentAttributeEventGet: build.query<
      GetAlltrnInvAdjustmentAttributeEventGetApiResponse,
      GetAlltrnInvAdjustmentAttributeEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_adjustment_attribute/event/` })
    }),
    createTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventPost:
      build.mutation<
        CreateTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventPostApiResponse,
        CreateTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_adjustment_attribute/event/`,
          method: 'POST',
          body: queryArg.trnInvAdjustmentAttributeInsert
        })
      }),
    updateTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdPut:
      build.mutation<
        UpdateTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdPutApiResponse,
        UpdateTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_adjustment_attribute/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvAdjustmentAttributeUpdate
        })
      }),
    deleteTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdDelete:
      build.mutation<
        DeleteTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdDeleteApiResponse,
        DeleteTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_adjustment_attribute/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdGet:
      build.query<
        GetTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdGetApiResponse,
        GetTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdGetApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_adjustment_attribute/event/${queryArg.id}`
        })
      }),
    getAllTrnInvAdjustmentWorkflowGet: build.query<
      GetAllTrnInvAdjustmentWorkflowGetApiResponse,
      GetAllTrnInvAdjustmentWorkflowGetApiArg
    >({
      query: () => ({ url: `/trn_inv_adjustment_workflow/` })
    }),
    createTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowPost: build.mutation<
      CreateTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowPostApiResponse,
      CreateTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_adjustment_workflow/`,
        method: 'POST',
        body: queryArg.trnInvAdjustmentWorkflowInsert
      })
    }),
    updateTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdPut: build.mutation<
      UpdateTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdPutApiResponse,
      UpdateTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_adjustment_workflow/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvAdjustmentWorkflowUpdate
      })
    }),
    deleteTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdDelete:
      build.mutation<
        DeleteTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdDeleteApiResponse,
        DeleteTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_adjustment_workflow/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdGet: build.query<
      GetTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdGetApiResponse,
      GetTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_adjustment_workflow/${queryArg.id}`
      })
    }),
    getAlltrnInvAdjustmentWorkflowEventGet: build.query<
      GetAlltrnInvAdjustmentWorkflowEventGetApiResponse,
      GetAlltrnInvAdjustmentWorkflowEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_adjustment_workflow/event/` })
    }),
    createTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventPost:
      build.mutation<
        CreateTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventPostApiResponse,
        CreateTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_adjustment_workflow/event/`,
          method: 'POST',
          body: queryArg.trnInvAdjustmentWorkflowInsert
        })
      }),
    updateTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdPut:
      build.mutation<
        UpdateTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdPutApiResponse,
        UpdateTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_adjustment_workflow/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvAdjustmentWorkflowUpdate
        })
      }),
    deleteTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdDelete:
      build.mutation<
        DeleteTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdDeleteApiResponse,
        DeleteTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_adjustment_workflow/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdGet: build.query<
      GetTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdGetApiResponse,
      GetTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_adjustment_workflow/event/${queryArg.id}`
      })
    }),
    getAllTrnInvAllocationGet: build.query<
      GetAllTrnInvAllocationGetApiResponse,
      GetAllTrnInvAllocationGetApiArg
    >({
      query: () => ({ url: `/trn_inv_allocation/` })
    }),
    createTrnInvAllocationTrnInvAllocationPost: build.mutation<
      CreateTrnInvAllocationTrnInvAllocationPostApiResponse,
      CreateTrnInvAllocationTrnInvAllocationPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation/`,
        method: 'POST',
        body: queryArg.trnInvAllocationInsert
      })
    }),
    updateTrnInvAllocationTrnInvAllocationIdPut: build.mutation<
      UpdateTrnInvAllocationTrnInvAllocationIdPutApiResponse,
      UpdateTrnInvAllocationTrnInvAllocationIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvAllocationUpdate
      })
    }),
    deleteTrnInvAllocationTrnInvAllocationIdDelete: build.mutation<
      DeleteTrnInvAllocationTrnInvAllocationIdDeleteApiResponse,
      DeleteTrnInvAllocationTrnInvAllocationIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvAllocationTrnInvAllocationIdGet: build.query<
      GetTrnInvAllocationTrnInvAllocationIdGetApiResponse,
      GetTrnInvAllocationTrnInvAllocationIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_inv_allocation/${queryArg.id}` })
    }),
    getAlltrnInvAllocationEventGet: build.query<
      GetAlltrnInvAllocationEventGetApiResponse,
      GetAlltrnInvAllocationEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_allocation/event/` })
    }),
    createTrnInvAllocationtrnInvAllocationEventPost: build.mutation<
      CreateTrnInvAllocationtrnInvAllocationEventPostApiResponse,
      CreateTrnInvAllocationtrnInvAllocationEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_allocation/event/`,
        method: 'POST',
        body: queryArg.trnInvAllocationInsert
      })
    }),
    updateTrnInvAllocationtrnInvAllocationEventIdPut: build.mutation<
      UpdateTrnInvAllocationtrnInvAllocationEventIdPutApiResponse,
      UpdateTrnInvAllocationtrnInvAllocationEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_allocation/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvAllocationUpdate
      })
    }),
    deleteTrnInvAllocationtrnInvAllocationEventIdDelete: build.mutation<
      DeleteTrnInvAllocationtrnInvAllocationEventIdDeleteApiResponse,
      DeleteTrnInvAllocationtrnInvAllocationEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_allocation/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvAllocationtrnInvAllocationEventIdGet: build.query<
      GetTrnInvAllocationtrnInvAllocationEventIdGetApiResponse,
      GetTrnInvAllocationtrnInvAllocationEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_allocation/event/${queryArg.id}`
      })
    }),
    getAllTrnInvAllocationWorkflowGet: build.query<
      GetAllTrnInvAllocationWorkflowGetApiResponse,
      GetAllTrnInvAllocationWorkflowGetApiArg
    >({
      query: () => ({ url: `/trn_inv_allocation_workflow/` })
    }),
    createTrnInvAllocationWorkflowTrnInvAllocationWorkflowPost: build.mutation<
      CreateTrnInvAllocationWorkflowTrnInvAllocationWorkflowPostApiResponse,
      CreateTrnInvAllocationWorkflowTrnInvAllocationWorkflowPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation_workflow/`,
        method: 'POST',
        body: queryArg.trnInvAllocationWorkflowInsert
      })
    }),
    updateTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdPut: build.mutation<
      UpdateTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdPutApiResponse,
      UpdateTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation_workflow/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvAllocationWorkflowUpdate
      })
    }),
    deleteTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdDelete:
      build.mutation<
        DeleteTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdDeleteApiResponse,
        DeleteTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_allocation_workflow/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdGet: build.query<
      GetTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdGetApiResponse,
      GetTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_allocation_workflow/${queryArg.id}`
      })
    }),
    getAlltrnInvAllocationWorkflowEventGet: build.query<
      GetAlltrnInvAllocationWorkflowEventGetApiResponse,
      GetAlltrnInvAllocationWorkflowEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_allocation_workflow/event/` })
    }),
    createTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventPost:
      build.mutation<
        CreateTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventPostApiResponse,
        CreateTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_allocation_workflow/event/`,
          method: 'POST',
          body: queryArg.trnInvAllocationWorkflowInsert
        })
      }),
    updateTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdPut:
      build.mutation<
        UpdateTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdPutApiResponse,
        UpdateTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_allocation_workflow/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvAllocationWorkflowUpdate
        })
      }),
    deleteTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdDelete:
      build.mutation<
        DeleteTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdDeleteApiResponse,
        DeleteTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_allocation_workflow/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdGet: build.query<
      GetTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdGetApiResponse,
      GetTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_allocation_workflow/event/${queryArg.id}`
      })
    }),
    getAllTrnInvConsumptionGet: build.query<
      GetAllTrnInvConsumptionGetApiResponse,
      GetAllTrnInvConsumptionGetApiArg
    >({
      query: () => ({ url: `/trn_inv_consumption/` })
    }),
    createTrnInvConsumptionTrnInvConsumptionPost: build.mutation<
      CreateTrnInvConsumptionTrnInvConsumptionPostApiResponse,
      CreateTrnInvConsumptionTrnInvConsumptionPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption/`,
        method: 'POST',
        body: queryArg.trnInvConsumptionInsert
      })
    }),
    updateTrnInvConsumptionTrnInvConsumptionIdPut: build.mutation<
      UpdateTrnInvConsumptionTrnInvConsumptionIdPutApiResponse,
      UpdateTrnInvConsumptionTrnInvConsumptionIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvConsumptionUpdate
      })
    }),
    deleteTrnInvConsumptionTrnInvConsumptionIdDelete: build.mutation<
      DeleteTrnInvConsumptionTrnInvConsumptionIdDeleteApiResponse,
      DeleteTrnInvConsumptionTrnInvConsumptionIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvConsumptionTrnInvConsumptionIdGet: build.query<
      GetTrnInvConsumptionTrnInvConsumptionIdGetApiResponse,
      GetTrnInvConsumptionTrnInvConsumptionIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_inv_consumption/${queryArg.id}` })
    }),
    getAlltrnInvConsumptionEventGet: build.query<
      GetAlltrnInvConsumptionEventGetApiResponse,
      GetAlltrnInvConsumptionEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_consumption/event/` })
    }),
    createTrnInvConsumptiontrnInvConsumptionEventPost: build.mutation<
      CreateTrnInvConsumptiontrnInvConsumptionEventPostApiResponse,
      CreateTrnInvConsumptiontrnInvConsumptionEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_consumption/event/`,
        method: 'POST',
        body: queryArg.trnInvConsumptionInsert
      })
    }),
    updateTrnInvConsumptiontrnInvConsumptionEventIdPut: build.mutation<
      UpdateTrnInvConsumptiontrnInvConsumptionEventIdPutApiResponse,
      UpdateTrnInvConsumptiontrnInvConsumptionEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_consumption/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvConsumptionUpdate
      })
    }),
    deleteTrnInvConsumptiontrnInvConsumptionEventIdDelete: build.mutation<
      DeleteTrnInvConsumptiontrnInvConsumptionEventIdDeleteApiResponse,
      DeleteTrnInvConsumptiontrnInvConsumptionEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_consumption/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvConsumptiontrnInvConsumptionEventIdGet: build.query<
      GetTrnInvConsumptiontrnInvConsumptionEventIdGetApiResponse,
      GetTrnInvConsumptiontrnInvConsumptionEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_consumption/event/${queryArg.id}`
      })
    }),
    getAllTrnInvConsumptionItemsGet: build.query<
      GetAllTrnInvConsumptionItemsGetApiResponse,
      GetAllTrnInvConsumptionItemsGetApiArg
    >({
      query: () => ({ url: `/trn_inv_consumption_items/` })
    }),
    createTrnInvConsumptionItemsTrnInvConsumptionItemsPost: build.mutation<
      CreateTrnInvConsumptionItemsTrnInvConsumptionItemsPostApiResponse,
      CreateTrnInvConsumptionItemsTrnInvConsumptionItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption_items/`,
        method: 'POST',
        body: queryArg.trnInvConsumptionItemsInsert
      })
    }),
    updateTrnInvConsumptionItemsTrnInvConsumptionItemsIdPut: build.mutation<
      UpdateTrnInvConsumptionItemsTrnInvConsumptionItemsIdPutApiResponse,
      UpdateTrnInvConsumptionItemsTrnInvConsumptionItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvConsumptionItemsUpdate
      })
    }),
    deleteTrnInvConsumptionItemsTrnInvConsumptionItemsIdDelete: build.mutation<
      DeleteTrnInvConsumptionItemsTrnInvConsumptionItemsIdDeleteApiResponse,
      DeleteTrnInvConsumptionItemsTrnInvConsumptionItemsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption_items/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvConsumptionItemsTrnInvConsumptionItemsIdGet: build.query<
      GetTrnInvConsumptionItemsTrnInvConsumptionItemsIdGetApiResponse,
      GetTrnInvConsumptionItemsTrnInvConsumptionItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption_items/${queryArg.id}`
      })
    }),
    getAlltrnInvConsumptionItemsEventGet: build.query<
      GetAlltrnInvConsumptionItemsEventGetApiResponse,
      GetAlltrnInvConsumptionItemsEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_consumption_items/event/` })
    }),
    createTrnInvConsumptionItemstrnInvConsumptionItemsEventPost: build.mutation<
      CreateTrnInvConsumptionItemstrnInvConsumptionItemsEventPostApiResponse,
      CreateTrnInvConsumptionItemstrnInvConsumptionItemsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_consumption_items/event/`,
        method: 'POST',
        body: queryArg.trnInvConsumptionItemsInsert
      })
    }),
    updateTrnInvConsumptionItemstrnInvConsumptionItemsEventIdPut:
      build.mutation<
        UpdateTrnInvConsumptionItemstrnInvConsumptionItemsEventIdPutApiResponse,
        UpdateTrnInvConsumptionItemstrnInvConsumptionItemsEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_consumption_items/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvConsumptionItemsUpdate
        })
      }),
    deleteTrnInvConsumptionItemstrnInvConsumptionItemsEventIdDelete:
      build.mutation<
        DeleteTrnInvConsumptionItemstrnInvConsumptionItemsEventIdDeleteApiResponse,
        DeleteTrnInvConsumptionItemstrnInvConsumptionItemsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_consumption_items/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvConsumptionItemstrnInvConsumptionItemsEventIdGet: build.query<
      GetTrnInvConsumptionItemstrnInvConsumptionItemsEventIdGetApiResponse,
      GetTrnInvConsumptionItemstrnInvConsumptionItemsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_consumption_items/event/${queryArg.id}`
      })
    }),
    getAllTrnInvConsumptionWorkflowGet: build.query<
      GetAllTrnInvConsumptionWorkflowGetApiResponse,
      GetAllTrnInvConsumptionWorkflowGetApiArg
    >({
      query: () => ({ url: `/trn_inv_consumption_workflow/` })
    }),
    createTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowPost:
      build.mutation<
        CreateTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowPostApiResponse,
        CreateTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_consumption_workflow/`,
          method: 'POST',
          body: queryArg.trnInvConsumptionWorkflowInsert
        })
      }),
    updateTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdPut:
      build.mutation<
        UpdateTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdPutApiResponse,
        UpdateTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_consumption_workflow/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvConsumptionWorkflowUpdate
        })
      }),
    deleteTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdDelete:
      build.mutation<
        DeleteTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdDeleteApiResponse,
        DeleteTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_consumption_workflow/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdGet: build.query<
      GetTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdGetApiResponse,
      GetTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_consumption_workflow/${queryArg.id}`
      })
    }),
    getAlltrnInvConsumptionWorkflowEventGet: build.query<
      GetAlltrnInvConsumptionWorkflowEventGetApiResponse,
      GetAlltrnInvConsumptionWorkflowEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_consumption_workflow/event/` })
    }),
    createTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventPost:
      build.mutation<
        CreateTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventPostApiResponse,
        CreateTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_consumption_workflow/event/`,
          method: 'POST',
          body: queryArg.trnInvConsumptionWorkflowInsert
        })
      }),
    updateTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdPut:
      build.mutation<
        UpdateTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdPutApiResponse,
        UpdateTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_consumption_workflow/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvConsumptionWorkflowUpdate
        })
      }),
    deleteTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdDelete:
      build.mutation<
        DeleteTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdDeleteApiResponse,
        DeleteTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_consumption_workflow/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdGet:
      build.query<
        GetTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdGetApiResponse,
        GetTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdGetApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_consumption_workflow/event/${queryArg.id}`
        })
      }),
    getAllTrnInvItemGet: build.query<
      GetAllTrnInvItemGetApiResponse,
      GetAllTrnInvItemGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item/` })
    }),
    createTrnInvItemTrnInvItemPost: build.mutation<
      CreateTrnInvItemTrnInvItemPostApiResponse,
      CreateTrnInvItemTrnInvItemPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item/`,
        method: 'POST',
        body: queryArg.trnInvItemInsert
      })
    }),
    updateTrnInvItemTrnInvItemIdPut: build.mutation<
      UpdateTrnInvItemTrnInvItemIdPutApiResponse,
      UpdateTrnInvItemTrnInvItemIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemUpdate
      })
    }),
    deleteTrnInvItemTrnInvItemIdDelete: build.mutation<
      DeleteTrnInvItemTrnInvItemIdDeleteApiResponse,
      DeleteTrnInvItemTrnInvItemIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemTrnInvItemIdGet: build.query<
      GetTrnInvItemTrnInvItemIdGetApiResponse,
      GetTrnInvItemTrnInvItemIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_inv_item/${queryArg.id}` })
    }),
    getAlltrnInvItemEventGet: build.query<
      GetAlltrnInvItemEventGetApiResponse,
      GetAlltrnInvItemEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_item/event/` })
    }),
    createTrnInvItemtrnInvItemEventPost: build.mutation<
      CreateTrnInvItemtrnInvItemEventPostApiResponse,
      CreateTrnInvItemtrnInvItemEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item/event/`,
        method: 'POST',
        body: queryArg.trnInvItemInsert
      })
    }),
    updateTrnInvItemtrnInvItemEventIdPut: build.mutation<
      UpdateTrnInvItemtrnInvItemEventIdPutApiResponse,
      UpdateTrnInvItemtrnInvItemEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemUpdate
      })
    }),
    deleteTrnInvItemtrnInvItemEventIdDelete: build.mutation<
      DeleteTrnInvItemtrnInvItemEventIdDeleteApiResponse,
      DeleteTrnInvItemtrnInvItemEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemtrnInvItemEventIdGet: build.query<
      GetTrnInvItemtrnInvItemEventIdGetApiResponse,
      GetTrnInvItemtrnInvItemEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `trn_inv_item/event/${queryArg.id}` })
    }),
    getAllTrnInvItemAdjustmentGet: build.query<
      GetAllTrnInvItemAdjustmentGetApiResponse,
      GetAllTrnInvItemAdjustmentGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_adjustment/` })
    }),
    createTrnInvItemAdjustmentTrnInvItemAdjustmentPost: build.mutation<
      CreateTrnInvItemAdjustmentTrnInvItemAdjustmentPostApiResponse,
      CreateTrnInvItemAdjustmentTrnInvItemAdjustmentPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment/`,
        method: 'POST',
        body: queryArg.trnInvItemAdjustmentInsert
      })
    }),
    updateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPut: build.mutation<
      UpdateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPutApiResponse,
      UpdateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemAdjustmentUpdate
      })
    }),
    deleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDelete: build.mutation<
      DeleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDeleteApiResponse,
      DeleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemAdjustmentTrnInvItemAdjustmentIdGet: build.query<
      GetTrnInvItemAdjustmentTrnInvItemAdjustmentIdGetApiResponse,
      GetTrnInvItemAdjustmentTrnInvItemAdjustmentIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment/${queryArg.id}`
      })
    }),
    getAlltrnInvItemAdjustmentEventGet: build.query<
      GetAlltrnInvItemAdjustmentEventGetApiResponse,
      GetAlltrnInvItemAdjustmentEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_item_adjustment/event/` })
    }),
    createTrnInvItemAdjustmenttrnInvItemAdjustmentEventPost: build.mutation<
      CreateTrnInvItemAdjustmenttrnInvItemAdjustmentEventPostApiResponse,
      CreateTrnInvItemAdjustmenttrnInvItemAdjustmentEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_adjustment/event/`,
        method: 'POST',
        body: queryArg.trnInvItemAdjustmentInsert
      })
    }),
    updateTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdPut: build.mutation<
      UpdateTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdPutApiResponse,
      UpdateTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_adjustment/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemAdjustmentUpdate
      })
    }),
    deleteTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdDelete: build.mutation<
      DeleteTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdDeleteApiResponse,
      DeleteTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_adjustment/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdGet: build.query<
      GetTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdGetApiResponse,
      GetTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_adjustment/event/${queryArg.id}`
      })
    }),
    getAllTrnInvItemAdjustmentDtlGet: build.query<
      GetAllTrnInvItemAdjustmentDtlGetApiResponse,
      GetAllTrnInvItemAdjustmentDtlGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_adjustment_dtl/` })
    }),
    createTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlPost: build.mutation<
      CreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlPostApiResponse,
      CreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment_dtl/`,
        method: 'POST',
        body: queryArg.trnInvItemAdjustmentDtlInsert
      })
    }),
    updateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdPut: build.mutation<
      UpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdPutApiResponse,
      UpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment_dtl/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemAdjustmentDtlUpdate
      })
    }),
    deleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdDelete:
      build.mutation<
        DeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdDeleteApiResponse,
        DeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_item_adjustment_dtl/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdGet: build.query<
      GetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdGetApiResponse,
      GetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_adjustment_dtl/${queryArg.id}`
      })
    }),
    getAlltrnInvItemAdjustmentDtlEventGet: build.query<
      GetAlltrnInvItemAdjustmentDtlEventGetApiResponse,
      GetAlltrnInvItemAdjustmentDtlEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_item_adjustment_dtl/event/` })
    }),
    createTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventPost:
      build.mutation<
        CreateTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventPostApiResponse,
        CreateTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_item_adjustment_dtl/event/`,
          method: 'POST',
          body: queryArg.trnInvItemAdjustmentDtlInsert
        })
      }),
    updateTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdPut:
      build.mutation<
        UpdateTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdPutApiResponse,
        UpdateTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_item_adjustment_dtl/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvItemAdjustmentDtlUpdate
        })
      }),
    deleteTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdDelete:
      build.mutation<
        DeleteTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdDeleteApiResponse,
        DeleteTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_item_adjustment_dtl/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdGet: build.query<
      GetTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdGetApiResponse,
      GetTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_adjustment_dtl/event/${queryArg.id}`
      })
    }),
    getAllTrnInvItemAllocationGet: build.query<
      GetAllTrnInvItemAllocationGetApiResponse,
      GetAllTrnInvItemAllocationGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_allocation/` })
    }),
    createTrnInvItemAllocationTrnInvItemAllocationPost: build.mutation<
      CreateTrnInvItemAllocationTrnInvItemAllocationPostApiResponse,
      CreateTrnInvItemAllocationTrnInvItemAllocationPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_allocation/`,
        method: 'POST',
        body: queryArg.trnInvItemAllocationInsert
      })
    }),
    updateTrnInvItemAllocationTrnInvItemAllocationIdPut: build.mutation<
      UpdateTrnInvItemAllocationTrnInvItemAllocationIdPutApiResponse,
      UpdateTrnInvItemAllocationTrnInvItemAllocationIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_allocation/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemAllocationUpdate
      })
    }),
    deleteTrnInvItemAllocationTrnInvItemAllocationIdDelete: build.mutation<
      DeleteTrnInvItemAllocationTrnInvItemAllocationIdDeleteApiResponse,
      DeleteTrnInvItemAllocationTrnInvItemAllocationIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_allocation/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemAllocationTrnInvItemAllocationIdGet: build.query<
      GetTrnInvItemAllocationTrnInvItemAllocationIdGetApiResponse,
      GetTrnInvItemAllocationTrnInvItemAllocationIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_allocation/${queryArg.id}`
      })
    }),
    getAlltrnInvItemAllocationEventGet: build.query<
      GetAlltrnInvItemAllocationEventGetApiResponse,
      GetAlltrnInvItemAllocationEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_item_allocation/event/` })
    }),
    createTrnInvItemAllocationtrnInvItemAllocationEventPost: build.mutation<
      CreateTrnInvItemAllocationtrnInvItemAllocationEventPostApiResponse,
      CreateTrnInvItemAllocationtrnInvItemAllocationEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_allocation/event/`,
        method: 'POST',
        body: queryArg.trnInvItemAllocationInsert
      })
    }),
    updateTrnInvItemAllocationtrnInvItemAllocationEventIdPut: build.mutation<
      UpdateTrnInvItemAllocationtrnInvItemAllocationEventIdPutApiResponse,
      UpdateTrnInvItemAllocationtrnInvItemAllocationEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_allocation/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemAllocationUpdate
      })
    }),
    deleteTrnInvItemAllocationtrnInvItemAllocationEventIdDelete: build.mutation<
      DeleteTrnInvItemAllocationtrnInvItemAllocationEventIdDeleteApiResponse,
      DeleteTrnInvItemAllocationtrnInvItemAllocationEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_allocation/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemAllocationtrnInvItemAllocationEventIdGet: build.query<
      GetTrnInvItemAllocationtrnInvItemAllocationEventIdGetApiResponse,
      GetTrnInvItemAllocationtrnInvItemAllocationEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_allocation/event/${queryArg.id}`
      })
    }),
    getAllTrnInvItemDemandGet: build.query<
      GetAllTrnInvItemDemandGetApiResponse,
      GetAllTrnInvItemDemandGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_demand/` })
    }),
    createTrnInvItemDemandTrnInvItemDemandPost: build.mutation<
      CreateTrnInvItemDemandTrnInvItemDemandPostApiResponse,
      CreateTrnInvItemDemandTrnInvItemDemandPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand/`,
        method: 'POST',
        body: queryArg.trnInvItemDemandInsert
      })
    }),
    updateTrnInvItemDemandTrnInvItemDemandIdPut: build.mutation<
      UpdateTrnInvItemDemandTrnInvItemDemandIdPutApiResponse,
      UpdateTrnInvItemDemandTrnInvItemDemandIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemDemandUpdate
      })
    }),
    deleteTrnInvItemDemandTrnInvItemDemandIdDelete: build.mutation<
      DeleteTrnInvItemDemandTrnInvItemDemandIdDeleteApiResponse,
      DeleteTrnInvItemDemandTrnInvItemDemandIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemDemandTrnInvItemDemandIdGet: build.query<
      GetTrnInvItemDemandTrnInvItemDemandIdGetApiResponse,
      GetTrnInvItemDemandTrnInvItemDemandIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_inv_item_demand/${queryArg.id}` })
    }),
    getAlltrnInvItemDemandEventGet: build.query<
      GetAlltrnInvItemDemandEventGetApiResponse,
      GetAlltrnInvItemDemandEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_item_demand/event/` })
    }),
    createTrnInvItemDemandtrnInvItemDemandEventPost: build.mutation<
      CreateTrnInvItemDemandtrnInvItemDemandEventPostApiResponse,
      CreateTrnInvItemDemandtrnInvItemDemandEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_demand/event/`,
        method: 'POST',
        body: queryArg.trnInvItemDemandInsert
      })
    }),
    updateTrnInvItemDemandtrnInvItemDemandEventIdPut: build.mutation<
      UpdateTrnInvItemDemandtrnInvItemDemandEventIdPutApiResponse,
      UpdateTrnInvItemDemandtrnInvItemDemandEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_demand/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemDemandUpdate
      })
    }),
    deleteTrnInvItemDemandtrnInvItemDemandEventIdDelete: build.mutation<
      DeleteTrnInvItemDemandtrnInvItemDemandEventIdDeleteApiResponse,
      DeleteTrnInvItemDemandtrnInvItemDemandEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_demand/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemDemandtrnInvItemDemandEventIdGet: build.query<
      GetTrnInvItemDemandtrnInvItemDemandEventIdGetApiResponse,
      GetTrnInvItemDemandtrnInvItemDemandEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_demand/event/${queryArg.id}`
      })
    }),
    getAllTrnInvItemDemandAttributesGet: build.query<
      GetAllTrnInvItemDemandAttributesGetApiResponse,
      GetAllTrnInvItemDemandAttributesGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_demand_attributes/` })
    }),
    createTrnInvItemDemandAttributesTrnInvItemDemandAttributesPost:
      build.mutation<
        CreateTrnInvItemDemandAttributesTrnInvItemDemandAttributesPostApiResponse,
        CreateTrnInvItemDemandAttributesTrnInvItemDemandAttributesPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_item_demand_attributes/`,
          method: 'POST',
          body: queryArg.trnInvItemDemandAttributesInsert
        })
      }),
    updateTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdPut:
      build.mutation<
        UpdateTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdPutApiResponse,
        UpdateTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_item_demand_attributes/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvItemDemandAttributesUpdate
        })
      }),
    deleteTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdDelete:
      build.mutation<
        DeleteTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdDeleteApiResponse,
        DeleteTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_item_demand_attributes/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdGet: build.query<
      GetTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdGetApiResponse,
      GetTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_attributes/${queryArg.id}`
      })
    }),
    getAlltrnInvItemDemandAttributesEventGet: build.query<
      GetAlltrnInvItemDemandAttributesEventGetApiResponse,
      GetAlltrnInvItemDemandAttributesEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_item_demand_attributes/event/` })
    }),
    createTrnInvItemDemandAttributestrnInvItemDemandAttributesEventPost:
      build.mutation<
        CreateTrnInvItemDemandAttributestrnInvItemDemandAttributesEventPostApiResponse,
        CreateTrnInvItemDemandAttributestrnInvItemDemandAttributesEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_item_demand_attributes/event/`,
          method: 'POST',
          body: queryArg.trnInvItemDemandAttributesInsert
        })
      }),
    updateTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdPut:
      build.mutation<
        UpdateTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdPutApiResponse,
        UpdateTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_item_demand_attributes/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvItemDemandAttributesUpdate
        })
      }),
    deleteTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdDelete:
      build.mutation<
        DeleteTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdDeleteApiResponse,
        DeleteTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_item_demand_attributes/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdGet:
      build.query<
        GetTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdGetApiResponse,
        GetTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdGetApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_item_demand_attributes/event/${queryArg.id}`
        })
      }),
    getAllTrnInvItemDemandItemsGet: build.query<
      GetAllTrnInvItemDemandItemsGetApiResponse,
      GetAllTrnInvItemDemandItemsGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_demand_items/` })
    }),
    createTrnInvItemDemandItemsTrnInvItemDemandItemsPost: build.mutation<
      CreateTrnInvItemDemandItemsTrnInvItemDemandItemsPostApiResponse,
      CreateTrnInvItemDemandItemsTrnInvItemDemandItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_items/`,
        method: 'POST',
        body: queryArg.trnInvItemDemandItemsInsert
      })
    }),
    updateTrnInvItemDemandItemsTrnInvItemDemandItemsIdPut: build.mutation<
      UpdateTrnInvItemDemandItemsTrnInvItemDemandItemsIdPutApiResponse,
      UpdateTrnInvItemDemandItemsTrnInvItemDemandItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemDemandItemsUpdate
      })
    }),
    deleteTrnInvItemDemandItemsTrnInvItemDemandItemsIdDelete: build.mutation<
      DeleteTrnInvItemDemandItemsTrnInvItemDemandItemsIdDeleteApiResponse,
      DeleteTrnInvItemDemandItemsTrnInvItemDemandItemsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_items/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemDemandItemsTrnInvItemDemandItemsIdGet: build.query<
      GetTrnInvItemDemandItemsTrnInvItemDemandItemsIdGetApiResponse,
      GetTrnInvItemDemandItemsTrnInvItemDemandItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_items/${queryArg.id}`
      })
    }),
    getAlltrnInvItemDemandItemsEventGet: build.query<
      GetAlltrnInvItemDemandItemsEventGetApiResponse,
      GetAlltrnInvItemDemandItemsEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_item_demand_items/event/` })
    }),
    createTrnInvItemDemandItemstrnInvItemDemandItemsEventPost: build.mutation<
      CreateTrnInvItemDemandItemstrnInvItemDemandItemsEventPostApiResponse,
      CreateTrnInvItemDemandItemstrnInvItemDemandItemsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_demand_items/event/`,
        method: 'POST',
        body: queryArg.trnInvItemDemandItemsInsert
      })
    }),
    updateTrnInvItemDemandItemstrnInvItemDemandItemsEventIdPut: build.mutation<
      UpdateTrnInvItemDemandItemstrnInvItemDemandItemsEventIdPutApiResponse,
      UpdateTrnInvItemDemandItemstrnInvItemDemandItemsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_demand_items/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemDemandItemsUpdate
      })
    }),
    deleteTrnInvItemDemandItemstrnInvItemDemandItemsEventIdDelete:
      build.mutation<
        DeleteTrnInvItemDemandItemstrnInvItemDemandItemsEventIdDeleteApiResponse,
        DeleteTrnInvItemDemandItemstrnInvItemDemandItemsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_item_demand_items/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvItemDemandItemstrnInvItemDemandItemsEventIdGet: build.query<
      GetTrnInvItemDemandItemstrnInvItemDemandItemsEventIdGetApiResponse,
      GetTrnInvItemDemandItemstrnInvItemDemandItemsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_demand_items/event/${queryArg.id}`
      })
    }),
    getAllTrnInvItemDemandWorkflowGet: build.query<
      GetAllTrnInvItemDemandWorkflowGetApiResponse,
      GetAllTrnInvItemDemandWorkflowGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_demand_workflow/` })
    }),
    createTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowPost: build.mutation<
      CreateTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowPostApiResponse,
      CreateTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_workflow/`,
        method: 'POST',
        body: queryArg.trnInvItemDemandWorkflowInsert
      })
    }),
    updateTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdPut: build.mutation<
      UpdateTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdPutApiResponse,
      UpdateTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_workflow/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemDemandWorkflowUpdate
      })
    }),
    deleteTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdDelete:
      build.mutation<
        DeleteTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdDeleteApiResponse,
        DeleteTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_item_demand_workflow/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdGet: build.query<
      GetTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdGetApiResponse,
      GetTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_demand_workflow/${queryArg.id}`
      })
    }),
    getAlltrnInvItemDemandWorkflowEventGet: build.query<
      GetAlltrnInvItemDemandWorkflowEventGetApiResponse,
      GetAlltrnInvItemDemandWorkflowEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_item_demand_workflow/event/` })
    }),
    createTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventPost:
      build.mutation<
        CreateTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventPostApiResponse,
        CreateTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_item_demand_workflow/event/`,
          method: 'POST',
          body: queryArg.trnInvItemDemandWorkflowInsert
        })
      }),
    updateTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdPut:
      build.mutation<
        UpdateTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdPutApiResponse,
        UpdateTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_item_demand_workflow/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvItemDemandWorkflowUpdate
        })
      }),
    deleteTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdDelete:
      build.mutation<
        DeleteTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdDeleteApiResponse,
        DeleteTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_item_demand_workflow/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdGet: build.query<
      GetTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdGetApiResponse,
      GetTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_demand_workflow/event/${queryArg.id}`
      })
    }),
    getAllTrnInvItemTransferGet: build.query<
      GetAllTrnInvItemTransferGetApiResponse,
      GetAllTrnInvItemTransferGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_transfer/` })
    }),
    createTrnInvItemTransferTrnInvItemTransferPost: build.mutation<
      CreateTrnInvItemTransferTrnInvItemTransferPostApiResponse,
      CreateTrnInvItemTransferTrnInvItemTransferPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer/`,
        method: 'POST',
        body: queryArg.trnInvItemTransferInsert
      })
    }),
    updateTrnInvItemTransferTrnInvItemTransferIdPut: build.mutation<
      UpdateTrnInvItemTransferTrnInvItemTransferIdPutApiResponse,
      UpdateTrnInvItemTransferTrnInvItemTransferIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemTransferUpdate
      })
    }),
    deleteTrnInvItemTransferTrnInvItemTransferIdDelete: build.mutation<
      DeleteTrnInvItemTransferTrnInvItemTransferIdDeleteApiResponse,
      DeleteTrnInvItemTransferTrnInvItemTransferIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemTransferTrnInvItemTransferIdGet: build.query<
      GetTrnInvItemTransferTrnInvItemTransferIdGetApiResponse,
      GetTrnInvItemTransferTrnInvItemTransferIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer/${queryArg.id}`
      })
    }),
    getAlltrnInvItemTransferEventGet: build.query<
      GetAlltrnInvItemTransferEventGetApiResponse,
      GetAlltrnInvItemTransferEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_item_transfer/event/` })
    }),
    createTrnInvItemTransfertrnInvItemTransferEventPost: build.mutation<
      CreateTrnInvItemTransfertrnInvItemTransferEventPostApiResponse,
      CreateTrnInvItemTransfertrnInvItemTransferEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_transfer/event/`,
        method: 'POST',
        body: queryArg.trnInvItemTransferInsert
      })
    }),
    updateTrnInvItemTransfertrnInvItemTransferEventIdPut: build.mutation<
      UpdateTrnInvItemTransfertrnInvItemTransferEventIdPutApiResponse,
      UpdateTrnInvItemTransfertrnInvItemTransferEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_transfer/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemTransferUpdate
      })
    }),
    deleteTrnInvItemTransfertrnInvItemTransferEventIdDelete: build.mutation<
      DeleteTrnInvItemTransfertrnInvItemTransferEventIdDeleteApiResponse,
      DeleteTrnInvItemTransfertrnInvItemTransferEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_transfer/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemTransfertrnInvItemTransferEventIdGet: build.query<
      GetTrnInvItemTransfertrnInvItemTransferEventIdGetApiResponse,
      GetTrnInvItemTransfertrnInvItemTransferEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_transfer/event/${queryArg.id}`
      })
    }),
    getAllTrnInvItemTransferDtlGet: build.query<
      GetAllTrnInvItemTransferDtlGetApiResponse,
      GetAllTrnInvItemTransferDtlGetApiArg
    >({
      query: () => ({ url: `/trn_inv_item_transfer_dtl/` })
    }),
    createTrnInvItemTransferDtlTrnInvItemTransferDtlPost: build.mutation<
      CreateTrnInvItemTransferDtlTrnInvItemTransferDtlPostApiResponse,
      CreateTrnInvItemTransferDtlTrnInvItemTransferDtlPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer_dtl/`,
        method: 'POST',
        body: queryArg.trnInvItemTransferDtlInsert
      })
    }),
    updateTrnInvItemTransferDtlTrnInvItemTransferDtlIdPut: build.mutation<
      UpdateTrnInvItemTransferDtlTrnInvItemTransferDtlIdPutApiResponse,
      UpdateTrnInvItemTransferDtlTrnInvItemTransferDtlIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer_dtl/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemTransferDtlUpdate
      })
    }),
    deleteTrnInvItemTransferDtlTrnInvItemTransferDtlIdDelete: build.mutation<
      DeleteTrnInvItemTransferDtlTrnInvItemTransferDtlIdDeleteApiResponse,
      DeleteTrnInvItemTransferDtlTrnInvItemTransferDtlIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer_dtl/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvItemTransferDtlTrnInvItemTransferDtlIdGet: build.query<
      GetTrnInvItemTransferDtlTrnInvItemTransferDtlIdGetApiResponse,
      GetTrnInvItemTransferDtlTrnInvItemTransferDtlIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_item_transfer_dtl/${queryArg.id}`
      })
    }),
    getAlltrnInvItemTransferDtlEventGet: build.query<
      GetAlltrnInvItemTransferDtlEventGetApiResponse,
      GetAlltrnInvItemTransferDtlEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_item_transfer_dtl/event/` })
    }),
    createTrnInvItemTransferDtltrnInvItemTransferDtlEventPost: build.mutation<
      CreateTrnInvItemTransferDtltrnInvItemTransferDtlEventPostApiResponse,
      CreateTrnInvItemTransferDtltrnInvItemTransferDtlEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_transfer_dtl/event/`,
        method: 'POST',
        body: queryArg.trnInvItemTransferDtlInsert
      })
    }),
    updateTrnInvItemTransferDtltrnInvItemTransferDtlEventIdPut: build.mutation<
      UpdateTrnInvItemTransferDtltrnInvItemTransferDtlEventIdPutApiResponse,
      UpdateTrnInvItemTransferDtltrnInvItemTransferDtlEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_transfer_dtl/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvItemTransferDtlUpdate
      })
    }),
    deleteTrnInvItemTransferDtltrnInvItemTransferDtlEventIdDelete:
      build.mutation<
        DeleteTrnInvItemTransferDtltrnInvItemTransferDtlEventIdDeleteApiResponse,
        DeleteTrnInvItemTransferDtltrnInvItemTransferDtlEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_item_transfer_dtl/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvItemTransferDtltrnInvItemTransferDtlEventIdGet: build.query<
      GetTrnInvItemTransferDtltrnInvItemTransferDtlEventIdGetApiResponse,
      GetTrnInvItemTransferDtltrnInvItemTransferDtlEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_item_transfer_dtl/event/${queryArg.id}`
      })
    }),
    getAllTrnInvLogisticsGet: build.query<
      GetAllTrnInvLogisticsGetApiResponse,
      GetAllTrnInvLogisticsGetApiArg
    >({
      query: () => ({ url: `/trn_inv_logistics/` })
    }),
    createTrnInvLogisticsTrnInvLogisticsPost: build.mutation<
      CreateTrnInvLogisticsTrnInvLogisticsPostApiResponse,
      CreateTrnInvLogisticsTrnInvLogisticsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics/`,
        method: 'POST',
        body: queryArg.trnInvLogisticsInsert
      })
    }),
    updateTrnInvLogisticsTrnInvLogisticsIdPut: build.mutation<
      UpdateTrnInvLogisticsTrnInvLogisticsIdPutApiResponse,
      UpdateTrnInvLogisticsTrnInvLogisticsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvLogisticsUpdate
      })
    }),
    deleteTrnInvLogisticsTrnInvLogisticsIdDelete: build.mutation<
      DeleteTrnInvLogisticsTrnInvLogisticsIdDeleteApiResponse,
      DeleteTrnInvLogisticsTrnInvLogisticsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvLogisticsTrnInvLogisticsIdGet: build.query<
      GetTrnInvLogisticsTrnInvLogisticsIdGetApiResponse,
      GetTrnInvLogisticsTrnInvLogisticsIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_inv_logistics/${queryArg.id}` })
    }),
    getAlltrnInvLogisticsEventGet: build.query<
      GetAlltrnInvLogisticsEventGetApiResponse,
      GetAlltrnInvLogisticsEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_logistics/event/` })
    }),
    createTrnInvLogisticstrnInvLogisticsEventPost: build.mutation<
      CreateTrnInvLogisticstrnInvLogisticsEventPostApiResponse,
      CreateTrnInvLogisticstrnInvLogisticsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_logistics/event/`,
        method: 'POST',
        body: queryArg.trnInvLogisticsInsert
      })
    }),
    updateTrnInvLogisticstrnInvLogisticsEventIdPut: build.mutation<
      UpdateTrnInvLogisticstrnInvLogisticsEventIdPutApiResponse,
      UpdateTrnInvLogisticstrnInvLogisticsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_logistics/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvLogisticsUpdate
      })
    }),
    deleteTrnInvLogisticstrnInvLogisticsEventIdDelete: build.mutation<
      DeleteTrnInvLogisticstrnInvLogisticsEventIdDeleteApiResponse,
      DeleteTrnInvLogisticstrnInvLogisticsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_logistics/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvLogisticstrnInvLogisticsEventIdGet: build.query<
      GetTrnInvLogisticstrnInvLogisticsEventIdGetApiResponse,
      GetTrnInvLogisticstrnInvLogisticsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_logistics/event/${queryArg.id}`
      })
    }),
    getAllTrnInvLogisticsDtlGet: build.query<
      GetAllTrnInvLogisticsDtlGetApiResponse,
      GetAllTrnInvLogisticsDtlGetApiArg
    >({
      query: () => ({ url: `/trn_inv_logistics_dtl/` })
    }),
    createTrnInvLogisticsDtlTrnInvLogisticsDtlPost: build.mutation<
      CreateTrnInvLogisticsDtlTrnInvLogisticsDtlPostApiResponse,
      CreateTrnInvLogisticsDtlTrnInvLogisticsDtlPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_dtl/`,
        method: 'POST',
        body: queryArg.trnInvLogisticsDtlInsert
      })
    }),
    updateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPut: build.mutation<
      UpdateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPutApiResponse,
      UpdateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_dtl/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvLogisticsDtlUpdate
      })
    }),
    deleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDelete: build.mutation<
      DeleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDeleteApiResponse,
      DeleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_dtl/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvLogisticsDtlTrnInvLogisticsDtlIdGet: build.query<
      GetTrnInvLogisticsDtlTrnInvLogisticsDtlIdGetApiResponse,
      GetTrnInvLogisticsDtlTrnInvLogisticsDtlIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_dtl/${queryArg.id}`
      })
    }),
    getAlltrnInvLogisticsDtlEventGet: build.query<
      GetAlltrnInvLogisticsDtlEventGetApiResponse,
      GetAlltrnInvLogisticsDtlEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_logistics_dtl/event/` })
    }),
    createTrnInvLogisticsDtltrnInvLogisticsDtlEventPost: build.mutation<
      CreateTrnInvLogisticsDtltrnInvLogisticsDtlEventPostApiResponse,
      CreateTrnInvLogisticsDtltrnInvLogisticsDtlEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_logistics_dtl/event/`,
        method: 'POST',
        body: queryArg.trnInvLogisticsDtlInsert
      })
    }),
    updateTrnInvLogisticsDtltrnInvLogisticsDtlEventIdPut: build.mutation<
      UpdateTrnInvLogisticsDtltrnInvLogisticsDtlEventIdPutApiResponse,
      UpdateTrnInvLogisticsDtltrnInvLogisticsDtlEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_logistics_dtl/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvLogisticsDtlUpdate
      })
    }),
    deleteTrnInvLogisticsDtltrnInvLogisticsDtlEventIdDelete: build.mutation<
      DeleteTrnInvLogisticsDtltrnInvLogisticsDtlEventIdDeleteApiResponse,
      DeleteTrnInvLogisticsDtltrnInvLogisticsDtlEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_logistics_dtl/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvLogisticsDtltrnInvLogisticsDtlEventIdGet: build.query<
      GetTrnInvLogisticsDtltrnInvLogisticsDtlEventIdGetApiResponse,
      GetTrnInvLogisticsDtltrnInvLogisticsDtlEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_logistics_dtl/event/${queryArg.id}`
      })
    }),
    getAllTrnInvLogisticsWorkflowGet: build.query<
      GetAllTrnInvLogisticsWorkflowGetApiResponse,
      GetAllTrnInvLogisticsWorkflowGetApiArg
    >({
      query: () => ({ url: `/trn_inv_logistics_workflow/` })
    }),
    createTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowPost: build.mutation<
      CreateTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowPostApiResponse,
      CreateTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_workflow/`,
        method: 'POST',
        body: queryArg.trnInvLogisticsWorkflowInsert
      })
    }),
    updateTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdPut: build.mutation<
      UpdateTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdPutApiResponse,
      UpdateTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_workflow/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvLogisticsWorkflowUpdate
      })
    }),
    deleteTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdDelete:
      build.mutation<
        DeleteTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdDeleteApiResponse,
        DeleteTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_inv_logistics_workflow/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdGet: build.query<
      GetTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdGetApiResponse,
      GetTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_logistics_workflow/${queryArg.id}`
      })
    }),
    getAlltrnInvLogisticsWorkflowEventGet: build.query<
      GetAlltrnInvLogisticsWorkflowEventGetApiResponse,
      GetAlltrnInvLogisticsWorkflowEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_logistics_workflow/event/` })
    }),
    createTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventPost:
      build.mutation<
        CreateTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventPostApiResponse,
        CreateTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_logistics_workflow/event/`,
          method: 'POST',
          body: queryArg.trnInvLogisticsWorkflowInsert
        })
      }),
    updateTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdPut:
      build.mutation<
        UpdateTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdPutApiResponse,
        UpdateTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_logistics_workflow/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvLogisticsWorkflowUpdate
        })
      }),
    deleteTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdDelete:
      build.mutation<
        DeleteTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdDeleteApiResponse,
        DeleteTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_logistics_workflow/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdGet: build.query<
      GetTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdGetApiResponse,
      GetTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_logistics_workflow/event/${queryArg.id}`
      })
    }),
    getAllTrnInvPurchaseGet: build.query<
      GetAllTrnInvPurchaseGetApiResponse,
      GetAllTrnInvPurchaseGetApiArg
    >({
      query: () => ({ url: `/trn_inv_purchase/` })
    }),
    createTrnInvPurchaseTrnInvPurchasePost: build.mutation<
      CreateTrnInvPurchaseTrnInvPurchasePostApiResponse,
      CreateTrnInvPurchaseTrnInvPurchasePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseInsert
      })
    }),
    updateTrnInvPurchaseTrnInvPurchaseIdPut: build.mutation<
      UpdateTrnInvPurchaseTrnInvPurchaseIdPutApiResponse,
      UpdateTrnInvPurchaseTrnInvPurchaseIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvPurchaseUpdate
      })
    }),
    deleteTrnInvPurchaseTrnInvPurchaseIdDelete: build.mutation<
      DeleteTrnInvPurchaseTrnInvPurchaseIdDeleteApiResponse,
      DeleteTrnInvPurchaseTrnInvPurchaseIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvPurchaseTrnInvPurchaseIdGet: build.query<
      GetTrnInvPurchaseTrnInvPurchaseIdGetApiResponse,
      GetTrnInvPurchaseTrnInvPurchaseIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_inv_purchase/${queryArg.id}` })
    }),
    getAlltrnInvPurchaseEventGet: build.query<
      GetAlltrnInvPurchaseEventGetApiResponse,
      GetAlltrnInvPurchaseEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_purchase/event/` })
    }),
    createTrnInvPurchasetrnInvPurchaseEventPost: build.mutation<
      CreateTrnInvPurchasetrnInvPurchaseEventPostApiResponse,
      CreateTrnInvPurchasetrnInvPurchaseEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_purchase/event/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseInsert
      })
    }),
    updateTrnInvPurchasetrnInvPurchaseEventIdPut: build.mutation<
      UpdateTrnInvPurchasetrnInvPurchaseEventIdPutApiResponse,
      UpdateTrnInvPurchasetrnInvPurchaseEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_purchase/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvPurchaseUpdate
      })
    }),
    deleteTrnInvPurchasetrnInvPurchaseEventIdDelete: build.mutation<
      DeleteTrnInvPurchasetrnInvPurchaseEventIdDeleteApiResponse,
      DeleteTrnInvPurchasetrnInvPurchaseEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_purchase/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvPurchasetrnInvPurchaseEventIdGet: build.query<
      GetTrnInvPurchasetrnInvPurchaseEventIdGetApiResponse,
      GetTrnInvPurchasetrnInvPurchaseEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_purchase/event/${queryArg.id}`
      })
    }),
    getAllTrnInvPurchaseDocumentGet: build.query<
      GetAllTrnInvPurchaseDocumentGetApiResponse,
      GetAllTrnInvPurchaseDocumentGetApiArg
    >({
      query: () => ({ url: `/trn_inv_purchase_document/` })
    }),
    createTrnInvPurchaseDocumentTrnInvPurchaseDocumentPost: build.mutation<
      CreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentPostApiResponse,
      CreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_document/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseDocumentInsert
      })
    }),
    updateTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdPut: build.mutation<
      UpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdPutApiResponse,
      UpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_document/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvPurchaseDocumentUpdate
      })
    }),
    deleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdDelete: build.mutation<
      DeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdDeleteApiResponse,
      DeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_document/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdGet: build.query<
      GetTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdGetApiResponse,
      GetTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_document/${queryArg.id}`
      })
    }),
    getAlltrnInvPurchaseDocumentEventGet: build.query<
      GetAlltrnInvPurchaseDocumentEventGetApiResponse,
      GetAlltrnInvPurchaseDocumentEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_purchase_document/event/` })
    }),
    createTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventPost: build.mutation<
      CreateTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventPostApiResponse,
      CreateTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_purchase_document/event/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseDocumentInsert
      })
    }),
    updateTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdPut:
      build.mutation<
        UpdateTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdPutApiResponse,
        UpdateTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_purchase_document/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnInvPurchaseDocumentUpdate
        })
      }),
    deleteTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdDelete:
      build.mutation<
        DeleteTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdDeleteApiResponse,
        DeleteTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_inv_purchase_document/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdGet: build.query<
      GetTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdGetApiResponse,
      GetTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_purchase_document/event/${queryArg.id}`
      })
    }),
    getAllTrnInvPurchaseItemsGet: build.query<
      GetAllTrnInvPurchaseItemsGetApiResponse,
      GetAllTrnInvPurchaseItemsGetApiArg
    >({
      query: () => ({ url: `/trn_inv_purchase_items/` })
    }),
    createTrnInvPurchaseItemsTrnInvPurchaseItemsPost: build.mutation<
      CreateTrnInvPurchaseItemsTrnInvPurchaseItemsPostApiResponse,
      CreateTrnInvPurchaseItemsTrnInvPurchaseItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_items/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseItemsInsert
      })
    }),
    updateTrnInvPurchaseItemsTrnInvPurchaseItemsIdPut: build.mutation<
      UpdateTrnInvPurchaseItemsTrnInvPurchaseItemsIdPutApiResponse,
      UpdateTrnInvPurchaseItemsTrnInvPurchaseItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvPurchaseItemsUpdate
      })
    }),
    deleteTrnInvPurchaseItemsTrnInvPurchaseItemsIdDelete: build.mutation<
      DeleteTrnInvPurchaseItemsTrnInvPurchaseItemsIdDeleteApiResponse,
      DeleteTrnInvPurchaseItemsTrnInvPurchaseItemsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_items/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvPurchaseItemsTrnInvPurchaseItemsIdGet: build.query<
      GetTrnInvPurchaseItemsTrnInvPurchaseItemsIdGetApiResponse,
      GetTrnInvPurchaseItemsTrnInvPurchaseItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_items/${queryArg.id}`
      })
    }),
    getAlltrnInvPurchaseItemsEventGet: build.query<
      GetAlltrnInvPurchaseItemsEventGetApiResponse,
      GetAlltrnInvPurchaseItemsEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_purchase_items/event/` })
    }),
    createTrnInvPurchaseItemstrnInvPurchaseItemsEventPost: build.mutation<
      CreateTrnInvPurchaseItemstrnInvPurchaseItemsEventPostApiResponse,
      CreateTrnInvPurchaseItemstrnInvPurchaseItemsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_purchase_items/event/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseItemsInsert
      })
    }),
    updateTrnInvPurchaseItemstrnInvPurchaseItemsEventIdPut: build.mutation<
      UpdateTrnInvPurchaseItemstrnInvPurchaseItemsEventIdPutApiResponse,
      UpdateTrnInvPurchaseItemstrnInvPurchaseItemsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_purchase_items/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvPurchaseItemsUpdate
      })
    }),
    deleteTrnInvPurchaseItemstrnInvPurchaseItemsEventIdDelete: build.mutation<
      DeleteTrnInvPurchaseItemstrnInvPurchaseItemsEventIdDeleteApiResponse,
      DeleteTrnInvPurchaseItemstrnInvPurchaseItemsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_purchase_items/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvPurchaseItemstrnInvPurchaseItemsEventIdGet: build.query<
      GetTrnInvPurchaseItemstrnInvPurchaseItemsEventIdGetApiResponse,
      GetTrnInvPurchaseItemstrnInvPurchaseItemsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_purchase_items/event/${queryArg.id}`
      })
    }),
    getAllTrnInvPurchaseReqGet: build.query<
      GetAllTrnInvPurchaseReqGetApiResponse,
      GetAllTrnInvPurchaseReqGetApiArg
    >({
      query: () => ({ url: `/trn_inv_purchase_req/` })
    }),
    createTrnInvPurchaseReqTrnInvPurchaseReqPost: build.mutation<
      CreateTrnInvPurchaseReqTrnInvPurchaseReqPostApiResponse,
      CreateTrnInvPurchaseReqTrnInvPurchaseReqPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_req/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseReqInsert
      })
    }),
    updateTrnInvPurchaseReqTrnInvPurchaseReqIdPut: build.mutation<
      UpdateTrnInvPurchaseReqTrnInvPurchaseReqIdPutApiResponse,
      UpdateTrnInvPurchaseReqTrnInvPurchaseReqIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_req/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvPurchaseReqUpdate
      })
    }),
    deleteTrnInvPurchaseReqTrnInvPurchaseReqIdDelete: build.mutation<
      DeleteTrnInvPurchaseReqTrnInvPurchaseReqIdDeleteApiResponse,
      DeleteTrnInvPurchaseReqTrnInvPurchaseReqIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_req/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvPurchaseReqTrnInvPurchaseReqIdGet: build.query<
      GetTrnInvPurchaseReqTrnInvPurchaseReqIdGetApiResponse,
      GetTrnInvPurchaseReqTrnInvPurchaseReqIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_inv_purchase_req/${queryArg.id}`
      })
    }),
    getAlltrnInvPurchaseReqEventGet: build.query<
      GetAlltrnInvPurchaseReqEventGetApiResponse,
      GetAlltrnInvPurchaseReqEventGetApiArg
    >({
      query: () => ({ url: `trn_inv_purchase_req/event/` })
    }),
    createTrnInvPurchaseReqtrnInvPurchaseReqEventPost: build.mutation<
      CreateTrnInvPurchaseReqtrnInvPurchaseReqEventPostApiResponse,
      CreateTrnInvPurchaseReqtrnInvPurchaseReqEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_purchase_req/event/`,
        method: 'POST',
        body: queryArg.trnInvPurchaseReqInsert
      })
    }),
    updateTrnInvPurchaseReqtrnInvPurchaseReqEventIdPut: build.mutation<
      UpdateTrnInvPurchaseReqtrnInvPurchaseReqEventIdPutApiResponse,
      UpdateTrnInvPurchaseReqtrnInvPurchaseReqEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_purchase_req/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnInvPurchaseReqUpdate
      })
    }),
    deleteTrnInvPurchaseReqtrnInvPurchaseReqEventIdDelete: build.mutation<
      DeleteTrnInvPurchaseReqtrnInvPurchaseReqEventIdDeleteApiResponse,
      DeleteTrnInvPurchaseReqtrnInvPurchaseReqEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_purchase_req/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnInvPurchaseReqtrnInvPurchaseReqEventIdGet: build.query<
      GetTrnInvPurchaseReqtrnInvPurchaseReqEventIdGetApiResponse,
      GetTrnInvPurchaseReqtrnInvPurchaseReqEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_inv_purchase_req/event/${queryArg.id}`
      })
    }),
    getAllTrnProductivityGet: build.query<
      GetAllTrnProductivityGetApiResponse,
      GetAllTrnProductivityGetApiArg
    >({
      query: () => ({ url: `/trn_productivity/` })
    }),
    createTrnProductivityTrnProductivityPost: build.mutation<
      CreateTrnProductivityTrnProductivityPostApiResponse,
      CreateTrnProductivityTrnProductivityPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity/`,
        method: 'POST',
        body: queryArg.trnProductivityInsert
      })
    }),
    updateTrnProductivityTrnProductivityIdPut: build.mutation<
      UpdateTrnProductivityTrnProductivityIdPutApiResponse,
      UpdateTrnProductivityTrnProductivityIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnProductivityUpdate
      })
    }),
    deleteTrnProductivityTrnProductivityIdDelete: build.mutation<
      DeleteTrnProductivityTrnProductivityIdDeleteApiResponse,
      DeleteTrnProductivityTrnProductivityIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnProductivityTrnProductivityIdGet: build.query<
      GetTrnProductivityTrnProductivityIdGetApiResponse,
      GetTrnProductivityTrnProductivityIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_productivity/${queryArg.id}` })
    }),
    getAlltrnProductivityEventGet: build.query<
      GetAlltrnProductivityEventGetApiResponse,
      GetAlltrnProductivityEventGetApiArg
    >({
      query: () => ({ url: `trn_productivity/event/` })
    }),
    createTrnProductivitytrnProductivityEventPost: build.mutation<
      CreateTrnProductivitytrnProductivityEventPostApiResponse,
      CreateTrnProductivitytrnProductivityEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_productivity/event/`,
        method: 'POST',
        body: queryArg.trnProductivityInsert
      })
    }),
    updateTrnProductivitytrnProductivityEventIdPut: build.mutation<
      UpdateTrnProductivitytrnProductivityEventIdPutApiResponse,
      UpdateTrnProductivitytrnProductivityEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_productivity/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnProductivityUpdate
      })
    }),
    deleteTrnProductivitytrnProductivityEventIdDelete: build.mutation<
      DeleteTrnProductivitytrnProductivityEventIdDeleteApiResponse,
      DeleteTrnProductivitytrnProductivityEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_productivity/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnProductivitytrnProductivityEventIdGet: build.query<
      GetTrnProductivitytrnProductivityEventIdGetApiResponse,
      GetTrnProductivitytrnProductivityEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_productivity/event/${queryArg.id}`
      })
    }),
    getAllTrnProductivityAttributeGet: build.query<
      GetAllTrnProductivityAttributeGetApiResponse,
      GetAllTrnProductivityAttributeGetApiArg
    >({
      query: () => ({ url: `/trn_productivity_attribute/` })
    }),
    createTrnProductivityAttributeTrnProductivityAttributePost: build.mutation<
      CreateTrnProductivityAttributeTrnProductivityAttributePostApiResponse,
      CreateTrnProductivityAttributeTrnProductivityAttributePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity_attribute/`,
        method: 'POST',
        body: queryArg.trnProductivityAttributeInsert
      })
    }),
    updateTrnProductivityAttributeTrnProductivityAttributeIdPut: build.mutation<
      UpdateTrnProductivityAttributeTrnProductivityAttributeIdPutApiResponse,
      UpdateTrnProductivityAttributeTrnProductivityAttributeIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity_attribute/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnProductivityAttributeUpdate
      })
    }),
    deleteTrnProductivityAttributeTrnProductivityAttributeIdDelete:
      build.mutation<
        DeleteTrnProductivityAttributeTrnProductivityAttributeIdDeleteApiResponse,
        DeleteTrnProductivityAttributeTrnProductivityAttributeIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_productivity_attribute/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnProductivityAttributeTrnProductivityAttributeIdGet: build.query<
      GetTrnProductivityAttributeTrnProductivityAttributeIdGetApiResponse,
      GetTrnProductivityAttributeTrnProductivityAttributeIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_productivity_attribute/${queryArg.id}`
      })
    }),
    getAlltrnProductivityAttributeEventGet: build.query<
      GetAlltrnProductivityAttributeEventGetApiResponse,
      GetAlltrnProductivityAttributeEventGetApiArg
    >({
      query: () => ({ url: `trn_productivity_attribute/event/` })
    }),
    createTrnProductivityAttributetrnProductivityAttributeEventPost:
      build.mutation<
        CreateTrnProductivityAttributetrnProductivityAttributeEventPostApiResponse,
        CreateTrnProductivityAttributetrnProductivityAttributeEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_productivity_attribute/event/`,
          method: 'POST',
          body: queryArg.trnProductivityAttributeInsert
        })
      }),
    updateTrnProductivityAttributetrnProductivityAttributeEventIdPut:
      build.mutation<
        UpdateTrnProductivityAttributetrnProductivityAttributeEventIdPutApiResponse,
        UpdateTrnProductivityAttributetrnProductivityAttributeEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_productivity_attribute/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnProductivityAttributeUpdate
        })
      }),
    deleteTrnProductivityAttributetrnProductivityAttributeEventIdDelete:
      build.mutation<
        DeleteTrnProductivityAttributetrnProductivityAttributeEventIdDeleteApiResponse,
        DeleteTrnProductivityAttributetrnProductivityAttributeEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_productivity_attribute/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnProductivityAttributetrnProductivityAttributeEventIdGet: build.query<
      GetTrnProductivityAttributetrnProductivityAttributeEventIdGetApiResponse,
      GetTrnProductivityAttributetrnProductivityAttributeEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_productivity_attribute/event/${queryArg.id}`
      })
    }),
    getAllTrnPurchaseorderWorkflowGet: build.query<
      GetAllTrnPurchaseorderWorkflowGetApiResponse,
      GetAllTrnPurchaseorderWorkflowGetApiArg
    >({
      query: () => ({ url: `/trn_purchaseorder_workflow/` })
    }),
    createTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowPost: build.mutation<
      CreateTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowPostApiResponse,
      CreateTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchaseorder_workflow/`,
        method: 'POST',
        body: queryArg.trnPurchaseorderWorkflowInsert
      })
    }),
    updateTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdPut: build.mutation<
      UpdateTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdPutApiResponse,
      UpdateTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchaseorder_workflow/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseorderWorkflowUpdate
      })
    }),
    deleteTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdDelete:
      build.mutation<
        DeleteTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdDeleteApiResponse,
        DeleteTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_purchaseorder_workflow/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdGet: build.query<
      GetTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdGetApiResponse,
      GetTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchaseorder_workflow/${queryArg.id}`
      })
    }),
    getAlltrnPurchaseorderWorkflowEventGet: build.query<
      GetAlltrnPurchaseorderWorkflowEventGetApiResponse,
      GetAlltrnPurchaseorderWorkflowEventGetApiArg
    >({
      query: () => ({ url: `trn_purchaseorder_workflow/event/` })
    }),
    createTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventPost:
      build.mutation<
        CreateTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventPostApiResponse,
        CreateTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_purchaseorder_workflow/event/`,
          method: 'POST',
          body: queryArg.trnPurchaseorderWorkflowInsert
        })
      }),
    updateTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdPut:
      build.mutation<
        UpdateTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdPutApiResponse,
        UpdateTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_purchaseorder_workflow/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnPurchaseorderWorkflowUpdate
        })
      }),
    deleteTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdDelete:
      build.mutation<
        DeleteTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdDeleteApiResponse,
        DeleteTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_purchaseorder_workflow/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdGet: build.query<
      GetTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdGetApiResponse,
      GetTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchaseorder_workflow/event/${queryArg.id}`
      })
    }),
    getAllTrnPurchaseAttributesGet: build.query<
      GetAllTrnPurchaseAttributesGetApiResponse,
      GetAllTrnPurchaseAttributesGetApiArg
    >({
      query: () => ({ url: `/trn_purchase_attributes/` })
    }),
    createTrnPurchaseAttributesTrnPurchaseAttributesPost: build.mutation<
      CreateTrnPurchaseAttributesTrnPurchaseAttributesPostApiResponse,
      CreateTrnPurchaseAttributesTrnPurchaseAttributesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_attributes/`,
        method: 'POST',
        body: queryArg.trnPurchaseAttributesInsert
      })
    }),
    updateTrnPurchaseAttributesTrnPurchaseAttributesIdPut: build.mutation<
      UpdateTrnPurchaseAttributesTrnPurchaseAttributesIdPutApiResponse,
      UpdateTrnPurchaseAttributesTrnPurchaseAttributesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_attributes/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseAttributesUpdate
      })
    }),
    deleteTrnPurchaseAttributesTrnPurchaseAttributesIdDelete: build.mutation<
      DeleteTrnPurchaseAttributesTrnPurchaseAttributesIdDeleteApiResponse,
      DeleteTrnPurchaseAttributesTrnPurchaseAttributesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_attributes/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnPurchaseAttributesTrnPurchaseAttributesIdGet: build.query<
      GetTrnPurchaseAttributesTrnPurchaseAttributesIdGetApiResponse,
      GetTrnPurchaseAttributesTrnPurchaseAttributesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_attributes/${queryArg.id}`
      })
    }),
    getAlltrnPurchaseAttributesEventGet: build.query<
      GetAlltrnPurchaseAttributesEventGetApiResponse,
      GetAlltrnPurchaseAttributesEventGetApiArg
    >({
      query: () => ({ url: `trn_purchase_attributes/event/` })
    }),
    createTrnPurchaseAttributestrnPurchaseAttributesEventPost: build.mutation<
      CreateTrnPurchaseAttributestrnPurchaseAttributesEventPostApiResponse,
      CreateTrnPurchaseAttributestrnPurchaseAttributesEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_attributes/event/`,
        method: 'POST',
        body: queryArg.trnPurchaseAttributesInsert
      })
    }),
    updateTrnPurchaseAttributestrnPurchaseAttributesEventIdPut: build.mutation<
      UpdateTrnPurchaseAttributestrnPurchaseAttributesEventIdPutApiResponse,
      UpdateTrnPurchaseAttributestrnPurchaseAttributesEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_attributes/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseAttributesUpdate
      })
    }),
    deleteTrnPurchaseAttributestrnPurchaseAttributesEventIdDelete:
      build.mutation<
        DeleteTrnPurchaseAttributestrnPurchaseAttributesEventIdDeleteApiResponse,
        DeleteTrnPurchaseAttributestrnPurchaseAttributesEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_purchase_attributes/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnPurchaseAttributestrnPurchaseAttributesEventIdGet: build.query<
      GetTrnPurchaseAttributestrnPurchaseAttributesEventIdGetApiResponse,
      GetTrnPurchaseAttributestrnPurchaseAttributesEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_attributes/event/${queryArg.id}`
      })
    }),
    getAllTrnPurchaseOrderGet: build.query<
      GetAllTrnPurchaseOrderGetApiResponse,
      GetAllTrnPurchaseOrderGetApiArg
    >({
      query: () => ({ url: `/trn_purchase_order/` })
    }),
    createTrnPurchaseOrderTrnPurchaseOrderPost: build.mutation<
      CreateTrnPurchaseOrderTrnPurchaseOrderPostApiResponse,
      CreateTrnPurchaseOrderTrnPurchaseOrderPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order/`,
        method: 'POST',
        body: queryArg.trnPurchaseOrderInsert
      })
    }),
    updateTrnPurchaseOrderTrnPurchaseOrderIdPut: build.mutation<
      UpdateTrnPurchaseOrderTrnPurchaseOrderIdPutApiResponse,
      UpdateTrnPurchaseOrderTrnPurchaseOrderIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseOrderUpdate
      })
    }),
    deleteTrnPurchaseOrderTrnPurchaseOrderIdDelete: build.mutation<
      DeleteTrnPurchaseOrderTrnPurchaseOrderIdDeleteApiResponse,
      DeleteTrnPurchaseOrderTrnPurchaseOrderIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnPurchaseOrderTrnPurchaseOrderIdGet: build.query<
      GetTrnPurchaseOrderTrnPurchaseOrderIdGetApiResponse,
      GetTrnPurchaseOrderTrnPurchaseOrderIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_purchase_order/${queryArg.id}` })
    }),
    getAlltrnPurchaseOrderEventGet: build.query<
      GetAlltrnPurchaseOrderEventGetApiResponse,
      GetAlltrnPurchaseOrderEventGetApiArg
    >({
      query: () => ({ url: `trn_purchase_order/event/` })
    }),
    createTrnPurchaseOrdertrnPurchaseOrderEventPost: build.mutation<
      CreateTrnPurchaseOrdertrnPurchaseOrderEventPostApiResponse,
      CreateTrnPurchaseOrdertrnPurchaseOrderEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_order/event/`,
        method: 'POST',
        body: queryArg.trnPurchaseOrderInsert
      })
    }),
    updateTrnPurchaseOrdertrnPurchaseOrderEventIdPut: build.mutation<
      UpdateTrnPurchaseOrdertrnPurchaseOrderEventIdPutApiResponse,
      UpdateTrnPurchaseOrdertrnPurchaseOrderEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_order/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseOrderUpdate
      })
    }),
    deleteTrnPurchaseOrdertrnPurchaseOrderEventIdDelete: build.mutation<
      DeleteTrnPurchaseOrdertrnPurchaseOrderEventIdDeleteApiResponse,
      DeleteTrnPurchaseOrdertrnPurchaseOrderEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_order/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnPurchaseOrdertrnPurchaseOrderEventIdGet: build.query<
      GetTrnPurchaseOrdertrnPurchaseOrderEventIdGetApiResponse,
      GetTrnPurchaseOrdertrnPurchaseOrderEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_order/event/${queryArg.id}`
      })
    }),
    getAllTrnPurchaseOrderAttributesGet: build.query<
      GetAllTrnPurchaseOrderAttributesGetApiResponse,
      GetAllTrnPurchaseOrderAttributesGetApiArg
    >({
      query: () => ({ url: `/trn_purchase_order_attributes/` })
    }),
    createTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesPost:
      build.mutation<
        CreateTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesPostApiResponse,
        CreateTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_purchase_order_attributes/`,
          method: 'POST',
          body: queryArg.trnPurchaseOrderAttributesInsert
        })
      }),
    updateTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdPut:
      build.mutation<
        UpdateTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdPutApiResponse,
        UpdateTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_purchase_order_attributes/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnPurchaseOrderAttributesUpdate
        })
      }),
    deleteTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdDelete:
      build.mutation<
        DeleteTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdDeleteApiResponse,
        DeleteTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_purchase_order_attributes/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdGet: build.query<
      GetTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdGetApiResponse,
      GetTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_attributes/${queryArg.id}`
      })
    }),
    getAlltrnPurchaseOrderAttributesEventGet: build.query<
      GetAlltrnPurchaseOrderAttributesEventGetApiResponse,
      GetAlltrnPurchaseOrderAttributesEventGetApiArg
    >({
      query: () => ({ url: `trn_purchase_order_attributes/event/` })
    }),
    createTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventPost:
      build.mutation<
        CreateTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventPostApiResponse,
        CreateTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_purchase_order_attributes/event/`,
          method: 'POST',
          body: queryArg.trnPurchaseOrderAttributesInsert
        })
      }),
    updateTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdPut:
      build.mutation<
        UpdateTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdPutApiResponse,
        UpdateTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_purchase_order_attributes/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnPurchaseOrderAttributesUpdate
        })
      }),
    deleteTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdDelete:
      build.mutation<
        DeleteTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdDeleteApiResponse,
        DeleteTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_purchase_order_attributes/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdGet:
      build.query<
        GetTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdGetApiResponse,
        GetTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdGetApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_purchase_order_attributes/event/${queryArg.id}`
        })
      }),
    getAllTrnPurchaseOrderItemsGet: build.query<
      GetAllTrnPurchaseOrderItemsGetApiResponse,
      GetAllTrnPurchaseOrderItemsGetApiArg
    >({
      query: () => ({ url: `/trn_purchase_order_items/` })
    }),
    createTrnPurchaseOrderItemsTrnPurchaseOrderItemsPost: build.mutation<
      CreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsPostApiResponse,
      CreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_items/`,
        method: 'POST',
        body: queryArg.trnPurchaseOrderItemsInsert
      })
    }),
    updateTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdPut: build.mutation<
      UpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdPutApiResponse,
      UpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseOrderItemsUpdate
      })
    }),
    deleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdDelete: build.mutation<
      DeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdDeleteApiResponse,
      DeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_items/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdGet: build.query<
      GetTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdGetApiResponse,
      GetTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_items/${queryArg.id}`
      })
    }),
    getAlltrnPurchaseOrderItemsEventGet: build.query<
      GetAlltrnPurchaseOrderItemsEventGetApiResponse,
      GetAlltrnPurchaseOrderItemsEventGetApiArg
    >({
      query: () => ({ url: `trn_purchase_order_items/event/` })
    }),
    createTrnPurchaseOrderItemstrnPurchaseOrderItemsEventPost: build.mutation<
      CreateTrnPurchaseOrderItemstrnPurchaseOrderItemsEventPostApiResponse,
      CreateTrnPurchaseOrderItemstrnPurchaseOrderItemsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_order_items/event/`,
        method: 'POST',
        body: queryArg.trnPurchaseOrderItemsInsert
      })
    }),
    updateTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdPut: build.mutation<
      UpdateTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdPutApiResponse,
      UpdateTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_order_items/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseOrderItemsUpdate
      })
    }),
    deleteTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdDelete:
      build.mutation<
        DeleteTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdDeleteApiResponse,
        DeleteTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_purchase_order_items/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdGet: build.query<
      GetTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdGetApiResponse,
      GetTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_order_items/event/${queryArg.id}`
      })
    }),
    getAllTrnPurchaseOrderTermsGet: build.query<
      GetAllTrnPurchaseOrderTermsGetApiResponse,
      GetAllTrnPurchaseOrderTermsGetApiArg
    >({
      query: () => ({ url: `/trn_purchase_order_terms/` })
    }),
    createTrnPurchaseOrderTermsTrnPurchaseOrderTermsPost: build.mutation<
      CreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsPostApiResponse,
      CreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_terms/`,
        method: 'POST',
        body: queryArg.trnPurchaseOrderTermsInsert
      })
    }),
    updateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPut: build.mutation<
      UpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPutApiResponse,
      UpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_terms/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseOrderTermsUpdate
      })
    }),
    deleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDelete: build.mutation<
      DeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDeleteApiResponse,
      DeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_terms/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGet: build.query<
      GetTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGetApiResponse,
      GetTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_order_terms/${queryArg.id}`
      })
    }),
    getAlltrnPurchaseOrderTermsEventGet: build.query<
      GetAlltrnPurchaseOrderTermsEventGetApiResponse,
      GetAlltrnPurchaseOrderTermsEventGetApiArg
    >({
      query: () => ({ url: `trn_purchase_order_terms/event/` })
    }),
    createTrnPurchaseOrderTermstrnPurchaseOrderTermsEventPost: build.mutation<
      CreateTrnPurchaseOrderTermstrnPurchaseOrderTermsEventPostApiResponse,
      CreateTrnPurchaseOrderTermstrnPurchaseOrderTermsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_order_terms/event/`,
        method: 'POST',
        body: queryArg.trnPurchaseOrderTermsInsert
      })
    }),
    updateTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdPut: build.mutation<
      UpdateTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdPutApiResponse,
      UpdateTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_order_terms/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseOrderTermsUpdate
      })
    }),
    deleteTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdDelete:
      build.mutation<
        DeleteTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdDeleteApiResponse,
        DeleteTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_purchase_order_terms/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdGet: build.query<
      GetTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdGetApiResponse,
      GetTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_order_terms/event/${queryArg.id}`
      })
    }),
    getAllTrnPurchaseReqItemsGet: build.query<
      GetAllTrnPurchaseReqItemsGetApiResponse,
      GetAllTrnPurchaseReqItemsGetApiArg
    >({
      query: () => ({ url: `/trn_purchase_req_items/` })
    }),
    createTrnPurchaseReqItemsTrnPurchaseReqItemsPost: build.mutation<
      CreateTrnPurchaseReqItemsTrnPurchaseReqItemsPostApiResponse,
      CreateTrnPurchaseReqItemsTrnPurchaseReqItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_items/`,
        method: 'POST',
        body: queryArg.trnPurchaseReqItemsInsert
      })
    }),
    updateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPut: build.mutation<
      UpdateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPutApiResponse,
      UpdateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseReqItemsUpdate
      })
    }),
    deleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDelete: build.mutation<
      DeleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDeleteApiResponse,
      DeleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_items/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnPurchaseReqItemsTrnPurchaseReqItemsIdGet: build.query<
      GetTrnPurchaseReqItemsTrnPurchaseReqItemsIdGetApiResponse,
      GetTrnPurchaseReqItemsTrnPurchaseReqItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_items/${queryArg.id}`
      })
    }),
    getAlltrnPurchaseReqItemsEventGet: build.query<
      GetAlltrnPurchaseReqItemsEventGetApiResponse,
      GetAlltrnPurchaseReqItemsEventGetApiArg
    >({
      query: () => ({ url: `trn_purchase_req_items/event/` })
    }),
    createTrnPurchaseReqItemstrnPurchaseReqItemsEventPost: build.mutation<
      CreateTrnPurchaseReqItemstrnPurchaseReqItemsEventPostApiResponse,
      CreateTrnPurchaseReqItemstrnPurchaseReqItemsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_req_items/event/`,
        method: 'POST',
        body: queryArg.trnPurchaseReqItemsInsert
      })
    }),
    updateTrnPurchaseReqItemstrnPurchaseReqItemsEventIdPut: build.mutation<
      UpdateTrnPurchaseReqItemstrnPurchaseReqItemsEventIdPutApiResponse,
      UpdateTrnPurchaseReqItemstrnPurchaseReqItemsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_req_items/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseReqItemsUpdate
      })
    }),
    deleteTrnPurchaseReqItemstrnPurchaseReqItemsEventIdDelete: build.mutation<
      DeleteTrnPurchaseReqItemstrnPurchaseReqItemsEventIdDeleteApiResponse,
      DeleteTrnPurchaseReqItemstrnPurchaseReqItemsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_req_items/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnPurchaseReqItemstrnPurchaseReqItemsEventIdGet: build.query<
      GetTrnPurchaseReqItemstrnPurchaseReqItemsEventIdGetApiResponse,
      GetTrnPurchaseReqItemstrnPurchaseReqItemsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_req_items/event/${queryArg.id}`
      })
    }),
    getAllTrnPurchaseReqWorkflowGet: build.query<
      GetAllTrnPurchaseReqWorkflowGetApiResponse,
      GetAllTrnPurchaseReqWorkflowGetApiArg
    >({
      query: () => ({ url: `/trn_purchase_req_workflow/` })
    }),
    createTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowPost: build.mutation<
      CreateTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowPostApiResponse,
      CreateTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_workflow/`,
        method: 'POST',
        body: queryArg.trnPurchaseReqWorkflowInsert
      })
    }),
    updateTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdPut: build.mutation<
      UpdateTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdPutApiResponse,
      UpdateTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_workflow/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseReqWorkflowUpdate
      })
    }),
    deleteTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdDelete: build.mutation<
      DeleteTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdDeleteApiResponse,
      DeleteTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_workflow/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdGet: build.query<
      GetTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdGetApiResponse,
      GetTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_req_workflow/${queryArg.id}`
      })
    }),
    getAlltrnPurchaseReqWorkflowEventGet: build.query<
      GetAlltrnPurchaseReqWorkflowEventGetApiResponse,
      GetAlltrnPurchaseReqWorkflowEventGetApiArg
    >({
      query: () => ({ url: `trn_purchase_req_workflow/event/` })
    }),
    createTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventPost: build.mutation<
      CreateTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventPostApiResponse,
      CreateTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_req_workflow/event/`,
        method: 'POST',
        body: queryArg.trnPurchaseReqWorkflowInsert
      })
    }),
    updateTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdPut:
      build.mutation<
        UpdateTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdPutApiResponse,
        UpdateTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_purchase_req_workflow/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnPurchaseReqWorkflowUpdate
        })
      }),
    deleteTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdDelete:
      build.mutation<
        DeleteTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdDeleteApiResponse,
        DeleteTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_purchase_req_workflow/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdGet: build.query<
      GetTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdGetApiResponse,
      GetTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_req_workflow/event/${queryArg.id}`
      })
    }),
    getAllTrnPurchaseWorkflowGet: build.query<
      GetAllTrnPurchaseWorkflowGetApiResponse,
      GetAllTrnPurchaseWorkflowGetApiArg
    >({
      query: () => ({ url: `/trn_purchase_workflow/` })
    }),
    createTrnPurchaseWorkflowTrnPurchaseWorkflowPost: build.mutation<
      CreateTrnPurchaseWorkflowTrnPurchaseWorkflowPostApiResponse,
      CreateTrnPurchaseWorkflowTrnPurchaseWorkflowPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_workflow/`,
        method: 'POST',
        body: queryArg.trnPurchaseWorkflowInsert
      })
    }),
    updateTrnPurchaseWorkflowTrnPurchaseWorkflowIdPut: build.mutation<
      UpdateTrnPurchaseWorkflowTrnPurchaseWorkflowIdPutApiResponse,
      UpdateTrnPurchaseWorkflowTrnPurchaseWorkflowIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_workflow/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseWorkflowUpdate
      })
    }),
    deleteTrnPurchaseWorkflowTrnPurchaseWorkflowIdDelete: build.mutation<
      DeleteTrnPurchaseWorkflowTrnPurchaseWorkflowIdDeleteApiResponse,
      DeleteTrnPurchaseWorkflowTrnPurchaseWorkflowIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_workflow/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnPurchaseWorkflowTrnPurchaseWorkflowIdGet: build.query<
      GetTrnPurchaseWorkflowTrnPurchaseWorkflowIdGetApiResponse,
      GetTrnPurchaseWorkflowTrnPurchaseWorkflowIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_purchase_workflow/${queryArg.id}`
      })
    }),
    getAlltrnPurchaseWorkflowEventGet: build.query<
      GetAlltrnPurchaseWorkflowEventGetApiResponse,
      GetAlltrnPurchaseWorkflowEventGetApiArg
    >({
      query: () => ({ url: `trn_purchase_workflow/event/` })
    }),
    createTrnPurchaseWorkflowtrnPurchaseWorkflowEventPost: build.mutation<
      CreateTrnPurchaseWorkflowtrnPurchaseWorkflowEventPostApiResponse,
      CreateTrnPurchaseWorkflowtrnPurchaseWorkflowEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_workflow/event/`,
        method: 'POST',
        body: queryArg.trnPurchaseWorkflowInsert
      })
    }),
    updateTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdPut: build.mutation<
      UpdateTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdPutApiResponse,
      UpdateTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_workflow/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnPurchaseWorkflowUpdate
      })
    }),
    deleteTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdDelete: build.mutation<
      DeleteTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdDeleteApiResponse,
      DeleteTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_workflow/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdGet: build.query<
      GetTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdGetApiResponse,
      GetTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_purchase_workflow/event/${queryArg.id}`
      })
    }),
    getAllTrnRoutineServiceCheckGet: build.query<
      GetAllTrnRoutineServiceCheckGetApiResponse,
      GetAllTrnRoutineServiceCheckGetApiArg
    >({
      query: () => ({ url: `/trn_routine_service_check/` })
    }),
    createTrnRoutineServiceCheckTrnRoutineServiceCheckPost: build.mutation<
      CreateTrnRoutineServiceCheckTrnRoutineServiceCheckPostApiResponse,
      CreateTrnRoutineServiceCheckTrnRoutineServiceCheckPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_routine_service_check/`,
        method: 'POST',
        body: queryArg.trnRoutineServiceCheckInsert
      })
    }),
    updateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPut: build.mutation<
      UpdateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPutApiResponse,
      UpdateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_routine_service_check/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnRoutineServiceCheckUpdate
      })
    }),
    deleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDelete: build.mutation<
      DeleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDeleteApiResponse,
      DeleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_routine_service_check/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnRoutineServiceCheckTrnRoutineServiceCheckIdGet: build.query<
      GetTrnRoutineServiceCheckTrnRoutineServiceCheckIdGetApiResponse,
      GetTrnRoutineServiceCheckTrnRoutineServiceCheckIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_routine_service_check/${queryArg.id}`
      })
    }),
    getAlltrnRoutineServiceCheckEventGet: build.query<
      GetAlltrnRoutineServiceCheckEventGetApiResponse,
      GetAlltrnRoutineServiceCheckEventGetApiArg
    >({
      query: () => ({ url: `trn_routine_service_check/event/` })
    }),
    createTrnRoutineServiceChecktrnRoutineServiceCheckEventPost: build.mutation<
      CreateTrnRoutineServiceChecktrnRoutineServiceCheckEventPostApiResponse,
      CreateTrnRoutineServiceChecktrnRoutineServiceCheckEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_routine_service_check/event/`,
        method: 'POST',
        body: queryArg.trnRoutineServiceCheckInsert
      })
    }),
    updateTrnRoutineServiceChecktrnRoutineServiceCheckEventIdPut:
      build.mutation<
        UpdateTrnRoutineServiceChecktrnRoutineServiceCheckEventIdPutApiResponse,
        UpdateTrnRoutineServiceChecktrnRoutineServiceCheckEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_routine_service_check/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnRoutineServiceCheckUpdate
        })
      }),
    deleteTrnRoutineServiceChecktrnRoutineServiceCheckEventIdDelete:
      build.mutation<
        DeleteTrnRoutineServiceChecktrnRoutineServiceCheckEventIdDeleteApiResponse,
        DeleteTrnRoutineServiceChecktrnRoutineServiceCheckEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_routine_service_check/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnRoutineServiceChecktrnRoutineServiceCheckEventIdGet: build.query<
      GetTrnRoutineServiceChecktrnRoutineServiceCheckEventIdGetApiResponse,
      GetTrnRoutineServiceChecktrnRoutineServiceCheckEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_routine_service_check/event/${queryArg.id}`
      })
    }),
    getAllTrnShiftFuelOpeningGet: build.query<
      GetAllTrnShiftFuelOpeningGetApiResponse,
      GetAllTrnShiftFuelOpeningGetApiArg
    >({
      query: () => ({ url: `/trn_shift_fuel_opening/` })
    }),
    createTrnShiftFuelOpeningTrnShiftFuelOpeningPost: build.mutation<
      CreateTrnShiftFuelOpeningTrnShiftFuelOpeningPostApiResponse,
      CreateTrnShiftFuelOpeningTrnShiftFuelOpeningPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_shift_fuel_opening/`,
        method: 'POST',
        body: queryArg.trnShiftFuelOpeningInsert
      })
    }),
    updateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPut: build.mutation<
      UpdateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPutApiResponse,
      UpdateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_shift_fuel_opening/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnShiftFuelOpeningUpdate
      })
    }),
    deleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDelete: build.mutation<
      DeleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDeleteApiResponse,
      DeleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_shift_fuel_opening/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnShiftFuelOpeningTrnShiftFuelOpeningIdGet: build.query<
      GetTrnShiftFuelOpeningTrnShiftFuelOpeningIdGetApiResponse,
      GetTrnShiftFuelOpeningTrnShiftFuelOpeningIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_shift_fuel_opening/${queryArg.id}`
      })
    }),
    getAlltrnShiftFuelOpeningEventGet: build.query<
      GetAlltrnShiftFuelOpeningEventGetApiResponse,
      GetAlltrnShiftFuelOpeningEventGetApiArg
    >({
      query: () => ({ url: `trn_shift_fuel_opening/event/` })
    }),
    createTrnShiftFuelOpeningtrnShiftFuelOpeningEventPost: build.mutation<
      CreateTrnShiftFuelOpeningtrnShiftFuelOpeningEventPostApiResponse,
      CreateTrnShiftFuelOpeningtrnShiftFuelOpeningEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_shift_fuel_opening/event/`,
        method: 'POST',
        body: queryArg.trnShiftFuelOpeningInsert
      })
    }),
    updateTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdPut: build.mutation<
      UpdateTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdPutApiResponse,
      UpdateTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_shift_fuel_opening/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnShiftFuelOpeningUpdate
      })
    }),
    deleteTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdDelete: build.mutation<
      DeleteTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdDeleteApiResponse,
      DeleteTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_shift_fuel_opening/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdGet: build.query<
      GetTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdGetApiResponse,
      GetTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_shift_fuel_opening/event/${queryArg.id}`
      })
    }),
    getAllTrnTicketGet: build.query<
      GetAllTrnTicketGetApiResponse,
      GetAllTrnTicketGetApiArg
    >({
      query: () => ({ url: `/trn_ticket/` })
    }),
    createTrnTicketTrnTicketPost: build.mutation<
      CreateTrnTicketTrnTicketPostApiResponse,
      CreateTrnTicketTrnTicketPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket/`,
        method: 'POST',
        body: queryArg.trnTicketInsert
      })
    }),
    updateTrnTicketTrnTicketIdPut: build.mutation<
      UpdateTrnTicketTrnTicketIdPutApiResponse,
      UpdateTrnTicketTrnTicketIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnTicketUpdate
      })
    }),
    deleteTrnTicketTrnTicketIdDelete: build.mutation<
      DeleteTrnTicketTrnTicketIdDeleteApiResponse,
      DeleteTrnTicketTrnTicketIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnTicketTrnTicketIdGet: build.query<
      GetTrnTicketTrnTicketIdGetApiResponse,
      GetTrnTicketTrnTicketIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_ticket/${queryArg.id}` })
    }),
    getAlltrnTicketEventGet: build.query<
      GetAlltrnTicketEventGetApiResponse,
      GetAlltrnTicketEventGetApiArg
    >({
      query: () => ({ url: `trn_ticket/event/` })
    }),
    createTrnTickettrnTicketEventPost: build.mutation<
      CreateTrnTickettrnTicketEventPostApiResponse,
      CreateTrnTickettrnTicketEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket/event/`,
        method: 'POST',
        body: queryArg.trnTicketInsert
      })
    }),
    updateTrnTickettrnTicketEventIdPut: build.mutation<
      UpdateTrnTickettrnTicketEventIdPutApiResponse,
      UpdateTrnTickettrnTicketEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnTicketUpdate
      })
    }),
    deleteTrnTickettrnTicketEventIdDelete: build.mutation<
      DeleteTrnTickettrnTicketEventIdDeleteApiResponse,
      DeleteTrnTickettrnTicketEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnTickettrnTicketEventIdGet: build.query<
      GetTrnTickettrnTicketEventIdGetApiResponse,
      GetTrnTickettrnTicketEventIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `trn_ticket/event/${queryArg.id}` })
    }),
    getAllTrnTicketAttributeGet: build.query<
      GetAllTrnTicketAttributeGetApiResponse,
      GetAllTrnTicketAttributeGetApiArg
    >({
      query: () => ({ url: `/trn_ticket_attribute/` })
    }),
    createTrnTicketAttributeTrnTicketAttributePost: build.mutation<
      CreateTrnTicketAttributeTrnTicketAttributePostApiResponse,
      CreateTrnTicketAttributeTrnTicketAttributePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_attribute/`,
        method: 'POST',
        body: queryArg.trnTicketAttributeInsert
      })
    }),
    updateTrnTicketAttributeTrnTicketAttributeIdPut: build.mutation<
      UpdateTrnTicketAttributeTrnTicketAttributeIdPutApiResponse,
      UpdateTrnTicketAttributeTrnTicketAttributeIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_attribute/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnTicketAttributeUpdate
      })
    }),
    deleteTrnTicketAttributeTrnTicketAttributeIdDelete: build.mutation<
      DeleteTrnTicketAttributeTrnTicketAttributeIdDeleteApiResponse,
      DeleteTrnTicketAttributeTrnTicketAttributeIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_attribute/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnTicketAttributeTrnTicketAttributeIdGet: build.query<
      GetTrnTicketAttributeTrnTicketAttributeIdGetApiResponse,
      GetTrnTicketAttributeTrnTicketAttributeIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_attribute/${queryArg.id}`
      })
    }),
    getAlltrnTicketAttributeEventGet: build.query<
      GetAlltrnTicketAttributeEventGetApiResponse,
      GetAlltrnTicketAttributeEventGetApiArg
    >({
      query: () => ({ url: `trn_ticket_attribute/event/` })
    }),
    createTrnTicketAttributetrnTicketAttributeEventPost: build.mutation<
      CreateTrnTicketAttributetrnTicketAttributeEventPostApiResponse,
      CreateTrnTicketAttributetrnTicketAttributeEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket_attribute/event/`,
        method: 'POST',
        body: queryArg.trnTicketAttributeInsert
      })
    }),
    updateTrnTicketAttributetrnTicketAttributeEventIdPut: build.mutation<
      UpdateTrnTicketAttributetrnTicketAttributeEventIdPutApiResponse,
      UpdateTrnTicketAttributetrnTicketAttributeEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket_attribute/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnTicketAttributeUpdate
      })
    }),
    deleteTrnTicketAttributetrnTicketAttributeEventIdDelete: build.mutation<
      DeleteTrnTicketAttributetrnTicketAttributeEventIdDeleteApiResponse,
      DeleteTrnTicketAttributetrnTicketAttributeEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket_attribute/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnTicketAttributetrnTicketAttributeEventIdGet: build.query<
      GetTrnTicketAttributetrnTicketAttributeEventIdGetApiResponse,
      GetTrnTicketAttributetrnTicketAttributeEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket_attribute/event/${queryArg.id}`
      })
    }),
    getAllTrnTicketDocumentsGet: build.query<
      GetAllTrnTicketDocumentsGetApiResponse,
      GetAllTrnTicketDocumentsGetApiArg
    >({
      query: () => ({ url: `/trn_ticket_documents/` })
    }),
    createTrnTicketDocumentsTrnTicketDocumentsPost: build.mutation<
      CreateTrnTicketDocumentsTrnTicketDocumentsPostApiResponse,
      CreateTrnTicketDocumentsTrnTicketDocumentsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_documents/`,
        method: 'POST',
        body: queryArg.trnTicketDocumentsInsert
      })
    }),
    updateTrnTicketDocumentsTrnTicketDocumentsIdPut: build.mutation<
      UpdateTrnTicketDocumentsTrnTicketDocumentsIdPutApiResponse,
      UpdateTrnTicketDocumentsTrnTicketDocumentsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_documents/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnTicketDocumentsUpdate
      })
    }),
    deleteTrnTicketDocumentsTrnTicketDocumentsIdDelete: build.mutation<
      DeleteTrnTicketDocumentsTrnTicketDocumentsIdDeleteApiResponse,
      DeleteTrnTicketDocumentsTrnTicketDocumentsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_documents/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnTicketDocumentsTrnTicketDocumentsIdGet: build.query<
      GetTrnTicketDocumentsTrnTicketDocumentsIdGetApiResponse,
      GetTrnTicketDocumentsTrnTicketDocumentsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_documents/${queryArg.id}`
      })
    }),
    getAlltrnTicketDocumentsEventGet: build.query<
      GetAlltrnTicketDocumentsEventGetApiResponse,
      GetAlltrnTicketDocumentsEventGetApiArg
    >({
      query: () => ({ url: `trn_ticket_documents/event/` })
    }),
    createTrnTicketDocumentstrnTicketDocumentsEventPost: build.mutation<
      CreateTrnTicketDocumentstrnTicketDocumentsEventPostApiResponse,
      CreateTrnTicketDocumentstrnTicketDocumentsEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket_documents/event/`,
        method: 'POST',
        body: queryArg.trnTicketDocumentsInsert
      })
    }),
    updateTrnTicketDocumentstrnTicketDocumentsEventIdPut: build.mutation<
      UpdateTrnTicketDocumentstrnTicketDocumentsEventIdPutApiResponse,
      UpdateTrnTicketDocumentstrnTicketDocumentsEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket_documents/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnTicketDocumentsUpdate
      })
    }),
    deleteTrnTicketDocumentstrnTicketDocumentsEventIdDelete: build.mutation<
      DeleteTrnTicketDocumentstrnTicketDocumentsEventIdDeleteApiResponse,
      DeleteTrnTicketDocumentstrnTicketDocumentsEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket_documents/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnTicketDocumentstrnTicketDocumentsEventIdGet: build.query<
      GetTrnTicketDocumentstrnTicketDocumentsEventIdGetApiResponse,
      GetTrnTicketDocumentstrnTicketDocumentsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket_documents/event/${queryArg.id}`
      })
    }),
    getAllTrnTicketWorkflowGet: build.query<
      GetAllTrnTicketWorkflowGetApiResponse,
      GetAllTrnTicketWorkflowGetApiArg
    >({
      query: () => ({ url: `/trn_ticket_workflow/` })
    }),
    createTrnTicketWorkflowTrnTicketWorkflowPost: build.mutation<
      CreateTrnTicketWorkflowTrnTicketWorkflowPostApiResponse,
      CreateTrnTicketWorkflowTrnTicketWorkflowPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_workflow/`,
        method: 'POST',
        body: queryArg.trnTicketWorkflowInsert
      })
    }),
    updateTrnTicketWorkflowTrnTicketWorkflowIdPut: build.mutation<
      UpdateTrnTicketWorkflowTrnTicketWorkflowIdPutApiResponse,
      UpdateTrnTicketWorkflowTrnTicketWorkflowIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_workflow/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnTicketWorkflowUpdate
      })
    }),
    deleteTrnTicketWorkflowTrnTicketWorkflowIdDelete: build.mutation<
      DeleteTrnTicketWorkflowTrnTicketWorkflowIdDeleteApiResponse,
      DeleteTrnTicketWorkflowTrnTicketWorkflowIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_ticket_workflow/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnTicketWorkflowTrnTicketWorkflowIdGet: build.query<
      GetTrnTicketWorkflowTrnTicketWorkflowIdGetApiResponse,
      GetTrnTicketWorkflowTrnTicketWorkflowIdGetApiArg
    >({
      query: (queryArg: any) => ({ url: `/trn_ticket_workflow/${queryArg.id}` })
    }),
    getAlltrnTicketWorkflowEventGet: build.query<
      GetAlltrnTicketWorkflowEventGetApiResponse,
      GetAlltrnTicketWorkflowEventGetApiArg
    >({
      query: () => ({ url: `trn_ticket_workflow/event/` })
    }),
    createTrnTicketWorkflowtrnTicketWorkflowEventPost: build.mutation<
      CreateTrnTicketWorkflowtrnTicketWorkflowEventPostApiResponse,
      CreateTrnTicketWorkflowtrnTicketWorkflowEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket_workflow/event/`,
        method: 'POST',
        body: queryArg.trnTicketWorkflowInsert
      })
    }),
    updateTrnTicketWorkflowtrnTicketWorkflowEventIdPut: build.mutation<
      UpdateTrnTicketWorkflowtrnTicketWorkflowEventIdPutApiResponse,
      UpdateTrnTicketWorkflowtrnTicketWorkflowEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket_workflow/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnTicketWorkflowUpdate
      })
    }),
    deleteTrnTicketWorkflowtrnTicketWorkflowEventIdDelete: build.mutation<
      DeleteTrnTicketWorkflowtrnTicketWorkflowEventIdDeleteApiResponse,
      DeleteTrnTicketWorkflowtrnTicketWorkflowEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket_workflow/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnTicketWorkflowtrnTicketWorkflowEventIdGet: build.query<
      GetTrnTicketWorkflowtrnTicketWorkflowEventIdGetApiResponse,
      GetTrnTicketWorkflowtrnTicketWorkflowEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_ticket_workflow/event/${queryArg.id}`
      })
    }),
    getAllTrnWarehouseIndentGet: build.query<
      GetAllTrnWarehouseIndentGetApiResponse,
      GetAllTrnWarehouseIndentGetApiArg
    >({
      query: () => ({ url: `/trn_warehouse_indent/` })
    }),
    createTrnWarehouseIndentTrnWarehouseIndentPost: build.mutation<
      CreateTrnWarehouseIndentTrnWarehouseIndentPostApiResponse,
      CreateTrnWarehouseIndentTrnWarehouseIndentPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent/`,
        method: 'POST',
        body: queryArg.trnWarehouseIndentInsert
      })
    }),
    updateTrnWarehouseIndentTrnWarehouseIndentIdPut: build.mutation<
      UpdateTrnWarehouseIndentTrnWarehouseIndentIdPutApiResponse,
      UpdateTrnWarehouseIndentTrnWarehouseIndentIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnWarehouseIndentUpdate
      })
    }),
    deleteTrnWarehouseIndentTrnWarehouseIndentIdDelete: build.mutation<
      DeleteTrnWarehouseIndentTrnWarehouseIndentIdDeleteApiResponse,
      DeleteTrnWarehouseIndentTrnWarehouseIndentIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnWarehouseIndentTrnWarehouseIndentIdGet: build.query<
      GetTrnWarehouseIndentTrnWarehouseIndentIdGetApiResponse,
      GetTrnWarehouseIndentTrnWarehouseIndentIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent/${queryArg.id}`
      })
    }),
    getAlltrnWarehouseIndentEventGet: build.query<
      GetAlltrnWarehouseIndentEventGetApiResponse,
      GetAlltrnWarehouseIndentEventGetApiArg
    >({
      query: () => ({ url: `trn_warehouse_indent/event/` })
    }),
    createTrnWarehouseIndenttrnWarehouseIndentEventPost: build.mutation<
      CreateTrnWarehouseIndenttrnWarehouseIndentEventPostApiResponse,
      CreateTrnWarehouseIndenttrnWarehouseIndentEventPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_warehouse_indent/event/`,
        method: 'POST',
        body: queryArg.trnWarehouseIndentInsert
      })
    }),
    updateTrnWarehouseIndenttrnWarehouseIndentEventIdPut: build.mutation<
      UpdateTrnWarehouseIndenttrnWarehouseIndentEventIdPutApiResponse,
      UpdateTrnWarehouseIndenttrnWarehouseIndentEventIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_warehouse_indent/event/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnWarehouseIndentUpdate
      })
    }),
    deleteTrnWarehouseIndenttrnWarehouseIndentEventIdDelete: build.mutation<
      DeleteTrnWarehouseIndenttrnWarehouseIndentEventIdDeleteApiResponse,
      DeleteTrnWarehouseIndenttrnWarehouseIndentEventIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_warehouse_indent/event/${queryArg.id}`,
        method: 'DELETE'
      })
    }),
    getTrnWarehouseIndenttrnWarehouseIndentEventIdGet: build.query<
      GetTrnWarehouseIndenttrnWarehouseIndentEventIdGetApiResponse,
      GetTrnWarehouseIndenttrnWarehouseIndentEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_warehouse_indent/event/${queryArg.id}`
      })
    }),
    getAllTrnWarehouseIndentAttributeGet: build.query<
      GetAllTrnWarehouseIndentAttributeGetApiResponse,
      GetAllTrnWarehouseIndentAttributeGetApiArg
    >({
      query: () => ({ url: `/trn_warehouse_indent_attribute/` })
    }),
    createTrnWarehouseIndentAttributeTrnWarehouseIndentAttributePost:
      build.mutation<
        CreateTrnWarehouseIndentAttributeTrnWarehouseIndentAttributePostApiResponse,
        CreateTrnWarehouseIndentAttributeTrnWarehouseIndentAttributePostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_warehouse_indent_attribute/`,
          method: 'POST',
          body: queryArg.trnWarehouseIndentAttributeInsert
        })
      }),
    updateTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdPut:
      build.mutation<
        UpdateTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdPutApiResponse,
        UpdateTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_warehouse_indent_attribute/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnWarehouseIndentAttributeUpdate
        })
      }),
    deleteTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdDelete:
      build.mutation<
        DeleteTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdDeleteApiResponse,
        DeleteTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_warehouse_indent_attribute/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdGet: build.query<
      GetTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdGetApiResponse,
      GetTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent_attribute/${queryArg.id}`
      })
    }),
    getAlltrnWarehouseIndentAttributeEventGet: build.query<
      GetAlltrnWarehouseIndentAttributeEventGetApiResponse,
      GetAlltrnWarehouseIndentAttributeEventGetApiArg
    >({
      query: () => ({ url: `trn_warehouse_indent_attribute/event/` })
    }),
    createTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventPost:
      build.mutation<
        CreateTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventPostApiResponse,
        CreateTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_warehouse_indent_attribute/event/`,
          method: 'POST',
          body: queryArg.trnWarehouseIndentAttributeInsert
        })
      }),
    updateTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdPut:
      build.mutation<
        UpdateTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdPutApiResponse,
        UpdateTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_warehouse_indent_attribute/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnWarehouseIndentAttributeUpdate
        })
      }),
    deleteTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdDelete:
      build.mutation<
        DeleteTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdDeleteApiResponse,
        DeleteTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_warehouse_indent_attribute/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdGet:
      build.query<
        GetTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdGetApiResponse,
        GetTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdGetApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_warehouse_indent_attribute/event/${queryArg.id}`
        })
      }),
    getAllTrnWarehouseIndentItemsGet: build.query<
      GetAllTrnWarehouseIndentItemsGetApiResponse,
      GetAllTrnWarehouseIndentItemsGetApiArg
    >({
      query: () => ({ url: `/trn_warehouse_indent_items/` })
    }),
    createTrnWarehouseIndentItemsTrnWarehouseIndentItemsPost: build.mutation<
      CreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsPostApiResponse,
      CreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent_items/`,
        method: 'POST',
        body: queryArg.trnWarehouseIndentItemsInsert
      })
    }),
    updateTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdPut: build.mutation<
      UpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdPutApiResponse,
      UpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.trnWarehouseIndentItemsUpdate
      })
    }),
    deleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdDelete:
      build.mutation<
        DeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdDeleteApiResponse,
        DeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_warehouse_indent_items/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdGet: build.query<
      GetTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdGetApiResponse,
      GetTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent_items/${queryArg.id}`
      })
    }),
    getAlltrnWarehouseIndentItemsEventGet: build.query<
      GetAlltrnWarehouseIndentItemsEventGetApiResponse,
      GetAlltrnWarehouseIndentItemsEventGetApiArg
    >({
      query: () => ({ url: `trn_warehouse_indent_items/event/` })
    }),
    createTrnWarehouseIndentItemstrnWarehouseIndentItemsEventPost:
      build.mutation<
        CreateTrnWarehouseIndentItemstrnWarehouseIndentItemsEventPostApiResponse,
        CreateTrnWarehouseIndentItemstrnWarehouseIndentItemsEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_warehouse_indent_items/event/`,
          method: 'POST',
          body: queryArg.trnWarehouseIndentItemsInsert
        })
      }),
    updateTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdPut:
      build.mutation<
        UpdateTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdPutApiResponse,
        UpdateTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_warehouse_indent_items/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnWarehouseIndentItemsUpdate
        })
      }),
    deleteTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdDelete:
      build.mutation<
        DeleteTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdDeleteApiResponse,
        DeleteTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_warehouse_indent_items/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdGet: build.query<
      GetTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdGetApiResponse,
      GetTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `trn_warehouse_indent_items/event/${queryArg.id}`
      })
    }),
    getAllTrnWarehouseIndentWorkflowGet: build.query<
      GetAllTrnWarehouseIndentWorkflowGetApiResponse,
      GetAllTrnWarehouseIndentWorkflowGetApiArg
    >({
      query: () => ({ url: `/trn_warehouse_indent_workflow/` })
    }),
    createTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowPost:
      build.mutation<
        CreateTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowPostApiResponse,
        CreateTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_warehouse_indent_workflow/`,
          method: 'POST',
          body: queryArg.trnWarehouseIndentWorkflowInsert
        })
      }),
    updateTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdPut:
      build.mutation<
        UpdateTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdPutApiResponse,
        UpdateTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_warehouse_indent_workflow/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnWarehouseIndentWorkflowUpdate
        })
      }),
    deleteTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdDelete:
      build.mutation<
        DeleteTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdDeleteApiResponse,
        DeleteTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/trn_warehouse_indent_workflow/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdGet: build.query<
      GetTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdGetApiResponse,
      GetTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/trn_warehouse_indent_workflow/${queryArg.id}`
      })
    }),
    getAlltrnWarehouseIndentWorkflowEventGet: build.query<
      GetAlltrnWarehouseIndentWorkflowEventGetApiResponse,
      GetAlltrnWarehouseIndentWorkflowEventGetApiArg
    >({
      query: () => ({ url: `trn_warehouse_indent_workflow/event/` })
    }),
    createTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventPost:
      build.mutation<
        CreateTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventPostApiResponse,
        CreateTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_warehouse_indent_workflow/event/`,
          method: 'POST',
          body: queryArg.trnWarehouseIndentWorkflowInsert
        })
      }),
    updateTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdPut:
      build.mutation<
        UpdateTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdPutApiResponse,
        UpdateTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_warehouse_indent_workflow/event/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.trnWarehouseIndentWorkflowUpdate
        })
      }),
    deleteTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdDelete:
      build.mutation<
        DeleteTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdDeleteApiResponse,
        DeleteTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_warehouse_indent_workflow/event/${queryArg.id}`,
          method: 'DELETE'
        })
      }),
    getTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdGet:
      build.query<
        GetTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdGetApiResponse,
        GetTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdGetApiArg
      >({
        query: (queryArg: any) => ({
          url: `trn_warehouse_indent_workflow/event/${queryArg.id}`
        })
      })
  }),
  overrideExisting: false
});
export { injectedRtkApi as assetApi };
export type GetAllAssetMatrixGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetMatrixGetApiArg = void;
export type CreateAssetMatrixAssetMatrixPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixAssetMatrixPostApiArg = {
  assetMatrixInsert: AssetMatrixInsert;
};
export type UpdateAssetMatrixAssetMatrixIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixAssetMatrixIdPutApiArg = {
  id: number;
  assetMatrixUpdate: AssetMatrixUpdate;
};
export type DeleteAssetMatrixAssetMatrixIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixAssetMatrixIdDeleteApiArg = {
  id: number;
};
export type GetAssetMatrixAssetMatrixIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixAssetMatrixIdGetApiArg = {
  id: number;
};
export type GetAllassetMatrixEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllassetMatrixEventGetApiArg = void;
export type CreateAssetMatrixassetMatrixEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixassetMatrixEventPostApiArg = {
  assetMatrixInsert: AssetMatrixInsert;
};
export type UpdateAssetMatrixassetMatrixEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixassetMatrixEventIdPutApiArg = {
  id: number;
  assetMatrixUpdate: AssetMatrixUpdate;
};
export type DeleteAssetMatrixassetMatrixEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixassetMatrixEventIdDeleteApiArg = {
  id: number;
};
export type GetAssetMatrixassetMatrixEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixassetMatrixEventIdGetApiArg = {
  id: number;
};
export type GetAllAssetMatrixDocumentGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetMatrixDocumentGetApiArg = void;
export type CreateAssetMatrixDocumentAssetMatrixDocumentPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixDocumentAssetMatrixDocumentPostApiArg = {
  assetMatrixDocumentInsert: AssetMatrixDocumentInsert;
};
export type UpdateAssetMatrixDocumentAssetMatrixDocumentIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixDocumentAssetMatrixDocumentIdPutApiArg = {
  id: number;
  assetMatrixDocumentUpdate: AssetMatrixDocumentUpdate;
};
export type DeleteAssetMatrixDocumentAssetMatrixDocumentIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixDocumentAssetMatrixDocumentIdDeleteApiArg = {
  id: number;
};
export type GetAssetMatrixDocumentAssetMatrixDocumentIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixDocumentAssetMatrixDocumentIdGetApiArg = {
  id: number;
};
export type GetAllassetMatrixDocumentEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllassetMatrixDocumentEventGetApiArg = void;
export type CreateAssetMatrixDocumentassetMatrixDocumentEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixDocumentassetMatrixDocumentEventPostApiArg = {
  assetMatrixDocumentInsert: AssetMatrixDocumentInsert;
};
export type UpdateAssetMatrixDocumentassetMatrixDocumentEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixDocumentassetMatrixDocumentEventIdPutApiArg = {
  id: number;
  assetMatrixDocumentUpdate: AssetMatrixDocumentUpdate;
};
export type DeleteAssetMatrixDocumentassetMatrixDocumentEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixDocumentassetMatrixDocumentEventIdDeleteApiArg = {
  id: number;
};
export type GetAssetMatrixDocumentassetMatrixDocumentEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixDocumentassetMatrixDocumentEventIdGetApiArg = {
  id: number;
};
export type GetAllAssetMatrixSectionGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetMatrixSectionGetApiArg = void;
export type CreateAssetMatrixSectionAssetMatrixSectionPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixSectionAssetMatrixSectionPostApiArg = {
  assetMatrixSectionInsert: AssetMatrixSectionInsert;
};
export type UpdateAssetMatrixSectionAssetMatrixSectionIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixSectionAssetMatrixSectionIdPutApiArg = {
  id: number;
  assetMatrixSectionUpdate: AssetMatrixSectionUpdate;
};
export type DeleteAssetMatrixSectionAssetMatrixSectionIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixSectionAssetMatrixSectionIdDeleteApiArg = {
  id: number;
};
export type GetAssetMatrixSectionAssetMatrixSectionIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixSectionAssetMatrixSectionIdGetApiArg = {
  id: number;
};
export type GetAllassetMatrixSectionEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllassetMatrixSectionEventGetApiArg = void;
export type CreateAssetMatrixSectionassetMatrixSectionEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixSectionassetMatrixSectionEventPostApiArg = {
  assetMatrixSectionInsert: AssetMatrixSectionInsert;
};
export type UpdateAssetMatrixSectionassetMatrixSectionEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixSectionassetMatrixSectionEventIdPutApiArg = {
  id: number;
  assetMatrixSectionUpdate: AssetMatrixSectionUpdate;
};
export type DeleteAssetMatrixSectionassetMatrixSectionEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixSectionassetMatrixSectionEventIdDeleteApiArg = {
  id: number;
};
export type GetAssetMatrixSectionassetMatrixSectionEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixSectionassetMatrixSectionEventIdGetApiArg = {
  id: number;
};
export type GetAllAssetMatrixSubSectionGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetMatrixSubSectionGetApiArg = void;
export type CreateAssetMatrixSubSectionAssetMatrixSubSectionPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixSubSectionAssetMatrixSubSectionPostApiArg = {
  assetMatrixSubSectionInsert: AssetMatrixSubSectionInsert;
};
export type UpdateAssetMatrixSubSectionAssetMatrixSubSectionIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixSubSectionAssetMatrixSubSectionIdPutApiArg = {
  id: number;
  assetMatrixSubSectionUpdate: AssetMatrixSubSectionUpdate;
};
export type DeleteAssetMatrixSubSectionAssetMatrixSubSectionIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixSubSectionAssetMatrixSubSectionIdDeleteApiArg = {
  id: number;
};
export type GetAssetMatrixSubSectionAssetMatrixSubSectionIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixSubSectionAssetMatrixSubSectionIdGetApiArg = {
  id: number;
};
export type GetAllassetMatrixSubSectionEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllassetMatrixSubSectionEventGetApiArg = void;
export type CreateAssetMatrixSubSectionassetMatrixSubSectionEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetMatrixSubSectionassetMatrixSubSectionEventPostApiArg = {
  assetMatrixSubSectionInsert: AssetMatrixSubSectionInsert;
};
export type UpdateAssetMatrixSubSectionassetMatrixSubSectionEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetMatrixSubSectionassetMatrixSubSectionEventIdPutApiArg = {
  id: number;
  assetMatrixSubSectionUpdate: AssetMatrixSubSectionUpdate;
};
export type DeleteAssetMatrixSubSectionassetMatrixSubSectionEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetMatrixSubSectionassetMatrixSubSectionEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetAssetMatrixSubSectionassetMatrixSubSectionEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetMatrixSubSectionassetMatrixSubSectionEventIdGetApiArg = {
  id: number;
};
export type GetAllAssetServiceCheckListGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetServiceCheckListGetApiArg = void;
export type CreateAssetServiceCheckListAssetServiceCheckListPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetServiceCheckListAssetServiceCheckListPostApiArg = {
  assetServiceCheckListInsert: AssetServiceCheckListInsert;
};
export type UpdateAssetServiceCheckListAssetServiceCheckListIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetServiceCheckListAssetServiceCheckListIdPutApiArg = {
  id: number;
  assetServiceCheckListUpdate: AssetServiceCheckListUpdate;
};
export type DeleteAssetServiceCheckListAssetServiceCheckListIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetServiceCheckListAssetServiceCheckListIdDeleteApiArg = {
  id: number;
};
export type GetAssetServiceCheckListAssetServiceCheckListIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetServiceCheckListAssetServiceCheckListIdGetApiArg = {
  id: number;
};
export type GetAllassetServiceCheckListEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllassetServiceCheckListEventGetApiArg = void;
export type CreateAssetServiceCheckListassetServiceCheckListEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetServiceCheckListassetServiceCheckListEventPostApiArg = {
  assetServiceCheckListInsert: AssetServiceCheckListInsert;
};
export type UpdateAssetServiceCheckListassetServiceCheckListEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetServiceCheckListassetServiceCheckListEventIdPutApiArg = {
  id: number;
  assetServiceCheckListUpdate: AssetServiceCheckListUpdate;
};
export type DeleteAssetServiceCheckListassetServiceCheckListEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetServiceCheckListassetServiceCheckListEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetAssetServiceCheckListassetServiceCheckListEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetServiceCheckListassetServiceCheckListEventIdGetApiArg = {
  id: number;
};
export type GetAllAssetServiceCheckListItemsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllAssetServiceCheckListItemsGetApiArg = void;
export type CreateAssetServiceCheckListItemsAssetServiceCheckListItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetServiceCheckListItemsAssetServiceCheckListItemsPostApiArg =
  {
    assetServiceCheckListItemsInsert: AssetServiceCheckListItemsInsert;
  };
export type UpdateAssetServiceCheckListItemsAssetServiceCheckListItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetServiceCheckListItemsAssetServiceCheckListItemsIdPutApiArg =
  {
    id: number;
    assetServiceCheckListItemsUpdate: AssetServiceCheckListItemsUpdate;
  };
export type DeleteAssetServiceCheckListItemsAssetServiceCheckListItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetServiceCheckListItemsAssetServiceCheckListItemsIdDeleteApiArg =
  {
    id: number;
  };
export type GetAssetServiceCheckListItemsAssetServiceCheckListItemsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetServiceCheckListItemsAssetServiceCheckListItemsIdGetApiArg =
  {
    id: number;
  };
export type GetAllassetServiceCheckListItemsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllassetServiceCheckListItemsEventGetApiArg = void;
export type CreateAssetServiceCheckListItemsassetServiceCheckListItemsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAssetServiceCheckListItemsassetServiceCheckListItemsEventPostApiArg =
  {
    assetServiceCheckListItemsInsert: AssetServiceCheckListItemsInsert;
  };
export type UpdateAssetServiceCheckListItemsassetServiceCheckListItemsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAssetServiceCheckListItemsassetServiceCheckListItemsEventIdPutApiArg =
  {
    id: number;
    assetServiceCheckListItemsUpdate: AssetServiceCheckListItemsUpdate;
  };
export type DeleteAssetServiceCheckListItemsassetServiceCheckListItemsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAssetServiceCheckListItemsassetServiceCheckListItemsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetAssetServiceCheckListItemsassetServiceCheckListItemsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAssetServiceCheckListItemsassetServiceCheckListItemsEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllFiscalyearGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllFiscalyearGetApiArg = void;
export type CreateFiscalyearFiscalyearPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateFiscalyearFiscalyearPostApiArg = {
  fiscalyearInsert: FiscalyearInsert;
};
export type UpdateFiscalyearFiscalyearIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateFiscalyearFiscalyearIdPutApiArg = {
  id: number;
  fiscalyearUpdate: FiscalyearUpdate;
};
export type DeleteFiscalyearFiscalyearIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteFiscalyearFiscalyearIdDeleteApiArg = {
  id: number;
};
export type GetFiscalyearFiscalyearIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetFiscalyearFiscalyearIdGetApiArg = {
  id: number;
};
export type GetAllfiscalyearEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllfiscalyearEventGetApiArg = void;
export type CreateFiscalyearfiscalyearEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateFiscalyearfiscalyearEventPostApiArg = {
  fiscalyearInsert: FiscalyearInsert;
};
export type UpdateFiscalyearfiscalyearEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateFiscalyearfiscalyearEventIdPutApiArg = {
  id: number;
  fiscalyearUpdate: FiscalyearUpdate;
};
export type DeleteFiscalyearfiscalyearEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteFiscalyearfiscalyearEventIdDeleteApiArg = {
  id: number;
};
export type GetFiscalyearfiscalyearEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetFiscalyearfiscalyearEventIdGetApiArg = {
  id: number;
};
export type GetAllGrpWarehouseGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllGrpWarehouseGetApiArg = void;
export type CreateGrpWarehouseGrpWarehousePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateGrpWarehouseGrpWarehousePostApiArg = {
  grpWarehouseInsert: GrpWarehouseInsert;
};
export type UpdateGrpWarehouseGrpWarehouseIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateGrpWarehouseGrpWarehouseIdPutApiArg = {
  id: number;
  grpWarehouseUpdate: GrpWarehouseUpdate;
};
export type DeleteGrpWarehouseGrpWarehouseIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteGrpWarehouseGrpWarehouseIdDeleteApiArg = {
  id: number;
};
export type GetGrpWarehouseGrpWarehouseIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetGrpWarehouseGrpWarehouseIdGetApiArg = {
  id: number;
};
export type GetAllgrpWarehouseEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllgrpWarehouseEventGetApiArg = void;
export type CreateGrpWarehousegrpWarehouseEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateGrpWarehousegrpWarehouseEventPostApiArg = {
  grpWarehouseInsert: GrpWarehouseInsert;
};
export type UpdateGrpWarehousegrpWarehouseEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateGrpWarehousegrpWarehouseEventIdPutApiArg = {
  id: number;
  grpWarehouseUpdate: GrpWarehouseUpdate;
};
export type DeleteGrpWarehousegrpWarehouseEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteGrpWarehousegrpWarehouseEventIdDeleteApiArg = {
  id: number;
};
export type GetGrpWarehousegrpWarehouseEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetGrpWarehousegrpWarehouseEventIdGetApiArg = {
  id: number;
};
export type GetAllInvItemConfigurationGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllInvItemConfigurationGetApiArg = void;
export type CreateInvItemConfigurationInvItemConfigurationPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateInvItemConfigurationInvItemConfigurationPostApiArg = {
  invItemConfigurationInsert: InvItemConfigurationInsert;
};
export type UpdateInvItemConfigurationInvItemConfigurationIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateInvItemConfigurationInvItemConfigurationIdPutApiArg = {
  id: number;
  invItemConfigurationUpdate: InvItemConfigurationUpdate;
};
export type DeleteInvItemConfigurationInvItemConfigurationIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteInvItemConfigurationInvItemConfigurationIdDeleteApiArg = {
  id: number;
};
export type GetInvItemConfigurationInvItemConfigurationIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetInvItemConfigurationInvItemConfigurationIdGetApiArg = {
  id: number;
};
export type GetAllinvItemConfigurationEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllinvItemConfigurationEventGetApiArg = void;
export type CreateInvItemConfigurationinvItemConfigurationEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateInvItemConfigurationinvItemConfigurationEventPostApiArg = {
  invItemConfigurationInsert: InvItemConfigurationInsert;
};
export type UpdateInvItemConfigurationinvItemConfigurationEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateInvItemConfigurationinvItemConfigurationEventIdPutApiArg = {
  id: number;
  invItemConfigurationUpdate: InvItemConfigurationUpdate;
};
export type DeleteInvItemConfigurationinvItemConfigurationEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteInvItemConfigurationinvItemConfigurationEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetInvItemConfigurationinvItemConfigurationEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetInvItemConfigurationinvItemConfigurationEventIdGetApiArg = {
  id: number;
};
export type GetAllItemOpeningBalanceGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllItemOpeningBalanceGetApiArg = void;
export type CreateItemOpeningBalanceItemOpeningBalancePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateItemOpeningBalanceItemOpeningBalancePostApiArg = {
  itemOpeningBalanceInsert: ItemOpeningBalanceInsert;
};
export type UpdateItemOpeningBalanceItemOpeningBalanceIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateItemOpeningBalanceItemOpeningBalanceIdPutApiArg = {
  id: number;
  itemOpeningBalanceUpdate: ItemOpeningBalanceUpdate;
};
export type DeleteItemOpeningBalanceItemOpeningBalanceIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteItemOpeningBalanceItemOpeningBalanceIdDeleteApiArg = {
  id: number;
};
export type GetItemOpeningBalanceItemOpeningBalanceIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetItemOpeningBalanceItemOpeningBalanceIdGetApiArg = {
  id: number;
};
export type GetAllitemOpeningBalanceEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllitemOpeningBalanceEventGetApiArg = void;
export type CreateItemOpeningBalanceitemOpeningBalanceEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateItemOpeningBalanceitemOpeningBalanceEventPostApiArg = {
  itemOpeningBalanceInsert: ItemOpeningBalanceInsert;
};
export type UpdateItemOpeningBalanceitemOpeningBalanceEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateItemOpeningBalanceitemOpeningBalanceEventIdPutApiArg = {
  id: number;
  itemOpeningBalanceUpdate: ItemOpeningBalanceUpdate;
};
export type DeleteItemOpeningBalanceitemOpeningBalanceEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteItemOpeningBalanceitemOpeningBalanceEventIdDeleteApiArg = {
  id: number;
};
export type GetItemOpeningBalanceitemOpeningBalanceEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetItemOpeningBalanceitemOpeningBalanceEventIdGetApiArg = {
  id: number;
};
export type GetAllPoplistsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllPoplistsGetApiArg = void;
export type CreatePoplistsPoplistsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreatePoplistsPoplistsPostApiArg = {
  poplistsInsert: PoplistsInsert;
};
export type UpdatePoplistsPoplistsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdatePoplistsPoplistsIdPutApiArg = {
  id: number;
  poplistsUpdate: PoplistsUpdate;
};
export type DeletePoplistsPoplistsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeletePoplistsPoplistsIdDeleteApiArg = {
  id: number;
};
export type GetPoplistsPoplistsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetPoplistsPoplistsIdGetApiArg = {
  id: number;
};
export type GetAllpoplistsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllpoplistsEventGetApiArg = void;
export type CreatePoplistspoplistsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreatePoplistspoplistsEventPostApiArg = {
  poplistsInsert: PoplistsInsert;
};
export type UpdatePoplistspoplistsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdatePoplistspoplistsEventIdPutApiArg = {
  id: number;
  poplistsUpdate: PoplistsUpdate;
};
export type DeletePoplistspoplistsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeletePoplistspoplistsEventIdDeleteApiArg = {
  id: number;
};
export type GetPoplistspoplistsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetPoplistspoplistsEventIdGetApiArg = {
  id: number;
};
export type GetAllPurchaseOrderTermsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllPurchaseOrderTermsGetApiArg = void;
export type CreatePurchaseOrderTermsPurchaseOrderTermsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreatePurchaseOrderTermsPurchaseOrderTermsPostApiArg = {
  purchaseOrderTermsInsert: PurchaseOrderTermsInsert;
};
export type UpdatePurchaseOrderTermsPurchaseOrderTermsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdatePurchaseOrderTermsPurchaseOrderTermsIdPutApiArg = {
  id: number;
  purchaseOrderTermsUpdate: PurchaseOrderTermsUpdate;
};
export type DeletePurchaseOrderTermsPurchaseOrderTermsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeletePurchaseOrderTermsPurchaseOrderTermsIdDeleteApiArg = {
  id: number;
};
export type GetPurchaseOrderTermsPurchaseOrderTermsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetPurchaseOrderTermsPurchaseOrderTermsIdGetApiArg = {
  id: number;
};
export type GetAllpurchaseOrderTermsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllpurchaseOrderTermsEventGetApiArg = void;
export type CreatePurchaseOrderTermspurchaseOrderTermsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreatePurchaseOrderTermspurchaseOrderTermsEventPostApiArg = {
  purchaseOrderTermsInsert: PurchaseOrderTermsInsert;
};
export type UpdatePurchaseOrderTermspurchaseOrderTermsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdatePurchaseOrderTermspurchaseOrderTermsEventIdPutApiArg = {
  id: number;
  purchaseOrderTermsUpdate: PurchaseOrderTermsUpdate;
};
export type DeletePurchaseOrderTermspurchaseOrderTermsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeletePurchaseOrderTermspurchaseOrderTermsEventIdDeleteApiArg = {
  id: number;
};
export type GetPurchaseOrderTermspurchaseOrderTermsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetPurchaseOrderTermspurchaseOrderTermsEventIdGetApiArg = {
  id: number;
};
export type GetAllRefAstMaterialGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefAstMaterialGetApiArg = void;
export type CreateRefAstMaterialRefAstMaterialPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefAstMaterialRefAstMaterialPostApiArg = {
  refAstMaterialInsert: RefAstMaterialInsert;
};
export type UpdateRefAstMaterialRefAstMaterialIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefAstMaterialRefAstMaterialIdPutApiArg = {
  id: number;
  refAstMaterialUpdate: RefAstMaterialUpdate;
};
export type DeleteRefAstMaterialRefAstMaterialIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefAstMaterialRefAstMaterialIdDeleteApiArg = {
  id: number;
};
export type GetRefAstMaterialRefAstMaterialIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefAstMaterialRefAstMaterialIdGetApiArg = {
  id: number;
};
export type GetAllrefAstMaterialEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllrefAstMaterialEventGetApiArg = void;
export type CreateRefAstMaterialrefAstMaterialEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefAstMaterialrefAstMaterialEventPostApiArg = {
  refAstMaterialInsert: RefAstMaterialInsert;
};
export type UpdateRefAstMaterialrefAstMaterialEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefAstMaterialrefAstMaterialEventIdPutApiArg = {
  id: number;
  refAstMaterialUpdate: RefAstMaterialUpdate;
};
export type DeleteRefAstMaterialrefAstMaterialEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefAstMaterialrefAstMaterialEventIdDeleteApiArg = {
  id: number;
};
export type GetRefAstMaterialrefAstMaterialEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefAstMaterialrefAstMaterialEventIdGetApiArg = {
  id: number;
};
export type GetAllRefFuelStationGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefFuelStationGetApiArg = void;
export type CreateRefFuelStationRefFuelStationPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefFuelStationRefFuelStationPostApiArg = {
  refFuelStationInsert: RefFuelStationInsert;
};
export type UpdateRefFuelStationRefFuelStationIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefFuelStationRefFuelStationIdPutApiArg = {
  id: number;
  refFuelStationUpdate: RefFuelStationUpdate;
};
export type DeleteRefFuelStationRefFuelStationIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefFuelStationRefFuelStationIdDeleteApiArg = {
  id: number;
};
export type GetRefFuelStationRefFuelStationIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefFuelStationRefFuelStationIdGetApiArg = {
  id: number;
};
export type GetAllrefFuelStationEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllrefFuelStationEventGetApiArg = void;
export type CreateRefFuelStationrefFuelStationEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefFuelStationrefFuelStationEventPostApiArg = {
  refFuelStationInsert: RefFuelStationInsert;
};
export type UpdateRefFuelStationrefFuelStationEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefFuelStationrefFuelStationEventIdPutApiArg = {
  id: number;
  refFuelStationUpdate: RefFuelStationUpdate;
};
export type DeleteRefFuelStationrefFuelStationEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefFuelStationrefFuelStationEventIdDeleteApiArg = {
  id: number;
};
export type GetRefFuelStationrefFuelStationEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefFuelStationrefFuelStationEventIdGetApiArg = {
  id: number;
};
export type GetAllRefPartyGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefPartyGetApiArg = void;
export type CreateRefPartyRefPartyPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefPartyRefPartyPostApiArg = {
  refPartyInsert: RefPartyInsert;
};
export type UpdateRefPartyRefPartyIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefPartyRefPartyIdPutApiArg = {
  id: number;
  refPartyUpdate: RefPartyUpdate;
};
export type DeleteRefPartyRefPartyIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefPartyRefPartyIdDeleteApiArg = {
  id: number;
};
export type GetRefPartyRefPartyIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefPartyRefPartyIdGetApiArg = {
  id: number;
};
export type GetAllrefPartyEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllrefPartyEventGetApiArg = void;
export type CreateRefPartyrefPartyEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefPartyrefPartyEventPostApiArg = {
  refPartyInsert: RefPartyInsert;
};
export type UpdateRefPartyrefPartyEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefPartyrefPartyEventIdPutApiArg = {
  id: number;
  refPartyUpdate: RefPartyUpdate;
};
export type DeleteRefPartyrefPartyEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefPartyrefPartyEventIdDeleteApiArg = {
  id: number;
};
export type GetRefPartyrefPartyEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefPartyrefPartyEventIdGetApiArg = {
  id: number;
};
export type GetAllRefRosterGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefRosterGetApiArg = void;
export type CreateRefRosterRefRosterPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefRosterRefRosterPostApiArg = {
  refRosterInsert: RefRosterInsert;
};
export type UpdateRefRosterRefRosterIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefRosterRefRosterIdPutApiArg = {
  id: number;
  refRosterUpdate: RefRosterUpdate;
};
export type DeleteRefRosterRefRosterIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefRosterRefRosterIdDeleteApiArg = {
  id: number;
};
export type GetRefRosterRefRosterIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefRosterRefRosterIdGetApiArg = {
  id: number;
};
export type GetAllrefRosterEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllrefRosterEventGetApiArg = void;
export type CreateRefRosterrefRosterEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefRosterrefRosterEventPostApiArg = {
  refRosterInsert: RefRosterInsert;
};
export type UpdateRefRosterrefRosterEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefRosterrefRosterEventIdPutApiArg = {
  id: number;
  refRosterUpdate: RefRosterUpdate;
};
export type DeleteRefRosterrefRosterEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefRosterrefRosterEventIdDeleteApiArg = {
  id: number;
};
export type GetRefRosterrefRosterEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefRosterrefRosterEventIdGetApiArg = {
  id: number;
};
export type GetAllRefSubAssemblyGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefSubAssemblyGetApiArg = void;
export type CreateRefSubAssemblyRefSubAssemblyPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefSubAssemblyRefSubAssemblyPostApiArg = {
  refSubAssemblyInsert: RefSubAssemblyInsert;
};
export type UpdateRefSubAssemblyRefSubAssemblyIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefSubAssemblyRefSubAssemblyIdPutApiArg = {
  id: number;
  refSubAssemblyUpdate: RefSubAssemblyUpdate;
};
export type DeleteRefSubAssemblyRefSubAssemblyIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefSubAssemblyRefSubAssemblyIdDeleteApiArg = {
  id: number;
};
export type GetRefSubAssemblyRefSubAssemblyIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefSubAssemblyRefSubAssemblyIdGetApiArg = {
  id: number;
};
export type GetAllrefSubAssemblyEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllrefSubAssemblyEventGetApiArg = void;
export type CreateRefSubAssemblyrefSubAssemblyEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefSubAssemblyrefSubAssemblyEventPostApiArg = {
  refSubAssemblyInsert: RefSubAssemblyInsert;
};
export type UpdateRefSubAssemblyrefSubAssemblyEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefSubAssemblyrefSubAssemblyEventIdPutApiArg = {
  id: number;
  refSubAssemblyUpdate: RefSubAssemblyUpdate;
};
export type DeleteRefSubAssemblyrefSubAssemblyEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefSubAssemblyrefSubAssemblyEventIdDeleteApiArg = {
  id: number;
};
export type GetRefSubAssemblyrefSubAssemblyEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefSubAssemblyrefSubAssemblyEventIdGetApiArg = {
  id: number;
};
export type GetAllRefTaxGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefTaxGetApiArg = void;
export type CreateRefTaxRefTaxPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefTaxRefTaxPostApiArg = {
  refTaxInsert: RefTaxInsert;
};
export type UpdateRefTaxRefTaxIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefTaxRefTaxIdPutApiArg = {
  id: number;
  refTaxUpdate: RefTaxUpdate;
};
export type DeleteRefTaxRefTaxIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefTaxRefTaxIdDeleteApiArg = {
  id: number;
};
export type GetRefTaxRefTaxIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefTaxRefTaxIdGetApiArg = {
  id: number;
};
export type GetAllrefTaxEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllrefTaxEventGetApiArg = void;
export type CreateRefTaxrefTaxEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefTaxrefTaxEventPostApiArg = {
  refTaxInsert: RefTaxInsert;
};
export type UpdateRefTaxrefTaxEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefTaxrefTaxEventIdPutApiArg = {
  id: number;
  refTaxUpdate: RefTaxUpdate;
};
export type DeleteRefTaxrefTaxEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefTaxrefTaxEventIdDeleteApiArg = {
  id: number;
};
export type GetRefTaxrefTaxEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefTaxrefTaxEventIdGetApiArg = {
  id: number;
};
export type GetAllRefVendorGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefVendorGetApiArg = void;
export type CreateRefVendorRefVendorPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefVendorRefVendorPostApiArg = {
  refVendorInsert: RefVendorInsert;
};
export type UpdateRefVendorRefVendorIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefVendorRefVendorIdPutApiArg = {
  id: number;
  refVendorUpdate: RefVendorUpdate;
};
export type DeleteRefVendorRefVendorIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefVendorRefVendorIdDeleteApiArg = {
  id: number;
};
export type GetRefVendorRefVendorIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefVendorRefVendorIdGetApiArg = {
  id: number;
};
export type GetAllrefVendorEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllrefVendorEventGetApiArg = void;
export type CreateRefVendorrefVendorEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefVendorrefVendorEventPostApiArg = {
  refVendorInsert: RefVendorInsert;
};
export type UpdateRefVendorrefVendorEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefVendorrefVendorEventIdPutApiArg = {
  id: number;
  refVendorUpdate: RefVendorUpdate;
};
export type DeleteRefVendorrefVendorEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefVendorrefVendorEventIdDeleteApiArg = {
  id: number;
};
export type GetRefVendorrefVendorEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefVendorrefVendorEventIdGetApiArg = {
  id: number;
};
export type GetAllRefWorkstationGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllRefWorkstationGetApiArg = void;
export type CreateRefWorkstationRefWorkstationPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefWorkstationRefWorkstationPostApiArg = {
  refWorkstationInsert: RefWorkstationInsert;
};
export type UpdateRefWorkstationRefWorkstationIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefWorkstationRefWorkstationIdPutApiArg = {
  id: number;
  refWorkstationUpdate: RefWorkstationUpdate;
};
export type DeleteRefWorkstationRefWorkstationIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefWorkstationRefWorkstationIdDeleteApiArg = {
  id: number;
};
export type GetRefWorkstationRefWorkstationIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefWorkstationRefWorkstationIdGetApiArg = {
  id: number;
};
export type GetAllrefWorkstationEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllrefWorkstationEventGetApiArg = void;
export type CreateRefWorkstationrefWorkstationEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateRefWorkstationrefWorkstationEventPostApiArg = {
  refWorkstationInsert: RefWorkstationInsert;
};
export type UpdateRefWorkstationrefWorkstationEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateRefWorkstationrefWorkstationEventIdPutApiArg = {
  id: number;
  refWorkstationUpdate: RefWorkstationUpdate;
};
export type DeleteRefWorkstationrefWorkstationEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteRefWorkstationrefWorkstationEventIdDeleteApiArg = {
  id: number;
};
export type GetRefWorkstationrefWorkstationEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetRefWorkstationrefWorkstationEventIdGetApiArg = {
  id: number;
};
export type GetAllResAssetGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllResAssetGetApiArg = void;
export type CreateResAssetResAssetPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateResAssetResAssetPostApiArg = {
  resAssetInsert: ResAssetInsert;
};
export type UpdateResAssetResAssetIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateResAssetResAssetIdPutApiArg = {
  id: number;
  resAssetUpdate: ResAssetUpdate;
};
export type DeleteResAssetResAssetIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteResAssetResAssetIdDeleteApiArg = {
  id: number;
};
export type GetResAssetResAssetIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetResAssetResAssetIdGetApiArg = {
  id: number;
};
export type GetAllresAssetEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllresAssetEventGetApiArg = void;
export type CreateResAssetresAssetEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateResAssetresAssetEventPostApiArg = {
  resAssetInsert: ResAssetInsert;
};
export type UpdateResAssetresAssetEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateResAssetresAssetEventIdPutApiArg = {
  id: number;
  resAssetUpdate: ResAssetUpdate;
};
export type DeleteResAssetresAssetEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteResAssetresAssetEventIdDeleteApiArg = {
  id: number;
};
export type GetResAssetresAssetEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetResAssetresAssetEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasApiKeyAuditGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasApiKeyAuditGetApiArg = void;
export type CreateSaasApiKeyAuditSaasApiKeyAuditPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasApiKeyAuditSaasApiKeyAuditPostApiArg = {
  saasApiKeyAuditInsert: SaasApiKeyAuditInsert;
};
export type UpdateSaasApiKeyAuditSaasApiKeyAuditIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasApiKeyAuditSaasApiKeyAuditIdPutApiArg = {
  id: number;
  saasApiKeyAuditUpdate: SaasApiKeyAuditUpdate;
};
export type DeleteSaasApiKeyAuditSaasApiKeyAuditIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasApiKeyAuditSaasApiKeyAuditIdDeleteApiArg = {
  id: number;
};
export type GetSaasApiKeyAuditSaasApiKeyAuditIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasApiKeyAuditSaasApiKeyAuditIdGetApiArg = {
  id: number;
};
export type GetAllsaasApiKeyAuditEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasApiKeyAuditEventGetApiArg = void;
export type CreateSaasApiKeyAuditsaasApiKeyAuditEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasApiKeyAuditsaasApiKeyAuditEventPostApiArg = {
  saasApiKeyAuditInsert: SaasApiKeyAuditInsert;
};
export type UpdateSaasApiKeyAuditsaasApiKeyAuditEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasApiKeyAuditsaasApiKeyAuditEventIdPutApiArg = {
  id: number;
  saasApiKeyAuditUpdate: SaasApiKeyAuditUpdate;
};
export type DeleteSaasApiKeyAuditsaasApiKeyAuditEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasApiKeyAuditsaasApiKeyAuditEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasApiKeyAuditsaasApiKeyAuditEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasApiKeyAuditsaasApiKeyAuditEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasAuditTrailsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasAuditTrailsGetApiArg = void;
export type CreateSaasAuditTrailsSaasAuditTrailsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasAuditTrailsSaasAuditTrailsPostApiArg = {
  saasAuditTrailsInsert: SaasAuditTrailsInsert;
};
export type UpdateSaasAuditTrailsSaasAuditTrailsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasAuditTrailsSaasAuditTrailsIdPutApiArg = {
  id: number;
  saasAuditTrailsUpdate: SaasAuditTrailsUpdate;
};
export type DeleteSaasAuditTrailsSaasAuditTrailsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasAuditTrailsSaasAuditTrailsIdDeleteApiArg = {
  id: number;
};
export type GetSaasAuditTrailsSaasAuditTrailsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasAuditTrailsSaasAuditTrailsIdGetApiArg = {
  id: number;
};
export type GetAllsaasAuditTrailsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasAuditTrailsEventGetApiArg = void;
export type CreateSaasAuditTrailssaasAuditTrailsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasAuditTrailssaasAuditTrailsEventPostApiArg = {
  saasAuditTrailsInsert: SaasAuditTrailsInsert;
};
export type UpdateSaasAuditTrailssaasAuditTrailsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasAuditTrailssaasAuditTrailsEventIdPutApiArg = {
  id: number;
  saasAuditTrailsUpdate: SaasAuditTrailsUpdate;
};
export type DeleteSaasAuditTrailssaasAuditTrailsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasAuditTrailssaasAuditTrailsEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasAuditTrailssaasAuditTrailsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasAuditTrailssaasAuditTrailsEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasChatsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasChatsGetApiArg = void;
export type CreateSaasChatsSaasChatsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasChatsSaasChatsPostApiArg = {
  saasChatsInsert: SaasChatsInsert;
};
export type UpdateSaasChatsSaasChatsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasChatsSaasChatsIdPutApiArg = {
  id: number;
  saasChatsUpdate: SaasChatsUpdate;
};
export type DeleteSaasChatsSaasChatsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasChatsSaasChatsIdDeleteApiArg = {
  id: number;
};
export type GetSaasChatsSaasChatsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasChatsSaasChatsIdGetApiArg = {
  id: number;
};
export type GetAllsaasChatsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasChatsEventGetApiArg = void;
export type CreateSaasChatssaasChatsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasChatssaasChatsEventPostApiArg = {
  saasChatsInsert: SaasChatsInsert;
};
export type UpdateSaasChatssaasChatsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasChatssaasChatsEventIdPutApiArg = {
  id: number;
  saasChatsUpdate: SaasChatsUpdate;
};
export type DeleteSaasChatssaasChatsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasChatssaasChatsEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasChatssaasChatsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasChatssaasChatsEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasCustomersGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasCustomersGetApiArg = void;
export type CreateSaasCustomersSaasCustomersPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasCustomersSaasCustomersPostApiArg = {
  saasCustomersInsert: SaasCustomersInsert;
};
export type UpdateSaasCustomersSaasCustomersIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasCustomersSaasCustomersIdPutApiArg = {
  id: number;
  saasCustomersUpdate: SaasCustomersUpdate;
};
export type DeleteSaasCustomersSaasCustomersIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasCustomersSaasCustomersIdDeleteApiArg = {
  id: number;
};
export type GetSaasCustomersSaasCustomersIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasCustomersSaasCustomersIdGetApiArg = {
  id: number;
};
export type GetAllsaasCustomersEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasCustomersEventGetApiArg = void;
export type CreateSaasCustomerssaasCustomersEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasCustomerssaasCustomersEventPostApiArg = {
  saasCustomersInsert: SaasCustomersInsert;
};
export type UpdateSaasCustomerssaasCustomersEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasCustomerssaasCustomersEventIdPutApiArg = {
  id: number;
  saasCustomersUpdate: SaasCustomersUpdate;
};
export type DeleteSaasCustomerssaasCustomersEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasCustomerssaasCustomersEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasCustomerssaasCustomersEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasCustomerssaasCustomersEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasEntitySharesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasEntitySharesGetApiArg = void;
export type CreateSaasEntitySharesSaasEntitySharesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasEntitySharesSaasEntitySharesPostApiArg = {
  saasEntitySharesInsert: SaasEntitySharesInsert;
};
export type UpdateSaasEntitySharesSaasEntitySharesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasEntitySharesSaasEntitySharesIdPutApiArg = {
  id: number;
  saasEntitySharesUpdate: SaasEntitySharesUpdate;
};
export type DeleteSaasEntitySharesSaasEntitySharesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasEntitySharesSaasEntitySharesIdDeleteApiArg = {
  id: number;
};
export type GetSaasEntitySharesSaasEntitySharesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasEntitySharesSaasEntitySharesIdGetApiArg = {
  id: number;
};
export type GetAllsaasEntitySharesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasEntitySharesEventGetApiArg = void;
export type CreateSaasEntitySharessaasEntitySharesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasEntitySharessaasEntitySharesEventPostApiArg = {
  saasEntitySharesInsert: SaasEntitySharesInsert;
};
export type UpdateSaasEntitySharessaasEntitySharesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasEntitySharessaasEntitySharesEventIdPutApiArg = {
  id: number;
  saasEntitySharesUpdate: SaasEntitySharesUpdate;
};
export type DeleteSaasEntitySharessaasEntitySharesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasEntitySharessaasEntitySharesEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasEntitySharessaasEntitySharesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasEntitySharessaasEntitySharesEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasFileMetasGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasFileMetasGetApiArg = void;
export type CreateSaasFileMetasSaasFileMetasPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasFileMetasSaasFileMetasPostApiArg = {
  saasFileMetasInsert: SaasFileMetasInsert;
};
export type UpdateSaasFileMetasSaasFileMetasIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasFileMetasSaasFileMetasIdPutApiArg = {
  id: number;
  saasFileMetasUpdate: SaasFileMetasUpdate;
};
export type DeleteSaasFileMetasSaasFileMetasIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasFileMetasSaasFileMetasIdDeleteApiArg = {
  id: number;
};
export type GetSaasFileMetasSaasFileMetasIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasFileMetasSaasFileMetasIdGetApiArg = {
  id: number;
};
export type GetAllsaasFileMetasEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasFileMetasEventGetApiArg = void;
export type CreateSaasFileMetassaasFileMetasEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasFileMetassaasFileMetasEventPostApiArg = {
  saasFileMetasInsert: SaasFileMetasInsert;
};
export type UpdateSaasFileMetassaasFileMetasEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasFileMetassaasFileMetasEventIdPutApiArg = {
  id: number;
  saasFileMetasUpdate: SaasFileMetasUpdate;
};
export type DeleteSaasFileMetassaasFileMetasEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasFileMetassaasFileMetasEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasFileMetassaasFileMetasEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasFileMetassaasFileMetasEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasFlexEntityGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasFlexEntityGetApiArg = void;
export type CreateSaasFlexEntitySaasFlexEntityPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasFlexEntitySaasFlexEntityPostApiArg = {
  saasFlexEntityInsert: SaasFlexEntityInsert;
};
export type UpdateSaasFlexEntitySaasFlexEntityIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasFlexEntitySaasFlexEntityIdPutApiArg = {
  id: number;
  saasFlexEntityUpdate: SaasFlexEntityUpdate;
};
export type DeleteSaasFlexEntitySaasFlexEntityIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasFlexEntitySaasFlexEntityIdDeleteApiArg = {
  id: number;
};
export type GetSaasFlexEntitySaasFlexEntityIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasFlexEntitySaasFlexEntityIdGetApiArg = {
  id: number;
};
export type GetAllsaasFlexEntityEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasFlexEntityEventGetApiArg = void;
export type CreateSaasFlexEntitysaasFlexEntityEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasFlexEntitysaasFlexEntityEventPostApiArg = {
  saasFlexEntityInsert: SaasFlexEntityInsert;
};
export type UpdateSaasFlexEntitysaasFlexEntityEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasFlexEntitysaasFlexEntityEventIdPutApiArg = {
  id: number;
  saasFlexEntityUpdate: SaasFlexEntityUpdate;
};
export type DeleteSaasFlexEntitysaasFlexEntityEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasFlexEntitysaasFlexEntityEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasFlexEntitysaasFlexEntityEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasFlexEntitysaasFlexEntityEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasFlexFieldsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasFlexFieldsGetApiArg = void;
export type CreateSaasFlexFieldsSaasFlexFieldsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasFlexFieldsSaasFlexFieldsPostApiArg = {
  saasFlexFieldsInsert: SaasFlexFieldsInsert;
};
export type UpdateSaasFlexFieldsSaasFlexFieldsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasFlexFieldsSaasFlexFieldsIdPutApiArg = {
  id: number;
  saasFlexFieldsUpdate: SaasFlexFieldsUpdate;
};
export type DeleteSaasFlexFieldsSaasFlexFieldsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasFlexFieldsSaasFlexFieldsIdDeleteApiArg = {
  id: number;
};
export type GetSaasFlexFieldsSaasFlexFieldsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasFlexFieldsSaasFlexFieldsIdGetApiArg = {
  id: number;
};
export type GetAllsaasFlexFieldsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasFlexFieldsEventGetApiArg = void;
export type CreateSaasFlexFieldssaasFlexFieldsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasFlexFieldssaasFlexFieldsEventPostApiArg = {
  saasFlexFieldsInsert: SaasFlexFieldsInsert;
};
export type UpdateSaasFlexFieldssaasFlexFieldsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasFlexFieldssaasFlexFieldsEventIdPutApiArg = {
  id: number;
  saasFlexFieldsUpdate: SaasFlexFieldsUpdate;
};
export type DeleteSaasFlexFieldssaasFlexFieldsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasFlexFieldssaasFlexFieldsEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasFlexFieldssaasFlexFieldsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasFlexFieldssaasFlexFieldsEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasFlexFieldValuesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasFlexFieldValuesGetApiArg = void;
export type CreateSaasFlexFieldValuesSaasFlexFieldValuesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasFlexFieldValuesSaasFlexFieldValuesPostApiArg = {
  saasFlexFieldValuesInsert: SaasFlexFieldValuesInsert;
};
export type UpdateSaasFlexFieldValuesSaasFlexFieldValuesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasFlexFieldValuesSaasFlexFieldValuesIdPutApiArg = {
  id: number;
  saasFlexFieldValuesUpdate: SaasFlexFieldValuesUpdate;
};
export type DeleteSaasFlexFieldValuesSaasFlexFieldValuesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasFlexFieldValuesSaasFlexFieldValuesIdDeleteApiArg = {
  id: number;
};
export type GetSaasFlexFieldValuesSaasFlexFieldValuesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasFlexFieldValuesSaasFlexFieldValuesIdGetApiArg = {
  id: number;
};
export type GetAllsaasFlexFieldValuesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasFlexFieldValuesEventGetApiArg = void;
export type CreateSaasFlexFieldValuessaasFlexFieldValuesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasFlexFieldValuessaasFlexFieldValuesEventPostApiArg = {
  saasFlexFieldValuesInsert: SaasFlexFieldValuesInsert;
};
export type UpdateSaasFlexFieldValuessaasFlexFieldValuesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasFlexFieldValuessaasFlexFieldValuesEventIdPutApiArg = {
  id: number;
  saasFlexFieldValuesUpdate: SaasFlexFieldValuesUpdate;
};
export type DeleteSaasFlexFieldValuessaasFlexFieldValuesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasFlexFieldValuessaasFlexFieldValuesEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasFlexFieldValuessaasFlexFieldValuesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasFlexFieldValuessaasFlexFieldValuesEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasRefActionsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefActionsGetApiArg = void;
export type CreateSaasRefActionsSaasRefActionsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefActionsSaasRefActionsPostApiArg = {
  saasRefActionsInsert: SaasRefActionsInsert;
};
export type UpdateSaasRefActionsSaasRefActionsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefActionsSaasRefActionsIdPutApiArg = {
  id: number;
  saasRefActionsUpdate: SaasRefActionsUpdate;
};
export type DeleteSaasRefActionsSaasRefActionsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefActionsSaasRefActionsIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefActionsSaasRefActionsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefActionsSaasRefActionsIdGetApiArg = {
  id: number;
};
export type GetAllsaasRefActionsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasRefActionsEventGetApiArg = void;
export type CreateSaasRefActionssaasRefActionsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefActionssaasRefActionsEventPostApiArg = {
  saasRefActionsInsert: SaasRefActionsInsert;
};
export type UpdateSaasRefActionssaasRefActionsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefActionssaasRefActionsEventIdPutApiArg = {
  id: number;
  saasRefActionsUpdate: SaasRefActionsUpdate;
};
export type DeleteSaasRefActionssaasRefActionsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefActionssaasRefActionsEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefActionssaasRefActionsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefActionssaasRefActionsEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasRefConfigurationsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefConfigurationsGetApiArg = void;
export type CreateSaasRefConfigurationsSaasRefConfigurationsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefConfigurationsSaasRefConfigurationsPostApiArg = {
  saasRefConfigurationsInsert: SaasRefConfigurationsInsert;
};
export type UpdateSaasRefConfigurationsSaasRefConfigurationsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefConfigurationsSaasRefConfigurationsIdPutApiArg = {
  id: number;
  saasRefConfigurationsUpdate: SaasRefConfigurationsUpdate;
};
export type DeleteSaasRefConfigurationsSaasRefConfigurationsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefConfigurationsSaasRefConfigurationsIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefConfigurationsSaasRefConfigurationsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefConfigurationsSaasRefConfigurationsIdGetApiArg = {
  id: number;
};
export type GetAllsaasRefConfigurationsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasRefConfigurationsEventGetApiArg = void;
export type CreateSaasRefConfigurationssaasRefConfigurationsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefConfigurationssaasRefConfigurationsEventPostApiArg = {
  saasRefConfigurationsInsert: SaasRefConfigurationsInsert;
};
export type UpdateSaasRefConfigurationssaasRefConfigurationsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefConfigurationssaasRefConfigurationsEventIdPutApiArg = {
  id: number;
  saasRefConfigurationsUpdate: SaasRefConfigurationsUpdate;
};
export type DeleteSaasRefConfigurationssaasRefConfigurationsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefConfigurationssaasRefConfigurationsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSaasRefConfigurationssaasRefConfigurationsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefConfigurationssaasRefConfigurationsEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasRefCurrenciesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefCurrenciesGetApiArg = void;
export type CreateSaasRefCurrenciesSaasRefCurrenciesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefCurrenciesSaasRefCurrenciesPostApiArg = {
  saasRefCurrenciesInsert: SaasRefCurrenciesInsert;
};
export type UpdateSaasRefCurrenciesSaasRefCurrenciesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefCurrenciesSaasRefCurrenciesIdPutApiArg = {
  id: number;
  saasRefCurrenciesUpdate: SaasRefCurrenciesUpdate;
};
export type DeleteSaasRefCurrenciesSaasRefCurrenciesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefCurrenciesSaasRefCurrenciesIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefCurrenciesSaasRefCurrenciesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefCurrenciesSaasRefCurrenciesIdGetApiArg = {
  id: number;
};
export type GetAllsaasRefCurrenciesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasRefCurrenciesEventGetApiArg = void;
export type CreateSaasRefCurrenciessaasRefCurrenciesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefCurrenciessaasRefCurrenciesEventPostApiArg = {
  saasRefCurrenciesInsert: SaasRefCurrenciesInsert;
};
export type UpdateSaasRefCurrenciessaasRefCurrenciesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefCurrenciessaasRefCurrenciesEventIdPutApiArg = {
  id: number;
  saasRefCurrenciesUpdate: SaasRefCurrenciesUpdate;
};
export type DeleteSaasRefCurrenciessaasRefCurrenciesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefCurrenciessaasRefCurrenciesEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefCurrenciessaasRefCurrenciesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefCurrenciessaasRefCurrenciesEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasRefDocumentsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefDocumentsGetApiArg = void;
export type CreateSaasRefDocumentsSaasRefDocumentsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefDocumentsSaasRefDocumentsPostApiArg = {
  saasRefDocumentsInsert: SaasRefDocumentsInsert;
};
export type UpdateSaasRefDocumentsSaasRefDocumentsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefDocumentsSaasRefDocumentsIdPutApiArg = {
  id: number;
  saasRefDocumentsUpdate: SaasRefDocumentsUpdate;
};
export type DeleteSaasRefDocumentsSaasRefDocumentsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefDocumentsSaasRefDocumentsIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefDocumentsSaasRefDocumentsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefDocumentsSaasRefDocumentsIdGetApiArg = {
  id: number;
};
export type GetAllsaasRefDocumentsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasRefDocumentsEventGetApiArg = void;
export type CreateSaasRefDocumentssaasRefDocumentsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefDocumentssaasRefDocumentsEventPostApiArg = {
  saasRefDocumentsInsert: SaasRefDocumentsInsert;
};
export type UpdateSaasRefDocumentssaasRefDocumentsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefDocumentssaasRefDocumentsEventIdPutApiArg = {
  id: number;
  saasRefDocumentsUpdate: SaasRefDocumentsUpdate;
};
export type DeleteSaasRefDocumentssaasRefDocumentsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefDocumentssaasRefDocumentsEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefDocumentssaasRefDocumentsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefDocumentssaasRefDocumentsEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasRefFeaturesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefFeaturesGetApiArg = void;
export type CreateSaasRefFeaturesSaasRefFeaturesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefFeaturesSaasRefFeaturesPostApiArg = {
  saasRefFeaturesInsert: SaasRefFeaturesInsert;
};
export type UpdateSaasRefFeaturesSaasRefFeaturesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefFeaturesSaasRefFeaturesIdPutApiArg = {
  id: number;
  saasRefFeaturesUpdate: SaasRefFeaturesUpdate;
};
export type DeleteSaasRefFeaturesSaasRefFeaturesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefFeaturesSaasRefFeaturesIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefFeaturesSaasRefFeaturesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefFeaturesSaasRefFeaturesIdGetApiArg = {
  id: number;
};
export type GetAllsaasRefFeaturesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasRefFeaturesEventGetApiArg = void;
export type CreateSaasRefFeaturessaasRefFeaturesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefFeaturessaasRefFeaturesEventPostApiArg = {
  saasRefFeaturesInsert: SaasRefFeaturesInsert;
};
export type UpdateSaasRefFeaturessaasRefFeaturesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefFeaturessaasRefFeaturesEventIdPutApiArg = {
  id: number;
  saasRefFeaturesUpdate: SaasRefFeaturesUpdate;
};
export type DeleteSaasRefFeaturessaasRefFeaturesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefFeaturessaasRefFeaturesEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefFeaturessaasRefFeaturesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefFeaturessaasRefFeaturesEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasRefModulesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefModulesGetApiArg = void;
export type CreateSaasRefModulesSaasRefModulesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefModulesSaasRefModulesPostApiArg = {
  saasRefModulesInsert: SaasRefModulesInsert;
};
export type UpdateSaasRefModulesSaasRefModulesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefModulesSaasRefModulesIdPutApiArg = {
  id: number;
  saasRefModulesUpdate: SaasRefModulesUpdate;
};
export type DeleteSaasRefModulesSaasRefModulesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefModulesSaasRefModulesIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefModulesSaasRefModulesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefModulesSaasRefModulesIdGetApiArg = {
  id: number;
};
export type GetAllsaasRefModulesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasRefModulesEventGetApiArg = void;
export type CreateSaasRefModulessaasRefModulesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefModulessaasRefModulesEventPostApiArg = {
  saasRefModulesInsert: SaasRefModulesInsert;
};
export type UpdateSaasRefModulessaasRefModulesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefModulessaasRefModulesEventIdPutApiArg = {
  id: number;
  saasRefModulesUpdate: SaasRefModulesUpdate;
};
export type DeleteSaasRefModulessaasRefModulesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefModulessaasRefModulesEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefModulessaasRefModulesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefModulessaasRefModulesEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasRefRolesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefRolesGetApiArg = void;
export type CreateSaasRefRolesSaasRefRolesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefRolesSaasRefRolesPostApiArg = {
  saasRefRolesInsert: SaasRefRolesInsert;
};
export type UpdateSaasRefRolesSaasRefRolesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefRolesSaasRefRolesIdPutApiArg = {
  id: number;
  saasRefRolesUpdate: SaasRefRolesUpdate;
};
export type DeleteSaasRefRolesSaasRefRolesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefRolesSaasRefRolesIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefRolesSaasRefRolesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefRolesSaasRefRolesIdGetApiArg = {
  id: number;
};
export type GetAllsaasRefRolesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasRefRolesEventGetApiArg = void;
export type CreateSaasRefRolessaasRefRolesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefRolessaasRefRolesEventPostApiArg = {
  saasRefRolesInsert: SaasRefRolesInsert;
};
export type UpdateSaasRefRolessaasRefRolesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefRolessaasRefRolesEventIdPutApiArg = {
  id: number;
  saasRefRolesUpdate: SaasRefRolesUpdate;
};
export type DeleteSaasRefRolessaasRefRolesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefRolessaasRefRolesEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefRolessaasRefRolesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefRolessaasRefRolesEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasRefSubscriptionsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefSubscriptionsGetApiArg = void;
export type CreateSaasRefSubscriptionsSaasRefSubscriptionsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefSubscriptionsSaasRefSubscriptionsPostApiArg = {
  saasRefSubscriptionsInsert: SaasRefSubscriptionsInsert;
};
export type UpdateSaasRefSubscriptionsSaasRefSubscriptionsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefSubscriptionsSaasRefSubscriptionsIdPutApiArg = {
  id: number;
  saasRefSubscriptionsUpdate: SaasRefSubscriptionsUpdate;
};
export type DeleteSaasRefSubscriptionsSaasRefSubscriptionsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefSubscriptionsSaasRefSubscriptionsIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefSubscriptionsSaasRefSubscriptionsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefSubscriptionsSaasRefSubscriptionsIdGetApiArg = {
  id: number;
};
export type GetAllsaasRefSubscriptionsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasRefSubscriptionsEventGetApiArg = void;
export type CreateSaasRefSubscriptionssaasRefSubscriptionsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefSubscriptionssaasRefSubscriptionsEventPostApiArg = {
  saasRefSubscriptionsInsert: SaasRefSubscriptionsInsert;
};
export type UpdateSaasRefSubscriptionssaasRefSubscriptionsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefSubscriptionssaasRefSubscriptionsEventIdPutApiArg = {
  id: number;
  saasRefSubscriptionsUpdate: SaasRefSubscriptionsUpdate;
};
export type DeleteSaasRefSubscriptionssaasRefSubscriptionsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefSubscriptionssaasRefSubscriptionsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSaasRefSubscriptionssaasRefSubscriptionsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefSubscriptionssaasRefSubscriptionsEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasRefSubscriptionFeaturesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefSubscriptionFeaturesGetApiArg = void;
export type CreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesPostApiArg =
  {
    saasRefSubscriptionFeaturesInsert: SaasRefSubscriptionFeaturesInsert;
  };
export type UpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdPutApiArg =
  {
    id: number;
    saasRefSubscriptionFeaturesUpdate: SaasRefSubscriptionFeaturesUpdate;
  };
export type DeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdDeleteApiArg =
  {
    id: number;
  };
export type GetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdGetApiArg =
  {
    id: number;
  };
export type GetAllsaasRefSubscriptionFeaturesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasRefSubscriptionFeaturesEventGetApiArg = void;
export type CreateSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventPostApiArg =
  {
    saasRefSubscriptionFeaturesInsert: SaasRefSubscriptionFeaturesInsert;
  };
export type UpdateSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdPutApiArg =
  {
    id: number;
    saasRefSubscriptionFeaturesUpdate: SaasRefSubscriptionFeaturesUpdate;
  };
export type DeleteSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllSaasRefTenantCurrenciesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefTenantCurrenciesGetApiArg = void;
export type CreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesPostApiArg = {
  saasRefTenantCurrenciesInsert: SaasRefTenantCurrenciesInsert;
};
export type UpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdPutApiArg = {
  id: number;
  saasRefTenantCurrenciesUpdate: SaasRefTenantCurrenciesUpdate;
};
export type DeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdDeleteApiArg =
  {
    id: number;
  };
export type GetSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdGetApiArg = {
  id: number;
};
export type GetAllsaasRefTenantCurrenciesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasRefTenantCurrenciesEventGetApiArg = void;
export type CreateSaasRefTenantCurrenciessaasRefTenantCurrenciesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefTenantCurrenciessaasRefTenantCurrenciesEventPostApiArg =
  {
    saasRefTenantCurrenciesInsert: SaasRefTenantCurrenciesInsert;
  };
export type UpdateSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdPutApiArg =
  {
    id: number;
    saasRefTenantCurrenciesUpdate: SaasRefTenantCurrenciesUpdate;
  };
export type DeleteSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllSaasRefWorkflowsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRefWorkflowsGetApiArg = void;
export type CreateSaasRefWorkflowsSaasRefWorkflowsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefWorkflowsSaasRefWorkflowsPostApiArg = {
  saasRefWorkflowsInsert: SaasRefWorkflowsInsert;
};
export type UpdateSaasRefWorkflowsSaasRefWorkflowsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefWorkflowsSaasRefWorkflowsIdPutApiArg = {
  id: number;
  saasRefWorkflowsUpdate: SaasRefWorkflowsUpdate;
};
export type DeleteSaasRefWorkflowsSaasRefWorkflowsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefWorkflowsSaasRefWorkflowsIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefWorkflowsSaasRefWorkflowsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefWorkflowsSaasRefWorkflowsIdGetApiArg = {
  id: number;
};
export type GetAllsaasRefWorkflowsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasRefWorkflowsEventGetApiArg = void;
export type CreateSaasRefWorkflowssaasRefWorkflowsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRefWorkflowssaasRefWorkflowsEventPostApiArg = {
  saasRefWorkflowsInsert: SaasRefWorkflowsInsert;
};
export type UpdateSaasRefWorkflowssaasRefWorkflowsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRefWorkflowssaasRefWorkflowsEventIdPutApiArg = {
  id: number;
  saasRefWorkflowsUpdate: SaasRefWorkflowsUpdate;
};
export type DeleteSaasRefWorkflowssaasRefWorkflowsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRefWorkflowssaasRefWorkflowsEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasRefWorkflowssaasRefWorkflowsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRefWorkflowssaasRefWorkflowsEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasRolePermissionGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasRolePermissionGetApiArg = void;
export type CreateSaasRolePermissionSaasRolePermissionPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRolePermissionSaasRolePermissionPostApiArg = {
  saasRolePermissionInsert: SaasRolePermissionInsert;
};
export type UpdateSaasRolePermissionSaasRolePermissionIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRolePermissionSaasRolePermissionIdPutApiArg = {
  id: number;
  saasRolePermissionUpdate: SaasRolePermissionUpdate;
};
export type DeleteSaasRolePermissionSaasRolePermissionIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRolePermissionSaasRolePermissionIdDeleteApiArg = {
  id: number;
};
export type GetSaasRolePermissionSaasRolePermissionIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRolePermissionSaasRolePermissionIdGetApiArg = {
  id: number;
};
export type GetAllsaasRolePermissionEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasRolePermissionEventGetApiArg = void;
export type CreateSaasRolePermissionsaasRolePermissionEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasRolePermissionsaasRolePermissionEventPostApiArg = {
  saasRolePermissionInsert: SaasRolePermissionInsert;
};
export type UpdateSaasRolePermissionsaasRolePermissionEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasRolePermissionsaasRolePermissionEventIdPutApiArg = {
  id: number;
  saasRolePermissionUpdate: SaasRolePermissionUpdate;
};
export type DeleteSaasRolePermissionsaasRolePermissionEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasRolePermissionsaasRolePermissionEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasRolePermissionsaasRolePermissionEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasRolePermissionsaasRolePermissionEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasTeamsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasTeamsGetApiArg = void;
export type CreateSaasTeamsSaasTeamsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasTeamsSaasTeamsPostApiArg = {
  saasTeamsInsert: SaasTeamsInsert;
};
export type UpdateSaasTeamsSaasTeamsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasTeamsSaasTeamsIdPutApiArg = {
  id: number;
  saasTeamsUpdate: SaasTeamsUpdate;
};
export type DeleteSaasTeamsSaasTeamsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasTeamsSaasTeamsIdDeleteApiArg = {
  id: number;
};
export type GetSaasTeamsSaasTeamsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasTeamsSaasTeamsIdGetApiArg = {
  id: number;
};
export type GetAllsaasTeamsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasTeamsEventGetApiArg = void;
export type CreateSaasTeamssaasTeamsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasTeamssaasTeamsEventPostApiArg = {
  saasTeamsInsert: SaasTeamsInsert;
};
export type UpdateSaasTeamssaasTeamsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasTeamssaasTeamsEventIdPutApiArg = {
  id: number;
  saasTeamsUpdate: SaasTeamsUpdate;
};
export type DeleteSaasTeamssaasTeamsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasTeamssaasTeamsEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasTeamssaasTeamsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasTeamssaasTeamsEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasTenantsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasTenantsGetApiArg = void;
export type CreateSaasTenantsSaasTenantsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasTenantsSaasTenantsPostApiArg = {
  saasTenantsInsert: SaasTenantsInsert;
};
export type UpdateSaasTenantsSaasTenantsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasTenantsSaasTenantsIdPutApiArg = {
  id: number;
  saasTenantsUpdate: SaasTenantsUpdate;
};
export type DeleteSaasTenantsSaasTenantsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasTenantsSaasTenantsIdDeleteApiArg = {
  id: number;
};
export type GetSaasTenantsSaasTenantsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasTenantsSaasTenantsIdGetApiArg = {
  id: number;
};
export type GetAllsaasTenantsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasTenantsEventGetApiArg = void;
export type CreateSaasTenantssaasTenantsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasTenantssaasTenantsEventPostApiArg = {
  saasTenantsInsert: SaasTenantsInsert;
};
export type UpdateSaasTenantssaasTenantsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasTenantssaasTenantsEventIdPutApiArg = {
  id: number;
  saasTenantsUpdate: SaasTenantsUpdate;
};
export type DeleteSaasTenantssaasTenantsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasTenantssaasTenantsEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasTenantssaasTenantsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasTenantssaasTenantsEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasTenantSubscriptionsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasTenantSubscriptionsGetApiArg = void;
export type CreateSaasTenantSubscriptionsSaasTenantSubscriptionsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasTenantSubscriptionsSaasTenantSubscriptionsPostApiArg = {
  saasTenantSubscriptionsInsert: SaasTenantSubscriptionsInsert;
};
export type UpdateSaasTenantSubscriptionsSaasTenantSubscriptionsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasTenantSubscriptionsSaasTenantSubscriptionsIdPutApiArg = {
  id: number;
  saasTenantSubscriptionsUpdate: SaasTenantSubscriptionsUpdate;
};
export type DeleteSaasTenantSubscriptionsSaasTenantSubscriptionsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasTenantSubscriptionsSaasTenantSubscriptionsIdDeleteApiArg =
  {
    id: number;
  };
export type GetSaasTenantSubscriptionsSaasTenantSubscriptionsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasTenantSubscriptionsSaasTenantSubscriptionsIdGetApiArg = {
  id: number;
};
export type GetAllsaasTenantSubscriptionsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasTenantSubscriptionsEventGetApiArg = void;
export type CreateSaasTenantSubscriptionssaasTenantSubscriptionsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasTenantSubscriptionssaasTenantSubscriptionsEventPostApiArg =
  {
    saasTenantSubscriptionsInsert: SaasTenantSubscriptionsInsert;
  };
export type UpdateSaasTenantSubscriptionssaasTenantSubscriptionsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasTenantSubscriptionssaasTenantSubscriptionsEventIdPutApiArg =
  {
    id: number;
    saasTenantSubscriptionsUpdate: SaasTenantSubscriptionsUpdate;
  };
export type DeleteSaasTenantSubscriptionssaasTenantSubscriptionsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasTenantSubscriptionssaasTenantSubscriptionsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSaasTenantSubscriptionssaasTenantSubscriptionsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasTenantSubscriptionssaasTenantSubscriptionsEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllSaasTenantUserGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasTenantUserGetApiArg = void;
export type CreateSaasTenantUserSaasTenantUserPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasTenantUserSaasTenantUserPostApiArg = {
  saasTenantUserInsert: SaasTenantUserInsert;
};
export type UpdateSaasTenantUserSaasTenantUserIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasTenantUserSaasTenantUserIdPutApiArg = {
  id: number;
  saasTenantUserUpdate: SaasTenantUserUpdate;
};
export type DeleteSaasTenantUserSaasTenantUserIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasTenantUserSaasTenantUserIdDeleteApiArg = {
  id: number;
};
export type GetSaasTenantUserSaasTenantUserIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasTenantUserSaasTenantUserIdGetApiArg = {
  id: number;
};
export type GetAllsaasTenantUserEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasTenantUserEventGetApiArg = void;
export type CreateSaasTenantUsersaasTenantUserEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasTenantUsersaasTenantUserEventPostApiArg = {
  saasTenantUserInsert: SaasTenantUserInsert;
};
export type UpdateSaasTenantUsersaasTenantUserEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasTenantUsersaasTenantUserEventIdPutApiArg = {
  id: number;
  saasTenantUserUpdate: SaasTenantUserUpdate;
};
export type DeleteSaasTenantUsersaasTenantUserEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasTenantUsersaasTenantUserEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasTenantUsersaasTenantUserEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasTenantUsersaasTenantUserEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasUserGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasUserGetApiArg = void;
export type CreateSaasUserSaasUserPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasUserSaasUserPostApiArg = {
  saasUserInsert: SaasUserInsert;
};
export type UpdateSaasUserSaasUserIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasUserSaasUserIdPutApiArg = {
  id: number;
  saasUserUpdate: SaasUserUpdate;
};
export type DeleteSaasUserSaasUserIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasUserSaasUserIdDeleteApiArg = {
  id: number;
};
export type GetSaasUserSaasUserIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasUserSaasUserIdGetApiArg = {
  id: number;
};
export type GetAllsaasUserEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasUserEventGetApiArg = void;
export type CreateSaasUsersaasUserEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasUsersaasUserEventPostApiArg = {
  saasUserInsert: SaasUserInsert;
};
export type UpdateSaasUsersaasUserEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasUsersaasUserEventIdPutApiArg = {
  id: number;
  saasUserUpdate: SaasUserUpdate;
};
export type DeleteSaasUsersaasUserEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasUsersaasUserEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasUsersaasUserEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasUsersaasUserEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasUserInvitationsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasUserInvitationsGetApiArg = void;
export type CreateSaasUserInvitationsSaasUserInvitationsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasUserInvitationsSaasUserInvitationsPostApiArg = {
  saasUserInvitationsInsert: SaasUserInvitationsInsert;
};
export type UpdateSaasUserInvitationsSaasUserInvitationsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasUserInvitationsSaasUserInvitationsIdPutApiArg = {
  id: number;
  saasUserInvitationsUpdate: SaasUserInvitationsUpdate;
};
export type DeleteSaasUserInvitationsSaasUserInvitationsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasUserInvitationsSaasUserInvitationsIdDeleteApiArg = {
  id: number;
};
export type GetSaasUserInvitationsSaasUserInvitationsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasUserInvitationsSaasUserInvitationsIdGetApiArg = {
  id: number;
};
export type GetAllsaasUserInvitationsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasUserInvitationsEventGetApiArg = void;
export type CreateSaasUserInvitationssaasUserInvitationsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasUserInvitationssaasUserInvitationsEventPostApiArg = {
  saasUserInvitationsInsert: SaasUserInvitationsInsert;
};
export type UpdateSaasUserInvitationssaasUserInvitationsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasUserInvitationssaasUserInvitationsEventIdPutApiArg = {
  id: number;
  saasUserInvitationsUpdate: SaasUserInvitationsUpdate;
};
export type DeleteSaasUserInvitationssaasUserInvitationsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasUserInvitationssaasUserInvitationsEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasUserInvitationssaasUserInvitationsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasUserInvitationssaasUserInvitationsEventIdGetApiArg = {
  id: number;
};
export type GetAllSaasUserRoleGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSaasUserRoleGetApiArg = void;
export type CreateSaasUserRoleSaasUserRolePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasUserRoleSaasUserRolePostApiArg = {
  saasUserRoleInsert: SaasUserRoleInsert;
};
export type UpdateSaasUserRoleSaasUserRoleIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasUserRoleSaasUserRoleIdPutApiArg = {
  id: number;
  saasUserRoleUpdate: SaasUserRoleUpdate;
};
export type DeleteSaasUserRoleSaasUserRoleIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasUserRoleSaasUserRoleIdDeleteApiArg = {
  id: number;
};
export type GetSaasUserRoleSaasUserRoleIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasUserRoleSaasUserRoleIdGetApiArg = {
  id: number;
};
export type GetAllsaasUserRoleEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsaasUserRoleEventGetApiArg = void;
export type CreateSaasUserRolesaasUserRoleEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSaasUserRolesaasUserRoleEventPostApiArg = {
  saasUserRoleInsert: SaasUserRoleInsert;
};
export type UpdateSaasUserRolesaasUserRoleEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSaasUserRolesaasUserRoleEventIdPutApiArg = {
  id: number;
  saasUserRoleUpdate: SaasUserRoleUpdate;
};
export type DeleteSaasUserRolesaasUserRoleEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSaasUserRolesaasUserRoleEventIdDeleteApiArg = {
  id: number;
};
export type GetSaasUserRolesaasUserRoleEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSaasUserRolesaasUserRoleEventIdGetApiArg = {
  id: number;
};
export type GetAllSetAssetTypeGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAssetTypeGetApiArg = void;
export type CreateSetAssetTypeSetAssetTypePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAssetTypeSetAssetTypePostApiArg = {
  setAssetTypeInsert: SetAssetTypeInsert;
};
export type UpdateSetAssetTypeSetAssetTypeIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAssetTypeSetAssetTypeIdPutApiArg = {
  id: number;
  setAssetTypeUpdate: SetAssetTypeUpdate;
};
export type DeleteSetAssetTypeSetAssetTypeIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAssetTypeSetAssetTypeIdDeleteApiArg = {
  id: number;
};
export type GetSetAssetTypeSetAssetTypeIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAssetTypeSetAssetTypeIdGetApiArg = {
  id: number;
};
export type GetAllsetAssetTypeEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsetAssetTypeEventGetApiArg = void;
export type CreateSetAssetTypesetAssetTypeEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAssetTypesetAssetTypeEventPostApiArg = {
  setAssetTypeInsert: SetAssetTypeInsert;
};
export type UpdateSetAssetTypesetAssetTypeEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAssetTypesetAssetTypeEventIdPutApiArg = {
  id: number;
  setAssetTypeUpdate: SetAssetTypeUpdate;
};
export type DeleteSetAssetTypesetAssetTypeEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAssetTypesetAssetTypeEventIdDeleteApiArg = {
  id: number;
};
export type GetSetAssetTypesetAssetTypeEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAssetTypesetAssetTypeEventIdGetApiArg = {
  id: number;
};
export type GetAllSetAstActivityNamesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstActivityNamesGetApiArg = void;
export type CreateSetAstActivityNamesSetAstActivityNamesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstActivityNamesSetAstActivityNamesPostApiArg = {
  setAstActivityNamesInsert: SetAstActivityNamesInsert;
};
export type UpdateSetAstActivityNamesSetAstActivityNamesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstActivityNamesSetAstActivityNamesIdPutApiArg = {
  id: number;
  setAstActivityNamesUpdate: SetAstActivityNamesUpdate;
};
export type DeleteSetAstActivityNamesSetAstActivityNamesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstActivityNamesSetAstActivityNamesIdDeleteApiArg = {
  id: number;
};
export type GetSetAstActivityNamesSetAstActivityNamesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstActivityNamesSetAstActivityNamesIdGetApiArg = {
  id: number;
};
export type GetAllsetAstActivityNamesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsetAstActivityNamesEventGetApiArg = void;
export type CreateSetAstActivityNamessetAstActivityNamesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstActivityNamessetAstActivityNamesEventPostApiArg = {
  setAstActivityNamesInsert: SetAstActivityNamesInsert;
};
export type UpdateSetAstActivityNamessetAstActivityNamesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstActivityNamessetAstActivityNamesEventIdPutApiArg = {
  id: number;
  setAstActivityNamesUpdate: SetAstActivityNamesUpdate;
};
export type DeleteSetAstActivityNamessetAstActivityNamesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstActivityNamessetAstActivityNamesEventIdDeleteApiArg = {
  id: number;
};
export type GetSetAstActivityNamessetAstActivityNamesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstActivityNamessetAstActivityNamesEventIdGetApiArg = {
  id: number;
};
export type GetAllSetAstAssetTypeGroupGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstAssetTypeGroupGetApiArg = void;
export type CreateSetAstAssetTypeGroupSetAstAssetTypeGroupPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstAssetTypeGroupSetAstAssetTypeGroupPostApiArg = {
  setAstAssetTypeGroupInsert: SetAstAssetTypeGroupInsert;
};
export type UpdateSetAstAssetTypeGroupSetAstAssetTypeGroupIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstAssetTypeGroupSetAstAssetTypeGroupIdPutApiArg = {
  id: number;
  setAstAssetTypeGroupUpdate: SetAstAssetTypeGroupUpdate;
};
export type DeleteSetAstAssetTypeGroupSetAstAssetTypeGroupIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstAssetTypeGroupSetAstAssetTypeGroupIdDeleteApiArg = {
  id: number;
};
export type GetSetAstAssetTypeGroupSetAstAssetTypeGroupIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstAssetTypeGroupSetAstAssetTypeGroupIdGetApiArg = {
  id: number;
};
export type GetAllsetAstAssetTypeGroupEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsetAstAssetTypeGroupEventGetApiArg = void;
export type CreateSetAstAssetTypeGroupsetAstAssetTypeGroupEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstAssetTypeGroupsetAstAssetTypeGroupEventPostApiArg = {
  setAstAssetTypeGroupInsert: SetAstAssetTypeGroupInsert;
};
export type UpdateSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdPutApiArg = {
  id: number;
  setAstAssetTypeGroupUpdate: SetAstAssetTypeGroupUpdate;
};
export type DeleteSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdGetApiArg = {
  id: number;
};
export type GetAllSetAstOwnerCategoryGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstOwnerCategoryGetApiArg = void;
export type CreateSetAstOwnerCategorySetAstOwnerCategoryPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstOwnerCategorySetAstOwnerCategoryPostApiArg = {
  setAstOwnerCategoryInsert: SetAstOwnerCategoryInsert;
};
export type UpdateSetAstOwnerCategorySetAstOwnerCategoryIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstOwnerCategorySetAstOwnerCategoryIdPutApiArg = {
  id: number;
  setAstOwnerCategoryUpdate: SetAstOwnerCategoryUpdate;
};
export type DeleteSetAstOwnerCategorySetAstOwnerCategoryIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstOwnerCategorySetAstOwnerCategoryIdDeleteApiArg = {
  id: number;
};
export type GetSetAstOwnerCategorySetAstOwnerCategoryIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstOwnerCategorySetAstOwnerCategoryIdGetApiArg = {
  id: number;
};
export type GetAllsetAstOwnerCategoryEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsetAstOwnerCategoryEventGetApiArg = void;
export type CreateSetAstOwnerCategorysetAstOwnerCategoryEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstOwnerCategorysetAstOwnerCategoryEventPostApiArg = {
  setAstOwnerCategoryInsert: SetAstOwnerCategoryInsert;
};
export type UpdateSetAstOwnerCategorysetAstOwnerCategoryEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstOwnerCategorysetAstOwnerCategoryEventIdPutApiArg = {
  id: number;
  setAstOwnerCategoryUpdate: SetAstOwnerCategoryUpdate;
};
export type DeleteSetAstOwnerCategorysetAstOwnerCategoryEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstOwnerCategorysetAstOwnerCategoryEventIdDeleteApiArg = {
  id: number;
};
export type GetSetAstOwnerCategorysetAstOwnerCategoryEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstOwnerCategorysetAstOwnerCategoryEventIdGetApiArg = {
  id: number;
};
export type GetAllSetAstSiteActivityGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstSiteActivityGetApiArg = void;
export type CreateSetAstSiteActivitySetAstSiteActivityPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstSiteActivitySetAstSiteActivityPostApiArg = {
  setAstSiteActivityInsert: SetAstSiteActivityInsert;
};
export type UpdateSetAstSiteActivitySetAstSiteActivityIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstSiteActivitySetAstSiteActivityIdPutApiArg = {
  id: number;
  setAstSiteActivityUpdate: SetAstSiteActivityUpdate;
};
export type DeleteSetAstSiteActivitySetAstSiteActivityIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstSiteActivitySetAstSiteActivityIdDeleteApiArg = {
  id: number;
};
export type GetSetAstSiteActivitySetAstSiteActivityIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstSiteActivitySetAstSiteActivityIdGetApiArg = {
  id: number;
};
export type GetAllsetAstSiteActivityEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsetAstSiteActivityEventGetApiArg = void;
export type CreateSetAstSiteActivitysetAstSiteActivityEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstSiteActivitysetAstSiteActivityEventPostApiArg = {
  setAstSiteActivityInsert: SetAstSiteActivityInsert;
};
export type UpdateSetAstSiteActivitysetAstSiteActivityEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstSiteActivitysetAstSiteActivityEventIdPutApiArg = {
  id: number;
  setAstSiteActivityUpdate: SetAstSiteActivityUpdate;
};
export type DeleteSetAstSiteActivitysetAstSiteActivityEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstSiteActivitysetAstSiteActivityEventIdDeleteApiArg = {
  id: number;
};
export type GetSetAstSiteActivitysetAstSiteActivityEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstSiteActivitysetAstSiteActivityEventIdGetApiArg = {
  id: number;
};
export type GetAllSetAstSubAssemblyCategoryGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstSubAssemblyCategoryGetApiArg = void;
export type CreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPostApiArg =
  {
    setAstSubAssemblyCategoryInsert: SetAstSubAssemblyCategoryInsert;
  };
export type UpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdPutApiArg =
  {
    id: number;
    setAstSubAssemblyCategoryUpdate: SetAstSubAssemblyCategoryUpdate;
  };
export type DeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteApiArg =
  {
    id: number;
  };
export type GetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGetApiArg = {
  id: number;
};
export type GetAllsetAstSubAssemblyCategoryEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsetAstSubAssemblyCategoryEventGetApiArg = void;
export type CreateSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventPostApiArg =
  {
    setAstSubAssemblyCategoryInsert: SetAstSubAssemblyCategoryInsert;
  };
export type UpdateSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdPutApiArg =
  {
    id: number;
    setAstSubAssemblyCategoryUpdate: SetAstSubAssemblyCategoryUpdate;
  };
export type DeleteSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllSetAstTicketTypeGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstTicketTypeGetApiArg = void;
export type CreateSetAstTicketTypeSetAstTicketTypePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstTicketTypeSetAstTicketTypePostApiArg = {
  setAstTicketTypeInsert: SetAstTicketTypeInsert;
};
export type UpdateSetAstTicketTypeSetAstTicketTypeIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstTicketTypeSetAstTicketTypeIdPutApiArg = {
  id: number;
  setAstTicketTypeUpdate: SetAstTicketTypeUpdate;
};
export type DeleteSetAstTicketTypeSetAstTicketTypeIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstTicketTypeSetAstTicketTypeIdDeleteApiArg = {
  id: number;
};
export type GetSetAstTicketTypeSetAstTicketTypeIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstTicketTypeSetAstTicketTypeIdGetApiArg = {
  id: number;
};
export type GetAllsetAstTicketTypeEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsetAstTicketTypeEventGetApiArg = void;
export type CreateSetAstTicketTypesetAstTicketTypeEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstTicketTypesetAstTicketTypeEventPostApiArg = {
  setAstTicketTypeInsert: SetAstTicketTypeInsert;
};
export type UpdateSetAstTicketTypesetAstTicketTypeEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstTicketTypesetAstTicketTypeEventIdPutApiArg = {
  id: number;
  setAstTicketTypeUpdate: SetAstTicketTypeUpdate;
};
export type DeleteSetAstTicketTypesetAstTicketTypeEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstTicketTypesetAstTicketTypeEventIdDeleteApiArg = {
  id: number;
};
export type GetSetAstTicketTypesetAstTicketTypeEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstTicketTypesetAstTicketTypeEventIdGetApiArg = {
  id: number;
};
export type GetAllSetAstTransactionDelayGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetAstTransactionDelayGetApiArg = void;
export type CreateSetAstTransactionDelaySetAstTransactionDelayPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstTransactionDelaySetAstTransactionDelayPostApiArg = {
  setAstTransactionDelayInsert: SetAstTransactionDelayInsert;
};
export type UpdateSetAstTransactionDelaySetAstTransactionDelayIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstTransactionDelaySetAstTransactionDelayIdPutApiArg = {
  id: number;
  setAstTransactionDelayUpdate: SetAstTransactionDelayUpdate;
};
export type DeleteSetAstTransactionDelaySetAstTransactionDelayIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstTransactionDelaySetAstTransactionDelayIdDeleteApiArg = {
  id: number;
};
export type GetSetAstTransactionDelaySetAstTransactionDelayIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstTransactionDelaySetAstTransactionDelayIdGetApiArg = {
  id: number;
};
export type GetAllsetAstTransactionDelayEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsetAstTransactionDelayEventGetApiArg = void;
export type CreateSetAstTransactionDelaysetAstTransactionDelayEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetAstTransactionDelaysetAstTransactionDelayEventPostApiArg =
  {
    setAstTransactionDelayInsert: SetAstTransactionDelayInsert;
  };
export type UpdateSetAstTransactionDelaysetAstTransactionDelayEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetAstTransactionDelaysetAstTransactionDelayEventIdPutApiArg =
  {
    id: number;
    setAstTransactionDelayUpdate: SetAstTransactionDelayUpdate;
  };
export type DeleteSetAstTransactionDelaysetAstTransactionDelayEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetAstTransactionDelaysetAstTransactionDelayEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetSetAstTransactionDelaysetAstTransactionDelayEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetAstTransactionDelaysetAstTransactionDelayEventIdGetApiArg = {
  id: number;
};
export type GetAllSetEntitiesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetEntitiesGetApiArg = void;
export type CreateSetEntitiesSetEntitiesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetEntitiesSetEntitiesPostApiArg = {
  setEntitiesInsert: SetEntitiesInsert;
};
export type UpdateSetEntitiesSetEntitiesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetEntitiesSetEntitiesIdPutApiArg = {
  id: number;
  setEntitiesUpdate: SetEntitiesUpdate;
};
export type DeleteSetEntitiesSetEntitiesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetEntitiesSetEntitiesIdDeleteApiArg = {
  id: number;
};
export type GetSetEntitiesSetEntitiesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetEntitiesSetEntitiesIdGetApiArg = {
  id: number;
};
export type GetAllsetEntitiesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsetEntitiesEventGetApiArg = void;
export type CreateSetEntitiessetEntitiesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetEntitiessetEntitiesEventPostApiArg = {
  setEntitiesInsert: SetEntitiesInsert;
};
export type UpdateSetEntitiessetEntitiesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetEntitiessetEntitiesEventIdPutApiArg = {
  id: number;
  setEntitiesUpdate: SetEntitiesUpdate;
};
export type DeleteSetEntitiessetEntitiesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetEntitiessetEntitiesEventIdDeleteApiArg = {
  id: number;
};
export type GetSetEntitiessetEntitiesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetEntitiessetEntitiesEventIdGetApiArg = {
  id: number;
};
export type GetAllSetGenMydashboardGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetGenMydashboardGetApiArg = void;
export type CreateSetGenMydashboardSetGenMydashboardPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetGenMydashboardSetGenMydashboardPostApiArg = {
  setGenMydashboardInsert: SetGenMydashboardInsert;
};
export type UpdateSetGenMydashboardSetGenMydashboardIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetGenMydashboardSetGenMydashboardIdPutApiArg = {
  id: number;
  setGenMydashboardUpdate: SetGenMydashboardUpdate;
};
export type DeleteSetGenMydashboardSetGenMydashboardIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetGenMydashboardSetGenMydashboardIdDeleteApiArg = {
  id: number;
};
export type GetSetGenMydashboardSetGenMydashboardIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetGenMydashboardSetGenMydashboardIdGetApiArg = {
  id: number;
};
export type GetAllsetGenMydashboardEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsetGenMydashboardEventGetApiArg = void;
export type CreateSetGenMydashboardsetGenMydashboardEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetGenMydashboardsetGenMydashboardEventPostApiArg = {
  setGenMydashboardInsert: SetGenMydashboardInsert;
};
export type UpdateSetGenMydashboardsetGenMydashboardEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetGenMydashboardsetGenMydashboardEventIdPutApiArg = {
  id: number;
  setGenMydashboardUpdate: SetGenMydashboardUpdate;
};
export type DeleteSetGenMydashboardsetGenMydashboardEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetGenMydashboardsetGenMydashboardEventIdDeleteApiArg = {
  id: number;
};
export type GetSetGenMydashboardsetGenMydashboardEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetGenMydashboardsetGenMydashboardEventIdGetApiArg = {
  id: number;
};
export type GetAllSetInvUomGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetInvUomGetApiArg = void;
export type CreateSetInvUomSetInvUomPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetInvUomSetInvUomPostApiArg = {
  setInvUomInsert: SetInvUomInsert;
};
export type UpdateSetInvUomSetInvUomIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetInvUomSetInvUomIdPutApiArg = {
  id: number;
  setInvUomUpdate: SetInvUomUpdate;
};
export type DeleteSetInvUomSetInvUomIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetInvUomSetInvUomIdDeleteApiArg = {
  id: number;
};
export type GetSetInvUomSetInvUomIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetInvUomSetInvUomIdGetApiArg = {
  id: number;
};
export type GetAllsetInvUomEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsetInvUomEventGetApiArg = void;
export type CreateSetInvUomsetInvUomEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetInvUomsetInvUomEventPostApiArg = {
  setInvUomInsert: SetInvUomInsert;
};
export type UpdateSetInvUomsetInvUomEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetInvUomsetInvUomEventIdPutApiArg = {
  id: number;
  setInvUomUpdate: SetInvUomUpdate;
};
export type DeleteSetInvUomsetInvUomEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetInvUomsetInvUomEventIdDeleteApiArg = {
  id: number;
};
export type GetSetInvUomsetInvUomEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetInvUomsetInvUomEventIdGetApiArg = {
  id: number;
};
export type GetAllSetSiteGroupingGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetSiteGroupingGetApiArg = void;
export type CreateSetSiteGroupingSetSiteGroupingPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetSiteGroupingSetSiteGroupingPostApiArg = {
  setSiteGroupingInsert: SetSiteGroupingInsert;
};
export type UpdateSetSiteGroupingSetSiteGroupingIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetSiteGroupingSetSiteGroupingIdPutApiArg = {
  id: number;
  setSiteGroupingUpdate: SetSiteGroupingUpdate;
};
export type DeleteSetSiteGroupingSetSiteGroupingIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetSiteGroupingSetSiteGroupingIdDeleteApiArg = {
  id: number;
};
export type GetSetSiteGroupingSetSiteGroupingIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetSiteGroupingSetSiteGroupingIdGetApiArg = {
  id: number;
};
export type GetAllsetSiteGroupingEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsetSiteGroupingEventGetApiArg = void;
export type CreateSetSiteGroupingsetSiteGroupingEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetSiteGroupingsetSiteGroupingEventPostApiArg = {
  setSiteGroupingInsert: SetSiteGroupingInsert;
};
export type UpdateSetSiteGroupingsetSiteGroupingEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetSiteGroupingsetSiteGroupingEventIdPutApiArg = {
  id: number;
  setSiteGroupingUpdate: SetSiteGroupingUpdate;
};
export type DeleteSetSiteGroupingsetSiteGroupingEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetSiteGroupingsetSiteGroupingEventIdDeleteApiArg = {
  id: number;
};
export type GetSetSiteGroupingsetSiteGroupingEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetSiteGroupingsetSiteGroupingEventIdGetApiArg = {
  id: number;
};
export type GetAllSetTenantWorkflowsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSetTenantWorkflowsGetApiArg = void;
export type CreateSetTenantWorkflowsSetTenantWorkflowsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetTenantWorkflowsSetTenantWorkflowsPostApiArg = {
  setTenantWorkflowsInsert: SetTenantWorkflowsInsert;
};
export type UpdateSetTenantWorkflowsSetTenantWorkflowsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetTenantWorkflowsSetTenantWorkflowsIdPutApiArg = {
  id: number;
  setTenantWorkflowsUpdate: SetTenantWorkflowsUpdate;
};
export type DeleteSetTenantWorkflowsSetTenantWorkflowsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetTenantWorkflowsSetTenantWorkflowsIdDeleteApiArg = {
  id: number;
};
export type GetSetTenantWorkflowsSetTenantWorkflowsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetTenantWorkflowsSetTenantWorkflowsIdGetApiArg = {
  id: number;
};
export type GetAllsetTenantWorkflowsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsetTenantWorkflowsEventGetApiArg = void;
export type CreateSetTenantWorkflowssetTenantWorkflowsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSetTenantWorkflowssetTenantWorkflowsEventPostApiArg = {
  setTenantWorkflowsInsert: SetTenantWorkflowsInsert;
};
export type UpdateSetTenantWorkflowssetTenantWorkflowsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSetTenantWorkflowssetTenantWorkflowsEventIdPutApiArg = {
  id: number;
  setTenantWorkflowsUpdate: SetTenantWorkflowsUpdate;
};
export type DeleteSetTenantWorkflowssetTenantWorkflowsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSetTenantWorkflowssetTenantWorkflowsEventIdDeleteApiArg = {
  id: number;
};
export type GetSetTenantWorkflowssetTenantWorkflowsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSetTenantWorkflowssetTenantWorkflowsEventIdGetApiArg = {
  id: number;
};
export type GetAllSitesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllSitesGetApiArg = void;
export type CreateSitesSitesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSitesSitesPostApiArg = {
  sitesInsert: SitesInsert;
};
export type UpdateSitesSitesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSitesSitesIdPutApiArg = {
  id: number;
  sitesUpdate: SitesUpdate;
};
export type DeleteSitesSitesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSitesSitesIdDeleteApiArg = {
  id: number;
};
export type GetSitesSitesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSitesSitesIdGetApiArg = {
  id: number;
};
export type GetAllsitesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllsitesEventGetApiArg = void;
export type CreateSitessitesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateSitessitesEventPostApiArg = {
  sitesInsert: SitesInsert;
};
export type UpdateSitessitesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateSitessitesEventIdPutApiArg = {
  id: number;
  sitesUpdate: SitesUpdate;
};
export type DeleteSitessitesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSitessitesEventIdDeleteApiArg = {
  id: number;
};
export type GetSitessitesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetSitessitesEventIdGetApiArg = {
  id: number;
};
export type GetAllTeamUsersGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTeamUsersGetApiArg = void;
export type CreateTeamUsersTeamUsersPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTeamUsersTeamUsersPostApiArg = {
  teamUsersInsert: TeamUsersInsert;
};
export type UpdateTeamUsersTeamUsersIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTeamUsersTeamUsersIdPutApiArg = {
  id: number;
  teamUsersUpdate: TeamUsersUpdate;
};
export type DeleteTeamUsersTeamUsersIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTeamUsersTeamUsersIdDeleteApiArg = {
  id: number;
};
export type GetTeamUsersTeamUsersIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTeamUsersTeamUsersIdGetApiArg = {
  id: number;
};
export type GetAllteamUsersEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllteamUsersEventGetApiArg = void;
export type CreateTeamUsersteamUsersEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTeamUsersteamUsersEventPostApiArg = {
  teamUsersInsert: TeamUsersInsert;
};
export type UpdateTeamUsersteamUsersEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTeamUsersteamUsersEventIdPutApiArg = {
  id: number;
  teamUsersUpdate: TeamUsersUpdate;
};
export type DeleteTeamUsersteamUsersEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTeamUsersteamUsersEventIdDeleteApiArg = {
  id: number;
};
export type GetTeamUsersteamUsersEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTeamUsersteamUsersEventIdGetApiArg = {
  id: number;
};
export type GetAllTransactionNoSettingsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTransactionNoSettingsGetApiArg = void;
export type CreateTransactionNoSettingsTransactionNoSettingsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTransactionNoSettingsTransactionNoSettingsPostApiArg = {
  transactionNoSettingsInsert: TransactionNoSettingsInsert;
};
export type UpdateTransactionNoSettingsTransactionNoSettingsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTransactionNoSettingsTransactionNoSettingsIdPutApiArg = {
  id: number;
  transactionNoSettingsUpdate: TransactionNoSettingsUpdate;
};
export type DeleteTransactionNoSettingsTransactionNoSettingsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTransactionNoSettingsTransactionNoSettingsIdDeleteApiArg = {
  id: number;
};
export type GetTransactionNoSettingsTransactionNoSettingsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTransactionNoSettingsTransactionNoSettingsIdGetApiArg = {
  id: number;
};
export type GetAlltransactionNoSettingsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltransactionNoSettingsEventGetApiArg = void;
export type CreateTransactionNoSettingstransactionNoSettingsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTransactionNoSettingstransactionNoSettingsEventPostApiArg = {
  transactionNoSettingsInsert: TransactionNoSettingsInsert;
};
export type UpdateTransactionNoSettingstransactionNoSettingsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTransactionNoSettingstransactionNoSettingsEventIdPutApiArg = {
  id: number;
  transactionNoSettingsUpdate: TransactionNoSettingsUpdate;
};
export type DeleteTransactionNoSettingstransactionNoSettingsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTransactionNoSettingstransactionNoSettingsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTransactionNoSettingstransactionNoSettingsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTransactionNoSettingstransactionNoSettingsEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnAssetAttributeGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetAttributeGetApiArg = void;
export type CreateTrnAssetAttributeTrnAssetAttributePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetAttributeTrnAssetAttributePostApiArg = {
  trnAssetAttributeInsert: TrnAssetAttributeInsert;
};
export type UpdateTrnAssetAttributeTrnAssetAttributeIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetAttributeTrnAssetAttributeIdPutApiArg = {
  id: number;
  trnAssetAttributeUpdate: TrnAssetAttributeUpdate;
};
export type DeleteTrnAssetAttributeTrnAssetAttributeIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetAttributeTrnAssetAttributeIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetAttributeTrnAssetAttributeIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetAttributeTrnAssetAttributeIdGetApiArg = {
  id: number;
};
export type GetAlltrnAssetAttributeEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnAssetAttributeEventGetApiArg = void;
export type CreateTrnAssetAttributetrnAssetAttributeEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetAttributetrnAssetAttributeEventPostApiArg = {
  trnAssetAttributeInsert: TrnAssetAttributeInsert;
};
export type UpdateTrnAssetAttributetrnAssetAttributeEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetAttributetrnAssetAttributeEventIdPutApiArg = {
  id: number;
  trnAssetAttributeUpdate: TrnAssetAttributeUpdate;
};
export type DeleteTrnAssetAttributetrnAssetAttributeEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetAttributetrnAssetAttributeEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetAttributetrnAssetAttributeEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetAttributetrnAssetAttributeEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnAssetDocumentGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetDocumentGetApiArg = void;
export type CreateTrnAssetDocumentTrnAssetDocumentPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetDocumentTrnAssetDocumentPostApiArg = {
  trnAssetDocumentInsert: TrnAssetDocumentInsert;
};
export type UpdateTrnAssetDocumentTrnAssetDocumentIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetDocumentTrnAssetDocumentIdPutApiArg = {
  id: number;
  trnAssetDocumentUpdate: TrnAssetDocumentUpdate;
};
export type DeleteTrnAssetDocumentTrnAssetDocumentIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetDocumentTrnAssetDocumentIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetDocumentTrnAssetDocumentIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetDocumentTrnAssetDocumentIdGetApiArg = {
  id: number;
};
export type GetAlltrnAssetDocumentEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnAssetDocumentEventGetApiArg = void;
export type CreateTrnAssetDocumenttrnAssetDocumentEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetDocumenttrnAssetDocumentEventPostApiArg = {
  trnAssetDocumentInsert: TrnAssetDocumentInsert;
};
export type UpdateTrnAssetDocumenttrnAssetDocumentEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetDocumenttrnAssetDocumentEventIdPutApiArg = {
  id: number;
  trnAssetDocumentUpdate: TrnAssetDocumentUpdate;
};
export type DeleteTrnAssetDocumenttrnAssetDocumentEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetDocumenttrnAssetDocumentEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetDocumenttrnAssetDocumentEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetDocumenttrnAssetDocumentEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnAssetMovmentGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetMovmentGetApiArg = void;
export type CreateTrnAssetMovmentTrnAssetMovmentPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetMovmentTrnAssetMovmentPostApiArg = {
  trnAssetMovmentInsert: TrnAssetMovmentInsert;
};
export type UpdateTrnAssetMovmentTrnAssetMovmentIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetMovmentTrnAssetMovmentIdPutApiArg = {
  id: number;
  trnAssetMovmentUpdate: TrnAssetMovmentUpdate;
};
export type DeleteTrnAssetMovmentTrnAssetMovmentIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetMovmentTrnAssetMovmentIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetMovmentTrnAssetMovmentIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetMovmentTrnAssetMovmentIdGetApiArg = {
  id: number;
};
export type GetAlltrnAssetMovmentEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnAssetMovmentEventGetApiArg = void;
export type CreateTrnAssetMovmenttrnAssetMovmentEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetMovmenttrnAssetMovmentEventPostApiArg = {
  trnAssetMovmentInsert: TrnAssetMovmentInsert;
};
export type UpdateTrnAssetMovmenttrnAssetMovmentEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetMovmenttrnAssetMovmentEventIdPutApiArg = {
  id: number;
  trnAssetMovmentUpdate: TrnAssetMovmentUpdate;
};
export type DeleteTrnAssetMovmenttrnAssetMovmentEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetMovmenttrnAssetMovmentEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetMovmenttrnAssetMovmentEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetMovmenttrnAssetMovmentEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnAssetOwnershipGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetOwnershipGetApiArg = void;
export type CreateTrnAssetOwnershipTrnAssetOwnershipPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetOwnershipTrnAssetOwnershipPostApiArg = {
  trnAssetOwnershipInsert: TrnAssetOwnershipInsert;
};
export type UpdateTrnAssetOwnershipTrnAssetOwnershipIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetOwnershipTrnAssetOwnershipIdPutApiArg = {
  id: number;
  trnAssetOwnershipUpdate: TrnAssetOwnershipUpdate;
};
export type DeleteTrnAssetOwnershipTrnAssetOwnershipIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetOwnershipTrnAssetOwnershipIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetOwnershipTrnAssetOwnershipIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetOwnershipTrnAssetOwnershipIdGetApiArg = {
  id: number;
};
export type GetAlltrnAssetOwnershipEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnAssetOwnershipEventGetApiArg = void;
export type CreateTrnAssetOwnershiptrnAssetOwnershipEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetOwnershiptrnAssetOwnershipEventPostApiArg = {
  trnAssetOwnershipInsert: TrnAssetOwnershipInsert;
};
export type UpdateTrnAssetOwnershiptrnAssetOwnershipEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetOwnershiptrnAssetOwnershipEventIdPutApiArg = {
  id: number;
  trnAssetOwnershipUpdate: TrnAssetOwnershipUpdate;
};
export type DeleteTrnAssetOwnershiptrnAssetOwnershipEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetOwnershiptrnAssetOwnershipEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetOwnershiptrnAssetOwnershipEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetOwnershiptrnAssetOwnershipEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnAssetRosterGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetRosterGetApiArg = void;
export type CreateTrnAssetRosterTrnAssetRosterPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetRosterTrnAssetRosterPostApiArg = {
  trnAssetRosterInsert: TrnAssetRosterInsert;
};
export type UpdateTrnAssetRosterTrnAssetRosterIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetRosterTrnAssetRosterIdPutApiArg = {
  id: number;
  trnAssetRosterUpdate: TrnAssetRosterUpdate;
};
export type DeleteTrnAssetRosterTrnAssetRosterIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetRosterTrnAssetRosterIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetRosterTrnAssetRosterIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetRosterTrnAssetRosterIdGetApiArg = {
  id: number;
};
export type GetAlltrnAssetRosterEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnAssetRosterEventGetApiArg = void;
export type CreateTrnAssetRostertrnAssetRosterEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetRostertrnAssetRosterEventPostApiArg = {
  trnAssetRosterInsert: TrnAssetRosterInsert;
};
export type UpdateTrnAssetRostertrnAssetRosterEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetRostertrnAssetRosterEventIdPutApiArg = {
  id: number;
  trnAssetRosterUpdate: TrnAssetRosterUpdate;
};
export type DeleteTrnAssetRostertrnAssetRosterEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetRostertrnAssetRosterEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetRostertrnAssetRosterEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetRostertrnAssetRosterEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnAssetSiteLinkingGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnAssetSiteLinkingGetApiArg = void;
export type CreateTrnAssetSiteLinkingTrnAssetSiteLinkingPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetSiteLinkingTrnAssetSiteLinkingPostApiArg = {
  trnAssetSiteLinkingInsert: TrnAssetSiteLinkingInsert;
};
export type UpdateTrnAssetSiteLinkingTrnAssetSiteLinkingIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetSiteLinkingTrnAssetSiteLinkingIdPutApiArg = {
  id: number;
  trnAssetSiteLinkingUpdate: TrnAssetSiteLinkingUpdate;
};
export type DeleteTrnAssetSiteLinkingTrnAssetSiteLinkingIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetSiteLinkingTrnAssetSiteLinkingIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetSiteLinkingTrnAssetSiteLinkingIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetSiteLinkingTrnAssetSiteLinkingIdGetApiArg = {
  id: number;
};
export type GetAlltrnAssetSiteLinkingEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnAssetSiteLinkingEventGetApiArg = void;
export type CreateTrnAssetSiteLinkingtrnAssetSiteLinkingEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnAssetSiteLinkingtrnAssetSiteLinkingEventPostApiArg = {
  trnAssetSiteLinkingInsert: TrnAssetSiteLinkingInsert;
};
export type UpdateTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdPutApiArg = {
  id: number;
  trnAssetSiteLinkingUpdate: TrnAssetSiteLinkingUpdate;
};
export type DeleteTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnCounterlogGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnCounterlogGetApiArg = void;
export type CreateTrnCounterlogTrnCounterlogPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnCounterlogTrnCounterlogPostApiArg = {
  trnCounterlogInsert: TrnCounterlogInsert;
};
export type UpdateTrnCounterlogTrnCounterlogIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnCounterlogTrnCounterlogIdPutApiArg = {
  id: number;
  trnCounterlogUpdate: TrnCounterlogUpdate;
};
export type DeleteTrnCounterlogTrnCounterlogIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnCounterlogTrnCounterlogIdDeleteApiArg = {
  id: number;
};
export type GetTrnCounterlogTrnCounterlogIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnCounterlogTrnCounterlogIdGetApiArg = {
  id: number;
};
export type GetAlltrnCounterlogEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnCounterlogEventGetApiArg = void;
export type CreateTrnCounterlogtrnCounterlogEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnCounterlogtrnCounterlogEventPostApiArg = {
  trnCounterlogInsert: TrnCounterlogInsert;
};
export type UpdateTrnCounterlogtrnCounterlogEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnCounterlogtrnCounterlogEventIdPutApiArg = {
  id: number;
  trnCounterlogUpdate: TrnCounterlogUpdate;
};
export type DeleteTrnCounterlogtrnCounterlogEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnCounterlogtrnCounterlogEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnCounterlogtrnCounterlogEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnCounterlogtrnCounterlogEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnDowntimeGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnDowntimeGetApiArg = void;
export type CreateTrnDowntimeTrnDowntimePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnDowntimeTrnDowntimePostApiArg = {
  trnDowntimeInsert: TrnDowntimeInsert;
};
export type UpdateTrnDowntimeTrnDowntimeIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnDowntimeTrnDowntimeIdPutApiArg = {
  id: number;
  trnDowntimeUpdate: TrnDowntimeUpdate;
};
export type DeleteTrnDowntimeTrnDowntimeIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnDowntimeTrnDowntimeIdDeleteApiArg = {
  id: number;
};
export type GetTrnDowntimeTrnDowntimeIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnDowntimeTrnDowntimeIdGetApiArg = {
  id: number;
};
export type GetAlltrnDowntimeEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnDowntimeEventGetApiArg = void;
export type CreateTrnDowntimetrnDowntimeEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnDowntimetrnDowntimeEventPostApiArg = {
  trnDowntimeInsert: TrnDowntimeInsert;
};
export type UpdateTrnDowntimetrnDowntimeEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnDowntimetrnDowntimeEventIdPutApiArg = {
  id: number;
  trnDowntimeUpdate: TrnDowntimeUpdate;
};
export type DeleteTrnDowntimetrnDowntimeEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnDowntimetrnDowntimeEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnDowntimetrnDowntimeEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnDowntimetrnDowntimeEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnEngagementGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnEngagementGetApiArg = void;
export type CreateTrnEngagementTrnEngagementPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnEngagementTrnEngagementPostApiArg = {
  trnEngagementInsert: TrnEngagementInsert;
};
export type UpdateTrnEngagementTrnEngagementIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnEngagementTrnEngagementIdPutApiArg = {
  id: number;
  trnEngagementUpdate: TrnEngagementUpdate;
};
export type DeleteTrnEngagementTrnEngagementIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnEngagementTrnEngagementIdDeleteApiArg = {
  id: number;
};
export type GetTrnEngagementTrnEngagementIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnEngagementTrnEngagementIdGetApiArg = {
  id: number;
};
export type GetAlltrnEngagementEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnEngagementEventGetApiArg = void;
export type CreateTrnEngagementtrnEngagementEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnEngagementtrnEngagementEventPostApiArg = {
  trnEngagementInsert: TrnEngagementInsert;
};
export type UpdateTrnEngagementtrnEngagementEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnEngagementtrnEngagementEventIdPutApiArg = {
  id: number;
  trnEngagementUpdate: TrnEngagementUpdate;
};
export type DeleteTrnEngagementtrnEngagementEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnEngagementtrnEngagementEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnEngagementtrnEngagementEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnEngagementtrnEngagementEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnFsFuelIssueGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnFsFuelIssueGetApiArg = void;
export type CreateTrnFsFuelIssueTrnFsFuelIssuePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFsFuelIssueTrnFsFuelIssuePostApiArg = {
  trnFsFuelIssueInsert: TrnFsFuelIssueInsert;
};
export type UpdateTrnFsFuelIssueTrnFsFuelIssueIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFsFuelIssueTrnFsFuelIssueIdPutApiArg = {
  id: number;
  trnFsFuelIssueUpdate: TrnFsFuelIssueUpdate;
};
export type DeleteTrnFsFuelIssueTrnFsFuelIssueIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFsFuelIssueTrnFsFuelIssueIdDeleteApiArg = {
  id: number;
};
export type GetTrnFsFuelIssueTrnFsFuelIssueIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFsFuelIssueTrnFsFuelIssueIdGetApiArg = {
  id: number;
};
export type GetAlltrnFsFuelIssueEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnFsFuelIssueEventGetApiArg = void;
export type CreateTrnFsFuelIssuetrnFsFuelIssueEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFsFuelIssuetrnFsFuelIssueEventPostApiArg = {
  trnFsFuelIssueInsert: TrnFsFuelIssueInsert;
};
export type UpdateTrnFsFuelIssuetrnFsFuelIssueEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFsFuelIssuetrnFsFuelIssueEventIdPutApiArg = {
  id: number;
  trnFsFuelIssueUpdate: TrnFsFuelIssueUpdate;
};
export type DeleteTrnFsFuelIssuetrnFsFuelIssueEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFsFuelIssuetrnFsFuelIssueEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnFsFuelIssuetrnFsFuelIssueEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFsFuelIssuetrnFsFuelIssueEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnFsFuelReceiveGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnFsFuelReceiveGetApiArg = void;
export type CreateTrnFsFuelReceiveTrnFsFuelReceivePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFsFuelReceiveTrnFsFuelReceivePostApiArg = {
  trnFsFuelReceiveInsert: TrnFsFuelReceiveInsert;
};
export type UpdateTrnFsFuelReceiveTrnFsFuelReceiveIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFsFuelReceiveTrnFsFuelReceiveIdPutApiArg = {
  id: number;
  trnFsFuelReceiveUpdate: TrnFsFuelReceiveUpdate;
};
export type DeleteTrnFsFuelReceiveTrnFsFuelReceiveIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFsFuelReceiveTrnFsFuelReceiveIdDeleteApiArg = {
  id: number;
};
export type GetTrnFsFuelReceiveTrnFsFuelReceiveIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFsFuelReceiveTrnFsFuelReceiveIdGetApiArg = {
  id: number;
};
export type GetAlltrnFsFuelReceiveEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnFsFuelReceiveEventGetApiArg = void;
export type CreateTrnFsFuelReceivetrnFsFuelReceiveEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFsFuelReceivetrnFsFuelReceiveEventPostApiArg = {
  trnFsFuelReceiveInsert: TrnFsFuelReceiveInsert;
};
export type UpdateTrnFsFuelReceivetrnFsFuelReceiveEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFsFuelReceivetrnFsFuelReceiveEventIdPutApiArg = {
  id: number;
  trnFsFuelReceiveUpdate: TrnFsFuelReceiveUpdate;
};
export type DeleteTrnFsFuelReceivetrnFsFuelReceiveEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFsFuelReceivetrnFsFuelReceiveEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnFsFuelReceivetrnFsFuelReceiveEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFsFuelReceivetrnFsFuelReceiveEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnFsFuelTransferGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnFsFuelTransferGetApiArg = void;
export type CreateTrnFsFuelTransferTrnFsFuelTransferPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFsFuelTransferTrnFsFuelTransferPostApiArg = {
  trnFsFuelTransferInsert: TrnFsFuelTransferInsert;
};
export type UpdateTrnFsFuelTransferTrnFsFuelTransferIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFsFuelTransferTrnFsFuelTransferIdPutApiArg = {
  id: number;
  trnFsFuelTransferUpdate: TrnFsFuelTransferUpdate;
};
export type DeleteTrnFsFuelTransferTrnFsFuelTransferIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFsFuelTransferTrnFsFuelTransferIdDeleteApiArg = {
  id: number;
};
export type GetTrnFsFuelTransferTrnFsFuelTransferIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFsFuelTransferTrnFsFuelTransferIdGetApiArg = {
  id: number;
};
export type GetAlltrnFsFuelTransferEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnFsFuelTransferEventGetApiArg = void;
export type CreateTrnFsFuelTransfertrnFsFuelTransferEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFsFuelTransfertrnFsFuelTransferEventPostApiArg = {
  trnFsFuelTransferInsert: TrnFsFuelTransferInsert;
};
export type UpdateTrnFsFuelTransfertrnFsFuelTransferEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFsFuelTransfertrnFsFuelTransferEventIdPutApiArg = {
  id: number;
  trnFsFuelTransferUpdate: TrnFsFuelTransferUpdate;
};
export type DeleteTrnFsFuelTransfertrnFsFuelTransferEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFsFuelTransfertrnFsFuelTransferEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnFsFuelTransfertrnFsFuelTransferEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFsFuelTransfertrnFsFuelTransferEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnFuelFeedinGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnFuelFeedinGetApiArg = void;
export type CreateTrnFuelFeedinTrnFuelFeedinPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFuelFeedinTrnFuelFeedinPostApiArg = {
  trnFuelFeedinInsert: TrnFuelFeedinInsert;
};
export type UpdateTrnFuelFeedinTrnFuelFeedinIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFuelFeedinTrnFuelFeedinIdPutApiArg = {
  id: number;
  trnFuelFeedinUpdate: TrnFuelFeedinUpdate;
};
export type DeleteTrnFuelFeedinTrnFuelFeedinIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFuelFeedinTrnFuelFeedinIdDeleteApiArg = {
  id: number;
};
export type GetTrnFuelFeedinTrnFuelFeedinIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFuelFeedinTrnFuelFeedinIdGetApiArg = {
  id: number;
};
export type GetAlltrnFuelFeedinEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnFuelFeedinEventGetApiArg = void;
export type CreateTrnFuelFeedintrnFuelFeedinEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFuelFeedintrnFuelFeedinEventPostApiArg = {
  trnFuelFeedinInsert: TrnFuelFeedinInsert;
};
export type UpdateTrnFuelFeedintrnFuelFeedinEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFuelFeedintrnFuelFeedinEventIdPutApiArg = {
  id: number;
  trnFuelFeedinUpdate: TrnFuelFeedinUpdate;
};
export type DeleteTrnFuelFeedintrnFuelFeedinEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFuelFeedintrnFuelFeedinEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnFuelFeedintrnFuelFeedinEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFuelFeedintrnFuelFeedinEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnFuelFeedinAttributeGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnFuelFeedinAttributeGetApiArg = void;
export type CreateTrnFuelFeedinAttributeTrnFuelFeedinAttributePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFuelFeedinAttributeTrnFuelFeedinAttributePostApiArg = {
  trnFuelFeedinAttributeInsert: TrnFuelFeedinAttributeInsert;
};
export type UpdateTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdPutApiArg = {
  id: number;
  trnFuelFeedinAttributeUpdate: TrnFuelFeedinAttributeUpdate;
};
export type DeleteTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdDeleteApiArg = {
  id: number;
};
export type GetTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdGetApiArg = {
  id: number;
};
export type GetAlltrnFuelFeedinAttributeEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnFuelFeedinAttributeEventGetApiArg = void;
export type CreateTrnFuelFeedinAttributetrnFuelFeedinAttributeEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnFuelFeedinAttributetrnFuelFeedinAttributeEventPostApiArg =
  {
    trnFuelFeedinAttributeInsert: TrnFuelFeedinAttributeInsert;
  };
export type UpdateTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdPutApiArg =
  {
    id: number;
    trnFuelFeedinAttributeUpdate: TrnFuelFeedinAttributeUpdate;
  };
export type DeleteTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnHrEmployeeGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnHrEmployeeGetApiArg = void;
export type CreateTrnHrEmployeeTrnHrEmployeePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnHrEmployeeTrnHrEmployeePostApiArg = {
  trnHrEmployeeInsert: TrnHrEmployeeInsert;
};
export type UpdateTrnHrEmployeeTrnHrEmployeeIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnHrEmployeeTrnHrEmployeeIdPutApiArg = {
  id: number;
  trnHrEmployeeUpdate: TrnHrEmployeeUpdate;
};
export type DeleteTrnHrEmployeeTrnHrEmployeeIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnHrEmployeeTrnHrEmployeeIdDeleteApiArg = {
  id: number;
};
export type GetTrnHrEmployeeTrnHrEmployeeIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnHrEmployeeTrnHrEmployeeIdGetApiArg = {
  id: number;
};
export type GetAlltrnHrEmployeeEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnHrEmployeeEventGetApiArg = void;
export type CreateTrnHrEmployeetrnHrEmployeeEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnHrEmployeetrnHrEmployeeEventPostApiArg = {
  trnHrEmployeeInsert: TrnHrEmployeeInsert;
};
export type UpdateTrnHrEmployeetrnHrEmployeeEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnHrEmployeetrnHrEmployeeEventIdPutApiArg = {
  id: number;
  trnHrEmployeeUpdate: TrnHrEmployeeUpdate;
};
export type DeleteTrnHrEmployeetrnHrEmployeeEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnHrEmployeetrnHrEmployeeEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnHrEmployeetrnHrEmployeeEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnHrEmployeetrnHrEmployeeEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnHrEmployeeAssetGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnHrEmployeeAssetGetApiArg = void;
export type CreateTrnHrEmployeeAssetTrnHrEmployeeAssetPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnHrEmployeeAssetTrnHrEmployeeAssetPostApiArg = {
  trnHrEmployeeAssetInsert: TrnHrEmployeeAssetInsert;
};
export type UpdateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPutApiArg = {
  id: number;
  trnHrEmployeeAssetUpdate: TrnHrEmployeeAssetUpdate;
};
export type DeleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDeleteApiArg = {
  id: number;
};
export type GetTrnHrEmployeeAssetTrnHrEmployeeAssetIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnHrEmployeeAssetTrnHrEmployeeAssetIdGetApiArg = {
  id: number;
};
export type GetAlltrnHrEmployeeAssetEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnHrEmployeeAssetEventGetApiArg = void;
export type CreateTrnHrEmployeeAssettrnHrEmployeeAssetEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnHrEmployeeAssettrnHrEmployeeAssetEventPostApiArg = {
  trnHrEmployeeAssetInsert: TrnHrEmployeeAssetInsert;
};
export type UpdateTrnHrEmployeeAssettrnHrEmployeeAssetEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnHrEmployeeAssettrnHrEmployeeAssetEventIdPutApiArg = {
  id: number;
  trnHrEmployeeAssetUpdate: TrnHrEmployeeAssetUpdate;
};
export type DeleteTrnHrEmployeeAssettrnHrEmployeeAssetEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnHrEmployeeAssettrnHrEmployeeAssetEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnHrEmployeeAssettrnHrEmployeeAssetEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnHrEmployeeAssettrnHrEmployeeAssetEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvAdjustmentAttributeGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvAdjustmentAttributeGetApiArg = void;
export type CreateTrnInvAdjustmentAttributeTrnInvAdjustmentAttributePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvAdjustmentAttributeTrnInvAdjustmentAttributePostApiArg =
  {
    trnInvAdjustmentAttributeInsert: TrnInvAdjustmentAttributeInsert;
  };
export type UpdateTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdPutApiArg =
  {
    id: number;
    trnInvAdjustmentAttributeUpdate: TrnInvAdjustmentAttributeUpdate;
  };
export type DeleteTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvAdjustmentAttributeEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvAdjustmentAttributeEventGetApiArg = void;
export type CreateTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventPostApiArg =
  {
    trnInvAdjustmentAttributeInsert: TrnInvAdjustmentAttributeInsert;
  };
export type UpdateTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdPutApiArg =
  {
    id: number;
    trnInvAdjustmentAttributeUpdate: TrnInvAdjustmentAttributeUpdate;
  };
export type DeleteTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllTrnInvAdjustmentWorkflowGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvAdjustmentWorkflowGetApiArg = void;
export type CreateTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowPostApiArg = {
  trnInvAdjustmentWorkflowInsert: TrnInvAdjustmentWorkflowInsert;
};
export type UpdateTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdPutApiArg =
  {
    id: number;
    trnInvAdjustmentWorkflowUpdate: TrnInvAdjustmentWorkflowUpdate;
  };
export type DeleteTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvAdjustmentWorkflowEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvAdjustmentWorkflowEventGetApiArg = void;
export type CreateTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventPostApiArg =
  {
    trnInvAdjustmentWorkflowInsert: TrnInvAdjustmentWorkflowInsert;
  };
export type UpdateTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdPutApiArg =
  {
    id: number;
    trnInvAdjustmentWorkflowUpdate: TrnInvAdjustmentWorkflowUpdate;
  };
export type DeleteTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllTrnInvAllocationGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvAllocationGetApiArg = void;
export type CreateTrnInvAllocationTrnInvAllocationPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvAllocationTrnInvAllocationPostApiArg = {
  trnInvAllocationInsert: TrnInvAllocationInsert;
};
export type UpdateTrnInvAllocationTrnInvAllocationIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvAllocationTrnInvAllocationIdPutApiArg = {
  id: number;
  trnInvAllocationUpdate: TrnInvAllocationUpdate;
};
export type DeleteTrnInvAllocationTrnInvAllocationIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvAllocationTrnInvAllocationIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvAllocationTrnInvAllocationIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvAllocationTrnInvAllocationIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvAllocationEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvAllocationEventGetApiArg = void;
export type CreateTrnInvAllocationtrnInvAllocationEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvAllocationtrnInvAllocationEventPostApiArg = {
  trnInvAllocationInsert: TrnInvAllocationInsert;
};
export type UpdateTrnInvAllocationtrnInvAllocationEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvAllocationtrnInvAllocationEventIdPutApiArg = {
  id: number;
  trnInvAllocationUpdate: TrnInvAllocationUpdate;
};
export type DeleteTrnInvAllocationtrnInvAllocationEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvAllocationtrnInvAllocationEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvAllocationtrnInvAllocationEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvAllocationtrnInvAllocationEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvAllocationWorkflowGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvAllocationWorkflowGetApiArg = void;
export type CreateTrnInvAllocationWorkflowTrnInvAllocationWorkflowPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvAllocationWorkflowTrnInvAllocationWorkflowPostApiArg = {
  trnInvAllocationWorkflowInsert: TrnInvAllocationWorkflowInsert;
};
export type UpdateTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdPutApiArg =
  {
    id: number;
    trnInvAllocationWorkflowUpdate: TrnInvAllocationWorkflowUpdate;
  };
export type DeleteTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvAllocationWorkflowEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvAllocationWorkflowEventGetApiArg = void;
export type CreateTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventPostApiArg =
  {
    trnInvAllocationWorkflowInsert: TrnInvAllocationWorkflowInsert;
  };
export type UpdateTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdPutApiArg =
  {
    id: number;
    trnInvAllocationWorkflowUpdate: TrnInvAllocationWorkflowUpdate;
  };
export type DeleteTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllTrnInvConsumptionGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvConsumptionGetApiArg = void;
export type CreateTrnInvConsumptionTrnInvConsumptionPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvConsumptionTrnInvConsumptionPostApiArg = {
  trnInvConsumptionInsert: TrnInvConsumptionInsert;
};
export type UpdateTrnInvConsumptionTrnInvConsumptionIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvConsumptionTrnInvConsumptionIdPutApiArg = {
  id: number;
  trnInvConsumptionUpdate: TrnInvConsumptionUpdate;
};
export type DeleteTrnInvConsumptionTrnInvConsumptionIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvConsumptionTrnInvConsumptionIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvConsumptionTrnInvConsumptionIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvConsumptionTrnInvConsumptionIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvConsumptionEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvConsumptionEventGetApiArg = void;
export type CreateTrnInvConsumptiontrnInvConsumptionEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvConsumptiontrnInvConsumptionEventPostApiArg = {
  trnInvConsumptionInsert: TrnInvConsumptionInsert;
};
export type UpdateTrnInvConsumptiontrnInvConsumptionEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvConsumptiontrnInvConsumptionEventIdPutApiArg = {
  id: number;
  trnInvConsumptionUpdate: TrnInvConsumptionUpdate;
};
export type DeleteTrnInvConsumptiontrnInvConsumptionEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvConsumptiontrnInvConsumptionEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvConsumptiontrnInvConsumptionEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvConsumptiontrnInvConsumptionEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvConsumptionItemsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvConsumptionItemsGetApiArg = void;
export type CreateTrnInvConsumptionItemsTrnInvConsumptionItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvConsumptionItemsTrnInvConsumptionItemsPostApiArg = {
  trnInvConsumptionItemsInsert: TrnInvConsumptionItemsInsert;
};
export type UpdateTrnInvConsumptionItemsTrnInvConsumptionItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvConsumptionItemsTrnInvConsumptionItemsIdPutApiArg = {
  id: number;
  trnInvConsumptionItemsUpdate: TrnInvConsumptionItemsUpdate;
};
export type DeleteTrnInvConsumptionItemsTrnInvConsumptionItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvConsumptionItemsTrnInvConsumptionItemsIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvConsumptionItemsTrnInvConsumptionItemsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvConsumptionItemsTrnInvConsumptionItemsIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvConsumptionItemsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvConsumptionItemsEventGetApiArg = void;
export type CreateTrnInvConsumptionItemstrnInvConsumptionItemsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvConsumptionItemstrnInvConsumptionItemsEventPostApiArg =
  {
    trnInvConsumptionItemsInsert: TrnInvConsumptionItemsInsert;
  };
export type UpdateTrnInvConsumptionItemstrnInvConsumptionItemsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvConsumptionItemstrnInvConsumptionItemsEventIdPutApiArg =
  {
    id: number;
    trnInvConsumptionItemsUpdate: TrnInvConsumptionItemsUpdate;
  };
export type DeleteTrnInvConsumptionItemstrnInvConsumptionItemsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvConsumptionItemstrnInvConsumptionItemsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvConsumptionItemstrnInvConsumptionItemsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvConsumptionItemstrnInvConsumptionItemsEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvConsumptionWorkflowGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvConsumptionWorkflowGetApiArg = void;
export type CreateTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowPostApiArg =
  {
    trnInvConsumptionWorkflowInsert: TrnInvConsumptionWorkflowInsert;
  };
export type UpdateTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdPutApiArg =
  {
    id: number;
    trnInvConsumptionWorkflowUpdate: TrnInvConsumptionWorkflowUpdate;
  };
export type DeleteTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvConsumptionWorkflowEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvConsumptionWorkflowEventGetApiArg = void;
export type CreateTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventPostApiArg =
  {
    trnInvConsumptionWorkflowInsert: TrnInvConsumptionWorkflowInsert;
  };
export type UpdateTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdPutApiArg =
  {
    id: number;
    trnInvConsumptionWorkflowUpdate: TrnInvConsumptionWorkflowUpdate;
  };
export type DeleteTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllTrnInvItemGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemGetApiArg = void;
export type CreateTrnInvItemTrnInvItemPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemTrnInvItemPostApiArg = {
  trnInvItemInsert: TrnInvItemInsert;
};
export type UpdateTrnInvItemTrnInvItemIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemTrnInvItemIdPutApiArg = {
  id: number;
  trnInvItemUpdate: TrnInvItemUpdate;
};
export type DeleteTrnInvItemTrnInvItemIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemTrnInvItemIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvItemTrnInvItemIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemTrnInvItemIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvItemEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvItemEventGetApiArg = void;
export type CreateTrnInvItemtrnInvItemEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemtrnInvItemEventPostApiArg = {
  trnInvItemInsert: TrnInvItemInsert;
};
export type UpdateTrnInvItemtrnInvItemEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemtrnInvItemEventIdPutApiArg = {
  id: number;
  trnInvItemUpdate: TrnInvItemUpdate;
};
export type DeleteTrnInvItemtrnInvItemEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemtrnInvItemEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvItemtrnInvItemEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemtrnInvItemEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvItemAdjustmentGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemAdjustmentGetApiArg = void;
export type CreateTrnInvItemAdjustmentTrnInvItemAdjustmentPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemAdjustmentTrnInvItemAdjustmentPostApiArg = {
  trnInvItemAdjustmentInsert: TrnInvItemAdjustmentInsert;
};
export type UpdateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPutApiArg = {
  id: number;
  trnInvItemAdjustmentUpdate: TrnInvItemAdjustmentUpdate;
};
export type DeleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvItemAdjustmentTrnInvItemAdjustmentIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemAdjustmentTrnInvItemAdjustmentIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvItemAdjustmentEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvItemAdjustmentEventGetApiArg = void;
export type CreateTrnInvItemAdjustmenttrnInvItemAdjustmentEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemAdjustmenttrnInvItemAdjustmentEventPostApiArg = {
  trnInvItemAdjustmentInsert: TrnInvItemAdjustmentInsert;
};
export type UpdateTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdPutApiArg = {
  id: number;
  trnInvItemAdjustmentUpdate: TrnInvItemAdjustmentUpdate;
};
export type DeleteTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvItemAdjustmentDtlGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemAdjustmentDtlGetApiArg = void;
export type CreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlPostApiArg = {
  trnInvItemAdjustmentDtlInsert: TrnInvItemAdjustmentDtlInsert;
};
export type UpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdPutApiArg = {
  id: number;
  trnInvItemAdjustmentDtlUpdate: TrnInvItemAdjustmentDtlUpdate;
};
export type DeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvItemAdjustmentDtlEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvItemAdjustmentDtlEventGetApiArg = void;
export type CreateTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventPostApiArg =
  {
    trnInvItemAdjustmentDtlInsert: TrnInvItemAdjustmentDtlInsert;
  };
export type UpdateTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdPutApiArg =
  {
    id: number;
    trnInvItemAdjustmentDtlUpdate: TrnInvItemAdjustmentDtlUpdate;
  };
export type DeleteTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllTrnInvItemAllocationGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemAllocationGetApiArg = void;
export type CreateTrnInvItemAllocationTrnInvItemAllocationPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemAllocationTrnInvItemAllocationPostApiArg = {
  trnInvItemAllocationInsert: TrnInvItemAllocationInsert;
};
export type UpdateTrnInvItemAllocationTrnInvItemAllocationIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemAllocationTrnInvItemAllocationIdPutApiArg = {
  id: number;
  trnInvItemAllocationUpdate: TrnInvItemAllocationUpdate;
};
export type DeleteTrnInvItemAllocationTrnInvItemAllocationIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemAllocationTrnInvItemAllocationIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvItemAllocationTrnInvItemAllocationIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemAllocationTrnInvItemAllocationIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvItemAllocationEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvItemAllocationEventGetApiArg = void;
export type CreateTrnInvItemAllocationtrnInvItemAllocationEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemAllocationtrnInvItemAllocationEventPostApiArg = {
  trnInvItemAllocationInsert: TrnInvItemAllocationInsert;
};
export type UpdateTrnInvItemAllocationtrnInvItemAllocationEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemAllocationtrnInvItemAllocationEventIdPutApiArg = {
  id: number;
  trnInvItemAllocationUpdate: TrnInvItemAllocationUpdate;
};
export type DeleteTrnInvItemAllocationtrnInvItemAllocationEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemAllocationtrnInvItemAllocationEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemAllocationtrnInvItemAllocationEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemAllocationtrnInvItemAllocationEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvItemDemandGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemDemandGetApiArg = void;
export type CreateTrnInvItemDemandTrnInvItemDemandPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemDemandTrnInvItemDemandPostApiArg = {
  trnInvItemDemandInsert: TrnInvItemDemandInsert;
};
export type UpdateTrnInvItemDemandTrnInvItemDemandIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemDemandTrnInvItemDemandIdPutApiArg = {
  id: number;
  trnInvItemDemandUpdate: TrnInvItemDemandUpdate;
};
export type DeleteTrnInvItemDemandTrnInvItemDemandIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemDemandTrnInvItemDemandIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvItemDemandTrnInvItemDemandIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemDemandTrnInvItemDemandIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvItemDemandEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvItemDemandEventGetApiArg = void;
export type CreateTrnInvItemDemandtrnInvItemDemandEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemDemandtrnInvItemDemandEventPostApiArg = {
  trnInvItemDemandInsert: TrnInvItemDemandInsert;
};
export type UpdateTrnInvItemDemandtrnInvItemDemandEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemDemandtrnInvItemDemandEventIdPutApiArg = {
  id: number;
  trnInvItemDemandUpdate: TrnInvItemDemandUpdate;
};
export type DeleteTrnInvItemDemandtrnInvItemDemandEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemDemandtrnInvItemDemandEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvItemDemandtrnInvItemDemandEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemDemandtrnInvItemDemandEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvItemDemandAttributesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemDemandAttributesGetApiArg = void;
export type CreateTrnInvItemDemandAttributesTrnInvItemDemandAttributesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemDemandAttributesTrnInvItemDemandAttributesPostApiArg =
  {
    trnInvItemDemandAttributesInsert: TrnInvItemDemandAttributesInsert;
  };
export type UpdateTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdPutApiArg =
  {
    id: number;
    trnInvItemDemandAttributesUpdate: TrnInvItemDemandAttributesUpdate;
  };
export type DeleteTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdGetApiArg =
  {
    id: number;
  };
export type GetAlltrnInvItemDemandAttributesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvItemDemandAttributesEventGetApiArg = void;
export type CreateTrnInvItemDemandAttributestrnInvItemDemandAttributesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemDemandAttributestrnInvItemDemandAttributesEventPostApiArg =
  {
    trnInvItemDemandAttributesInsert: TrnInvItemDemandAttributesInsert;
  };
export type UpdateTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdPutApiArg =
  {
    id: number;
    trnInvItemDemandAttributesUpdate: TrnInvItemDemandAttributesUpdate;
  };
export type DeleteTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllTrnInvItemDemandItemsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemDemandItemsGetApiArg = void;
export type CreateTrnInvItemDemandItemsTrnInvItemDemandItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemDemandItemsTrnInvItemDemandItemsPostApiArg = {
  trnInvItemDemandItemsInsert: TrnInvItemDemandItemsInsert;
};
export type UpdateTrnInvItemDemandItemsTrnInvItemDemandItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemDemandItemsTrnInvItemDemandItemsIdPutApiArg = {
  id: number;
  trnInvItemDemandItemsUpdate: TrnInvItemDemandItemsUpdate;
};
export type DeleteTrnInvItemDemandItemsTrnInvItemDemandItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemDemandItemsTrnInvItemDemandItemsIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvItemDemandItemsTrnInvItemDemandItemsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemDemandItemsTrnInvItemDemandItemsIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvItemDemandItemsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvItemDemandItemsEventGetApiArg = void;
export type CreateTrnInvItemDemandItemstrnInvItemDemandItemsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemDemandItemstrnInvItemDemandItemsEventPostApiArg = {
  trnInvItemDemandItemsInsert: TrnInvItemDemandItemsInsert;
};
export type UpdateTrnInvItemDemandItemstrnInvItemDemandItemsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemDemandItemstrnInvItemDemandItemsEventIdPutApiArg = {
  id: number;
  trnInvItemDemandItemsUpdate: TrnInvItemDemandItemsUpdate;
};
export type DeleteTrnInvItemDemandItemstrnInvItemDemandItemsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemDemandItemstrnInvItemDemandItemsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemDemandItemstrnInvItemDemandItemsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemDemandItemstrnInvItemDemandItemsEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvItemDemandWorkflowGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemDemandWorkflowGetApiArg = void;
export type CreateTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowPostApiArg = {
  trnInvItemDemandWorkflowInsert: TrnInvItemDemandWorkflowInsert;
};
export type UpdateTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdPutApiArg =
  {
    id: number;
    trnInvItemDemandWorkflowUpdate: TrnInvItemDemandWorkflowUpdate;
  };
export type DeleteTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvItemDemandWorkflowEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvItemDemandWorkflowEventGetApiArg = void;
export type CreateTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventPostApiArg =
  {
    trnInvItemDemandWorkflowInsert: TrnInvItemDemandWorkflowInsert;
  };
export type UpdateTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdPutApiArg =
  {
    id: number;
    trnInvItemDemandWorkflowUpdate: TrnInvItemDemandWorkflowUpdate;
  };
export type DeleteTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllTrnInvItemTransferGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemTransferGetApiArg = void;
export type CreateTrnInvItemTransferTrnInvItemTransferPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemTransferTrnInvItemTransferPostApiArg = {
  trnInvItemTransferInsert: TrnInvItemTransferInsert;
};
export type UpdateTrnInvItemTransferTrnInvItemTransferIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemTransferTrnInvItemTransferIdPutApiArg = {
  id: number;
  trnInvItemTransferUpdate: TrnInvItemTransferUpdate;
};
export type DeleteTrnInvItemTransferTrnInvItemTransferIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemTransferTrnInvItemTransferIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvItemTransferTrnInvItemTransferIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemTransferTrnInvItemTransferIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvItemTransferEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvItemTransferEventGetApiArg = void;
export type CreateTrnInvItemTransfertrnInvItemTransferEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemTransfertrnInvItemTransferEventPostApiArg = {
  trnInvItemTransferInsert: TrnInvItemTransferInsert;
};
export type UpdateTrnInvItemTransfertrnInvItemTransferEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemTransfertrnInvItemTransferEventIdPutApiArg = {
  id: number;
  trnInvItemTransferUpdate: TrnInvItemTransferUpdate;
};
export type DeleteTrnInvItemTransfertrnInvItemTransferEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemTransfertrnInvItemTransferEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvItemTransfertrnInvItemTransferEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemTransfertrnInvItemTransferEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvItemTransferDtlGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvItemTransferDtlGetApiArg = void;
export type CreateTrnInvItemTransferDtlTrnInvItemTransferDtlPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemTransferDtlTrnInvItemTransferDtlPostApiArg = {
  trnInvItemTransferDtlInsert: TrnInvItemTransferDtlInsert;
};
export type UpdateTrnInvItemTransferDtlTrnInvItemTransferDtlIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemTransferDtlTrnInvItemTransferDtlIdPutApiArg = {
  id: number;
  trnInvItemTransferDtlUpdate: TrnInvItemTransferDtlUpdate;
};
export type DeleteTrnInvItemTransferDtlTrnInvItemTransferDtlIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemTransferDtlTrnInvItemTransferDtlIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvItemTransferDtlTrnInvItemTransferDtlIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemTransferDtlTrnInvItemTransferDtlIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvItemTransferDtlEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvItemTransferDtlEventGetApiArg = void;
export type CreateTrnInvItemTransferDtltrnInvItemTransferDtlEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvItemTransferDtltrnInvItemTransferDtlEventPostApiArg = {
  trnInvItemTransferDtlInsert: TrnInvItemTransferDtlInsert;
};
export type UpdateTrnInvItemTransferDtltrnInvItemTransferDtlEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvItemTransferDtltrnInvItemTransferDtlEventIdPutApiArg = {
  id: number;
  trnInvItemTransferDtlUpdate: TrnInvItemTransferDtlUpdate;
};
export type DeleteTrnInvItemTransferDtltrnInvItemTransferDtlEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvItemTransferDtltrnInvItemTransferDtlEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvItemTransferDtltrnInvItemTransferDtlEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvItemTransferDtltrnInvItemTransferDtlEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvLogisticsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvLogisticsGetApiArg = void;
export type CreateTrnInvLogisticsTrnInvLogisticsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvLogisticsTrnInvLogisticsPostApiArg = {
  trnInvLogisticsInsert: TrnInvLogisticsInsert;
};
export type UpdateTrnInvLogisticsTrnInvLogisticsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvLogisticsTrnInvLogisticsIdPutApiArg = {
  id: number;
  trnInvLogisticsUpdate: TrnInvLogisticsUpdate;
};
export type DeleteTrnInvLogisticsTrnInvLogisticsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvLogisticsTrnInvLogisticsIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvLogisticsTrnInvLogisticsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvLogisticsTrnInvLogisticsIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvLogisticsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvLogisticsEventGetApiArg = void;
export type CreateTrnInvLogisticstrnInvLogisticsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvLogisticstrnInvLogisticsEventPostApiArg = {
  trnInvLogisticsInsert: TrnInvLogisticsInsert;
};
export type UpdateTrnInvLogisticstrnInvLogisticsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvLogisticstrnInvLogisticsEventIdPutApiArg = {
  id: number;
  trnInvLogisticsUpdate: TrnInvLogisticsUpdate;
};
export type DeleteTrnInvLogisticstrnInvLogisticsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvLogisticstrnInvLogisticsEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvLogisticstrnInvLogisticsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvLogisticstrnInvLogisticsEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvLogisticsDtlGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvLogisticsDtlGetApiArg = void;
export type CreateTrnInvLogisticsDtlTrnInvLogisticsDtlPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvLogisticsDtlTrnInvLogisticsDtlPostApiArg = {
  trnInvLogisticsDtlInsert: TrnInvLogisticsDtlInsert;
};
export type UpdateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPutApiArg = {
  id: number;
  trnInvLogisticsDtlUpdate: TrnInvLogisticsDtlUpdate;
};
export type DeleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvLogisticsDtlTrnInvLogisticsDtlIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvLogisticsDtlTrnInvLogisticsDtlIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvLogisticsDtlEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvLogisticsDtlEventGetApiArg = void;
export type CreateTrnInvLogisticsDtltrnInvLogisticsDtlEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvLogisticsDtltrnInvLogisticsDtlEventPostApiArg = {
  trnInvLogisticsDtlInsert: TrnInvLogisticsDtlInsert;
};
export type UpdateTrnInvLogisticsDtltrnInvLogisticsDtlEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvLogisticsDtltrnInvLogisticsDtlEventIdPutApiArg = {
  id: number;
  trnInvLogisticsDtlUpdate: TrnInvLogisticsDtlUpdate;
};
export type DeleteTrnInvLogisticsDtltrnInvLogisticsDtlEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvLogisticsDtltrnInvLogisticsDtlEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvLogisticsDtltrnInvLogisticsDtlEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvLogisticsDtltrnInvLogisticsDtlEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvLogisticsWorkflowGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvLogisticsWorkflowGetApiArg = void;
export type CreateTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowPostApiArg = {
  trnInvLogisticsWorkflowInsert: TrnInvLogisticsWorkflowInsert;
};
export type UpdateTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdPutApiArg = {
  id: number;
  trnInvLogisticsWorkflowUpdate: TrnInvLogisticsWorkflowUpdate;
};
export type DeleteTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvLogisticsWorkflowEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvLogisticsWorkflowEventGetApiArg = void;
export type CreateTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventPostApiArg =
  {
    trnInvLogisticsWorkflowInsert: TrnInvLogisticsWorkflowInsert;
  };
export type UpdateTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdPutApiArg =
  {
    id: number;
    trnInvLogisticsWorkflowUpdate: TrnInvLogisticsWorkflowUpdate;
  };
export type DeleteTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllTrnInvPurchaseGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvPurchaseGetApiArg = void;
export type CreateTrnInvPurchaseTrnInvPurchasePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseTrnInvPurchasePostApiArg = {
  trnInvPurchaseInsert: TrnInvPurchaseInsert;
};
export type UpdateTrnInvPurchaseTrnInvPurchaseIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseTrnInvPurchaseIdPutApiArg = {
  id: number;
  trnInvPurchaseUpdate: TrnInvPurchaseUpdate;
};
export type DeleteTrnInvPurchaseTrnInvPurchaseIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseTrnInvPurchaseIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvPurchaseTrnInvPurchaseIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseTrnInvPurchaseIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvPurchaseEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvPurchaseEventGetApiArg = void;
export type CreateTrnInvPurchasetrnInvPurchaseEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchasetrnInvPurchaseEventPostApiArg = {
  trnInvPurchaseInsert: TrnInvPurchaseInsert;
};
export type UpdateTrnInvPurchasetrnInvPurchaseEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchasetrnInvPurchaseEventIdPutApiArg = {
  id: number;
  trnInvPurchaseUpdate: TrnInvPurchaseUpdate;
};
export type DeleteTrnInvPurchasetrnInvPurchaseEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchasetrnInvPurchaseEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvPurchasetrnInvPurchaseEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchasetrnInvPurchaseEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvPurchaseDocumentGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvPurchaseDocumentGetApiArg = void;
export type CreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentPostApiArg = {
  trnInvPurchaseDocumentInsert: TrnInvPurchaseDocumentInsert;
};
export type UpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdPutApiArg = {
  id: number;
  trnInvPurchaseDocumentUpdate: TrnInvPurchaseDocumentUpdate;
};
export type DeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvPurchaseDocumentEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvPurchaseDocumentEventGetApiArg = void;
export type CreateTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventPostApiArg =
  {
    trnInvPurchaseDocumentInsert: TrnInvPurchaseDocumentInsert;
  };
export type UpdateTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdPutApiArg =
  {
    id: number;
    trnInvPurchaseDocumentUpdate: TrnInvPurchaseDocumentUpdate;
  };
export type DeleteTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvPurchaseItemsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvPurchaseItemsGetApiArg = void;
export type CreateTrnInvPurchaseItemsTrnInvPurchaseItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseItemsTrnInvPurchaseItemsPostApiArg = {
  trnInvPurchaseItemsInsert: TrnInvPurchaseItemsInsert;
};
export type UpdateTrnInvPurchaseItemsTrnInvPurchaseItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseItemsTrnInvPurchaseItemsIdPutApiArg = {
  id: number;
  trnInvPurchaseItemsUpdate: TrnInvPurchaseItemsUpdate;
};
export type DeleteTrnInvPurchaseItemsTrnInvPurchaseItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseItemsTrnInvPurchaseItemsIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvPurchaseItemsTrnInvPurchaseItemsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseItemsTrnInvPurchaseItemsIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvPurchaseItemsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvPurchaseItemsEventGetApiArg = void;
export type CreateTrnInvPurchaseItemstrnInvPurchaseItemsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseItemstrnInvPurchaseItemsEventPostApiArg = {
  trnInvPurchaseItemsInsert: TrnInvPurchaseItemsInsert;
};
export type UpdateTrnInvPurchaseItemstrnInvPurchaseItemsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseItemstrnInvPurchaseItemsEventIdPutApiArg = {
  id: number;
  trnInvPurchaseItemsUpdate: TrnInvPurchaseItemsUpdate;
};
export type DeleteTrnInvPurchaseItemstrnInvPurchaseItemsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseItemstrnInvPurchaseItemsEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvPurchaseItemstrnInvPurchaseItemsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseItemstrnInvPurchaseItemsEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnInvPurchaseReqGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnInvPurchaseReqGetApiArg = void;
export type CreateTrnInvPurchaseReqTrnInvPurchaseReqPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseReqTrnInvPurchaseReqPostApiArg = {
  trnInvPurchaseReqInsert: TrnInvPurchaseReqInsert;
};
export type UpdateTrnInvPurchaseReqTrnInvPurchaseReqIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseReqTrnInvPurchaseReqIdPutApiArg = {
  id: number;
  trnInvPurchaseReqUpdate: TrnInvPurchaseReqUpdate;
};
export type DeleteTrnInvPurchaseReqTrnInvPurchaseReqIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseReqTrnInvPurchaseReqIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvPurchaseReqTrnInvPurchaseReqIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseReqTrnInvPurchaseReqIdGetApiArg = {
  id: number;
};
export type GetAlltrnInvPurchaseReqEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnInvPurchaseReqEventGetApiArg = void;
export type CreateTrnInvPurchaseReqtrnInvPurchaseReqEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnInvPurchaseReqtrnInvPurchaseReqEventPostApiArg = {
  trnInvPurchaseReqInsert: TrnInvPurchaseReqInsert;
};
export type UpdateTrnInvPurchaseReqtrnInvPurchaseReqEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnInvPurchaseReqtrnInvPurchaseReqEventIdPutApiArg = {
  id: number;
  trnInvPurchaseReqUpdate: TrnInvPurchaseReqUpdate;
};
export type DeleteTrnInvPurchaseReqtrnInvPurchaseReqEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnInvPurchaseReqtrnInvPurchaseReqEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnInvPurchaseReqtrnInvPurchaseReqEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnInvPurchaseReqtrnInvPurchaseReqEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnProductivityGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnProductivityGetApiArg = void;
export type CreateTrnProductivityTrnProductivityPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnProductivityTrnProductivityPostApiArg = {
  trnProductivityInsert: TrnProductivityInsert;
};
export type UpdateTrnProductivityTrnProductivityIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnProductivityTrnProductivityIdPutApiArg = {
  id: number;
  trnProductivityUpdate: TrnProductivityUpdate;
};
export type DeleteTrnProductivityTrnProductivityIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnProductivityTrnProductivityIdDeleteApiArg = {
  id: number;
};
export type GetTrnProductivityTrnProductivityIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnProductivityTrnProductivityIdGetApiArg = {
  id: number;
};
export type GetAlltrnProductivityEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnProductivityEventGetApiArg = void;
export type CreateTrnProductivitytrnProductivityEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnProductivitytrnProductivityEventPostApiArg = {
  trnProductivityInsert: TrnProductivityInsert;
};
export type UpdateTrnProductivitytrnProductivityEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnProductivitytrnProductivityEventIdPutApiArg = {
  id: number;
  trnProductivityUpdate: TrnProductivityUpdate;
};
export type DeleteTrnProductivitytrnProductivityEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnProductivitytrnProductivityEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnProductivitytrnProductivityEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnProductivitytrnProductivityEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnProductivityAttributeGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnProductivityAttributeGetApiArg = void;
export type CreateTrnProductivityAttributeTrnProductivityAttributePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnProductivityAttributeTrnProductivityAttributePostApiArg = {
  trnProductivityAttributeInsert: TrnProductivityAttributeInsert;
};
export type UpdateTrnProductivityAttributeTrnProductivityAttributeIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnProductivityAttributeTrnProductivityAttributeIdPutApiArg =
  {
    id: number;
    trnProductivityAttributeUpdate: TrnProductivityAttributeUpdate;
  };
export type DeleteTrnProductivityAttributeTrnProductivityAttributeIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnProductivityAttributeTrnProductivityAttributeIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnProductivityAttributeTrnProductivityAttributeIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnProductivityAttributeTrnProductivityAttributeIdGetApiArg = {
  id: number;
};
export type GetAlltrnProductivityAttributeEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnProductivityAttributeEventGetApiArg = void;
export type CreateTrnProductivityAttributetrnProductivityAttributeEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnProductivityAttributetrnProductivityAttributeEventPostApiArg =
  {
    trnProductivityAttributeInsert: TrnProductivityAttributeInsert;
  };
export type UpdateTrnProductivityAttributetrnProductivityAttributeEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnProductivityAttributetrnProductivityAttributeEventIdPutApiArg =
  {
    id: number;
    trnProductivityAttributeUpdate: TrnProductivityAttributeUpdate;
  };
export type DeleteTrnProductivityAttributetrnProductivityAttributeEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnProductivityAttributetrnProductivityAttributeEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnProductivityAttributetrnProductivityAttributeEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnProductivityAttributetrnProductivityAttributeEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllTrnPurchaseorderWorkflowGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseorderWorkflowGetApiArg = void;
export type CreateTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowPostApiArg = {
  trnPurchaseorderWorkflowInsert: TrnPurchaseorderWorkflowInsert;
};
export type UpdateTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdPutApiArg =
  {
    id: number;
    trnPurchaseorderWorkflowUpdate: TrnPurchaseorderWorkflowUpdate;
  };
export type DeleteTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdGetApiArg = {
  id: number;
};
export type GetAlltrnPurchaseorderWorkflowEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnPurchaseorderWorkflowEventGetApiArg = void;
export type CreateTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventPostApiArg =
  {
    trnPurchaseorderWorkflowInsert: TrnPurchaseorderWorkflowInsert;
  };
export type UpdateTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdPutApiArg =
  {
    id: number;
    trnPurchaseorderWorkflowUpdate: TrnPurchaseorderWorkflowUpdate;
  };
export type DeleteTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllTrnPurchaseAttributesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseAttributesGetApiArg = void;
export type CreateTrnPurchaseAttributesTrnPurchaseAttributesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseAttributesTrnPurchaseAttributesPostApiArg = {
  trnPurchaseAttributesInsert: TrnPurchaseAttributesInsert;
};
export type UpdateTrnPurchaseAttributesTrnPurchaseAttributesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseAttributesTrnPurchaseAttributesIdPutApiArg = {
  id: number;
  trnPurchaseAttributesUpdate: TrnPurchaseAttributesUpdate;
};
export type DeleteTrnPurchaseAttributesTrnPurchaseAttributesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseAttributesTrnPurchaseAttributesIdDeleteApiArg = {
  id: number;
};
export type GetTrnPurchaseAttributesTrnPurchaseAttributesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseAttributesTrnPurchaseAttributesIdGetApiArg = {
  id: number;
};
export type GetAlltrnPurchaseAttributesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnPurchaseAttributesEventGetApiArg = void;
export type CreateTrnPurchaseAttributestrnPurchaseAttributesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseAttributestrnPurchaseAttributesEventPostApiArg = {
  trnPurchaseAttributesInsert: TrnPurchaseAttributesInsert;
};
export type UpdateTrnPurchaseAttributestrnPurchaseAttributesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseAttributestrnPurchaseAttributesEventIdPutApiArg = {
  id: number;
  trnPurchaseAttributesUpdate: TrnPurchaseAttributesUpdate;
};
export type DeleteTrnPurchaseAttributestrnPurchaseAttributesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseAttributestrnPurchaseAttributesEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnPurchaseAttributestrnPurchaseAttributesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseAttributestrnPurchaseAttributesEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnPurchaseOrderGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseOrderGetApiArg = void;
export type CreateTrnPurchaseOrderTrnPurchaseOrderPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseOrderTrnPurchaseOrderPostApiArg = {
  trnPurchaseOrderInsert: TrnPurchaseOrderInsert;
};
export type UpdateTrnPurchaseOrderTrnPurchaseOrderIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseOrderTrnPurchaseOrderIdPutApiArg = {
  id: number;
  trnPurchaseOrderUpdate: TrnPurchaseOrderUpdate;
};
export type DeleteTrnPurchaseOrderTrnPurchaseOrderIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseOrderTrnPurchaseOrderIdDeleteApiArg = {
  id: number;
};
export type GetTrnPurchaseOrderTrnPurchaseOrderIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseOrderTrnPurchaseOrderIdGetApiArg = {
  id: number;
};
export type GetAlltrnPurchaseOrderEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnPurchaseOrderEventGetApiArg = void;
export type CreateTrnPurchaseOrdertrnPurchaseOrderEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseOrdertrnPurchaseOrderEventPostApiArg = {
  trnPurchaseOrderInsert: TrnPurchaseOrderInsert;
};
export type UpdateTrnPurchaseOrdertrnPurchaseOrderEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseOrdertrnPurchaseOrderEventIdPutApiArg = {
  id: number;
  trnPurchaseOrderUpdate: TrnPurchaseOrderUpdate;
};
export type DeleteTrnPurchaseOrdertrnPurchaseOrderEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseOrdertrnPurchaseOrderEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnPurchaseOrdertrnPurchaseOrderEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseOrdertrnPurchaseOrderEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnPurchaseOrderAttributesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseOrderAttributesGetApiArg = void;
export type CreateTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesPostApiArg =
  {
    trnPurchaseOrderAttributesInsert: TrnPurchaseOrderAttributesInsert;
  };
export type UpdateTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdPutApiArg =
  {
    id: number;
    trnPurchaseOrderAttributesUpdate: TrnPurchaseOrderAttributesUpdate;
  };
export type DeleteTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdGetApiArg =
  {
    id: number;
  };
export type GetAlltrnPurchaseOrderAttributesEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnPurchaseOrderAttributesEventGetApiArg = void;
export type CreateTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventPostApiArg =
  {
    trnPurchaseOrderAttributesInsert: TrnPurchaseOrderAttributesInsert;
  };
export type UpdateTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdPutApiArg =
  {
    id: number;
    trnPurchaseOrderAttributesUpdate: TrnPurchaseOrderAttributesUpdate;
  };
export type DeleteTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllTrnPurchaseOrderItemsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseOrderItemsGetApiArg = void;
export type CreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsPostApiArg = {
  trnPurchaseOrderItemsInsert: TrnPurchaseOrderItemsInsert;
};
export type UpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdPutApiArg = {
  id: number;
  trnPurchaseOrderItemsUpdate: TrnPurchaseOrderItemsUpdate;
};
export type DeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdDeleteApiArg = {
  id: number;
};
export type GetTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdGetApiArg = {
  id: number;
};
export type GetAlltrnPurchaseOrderItemsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnPurchaseOrderItemsEventGetApiArg = void;
export type CreateTrnPurchaseOrderItemstrnPurchaseOrderItemsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseOrderItemstrnPurchaseOrderItemsEventPostApiArg = {
  trnPurchaseOrderItemsInsert: TrnPurchaseOrderItemsInsert;
};
export type UpdateTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdPutApiArg = {
  id: number;
  trnPurchaseOrderItemsUpdate: TrnPurchaseOrderItemsUpdate;
};
export type DeleteTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnPurchaseOrderTermsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseOrderTermsGetApiArg = void;
export type CreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsPostApiArg = {
  trnPurchaseOrderTermsInsert: TrnPurchaseOrderTermsInsert;
};
export type UpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPutApiArg = {
  id: number;
  trnPurchaseOrderTermsUpdate: TrnPurchaseOrderTermsUpdate;
};
export type DeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDeleteApiArg = {
  id: number;
};
export type GetTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGetApiArg = {
  id: number;
};
export type GetAlltrnPurchaseOrderTermsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnPurchaseOrderTermsEventGetApiArg = void;
export type CreateTrnPurchaseOrderTermstrnPurchaseOrderTermsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseOrderTermstrnPurchaseOrderTermsEventPostApiArg = {
  trnPurchaseOrderTermsInsert: TrnPurchaseOrderTermsInsert;
};
export type UpdateTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdPutApiArg = {
  id: number;
  trnPurchaseOrderTermsUpdate: TrnPurchaseOrderTermsUpdate;
};
export type DeleteTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnPurchaseReqItemsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseReqItemsGetApiArg = void;
export type CreateTrnPurchaseReqItemsTrnPurchaseReqItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseReqItemsTrnPurchaseReqItemsPostApiArg = {
  trnPurchaseReqItemsInsert: TrnPurchaseReqItemsInsert;
};
export type UpdateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPutApiArg = {
  id: number;
  trnPurchaseReqItemsUpdate: TrnPurchaseReqItemsUpdate;
};
export type DeleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDeleteApiArg = {
  id: number;
};
export type GetTrnPurchaseReqItemsTrnPurchaseReqItemsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseReqItemsTrnPurchaseReqItemsIdGetApiArg = {
  id: number;
};
export type GetAlltrnPurchaseReqItemsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnPurchaseReqItemsEventGetApiArg = void;
export type CreateTrnPurchaseReqItemstrnPurchaseReqItemsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseReqItemstrnPurchaseReqItemsEventPostApiArg = {
  trnPurchaseReqItemsInsert: TrnPurchaseReqItemsInsert;
};
export type UpdateTrnPurchaseReqItemstrnPurchaseReqItemsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseReqItemstrnPurchaseReqItemsEventIdPutApiArg = {
  id: number;
  trnPurchaseReqItemsUpdate: TrnPurchaseReqItemsUpdate;
};
export type DeleteTrnPurchaseReqItemstrnPurchaseReqItemsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseReqItemstrnPurchaseReqItemsEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnPurchaseReqItemstrnPurchaseReqItemsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseReqItemstrnPurchaseReqItemsEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnPurchaseReqWorkflowGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseReqWorkflowGetApiArg = void;
export type CreateTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowPostApiArg = {
  trnPurchaseReqWorkflowInsert: TrnPurchaseReqWorkflowInsert;
};
export type UpdateTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdPutApiArg = {
  id: number;
  trnPurchaseReqWorkflowUpdate: TrnPurchaseReqWorkflowUpdate;
};
export type DeleteTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdDeleteApiArg = {
  id: number;
};
export type GetTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdGetApiArg = {
  id: number;
};
export type GetAlltrnPurchaseReqWorkflowEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnPurchaseReqWorkflowEventGetApiArg = void;
export type CreateTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventPostApiArg =
  {
    trnPurchaseReqWorkflowInsert: TrnPurchaseReqWorkflowInsert;
  };
export type UpdateTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdPutApiArg =
  {
    id: number;
    trnPurchaseReqWorkflowUpdate: TrnPurchaseReqWorkflowUpdate;
  };
export type DeleteTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnPurchaseWorkflowGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnPurchaseWorkflowGetApiArg = void;
export type CreateTrnPurchaseWorkflowTrnPurchaseWorkflowPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseWorkflowTrnPurchaseWorkflowPostApiArg = {
  trnPurchaseWorkflowInsert: TrnPurchaseWorkflowInsert;
};
export type UpdateTrnPurchaseWorkflowTrnPurchaseWorkflowIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseWorkflowTrnPurchaseWorkflowIdPutApiArg = {
  id: number;
  trnPurchaseWorkflowUpdate: TrnPurchaseWorkflowUpdate;
};
export type DeleteTrnPurchaseWorkflowTrnPurchaseWorkflowIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseWorkflowTrnPurchaseWorkflowIdDeleteApiArg = {
  id: number;
};
export type GetTrnPurchaseWorkflowTrnPurchaseWorkflowIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseWorkflowTrnPurchaseWorkflowIdGetApiArg = {
  id: number;
};
export type GetAlltrnPurchaseWorkflowEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnPurchaseWorkflowEventGetApiArg = void;
export type CreateTrnPurchaseWorkflowtrnPurchaseWorkflowEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnPurchaseWorkflowtrnPurchaseWorkflowEventPostApiArg = {
  trnPurchaseWorkflowInsert: TrnPurchaseWorkflowInsert;
};
export type UpdateTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdPutApiArg = {
  id: number;
  trnPurchaseWorkflowUpdate: TrnPurchaseWorkflowUpdate;
};
export type DeleteTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnRoutineServiceCheckGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnRoutineServiceCheckGetApiArg = void;
export type CreateTrnRoutineServiceCheckTrnRoutineServiceCheckPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnRoutineServiceCheckTrnRoutineServiceCheckPostApiArg = {
  trnRoutineServiceCheckInsert: TrnRoutineServiceCheckInsert;
};
export type UpdateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPutApiArg = {
  id: number;
  trnRoutineServiceCheckUpdate: TrnRoutineServiceCheckUpdate;
};
export type DeleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDeleteApiArg = {
  id: number;
};
export type GetTrnRoutineServiceCheckTrnRoutineServiceCheckIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnRoutineServiceCheckTrnRoutineServiceCheckIdGetApiArg = {
  id: number;
};
export type GetAlltrnRoutineServiceCheckEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnRoutineServiceCheckEventGetApiArg = void;
export type CreateTrnRoutineServiceChecktrnRoutineServiceCheckEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnRoutineServiceChecktrnRoutineServiceCheckEventPostApiArg =
  {
    trnRoutineServiceCheckInsert: TrnRoutineServiceCheckInsert;
  };
export type UpdateTrnRoutineServiceChecktrnRoutineServiceCheckEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnRoutineServiceChecktrnRoutineServiceCheckEventIdPutApiArg =
  {
    id: number;
    trnRoutineServiceCheckUpdate: TrnRoutineServiceCheckUpdate;
  };
export type DeleteTrnRoutineServiceChecktrnRoutineServiceCheckEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnRoutineServiceChecktrnRoutineServiceCheckEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnRoutineServiceChecktrnRoutineServiceCheckEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnRoutineServiceChecktrnRoutineServiceCheckEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnShiftFuelOpeningGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnShiftFuelOpeningGetApiArg = void;
export type CreateTrnShiftFuelOpeningTrnShiftFuelOpeningPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnShiftFuelOpeningTrnShiftFuelOpeningPostApiArg = {
  trnShiftFuelOpeningInsert: TrnShiftFuelOpeningInsert;
};
export type UpdateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPutApiArg = {
  id: number;
  trnShiftFuelOpeningUpdate: TrnShiftFuelOpeningUpdate;
};
export type DeleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDeleteApiArg = {
  id: number;
};
export type GetTrnShiftFuelOpeningTrnShiftFuelOpeningIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnShiftFuelOpeningTrnShiftFuelOpeningIdGetApiArg = {
  id: number;
};
export type GetAlltrnShiftFuelOpeningEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnShiftFuelOpeningEventGetApiArg = void;
export type CreateTrnShiftFuelOpeningtrnShiftFuelOpeningEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnShiftFuelOpeningtrnShiftFuelOpeningEventPostApiArg = {
  trnShiftFuelOpeningInsert: TrnShiftFuelOpeningInsert;
};
export type UpdateTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdPutApiArg = {
  id: number;
  trnShiftFuelOpeningUpdate: TrnShiftFuelOpeningUpdate;
};
export type DeleteTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnTicketGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnTicketGetApiArg = void;
export type CreateTrnTicketTrnTicketPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnTicketTrnTicketPostApiArg = {
  trnTicketInsert: TrnTicketInsert;
};
export type UpdateTrnTicketTrnTicketIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnTicketTrnTicketIdPutApiArg = {
  id: number;
  trnTicketUpdate: TrnTicketUpdate;
};
export type DeleteTrnTicketTrnTicketIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnTicketTrnTicketIdDeleteApiArg = {
  id: number;
};
export type GetTrnTicketTrnTicketIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnTicketTrnTicketIdGetApiArg = {
  id: number;
};
export type GetAlltrnTicketEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnTicketEventGetApiArg = void;
export type CreateTrnTickettrnTicketEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnTickettrnTicketEventPostApiArg = {
  trnTicketInsert: TrnTicketInsert;
};
export type UpdateTrnTickettrnTicketEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnTickettrnTicketEventIdPutApiArg = {
  id: number;
  trnTicketUpdate: TrnTicketUpdate;
};
export type DeleteTrnTickettrnTicketEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnTickettrnTicketEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnTickettrnTicketEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnTickettrnTicketEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnTicketAttributeGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnTicketAttributeGetApiArg = void;
export type CreateTrnTicketAttributeTrnTicketAttributePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnTicketAttributeTrnTicketAttributePostApiArg = {
  trnTicketAttributeInsert: TrnTicketAttributeInsert;
};
export type UpdateTrnTicketAttributeTrnTicketAttributeIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnTicketAttributeTrnTicketAttributeIdPutApiArg = {
  id: number;
  trnTicketAttributeUpdate: TrnTicketAttributeUpdate;
};
export type DeleteTrnTicketAttributeTrnTicketAttributeIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnTicketAttributeTrnTicketAttributeIdDeleteApiArg = {
  id: number;
};
export type GetTrnTicketAttributeTrnTicketAttributeIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnTicketAttributeTrnTicketAttributeIdGetApiArg = {
  id: number;
};
export type GetAlltrnTicketAttributeEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnTicketAttributeEventGetApiArg = void;
export type CreateTrnTicketAttributetrnTicketAttributeEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnTicketAttributetrnTicketAttributeEventPostApiArg = {
  trnTicketAttributeInsert: TrnTicketAttributeInsert;
};
export type UpdateTrnTicketAttributetrnTicketAttributeEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnTicketAttributetrnTicketAttributeEventIdPutApiArg = {
  id: number;
  trnTicketAttributeUpdate: TrnTicketAttributeUpdate;
};
export type DeleteTrnTicketAttributetrnTicketAttributeEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnTicketAttributetrnTicketAttributeEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnTicketAttributetrnTicketAttributeEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnTicketAttributetrnTicketAttributeEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnTicketDocumentsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnTicketDocumentsGetApiArg = void;
export type CreateTrnTicketDocumentsTrnTicketDocumentsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnTicketDocumentsTrnTicketDocumentsPostApiArg = {
  trnTicketDocumentsInsert: TrnTicketDocumentsInsert;
};
export type UpdateTrnTicketDocumentsTrnTicketDocumentsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnTicketDocumentsTrnTicketDocumentsIdPutApiArg = {
  id: number;
  trnTicketDocumentsUpdate: TrnTicketDocumentsUpdate;
};
export type DeleteTrnTicketDocumentsTrnTicketDocumentsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnTicketDocumentsTrnTicketDocumentsIdDeleteApiArg = {
  id: number;
};
export type GetTrnTicketDocumentsTrnTicketDocumentsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnTicketDocumentsTrnTicketDocumentsIdGetApiArg = {
  id: number;
};
export type GetAlltrnTicketDocumentsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnTicketDocumentsEventGetApiArg = void;
export type CreateTrnTicketDocumentstrnTicketDocumentsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnTicketDocumentstrnTicketDocumentsEventPostApiArg = {
  trnTicketDocumentsInsert: TrnTicketDocumentsInsert;
};
export type UpdateTrnTicketDocumentstrnTicketDocumentsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnTicketDocumentstrnTicketDocumentsEventIdPutApiArg = {
  id: number;
  trnTicketDocumentsUpdate: TrnTicketDocumentsUpdate;
};
export type DeleteTrnTicketDocumentstrnTicketDocumentsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnTicketDocumentstrnTicketDocumentsEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnTicketDocumentstrnTicketDocumentsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnTicketDocumentstrnTicketDocumentsEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnTicketWorkflowGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnTicketWorkflowGetApiArg = void;
export type CreateTrnTicketWorkflowTrnTicketWorkflowPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnTicketWorkflowTrnTicketWorkflowPostApiArg = {
  trnTicketWorkflowInsert: TrnTicketWorkflowInsert;
};
export type UpdateTrnTicketWorkflowTrnTicketWorkflowIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnTicketWorkflowTrnTicketWorkflowIdPutApiArg = {
  id: number;
  trnTicketWorkflowUpdate: TrnTicketWorkflowUpdate;
};
export type DeleteTrnTicketWorkflowTrnTicketWorkflowIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnTicketWorkflowTrnTicketWorkflowIdDeleteApiArg = {
  id: number;
};
export type GetTrnTicketWorkflowTrnTicketWorkflowIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnTicketWorkflowTrnTicketWorkflowIdGetApiArg = {
  id: number;
};
export type GetAlltrnTicketWorkflowEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnTicketWorkflowEventGetApiArg = void;
export type CreateTrnTicketWorkflowtrnTicketWorkflowEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnTicketWorkflowtrnTicketWorkflowEventPostApiArg = {
  trnTicketWorkflowInsert: TrnTicketWorkflowInsert;
};
export type UpdateTrnTicketWorkflowtrnTicketWorkflowEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnTicketWorkflowtrnTicketWorkflowEventIdPutApiArg = {
  id: number;
  trnTicketWorkflowUpdate: TrnTicketWorkflowUpdate;
};
export type DeleteTrnTicketWorkflowtrnTicketWorkflowEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnTicketWorkflowtrnTicketWorkflowEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnTicketWorkflowtrnTicketWorkflowEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnTicketWorkflowtrnTicketWorkflowEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnWarehouseIndentGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnWarehouseIndentGetApiArg = void;
export type CreateTrnWarehouseIndentTrnWarehouseIndentPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnWarehouseIndentTrnWarehouseIndentPostApiArg = {
  trnWarehouseIndentInsert: TrnWarehouseIndentInsert;
};
export type UpdateTrnWarehouseIndentTrnWarehouseIndentIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnWarehouseIndentTrnWarehouseIndentIdPutApiArg = {
  id: number;
  trnWarehouseIndentUpdate: TrnWarehouseIndentUpdate;
};
export type DeleteTrnWarehouseIndentTrnWarehouseIndentIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnWarehouseIndentTrnWarehouseIndentIdDeleteApiArg = {
  id: number;
};
export type GetTrnWarehouseIndentTrnWarehouseIndentIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnWarehouseIndentTrnWarehouseIndentIdGetApiArg = {
  id: number;
};
export type GetAlltrnWarehouseIndentEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnWarehouseIndentEventGetApiArg = void;
export type CreateTrnWarehouseIndenttrnWarehouseIndentEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnWarehouseIndenttrnWarehouseIndentEventPostApiArg = {
  trnWarehouseIndentInsert: TrnWarehouseIndentInsert;
};
export type UpdateTrnWarehouseIndenttrnWarehouseIndentEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnWarehouseIndenttrnWarehouseIndentEventIdPutApiArg = {
  id: number;
  trnWarehouseIndentUpdate: TrnWarehouseIndentUpdate;
};
export type DeleteTrnWarehouseIndenttrnWarehouseIndentEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnWarehouseIndenttrnWarehouseIndentEventIdDeleteApiArg = {
  id: number;
};
export type GetTrnWarehouseIndenttrnWarehouseIndentEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnWarehouseIndenttrnWarehouseIndentEventIdGetApiArg = {
  id: number;
};
export type GetAllTrnWarehouseIndentAttributeGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnWarehouseIndentAttributeGetApiArg = void;
export type CreateTrnWarehouseIndentAttributeTrnWarehouseIndentAttributePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnWarehouseIndentAttributeTrnWarehouseIndentAttributePostApiArg =
  {
    trnWarehouseIndentAttributeInsert: TrnWarehouseIndentAttributeInsert;
  };
export type UpdateTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdPutApiArg =
  {
    id: number;
    trnWarehouseIndentAttributeUpdate: TrnWarehouseIndentAttributeUpdate;
  };
export type DeleteTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdGetApiArg =
  {
    id: number;
  };
export type GetAlltrnWarehouseIndentAttributeEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnWarehouseIndentAttributeEventGetApiArg = void;
export type CreateTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventPostApiArg =
  {
    trnWarehouseIndentAttributeInsert: TrnWarehouseIndentAttributeInsert;
  };
export type UpdateTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdPutApiArg =
  {
    id: number;
    trnWarehouseIndentAttributeUpdate: TrnWarehouseIndentAttributeUpdate;
  };
export type DeleteTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllTrnWarehouseIndentItemsGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnWarehouseIndentItemsGetApiArg = void;
export type CreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsPostApiArg = {
  trnWarehouseIndentItemsInsert: TrnWarehouseIndentItemsInsert;
};
export type UpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdPutApiArg = {
  id: number;
  trnWarehouseIndentItemsUpdate: TrnWarehouseIndentItemsUpdate;
};
export type DeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdGetApiArg = {
  id: number;
};
export type GetAlltrnWarehouseIndentItemsEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnWarehouseIndentItemsEventGetApiArg = void;
export type CreateTrnWarehouseIndentItemstrnWarehouseIndentItemsEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnWarehouseIndentItemstrnWarehouseIndentItemsEventPostApiArg =
  {
    trnWarehouseIndentItemsInsert: TrnWarehouseIndentItemsInsert;
  };
export type UpdateTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdPutApiArg =
  {
    id: number;
    trnWarehouseIndentItemsUpdate: TrnWarehouseIndentItemsUpdate;
  };
export type DeleteTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdGetApiArg =
  {
    id: number;
  };
export type GetAllTrnWarehouseIndentWorkflowGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllTrnWarehouseIndentWorkflowGetApiArg = void;
export type CreateTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowPostApiArg =
  {
    trnWarehouseIndentWorkflowInsert: TrnWarehouseIndentWorkflowInsert;
  };
export type UpdateTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdPutApiArg =
  {
    id: number;
    trnWarehouseIndentWorkflowUpdate: TrnWarehouseIndentWorkflowUpdate;
  };
export type DeleteTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdGetApiArg =
  {
    id: number;
  };
export type GetAlltrnWarehouseIndentWorkflowEventGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAlltrnWarehouseIndentWorkflowEventGetApiArg = void;
export type CreateTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventPostApiArg =
  {
    trnWarehouseIndentWorkflowInsert: TrnWarehouseIndentWorkflowInsert;
  };
export type UpdateTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdPutApiArg =
  {
    id: number;
    trnWarehouseIndentWorkflowUpdate: TrnWarehouseIndentWorkflowUpdate;
  };
export type DeleteTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdDeleteApiArg =
  {
    id: number;
  };
export type GetTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdGetApiArg =
  {
    id: number;
  };
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type AssetMatrixInsert = {
  tenant_id: string;
  matrix_id: string;
  serial_number: number;
  asset_type: number;
  party_id: number;
  model: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  matrix_id: string;
  serial_number: number;
  asset_type: number;
  party_id: number;
  model: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  asset_matrix_id: number;
  matrix_name: string;
  document_id: number;
  create_by: string;
  is_deleted: boolean;
  document_name?: string | null;
  document_number?: string | null;
  document_path?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetMatrixDocumentUpdate = {
  tenant_id: string;
  asset_matrix_id: number;
  matrix_name: string;
  document_id: number;
  create_by: string;
  is_deleted: boolean;
  document_name?: string | null;
  document_number?: string | null;
  document_path?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetMatrixSectionInsert = {
  tenant_id: string;
  matrix_id: string;
  section_name: string;
  create_by: string;
  is_deleted: boolean;
  assetmatrix_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetMatrixSectionUpdate = {
  tenant_id: string;
  matrix_id: string;
  section_name: string;
  create_by: string;
  is_deleted: boolean;
  assetmatrix_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetMatrixSubSectionInsert = {
  tenant_id: string;
  matrix_id: string;
  section_id: number;
  section_name: string;
  sub_section_name: string;
  create_by: string;
  is_deleted: boolean;
  assetmatrix_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetMatrixSubSectionUpdate = {
  tenant_id: string;
  matrix_id: string;
  section_id: number;
  section_name: string;
  sub_section_name: string;
  create_by: string;
  is_deleted: boolean;
  assetmatrix_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetServiceCheckListInsert = {
  tenant_id: string;
  assetmatrix_id: number;
  matrix_id: string;
  checksheet_name: number;
  section_name: string;
  sub_section_name: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  assetmatrix_id: number;
  matrix_id: string;
  checksheet_name: number;
  section_name: string;
  sub_section_name: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  assetmatrix_id: number;
  matrix_id: string;
  section_name: string;
  sub_section_name: string;
  service_check_list_id: number;
  item_id: number;
  create_by: string;
  is_deleted: boolean;
  section_id?: number | null;
  sub_section_id?: number | null;
  check_list_name?: string | null;
  item_name?: string | null;
  item_quantity?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type AssetServiceCheckListItemsUpdate = {
  tenant_id: string;
  assetmatrix_id: number;
  matrix_id: string;
  section_name: string;
  sub_section_name: string;
  service_check_list_id: number;
  item_id: number;
  create_by: string;
  is_deleted: boolean;
  section_id?: number | null;
  sub_section_id?: number | null;
  check_list_name?: string | null;
  item_name?: string | null;
  item_quantity?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type FiscalyearInsert = {
  is_deleted: boolean;
  fin_year?: string | null;
  strat_date?: string | null;
  end_date?: string | null;
  deleted_at?: string | null;
};
export type FiscalyearUpdate = {
  is_deleted: boolean;
  fin_year?: string | null;
  strat_date?: string | null;
  end_date?: string | null;
  deleted_at?: string | null;
};
export type GrpWarehouseInsert = {
  tenant_id: string;
  warehouse_name: string;
  warehouse_code: string;
  notes: string;
  address1: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  warehouse_name: string;
  warehouse_code: string;
  notes: string;
  address1: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  item_id: number;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  item_id: number;
  create_by: string;
  is_deleted: boolean;
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
  id: number;
  scrl_code: string;
  is_deleted: boolean;
  scrl_group?: string | null;
  scrl_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type PoplistsUpdate = {
  id: number;
  scrl_code: string;
  is_deleted: boolean;
  scrl_group?: string | null;
  scrl_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type PurchaseOrderTermsInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  term_name?: string | null;
  term_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type PurchaseOrderTermsUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  term_name?: string | null;
  term_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefAstMaterialInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  material_name?: string | null;
  active_flag?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefAstMaterialUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  material_name?: string | null;
  active_flag?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefFuelStationInsert = {
  tenant_id: string;
  serial_number: number;
  fule_station_name: string;
  fule_station_type: string;
  address: string;
  fuel_type: string;
  all_sites_indicator: boolean;
  remarks: string;
  create_by: string;
  is_deleted: boolean;
  site_id?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefFuelStationUpdate = {
  tenant_id: string;
  serial_number: number;
  fule_station_name: string;
  fule_station_type: string;
  address: string;
  fuel_type: string;
  all_sites_indicator: boolean;
  remarks: string;
  create_by: string;
  is_deleted: boolean;
  site_id?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefPartyInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  party_type?: string | null;
  part_name?: string | null;
  common_name?: string | null;
  notes?: string | null;
  active_status?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefPartyUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  party_type?: string | null;
  part_name?: string | null;
  common_name?: string | null;
  notes?: string | null;
  active_status?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefRosterInsert = {
  tenant_id: string;
  serial_number: number;
  roster_name: string;
  no_of_shifts: number;
  shift1_name: string;
  shift1_start_time: string;
  shift1_hours: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  serial_number: number;
  roster_name: string;
  no_of_shifts: number;
  shift1_name: string;
  shift1_start_time: string;
  shift1_hours: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  serial_number: number;
  name: string;
  category_id: number;
  manufacturer_id: number;
  site_id: number;
  purchase_date: string;
  purchase_price: number;
  recived_with_asset: boolean;
  create_by: string;
  is_deleted: boolean;
  manufacturer_name?: string | null;
  site_name?: string | null;
  status?: number | null;
  status_name?: string | null;
  tags?: number | null;
  tags_name?: string | null;
  machine_location?: number | null;
  location_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefSubAssemblyUpdate = {
  tenant_id: string;
  serial_number: number;
  name: string;
  category_id: number;
  manufacturer_id: number;
  site_id: number;
  purchase_date: string;
  purchase_price: number;
  recived_with_asset: boolean;
  create_by: string;
  is_deleted: boolean;
  manufacturer_name?: string | null;
  site_name?: string | null;
  status?: number | null;
  status_name?: string | null;
  tags?: number | null;
  tags_name?: string | null;
  machine_location?: number | null;
  location_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefTaxInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  tax_name?: string | null;
  tax_type?: string | null;
  tax_prct?: number | null;
  activation_date?: string | null;
  active_flag?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefTaxUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  tax_name?: string | null;
  tax_type?: string | null;
  tax_prct?: number | null;
  activation_date?: string | null;
  active_flag?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefVendorInsert = {
  tenant_id: string;
  vendor_name: string;
  vendor_code: string;
  notes: string;
  address_lable: string;
  address_line1: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  vendor_name: string;
  vendor_code: string;
  notes: string;
  address_lable: string;
  address_line1: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  serial_number: number;
  workstation_name: string;
  workstation_code: string;
  create_by: string;
  is_deleted: boolean;
  associated_site?: string | null;
  notes?: string | null;
  active_flag?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type RefWorkstationUpdate = {
  tenant_id: string;
  serial_number: number;
  workstation_name: string;
  workstation_code: string;
  create_by: string;
  is_deleted: boolean;
  associated_site?: string | null;
  notes?: string | null;
  active_flag?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type ResAssetInsert = {
  tenant_id: string;
  assetmatrix_id: number;
  matrix_id: string;
  asset_category: string;
  asset_name: string;
  roster_name: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  assetmatrix_id: number;
  matrix_id: string;
  asset_category: string;
  asset_name: string;
  roster_name: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  current_api_key: string;
  new_api_key: string;
  is_deleted: boolean;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasApiKeyAuditUpdate = {
  tenant_id: string;
  current_api_key: string;
  new_api_key: string;
  is_deleted: boolean;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasAuditTrailsInsert = {
  tenant_id: string;
  entity_id: number;
  entity_type: string;
  action_type: string;
  is_deleted: boolean;
  value?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasAuditTrailsUpdate = {
  tenant_id: string;
  entity_id: number;
  entity_type: string;
  action_type: string;
  is_deleted: boolean;
  value?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasChatsInsert = {
  tenant_id: string;
  thread: number;
  user_id: string;
  message: string;
  attachment: string;
  ip: string;
  is_deleted: boolean;
  receiver_id?: string | null;
  chat_group_id?: number | null;
  group_receiver_id?: string | null;
  extension?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasChatsUpdate = {
  tenant_id: string;
  thread: number;
  user_id: string;
  message: string;
  attachment: string;
  ip: string;
  is_deleted: boolean;
  receiver_id?: string | null;
  chat_group_id?: number | null;
  group_receiver_id?: string | null;
  extension?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasCustomersInsert = {
  uniq_id: string;
  first_name: string;
  pincode: string;
  is_active: boolean;
  is_deleted: boolean;
  tenant_id?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone_number?: string | null;
  street?: string | null;
  city?: string | null;
  state?: string | null;
  zipcode?: string | null;
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
  uniq_id: string;
  first_name: string;
  pincode: string;
  is_active: boolean;
  is_deleted: boolean;
  tenant_id?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone_number?: string | null;
  street?: string | null;
  city?: string | null;
  state?: string | null;
  zipcode?: string | null;
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
  is_deleted: boolean;
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
  is_deleted: boolean;
  tenant_id?: string | null;
  entity_id?: number | null;
  entity_type?: string | null;
  uniq_id?: string | null;
  entity_view?: string | null;
  expire_date?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasFileMetasInsert = {
  tenant_id: string;
  file_name: string;
  upload_name: string;
  file_type: string;
  file_size: number;
  is_deleted: boolean;
  doc_type_id?: number | null;
  thumb_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasFileMetasUpdate = {
  tenant_id: string;
  file_name: string;
  upload_name: string;
  file_type: string;
  file_size: number;
  is_deleted: boolean;
  doc_type_id?: number | null;
  thumb_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasFlexEntityInsert = {
  tenant_id: string;
  entity_id: number;
  flex_field_id: number;
  is_deleted: boolean;
  entity_name?: string | null;
  entity_type?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasFlexEntityUpdate = {
  tenant_id: string;
  entity_id: number;
  flex_field_id: number;
  is_deleted: boolean;
  entity_name?: string | null;
  entity_type?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasFlexFieldsInsert = {
  tenant_id: string;
  is_global: boolean;
  is_active: boolean;
  is_deleted: boolean;
  description?: string | null;
  field_name?: string | null;
  field_type?: string | null;
  flex_feild_details?: string | null;
  entity_applied?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasFlexFieldsUpdate = {
  tenant_id: string;
  is_global: boolean;
  is_active: boolean;
  is_deleted: boolean;
  description?: string | null;
  field_name?: string | null;
  field_type?: string | null;
  flex_feild_details?: string | null;
  entity_applied?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasFlexFieldValuesInsert = {
  tenant_id: string;
  entity_id: number;
  is_deleted: boolean;
  entity_type?: string | null;
  flex_fields?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasFlexFieldValuesUpdate = {
  tenant_id: string;
  entity_id: number;
  is_deleted: boolean;
  entity_type?: string | null;
  flex_fields?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefActionsInsert = {
  module_id: number;
  action_type: string;
  is_active: boolean;
  is_deleted: boolean;
  action_name?: string | null;
  action_display_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefActionsUpdate = {
  module_id: number;
  action_type: string;
  is_active: boolean;
  is_deleted: boolean;
  action_name?: string | null;
  action_display_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefConfigurationsInsert = {
  config_name: string;
  config_value: boolean;
  is_enabled: boolean;
  is_deleted: boolean;
  config_note?: string | null;
  associated_to?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefConfigurationsUpdate = {
  config_name: string;
  config_value: boolean;
  is_enabled: boolean;
  is_deleted: boolean;
  config_note?: string | null;
  associated_to?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefCurrenciesInsert = {
  currency_code: string;
  currency_name: string;
  is_active: boolean;
  effective_start_date: string;
  is_deleted: boolean;
  currency_iso?: string | null;
  effective_end_date?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SaasRefCurrenciesUpdate = {
  currency_code: string;
  currency_name: string;
  is_active: boolean;
  effective_start_date: string;
  is_deleted: boolean;
  currency_iso?: string | null;
  effective_end_date?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SaasRefDocumentsInsert = {
  document_name: string;
  is_enabled: boolean;
  is_deleted: boolean;
  associated_to?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefDocumentsUpdate = {
  document_name: string;
  is_enabled: boolean;
  is_deleted: boolean;
  associated_to?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefFeaturesInsert = {
  feature_name: string;
  is_deleted: boolean;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SaasRefFeaturesUpdate = {
  feature_name: string;
  is_deleted: boolean;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SaasRefModulesInsert = {
  module_display_name: string;
  is_active: boolean;
  is_deleted: boolean;
  module_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefModulesUpdate = {
  module_display_name: string;
  is_active: boolean;
  is_deleted: boolean;
  module_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefRolesInsert = {
  role_name: string;
  is_deleted: boolean;
  role_display_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefRolesUpdate = {
  role_name: string;
  is_deleted: boolean;
  role_display_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefSubscriptionsInsert = {
  subscription_name: string;
  storage_capacity_mb: number;
  user_limit: number;
  has_trial: number;
  trial_duration_days: number;
  extend_trial_flag: number;
  extend_trial_duration_days: number;
  subscription_price: number;
  subscription_month_duration: number;
  is_active: boolean;
  is_default: boolean;
  is_deleted: boolean;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefSubscriptionsUpdate = {
  subscription_name: string;
  storage_capacity_mb: number;
  user_limit: number;
  has_trial: number;
  trial_duration_days: number;
  extend_trial_flag: number;
  extend_trial_duration_days: number;
  subscription_price: number;
  subscription_month_duration: number;
  is_active: boolean;
  is_default: boolean;
  is_deleted: boolean;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefSubscriptionFeaturesInsert = {
  subscription_id: number;
  feature_id: number;
  is_deleted: boolean;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefSubscriptionFeaturesUpdate = {
  subscription_id: number;
  feature_id: number;
  is_deleted: boolean;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefTenantCurrenciesInsert = {
  is_deleted: boolean;
  tenant_id?: string | null;
  currency_id?: number | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefTenantCurrenciesUpdate = {
  is_deleted: boolean;
  tenant_id?: string | null;
  currency_id?: number | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefWorkflowsInsert = {
  is_default: boolean;
  is_enabled: boolean;
  is_deleted: boolean;
  stage_name?: string | null;
  associated_to?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRefWorkflowsUpdate = {
  is_default: boolean;
  is_enabled: boolean;
  is_deleted: boolean;
  stage_name?: string | null;
  associated_to?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRolePermissionInsert = {
  role_id: number;
  module_id: number;
  action_id: number;
  is_deleted: boolean;
  access_type?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasRolePermissionUpdate = {
  role_id: number;
  module_id: number;
  action_id: number;
  is_deleted: boolean;
  access_type?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasTeamsInsert = {
  tenant_id: string;
  status: boolean;
  is_deleted: boolean;
  parent_id?: number | null;
  team_name?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasTeamsUpdate = {
  tenant_id: string;
  status: boolean;
  is_deleted: boolean;
  parent_id?: number | null;
  team_name?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasTenantsInsert = {
  subscription_id: number;
  is_active: boolean;
  is_deleted: boolean;
  name?: string | null;
  website?: string | null;
  logo?: string | null;
  billing_address?: string | null;
  tenant_description?: string | null;
  currency_code?: number | null;
  api_key?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasTenantsUpdate = {
  subscription_id: number;
  is_active: boolean;
  is_deleted: boolean;
  name?: string | null;
  website?: string | null;
  logo?: string | null;
  billing_address?: string | null;
  tenant_description?: string | null;
  currency_code?: number | null;
  api_key?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasTenantSubscriptionsInsert = {
  tenant_id: string;
  subscription_id: number;
  subscription_mail_flag: number;
  subscription_price: number;
  subscription_month_duration: number;
  amount_due: number;
  subscription_status: number;
  upgrade_attempt_count: number;
  cancel_mail_flag: number;
  is_trial_expired: number;
  trial_extension_count: number;
  is_active: boolean;
  is_deleted: boolean;
  payment_gateway_product_id?: string | null;
  subscription_start_date?: string | null;
  payment_status?: string | null;
  storage_capacity_mb?: number | null;
  user_limit?: number | null;
  cancel_date?: string | null;
  remaining_trial_days?: number | null;
  next_billing_date?: string | null;
  subscription_pause_start_date?: string | null;
  subscription_pause_end_date?: string | null;
  coupon_code?: string | null;
  discount?: number | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasTenantSubscriptionsUpdate = {
  tenant_id: string;
  subscription_id: number;
  subscription_mail_flag: number;
  subscription_price: number;
  subscription_month_duration: number;
  amount_due: number;
  subscription_status: number;
  upgrade_attempt_count: number;
  cancel_mail_flag: number;
  is_trial_expired: number;
  trial_extension_count: number;
  is_active: boolean;
  is_deleted: boolean;
  payment_gateway_product_id?: string | null;
  subscription_start_date?: string | null;
  payment_status?: string | null;
  storage_capacity_mb?: number | null;
  user_limit?: number | null;
  cancel_date?: string | null;
  remaining_trial_days?: number | null;
  next_billing_date?: string | null;
  subscription_pause_start_date?: string | null;
  subscription_pause_end_date?: string | null;
  coupon_code?: string | null;
  discount?: number | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasTenantUserInsert = {
  is_approver: boolean;
  is_deleted: boolean;
  tenant_id?: string | null;
  user_id?: string | null;
  user_type?: string | null;
  status?: string | null;
  approver_id?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasTenantUserUpdate = {
  is_approver: boolean;
  is_deleted: boolean;
  tenant_id?: string | null;
  user_id?: string | null;
  user_type?: string | null;
  status?: string | null;
  approver_id?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasUserInsert = {
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  first_name: string;
  is_deleted: boolean;
  hashed_password?: string | null;
  last_name?: string | null;
  profile_image?: string | null;
  file_id?: number | null;
  invite_token?: string | null;
  time_zone?: string | null;
  time_format?: string | null;
  phone_number?: string | null;
  language?: string | null;
  source?: string | null;
  user_import_id?: number | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasUserUpdate = {
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  first_name: string;
  is_deleted: boolean;
  hashed_password?: string | null;
  last_name?: string | null;
  profile_image?: string | null;
  file_id?: number | null;
  invite_token?: string | null;
  time_zone?: string | null;
  time_format?: string | null;
  phone_number?: string | null;
  language?: string | null;
  source?: string | null;
  user_import_id?: number | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasUserInvitationsInsert = {
  invite_first_name: string;
  invite_email: string;
  invite_role: number;
  invite_status: string;
  invite_token: string;
  invited_by: string;
  is_approver: boolean;
  is_deleted: boolean;
  tenant_id?: string | null;
  invite_last_name?: string | null;
  approver_id?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasUserInvitationsUpdate = {
  invite_first_name: string;
  invite_email: string;
  invite_role: number;
  invite_status: string;
  invite_token: string;
  invited_by: string;
  is_approver: boolean;
  is_deleted: boolean;
  tenant_id?: string | null;
  invite_last_name?: string | null;
  approver_id?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasUserRoleInsert = {
  tenant_id: string;
  role_id: number;
  user_id: string;
  is_active: boolean;
  is_deleted: boolean;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SaasUserRoleUpdate = {
  tenant_id: string;
  role_id: number;
  user_id: string;
  is_active: boolean;
  is_deleted: boolean;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAssetTypeInsert = {
  tenant_id: string;
  is_deleted: boolean;
  asset_type_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAssetTypeUpdate = {
  tenant_id: string;
  is_deleted: boolean;
  asset_type_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstActivityNamesInsert = {
  tenant_id: string;
  activity_name: string;
  is_deleted: boolean;
  uom?: string | null;
  activity_value?: boolean | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstActivityNamesUpdate = {
  tenant_id: string;
  activity_name: string;
  is_deleted: boolean;
  uom?: string | null;
  activity_value?: boolean | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstAssetTypeGroupInsert = {
  tenant_id: string;
  asset_group_name: string;
  is_deleted: boolean;
  asset_type_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstAssetTypeGroupUpdate = {
  tenant_id: string;
  asset_group_name: string;
  is_deleted: boolean;
  asset_type_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstOwnerCategoryInsert = {
  tenant_id: string;
  owner_type: string;
  is_deleted: boolean;
  owner_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstOwnerCategoryUpdate = {
  tenant_id: string;
  owner_type: string;
  is_deleted: boolean;
  owner_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetAstSiteActivityInsert = {
  tenant_id: string;
  is_deleted: boolean;
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
  tenant_id: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  category_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetAstSubAssemblyCategoryUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  category_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetAstTicketTypeInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  ticket_type_name?: string | null;
  ticket_type_note?: string | null;
  affect_repaid?: boolean | null;
  is_default?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetAstTicketTypeUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  ticket_type_name?: string | null;
  ticket_type_note?: string | null;
  affect_repaid?: boolean | null;
  is_default?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetAstTransactionDelayInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  transaction_type_name?: string | null;
  delay_value?: number | null;
  show_in_dashboard?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetAstTransactionDelayUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  transaction_type_name?: string | null;
  delay_value?: number | null;
  show_in_dashboard?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetEntitiesInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  entity_type?: string | null;
  entity_name?: string | null;
  description?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetEntitiesUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  entity_type?: string | null;
  entity_name?: string | null;
  description?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetGenMydashboardInsert = {
  widget: string;
  status: boolean;
  sequence: number;
  is_deleted: boolean;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetGenMydashboardUpdate = {
  widget: string;
  status: boolean;
  sequence: number;
  is_deleted: boolean;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetInvUomInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  uom?: string | null;
  active_flag?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetInvUomUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  uom?: string | null;
  active_flag?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type SetSiteGroupingInsert = {
  tenant_id: string;
  group_name: string;
  is_deleted: boolean;
  sites_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetSiteGroupingUpdate = {
  tenant_id: string;
  group_name: string;
  is_deleted: boolean;
  sites_name?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetTenantWorkflowsInsert = {
  tenant_id: string;
  is_global: boolean;
  is_default: boolean;
  is_enabled: boolean;
  is_deleted: boolean;
  organization_id?: number | null;
  entity_type?: string | null;
  workflow_id?: number | null;
  stage_name?: string | null;
  status_sequence?: number | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SetTenantWorkflowsUpdate = {
  tenant_id: string;
  is_global: boolean;
  is_default: boolean;
  is_enabled: boolean;
  is_deleted: boolean;
  organization_id?: number | null;
  entity_type?: string | null;
  workflow_id?: number | null;
  stage_name?: string | null;
  status_sequence?: number | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SitesInsert = {
  tenant_id: string;
  site_group_id: number;
  site_name: string;
  site_code: string;
  all_user_indicator: boolean;
  active_status: boolean;
  is_deleted: boolean;
  associated_users?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type SitesUpdate = {
  tenant_id: string;
  site_group_id: number;
  site_name: string;
  site_code: string;
  all_user_indicator: boolean;
  active_status: boolean;
  is_deleted: boolean;
  associated_users?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type TeamUsersInsert = {
  tenant_id: string;
  user_id: string;
  team_id: number;
  role: number;
  status: boolean;
  is_deleted: boolean;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type TeamUsersUpdate = {
  tenant_id: string;
  user_id: string;
  team_id: number;
  role: number;
  status: boolean;
  is_deleted: boolean;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type TransactionNoSettingsInsert = {
  tenant_id: string;
  is_deleted: boolean;
  associated_to?: string | null;
  system_generate_id?: boolean | null;
  prefix?: string | null;
  num_fmt?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type TransactionNoSettingsUpdate = {
  tenant_id: string;
  is_deleted: boolean;
  associated_to?: string | null;
  system_generate_id?: boolean | null;
  prefix?: string | null;
  num_fmt?: string | null;
  search_vector?: string | null;
  deleted_at?: string | null;
};
export type TrnAssetAttributeInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  asset_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnAssetAttributeUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  asset_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnAssetDocumentInsert = {
  asset_id: number;
  asset_name: string;
  document_id: number;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  document_number?: string | null;
  document_path?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnAssetDocumentUpdate = {
  asset_id: number;
  asset_name: string;
  document_id: number;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  site_change_date?: string | null;
  from_site_id?: number | null;
  to_site_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnAssetOwnershipInsert = {
  tenant_id: string;
  asset_id: number;
  asset_name: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  asset_id: number;
  asset_name: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  site_id?: number | null;
  site_name?: string | null;
  workstation_id?: number | null;
  workstation_name?: string | null;
  activation_date?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnAssetSiteLinkingInsert = {
  tenant_id: string;
  asset_id: number;
  asset_name: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  asset_id: number;
  asset_name: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_date?: string | null;
  roster_id?: number | null;
  site_id?: number | null;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_date?: string | null;
  roster_id?: number | null;
  site_id?: number | null;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
export type TrnFsFuelIssueInsert = {
  trn_date: string;
  trn_number: string;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
export type TrnFuelFeedinAttributeInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  fuelfeedin_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnFuelFeedinAttributeUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  fuelfeedin_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnHrEmployeeInsert = {
  first_name: string;
  transition_site_id: number;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  asset_site_id?: number | null;
  site_name?: string | null;
  change_date?: string | null;
  operator_name?: string | null;
  supervisior_name?: string | null;
  engineers_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvAdjustmentAttributeInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  inv_adj_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvAdjustmentAttributeUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  inv_adj_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvAdjustmentWorkflowInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  inv_adj_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  mail_notification?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvAdjustmentWorkflowUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  inv_adj_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  mail_notification?: boolean | null;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
export type TrnInvAllocationWorkflowInsert = {
  allocation_id: number;
  status_id: number;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  activity_date?: string | null;
  sequence_no?: number | null;
  status_name?: string | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvAllocationWorkflowUpdate = {
  allocation_id: number;
  status_id: number;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  activity_date?: string | null;
  sequence_no?: number | null;
  status_name?: string | null;
  remarks?: string | null;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  item_name?: string | null;
  consumption_quantity?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvConsumptionWorkflowInsert = {
  consumption_id: number;
  status_id: number;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  activity_date?: string | null;
  status_name?: string | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvConsumptionWorkflowUpdate = {
  consumption_id: number;
  status_id: number;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  activity_date?: string | null;
  status_name?: string | null;
  remarks?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemInsert = {
  tenant_id: string;
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
  create_by: string;
  is_deleted: boolean;
  party_id?: number | null;
  manufacturer_name?: string | null;
  tags?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemUpdate = {
  tenant_id: string;
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
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  item_name?: string | null;
  adjustment_type?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemAllocationInsert = {
  allocation_id: number;
  item_id: number;
  demand_prending_qty: number;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  warehouse_name?: string | null;
  cost_centre?: number | null;
  ticket_id?: number | null;
  user_tags?: string | null;
  status_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemDemandAttributesInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  demand_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemDemandAttributesUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  demand_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemDemandItemsInsert = {
  item_id: number;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  demand_id?: number | null;
  item_name?: string | null;
  quantity?: number | null;
  unit_rate?: number | null;
  item_amount?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemDemandWorkflowInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  demand_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  mail_notification?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvItemDemandWorkflowUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  demand_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  mail_notification?: boolean | null;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  devision_name?: string | null;
  tag_user?: string | null;
  origin_cost_center?: number | null;
  destination_cost_center?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvLogisticsDtlInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
export type TrnInvLogisticsWorkflowInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  logistic_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  mail_notification?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvLogisticsWorkflowUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  logistic_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  mail_notification?: boolean | null;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  document_type_id?: number | null;
  document_number?: string | null;
  document_file_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnInvPurchaseDocumentUpdate = {
  purchase_id: number;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  warehouse_name?: string | null;
  tag_user?: number | null;
  tag_assests?: number | null;
  indent_id?: number | null;
  currency_id?: number | null;
  notes?: string | null;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  warehouse_name?: string | null;
  tag_user?: number | null;
  tag_assests?: number | null;
  indent_id?: number | null;
  currency_id?: number | null;
  notes?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnProductivityInsert = {
  trn_number: number;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
export type TrnProductivityAttributeInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  productivity_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnProductivityAttributeUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  productivity_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseorderWorkflowInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  po_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  mail_notification?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseorderWorkflowUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  po_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  mail_notification?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseAttributesInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  purchase_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseAttributesUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  purchase_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  warehouse_name?: string | null;
  vendor_id?: number | null;
  vendor_name?: string | null;
  tag_user?: number | null;
  authorized_user?: number | null;
  requisition_id?: number | null;
  status?: number | null;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  warehouse_name?: string | null;
  vendor_id?: number | null;
  vendor_name?: string | null;
  tag_user?: number | null;
  authorized_user?: number | null;
  requisition_id?: number | null;
  status?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseOrderAttributesInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  po_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseOrderAttributesUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  po_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  item_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseOrderTermsInsert = {
  po_id: number;
  term_desc: string;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  po_fnyr?: number | null;
  term_id?: number | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseOrderTermsUpdate = {
  po_id: number;
  term_desc: string;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  requisition_id?: number | null;
  item_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseReqWorkflowInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  requisition_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  mail_notification?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseReqWorkflowUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  requisition_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  mail_notification?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseWorkflowInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  purchase_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  mail_notification?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnPurchaseWorkflowUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  purchase_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  mail_notification?: boolean | null;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
export type TrnTicketAttributeInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  ticket_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnTicketAttributeUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  ticket_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnTicketDocumentsInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  upload_date?: string | null;
  ticket_id?: number | null;
  document_type_id?: number | null;
  document_number?: string | null;
  document_file_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnTicketWorkflowInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  ticket_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  asset_status?: string | null;
  mail_notification?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnTicketWorkflowUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  ticket_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  asset_status?: string | null;
  mail_notification?: boolean | null;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
export type TrnWarehouseIndentAttributeInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  warehouseindent_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnWarehouseIndentAttributeUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  warehouseindent_id?: number | null;
  attribute_id?: number | null;
  attribute_name?: string | null;
  attribute_value?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnWarehouseIndentItemsInsert = {
  indent_id: number;
  item_id: number;
  quantity: number;
  unit_rate: number;
  amount: number;
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
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
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  item_name?: string | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnWarehouseIndentWorkflowInsert = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  indent_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  asset_status?: string | null;
  mail_notification?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export type TrnWarehouseIndentWorkflowUpdate = {
  tenant_id: string;
  create_by: string;
  is_deleted: boolean;
  trn_fnyr?: number | null;
  trn_date?: string | null;
  indent_id?: number | null;
  workflow_id?: number | null;
  note?: string | null;
  asset_status?: string | null;
  mail_notification?: boolean | null;
  deleted_at?: string | null;
  search_vector?: string | null;
};
export const {
  useGetAllAssetMatrixGetQuery,
  useCreateAssetMatrixAssetMatrixPostMutation,
  useUpdateAssetMatrixAssetMatrixIdPutMutation,
  useDeleteAssetMatrixAssetMatrixIdDeleteMutation,
  useGetAssetMatrixAssetMatrixIdGetQuery,
  useGetAllassetMatrixEventGetQuery,
  useCreateAssetMatrixassetMatrixEventPostMutation,
  useUpdateAssetMatrixassetMatrixEventIdPutMutation,
  useDeleteAssetMatrixassetMatrixEventIdDeleteMutation,
  useGetAssetMatrixassetMatrixEventIdGetQuery,
  useGetAllAssetMatrixDocumentGetQuery,
  useCreateAssetMatrixDocumentAssetMatrixDocumentPostMutation,
  useUpdateAssetMatrixDocumentAssetMatrixDocumentIdPutMutation,
  useDeleteAssetMatrixDocumentAssetMatrixDocumentIdDeleteMutation,
  useGetAssetMatrixDocumentAssetMatrixDocumentIdGetQuery,
  useGetAllassetMatrixDocumentEventGetQuery,
  useCreateAssetMatrixDocumentassetMatrixDocumentEventPostMutation,
  useUpdateAssetMatrixDocumentassetMatrixDocumentEventIdPutMutation,
  useDeleteAssetMatrixDocumentassetMatrixDocumentEventIdDeleteMutation,
  useGetAssetMatrixDocumentassetMatrixDocumentEventIdGetQuery,
  useGetAllAssetMatrixSectionGetQuery,
  useCreateAssetMatrixSectionAssetMatrixSectionPostMutation,
  useUpdateAssetMatrixSectionAssetMatrixSectionIdPutMutation,
  useDeleteAssetMatrixSectionAssetMatrixSectionIdDeleteMutation,
  useGetAssetMatrixSectionAssetMatrixSectionIdGetQuery,
  useGetAllassetMatrixSectionEventGetQuery,
  useCreateAssetMatrixSectionassetMatrixSectionEventPostMutation,
  useUpdateAssetMatrixSectionassetMatrixSectionEventIdPutMutation,
  useDeleteAssetMatrixSectionassetMatrixSectionEventIdDeleteMutation,
  useGetAssetMatrixSectionassetMatrixSectionEventIdGetQuery,
  useGetAllAssetMatrixSubSectionGetQuery,
  useCreateAssetMatrixSubSectionAssetMatrixSubSectionPostMutation,
  useUpdateAssetMatrixSubSectionAssetMatrixSubSectionIdPutMutation,
  useDeleteAssetMatrixSubSectionAssetMatrixSubSectionIdDeleteMutation,
  useGetAssetMatrixSubSectionAssetMatrixSubSectionIdGetQuery,
  useGetAllassetMatrixSubSectionEventGetQuery,
  useCreateAssetMatrixSubSectionassetMatrixSubSectionEventPostMutation,
  useUpdateAssetMatrixSubSectionassetMatrixSubSectionEventIdPutMutation,
  useDeleteAssetMatrixSubSectionassetMatrixSubSectionEventIdDeleteMutation,
  useGetAssetMatrixSubSectionassetMatrixSubSectionEventIdGetQuery,
  useGetAllAssetServiceCheckListGetQuery,
  useCreateAssetServiceCheckListAssetServiceCheckListPostMutation,
  useUpdateAssetServiceCheckListAssetServiceCheckListIdPutMutation,
  useDeleteAssetServiceCheckListAssetServiceCheckListIdDeleteMutation,
  useGetAssetServiceCheckListAssetServiceCheckListIdGetQuery,
  useGetAllassetServiceCheckListEventGetQuery,
  useCreateAssetServiceCheckListassetServiceCheckListEventPostMutation,
  useUpdateAssetServiceCheckListassetServiceCheckListEventIdPutMutation,
  useDeleteAssetServiceCheckListassetServiceCheckListEventIdDeleteMutation,
  useGetAssetServiceCheckListassetServiceCheckListEventIdGetQuery,
  useGetAllAssetServiceCheckListItemsGetQuery,
  useCreateAssetServiceCheckListItemsAssetServiceCheckListItemsPostMutation,
  useUpdateAssetServiceCheckListItemsAssetServiceCheckListItemsIdPutMutation,
  useDeleteAssetServiceCheckListItemsAssetServiceCheckListItemsIdDeleteMutation,
  useGetAssetServiceCheckListItemsAssetServiceCheckListItemsIdGetQuery,
  useGetAllassetServiceCheckListItemsEventGetQuery,
  useCreateAssetServiceCheckListItemsassetServiceCheckListItemsEventPostMutation,
  useUpdateAssetServiceCheckListItemsassetServiceCheckListItemsEventIdPutMutation,
  useDeleteAssetServiceCheckListItemsassetServiceCheckListItemsEventIdDeleteMutation,
  useGetAssetServiceCheckListItemsassetServiceCheckListItemsEventIdGetQuery,
  useGetAllFiscalyearGetQuery,
  useCreateFiscalyearFiscalyearPostMutation,
  useUpdateFiscalyearFiscalyearIdPutMutation,
  useDeleteFiscalyearFiscalyearIdDeleteMutation,
  useGetFiscalyearFiscalyearIdGetQuery,
  useGetAllfiscalyearEventGetQuery,
  useCreateFiscalyearfiscalyearEventPostMutation,
  useUpdateFiscalyearfiscalyearEventIdPutMutation,
  useDeleteFiscalyearfiscalyearEventIdDeleteMutation,
  useGetFiscalyearfiscalyearEventIdGetQuery,
  useGetAllGrpWarehouseGetQuery,
  useCreateGrpWarehouseGrpWarehousePostMutation,
  useUpdateGrpWarehouseGrpWarehouseIdPutMutation,
  useDeleteGrpWarehouseGrpWarehouseIdDeleteMutation,
  useGetGrpWarehouseGrpWarehouseIdGetQuery,
  useGetAllgrpWarehouseEventGetQuery,
  useCreateGrpWarehousegrpWarehouseEventPostMutation,
  useUpdateGrpWarehousegrpWarehouseEventIdPutMutation,
  useDeleteGrpWarehousegrpWarehouseEventIdDeleteMutation,
  useGetGrpWarehousegrpWarehouseEventIdGetQuery,
  useGetAllInvItemConfigurationGetQuery,
  useCreateInvItemConfigurationInvItemConfigurationPostMutation,
  useUpdateInvItemConfigurationInvItemConfigurationIdPutMutation,
  useDeleteInvItemConfigurationInvItemConfigurationIdDeleteMutation,
  useGetInvItemConfigurationInvItemConfigurationIdGetQuery,
  useGetAllinvItemConfigurationEventGetQuery,
  useCreateInvItemConfigurationinvItemConfigurationEventPostMutation,
  useUpdateInvItemConfigurationinvItemConfigurationEventIdPutMutation,
  useDeleteInvItemConfigurationinvItemConfigurationEventIdDeleteMutation,
  useGetInvItemConfigurationinvItemConfigurationEventIdGetQuery,
  useGetAllItemOpeningBalanceGetQuery,
  useCreateItemOpeningBalanceItemOpeningBalancePostMutation,
  useUpdateItemOpeningBalanceItemOpeningBalanceIdPutMutation,
  useDeleteItemOpeningBalanceItemOpeningBalanceIdDeleteMutation,
  useGetItemOpeningBalanceItemOpeningBalanceIdGetQuery,
  useGetAllitemOpeningBalanceEventGetQuery,
  useCreateItemOpeningBalanceitemOpeningBalanceEventPostMutation,
  useUpdateItemOpeningBalanceitemOpeningBalanceEventIdPutMutation,
  useDeleteItemOpeningBalanceitemOpeningBalanceEventIdDeleteMutation,
  useGetItemOpeningBalanceitemOpeningBalanceEventIdGetQuery,
  useGetAllPoplistsGetQuery,
  useCreatePoplistsPoplistsPostMutation,
  useUpdatePoplistsPoplistsIdPutMutation,
  useDeletePoplistsPoplistsIdDeleteMutation,
  useGetPoplistsPoplistsIdGetQuery,
  useGetAllpoplistsEventGetQuery,
  useCreatePoplistspoplistsEventPostMutation,
  useUpdatePoplistspoplistsEventIdPutMutation,
  useDeletePoplistspoplistsEventIdDeleteMutation,
  useGetPoplistspoplistsEventIdGetQuery,
  useGetAllPurchaseOrderTermsGetQuery,
  useCreatePurchaseOrderTermsPurchaseOrderTermsPostMutation,
  useUpdatePurchaseOrderTermsPurchaseOrderTermsIdPutMutation,
  useDeletePurchaseOrderTermsPurchaseOrderTermsIdDeleteMutation,
  useGetPurchaseOrderTermsPurchaseOrderTermsIdGetQuery,
  useGetAllpurchaseOrderTermsEventGetQuery,
  useCreatePurchaseOrderTermspurchaseOrderTermsEventPostMutation,
  useUpdatePurchaseOrderTermspurchaseOrderTermsEventIdPutMutation,
  useDeletePurchaseOrderTermspurchaseOrderTermsEventIdDeleteMutation,
  useGetPurchaseOrderTermspurchaseOrderTermsEventIdGetQuery,
  useGetAllRefAstMaterialGetQuery,
  useCreateRefAstMaterialRefAstMaterialPostMutation,
  useUpdateRefAstMaterialRefAstMaterialIdPutMutation,
  useDeleteRefAstMaterialRefAstMaterialIdDeleteMutation,
  useGetRefAstMaterialRefAstMaterialIdGetQuery,
  useGetAllrefAstMaterialEventGetQuery,
  useCreateRefAstMaterialrefAstMaterialEventPostMutation,
  useUpdateRefAstMaterialrefAstMaterialEventIdPutMutation,
  useDeleteRefAstMaterialrefAstMaterialEventIdDeleteMutation,
  useGetRefAstMaterialrefAstMaterialEventIdGetQuery,
  useGetAllRefFuelStationGetQuery,
  useCreateRefFuelStationRefFuelStationPostMutation,
  useUpdateRefFuelStationRefFuelStationIdPutMutation,
  useDeleteRefFuelStationRefFuelStationIdDeleteMutation,
  useGetRefFuelStationRefFuelStationIdGetQuery,
  useGetAllrefFuelStationEventGetQuery,
  useCreateRefFuelStationrefFuelStationEventPostMutation,
  useUpdateRefFuelStationrefFuelStationEventIdPutMutation,
  useDeleteRefFuelStationrefFuelStationEventIdDeleteMutation,
  useGetRefFuelStationrefFuelStationEventIdGetQuery,
  useGetAllRefPartyGetQuery,
  useCreateRefPartyRefPartyPostMutation,
  useUpdateRefPartyRefPartyIdPutMutation,
  useDeleteRefPartyRefPartyIdDeleteMutation,
  useGetRefPartyRefPartyIdGetQuery,
  useGetAllrefPartyEventGetQuery,
  useCreateRefPartyrefPartyEventPostMutation,
  useUpdateRefPartyrefPartyEventIdPutMutation,
  useDeleteRefPartyrefPartyEventIdDeleteMutation,
  useGetRefPartyrefPartyEventIdGetQuery,
  useGetAllRefRosterGetQuery,
  useCreateRefRosterRefRosterPostMutation,
  useUpdateRefRosterRefRosterIdPutMutation,
  useDeleteRefRosterRefRosterIdDeleteMutation,
  useGetRefRosterRefRosterIdGetQuery,
  useGetAllrefRosterEventGetQuery,
  useCreateRefRosterrefRosterEventPostMutation,
  useUpdateRefRosterrefRosterEventIdPutMutation,
  useDeleteRefRosterrefRosterEventIdDeleteMutation,
  useGetRefRosterrefRosterEventIdGetQuery,
  useGetAllRefSubAssemblyGetQuery,
  useCreateRefSubAssemblyRefSubAssemblyPostMutation,
  useUpdateRefSubAssemblyRefSubAssemblyIdPutMutation,
  useDeleteRefSubAssemblyRefSubAssemblyIdDeleteMutation,
  useGetRefSubAssemblyRefSubAssemblyIdGetQuery,
  useGetAllrefSubAssemblyEventGetQuery,
  useCreateRefSubAssemblyrefSubAssemblyEventPostMutation,
  useUpdateRefSubAssemblyrefSubAssemblyEventIdPutMutation,
  useDeleteRefSubAssemblyrefSubAssemblyEventIdDeleteMutation,
  useGetRefSubAssemblyrefSubAssemblyEventIdGetQuery,
  useGetAllRefTaxGetQuery,
  useCreateRefTaxRefTaxPostMutation,
  useUpdateRefTaxRefTaxIdPutMutation,
  useDeleteRefTaxRefTaxIdDeleteMutation,
  useGetRefTaxRefTaxIdGetQuery,
  useGetAllrefTaxEventGetQuery,
  useCreateRefTaxrefTaxEventPostMutation,
  useUpdateRefTaxrefTaxEventIdPutMutation,
  useDeleteRefTaxrefTaxEventIdDeleteMutation,
  useGetRefTaxrefTaxEventIdGetQuery,
  useGetAllRefVendorGetQuery,
  useCreateRefVendorRefVendorPostMutation,
  useUpdateRefVendorRefVendorIdPutMutation,
  useDeleteRefVendorRefVendorIdDeleteMutation,
  useGetRefVendorRefVendorIdGetQuery,
  useGetAllrefVendorEventGetQuery,
  useCreateRefVendorrefVendorEventPostMutation,
  useUpdateRefVendorrefVendorEventIdPutMutation,
  useDeleteRefVendorrefVendorEventIdDeleteMutation,
  useGetRefVendorrefVendorEventIdGetQuery,
  useGetAllRefWorkstationGetQuery,
  useCreateRefWorkstationRefWorkstationPostMutation,
  useUpdateRefWorkstationRefWorkstationIdPutMutation,
  useDeleteRefWorkstationRefWorkstationIdDeleteMutation,
  useGetRefWorkstationRefWorkstationIdGetQuery,
  useGetAllrefWorkstationEventGetQuery,
  useCreateRefWorkstationrefWorkstationEventPostMutation,
  useUpdateRefWorkstationrefWorkstationEventIdPutMutation,
  useDeleteRefWorkstationrefWorkstationEventIdDeleteMutation,
  useGetRefWorkstationrefWorkstationEventIdGetQuery,
  useGetAllResAssetGetQuery,
  useCreateResAssetResAssetPostMutation,
  useUpdateResAssetResAssetIdPutMutation,
  useDeleteResAssetResAssetIdDeleteMutation,
  useGetResAssetResAssetIdGetQuery,
  useGetAllresAssetEventGetQuery,
  useCreateResAssetresAssetEventPostMutation,
  useUpdateResAssetresAssetEventIdPutMutation,
  useDeleteResAssetresAssetEventIdDeleteMutation,
  useGetResAssetresAssetEventIdGetQuery,
  useGetAllSaasApiKeyAuditGetQuery,
  useCreateSaasApiKeyAuditSaasApiKeyAuditPostMutation,
  useUpdateSaasApiKeyAuditSaasApiKeyAuditIdPutMutation,
  useDeleteSaasApiKeyAuditSaasApiKeyAuditIdDeleteMutation,
  useGetSaasApiKeyAuditSaasApiKeyAuditIdGetQuery,
  useGetAllsaasApiKeyAuditEventGetQuery,
  useCreateSaasApiKeyAuditsaasApiKeyAuditEventPostMutation,
  useUpdateSaasApiKeyAuditsaasApiKeyAuditEventIdPutMutation,
  useDeleteSaasApiKeyAuditsaasApiKeyAuditEventIdDeleteMutation,
  useGetSaasApiKeyAuditsaasApiKeyAuditEventIdGetQuery,
  useGetAllSaasAuditTrailsGetQuery,
  useCreateSaasAuditTrailsSaasAuditTrailsPostMutation,
  useUpdateSaasAuditTrailsSaasAuditTrailsIdPutMutation,
  useDeleteSaasAuditTrailsSaasAuditTrailsIdDeleteMutation,
  useGetSaasAuditTrailsSaasAuditTrailsIdGetQuery,
  useGetAllsaasAuditTrailsEventGetQuery,
  useCreateSaasAuditTrailssaasAuditTrailsEventPostMutation,
  useUpdateSaasAuditTrailssaasAuditTrailsEventIdPutMutation,
  useDeleteSaasAuditTrailssaasAuditTrailsEventIdDeleteMutation,
  useGetSaasAuditTrailssaasAuditTrailsEventIdGetQuery,
  useGetAllSaasChatsGetQuery,
  useCreateSaasChatsSaasChatsPostMutation,
  useUpdateSaasChatsSaasChatsIdPutMutation,
  useDeleteSaasChatsSaasChatsIdDeleteMutation,
  useGetSaasChatsSaasChatsIdGetQuery,
  useGetAllsaasChatsEventGetQuery,
  useCreateSaasChatssaasChatsEventPostMutation,
  useUpdateSaasChatssaasChatsEventIdPutMutation,
  useDeleteSaasChatssaasChatsEventIdDeleteMutation,
  useGetSaasChatssaasChatsEventIdGetQuery,
  useGetAllSaasCustomersGetQuery,
  useCreateSaasCustomersSaasCustomersPostMutation,
  useUpdateSaasCustomersSaasCustomersIdPutMutation,
  useDeleteSaasCustomersSaasCustomersIdDeleteMutation,
  useGetSaasCustomersSaasCustomersIdGetQuery,
  useGetAllsaasCustomersEventGetQuery,
  useCreateSaasCustomerssaasCustomersEventPostMutation,
  useUpdateSaasCustomerssaasCustomersEventIdPutMutation,
  useDeleteSaasCustomerssaasCustomersEventIdDeleteMutation,
  useGetSaasCustomerssaasCustomersEventIdGetQuery,
  useGetAllSaasEntitySharesGetQuery,
  useCreateSaasEntitySharesSaasEntitySharesPostMutation,
  useUpdateSaasEntitySharesSaasEntitySharesIdPutMutation,
  useDeleteSaasEntitySharesSaasEntitySharesIdDeleteMutation,
  useGetSaasEntitySharesSaasEntitySharesIdGetQuery,
  useGetAllsaasEntitySharesEventGetQuery,
  useCreateSaasEntitySharessaasEntitySharesEventPostMutation,
  useUpdateSaasEntitySharessaasEntitySharesEventIdPutMutation,
  useDeleteSaasEntitySharessaasEntitySharesEventIdDeleteMutation,
  useGetSaasEntitySharessaasEntitySharesEventIdGetQuery,
  useGetAllSaasFileMetasGetQuery,
  useCreateSaasFileMetasSaasFileMetasPostMutation,
  useUpdateSaasFileMetasSaasFileMetasIdPutMutation,
  useDeleteSaasFileMetasSaasFileMetasIdDeleteMutation,
  useGetSaasFileMetasSaasFileMetasIdGetQuery,
  useGetAllsaasFileMetasEventGetQuery,
  useCreateSaasFileMetassaasFileMetasEventPostMutation,
  useUpdateSaasFileMetassaasFileMetasEventIdPutMutation,
  useDeleteSaasFileMetassaasFileMetasEventIdDeleteMutation,
  useGetSaasFileMetassaasFileMetasEventIdGetQuery,
  useGetAllSaasFlexEntityGetQuery,
  useCreateSaasFlexEntitySaasFlexEntityPostMutation,
  useUpdateSaasFlexEntitySaasFlexEntityIdPutMutation,
  useDeleteSaasFlexEntitySaasFlexEntityIdDeleteMutation,
  useGetSaasFlexEntitySaasFlexEntityIdGetQuery,
  useGetAllsaasFlexEntityEventGetQuery,
  useCreateSaasFlexEntitysaasFlexEntityEventPostMutation,
  useUpdateSaasFlexEntitysaasFlexEntityEventIdPutMutation,
  useDeleteSaasFlexEntitysaasFlexEntityEventIdDeleteMutation,
  useGetSaasFlexEntitysaasFlexEntityEventIdGetQuery,
  useGetAllSaasFlexFieldsGetQuery,
  useCreateSaasFlexFieldsSaasFlexFieldsPostMutation,
  useUpdateSaasFlexFieldsSaasFlexFieldsIdPutMutation,
  useDeleteSaasFlexFieldsSaasFlexFieldsIdDeleteMutation,
  useGetSaasFlexFieldsSaasFlexFieldsIdGetQuery,
  useGetAllsaasFlexFieldsEventGetQuery,
  useCreateSaasFlexFieldssaasFlexFieldsEventPostMutation,
  useUpdateSaasFlexFieldssaasFlexFieldsEventIdPutMutation,
  useDeleteSaasFlexFieldssaasFlexFieldsEventIdDeleteMutation,
  useGetSaasFlexFieldssaasFlexFieldsEventIdGetQuery,
  useGetAllSaasFlexFieldValuesGetQuery,
  useCreateSaasFlexFieldValuesSaasFlexFieldValuesPostMutation,
  useUpdateSaasFlexFieldValuesSaasFlexFieldValuesIdPutMutation,
  useDeleteSaasFlexFieldValuesSaasFlexFieldValuesIdDeleteMutation,
  useGetSaasFlexFieldValuesSaasFlexFieldValuesIdGetQuery,
  useGetAllsaasFlexFieldValuesEventGetQuery,
  useCreateSaasFlexFieldValuessaasFlexFieldValuesEventPostMutation,
  useUpdateSaasFlexFieldValuessaasFlexFieldValuesEventIdPutMutation,
  useDeleteSaasFlexFieldValuessaasFlexFieldValuesEventIdDeleteMutation,
  useGetSaasFlexFieldValuessaasFlexFieldValuesEventIdGetQuery,
  useGetAllSaasRefActionsGetQuery,
  useCreateSaasRefActionsSaasRefActionsPostMutation,
  useUpdateSaasRefActionsSaasRefActionsIdPutMutation,
  useDeleteSaasRefActionsSaasRefActionsIdDeleteMutation,
  useGetSaasRefActionsSaasRefActionsIdGetQuery,
  useGetAllsaasRefActionsEventGetQuery,
  useCreateSaasRefActionssaasRefActionsEventPostMutation,
  useUpdateSaasRefActionssaasRefActionsEventIdPutMutation,
  useDeleteSaasRefActionssaasRefActionsEventIdDeleteMutation,
  useGetSaasRefActionssaasRefActionsEventIdGetQuery,
  useGetAllSaasRefConfigurationsGetQuery,
  useCreateSaasRefConfigurationsSaasRefConfigurationsPostMutation,
  useUpdateSaasRefConfigurationsSaasRefConfigurationsIdPutMutation,
  useDeleteSaasRefConfigurationsSaasRefConfigurationsIdDeleteMutation,
  useGetSaasRefConfigurationsSaasRefConfigurationsIdGetQuery,
  useGetAllsaasRefConfigurationsEventGetQuery,
  useCreateSaasRefConfigurationssaasRefConfigurationsEventPostMutation,
  useUpdateSaasRefConfigurationssaasRefConfigurationsEventIdPutMutation,
  useDeleteSaasRefConfigurationssaasRefConfigurationsEventIdDeleteMutation,
  useGetSaasRefConfigurationssaasRefConfigurationsEventIdGetQuery,
  useGetAllSaasRefCurrenciesGetQuery,
  useCreateSaasRefCurrenciesSaasRefCurrenciesPostMutation,
  useUpdateSaasRefCurrenciesSaasRefCurrenciesIdPutMutation,
  useDeleteSaasRefCurrenciesSaasRefCurrenciesIdDeleteMutation,
  useGetSaasRefCurrenciesSaasRefCurrenciesIdGetQuery,
  useGetAllsaasRefCurrenciesEventGetQuery,
  useCreateSaasRefCurrenciessaasRefCurrenciesEventPostMutation,
  useUpdateSaasRefCurrenciessaasRefCurrenciesEventIdPutMutation,
  useDeleteSaasRefCurrenciessaasRefCurrenciesEventIdDeleteMutation,
  useGetSaasRefCurrenciessaasRefCurrenciesEventIdGetQuery,
  useGetAllSaasRefDocumentsGetQuery,
  useCreateSaasRefDocumentsSaasRefDocumentsPostMutation,
  useUpdateSaasRefDocumentsSaasRefDocumentsIdPutMutation,
  useDeleteSaasRefDocumentsSaasRefDocumentsIdDeleteMutation,
  useGetSaasRefDocumentsSaasRefDocumentsIdGetQuery,
  useGetAllsaasRefDocumentsEventGetQuery,
  useCreateSaasRefDocumentssaasRefDocumentsEventPostMutation,
  useUpdateSaasRefDocumentssaasRefDocumentsEventIdPutMutation,
  useDeleteSaasRefDocumentssaasRefDocumentsEventIdDeleteMutation,
  useGetSaasRefDocumentssaasRefDocumentsEventIdGetQuery,
  useGetAllSaasRefFeaturesGetQuery,
  useCreateSaasRefFeaturesSaasRefFeaturesPostMutation,
  useUpdateSaasRefFeaturesSaasRefFeaturesIdPutMutation,
  useDeleteSaasRefFeaturesSaasRefFeaturesIdDeleteMutation,
  useGetSaasRefFeaturesSaasRefFeaturesIdGetQuery,
  useGetAllsaasRefFeaturesEventGetQuery,
  useCreateSaasRefFeaturessaasRefFeaturesEventPostMutation,
  useUpdateSaasRefFeaturessaasRefFeaturesEventIdPutMutation,
  useDeleteSaasRefFeaturessaasRefFeaturesEventIdDeleteMutation,
  useGetSaasRefFeaturessaasRefFeaturesEventIdGetQuery,
  useGetAllSaasRefModulesGetQuery,
  useCreateSaasRefModulesSaasRefModulesPostMutation,
  useUpdateSaasRefModulesSaasRefModulesIdPutMutation,
  useDeleteSaasRefModulesSaasRefModulesIdDeleteMutation,
  useGetSaasRefModulesSaasRefModulesIdGetQuery,
  useGetAllsaasRefModulesEventGetQuery,
  useCreateSaasRefModulessaasRefModulesEventPostMutation,
  useUpdateSaasRefModulessaasRefModulesEventIdPutMutation,
  useDeleteSaasRefModulessaasRefModulesEventIdDeleteMutation,
  useGetSaasRefModulessaasRefModulesEventIdGetQuery,
  useGetAllSaasRefRolesGetQuery,
  useCreateSaasRefRolesSaasRefRolesPostMutation,
  useUpdateSaasRefRolesSaasRefRolesIdPutMutation,
  useDeleteSaasRefRolesSaasRefRolesIdDeleteMutation,
  useGetSaasRefRolesSaasRefRolesIdGetQuery,
  useGetAllsaasRefRolesEventGetQuery,
  useCreateSaasRefRolessaasRefRolesEventPostMutation,
  useUpdateSaasRefRolessaasRefRolesEventIdPutMutation,
  useDeleteSaasRefRolessaasRefRolesEventIdDeleteMutation,
  useGetSaasRefRolessaasRefRolesEventIdGetQuery,
  useGetAllSaasRefSubscriptionsGetQuery,
  useCreateSaasRefSubscriptionsSaasRefSubscriptionsPostMutation,
  useUpdateSaasRefSubscriptionsSaasRefSubscriptionsIdPutMutation,
  useDeleteSaasRefSubscriptionsSaasRefSubscriptionsIdDeleteMutation,
  useGetSaasRefSubscriptionsSaasRefSubscriptionsIdGetQuery,
  useGetAllsaasRefSubscriptionsEventGetQuery,
  useCreateSaasRefSubscriptionssaasRefSubscriptionsEventPostMutation,
  useUpdateSaasRefSubscriptionssaasRefSubscriptionsEventIdPutMutation,
  useDeleteSaasRefSubscriptionssaasRefSubscriptionsEventIdDeleteMutation,
  useGetSaasRefSubscriptionssaasRefSubscriptionsEventIdGetQuery,
  useGetAllSaasRefSubscriptionFeaturesGetQuery,
  useCreateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesPostMutation,
  useUpdateSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdPutMutation,
  useDeleteSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdDeleteMutation,
  useGetSaasRefSubscriptionFeaturesSaasRefSubscriptionFeaturesIdGetQuery,
  useGetAllsaasRefSubscriptionFeaturesEventGetQuery,
  useCreateSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventPostMutation,
  useUpdateSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdPutMutation,
  useDeleteSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdDeleteMutation,
  useGetSaasRefSubscriptionFeaturessaasRefSubscriptionFeaturesEventIdGetQuery,
  useGetAllSaasRefTenantCurrenciesGetQuery,
  useCreateSaasRefTenantCurrenciesSaasRefTenantCurrenciesPostMutation,
  useUpdateSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdPutMutation,
  useDeleteSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdDeleteMutation,
  useGetSaasRefTenantCurrenciesSaasRefTenantCurrenciesIdGetQuery,
  useGetAllsaasRefTenantCurrenciesEventGetQuery,
  useCreateSaasRefTenantCurrenciessaasRefTenantCurrenciesEventPostMutation,
  useUpdateSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdPutMutation,
  useDeleteSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdDeleteMutation,
  useGetSaasRefTenantCurrenciessaasRefTenantCurrenciesEventIdGetQuery,
  useGetAllSaasRefWorkflowsGetQuery,
  useCreateSaasRefWorkflowsSaasRefWorkflowsPostMutation,
  useUpdateSaasRefWorkflowsSaasRefWorkflowsIdPutMutation,
  useDeleteSaasRefWorkflowsSaasRefWorkflowsIdDeleteMutation,
  useGetSaasRefWorkflowsSaasRefWorkflowsIdGetQuery,
  useGetAllsaasRefWorkflowsEventGetQuery,
  useCreateSaasRefWorkflowssaasRefWorkflowsEventPostMutation,
  useUpdateSaasRefWorkflowssaasRefWorkflowsEventIdPutMutation,
  useDeleteSaasRefWorkflowssaasRefWorkflowsEventIdDeleteMutation,
  useGetSaasRefWorkflowssaasRefWorkflowsEventIdGetQuery,
  useGetAllSaasRolePermissionGetQuery,
  useCreateSaasRolePermissionSaasRolePermissionPostMutation,
  useUpdateSaasRolePermissionSaasRolePermissionIdPutMutation,
  useDeleteSaasRolePermissionSaasRolePermissionIdDeleteMutation,
  useGetSaasRolePermissionSaasRolePermissionIdGetQuery,
  useGetAllsaasRolePermissionEventGetQuery,
  useCreateSaasRolePermissionsaasRolePermissionEventPostMutation,
  useUpdateSaasRolePermissionsaasRolePermissionEventIdPutMutation,
  useDeleteSaasRolePermissionsaasRolePermissionEventIdDeleteMutation,
  useGetSaasRolePermissionsaasRolePermissionEventIdGetQuery,
  useGetAllSaasTeamsGetQuery,
  useCreateSaasTeamsSaasTeamsPostMutation,
  useUpdateSaasTeamsSaasTeamsIdPutMutation,
  useDeleteSaasTeamsSaasTeamsIdDeleteMutation,
  useGetSaasTeamsSaasTeamsIdGetQuery,
  useGetAllsaasTeamsEventGetQuery,
  useCreateSaasTeamssaasTeamsEventPostMutation,
  useUpdateSaasTeamssaasTeamsEventIdPutMutation,
  useDeleteSaasTeamssaasTeamsEventIdDeleteMutation,
  useGetSaasTeamssaasTeamsEventIdGetQuery,
  useGetAllSaasTenantsGetQuery,
  useCreateSaasTenantsSaasTenantsPostMutation,
  useUpdateSaasTenantsSaasTenantsIdPutMutation,
  useDeleteSaasTenantsSaasTenantsIdDeleteMutation,
  useGetSaasTenantsSaasTenantsIdGetQuery,
  useGetAllsaasTenantsEventGetQuery,
  useCreateSaasTenantssaasTenantsEventPostMutation,
  useUpdateSaasTenantssaasTenantsEventIdPutMutation,
  useDeleteSaasTenantssaasTenantsEventIdDeleteMutation,
  useGetSaasTenantssaasTenantsEventIdGetQuery,
  useGetAllSaasTenantSubscriptionsGetQuery,
  useCreateSaasTenantSubscriptionsSaasTenantSubscriptionsPostMutation,
  useUpdateSaasTenantSubscriptionsSaasTenantSubscriptionsIdPutMutation,
  useDeleteSaasTenantSubscriptionsSaasTenantSubscriptionsIdDeleteMutation,
  useGetSaasTenantSubscriptionsSaasTenantSubscriptionsIdGetQuery,
  useGetAllsaasTenantSubscriptionsEventGetQuery,
  useCreateSaasTenantSubscriptionssaasTenantSubscriptionsEventPostMutation,
  useUpdateSaasTenantSubscriptionssaasTenantSubscriptionsEventIdPutMutation,
  useDeleteSaasTenantSubscriptionssaasTenantSubscriptionsEventIdDeleteMutation,
  useGetSaasTenantSubscriptionssaasTenantSubscriptionsEventIdGetQuery,
  useGetAllSaasTenantUserGetQuery,
  useCreateSaasTenantUserSaasTenantUserPostMutation,
  useUpdateSaasTenantUserSaasTenantUserIdPutMutation,
  useDeleteSaasTenantUserSaasTenantUserIdDeleteMutation,
  useGetSaasTenantUserSaasTenantUserIdGetQuery,
  useGetAllsaasTenantUserEventGetQuery,
  useCreateSaasTenantUsersaasTenantUserEventPostMutation,
  useUpdateSaasTenantUsersaasTenantUserEventIdPutMutation,
  useDeleteSaasTenantUsersaasTenantUserEventIdDeleteMutation,
  useGetSaasTenantUsersaasTenantUserEventIdGetQuery,
  useGetAllSaasUserGetQuery,
  useCreateSaasUserSaasUserPostMutation,
  useUpdateSaasUserSaasUserIdPutMutation,
  useDeleteSaasUserSaasUserIdDeleteMutation,
  useGetSaasUserSaasUserIdGetQuery,
  useGetAllsaasUserEventGetQuery,
  useCreateSaasUsersaasUserEventPostMutation,
  useUpdateSaasUsersaasUserEventIdPutMutation,
  useDeleteSaasUsersaasUserEventIdDeleteMutation,
  useGetSaasUsersaasUserEventIdGetQuery,
  useGetAllSaasUserInvitationsGetQuery,
  useCreateSaasUserInvitationsSaasUserInvitationsPostMutation,
  useUpdateSaasUserInvitationsSaasUserInvitationsIdPutMutation,
  useDeleteSaasUserInvitationsSaasUserInvitationsIdDeleteMutation,
  useGetSaasUserInvitationsSaasUserInvitationsIdGetQuery,
  useGetAllsaasUserInvitationsEventGetQuery,
  useCreateSaasUserInvitationssaasUserInvitationsEventPostMutation,
  useUpdateSaasUserInvitationssaasUserInvitationsEventIdPutMutation,
  useDeleteSaasUserInvitationssaasUserInvitationsEventIdDeleteMutation,
  useGetSaasUserInvitationssaasUserInvitationsEventIdGetQuery,
  useGetAllSaasUserRoleGetQuery,
  useCreateSaasUserRoleSaasUserRolePostMutation,
  useUpdateSaasUserRoleSaasUserRoleIdPutMutation,
  useDeleteSaasUserRoleSaasUserRoleIdDeleteMutation,
  useGetSaasUserRoleSaasUserRoleIdGetQuery,
  useGetAllsaasUserRoleEventGetQuery,
  useCreateSaasUserRolesaasUserRoleEventPostMutation,
  useUpdateSaasUserRolesaasUserRoleEventIdPutMutation,
  useDeleteSaasUserRolesaasUserRoleEventIdDeleteMutation,
  useGetSaasUserRolesaasUserRoleEventIdGetQuery,
  useGetAllSetAssetTypeGetQuery,
  useCreateSetAssetTypeSetAssetTypePostMutation,
  useUpdateSetAssetTypeSetAssetTypeIdPutMutation,
  useDeleteSetAssetTypeSetAssetTypeIdDeleteMutation,
  useGetSetAssetTypeSetAssetTypeIdGetQuery,
  useGetAllsetAssetTypeEventGetQuery,
  useCreateSetAssetTypesetAssetTypeEventPostMutation,
  useUpdateSetAssetTypesetAssetTypeEventIdPutMutation,
  useDeleteSetAssetTypesetAssetTypeEventIdDeleteMutation,
  useGetSetAssetTypesetAssetTypeEventIdGetQuery,
  useGetAllSetAstActivityNamesGetQuery,
  useCreateSetAstActivityNamesSetAstActivityNamesPostMutation,
  useUpdateSetAstActivityNamesSetAstActivityNamesIdPutMutation,
  useDeleteSetAstActivityNamesSetAstActivityNamesIdDeleteMutation,
  useGetSetAstActivityNamesSetAstActivityNamesIdGetQuery,
  useGetAllsetAstActivityNamesEventGetQuery,
  useCreateSetAstActivityNamessetAstActivityNamesEventPostMutation,
  useUpdateSetAstActivityNamessetAstActivityNamesEventIdPutMutation,
  useDeleteSetAstActivityNamessetAstActivityNamesEventIdDeleteMutation,
  useGetSetAstActivityNamessetAstActivityNamesEventIdGetQuery,
  useGetAllSetAstAssetTypeGroupGetQuery,
  useCreateSetAstAssetTypeGroupSetAstAssetTypeGroupPostMutation,
  useUpdateSetAstAssetTypeGroupSetAstAssetTypeGroupIdPutMutation,
  useDeleteSetAstAssetTypeGroupSetAstAssetTypeGroupIdDeleteMutation,
  useGetSetAstAssetTypeGroupSetAstAssetTypeGroupIdGetQuery,
  useGetAllsetAstAssetTypeGroupEventGetQuery,
  useCreateSetAstAssetTypeGroupsetAstAssetTypeGroupEventPostMutation,
  useUpdateSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdPutMutation,
  useDeleteSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdDeleteMutation,
  useGetSetAstAssetTypeGroupsetAstAssetTypeGroupEventIdGetQuery,
  useGetAllSetAstOwnerCategoryGetQuery,
  useCreateSetAstOwnerCategorySetAstOwnerCategoryPostMutation,
  useUpdateSetAstOwnerCategorySetAstOwnerCategoryIdPutMutation,
  useDeleteSetAstOwnerCategorySetAstOwnerCategoryIdDeleteMutation,
  useGetSetAstOwnerCategorySetAstOwnerCategoryIdGetQuery,
  useGetAllsetAstOwnerCategoryEventGetQuery,
  useCreateSetAstOwnerCategorysetAstOwnerCategoryEventPostMutation,
  useUpdateSetAstOwnerCategorysetAstOwnerCategoryEventIdPutMutation,
  useDeleteSetAstOwnerCategorysetAstOwnerCategoryEventIdDeleteMutation,
  useGetSetAstOwnerCategorysetAstOwnerCategoryEventIdGetQuery,
  useGetAllSetAstSiteActivityGetQuery,
  useCreateSetAstSiteActivitySetAstSiteActivityPostMutation,
  useUpdateSetAstSiteActivitySetAstSiteActivityIdPutMutation,
  useDeleteSetAstSiteActivitySetAstSiteActivityIdDeleteMutation,
  useGetSetAstSiteActivitySetAstSiteActivityIdGetQuery,
  useGetAllsetAstSiteActivityEventGetQuery,
  useCreateSetAstSiteActivitysetAstSiteActivityEventPostMutation,
  useUpdateSetAstSiteActivitysetAstSiteActivityEventIdPutMutation,
  useDeleteSetAstSiteActivitysetAstSiteActivityEventIdDeleteMutation,
  useGetSetAstSiteActivitysetAstSiteActivityEventIdGetQuery,
  useGetAllSetAstSubAssemblyCategoryGetQuery,
  useCreateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryPostMutation,
  useUpdateSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdPutMutation,
  useDeleteSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdDeleteMutation,
  useGetSetAstSubAssemblyCategorySetAstSubAssemblyCategoryIdGetQuery,
  useGetAllsetAstSubAssemblyCategoryEventGetQuery,
  useCreateSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventPostMutation,
  useUpdateSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdPutMutation,
  useDeleteSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdDeleteMutation,
  useGetSetAstSubAssemblyCategorysetAstSubAssemblyCategoryEventIdGetQuery,
  useGetAllSetAstTicketTypeGetQuery,
  useCreateSetAstTicketTypeSetAstTicketTypePostMutation,
  useUpdateSetAstTicketTypeSetAstTicketTypeIdPutMutation,
  useDeleteSetAstTicketTypeSetAstTicketTypeIdDeleteMutation,
  useGetSetAstTicketTypeSetAstTicketTypeIdGetQuery,
  useGetAllsetAstTicketTypeEventGetQuery,
  useCreateSetAstTicketTypesetAstTicketTypeEventPostMutation,
  useUpdateSetAstTicketTypesetAstTicketTypeEventIdPutMutation,
  useDeleteSetAstTicketTypesetAstTicketTypeEventIdDeleteMutation,
  useGetSetAstTicketTypesetAstTicketTypeEventIdGetQuery,
  useGetAllSetAstTransactionDelayGetQuery,
  useCreateSetAstTransactionDelaySetAstTransactionDelayPostMutation,
  useUpdateSetAstTransactionDelaySetAstTransactionDelayIdPutMutation,
  useDeleteSetAstTransactionDelaySetAstTransactionDelayIdDeleteMutation,
  useGetSetAstTransactionDelaySetAstTransactionDelayIdGetQuery,
  useGetAllsetAstTransactionDelayEventGetQuery,
  useCreateSetAstTransactionDelaysetAstTransactionDelayEventPostMutation,
  useUpdateSetAstTransactionDelaysetAstTransactionDelayEventIdPutMutation,
  useDeleteSetAstTransactionDelaysetAstTransactionDelayEventIdDeleteMutation,
  useGetSetAstTransactionDelaysetAstTransactionDelayEventIdGetQuery,
  useGetAllSetEntitiesGetQuery,
  useCreateSetEntitiesSetEntitiesPostMutation,
  useUpdateSetEntitiesSetEntitiesIdPutMutation,
  useDeleteSetEntitiesSetEntitiesIdDeleteMutation,
  useGetSetEntitiesSetEntitiesIdGetQuery,
  useGetAllsetEntitiesEventGetQuery,
  useCreateSetEntitiessetEntitiesEventPostMutation,
  useUpdateSetEntitiessetEntitiesEventIdPutMutation,
  useDeleteSetEntitiessetEntitiesEventIdDeleteMutation,
  useGetSetEntitiessetEntitiesEventIdGetQuery,
  useGetAllSetGenMydashboardGetQuery,
  useCreateSetGenMydashboardSetGenMydashboardPostMutation,
  useUpdateSetGenMydashboardSetGenMydashboardIdPutMutation,
  useDeleteSetGenMydashboardSetGenMydashboardIdDeleteMutation,
  useGetSetGenMydashboardSetGenMydashboardIdGetQuery,
  useGetAllsetGenMydashboardEventGetQuery,
  useCreateSetGenMydashboardsetGenMydashboardEventPostMutation,
  useUpdateSetGenMydashboardsetGenMydashboardEventIdPutMutation,
  useDeleteSetGenMydashboardsetGenMydashboardEventIdDeleteMutation,
  useGetSetGenMydashboardsetGenMydashboardEventIdGetQuery,
  useGetAllSetInvUomGetQuery,
  useCreateSetInvUomSetInvUomPostMutation,
  useUpdateSetInvUomSetInvUomIdPutMutation,
  useDeleteSetInvUomSetInvUomIdDeleteMutation,
  useGetSetInvUomSetInvUomIdGetQuery,
  useGetAllsetInvUomEventGetQuery,
  useCreateSetInvUomsetInvUomEventPostMutation,
  useUpdateSetInvUomsetInvUomEventIdPutMutation,
  useDeleteSetInvUomsetInvUomEventIdDeleteMutation,
  useGetSetInvUomsetInvUomEventIdGetQuery,
  useGetAllSetSiteGroupingGetQuery,
  useCreateSetSiteGroupingSetSiteGroupingPostMutation,
  useUpdateSetSiteGroupingSetSiteGroupingIdPutMutation,
  useDeleteSetSiteGroupingSetSiteGroupingIdDeleteMutation,
  useGetSetSiteGroupingSetSiteGroupingIdGetQuery,
  useGetAllsetSiteGroupingEventGetQuery,
  useCreateSetSiteGroupingsetSiteGroupingEventPostMutation,
  useUpdateSetSiteGroupingsetSiteGroupingEventIdPutMutation,
  useDeleteSetSiteGroupingsetSiteGroupingEventIdDeleteMutation,
  useGetSetSiteGroupingsetSiteGroupingEventIdGetQuery,
  useGetAllSetTenantWorkflowsGetQuery,
  useCreateSetTenantWorkflowsSetTenantWorkflowsPostMutation,
  useUpdateSetTenantWorkflowsSetTenantWorkflowsIdPutMutation,
  useDeleteSetTenantWorkflowsSetTenantWorkflowsIdDeleteMutation,
  useGetSetTenantWorkflowsSetTenantWorkflowsIdGetQuery,
  useGetAllsetTenantWorkflowsEventGetQuery,
  useCreateSetTenantWorkflowssetTenantWorkflowsEventPostMutation,
  useUpdateSetTenantWorkflowssetTenantWorkflowsEventIdPutMutation,
  useDeleteSetTenantWorkflowssetTenantWorkflowsEventIdDeleteMutation,
  useGetSetTenantWorkflowssetTenantWorkflowsEventIdGetQuery,
  useGetAllSitesGetQuery,
  useCreateSitesSitesPostMutation,
  useUpdateSitesSitesIdPutMutation,
  useDeleteSitesSitesIdDeleteMutation,
  useGetSitesSitesIdGetQuery,
  useGetAllsitesEventGetQuery,
  useCreateSitessitesEventPostMutation,
  useUpdateSitessitesEventIdPutMutation,
  useDeleteSitessitesEventIdDeleteMutation,
  useGetSitessitesEventIdGetQuery,
  useGetAllTeamUsersGetQuery,
  useCreateTeamUsersTeamUsersPostMutation,
  useUpdateTeamUsersTeamUsersIdPutMutation,
  useDeleteTeamUsersTeamUsersIdDeleteMutation,
  useGetTeamUsersTeamUsersIdGetQuery,
  useGetAllteamUsersEventGetQuery,
  useCreateTeamUsersteamUsersEventPostMutation,
  useUpdateTeamUsersteamUsersEventIdPutMutation,
  useDeleteTeamUsersteamUsersEventIdDeleteMutation,
  useGetTeamUsersteamUsersEventIdGetQuery,
  useGetAllTransactionNoSettingsGetQuery,
  useCreateTransactionNoSettingsTransactionNoSettingsPostMutation,
  useUpdateTransactionNoSettingsTransactionNoSettingsIdPutMutation,
  useDeleteTransactionNoSettingsTransactionNoSettingsIdDeleteMutation,
  useGetTransactionNoSettingsTransactionNoSettingsIdGetQuery,
  useGetAlltransactionNoSettingsEventGetQuery,
  useCreateTransactionNoSettingstransactionNoSettingsEventPostMutation,
  useUpdateTransactionNoSettingstransactionNoSettingsEventIdPutMutation,
  useDeleteTransactionNoSettingstransactionNoSettingsEventIdDeleteMutation,
  useGetTransactionNoSettingstransactionNoSettingsEventIdGetQuery,
  useGetAllTrnAssetAttributeGetQuery,
  useCreateTrnAssetAttributeTrnAssetAttributePostMutation,
  useUpdateTrnAssetAttributeTrnAssetAttributeIdPutMutation,
  useDeleteTrnAssetAttributeTrnAssetAttributeIdDeleteMutation,
  useGetTrnAssetAttributeTrnAssetAttributeIdGetQuery,
  useGetAlltrnAssetAttributeEventGetQuery,
  useCreateTrnAssetAttributetrnAssetAttributeEventPostMutation,
  useUpdateTrnAssetAttributetrnAssetAttributeEventIdPutMutation,
  useDeleteTrnAssetAttributetrnAssetAttributeEventIdDeleteMutation,
  useGetTrnAssetAttributetrnAssetAttributeEventIdGetQuery,
  useGetAllTrnAssetDocumentGetQuery,
  useCreateTrnAssetDocumentTrnAssetDocumentPostMutation,
  useUpdateTrnAssetDocumentTrnAssetDocumentIdPutMutation,
  useDeleteTrnAssetDocumentTrnAssetDocumentIdDeleteMutation,
  useGetTrnAssetDocumentTrnAssetDocumentIdGetQuery,
  useGetAlltrnAssetDocumentEventGetQuery,
  useCreateTrnAssetDocumenttrnAssetDocumentEventPostMutation,
  useUpdateTrnAssetDocumenttrnAssetDocumentEventIdPutMutation,
  useDeleteTrnAssetDocumenttrnAssetDocumentEventIdDeleteMutation,
  useGetTrnAssetDocumenttrnAssetDocumentEventIdGetQuery,
  useGetAllTrnAssetMovmentGetQuery,
  useCreateTrnAssetMovmentTrnAssetMovmentPostMutation,
  useUpdateTrnAssetMovmentTrnAssetMovmentIdPutMutation,
  useDeleteTrnAssetMovmentTrnAssetMovmentIdDeleteMutation,
  useGetTrnAssetMovmentTrnAssetMovmentIdGetQuery,
  useGetAlltrnAssetMovmentEventGetQuery,
  useCreateTrnAssetMovmenttrnAssetMovmentEventPostMutation,
  useUpdateTrnAssetMovmenttrnAssetMovmentEventIdPutMutation,
  useDeleteTrnAssetMovmenttrnAssetMovmentEventIdDeleteMutation,
  useGetTrnAssetMovmenttrnAssetMovmentEventIdGetQuery,
  useGetAllTrnAssetOwnershipGetQuery,
  useCreateTrnAssetOwnershipTrnAssetOwnershipPostMutation,
  useUpdateTrnAssetOwnershipTrnAssetOwnershipIdPutMutation,
  useDeleteTrnAssetOwnershipTrnAssetOwnershipIdDeleteMutation,
  useGetTrnAssetOwnershipTrnAssetOwnershipIdGetQuery,
  useGetAlltrnAssetOwnershipEventGetQuery,
  useCreateTrnAssetOwnershiptrnAssetOwnershipEventPostMutation,
  useUpdateTrnAssetOwnershiptrnAssetOwnershipEventIdPutMutation,
  useDeleteTrnAssetOwnershiptrnAssetOwnershipEventIdDeleteMutation,
  useGetTrnAssetOwnershiptrnAssetOwnershipEventIdGetQuery,
  useGetAllTrnAssetRosterGetQuery,
  useCreateTrnAssetRosterTrnAssetRosterPostMutation,
  useUpdateTrnAssetRosterTrnAssetRosterIdPutMutation,
  useDeleteTrnAssetRosterTrnAssetRosterIdDeleteMutation,
  useGetTrnAssetRosterTrnAssetRosterIdGetQuery,
  useGetAlltrnAssetRosterEventGetQuery,
  useCreateTrnAssetRostertrnAssetRosterEventPostMutation,
  useUpdateTrnAssetRostertrnAssetRosterEventIdPutMutation,
  useDeleteTrnAssetRostertrnAssetRosterEventIdDeleteMutation,
  useGetTrnAssetRostertrnAssetRosterEventIdGetQuery,
  useGetAllTrnAssetSiteLinkingGetQuery,
  useCreateTrnAssetSiteLinkingTrnAssetSiteLinkingPostMutation,
  useUpdateTrnAssetSiteLinkingTrnAssetSiteLinkingIdPutMutation,
  useDeleteTrnAssetSiteLinkingTrnAssetSiteLinkingIdDeleteMutation,
  useGetTrnAssetSiteLinkingTrnAssetSiteLinkingIdGetQuery,
  useGetAlltrnAssetSiteLinkingEventGetQuery,
  useCreateTrnAssetSiteLinkingtrnAssetSiteLinkingEventPostMutation,
  useUpdateTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdPutMutation,
  useDeleteTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdDeleteMutation,
  useGetTrnAssetSiteLinkingtrnAssetSiteLinkingEventIdGetQuery,
  useGetAllTrnCounterlogGetQuery,
  useCreateTrnCounterlogTrnCounterlogPostMutation,
  useUpdateTrnCounterlogTrnCounterlogIdPutMutation,
  useDeleteTrnCounterlogTrnCounterlogIdDeleteMutation,
  useGetTrnCounterlogTrnCounterlogIdGetQuery,
  useGetAlltrnCounterlogEventGetQuery,
  useCreateTrnCounterlogtrnCounterlogEventPostMutation,
  useUpdateTrnCounterlogtrnCounterlogEventIdPutMutation,
  useDeleteTrnCounterlogtrnCounterlogEventIdDeleteMutation,
  useGetTrnCounterlogtrnCounterlogEventIdGetQuery,
  useGetAllTrnDowntimeGetQuery,
  useCreateTrnDowntimeTrnDowntimePostMutation,
  useUpdateTrnDowntimeTrnDowntimeIdPutMutation,
  useDeleteTrnDowntimeTrnDowntimeIdDeleteMutation,
  useGetTrnDowntimeTrnDowntimeIdGetQuery,
  useGetAlltrnDowntimeEventGetQuery,
  useCreateTrnDowntimetrnDowntimeEventPostMutation,
  useUpdateTrnDowntimetrnDowntimeEventIdPutMutation,
  useDeleteTrnDowntimetrnDowntimeEventIdDeleteMutation,
  useGetTrnDowntimetrnDowntimeEventIdGetQuery,
  useGetAllTrnEngagementGetQuery,
  useCreateTrnEngagementTrnEngagementPostMutation,
  useUpdateTrnEngagementTrnEngagementIdPutMutation,
  useDeleteTrnEngagementTrnEngagementIdDeleteMutation,
  useGetTrnEngagementTrnEngagementIdGetQuery,
  useGetAlltrnEngagementEventGetQuery,
  useCreateTrnEngagementtrnEngagementEventPostMutation,
  useUpdateTrnEngagementtrnEngagementEventIdPutMutation,
  useDeleteTrnEngagementtrnEngagementEventIdDeleteMutation,
  useGetTrnEngagementtrnEngagementEventIdGetQuery,
  useGetAllTrnFsFuelIssueGetQuery,
  useCreateTrnFsFuelIssueTrnFsFuelIssuePostMutation,
  useUpdateTrnFsFuelIssueTrnFsFuelIssueIdPutMutation,
  useDeleteTrnFsFuelIssueTrnFsFuelIssueIdDeleteMutation,
  useGetTrnFsFuelIssueTrnFsFuelIssueIdGetQuery,
  useGetAlltrnFsFuelIssueEventGetQuery,
  useCreateTrnFsFuelIssuetrnFsFuelIssueEventPostMutation,
  useUpdateTrnFsFuelIssuetrnFsFuelIssueEventIdPutMutation,
  useDeleteTrnFsFuelIssuetrnFsFuelIssueEventIdDeleteMutation,
  useGetTrnFsFuelIssuetrnFsFuelIssueEventIdGetQuery,
  useGetAllTrnFsFuelReceiveGetQuery,
  useCreateTrnFsFuelReceiveTrnFsFuelReceivePostMutation,
  useUpdateTrnFsFuelReceiveTrnFsFuelReceiveIdPutMutation,
  useDeleteTrnFsFuelReceiveTrnFsFuelReceiveIdDeleteMutation,
  useGetTrnFsFuelReceiveTrnFsFuelReceiveIdGetQuery,
  useGetAlltrnFsFuelReceiveEventGetQuery,
  useCreateTrnFsFuelReceivetrnFsFuelReceiveEventPostMutation,
  useUpdateTrnFsFuelReceivetrnFsFuelReceiveEventIdPutMutation,
  useDeleteTrnFsFuelReceivetrnFsFuelReceiveEventIdDeleteMutation,
  useGetTrnFsFuelReceivetrnFsFuelReceiveEventIdGetQuery,
  useGetAllTrnFsFuelTransferGetQuery,
  useCreateTrnFsFuelTransferTrnFsFuelTransferPostMutation,
  useUpdateTrnFsFuelTransferTrnFsFuelTransferIdPutMutation,
  useDeleteTrnFsFuelTransferTrnFsFuelTransferIdDeleteMutation,
  useGetTrnFsFuelTransferTrnFsFuelTransferIdGetQuery,
  useGetAlltrnFsFuelTransferEventGetQuery,
  useCreateTrnFsFuelTransfertrnFsFuelTransferEventPostMutation,
  useUpdateTrnFsFuelTransfertrnFsFuelTransferEventIdPutMutation,
  useDeleteTrnFsFuelTransfertrnFsFuelTransferEventIdDeleteMutation,
  useGetTrnFsFuelTransfertrnFsFuelTransferEventIdGetQuery,
  useGetAllTrnFuelFeedinGetQuery,
  useCreateTrnFuelFeedinTrnFuelFeedinPostMutation,
  useUpdateTrnFuelFeedinTrnFuelFeedinIdPutMutation,
  useDeleteTrnFuelFeedinTrnFuelFeedinIdDeleteMutation,
  useGetTrnFuelFeedinTrnFuelFeedinIdGetQuery,
  useGetAlltrnFuelFeedinEventGetQuery,
  useCreateTrnFuelFeedintrnFuelFeedinEventPostMutation,
  useUpdateTrnFuelFeedintrnFuelFeedinEventIdPutMutation,
  useDeleteTrnFuelFeedintrnFuelFeedinEventIdDeleteMutation,
  useGetTrnFuelFeedintrnFuelFeedinEventIdGetQuery,
  useGetAllTrnFuelFeedinAttributeGetQuery,
  useCreateTrnFuelFeedinAttributeTrnFuelFeedinAttributePostMutation,
  useUpdateTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdPutMutation,
  useDeleteTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdDeleteMutation,
  useGetTrnFuelFeedinAttributeTrnFuelFeedinAttributeIdGetQuery,
  useGetAlltrnFuelFeedinAttributeEventGetQuery,
  useCreateTrnFuelFeedinAttributetrnFuelFeedinAttributeEventPostMutation,
  useUpdateTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdPutMutation,
  useDeleteTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdDeleteMutation,
  useGetTrnFuelFeedinAttributetrnFuelFeedinAttributeEventIdGetQuery,
  useGetAllTrnHrEmployeeGetQuery,
  useCreateTrnHrEmployeeTrnHrEmployeePostMutation,
  useUpdateTrnHrEmployeeTrnHrEmployeeIdPutMutation,
  useDeleteTrnHrEmployeeTrnHrEmployeeIdDeleteMutation,
  useGetTrnHrEmployeeTrnHrEmployeeIdGetQuery,
  useGetAlltrnHrEmployeeEventGetQuery,
  useCreateTrnHrEmployeetrnHrEmployeeEventPostMutation,
  useUpdateTrnHrEmployeetrnHrEmployeeEventIdPutMutation,
  useDeleteTrnHrEmployeetrnHrEmployeeEventIdDeleteMutation,
  useGetTrnHrEmployeetrnHrEmployeeEventIdGetQuery,
  useGetAllTrnHrEmployeeAssetGetQuery,
  useCreateTrnHrEmployeeAssetTrnHrEmployeeAssetPostMutation,
  useUpdateTrnHrEmployeeAssetTrnHrEmployeeAssetIdPutMutation,
  useDeleteTrnHrEmployeeAssetTrnHrEmployeeAssetIdDeleteMutation,
  useGetTrnHrEmployeeAssetTrnHrEmployeeAssetIdGetQuery,
  useGetAlltrnHrEmployeeAssetEventGetQuery,
  useCreateTrnHrEmployeeAssettrnHrEmployeeAssetEventPostMutation,
  useUpdateTrnHrEmployeeAssettrnHrEmployeeAssetEventIdPutMutation,
  useDeleteTrnHrEmployeeAssettrnHrEmployeeAssetEventIdDeleteMutation,
  useGetTrnHrEmployeeAssettrnHrEmployeeAssetEventIdGetQuery,
  useGetAllTrnInvAdjustmentAttributeGetQuery,
  useCreateTrnInvAdjustmentAttributeTrnInvAdjustmentAttributePostMutation,
  useUpdateTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdPutMutation,
  useDeleteTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdDeleteMutation,
  useGetTrnInvAdjustmentAttributeTrnInvAdjustmentAttributeIdGetQuery,
  useGetAlltrnInvAdjustmentAttributeEventGetQuery,
  useCreateTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventPostMutation,
  useUpdateTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdPutMutation,
  useDeleteTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdDeleteMutation,
  useGetTrnInvAdjustmentAttributetrnInvAdjustmentAttributeEventIdGetQuery,
  useGetAllTrnInvAdjustmentWorkflowGetQuery,
  useCreateTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowPostMutation,
  useUpdateTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdPutMutation,
  useDeleteTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdDeleteMutation,
  useGetTrnInvAdjustmentWorkflowTrnInvAdjustmentWorkflowIdGetQuery,
  useGetAlltrnInvAdjustmentWorkflowEventGetQuery,
  useCreateTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventPostMutation,
  useUpdateTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdPutMutation,
  useDeleteTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdDeleteMutation,
  useGetTrnInvAdjustmentWorkflowtrnInvAdjustmentWorkflowEventIdGetQuery,
  useGetAllTrnInvAllocationGetQuery,
  useCreateTrnInvAllocationTrnInvAllocationPostMutation,
  useUpdateTrnInvAllocationTrnInvAllocationIdPutMutation,
  useDeleteTrnInvAllocationTrnInvAllocationIdDeleteMutation,
  useGetTrnInvAllocationTrnInvAllocationIdGetQuery,
  useGetAlltrnInvAllocationEventGetQuery,
  useCreateTrnInvAllocationtrnInvAllocationEventPostMutation,
  useUpdateTrnInvAllocationtrnInvAllocationEventIdPutMutation,
  useDeleteTrnInvAllocationtrnInvAllocationEventIdDeleteMutation,
  useGetTrnInvAllocationtrnInvAllocationEventIdGetQuery,
  useGetAllTrnInvAllocationWorkflowGetQuery,
  useCreateTrnInvAllocationWorkflowTrnInvAllocationWorkflowPostMutation,
  useUpdateTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdPutMutation,
  useDeleteTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdDeleteMutation,
  useGetTrnInvAllocationWorkflowTrnInvAllocationWorkflowIdGetQuery,
  useGetAlltrnInvAllocationWorkflowEventGetQuery,
  useCreateTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventPostMutation,
  useUpdateTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdPutMutation,
  useDeleteTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdDeleteMutation,
  useGetTrnInvAllocationWorkflowtrnInvAllocationWorkflowEventIdGetQuery,
  useGetAllTrnInvConsumptionGetQuery,
  useCreateTrnInvConsumptionTrnInvConsumptionPostMutation,
  useUpdateTrnInvConsumptionTrnInvConsumptionIdPutMutation,
  useDeleteTrnInvConsumptionTrnInvConsumptionIdDeleteMutation,
  useGetTrnInvConsumptionTrnInvConsumptionIdGetQuery,
  useGetAlltrnInvConsumptionEventGetQuery,
  useCreateTrnInvConsumptiontrnInvConsumptionEventPostMutation,
  useUpdateTrnInvConsumptiontrnInvConsumptionEventIdPutMutation,
  useDeleteTrnInvConsumptiontrnInvConsumptionEventIdDeleteMutation,
  useGetTrnInvConsumptiontrnInvConsumptionEventIdGetQuery,
  useGetAllTrnInvConsumptionItemsGetQuery,
  useCreateTrnInvConsumptionItemsTrnInvConsumptionItemsPostMutation,
  useUpdateTrnInvConsumptionItemsTrnInvConsumptionItemsIdPutMutation,
  useDeleteTrnInvConsumptionItemsTrnInvConsumptionItemsIdDeleteMutation,
  useGetTrnInvConsumptionItemsTrnInvConsumptionItemsIdGetQuery,
  useGetAlltrnInvConsumptionItemsEventGetQuery,
  useCreateTrnInvConsumptionItemstrnInvConsumptionItemsEventPostMutation,
  useUpdateTrnInvConsumptionItemstrnInvConsumptionItemsEventIdPutMutation,
  useDeleteTrnInvConsumptionItemstrnInvConsumptionItemsEventIdDeleteMutation,
  useGetTrnInvConsumptionItemstrnInvConsumptionItemsEventIdGetQuery,
  useGetAllTrnInvConsumptionWorkflowGetQuery,
  useCreateTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowPostMutation,
  useUpdateTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdPutMutation,
  useDeleteTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdDeleteMutation,
  useGetTrnInvConsumptionWorkflowTrnInvConsumptionWorkflowIdGetQuery,
  useGetAlltrnInvConsumptionWorkflowEventGetQuery,
  useCreateTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventPostMutation,
  useUpdateTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdPutMutation,
  useDeleteTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdDeleteMutation,
  useGetTrnInvConsumptionWorkflowtrnInvConsumptionWorkflowEventIdGetQuery,
  useGetAllTrnInvItemGetQuery,
  useCreateTrnInvItemTrnInvItemPostMutation,
  useUpdateTrnInvItemTrnInvItemIdPutMutation,
  useDeleteTrnInvItemTrnInvItemIdDeleteMutation,
  useGetTrnInvItemTrnInvItemIdGetQuery,
  useGetAlltrnInvItemEventGetQuery,
  useCreateTrnInvItemtrnInvItemEventPostMutation,
  useUpdateTrnInvItemtrnInvItemEventIdPutMutation,
  useDeleteTrnInvItemtrnInvItemEventIdDeleteMutation,
  useGetTrnInvItemtrnInvItemEventIdGetQuery,
  useGetAllTrnInvItemAdjustmentGetQuery,
  useCreateTrnInvItemAdjustmentTrnInvItemAdjustmentPostMutation,
  useUpdateTrnInvItemAdjustmentTrnInvItemAdjustmentIdPutMutation,
  useDeleteTrnInvItemAdjustmentTrnInvItemAdjustmentIdDeleteMutation,
  useGetTrnInvItemAdjustmentTrnInvItemAdjustmentIdGetQuery,
  useGetAlltrnInvItemAdjustmentEventGetQuery,
  useCreateTrnInvItemAdjustmenttrnInvItemAdjustmentEventPostMutation,
  useUpdateTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdPutMutation,
  useDeleteTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdDeleteMutation,
  useGetTrnInvItemAdjustmenttrnInvItemAdjustmentEventIdGetQuery,
  useGetAllTrnInvItemAdjustmentDtlGetQuery,
  useCreateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlPostMutation,
  useUpdateTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdPutMutation,
  useDeleteTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdDeleteMutation,
  useGetTrnInvItemAdjustmentDtlTrnInvItemAdjustmentDtlIdGetQuery,
  useGetAlltrnInvItemAdjustmentDtlEventGetQuery,
  useCreateTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventPostMutation,
  useUpdateTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdPutMutation,
  useDeleteTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdDeleteMutation,
  useGetTrnInvItemAdjustmentDtltrnInvItemAdjustmentDtlEventIdGetQuery,
  useGetAllTrnInvItemAllocationGetQuery,
  useCreateTrnInvItemAllocationTrnInvItemAllocationPostMutation,
  useUpdateTrnInvItemAllocationTrnInvItemAllocationIdPutMutation,
  useDeleteTrnInvItemAllocationTrnInvItemAllocationIdDeleteMutation,
  useGetTrnInvItemAllocationTrnInvItemAllocationIdGetQuery,
  useGetAlltrnInvItemAllocationEventGetQuery,
  useCreateTrnInvItemAllocationtrnInvItemAllocationEventPostMutation,
  useUpdateTrnInvItemAllocationtrnInvItemAllocationEventIdPutMutation,
  useDeleteTrnInvItemAllocationtrnInvItemAllocationEventIdDeleteMutation,
  useGetTrnInvItemAllocationtrnInvItemAllocationEventIdGetQuery,
  useGetAllTrnInvItemDemandGetQuery,
  useCreateTrnInvItemDemandTrnInvItemDemandPostMutation,
  useUpdateTrnInvItemDemandTrnInvItemDemandIdPutMutation,
  useDeleteTrnInvItemDemandTrnInvItemDemandIdDeleteMutation,
  useGetTrnInvItemDemandTrnInvItemDemandIdGetQuery,
  useGetAlltrnInvItemDemandEventGetQuery,
  useCreateTrnInvItemDemandtrnInvItemDemandEventPostMutation,
  useUpdateTrnInvItemDemandtrnInvItemDemandEventIdPutMutation,
  useDeleteTrnInvItemDemandtrnInvItemDemandEventIdDeleteMutation,
  useGetTrnInvItemDemandtrnInvItemDemandEventIdGetQuery,
  useGetAllTrnInvItemDemandAttributesGetQuery,
  useCreateTrnInvItemDemandAttributesTrnInvItemDemandAttributesPostMutation,
  useUpdateTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdPutMutation,
  useDeleteTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdDeleteMutation,
  useGetTrnInvItemDemandAttributesTrnInvItemDemandAttributesIdGetQuery,
  useGetAlltrnInvItemDemandAttributesEventGetQuery,
  useCreateTrnInvItemDemandAttributestrnInvItemDemandAttributesEventPostMutation,
  useUpdateTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdPutMutation,
  useDeleteTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdDeleteMutation,
  useGetTrnInvItemDemandAttributestrnInvItemDemandAttributesEventIdGetQuery,
  useGetAllTrnInvItemDemandItemsGetQuery,
  useCreateTrnInvItemDemandItemsTrnInvItemDemandItemsPostMutation,
  useUpdateTrnInvItemDemandItemsTrnInvItemDemandItemsIdPutMutation,
  useDeleteTrnInvItemDemandItemsTrnInvItemDemandItemsIdDeleteMutation,
  useGetTrnInvItemDemandItemsTrnInvItemDemandItemsIdGetQuery,
  useGetAlltrnInvItemDemandItemsEventGetQuery,
  useCreateTrnInvItemDemandItemstrnInvItemDemandItemsEventPostMutation,
  useUpdateTrnInvItemDemandItemstrnInvItemDemandItemsEventIdPutMutation,
  useDeleteTrnInvItemDemandItemstrnInvItemDemandItemsEventIdDeleteMutation,
  useGetTrnInvItemDemandItemstrnInvItemDemandItemsEventIdGetQuery,
  useGetAllTrnInvItemDemandWorkflowGetQuery,
  useCreateTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowPostMutation,
  useUpdateTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdPutMutation,
  useDeleteTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdDeleteMutation,
  useGetTrnInvItemDemandWorkflowTrnInvItemDemandWorkflowIdGetQuery,
  useGetAlltrnInvItemDemandWorkflowEventGetQuery,
  useCreateTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventPostMutation,
  useUpdateTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdPutMutation,
  useDeleteTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdDeleteMutation,
  useGetTrnInvItemDemandWorkflowtrnInvItemDemandWorkflowEventIdGetQuery,
  useGetAllTrnInvItemTransferGetQuery,
  useCreateTrnInvItemTransferTrnInvItemTransferPostMutation,
  useUpdateTrnInvItemTransferTrnInvItemTransferIdPutMutation,
  useDeleteTrnInvItemTransferTrnInvItemTransferIdDeleteMutation,
  useGetTrnInvItemTransferTrnInvItemTransferIdGetQuery,
  useGetAlltrnInvItemTransferEventGetQuery,
  useCreateTrnInvItemTransfertrnInvItemTransferEventPostMutation,
  useUpdateTrnInvItemTransfertrnInvItemTransferEventIdPutMutation,
  useDeleteTrnInvItemTransfertrnInvItemTransferEventIdDeleteMutation,
  useGetTrnInvItemTransfertrnInvItemTransferEventIdGetQuery,
  useGetAllTrnInvItemTransferDtlGetQuery,
  useCreateTrnInvItemTransferDtlTrnInvItemTransferDtlPostMutation,
  useUpdateTrnInvItemTransferDtlTrnInvItemTransferDtlIdPutMutation,
  useDeleteTrnInvItemTransferDtlTrnInvItemTransferDtlIdDeleteMutation,
  useGetTrnInvItemTransferDtlTrnInvItemTransferDtlIdGetQuery,
  useGetAlltrnInvItemTransferDtlEventGetQuery,
  useCreateTrnInvItemTransferDtltrnInvItemTransferDtlEventPostMutation,
  useUpdateTrnInvItemTransferDtltrnInvItemTransferDtlEventIdPutMutation,
  useDeleteTrnInvItemTransferDtltrnInvItemTransferDtlEventIdDeleteMutation,
  useGetTrnInvItemTransferDtltrnInvItemTransferDtlEventIdGetQuery,
  useGetAllTrnInvLogisticsGetQuery,
  useCreateTrnInvLogisticsTrnInvLogisticsPostMutation,
  useUpdateTrnInvLogisticsTrnInvLogisticsIdPutMutation,
  useDeleteTrnInvLogisticsTrnInvLogisticsIdDeleteMutation,
  useGetTrnInvLogisticsTrnInvLogisticsIdGetQuery,
  useGetAlltrnInvLogisticsEventGetQuery,
  useCreateTrnInvLogisticstrnInvLogisticsEventPostMutation,
  useUpdateTrnInvLogisticstrnInvLogisticsEventIdPutMutation,
  useDeleteTrnInvLogisticstrnInvLogisticsEventIdDeleteMutation,
  useGetTrnInvLogisticstrnInvLogisticsEventIdGetQuery,
  useGetAllTrnInvLogisticsDtlGetQuery,
  useCreateTrnInvLogisticsDtlTrnInvLogisticsDtlPostMutation,
  useUpdateTrnInvLogisticsDtlTrnInvLogisticsDtlIdPutMutation,
  useDeleteTrnInvLogisticsDtlTrnInvLogisticsDtlIdDeleteMutation,
  useGetTrnInvLogisticsDtlTrnInvLogisticsDtlIdGetQuery,
  useGetAlltrnInvLogisticsDtlEventGetQuery,
  useCreateTrnInvLogisticsDtltrnInvLogisticsDtlEventPostMutation,
  useUpdateTrnInvLogisticsDtltrnInvLogisticsDtlEventIdPutMutation,
  useDeleteTrnInvLogisticsDtltrnInvLogisticsDtlEventIdDeleteMutation,
  useGetTrnInvLogisticsDtltrnInvLogisticsDtlEventIdGetQuery,
  useGetAllTrnInvLogisticsWorkflowGetQuery,
  useCreateTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowPostMutation,
  useUpdateTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdPutMutation,
  useDeleteTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdDeleteMutation,
  useGetTrnInvLogisticsWorkflowTrnInvLogisticsWorkflowIdGetQuery,
  useGetAlltrnInvLogisticsWorkflowEventGetQuery,
  useCreateTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventPostMutation,
  useUpdateTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdPutMutation,
  useDeleteTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdDeleteMutation,
  useGetTrnInvLogisticsWorkflowtrnInvLogisticsWorkflowEventIdGetQuery,
  useGetAllTrnInvPurchaseGetQuery,
  useCreateTrnInvPurchaseTrnInvPurchasePostMutation,
  useUpdateTrnInvPurchaseTrnInvPurchaseIdPutMutation,
  useDeleteTrnInvPurchaseTrnInvPurchaseIdDeleteMutation,
  useGetTrnInvPurchaseTrnInvPurchaseIdGetQuery,
  useGetAlltrnInvPurchaseEventGetQuery,
  useCreateTrnInvPurchasetrnInvPurchaseEventPostMutation,
  useUpdateTrnInvPurchasetrnInvPurchaseEventIdPutMutation,
  useDeleteTrnInvPurchasetrnInvPurchaseEventIdDeleteMutation,
  useGetTrnInvPurchasetrnInvPurchaseEventIdGetQuery,
  useGetAllTrnInvPurchaseDocumentGetQuery,
  useCreateTrnInvPurchaseDocumentTrnInvPurchaseDocumentPostMutation,
  useUpdateTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdPutMutation,
  useDeleteTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdDeleteMutation,
  useGetTrnInvPurchaseDocumentTrnInvPurchaseDocumentIdGetQuery,
  useGetAlltrnInvPurchaseDocumentEventGetQuery,
  useCreateTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventPostMutation,
  useUpdateTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdPutMutation,
  useDeleteTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdDeleteMutation,
  useGetTrnInvPurchaseDocumenttrnInvPurchaseDocumentEventIdGetQuery,
  useGetAllTrnInvPurchaseItemsGetQuery,
  useCreateTrnInvPurchaseItemsTrnInvPurchaseItemsPostMutation,
  useUpdateTrnInvPurchaseItemsTrnInvPurchaseItemsIdPutMutation,
  useDeleteTrnInvPurchaseItemsTrnInvPurchaseItemsIdDeleteMutation,
  useGetTrnInvPurchaseItemsTrnInvPurchaseItemsIdGetQuery,
  useGetAlltrnInvPurchaseItemsEventGetQuery,
  useCreateTrnInvPurchaseItemstrnInvPurchaseItemsEventPostMutation,
  useUpdateTrnInvPurchaseItemstrnInvPurchaseItemsEventIdPutMutation,
  useDeleteTrnInvPurchaseItemstrnInvPurchaseItemsEventIdDeleteMutation,
  useGetTrnInvPurchaseItemstrnInvPurchaseItemsEventIdGetQuery,
  useGetAllTrnInvPurchaseReqGetQuery,
  useCreateTrnInvPurchaseReqTrnInvPurchaseReqPostMutation,
  useUpdateTrnInvPurchaseReqTrnInvPurchaseReqIdPutMutation,
  useDeleteTrnInvPurchaseReqTrnInvPurchaseReqIdDeleteMutation,
  useGetTrnInvPurchaseReqTrnInvPurchaseReqIdGetQuery,
  useGetAlltrnInvPurchaseReqEventGetQuery,
  useCreateTrnInvPurchaseReqtrnInvPurchaseReqEventPostMutation,
  useUpdateTrnInvPurchaseReqtrnInvPurchaseReqEventIdPutMutation,
  useDeleteTrnInvPurchaseReqtrnInvPurchaseReqEventIdDeleteMutation,
  useGetTrnInvPurchaseReqtrnInvPurchaseReqEventIdGetQuery,
  useGetAllTrnProductivityGetQuery,
  useCreateTrnProductivityTrnProductivityPostMutation,
  useUpdateTrnProductivityTrnProductivityIdPutMutation,
  useDeleteTrnProductivityTrnProductivityIdDeleteMutation,
  useGetTrnProductivityTrnProductivityIdGetQuery,
  useGetAlltrnProductivityEventGetQuery,
  useCreateTrnProductivitytrnProductivityEventPostMutation,
  useUpdateTrnProductivitytrnProductivityEventIdPutMutation,
  useDeleteTrnProductivitytrnProductivityEventIdDeleteMutation,
  useGetTrnProductivitytrnProductivityEventIdGetQuery,
  useGetAllTrnProductivityAttributeGetQuery,
  useCreateTrnProductivityAttributeTrnProductivityAttributePostMutation,
  useUpdateTrnProductivityAttributeTrnProductivityAttributeIdPutMutation,
  useDeleteTrnProductivityAttributeTrnProductivityAttributeIdDeleteMutation,
  useGetTrnProductivityAttributeTrnProductivityAttributeIdGetQuery,
  useGetAlltrnProductivityAttributeEventGetQuery,
  useCreateTrnProductivityAttributetrnProductivityAttributeEventPostMutation,
  useUpdateTrnProductivityAttributetrnProductivityAttributeEventIdPutMutation,
  useDeleteTrnProductivityAttributetrnProductivityAttributeEventIdDeleteMutation,
  useGetTrnProductivityAttributetrnProductivityAttributeEventIdGetQuery,
  useGetAllTrnPurchaseorderWorkflowGetQuery,
  useCreateTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowPostMutation,
  useUpdateTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdPutMutation,
  useDeleteTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdDeleteMutation,
  useGetTrnPurchaseorderWorkflowTrnPurchaseorderWorkflowIdGetQuery,
  useGetAlltrnPurchaseorderWorkflowEventGetQuery,
  useCreateTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventPostMutation,
  useUpdateTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdPutMutation,
  useDeleteTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdDeleteMutation,
  useGetTrnPurchaseorderWorkflowtrnPurchaseorderWorkflowEventIdGetQuery,
  useGetAllTrnPurchaseAttributesGetQuery,
  useCreateTrnPurchaseAttributesTrnPurchaseAttributesPostMutation,
  useUpdateTrnPurchaseAttributesTrnPurchaseAttributesIdPutMutation,
  useDeleteTrnPurchaseAttributesTrnPurchaseAttributesIdDeleteMutation,
  useGetTrnPurchaseAttributesTrnPurchaseAttributesIdGetQuery,
  useGetAlltrnPurchaseAttributesEventGetQuery,
  useCreateTrnPurchaseAttributestrnPurchaseAttributesEventPostMutation,
  useUpdateTrnPurchaseAttributestrnPurchaseAttributesEventIdPutMutation,
  useDeleteTrnPurchaseAttributestrnPurchaseAttributesEventIdDeleteMutation,
  useGetTrnPurchaseAttributestrnPurchaseAttributesEventIdGetQuery,
  useGetAllTrnPurchaseOrderGetQuery,
  useCreateTrnPurchaseOrderTrnPurchaseOrderPostMutation,
  useUpdateTrnPurchaseOrderTrnPurchaseOrderIdPutMutation,
  useDeleteTrnPurchaseOrderTrnPurchaseOrderIdDeleteMutation,
  useGetTrnPurchaseOrderTrnPurchaseOrderIdGetQuery,
  useGetAlltrnPurchaseOrderEventGetQuery,
  useCreateTrnPurchaseOrdertrnPurchaseOrderEventPostMutation,
  useUpdateTrnPurchaseOrdertrnPurchaseOrderEventIdPutMutation,
  useDeleteTrnPurchaseOrdertrnPurchaseOrderEventIdDeleteMutation,
  useGetTrnPurchaseOrdertrnPurchaseOrderEventIdGetQuery,
  useGetAllTrnPurchaseOrderAttributesGetQuery,
  useCreateTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesPostMutation,
  useUpdateTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdPutMutation,
  useDeleteTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdDeleteMutation,
  useGetTrnPurchaseOrderAttributesTrnPurchaseOrderAttributesIdGetQuery,
  useGetAlltrnPurchaseOrderAttributesEventGetQuery,
  useCreateTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventPostMutation,
  useUpdateTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdPutMutation,
  useDeleteTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdDeleteMutation,
  useGetTrnPurchaseOrderAttributestrnPurchaseOrderAttributesEventIdGetQuery,
  useGetAllTrnPurchaseOrderItemsGetQuery,
  useCreateTrnPurchaseOrderItemsTrnPurchaseOrderItemsPostMutation,
  useUpdateTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdPutMutation,
  useDeleteTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdDeleteMutation,
  useGetTrnPurchaseOrderItemsTrnPurchaseOrderItemsIdGetQuery,
  useGetAlltrnPurchaseOrderItemsEventGetQuery,
  useCreateTrnPurchaseOrderItemstrnPurchaseOrderItemsEventPostMutation,
  useUpdateTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdPutMutation,
  useDeleteTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdDeleteMutation,
  useGetTrnPurchaseOrderItemstrnPurchaseOrderItemsEventIdGetQuery,
  useGetAllTrnPurchaseOrderTermsGetQuery,
  useCreateTrnPurchaseOrderTermsTrnPurchaseOrderTermsPostMutation,
  useUpdateTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdPutMutation,
  useDeleteTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdDeleteMutation,
  useGetTrnPurchaseOrderTermsTrnPurchaseOrderTermsIdGetQuery,
  useGetAlltrnPurchaseOrderTermsEventGetQuery,
  useCreateTrnPurchaseOrderTermstrnPurchaseOrderTermsEventPostMutation,
  useUpdateTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdPutMutation,
  useDeleteTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdDeleteMutation,
  useGetTrnPurchaseOrderTermstrnPurchaseOrderTermsEventIdGetQuery,
  useGetAllTrnPurchaseReqItemsGetQuery,
  useCreateTrnPurchaseReqItemsTrnPurchaseReqItemsPostMutation,
  useUpdateTrnPurchaseReqItemsTrnPurchaseReqItemsIdPutMutation,
  useDeleteTrnPurchaseReqItemsTrnPurchaseReqItemsIdDeleteMutation,
  useGetTrnPurchaseReqItemsTrnPurchaseReqItemsIdGetQuery,
  useGetAlltrnPurchaseReqItemsEventGetQuery,
  useCreateTrnPurchaseReqItemstrnPurchaseReqItemsEventPostMutation,
  useUpdateTrnPurchaseReqItemstrnPurchaseReqItemsEventIdPutMutation,
  useDeleteTrnPurchaseReqItemstrnPurchaseReqItemsEventIdDeleteMutation,
  useGetTrnPurchaseReqItemstrnPurchaseReqItemsEventIdGetQuery,
  useGetAllTrnPurchaseReqWorkflowGetQuery,
  useCreateTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowPostMutation,
  useUpdateTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdPutMutation,
  useDeleteTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdDeleteMutation,
  useGetTrnPurchaseReqWorkflowTrnPurchaseReqWorkflowIdGetQuery,
  useGetAlltrnPurchaseReqWorkflowEventGetQuery,
  useCreateTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventPostMutation,
  useUpdateTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdPutMutation,
  useDeleteTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdDeleteMutation,
  useGetTrnPurchaseReqWorkflowtrnPurchaseReqWorkflowEventIdGetQuery,
  useGetAllTrnPurchaseWorkflowGetQuery,
  useCreateTrnPurchaseWorkflowTrnPurchaseWorkflowPostMutation,
  useUpdateTrnPurchaseWorkflowTrnPurchaseWorkflowIdPutMutation,
  useDeleteTrnPurchaseWorkflowTrnPurchaseWorkflowIdDeleteMutation,
  useGetTrnPurchaseWorkflowTrnPurchaseWorkflowIdGetQuery,
  useGetAlltrnPurchaseWorkflowEventGetQuery,
  useCreateTrnPurchaseWorkflowtrnPurchaseWorkflowEventPostMutation,
  useUpdateTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdPutMutation,
  useDeleteTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdDeleteMutation,
  useGetTrnPurchaseWorkflowtrnPurchaseWorkflowEventIdGetQuery,
  useGetAllTrnRoutineServiceCheckGetQuery,
  useCreateTrnRoutineServiceCheckTrnRoutineServiceCheckPostMutation,
  useUpdateTrnRoutineServiceCheckTrnRoutineServiceCheckIdPutMutation,
  useDeleteTrnRoutineServiceCheckTrnRoutineServiceCheckIdDeleteMutation,
  useGetTrnRoutineServiceCheckTrnRoutineServiceCheckIdGetQuery,
  useGetAlltrnRoutineServiceCheckEventGetQuery,
  useCreateTrnRoutineServiceChecktrnRoutineServiceCheckEventPostMutation,
  useUpdateTrnRoutineServiceChecktrnRoutineServiceCheckEventIdPutMutation,
  useDeleteTrnRoutineServiceChecktrnRoutineServiceCheckEventIdDeleteMutation,
  useGetTrnRoutineServiceChecktrnRoutineServiceCheckEventIdGetQuery,
  useGetAllTrnShiftFuelOpeningGetQuery,
  useCreateTrnShiftFuelOpeningTrnShiftFuelOpeningPostMutation,
  useUpdateTrnShiftFuelOpeningTrnShiftFuelOpeningIdPutMutation,
  useDeleteTrnShiftFuelOpeningTrnShiftFuelOpeningIdDeleteMutation,
  useGetTrnShiftFuelOpeningTrnShiftFuelOpeningIdGetQuery,
  useGetAlltrnShiftFuelOpeningEventGetQuery,
  useCreateTrnShiftFuelOpeningtrnShiftFuelOpeningEventPostMutation,
  useUpdateTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdPutMutation,
  useDeleteTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdDeleteMutation,
  useGetTrnShiftFuelOpeningtrnShiftFuelOpeningEventIdGetQuery,
  useGetAllTrnTicketGetQuery,
  useCreateTrnTicketTrnTicketPostMutation,
  useUpdateTrnTicketTrnTicketIdPutMutation,
  useDeleteTrnTicketTrnTicketIdDeleteMutation,
  useGetTrnTicketTrnTicketIdGetQuery,
  useGetAlltrnTicketEventGetQuery,
  useCreateTrnTickettrnTicketEventPostMutation,
  useUpdateTrnTickettrnTicketEventIdPutMutation,
  useDeleteTrnTickettrnTicketEventIdDeleteMutation,
  useGetTrnTickettrnTicketEventIdGetQuery,
  useGetAllTrnTicketAttributeGetQuery,
  useCreateTrnTicketAttributeTrnTicketAttributePostMutation,
  useUpdateTrnTicketAttributeTrnTicketAttributeIdPutMutation,
  useDeleteTrnTicketAttributeTrnTicketAttributeIdDeleteMutation,
  useGetTrnTicketAttributeTrnTicketAttributeIdGetQuery,
  useGetAlltrnTicketAttributeEventGetQuery,
  useCreateTrnTicketAttributetrnTicketAttributeEventPostMutation,
  useUpdateTrnTicketAttributetrnTicketAttributeEventIdPutMutation,
  useDeleteTrnTicketAttributetrnTicketAttributeEventIdDeleteMutation,
  useGetTrnTicketAttributetrnTicketAttributeEventIdGetQuery,
  useGetAllTrnTicketDocumentsGetQuery,
  useCreateTrnTicketDocumentsTrnTicketDocumentsPostMutation,
  useUpdateTrnTicketDocumentsTrnTicketDocumentsIdPutMutation,
  useDeleteTrnTicketDocumentsTrnTicketDocumentsIdDeleteMutation,
  useGetTrnTicketDocumentsTrnTicketDocumentsIdGetQuery,
  useGetAlltrnTicketDocumentsEventGetQuery,
  useCreateTrnTicketDocumentstrnTicketDocumentsEventPostMutation,
  useUpdateTrnTicketDocumentstrnTicketDocumentsEventIdPutMutation,
  useDeleteTrnTicketDocumentstrnTicketDocumentsEventIdDeleteMutation,
  useGetTrnTicketDocumentstrnTicketDocumentsEventIdGetQuery,
  useGetAllTrnTicketWorkflowGetQuery,
  useCreateTrnTicketWorkflowTrnTicketWorkflowPostMutation,
  useUpdateTrnTicketWorkflowTrnTicketWorkflowIdPutMutation,
  useDeleteTrnTicketWorkflowTrnTicketWorkflowIdDeleteMutation,
  useGetTrnTicketWorkflowTrnTicketWorkflowIdGetQuery,
  useGetAlltrnTicketWorkflowEventGetQuery,
  useCreateTrnTicketWorkflowtrnTicketWorkflowEventPostMutation,
  useUpdateTrnTicketWorkflowtrnTicketWorkflowEventIdPutMutation,
  useDeleteTrnTicketWorkflowtrnTicketWorkflowEventIdDeleteMutation,
  useGetTrnTicketWorkflowtrnTicketWorkflowEventIdGetQuery,
  useGetAllTrnWarehouseIndentGetQuery,
  useCreateTrnWarehouseIndentTrnWarehouseIndentPostMutation,
  useUpdateTrnWarehouseIndentTrnWarehouseIndentIdPutMutation,
  useDeleteTrnWarehouseIndentTrnWarehouseIndentIdDeleteMutation,
  useGetTrnWarehouseIndentTrnWarehouseIndentIdGetQuery,
  useGetAlltrnWarehouseIndentEventGetQuery,
  useCreateTrnWarehouseIndenttrnWarehouseIndentEventPostMutation,
  useUpdateTrnWarehouseIndenttrnWarehouseIndentEventIdPutMutation,
  useDeleteTrnWarehouseIndenttrnWarehouseIndentEventIdDeleteMutation,
  useGetTrnWarehouseIndenttrnWarehouseIndentEventIdGetQuery,
  useGetAllTrnWarehouseIndentAttributeGetQuery,
  useCreateTrnWarehouseIndentAttributeTrnWarehouseIndentAttributePostMutation,
  useUpdateTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdPutMutation,
  useDeleteTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdDeleteMutation,
  useGetTrnWarehouseIndentAttributeTrnWarehouseIndentAttributeIdGetQuery,
  useGetAlltrnWarehouseIndentAttributeEventGetQuery,
  useCreateTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventPostMutation,
  useUpdateTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdPutMutation,
  useDeleteTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdDeleteMutation,
  useGetTrnWarehouseIndentAttributetrnWarehouseIndentAttributeEventIdGetQuery,
  useGetAllTrnWarehouseIndentItemsGetQuery,
  useCreateTrnWarehouseIndentItemsTrnWarehouseIndentItemsPostMutation,
  useUpdateTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdPutMutation,
  useDeleteTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdDeleteMutation,
  useGetTrnWarehouseIndentItemsTrnWarehouseIndentItemsIdGetQuery,
  useGetAlltrnWarehouseIndentItemsEventGetQuery,
  useCreateTrnWarehouseIndentItemstrnWarehouseIndentItemsEventPostMutation,
  useUpdateTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdPutMutation,
  useDeleteTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdDeleteMutation,
  useGetTrnWarehouseIndentItemstrnWarehouseIndentItemsEventIdGetQuery,
  useGetAllTrnWarehouseIndentWorkflowGetQuery,
  useCreateTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowPostMutation,
  useUpdateTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdPutMutation,
  useDeleteTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdDeleteMutation,
  useGetTrnWarehouseIndentWorkflowTrnWarehouseIndentWorkflowIdGetQuery,
  useGetAlltrnWarehouseIndentWorkflowEventGetQuery,
  useCreateTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventPostMutation,
  useUpdateTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdPutMutation,
  useDeleteTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdDeleteMutation,
  useGetTrnWarehouseIndentWorkflowtrnWarehouseIndentWorkflowEventIdGetQuery
} = injectedRtkApi;
