import { RequestUser } from '../types';
import {
  AUDIENCE,
  CLIENT_ID,
  CLIENT_SECRET,
  GRAND_TYPE,
  SCOPE,
} from './constants';

interface RequestBody {
  client_id: string;
  client_secret: string;
  audience: string;
  grant_type?: GRAND_TYPE;
  scope: string;
  username?: string;
  password?: string;
  refresh_token?: string;
}

interface RequestParams {
  user?: RequestUser;
  refreshToken?: string;
}

export const request = async ({ user, refreshToken }: RequestParams) => {
  let body: RequestBody = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    audience: AUDIENCE,
    scope: SCOPE,
    grant_type: GRAND_TYPE.password,
  };

  if (user) {
    body = {
      ...body,
      username: user.username,
      password: user.password,
    };
  }

  if (refreshToken) {
    body = {
      ...body,
      refresh_token: refreshToken,
      grant_type: GRAND_TYPE.refresh_token,
    };
  }
  const headers = { 'content-type': 'application/json' };
  const method = 'POST';
  const TOKEN_URL = 'https://dev-y4thf51u18ja0ber.eu.auth0.com/oauth/token';

  let response = null;
  try {
    response = await fetch(TOKEN_URL, {
      headers,
      method,
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error('error');
  }
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error_description);
  }
  return await response.json();
};
