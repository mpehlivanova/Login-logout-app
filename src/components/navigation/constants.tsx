import React from 'react';
import { Style } from '@mui/icons-material';
import { Pages, PERMISSIONS } from '../../enum';
import { DashboardIcon, UserIcon } from '../icons/icons';


export const routeConfiguration = {
  home: {
    id: Pages.home,
    link: Pages.home,
    permission: [PERMISSIONS.READ],
    icon: <DashboardIcon />
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
    permission: [PERMISSIONS.READ],
    icon: <UserIcon />
  },
  style: {
    id: Pages.style,
    link: Pages.style,
    permission: [PERMISSIONS.READ],
    icon: <Style />
  },
};