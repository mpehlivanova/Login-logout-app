import React from "react";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useUserContext } from '../hooks/useUserContext';
import { routeConfiguration } from '../layout/constants';
import { RestrictedAccess } from '../auth/restricted-access'
import { RouteConfigurationType } from '../types';
import { Pages } from '../enum';

const HomePage = () => {
  const { user } = useUserContext();
  const permissionsUser: any = user?.permissions;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}><h1>Welcome, {user?.name || user?.email} !</h1></Grid>
      <Grid item container spacing={2} flexDirection="row">
        {Object.values(routeConfiguration).map(({ isRequireAuth, url, id, permission }: RouteConfigurationType) => {
          if (isRequireAuth && id !== Pages.home) {
            return (
              <RestrictedAccess permissionsPage={permission} permissionsUser={permissionsUser}>
                <Grid item key={id}><Link to={`${url}`}>{id} page</Link></Grid>
              </RestrictedAccess>
            )
          }
        })}
      </Grid>
    </Grid>
  );
}
export default HomePage;