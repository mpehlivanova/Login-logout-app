declare global {
  interface Window {
    _env_: any;
  }
}

export const BASE_URL = window._env_
  ? window._env_.REACT_APP_URL
  : process.env.REACT_APP_URL;

export const CLIENT_ID = window._env_
  ? window._env_.REACT_APP_CLIENT_ID
  : process.env.REACT_APP_CLIENT_ID;

export const AUTHORITY = window._env_
  ? window._env_.REACT_APP_AUTHORITY
  : process.env.REACT_APP_AUTHORITY;
