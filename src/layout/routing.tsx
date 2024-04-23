import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../auth/require-auth';
import { RestrictedAccess } from '../auth/restricted-access';
import { useUserContext } from '../hooks/useUserContext';
import {
  HomePage,
  FavoritePage,
  HistoryPage,
  LoginPage,
  PageNotFound,
  FriendsPage,
  GroupsPage,
  MessagePage,
  NotificationsPage,
  ProfilePage,
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

      <Route path={`/${Pages.favorite}`} element={
        <RequireAuth>
          <RestrictedAccess permissionsPage={[PERMISSIONS.READ]} permissionsUser={permissionsUser}>
            <FavoritePage />
          </RestrictedAccess>
        </RequireAuth>} />

      <Route path={`/${Pages.friends}`} element={
        <RequireAuth>
          <RestrictedAccess permissionsPage={[PERMISSIONS.READ]} permissionsUser={permissionsUser}>
            <FriendsPage />
          </RestrictedAccess>
        </RequireAuth>} />

      <Route path={`/${Pages.groups}`} element={
        <RequireAuth>
          <RestrictedAccess permissionsPage={[PERMISSIONS.READ]} permissionsUser={permissionsUser}>
            <GroupsPage />
          </RestrictedAccess>
        </RequireAuth>} />

      <Route path={`/${Pages.home}`} element={
        <RequireAuth>
          <RestrictedAccess permissionsPage={[PERMISSIONS.READ]} permissionsUser={permissionsUser}>
            <HomePage />
          </RestrictedAccess>
        </RequireAuth>} />

      <Route path={`/${Pages.message}`} element={
        <RequireAuth>
          <RestrictedAccess permissionsPage={[PERMISSIONS.READ, PERMISSIONS.CREATE]} permissionsUser={permissionsUser}>
            <MessagePage />
          </RestrictedAccess>
        </RequireAuth>} />

      <Route path={`/${Pages.notifications}`} element={
        <RequireAuth>
          <RestrictedAccess permissionsPage={[PERMISSIONS.READ, PERMISSIONS.CREATE]} permissionsUser={permissionsUser}>
            <NotificationsPage />
          </RestrictedAccess>
        </RequireAuth>} />

      <Route path={`/${Pages.profile}`} element={
        <RequireAuth>
          <RestrictedAccess permissionsPage={[PERMISSIONS.READ, PERMISSIONS.DELETE]} permissionsUser={permissionsUser}>
            <ProfilePage />
          </RestrictedAccess>
        </RequireAuth>} />

      <Route path={`/${Pages.history}`} element={
        <RequireAuth>
          <RestrictedAccess permissionsPage={[PERMISSIONS.READ, PERMISSIONS.DELETE]} permissionsUser={permissionsUser}>
            <HistoryPage />
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
