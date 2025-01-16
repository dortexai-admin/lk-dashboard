
export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  icon?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Overview',
    path: '/',
    icon: 'hugeicons:grid-view',
    active: true,
  },
  {
    id: 'team',
    subheader: 'Team',
    path: '#!',
    icon: 'hugeicons:book-open-01',
  },
  {
    id: 'permision',
    subheader: 'Permision',
    path: '#!',
    icon: 'mynaui:user-hexagon',
  },
  {
    id: 'notifications',
    subheader: 'Notifications',
    path: '#!',
    icon: 'hugeicons:settings-01',
  },
  {
    id: 'settings',
    subheader: 'Settings',
    path: '#!',
    icon: 'hugeicons:settings-01',
  },
  
];

export default sitemap;
