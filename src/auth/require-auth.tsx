import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }: any) => {
  const isAuthenticated = localStorage.getItem('bearer') || '';
  // we using context, but we will check user data - using username -> localStorage.getItem('user')
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children
};

export default RequireAuth;