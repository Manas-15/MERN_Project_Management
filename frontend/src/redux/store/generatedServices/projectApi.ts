import { projectBaseApi as api } from '../base/projectBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getGanttchartDetailsForProgramProjectsIdGanttchartProgramGet: build.query<
      GetGanttchartDetailsForProgramProjectsIdGanttchartProgramGetApiResponse,
      GetGanttchartDetailsForProgramProjectsIdGanttchartProgramGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/ganttchart/program`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    createProjectsPost: build.mutation<
      CreateProjectsPostApiResponse,
      CreateProjectsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/`,
        method: 'POST',
        body: queryArg.projectBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllProjectProjectsGet: build.query<
      GetAllProjectProjectsGetApiResponse,
      GetAllProjectProjectsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          tenant_id: queryArg.tenantId,
          id__in: queryArg.idIn,
          project_status_name: queryArg.projectStatusName,
          created_by: queryArg.createdBy,
          project_status_name__icontains: queryArg.projectStatusNameIcontains,
          workspace_id: queryArg.workspaceId,
          type: queryArg['type'],
          parent_id: queryArg.parentId,
          program_id: queryArg.programId,
          organization_id: queryArg.organizationId,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getHierarchyProjectsHierarchyGet: build.query<
      GetHierarchyProjectsHierarchyGetApiResponse,
      GetHierarchyProjectsHierarchyGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/hierarchy`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          entity_type: queryArg.entityType,
          entity_id: queryArg.entityId
        }
      })
    }),
    getProgramToTaskHierarchyProjectsProgramToTaskHierarchyGet: build.query<
      GetProgramToTaskHierarchyProjectsProgramToTaskHierarchyGetApiResponse,
      GetProgramToTaskHierarchyProjectsProgramToTaskHierarchyGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/program_to_task_hierarchy`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          entity_type: queryArg.entityType,
          entity_id: queryArg.entityId
        }
      })
    }),
    getPriorityProjectsPriorityGet: build.query<
      GetPriorityProjectsPriorityGetApiResponse,
      GetPriorityProjectsPriorityGetApiArg
    >({
      query: () => ({ url: `/projects/priority` })
    }),
    getStatusProjectsStatusGet: build.query<
      GetStatusProjectsStatusGetApiResponse,
      GetStatusProjectsStatusGetApiArg
    >({
      query: () => ({ url: `/projects/status` })
    }),
    getProjectCardviewProjectsCardviewGet: build.query<
      GetProjectCardviewProjectsCardviewGetApiResponse,
      GetProjectCardviewProjectsCardviewGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/cardview`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          tenant_id: queryArg.tenantId,
          id__in: queryArg.idIn,
          project_status_name: queryArg.projectStatusName,
          created_by: queryArg.createdBy,
          project_status_name__icontains: queryArg.projectStatusNameIcontains,
          workspace_id: queryArg.workspaceId,
          type: queryArg['type'],
          parent_id: queryArg.parentId,
          program_id: queryArg.programId,
          organization_id: queryArg.organizationId,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getProjectStatsProjectsIdStatsGet: build.query<
      GetProjectStatsProjectsIdStatsGetApiResponse,
      GetProjectStatsProjectsIdStatsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/stats`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getProjectsIdGet: build.query<
      GetProjectsIdGetApiResponse,
      GetProjectsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateProjectsIdPut: build.mutation<
      UpdateProjectsIdPutApiResponse,
      UpdateProjectsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.projectBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteProjectsIdDelete: build.mutation<
      DeleteProjectsIdDeleteApiResponse,
      DeleteProjectsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          delete_type: queryArg.deleteType
        }
      })
    }),
    getProjectManagerProjectsIdManagerGet: build.query<
      GetProjectManagerProjectsIdManagerGetApiResponse,
      GetProjectManagerProjectsIdManagerGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/manager`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateProjectManagerProjectsIdManagerPatch: build.mutation<
      UpdateProjectManagerProjectsIdManagerPatchApiResponse,
      UpdateProjectManagerProjectsIdManagerPatchApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/manager`,
        method: 'PATCH',
        body: queryArg.projectManagerBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteProjectManagerProjectsIdManagerDelete: build.mutation<
      DeleteProjectManagerProjectsIdManagerDeleteApiResponse,
      DeleteProjectManagerProjectsIdManagerDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/manager`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getProjectBudgetProjectsIdBudgetGet: build.query<
      GetProjectBudgetProjectsIdBudgetGetApiResponse,
      GetProjectBudgetProjectsIdBudgetGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/budget`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateProjectBudgetProjectsIdBudgetPatch: build.mutation<
      UpdateProjectBudgetProjectsIdBudgetPatchApiResponse,
      UpdateProjectBudgetProjectsIdBudgetPatchApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/budget`,
        method: 'PATCH',
        body: queryArg.projectBudgetBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteProjectBudgetProjectsIdBudgetDelete: build.mutation<
      DeleteProjectBudgetProjectsIdBudgetDeleteApiResponse,
      DeleteProjectBudgetProjectsIdBudgetDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/budget`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createMemberProjectsIdMembersPost: build.mutation<
      CreateMemberProjectsIdMembersPostApiResponse,
      CreateMemberProjectsIdMembersPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/members`,
        method: 'POST',
        body: queryArg.projectResourceBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllMembersProjectsIdMembersGet: build.query<
      GetAllMembersProjectsIdMembersGetApiResponse,
      GetAllMembersProjectsIdMembersGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/members`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          project_id: queryArg.projectId,
          project_id__icontains: queryArg.projectIdIcontains,
          resource_id: queryArg.resourceId,
          resource_id__icontains: queryArg.resourceIdIcontains,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    deleteMemberProjectsIdMembersMemberIdDelete: build.mutation<
      DeleteMemberProjectsIdMembersMemberIdDeleteApiResponse,
      DeleteMemberProjectsIdMembersMemberIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/members/${queryArg.memberId}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    membersMultiupdateProjectsMembersMultiupdateDelete: build.mutation<
      MembersMultiupdateProjectsMembersMultiupdateDeleteApiResponse,
      MembersMultiupdateProjectsMembersMultiupdateDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/members/multiupdate`,
        method: 'DELETE',
        body: queryArg.projectMemberMultiSelect,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getProjectCustomerProjectsIdClientGet: build.query<
      GetProjectCustomerProjectsIdClientGetApiResponse,
      GetProjectCustomerProjectsIdClientGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/client`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateProjectClientProjectsIdClientPatch: build.mutation<
      UpdateProjectClientProjectsIdClientPatchApiResponse,
      UpdateProjectClientProjectsIdClientPatchApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/client`,
        method: 'PATCH',
        body: queryArg.projectCustomerUpdateRespone,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteProjectClientProjectsIdClientDelete: build.mutation<
      DeleteProjectClientProjectsIdClientDeleteApiResponse,
      DeleteProjectClientProjectsIdClientDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/client`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getGanttchartDetailsProjectsIdGanttchartGet: build.query<
      GetGanttchartDetailsProjectsIdGanttchartGetApiResponse,
      GetGanttchartDetailsProjectsIdGanttchartGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/ganttchart`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    createProjectsIdFlexfieldPost: build.mutation<
      CreateProjectsIdFlexfieldPostApiResponse,
      CreateProjectsIdFlexfieldPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/projects/${queryArg.id}/flexfield`,
        method: 'POST',
        body: queryArg.flexFieldValueBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getProjectBoardBoardBoardProjectIdTasksGet: build.query<
      GetProjectBoardBoardBoardProjectIdTasksGetApiResponse,
      GetProjectBoardBoardBoardProjectIdTasksGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/board/board/${queryArg.projectId}/tasks/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          created_by: queryArg.createdBy,
          task_title__icontains: queryArg.taskTitleIcontains,
          task_state: queryArg.taskState,
          task_state__in: queryArg.taskStateIn,
          project_id__in: queryArg.projectIdIn,
          task_priority: queryArg.taskPriority,
          task_priority__icontains: queryArg.taskPriorityIcontains,
          task_type: queryArg.taskType,
          task_type__icontains: queryArg.taskTypeIcontains,
          due_date: queryArg.dueDate,
          assigned_to: queryArg.assignedTo,
          assigned_to__in: queryArg.assignedToIn,
          tenant_id: queryArg.tenantId,
          tenant_id__in: queryArg.tenantIdIn,
          parent_task_id: queryArg.parentTaskId,
          deligated_user: queryArg.deligatedUser,
          task_title: queryArg.taskTitle,
          status: queryArg.status,
          status__in: queryArg.statusIn,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getProjectBoardByStatusBoardBoardProjectIdTaskStatusTasksGet: build.query<
      GetProjectBoardByStatusBoardBoardProjectIdTaskStatusTasksGetApiResponse,
      GetProjectBoardByStatusBoardBoardProjectIdTaskStatusTasksGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/board/board/${queryArg.projectId}/${queryArg.taskStatus}/tasks/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          created_by: queryArg.createdBy,
          task_title__icontains: queryArg.taskTitleIcontains,
          task_state: queryArg.taskState,
          task_state__in: queryArg.taskStateIn,
          project_id__in: queryArg.projectIdIn,
          task_priority: queryArg.taskPriority,
          task_priority__icontains: queryArg.taskPriorityIcontains,
          task_type: queryArg.taskType,
          task_type__icontains: queryArg.taskTypeIcontains,
          due_date: queryArg.dueDate,
          assigned_to: queryArg.assignedTo,
          assigned_to__in: queryArg.assignedToIn,
          tenant_id: queryArg.tenantId,
          tenant_id__in: queryArg.tenantIdIn,
          parent_task_id: queryArg.parentTaskId,
          deligated_user: queryArg.deligatedUser,
          task_title: queryArg.taskTitle,
          status: queryArg.status,
          status__in: queryArg.statusIn,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    })
  }),
  overrideExisting: false
});
export { injectedRtkApi as projectApi };
export type GetGanttchartDetailsForProgramProjectsIdGanttchartProgramGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetGanttchartDetailsForProgramProjectsIdGanttchartProgramGetApiArg =
  {
    id: number;
    page?: number;
    size?: number;
    getAll?: boolean;
    'x-tenant-id': number;
  };
