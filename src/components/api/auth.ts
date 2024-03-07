import { AUDIENCE, CLIENT_ID, CLIENT_SECRET } from '../../constants';
import { jwtDecode } from 'jwt-decode';

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

  const response = await fetch(TOKEN_URL, {
    headers,
    method,
    body: JSON.stringify(body),
  });
  const result = await response.json().then((res: any) => res);

  if (!response.ok) {
    throw new Error(result.error_description);
  }
  const token: any = jwtDecode(result?.id_token);
  const { name, email, nickname, picture } = token;
  const userInfo = { name, email, nickname, picture };
  const saveDataLocalStorage = [
    { id: 'bearer', value: result.id_token },
    { id: 'access', value: result.access_token },
    { id: 'user', value: userInfo },
  ];
  if (result.id_token) {
    saveDataLocalStorage.map(({ id, value }) => {
      window.localStorage.setItem(`${id}`, JSON.stringify(value));
    });
  }
};
