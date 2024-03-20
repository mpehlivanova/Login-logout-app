import { GrantType } from '../enum';
import { MethodType, RequestBody, RequestUser } from '../types';
import {
  AUDIENCE,
  BASE_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  HEADERS as headers,
  SCOPE,
} from './constants';

export const login = async (user: RequestUser) =>
  await request(`${BASE_URL}/oauth/token`, 'POST', {
    ...user,
    grant_type: GrantType.password,
  });

export const refreshSession = async (refreshToken: string) =>
  await request(`${BASE_URL}/oauth/token`, 'POST', {
    refresh_token: refreshToken,
    grant_type: GrantType.refresh_token,
  });

export const request = async (
  endpoint: string,
  method: MethodType,
  body?: any
) => {
  const bodyBase: RequestBody = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    audience: AUDIENCE,
    scope: SCOPE,
  };
  let response = null;
  try {
    response = await fetch(`${endpoint}`, {
      headers,
      method,
      body: JSON.stringify(body ? { ...bodyBase, ...body } : bodyBase),
    });
  } catch {
    throw new Error('error response');
  }
  if (!response.ok) {
    const error = await response.json();
    alert(error.error_description);
    throw new Error(error.error_description);
  }
  return await response.json();
};
