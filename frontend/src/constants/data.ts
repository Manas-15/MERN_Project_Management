import { NavItem } from 'types';

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Overview',
    url: '/dashboard/overview',
    icon: 'layout-dashboard',
    isActive: false,
    //shortcut: [''],
    items: []
  },

 

  {
    title: 'Employee Management',
    url: '#',
    icon: 'users',
    isActive: false,
    //shortcut: [''],
    items: [
      {
        title: 'Employees',
        url: '/dashboard/employee-management/employees',
        icon: 'user-circle'
        //shortcut: ['']
      },

      {
        title: 'Employee Assets',
        url: '/dashboard/employee-management/employee-assets',
        icon: 'hand-helping'
        //shortcut: ['']
      }
    ]
  },

];
export const settingsNavItems: NavItem[] = [
  {
    title: 'Configuration Management',
    url: '#',
    icon: 'settings-2',
    isActive: false,
    //shortcut: [''],
    items: [
      {
        title: 'Pop Lists',
        url: '/settings/configuration-management/pop-lists',
        icon: 'list-plus'
        //shortcut: ['']
      },

      {
        title: 'Configurations',
        url: '/settings/configuration-management/configurations',
        icon: 'settings'
        //shortcut: ['']
      },

      {
        title: 'Workflows',
        url: '/settings/configuration-management/workflows',
        icon: 'git-branch'
        //shortcut: ['']
      },

      {
        title: 'Documents',
        url: '/settings/configuration-management/documents',
        icon: 'file-text'
        //shortcut: ['']
      },

      {
        title: 'Roles',
        url: '/settings/configuration-management/roles',
        icon: 'shield'
        //shortcut: ['']
      },

      {
        title: 'Modules',
        url: '/settings/configuration-management/modules',
        icon: 'app-window'
        //shortcut: ['']
      },

      {
        title: 'Features',
        url: '/settings/configuration-management/features',
        icon: 'star'
        //shortcut: ['']
      },

      {
        title: 'Currencies',
        url: '/settings/configuration-management/currencies',
        icon: 'coins'
        //shortcut: ['']
      },

      {
        title: 'Subscription Features',
        url: '/settings/configuration-management/subscription-features',
        icon: 'settings'
        //shortcut: ['']
      },

      {
        title: 'Tenant Configurations',
        url: '/settings/configuration-management/tenant-configurations',
        icon: 'cog'
        //shortcut: ['']
      },

      {
        title: 'Tenant Currencies',
        url: '/settings/configuration-management/tenant-currencies',
        icon: 'coins'
        //shortcut: ['']
      },

      {
        title: 'Transaction Settings',
        url: '/settings/configuration-management/transaction-settings',
        icon: 'hash'
        //shortcut: ['']
      },

      {
        title: 'Tenant Workflows',
        url: '/settings/configuration-management/tenant-workflows',
        icon: 'workflow'
        //shortcut: ['']
      }
    ]
  },

  {
    title: 'Organization Management',
    url: '#',
    icon: 'building',
    isActive: false,
    //shortcut: [''],
    items: [
      // {
      //   title: 'Tenants',
      //   url: '/settings/organization-management/tenants',
      //   icon: 'building'
      //   //shortcut: ['']
      // },

      {
        title: 'Organization Types',
        url: '/settings/organization-management/organization-types',
        icon: 'layers'
        //shortcut: ['']
      },

      // {
      //   title: 'Organizations',
      //   url: '/settings/organization-management/organizations',
      //   icon: 'users'
      //   //shortcut: ['']
      // },

      {
        title: 'Teams',
        url: '/settings/organization-management/teams',
        icon: 'users'
        //shortcut: ['']
      },

      {
        title: 'Resources',
        url: '/settings/organization-management/resources',
        icon: 'server'
        //shortcut: ['']
      }
    ]
  },

  {
    title: 'Users',
    url: '#',
    icon: 'users',
    isActive: false,
    //shortcut: [''],
    items: [
      {
        title: 'Users',
        url: '/settings/users/users',
        icon: 'user'
        //shortcut: ['']
      },

      {
        title: 'User Invitations',
        url: '/settings/users/invitations',
        icon: 'folder-code'
        //shortcut: ['']
      },

      {
        title: 'User Roles',
        url: '/settings/users/roles',
        icon: 'shield'
        //shortcut: ['']
      },

      {
        title: 'Role Permissions',
        url: '/settings/users/role-permissions',
        icon: 'key'
        //shortcut: ['']
      }
    ]
  },

  {
    title: 'Assets',
    url: '#',
    icon: 'archive',
    isActive: false,
    //shortcut: [''],
    items: [
      {
        title: 'Asset Types',
        url: '/settings/assets/asset-types',
        icon: 'archive'
        //shortcut: ['']
      },

      {
        title: 'Owner Categories',
        url: '/settings/assets/owner-categories',
        icon: 'user-cog'
        //shortcut: ['']
      },

      {
        title: 'Asset Type Groups',
        url: '/settings/assets/asset-type-groups',
        icon: 'group'
        //shortcut: ['']
      },

      {
        title: 'Sub-Assembly Categories',
        url: '/settings/assets/sub-assembly-categories',
        icon: 'layers'
        //shortcut: ['']
      },

      {
        title: 'Materials',
        url: '/settings/assets/materials',
        icon: 'box'
        //shortcut: ['']
      },

      {
        title: 'Sub-Assemblies',
        url: '/settings/assets/sub-assemblies',
        icon: 'layers-2'
        //shortcut: ['']
      },

      {
        title: 'Asset Matrix',
        url: '/settings/assets/asset-matrix',
        icon: 'grid-3x3'
        //shortcut: ['']
      },

      {
        title: 'Asset Matrix Sections',
        url: '/settings/assets/asset-matrix-sections',
        icon: 'list'
        //shortcut: ['']
      },

      {
        title: 'Asset Matrix Sub-Sections',
        url: '/settings/assets/asset-matrix-sub-sections',
        icon: 'align-left'
        //shortcut: ['']
      },

      {
        title: 'Service Checklists',
        url: '/settings/assets/service-checklists',
        icon: 'check-circle'
        //shortcut: ['']
      },

      {
        title: 'Service Checklist Items',
        url: '/settings/assets/service-checklist-items',
        icon: 'list-check'
        //shortcut: ['']
      }
    ]
  },

  {
    title: 'Inventory',
    url: '#',
    icon: 'box',
    isActive: false,
    //shortcut: [''],
    items: [
      {
        title: 'Units of Measure',
        url: '/settings/inventory/units-of-measure',
        icon: 'ruler'
        //shortcut: ['']
      },

      {
        title: 'Warehouses',
        url: '/settings/inventory/warehouses',
        icon: 'warehouse'
        //shortcut: ['']
      },

      {
        title: 'Item Configurations',
        url: '/settings/inventory/item-configurations',
        icon: 'sliders'
        //shortcut: ['']
      },

      {
        title: 'Taxes',
        url: '/settings/inventory/taxes',
        icon: 'calculator'
        //shortcut: ['']
      }
    ]
  },

  {
    title: 'Vendors & Parties',
    url: '#',
    icon: 'handshake',
    isActive: false,
    //shortcut: [''],
    items: [
      {
        title: 'Vendors',
        url: '/settings/vendors-parties/vendors',
        icon: 'store'
        //shortcut: ['']
      },

      {
        title: 'Parties',
        url: '/settings/vendors-parties/parties',
        icon: 'users-2'
        //shortcut: ['']
      },

      {
        title: 'Fuel Stations',
        url: '/settings/vendors-parties/fuel-stations',
        icon: 'fuel'
        //shortcut: ['']
      }
    ]
  },

  {
    title: 'Miscellaneous',
    url: '#',
    icon: 'circle-ellipsis',
    isActive: false,
    //shortcut: [''],
    items: [
      {
        title: 'Fiscal Year',
        url: '/settings/miscellaneous/fiscal-year',
        icon: 'calendar'
        //shortcut: ['']
      },

      {
        title: 'My Dashboard',
        url: '/settings/miscellaneous/my-dashboard',
        icon: 'layout-dashboard'
        //shortcut: ['']
      },

      {
        title: 'Site Grouping',
        url: '/settings/miscellaneous/site-grouping',
        icon: 'map-pin'
        //shortcut: ['']
      },

      {
        title: 'Sites',
        url: '/settings/miscellaneous/sites',
        icon: 'map'
        //shortcut: ['']
      },

      {
        title: 'Activity Names',
        url: '/settings/miscellaneous/activity-names',
        icon: 'activity'
        //shortcut: ['']
      },

      {
        title: 'Site Activities',
        url: '/settings/miscellaneous/site-activities',
        icon: 'flag'
        //shortcut: ['']
      },

      {
        title: 'Ticket Types',
        url: '/settings/miscellaneous/ticket-types',
        icon: 'ticket'
        //shortcut: ['']
      },

      {
        title: 'Transaction Delays',
        url: '/settings/miscellaneous/transaction-delays',
        icon: 'clock'
        //shortcut: ['']
      },

      {
        title: 'Rosters',
        url: '/settings/miscellaneous/rosters',
        icon: 'calendar-clock'
        //shortcut: ['']
      },

      {
        title: 'Workstations',
        url: '/settings/miscellaneous/workstations',
        icon: 'cpu'
        //shortcut: ['']
      }
    ]
  }
];

