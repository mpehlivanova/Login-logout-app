import { TOKEN_TYPE } from '../enum';
import { DataLocalStorageType } from '../types';

export const logoutUser = () => {
  window.localStorage.removeItem(TOKEN_TYPE.bearer);
  window.localStorage.removeItem(TOKEN_TYPE.access);
};

export const saveUserDataLocalStorage = ({
  id_token,
  access_token,
}: DataLocalStorageType) => {
  window.localStorage.setItem(TOKEN_TYPE.bearer, id_token);
  window.localStorage.setItem(TOKEN_TYPE.access, access_token);
};

export const getToken = (typeToken: TOKEN_TYPE) => {
  return window.localStorage.getItem(typeToken);
};