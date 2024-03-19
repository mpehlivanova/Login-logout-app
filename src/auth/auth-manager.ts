import { jwtDecode } from 'jwt-decode';
import { TOKEN_TYPE } from '../enum';
import { DataLocalStorageType } from '../types';
import { request } from '../api/api';

export const logoutUser = () => {
  Object.keys(TOKEN_TYPE).map((token) => window.localStorage.removeItem(token));
};

export const saveUserDataLocalStorage = ({
  id_token,
  access_token,
  refresh_token,
}: DataLocalStorageType) => {
  window.localStorage.setItem(TOKEN_TYPE.bearer, id_token);
  window.localStorage.setItem(TOKEN_TYPE.access, access_token);
  window.localStorage.setItem(TOKEN_TYPE.refresh, refresh_token);
};

export const updateAccessToken = ({
  id_token,
  access_token,
}: DataLocalStorageType) => {
  window.localStorage.setItem(TOKEN_TYPE.bearer, id_token);
  window.localStorage.setItem(TOKEN_TYPE.access, access_token);
};

export const getToken = (typeToken: TOKEN_TYPE) => {
  return window.localStorage.getItem(typeToken);
};

export const isValidAccessToken = () => {
  const token = getToken(TOKEN_TYPE.access);
  if (!token) {
    return false;
  }
  const accessTokenDecode: any = jwtDecode(token);
  const expDate = new Date(accessTokenDecode?.exp * 1000);
  if (expDate <= new Date()) {
    return false;
  }
  return true;
};

export const isRefreshUserSession = async () => {
  try {
    const refreshToken: any = getToken(TOKEN_TYPE.refresh);
    if (refreshToken) {
      const res = await request({ refreshToken });
      updateAccessToken(res);
      return true;
    }
    logoutUser();
    return false;
  } catch (error: any) {
    alert(error.message);
    return false;
  }
};
