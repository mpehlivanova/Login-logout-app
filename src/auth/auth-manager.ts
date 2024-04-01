import {
  AccountInfo,
  InteractionRequiredAuthError,
  PublicClientApplication,
} from '@azure/msal-browser';
import { jwtDecode } from 'jwt-decode';
import { msalConfig } from '../api/constants';
import { TokenType } from '../enum';
import { tokenDecodeType, AuthenticationResponseType } from '../types';

export const AuthManager = () => {
  let msalInst: PublicClientApplication | null = null;
  const getAllAccounts: () => any = () => {
    return msalInst?.getAllAccounts() || undefined;
  };

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
    const currentAccount: AccountInfo | undefined = getAllAccounts()[0];
    const request = {
      scopes: ['Mail.Read'],
      account: currentAccount,
      forceRefresh: true,
    };
    if (currentAccount) {
      const refreshSession = await msalInst
        ?.acquireTokenSilent(request)
        .catch(async (error: any) => {
          if (error instanceof InteractionRequiredAuthError) {
            await msalInst?.acquireTokenRedirect(request);
          }
        });
      saveUserDataLocalStorage(refreshSession);
      return true;
    }
    return false;
  };

  return {
    init: async () => {
      const msalInstance = new PublicClientApplication(msalConfig);
      msalInst = msalInstance;
      await msalInst.initialize();
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
