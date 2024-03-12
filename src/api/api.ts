import { AUDIENCE, CLIENT_ID, CLIENT_SECRET } from './constants';

export const request = async (user: any) => {
  const body = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    audience: AUDIENCE,
    grant_type: 'password',
    scope: 'openid',
    username: user.username,
    password: user.password,
  };
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