export type CreateProjectsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateProjectsPostApiArg = {
  'x-tenant-id': number;
  projectBaseCreate: ProjectBaseCreate;
};
export type GetAllProjectProjectsGetApiResponse =
  /** status 200 Successful Response */ PaginatedProjectDetaillistBaseResponse;
export type GetAllProjectProjectsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  tenantId?: number | null;
  idIn?: string | null;
  projectStatusName?: string | null;
  createdBy?: string | null;
  projectStatusNameIcontains?: string | null;
  workspaceId?: number | null;
  type?: TypeEnum | null;
  parentId?: number | null;
  programId?: number | null;
  organizationId?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetHierarchyProjectsHierarchyGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetHierarchyProjectsHierarchyGetApiArg = {
  /** The type of the entity */
  entityType: string;
  /** The ID of the entity */
  entityId: number;
  'x-tenant-id': number;
};
export type GetProgramToTaskHierarchyProjectsProgramToTaskHierarchyGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetProgramToTaskHierarchyProjectsProgramToTaskHierarchyGetApiArg = {
  /** The type of the entity */
  entityType: string;
  /** The ID of the entity */
  entityId: number;
  'x-tenant-id': number;
};
export type GetPriorityProjectsPriorityGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetPriorityProjectsPriorityGetApiArg = void;
export type GetStatusProjectsStatusGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetStatusProjectsStatusGetApiArg = void;
export type GetProjectCardviewProjectsCardviewGetApiResponse =
  /** status 200 Successful Response */ PaginatedProjectDetailBaseResponse;
export type GetProjectCardviewProjectsCardviewGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  tenantId?: number | null;
  idIn?: string | null;
  projectStatusName?: string | null;
  createdBy?: string | null;
  projectStatusNameIcontains?: string | null;
  workspaceId?: number | null;
  type?: TypeEnum | null;
  parentId?: number | null;
  programId?: number | null;
  organizationId?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetProjectStatsProjectsIdStatsGetApiResponse =
  /** status 200 Successful Response */ ProjectStatsResponse;
export type GetProjectStatsProjectsIdStatsGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type GetProjectsIdGetApiResponse =
  /** status 200 Successful Response */ ProjectDetailBaseResponse;
export type GetProjectsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateProjectsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateProjectsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  projectBaseUpdate: ProjectBaseUpdate;
};
export type DeleteProjectsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteProjectsIdDeleteApiArg = {
  id: number;
  deleteType?: DeleteTypeEnum | null;
  'x-tenant-id': number;
};
export type GetProjectManagerProjectsIdManagerGetApiResponse =
  /** status 200 Successful Response */ ProjectManagerBase;
export type GetProjectManagerProjectsIdManagerGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateProjectManagerProjectsIdManagerPatchApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateProjectManagerProjectsIdManagerPatchApiArg = {
  id: number;
  'x-tenant-id': number;
  projectManagerBaseUpdate: ProjectManagerBaseUpdate;
};
export type DeleteProjectManagerProjectsIdManagerDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteProjectManagerProjectsIdManagerDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type GetProjectBudgetProjectsIdBudgetGetApiResponse =
  /** status 200 Successful Response */ ProjectBudgetBase;
