export const getUserData = () => {
  // this method is not needed, because we will using context global state
  let user: any = {};
  if (window.localStorage.getItem('user') !== 'undefined') {
    user = window.localStorage.getItem('user');
  }
  return JSON.parse(user);
};

export const logoutUser = (isLogout?: boolean) => {
  if (isLogout) {
    // we no need from parameters
    // we should not to use .clear(), because we will all in locale storage
    // we will delete the key
    return window.localStorage.clear();
  }
};

// added method save user data in locale storage
