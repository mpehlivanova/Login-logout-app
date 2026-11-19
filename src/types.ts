import type { Pages, PERMISSIONS } from './enum';
import type { IdTokenClaims } from '@azure/msal-browser';

export interface User {
  name: string;
  email: string;
  picture: string;
  permissions: string[];
}

export interface RouteConfigurationType {
  id: Pages;
  link: Pages;
  permission?: PERMISSIONS[];
  icon?: React.ReactElement;
  component?: React.ReactElement;
  showInMenu?: boolean;
}

export type MethodType = 'POST' | 'GET' | 'DELETE';

export type AuthenticationResponseType = {
  accessToken: string;
  idToken: string;
};

export type IdTokenClaimsType = IdTokenClaims & {
  [key: string]: string | number | string[] | object | undefined | unknown;
};
