export const saveUserDataLocalStorage = (
  id_token: string,
  access_token: string,
  user: any
) => [
  { id: 'bearer', value: id_token },
  { id: 'access', value: access_token },
  { id: 'user', value: user },
];
