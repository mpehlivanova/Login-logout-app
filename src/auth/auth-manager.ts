import { jwtDecode } from 'jwt-decode';
import { TokenType } from '../enum';
import {
  AccessTokenDecodeType,
  AuthenticationResponseType,
  RequestUser,
} from '../types';
import { login, refreshSession } from '../api/api';

export const logoutUser: Function = () => {
  Object.keys(TokenType).forEach((token) =>
    window.localStorage.removeItem(token)
  );
};

export const saveUserDataLocalStorage: Function = ({
  id_token,
  access_token,
  refresh_token,
}: AuthenticationResponseType) => {
  if (refresh_token) {
    window.localStorage.setItem(TokenType.refresh, refresh_token);
  }
  window.localStorage.setItem(TokenType.bearer, id_token);
  window.localStorage.setItem(TokenType.access, access_token);
};

export const getToken: Function = (typeToken: TokenType) => {
  return window.localStorage.getItem(typeToken);
};

export const isValidAccessToken: Function = () => {
  const token = getToken(TokenType.access);
  if (!token) {
    return false;
  }
  const accessTokenDecode: AccessTokenDecodeType = jwtDecode(token);
  const expDate = new Date(accessTokenDecode?.exp * 1000);
  return expDate > new Date();
};

export const refreshUserSession: Function = async () => {
  try {
    const refreshToken: string | null = getToken(TokenType.refresh);
    if (refreshToken) {
      const res: AuthenticationResponseType = await refreshSession(
        refreshToken
      );
      saveUserDataLocalStorage({ ...res });
      return true;
    }
    return false;
  } catch (error: any) {
    alert(error.message);
    return false;
  }
};

export const loginUser = async (user: RequestUser) => {
  const res: AuthenticationResponseType = await login({ ...user });
  saveUserDataLocalStorage(res);
};
