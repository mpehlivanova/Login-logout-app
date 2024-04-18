import { Configuration, ProtocolMode } from '@azure/msal-browser';
import { CLIENT_ID, AUTHORITY, BASE_URL } from '../constants';

export const SCOPES = [
  'openid',
  'offline_access',
  'email',
  'read:users',
  'create:users',
  'delete:users',
  'update:users',
];
export const HEADERS = { 'content-type': 'application/json' };

export const msalConfig: Configuration = {
  auth: {
    clientId: CLIENT_ID,
    authority: AUTHORITY,
    redirectUri: `${BASE_URL}/home`,
    postLogoutRedirectUri: BASE_URL,
    OIDCOptions: {
      serverResponseType: 'query',
      defaultScopes: SCOPES,
    },
    protocolMode: ProtocolMode.OIDC,
    knownAuthorities: [AUTHORITY],
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: true,
  },
};
