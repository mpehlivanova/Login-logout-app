import React from 'react';
import { HomePage, FavoritePage, UserPage, LoginPage, PageNotFound } from '../pages'
import { RouteConfigurationType } from '../types';
import { Pages } from '../enum';

export const routeConfiguration: RouteConfigurationType[] = [
  {
    id: Pages.login,
    isRequireAuth: false,
    url: '/',
    component: <LoginPage />,
  },
  {
    id: Pages.home,
    isRequireAuth: true,
    url: `/${Pages.home}`,
    component: <HomePage />,
  },
  {
    id: Pages.user,
    isRequireAuth: true,
    url: `/${Pages.user}`,
    component: <UserPage />,
  },
  {
    id: Pages.favorite,
    isRequireAuth: true,
    url: `/${Pages.favorite}`,
    component: <FavoritePage />,
  },
  {
    id: Pages.pageNotFound,
    isRequireAuth: false,
    url: '*',
    component: <PageNotFound />,
  },
];