import { jwtDecode } from 'jwt-decode';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../api/constants';
import { TokenType } from '../enum';
import { AccessTokenDecodeType, AuthenticationResponseType } from '../types';

export const logoutUser: Function = () => {
  Object.keys(TokenType).forEach((token) =>
    window.localStorage.removeItem(token)
  );
};

export const saveUserDataLocalStorage: Function = ({
  idToken,
  accessToken,
}: AuthenticationResponseType) => {
  window.localStorage.setItem(TokenType.idToken, idToken);
  window.localStorage.setItem(TokenType.accessToken, accessToken);
};

export const getToken: Function = (tokenType: TokenType) => {
  return window.localStorage.getItem(tokenType);
};

export const isValidAccessToken: Function = () => {
  const accessToken: any = getToken(TokenType.accessToken);
  if (!accessToken) {
    return false;
  }
  const accessTokenDecode: AccessTokenDecodeType = jwtDecode(accessToken);
  const expDate = new Date(accessTokenDecode?.exp * 1000);
  return expDate > new Date();
};

export const refreshUserSession: Function = async () => {
  // TODO: this method will be change
  // try {
  //   const { refreshToken }: any = getTokens();
  //   if (refreshToken) {
  //     const res: AuthenticationResponseType = await refreshSession(
  //       refreshToken
  //     );
  //     saveUserDataLocalStorage({ ...res });
  //     return true;
  //   }
  //   return false;
  // } catch (error: any) {
  //   alert(error.message);
  //   return false;
  // }
};

export const loginUser = async () => {
  const msalInstance =
    await PublicClientApplication.createPublicClientApplication(msalConfig);
  const result = await msalInstance.loginPopup();
  saveUserDataLocalStorage(result);
};
