import React from 'react';
import { Favorite, Group, History, Home, Message, Notifications, People, Person, Style } from '@mui/icons-material';
import { Pages, PERMISSIONS } from '../enum';


export const routeConfiguration = {
  home: {
    id: Pages.home,
    link: Pages.home,
    permission: [PERMISSIONS.READ],
    icon: <Home />
  },
  profile: {
    id: Pages.profile,
    link: Pages.profile,
    permission: [PERMISSIONS.READ],
    icon: <Person />
  },
  favorite: {
    id: Pages.favorite,
    link: Pages.favorite,
    permission: [PERMISSIONS.READ],
    icon: <Favorite />
  },
  friends: {
    id: Pages.friends,
    link: Pages.friends,
    permission: [PERMISSIONS.READ],
    icon: <People />
  },
  groups: {
    id: Pages.groups,
    link: Pages.groups,
    permission: [PERMISSIONS.READ],
    icon: <Group />
  },
  login: {
    id: Pages.login,
    link: Pages.login,
  },
  message: {
    id: Pages.message,
    link: Pages.message,
    permission: [PERMISSIONS.READ, PERMISSIONS.CREATE],
    icon: <Message />
  },
  notifications: {
    id: Pages.notifications,
    link: Pages.notifications,
    permission: [PERMISSIONS.READ, PERMISSIONS.CREATE],
    icon: <Notifications />
  },
  pageNotFound: {
    id: Pages.pageNotFound,
    link: Pages.pageNotFound,
  },
  history: {
    id: Pages.history,
    link: Pages.history,
    permission: [PERMISSIONS.READ, PERMISSIONS.DELETE],
    icon: <History />
  },
  user: {
    id: Pages.user,
    link: Pages.user,
    permission: [PERMISSIONS.READ, PERMISSIONS.UPDATE],
    icon: <Person />
  },
  style: {
    id: Pages.style,
    link: Pages.style,
    permission: [PERMISSIONS.READ],
    icon: <Style />
  },
};