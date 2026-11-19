import { ProtocolMode } from '@azure/msal-browser';

import { AUDIENCE, AUTHORITY, BASE_URL, CLIENT_ID } from '@/constants';

import type { Configuration } from '@azure/msal-browser';

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

export const TOKEN_REQUEST = {
  scopes: SCOPES,
  extraQueryParameters: AUDIENCE ? { audience: AUDIENCE } : undefined,
};

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
