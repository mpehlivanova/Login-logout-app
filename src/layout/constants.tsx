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


export const pagePermissionGroup = {
  READ_WRITE: [PERMISSIONS.READ, PERMISSIONS.WRITE],
}

export const routeConfiguration = {
  favorite: {
    id: Pages.favorite,
    isRequireAuth: true,
    url: `/${Pages.favorite}`,
    permission: [...pagePermissionGroup.READ_WRITE],
    component: <FavoritePage />,
  },
  friends: {
    id: Pages.friends,
    isRequireAuth: true,
    url: `/${Pages.friends}`,
    permission: [...pagePermissionGroup.READ_WRITE],
    component: <FriendsPage />,
  },
  groups: {
    id: Pages.groups,
    isRequireAuth: true,
    url: `/${Pages.groups}`,
    permission: [...pagePermissionGroup.READ_WRITE],
    component: <GroupsPage />,
  },
  home: {
    id: Pages.home,
    isRequireAuth: true,
    url: `/${Pages.home}`,
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
    permission: [...pagePermissionGroup.READ_WRITE],
    component: <MessagePage />,
  },
  notifications: {
    id: Pages.notifications,
    isRequireAuth: true,
    url: `/${Pages.notifications}`,
    permission: [...pagePermissionGroup.READ_WRITE],
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
    component: <ProfilePage />,
  },
  history: {
    id: Pages.history,
    isRequireAuth: true,
    url: `/${Pages.history}`,
    permission: [...pagePermissionGroup.READ_WRITE],
    component: <HistoryPage />,
  },
  user: {
    id: Pages.user,
    isRequireAuth: true,
    url: `/${Pages.user}`,
    component: <UserPage />,
  },
  video: {
    id: Pages.video,
    isRequireAuth: true,
    url: `/${Pages.video}`,
    permission: [...pagePermissionGroup.READ_WRITE],
    component: <VideoPage />,
  },
};