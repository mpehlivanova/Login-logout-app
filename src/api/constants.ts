import { Configuration, ProtocolMode } from '@azure/msal-browser';

export const CLIENT_ID = '7RswiAboRELefuFhVK9RRhaWloTr0VNq';
export const AUDIENCE = 'https://dev-y4thf51u18ja0ber.eu.auth0.com/api/v2/';
export const SCOPE = ['openid', 'offline_access', 'email'];
export const HEADERS = { 'content-type': 'application/json' };
export const BASE_URL = 'https://dev-y4thf51u18ja0ber.eu.auth0.com';

export const msalConfig: Configuration = {
  auth: {
    clientId: CLIENT_ID,
    authority: BASE_URL,
    redirectUri: 'http://localhost:3000/home',
    OIDCOptions: {
      serverResponseType: 'query',
      defaultScopes: SCOPE,
    },
    protocolMode: ProtocolMode.OIDC,
    knownAuthorities: [BASE_URL],
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true,
  },
};