// export const munuItemsOne: NavItem[] = [
//   {
//     title: 'Company Settings',
//     url: '/companysettings/vendor',
//     icon: 'TowerControl',
//     isActive: false,
//     shortcut: ['d', 'd'],
//     items: []
//   },
//   {
//     title: 'Common Settings',
//     url: '#',
//     icon: 'settings',
//     items: [
//       {
//         title: 'Attributes',
//         url: '/common/attributes',
//         icon: 'slidershorizontal'
//       },
//       {
//         title: 'Configurations',
//         url: '/common/configurations',
//         icon: 'settings'
//       },
//       { title: 'Documents', url: '/common/documents', icon: 'FileStack' },
//       { title: 'Workflows', url: '/common/workflows', icon: 'GitBranch' },
//       {
//         title: 'Fiscal Year',
//         url: '/common/fiscal_year',
//         icon: 'Calendar'
//       }
//     ]
//   }
// ];
// export const munuItemsTwo: NavItem[] = [
//   {
//     title: 'Project Settings',
//     url: '/projectsettings/overview',
//     icon: 'TowerControl',
//     isActive: false,
//     shortcut: ['d', 'd'],
//     items: []
//   },
//   {
//     title: 'Permissions & Roles',
//     url: '#',
//     icon: 'lock-keyhole',
//     items: [
//       { title: 'Permissions', url: '/permissions', icon: 'lock' },
//       { title: 'Roles', url: '/roles', icon: 'shield-plus' },
//       {
//         title: 'Role Wise Permissions',
//         url: '/role_wise_permissions',
//         icon: 'lock'
//       },
//       {
//         title: 'User Role Permissions',
//         url: '/user_role_permission',
//         icon: 'lock-open'
//       }
//     ]
//   }
// ];
// export const munuItemsThree: NavItem[] = [
//   {
//     title: 'Profile Settings',
//     url: '/profilesettings/overview',
//     icon: 'TowerControl',
//     isActive: false,
//     shortcut: ['d', 'd'],
//     items: []
//   },
//   {
//     title: 'Accounting & Finance',
//     url: '#',
//     icon: 'calculator',
//     items: [
//       {
//         title: 'Accounting Codes',
//         url: '/finance/accounting_codes',
//         icon: 'calculator'
//       },
//       { title: 'Tax Management', url: '/finance/tax', icon: 'receipt-text' }
//     ]
//   }
// ];

export interface SaleUser {
  id: number;
  name: string;
  email: string;
  amount: string;
  image: string;
  initials: string;
}

export const recentSalesData: SaleUser[] = [
  {
    id: 1,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    amount: '+$1,999.00',
    image: 'https://api.slingacademy.com/public/sample-users/1.png',
    initials: 'OM'
  },
  {
    id: 2,
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/2.png',
    initials: 'JL'
  },
  {
    id: 3,
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    amount: '+$299.00',
    image: 'https://api.slingacademy.com/public/sample-users/3.png',
    initials: 'IN'
  },
  {
    id: 4,
    name: 'William Kim',
    email: 'will@email.com',
    amount: '+$99.00',
    image: 'https://api.slingacademy.com/public/sample-users/4.png',
    initials: 'WK'
  },
  {
    id: 5,
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/5.png',
    initials: 'SD'
  }
];
