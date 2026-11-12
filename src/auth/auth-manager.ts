import {
  AuthenticationResult,
  InteractionRequiredAuthError,
  PublicClientApplication,
} from '@azure/msal-browser';
import { msalConfig, TOKEN_REQUEST } from '../api/constants';
import { TokenType } from '../enum';
import { AuthenticationResponseType } from '../types';
import { jwtDecode } from 'jwt-decode';

const safeDecode = (token: string): any => {
  if (!token) {
    return undefined;
  }
  try {
    return jwtDecode<any>(token);
  } catch (error) {
    console.error('token is not a valid JWT', error);
    return undefined;
  }
};

export const isAuthPopup = (): boolean =>
  Boolean(window.opener) && window.opener !== window;

export const AuthManager = () => {
  let msalInst: PublicClientApplication | null = null;
  let ready: Promise<void> | null = null;

  const startMsal = async () => {
    msalInst = new PublicClientApplication(msalConfig);
    await msalInst.initialize();
    if (isAuthPopup()) {
      return;
    }
    try {
      const result = await msalInst.handleRedirectPromise();
      if (result) {
        saveUserDataSessionStorage(result);
        msalInst.setActiveAccount(result.account);
      }
    } catch (error) {
      console.error('failed to handle redirect response', error);
    }
  };

  const init = (): Promise<void> => {
    if (!ready) {
      ready = startMsal();
    }
    return ready;
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
    await init();
    const result: AuthenticationResult | undefined =
      await msalInst?.loginPopup(TOKEN_REQUEST);
    saveUserDataSessionStorage(result);
    await msalInst?.setActiveAccount(result?.account || null);
  };

  const logoutUser: Function = async () => {
    await init();
    const idToken = getIdToken() || '';
    await msalInst?.logoutPopup({ idTokenHint: idToken });

    Object.keys(TokenType).forEach((token) =>
      window.sessionStorage.removeItem(token)
    );
  };

  const isValidAccessToken: () => boolean = () => {
    const accessToken: string = getAccessToken() || '';
    if (!accessToken) {
      return false;
    }
    const accessTokenDecode = safeDecode(accessToken);

    if (accessTokenDecode?.exp) {
      const expDate = new Date(accessTokenDecode?.exp * 1000);
      return expDate > new Date();
    }
    return false;
  };

  const refreshUserSession: Function = async () => {
    await init();
    const request = {
      ...TOKEN_REQUEST,
      account: (await msalInst?.getActiveAccount()) || undefined,
      forceRefresh: true,
    };

    try {
      const refreshSession = await msalInst?.acquireTokenSilent(request);
      if (!refreshSession) {
        return false;
      }
      saveUserDataSessionStorage(refreshSession);
      return true;
    } catch (error) {
      if (error instanceof InteractionRequiredAuthError) {
       await msalInst?.acquireTokenRedirect(request);
        return true;
      }
      console.error('failed refresh session request', error);
      return false;
    }
  };

  const getLoggedUser: Function = () => {
    const accessToken: string = getAccessToken() || '';
    const idToken: string = getIdToken() || '';

    if (idToken && accessToken) {
      const { name, email, picture } = safeDecode(idToken) || {};
      const { permissions = [] } = safeDecode(accessToken) || {};
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
