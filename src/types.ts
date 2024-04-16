import { IdTokenClaims } from '@azure/msal-browser';
import { Pages, PERMISSIONS } from './enum';

export interface User {
  name: string;
  email: string;
  picture: string;
  permissions: string[];
}

export interface RouteConfigurationType {
  id: Pages;
  isRequireAuth: boolean;
  url: string;
  permission?: PERMISSIONS[];
  component: React.ReactNode;
}

export type MethodType = 'POST' | 'GET' | 'DELETE';

export type AuthenticationResponseType = {
  accessToken: string;
  idToken: string;
};

export type IdTokenClaimsType = IdTokenClaims & {
  [key: string]: string | number | string[] | object | undefined | unknown;
};
