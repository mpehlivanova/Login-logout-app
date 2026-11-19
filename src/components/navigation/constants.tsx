import { Style } from '@mui/icons-material';

import { DashboardIcon, UserIcon } from '@/components/icons/icons';
import { Pages, PERMISSIONS } from '@/enum';
import { HomePage, StylePage, UserPage } from '@/pages';

export const routeConfiguration = {
  home: {
    id: Pages.home,
    link: Pages.home,
    icon: <DashboardIcon />,
    permissions: [],
    component: <HomePage />,
    showInMenu: true,
  },
  login: {
    id: Pages.login,
    link: Pages.login,
  },
  pageNotFound: {
    id: Pages.pageNotFound,
    link: Pages.pageNotFound,
  },
  user: {
    id: Pages.user,
    link: Pages.user,
    permissions: [PERMISSIONS.READ],
    icon: <UserIcon />,
    component: <UserPage />,
    showInMenu: true,
  },
  style: {
    id: Pages.style,
    link: Pages.style,
    permissions: [PERMISSIONS.READ],
    icon: <Style />,
    component: <StylePage />,
    showInMenu: true,
  },
};
