import React from 'react';
import { HomePage, FavoritePage, UserPage, LoginPage, PageNotFound } from '../pages'

export const routeConfiguration = [
  {
    id: 'login',
    require: false,
    url: '/',
    component: <LoginPage />,
  },
  ,
  {
    id: 'home',
    require: true,
    url: '/home',
    component: <HomePage />,
  },
  {
    id: 'user',
    require: true,
    url: '/user',
    component: <UserPage />,
  },
  {
    id: 'favorite',
    require: true,
    url: '/favorite',
    component: <FavoritePage />,
  },
  {
    id: 'page-not-found',
    require: true,
    url: '*',
    component: <PageNotFound />,
  },
];