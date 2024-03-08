export const getUserData = () => {
  let user: any = {};
  if (window.localStorage.getItem('user') !== 'undefined') {
    user = window.localStorage.getItem('user');
  }
  return JSON.parse(user);
};

export const logoutUser = (isLogout?: boolean) => {
  if (isLogout) {
    return window.localStorage.clear();
  }
};
