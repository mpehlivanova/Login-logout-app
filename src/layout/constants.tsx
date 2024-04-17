import React from 'react';
import {
  HomePage,
  FavoritePage,
  HistoryPage,
  LoginPage,
  PageNotFound,
  FriendsPage,
  GroupsPage,
  MessagePage,
  NotificationsPage,
  ProfilePage,
  VideoPage,
  UserPage
} from '../pages'
import { Pages, PERMISSIONS } from '../enum';


export const groupPermission = {
  READ_WRITE: [PERMISSIONS.READ, PERMISSIONS.WRITE],
  EDIT_UPDATE: [PERMISSIONS.EDIT, PERMISSIONS.UPDATE],
  CRATE_DELETE: [PERMISSIONS.CREATE, PERMISSIONS.DELETE],
  ALL: [
    PERMISSIONS.READ,
    PERMISSIONS.WRITE,
    PERMISSIONS.EDIT,
    PERMISSIONS.UPDATE,
    PERMISSIONS.CREATE,
    PERMISSIONS.DELETE
  ]
}

export const routeConfiguration = {
  favorite: {
    id: Pages.favorite,
    isRequireAuth: true,
    url: `/${Pages.favorite}`,
    permission: [...groupPermission.READ_WRITE],
    component: <FavoritePage />,
  },
  friends: {
    id: Pages.friends,
    isRequireAuth: true,
    url: `/${Pages.friends}`,
    permission: [...groupPermission.READ_WRITE],
    component: <FriendsPage />,
  },
  groups: {
    id: Pages.groups,
    isRequireAuth: true,
    url: `/${Pages.groups}`,
    permission: [...groupPermission.READ_WRITE, PERMISSIONS.CREATE],
    component: <GroupsPage />,
  },
  home: {
    id: Pages.home,
    isRequireAuth: true,
    url: `/${Pages.home}`,
    permission: [...groupPermission.READ_WRITE],
    component: <HomePage />,
  },
  login: {
    id: Pages.login,
    isRequireAuth: false,
    url: '/',
    component: <LoginPage />,
  },
  message: {
    id: Pages.message,
    isRequireAuth: true,
    url: `/${Pages.message}`,
    permission: [...groupPermission.READ_WRITE, PERMISSIONS.EDIT],
    component: <MessagePage />,
  },
  notifications: {
    id: Pages.notifications,
    isRequireAuth: true,
    url: `/${Pages.notifications}`,
    permission: [...groupPermission.ALL],
    component: <NotificationsPage />,
  },
  pageNotFound: {
    id: Pages.pageNotFound,
    isRequireAuth: false,
    url: '*',
    component: <PageNotFound />,
  },
  profile: {
    id: Pages.profile,
    isRequireAuth: true,
    url: `/${Pages.profile}`,
    permission: [...groupPermission.READ_WRITE],
    component: <ProfilePage />,
  },
  history: {
    id: Pages.history,
    isRequireAuth: true,
    url: `/${Pages.history}`,
    permission: [...groupPermission.ALL],
    component: <HistoryPage />,
  },
  user: {
    id: Pages.user,
    isRequireAuth: true,
    url: `/${Pages.user}`,
    permission: [...groupPermission.READ_WRITE],
    component: <UserPage />,
  },
  video: {
    id: Pages.video,
    isRequireAuth: true,
    url: `/${Pages.video}`,
    permission: [...groupPermission.READ_WRITE, PERMISSIONS.CREATE],
    component: <VideoPage />,
  },
};