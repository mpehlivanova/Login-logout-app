import { jwtDecode } from 'jwt-decode';

export const getUserData = () => {
  // this method is not needed, because we will using context global state
  let user: any = {};
  if (window.localStorage.getItem('user') !== 'undefined') {
    user = window.localStorage.getItem('user');
  }
  return JSON.parse(user);
};

export const logoutUser = () => {
  window.localStorage.removeItem('bearer');
  window.localStorage.removeItem('access');
  window.localStorage.removeItem('user');
};

export const saveUserDataLocalStorage = ({ id_token, access_token }: any) => {
  const token: any = jwtDecode(id_token);
  const { name, email, nickname, picture } = token;
  const userInfo = { name, email, nickname, picture };

  if (token) {
    window.localStorage.setItem('bearer', token);
    window.localStorage.setItem('access', access_token);
    window.localStorage.setItem('user', JSON.stringify(userInfo));
  }
};
