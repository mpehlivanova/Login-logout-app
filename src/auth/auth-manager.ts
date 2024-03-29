import { PublicClientApplication } from '@azure/msal-browser';
import { jwtDecode } from 'jwt-decode';
import { msalConfig } from '../api/constants';
import { TokenType } from '../enum';
import { tokenDecodeType, AuthenticationResponseType } from '../types';

export const AuthManager = () => {
  let msalInst: PublicClientApplication | null = null;

  const saveUserDataLocalStorage: Function = ({
    idToken,
    accessToken,
  }: AuthenticationResponseType) => {
    window.localStorage.setItem(TokenType.idToken, idToken);
    window.localStorage.setItem(TokenType.accessToken, accessToken);
  };

  const getAccessToken: Function = () => {
    return window.localStorage.getItem(TokenType.accessToken);
  };

  const getIdToken: Function = () => {
    return window.localStorage.getItem(TokenType.idToken);
  };

  const isValidToken: Function = () => {
    const idToken: any = getIdToken();
    if (!idToken) {
      return false;
    }
    const idTokenDecode: tokenDecodeType = jwtDecode(idToken);
    const expDate = new Date(idTokenDecode?.exp * 1000);
    return expDate > new Date();
  };

  const loginUser = async () => {
    const result = await msalInst?.loginPopup();
    saveUserDataLocalStorage(result);
  };

  const logoutUser: Function = () => {
    Object.keys(TokenType).forEach((token) =>
      window.localStorage.removeItem(token)
    );
  };

  const refreshUserSession: Function = async () => {
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

  return {
    init: async () => {
      const msalInstance = new PublicClientApplication(msalConfig);
      await msalInstance.initialize();
      msalInst = msalInstance;
    },
    logout: () => logoutUser(),
    login: () => loginUser(),
    getToken: {
      accessToken: () => getAccessToken(),
      idToken: () => getIdToken(),
    },
    isValidToken: () => isValidToken(),
    refreshUserSession: () => refreshUserSession(),
  };
};
