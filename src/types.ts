import { Pages } from './enum';

export interface User {
  name: string;
  email: string;
  picture: string;
}

export interface RouteConfigurationType {
  id: Pages;
  isRequireAuth: boolean;
  url: string;
  component: React.ReactNode;
}

export type MethodType = 'POST' | 'GET' | 'DELETE';

export type AuthenticationResponseType = {
  accessToken: string;
  idToken: string;
};

export type AccessTokenDecodeType = {
  aud: string[];
  azp: string;
  exp: number;
  gty: string;
  iat: number;
  iss: string;
  scope: string;
  sub: string;
};
