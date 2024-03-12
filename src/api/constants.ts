export const CLIENT_ID = 'JpwJuEhdlzYrH6FO3kW6QVP8GTr0cVr9';
export const CLIENT_SECRET =
  'rctURI8w_fRJe73DPqaI8ASCAbJGCd18p8QsU9nkNpU1_CTadZUzsWzD79YtovLO';
export const AUDIENCE = 'https://dev-y4thf51u18ja0ber.eu.auth0.com/api/v2/';

export const saveUserDataLocalStorage = (
  id_token: string,
  access_token: string,
  user: any
) => [
  { id: 'bearer', value: id_token },
  { id: 'access', value: access_token },
  { id: 'user', value: user },
];
