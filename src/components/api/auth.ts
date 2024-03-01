import { AUDIENCE, CLIENT_ID, CLIENT_SECRET } from '../../constants';
import { jwtDecode } from 'jwt-decode';

export const request = async (user: any) => {
  const body = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    audience: AUDIENCE,
    grant_type: 'password',
    username: user.username,
    password: user.password,
  };
  const headers = { 'content-type': 'application/json' };
  const method = 'POST';
  const TOKEN_URL = 'https://dev-y4thf51u18ja0ber.eu.auth0.com/oauth/token';

  const response = await fetch(TOKEN_URL, {
    headers,
    method,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    new Error('fetch failed');
  }

  const access_token = await response
    .json()
    .then((res: any) => res?.access_token);
  if (!access_token.ok) {
    new Error('fetch failed - access_token');
  } else {
    window.localStorage.setItem('access_token', access_token);
  }
  const token = jwtDecode(access_token);
  console.log(token);
};
