import {
  AuthenticationResult,
  InteractionRequiredAuthError,
  PublicClientApplication,
} from '@azure/msal-browser';
import { msalConfig, SCOPES } from '../api/constants';
import { TokenType } from '../enum';
import { AuthenticationResponseType } from '../types';
import { jwtDecode } from 'jwt-decode';

export const AuthManager = () => {
  let msalInst: PublicClientApplication | null = null;

  const init: Function = async () => {
    msalInst = new PublicClientApplication(msalConfig);
    await msalInst.initialize();
  };

  const saveUserDataSessionStorage: Function = (
    token: AuthenticationResponseType
  ) => {
    window.sessionStorage.setItem(TokenType.idToken, token?.idToken);
    window.sessionStorage.setItem(TokenType.accessToken, token?.accessToken);
  };

  const getAccessToken: Function = () => {
    return window.sessionStorage.getItem(TokenType.accessToken);
  };

  const getIdToken: Function = () => {
    return window.sessionStorage.getItem(TokenType.idToken);
  };

  const loginUser: Function = async () => {
    const result: AuthenticationResult | undefined =
      await msalInst?.loginPopup();
    saveUserDataSessionStorage(result);
    await msalInst?.setActiveAccount(result?.account || null);
  };

  const logoutUser: Function = async () => {
    const idToken = getIdToken() || '';
    await msalInst?.logoutPopup({ idTokenHint: idToken });

    Object.keys(TokenType).forEach((token) =>
      window.sessionStorage.removeItem(token)
    );
  };

  const isValidAccessToken: () => boolean = () => {
    const accessToken: string = getAccessToken() || '';
    const accessTokenDecode = jwtDecode(accessToken);

    if (accessTokenDecode?.exp) {
      const expDate = new Date(accessTokenDecode?.exp * 1000);
      return expDate > new Date();
    }
    return false;
  };

  const refreshUserSession: Function = async () => {
    const request = {
      scopes: SCOPES,
      account: (await msalInst?.getActiveAccount()) || undefined,
      forceRefresh: true,
    };

    try {
      const refreshSession = await msalInst
        ?.acquireTokenSilent(request)
        .catch(async (error: any) => {
          if (error instanceof InteractionRequiredAuthError) {
            await msalInst?.acquireTokenRedirect(request);
          }
        });
      if (!refreshSession) {
        return false;
      }
      saveUserDataSessionStorage(refreshSession);
      return true;
    } catch (error) {
      new Error('failed refresh session request');
    }
  };

  const getLoggedUser: Function = () => {
    const accessToken: string = getAccessToken() || '';
    const idToken: string = getIdToken() || '';

    if (idToken && accessToken) {
      const { name, email, picture } = jwtDecode<any>(idToken) || '';
      const { permissions } = jwtDecode<any>(accessToken) || '';
      return {
        name,
        email,
        picture,
        permissions,
      };
    }
    return undefined;
  };

  return {
    init,
    logoutUser,
    loginUser,
    getAccessToken,
    getIdToken,
    isValidAccessToken,
    refreshUserSession,
    getLoggedUser,
  };
};
