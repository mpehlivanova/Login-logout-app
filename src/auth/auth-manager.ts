import {
  AccountInfo,
  AuthenticationResult,
  InteractionRequiredAuthError,
  PublicClientApplication,
} from '@azure/msal-browser';
import { msalConfig, SCOPES } from '../api/constants';
import { TokenType } from '../enum';
import { AuthenticationResponseType, IdTokenClaimsType } from '../types';

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
    await msalInst?.logoutPopup({ account: msalInst?.getActiveAccount() });

    Object.keys(TokenType).forEach((token) =>
      window.sessionStorage.removeItem(token)
    );
  };

  const isValidIdToken: () => boolean = () => {
    const { idTokenClaims }: any = msalInst?.getActiveAccount() || null;

    if (idTokenClaims) {
      const expDate = new Date(idTokenClaims?.exp * 1000);
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
    const account: AccountInfo | null = msalInst?.getActiveAccount() || null;
    if (account) {
      const { name, email, picture }: IdTokenClaimsType | any =
        account?.idTokenClaims;
      return { name, email, picture };
    }
    return undefined;
  };

  return {
    init,
    logoutUser,
    loginUser,
    getAccessToken,
    getIdToken,
    isValidIdToken,
    refreshUserSession,
    getLoggedUser,
  };
};
