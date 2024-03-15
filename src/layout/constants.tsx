import React from 'react';
import { HomePage, FavoritePage, UserPage, LoginPage, PageNotFound } from '../pages'
import { PAGES } from '../enum';
import { RouteConfigurationType } from '../types';

export const routeConfiguration: RouteConfigurationType[] = [
  {
    id: PAGES.login,
    isRequireAuth: false,
    url: '/',
    component: <LoginPage />,
  },
  {
    id: PAGES.home,
    isRequireAuth: true,
    url: `/${PAGES.home}`,
    component: <HomePage />,
  },
  {
    id: PAGES.user,
    isRequireAuth: true,
    url: `/${PAGES.user}`,
    component: <UserPage />,
  },
  {
    id: PAGES.favorite,
    isRequireAuth: true,
    url: `/${PAGES.favorite}`,
    component: <FavoritePage />,
  },
  {
    id: PAGES.pageNotFound,
    isRequireAuth: false,
    url: '*',
    component: <PageNotFound />,
  },
];