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

export const routeConfiguration = {
  favorite: {
    id: Pages.favorite,
    isRequireAuth: true,
    url: `/${Pages.favorite}`,
    permission: [PERMISSIONS.READ],
    component: <FavoritePage />,
  },
  friends: {
    id: Pages.friends,
    isRequireAuth: true,
    url: `/${Pages.friends}`,
    permission: [PERMISSIONS.READ],
    component: <FriendsPage />,
  },
  groups: {
    id: Pages.groups,
    isRequireAuth: true,
    url: `/${Pages.groups}`,
    permission: [PERMISSIONS.READ],
    component: <GroupsPage />,
  },
  home: {
    id: Pages.home,
    isRequireAuth: true,
    url: `/${Pages.home}`,
    permission: [PERMISSIONS.READ],
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
    permission: [PERMISSIONS.READ, PERMISSIONS.CREATE],
    component: <MessagePage />,
  },
  notifications: {
    id: Pages.notifications,
    isRequireAuth: true,
    url: `/${Pages.notifications}`,
    permission: [PERMISSIONS.READ, PERMISSIONS.CREATE],
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
    permission: [PERMISSIONS.READ, PERMISSIONS.DELETE],
    component: <ProfilePage />,
  },
  history: {
    id: Pages.history,
    isRequireAuth: true,
    url: `/${Pages.history}`,
    permission: [PERMISSIONS.READ, PERMISSIONS.DELETE],
    component: <HistoryPage />,
  },
  user: {
    id: Pages.user,
    isRequireAuth: true,
    url: `/${Pages.user}`,
    permission: [PERMISSIONS.READ, PERMISSIONS.UPDATE],
    component: <UserPage />,
  },
  video: {
    id: Pages.video,
    isRequireAuth: true,
    url: `/${Pages.video}`,
    permission: [PERMISSIONS.READ, PERMISSIONS.UPDATE],
    component: <VideoPage />,
  },
};