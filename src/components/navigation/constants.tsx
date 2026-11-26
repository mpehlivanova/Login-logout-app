import { Style } from '@mui/icons-material';

import { DashboardIcon, UserIcon } from '@/components/icons/icons';
import { Pages, PERMISSIONS } from '@/enum';
import { HomePage, StylePage, UserPage } from '@/pages';

import type { RouteConfigurationType } from '@/types';

type RouteConfigurationPageType = {
  [key: string]: RouteConfigurationType;
};

export const routeConfiguration: RouteConfigurationPageType = {
  home: {
    id: Pages.home,
    link: Pages.home,
    title: 'Home',
    icon: <DashboardIcon />,
    permissions: [PERMISSIONS.READ],
    component: <HomePage />,
  },
  login: {
    id: Pages.login,
    link: Pages.login,
    title: 'Login',
  },
  pageNotFound: {
    id: Pages.pageNotFound,
    link: Pages.pageNotFound,
    title: 'Page Not Found',
  },
  user: {
    id: Pages.user,
    link: Pages.user,
    title: 'User',
    permissions: [PERMISSIONS.READ, PERMISSIONS.UPDATE],
    icon: <UserIcon />,
    component: <UserPage />,
  },
  style: {
    id: Pages.style,
    link: Pages.style,
    title: 'Style',
    permissions: [PERMISSIONS.READ],
    icon: <Style />,
    component: <StylePage />,
  },
};