export type GetProjectBudgetProjectsIdBudgetGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateProjectBudgetProjectsIdBudgetPatchApiResponse =
  /** status 200 Successful Response */ ProjectBudgetBase;
export type UpdateProjectBudgetProjectsIdBudgetPatchApiArg = {
  id: number;
  'x-tenant-id': number;
  projectBudgetBaseUpdate: ProjectBudgetBaseUpdate;
};
export type DeleteProjectBudgetProjectsIdBudgetDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteProjectBudgetProjectsIdBudgetDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateMemberProjectsIdMembersPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateMemberProjectsIdMembersPostApiArg = {
  id: number;
  'x-tenant-id': number;
  projectResourceBaseCreate: ProjectResourceBaseCreate;
};
export type GetAllMembersProjectsIdMembersGetApiResponse =
  /** status 200 Successful Response */ PaginatedResourceMemberBaseResponse;
export type GetAllMembersProjectsIdMembersGetApiArg = {
  id: number;
  orderBy?: string | null;
  projectId?: number | null;
  projectIdIcontains?: string | null;
  resourceId?: number | null;
  resourceIdIcontains?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type DeleteMemberProjectsIdMembersMemberIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteMemberProjectsIdMembersMemberIdDeleteApiArg = {
  id: number;
  memberId: number;
  'x-tenant-id': number;
};
export type MembersMultiupdateProjectsMembersMultiupdateDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type MembersMultiupdateProjectsMembersMultiupdateDeleteApiArg = {
  'x-tenant-id': number;
  projectMemberMultiSelect: ProjectMemberMultiSelect;
};
export type GetProjectCustomerProjectsIdClientGetApiResponse =
  /** status 200 Successful Response */ ProjectCustomerBaseResponse;
export type GetProjectCustomerProjectsIdClientGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateProjectClientProjectsIdClientPatchApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateProjectClientProjectsIdClientPatchApiArg = {
  id: number;
  'x-tenant-id': number;
  projectCustomerUpdateRespone: ProjectCustomerUpdateRespone;
};
export type DeleteProjectClientProjectsIdClientDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteProjectClientProjectsIdClientDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type GetGanttchartDetailsProjectsIdGanttchartGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetGanttchartDetailsProjectsIdGanttchartGetApiArg = {
  id: number;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type CreateProjectsIdFlexfieldPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateProjectsIdFlexfieldPostApiArg = {
  id: number;
  'x-tenant-id': number;
  flexFieldValueBaseCreate: FlexFieldValueBaseCreate;
};
export type GetProjectBoardBoardBoardProjectIdTasksGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetProjectBoardBoardBoardProjectIdTasksGetApiArg = {
  projectId: number | null;
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  createdBy?: string | null;
  taskTitleIcontains?: string | null;
  taskState?: string | null;
  taskStateIn?: string | null;
  projectIdIn?: string | null;
  taskPriority?: string | null;
  taskPriorityIcontains?: string | null;
  taskType?: string | null;
  taskTypeIcontains?: string | null;
  dueDate?: string | null;
  assignedTo?: number | null;
  assignedToIn?: string | null;
  tenantId?: number | null;
  tenantIdIn?: string | null;
  parentTaskId?: number | null;
  deligatedUser?: number | null;
  taskTitle?: string | null;
  status?: string | null;
  statusIn?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetProjectBoardByStatusBoardBoardProjectIdTaskStatusTasksGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetProjectBoardByStatusBoardBoardProjectIdTaskStatusTasksGetApiArg =
  {
    projectId: number | null;
    taskStatus: BoardStateEnum;
    orderBy?: string | null;
    id?: number | null;
    idIn?: string | null;
    createdBy?: string | null;
    taskTitleIcontains?: string | null;
    taskState?: string | null;
    taskStateIn?: string | null;
    projectIdIn?: string | null;
    taskPriority?: string | null;
    taskPriorityIcontains?: string | null;
    taskType?: string | null;
    taskTypeIcontains?: string | null;
    dueDate?: string | null;
    assignedTo?: number | null;
    assignedToIn?: string | null;
    tenantId?: number | null;
    tenantIdIn?: string | null;
    parentTaskId?: number | null;
    deligatedUser?: number | null;
    taskTitle?: string | null;
    status?: string | null;
    statusIn?: string | null;
    page?: number;
    size?: number;
    getAll?: boolean;
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
export type ProjectTypeEnum = 'w' | 'a';
export type ProjectStatusEnum =
  | 'not started'
  | 'started'
  | 'onhold'
  | 'stack'
  | 'complete';
export type TypeEnum = 'project' | 'program';
export type ProjectBaseCreate = {
  project_name: string;
  project_type?: ProjectTypeEnum | null;
  project_priority?: string | null;
  project_status?: ProjectStatusEnum | null;
  project_code?: string | null;
  project_description?: string | null;
  start_date: string;
  end_date?: string | null;
  completed_at?: string | null;
  estimated_hours?: number | null;
  default_task_type?: string | null;
  task_status_group?: string | null;
  type?: TypeEnum | null;
  parent_id?: number | null;
  program_id?: number | null;
  assign_to?: string | null;
  organization_id?: number | null;
};
export type MemberBaseResponse = {
  user_id?: string | null;
  resource_id?: number | null;
  project_id?: number | null;
  file_id?: number | null;
  tenant_id?: number | null;
  first_name?: string | null;
  email?: string | null;
  last_name?: string | null;
  profile_image?: string | null;
  resource_name?: string | null;
  resource_type?: string | null;
  visited_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: number | null;
  updated_by?: number | null;
};
export type ProjectDetaillistBaseResponse = {
  id: number;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  project_name?: string | null;
  project_type?: string | null;
  project_priority?: string | null;
  project_description?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  project_status?: string | null;
  task_count?: number | null;
  storage?: number | null;
  created_by?: string | null;
  project_code?: string | null;
  completed_at?: string | null;
  estimated_hours?: number | null;
  default_task_type?: string | null;
  task_status_group?: string | null;
  updated_by?: string | null;
  type?: string | null;
  parent_id?: number | null;
  program_id?: number | null;
  assign_to?: string | null;
  organization_id?: number | null;
  workspace_id?: number | null;
  workspace_name?: string | null;
  task_completed?: number | null;
  task_pending?: number | null;
  assign_to_name?: string | null;
  members?: MemberBaseResponse[] | null;
  progress?: number | null;
};
export type PaginatedMeta = {
  current_page: number;
  items_per_page: number;
  total_pages: number;
  total_items: number;
};
export type PaginatedProjectDetaillistBaseResponse = {
  items: ProjectDetaillistBaseResponse[];
  meta: PaginatedMeta;
};
export type ProjectDetailBaseResponse = {
  id: number;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  project_name?: string | null;
  project_type?: string | null;
  project_priority?: string | null;
  project_description?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  project_status?: string | null;
  task_count?: number | null;
  storage?: number | null;
  created_by?: string | null;
  project_code?: string | null;
  completed_at?: string | null;
  estimated_hours?: number | null;
  default_task_type?: string | null;
  task_status_group?: string | null;
  updated_by?: string | null;
  type?: string | null;
  parent_id?: number | null;
  program_id?: number | null;
  assign_to?: string | null;
  organization_id?: number | null;
  workspace_id?: number | null;
  workspace_name?: string | null;
  task_completed?: number | null;
  task_pending?: number | null;
  assign_to_name?: string | null;
  members?: MemberBaseResponse[] | null;
};
export type PaginatedProjectDetailBaseResponse = {
  items: ProjectDetailBaseResponse[];
  meta: PaginatedMeta;
};
export type ProjectStatsResponse = {
  total_completed_task?: number | null;
  total_pending_task?: number | null;
};
export type ProjectBaseUpdate = {
  project_name?: string | null;
  project_type?: string | null;
  project_priority?: string | null;
  project_status?: ProjectStatusEnum | null;
  created_by?: string | null;
  project_code?: string | null;
  project_description?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  completed_at?: string | null;
  estimated_hours?: number | null;
  default_task_type?: string | null;
  task_status_group?: string | null;
  updated_by?: string | null;
  project_template_id?: number | null;
  type?: TypeEnum | null;
  parent_id?: number | null;
  program_id?: number | null;
  assign_to?: string | null;
  organization_id?: number | null;
};
export type DeleteTypeEnum = 'program' | 'program_with_project';
export type ProjectManagerBase = {
  tenant_id: number;
  project_id: number;
  manager_id?: number | null;
  email?: string | null;
  name?: string | null;
};
export type ProjectManagerBaseUpdate = {
  manager_id?: number | null;
};
export type ProjectBudgetBase = {
  tenant_id: number;
  project_id: number;
  budget?: number | null;
  default_rate?: number | null;
  cost_approx?: number | null;
  approved_cost?: number | null;
  min_tolerance?: number | null;
  max_tolerance?: number | null;
  currency_code?: string | null;
};
export type ProjectBudgetBaseUpdate = {
  budget?: number | null;
  default_rate?: number | null;
  cost_approx?: number | null;
  approved_cost?: number | null;
  min_tolerance?: number | null;
  max_tolerance?: number | null;
  currency_code?: string | null;
};
export type ProjectResourceBaseCreate = {
  resource_ids: number[];
};
export type PaginatedResourceMemberBaseResponse = {
  items: MemberBaseResponse[];
  meta: PaginatedMeta;
  project_id: number;
};
export type ProjectMemberMultiSelect = {
  member_ids: number[];
  project_id?: number | null;
};
export type ProjectCustomerBaseResponse = {
  id?: number | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  street?: string | null;
  city?: string | null;
  state?: string | null;
  zipcode?: string | null;
  country?: string | null;
  currency_code?: string | null;
  phone_number?: string | null;
  customer_organization?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
};
export type ProjectCustomerUpdateRespone = {
  id?: number | null;
};
export type FlexFieldValueBaseCreate = {
  entity_type: string;
  entity_id: number;
  flex_fields?: object[];
};
export type BoardStateEnum = 'todo' | 'doing' | 'done';
export const {
  useGetGanttchartDetailsForProgramProjectsIdGanttchartProgramGetQuery,
  useCreateProjectsPostMutation,
  useGetAllProjectProjectsGetQuery,
  useGetHierarchyProjectsHierarchyGetQuery,
  useGetProgramToTaskHierarchyProjectsProgramToTaskHierarchyGetQuery,
  useGetPriorityProjectsPriorityGetQuery,
  useGetStatusProjectsStatusGetQuery,
  useGetProjectCardviewProjectsCardviewGetQuery,
  useGetProjectStatsProjectsIdStatsGetQuery,
  useGetProjectsIdGetQuery,
  useUpdateProjectsIdPutMutation,
  useDeleteProjectsIdDeleteMutation,
  useGetProjectManagerProjectsIdManagerGetQuery,
  useUpdateProjectManagerProjectsIdManagerPatchMutation,
  useDeleteProjectManagerProjectsIdManagerDeleteMutation,
  useGetProjectBudgetProjectsIdBudgetGetQuery,
  useUpdateProjectBudgetProjectsIdBudgetPatchMutation,
  useDeleteProjectBudgetProjectsIdBudgetDeleteMutation,
  useCreateMemberProjectsIdMembersPostMutation,
  useGetAllMembersProjectsIdMembersGetQuery,
  useDeleteMemberProjectsIdMembersMemberIdDeleteMutation,
  useMembersMultiupdateProjectsMembersMultiupdateDeleteMutation,
  useGetProjectCustomerProjectsIdClientGetQuery,
  useUpdateProjectClientProjectsIdClientPatchMutation,
  useDeleteProjectClientProjectsIdClientDeleteMutation,
  useGetGanttchartDetailsProjectsIdGanttchartGetQuery,
  useCreateProjectsIdFlexfieldPostMutation,
  useGetProjectBoardBoardBoardProjectIdTasksGetQuery,
  useGetProjectBoardByStatusBoardBoardProjectIdTaskStatusTasksGetQuery
} = injectedRtkApi;
