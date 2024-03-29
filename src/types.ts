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

export type tokenDecodeType = {
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  iss: string;
  aud: string;
  iat: number;
  exp: number;
  sub: string;
  sid: string;
  nonce: string;
};
