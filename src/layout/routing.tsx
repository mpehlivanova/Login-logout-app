import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../auth/require-auth';
import { RestrictedAccess } from '../auth/restricted-access';
import { useUserContext } from '../hooks/useUserContext';
import {
  HomePage,
  LoginPage,
  PageNotFound,
  StylePage,
  UserPage
} from '../pages'
import { Pages, PERMISSIONS } from '../enum';

const Routing = () => {
  const { user } = useUserContext();
  const permissionsUser: any = user?.permissions
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path={`/${Pages.login}`} element={<LoginPage />} />
      <Route path={`/${Pages.home}`} element={
        <RequireAuth>
          <RestrictedAccess permissionsPage={[PERMISSIONS.READ]} permissionsUser={permissionsUser}>
            <HomePage />
          </RestrictedAccess>
        </RequireAuth>} />
      <Route path={`/${Pages.user}`} element={
        <RequireAuth>
          <RestrictedAccess permissionsPage={[PERMISSIONS.READ, PERMISSIONS.UPDATE]} permissionsUser={permissionsUser}>
            <UserPage />
          </RestrictedAccess>
        </RequireAuth>} />
      <Route path={`/${Pages.style}`} element={
        <RequireAuth>
          <RestrictedAccess permissionsPage={[PERMISSIONS.READ]} permissionsUser={permissionsUser}>
            <StylePage />
          </RestrictedAccess>
        </RequireAuth>} />
    </Routes>
  );
};

export default Routing;
