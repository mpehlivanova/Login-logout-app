import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }: any) => {
  const isAuthenticated = localStorage.getItem('bearer') || '';
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children
};

export default RequireAuth;