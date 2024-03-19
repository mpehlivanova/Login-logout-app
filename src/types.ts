import { PAGES } from './enum';

export interface DataLocalStorageType {
  id_token: string;
  access_token: string;
  refresh_token: string;
}

export interface User {
  name: string;
  email: string;
  picture: string;
}

export interface RouteConfigurationType {
  id: PAGES;
  isRequireAuth: boolean;
  url: string;
  component: React.ReactNode;
}

export interface RequestUser {
  username: string;
  password: string;
}
