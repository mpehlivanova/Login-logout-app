import { GrantType, Pages } from './enum';

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

export interface RequestUser {
  username: string;
  password: string;
}

export interface RequestBody {
  client_id: string;
  client_secret: string;
  audience: string;
  scope: string;
  grant_type?: GrantType;
  [key: string]: any;
}

export type MethodType = 'POST' | 'GET' | 'DELETE';

export type AuthenticationResponseType = {
  access_token: string;
  id_token: string;
  refresh_token?: string;
  scope: string;
  expires_in: number;
  token_type: string;
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
