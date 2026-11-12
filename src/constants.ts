declare global {
  interface Window {
    _env_: any;
  }
  interface ImportMeta {
    env: {
      VITE_REACT_APP_URL: string;
      VITE_REACT_APP_CLIENT_ID: string;
      VITE_REACT_APP_AUTHORITY: string;
      VITE_REACT_APP_AUDIENCE: string;
    };
  }
}

export const BASE_URL = window._env_
  ? window._env_.VITE_REACT_APP_URL
  : import.meta.env.VITE_REACT_APP_URL;

export const CLIENT_ID = window._env_
  ? window._env_.VITE_REACT_APP_CLIENT_ID
  : import.meta.env.VITE_REACT_APP_CLIENT_ID;

export const AUTHORITY = window._env_
  ? window._env_.VITE_REACT_APP_AUTHORITY
  : import.meta.env.VITE_REACT_APP_AUTHORITY;

export const AUDIENCE = window._env_
  ? window._env_.VITE_REACT_APP_AUDIENCE
  : import.meta.env.VITE_REACT_APP_AUDIENCE;
