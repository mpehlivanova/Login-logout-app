import { jwtDecode } from 'jwt-decode';
import { TOKEN_TYPE } from '../enum';
import { DataLocalStorageType } from '../types';

export const logoutUser = () => {
  window.localStorage.removeItem(TOKEN_TYPE.bearer);
  window.localStorage.removeItem(TOKEN_TYPE.access);
};

export const saveUserDataLocalStorage = ({
  id_token,
  access_token,
}: DataLocalStorageType) => {
  window.localStorage.setItem(TOKEN_TYPE.bearer, id_token);
  window.localStorage.setItem(TOKEN_TYPE.access, access_token);
};

export const getToken = (typeToken: TOKEN_TYPE) => {
  return window.localStorage.getItem(typeToken);
};

export const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  const accessTokenDecode: any = jwtDecode(accessToken);
  const expDate = new Date(accessTokenDecode?.exp * 1000);
  if (expDate <= new Date()) {
    return false;
  } else {
    return true;
  }
};
