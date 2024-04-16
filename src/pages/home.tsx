import React from "react";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useUserContext } from '../hooks/useUserContext';
import { routeConfiguration } from '../layout/constants';
import { RouteConfigurationType } from '../types';

const HomePage = () => {
  const { user } = useUserContext();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}><h1>Welcome, {user?.name || user?.email} !</h1></Grid>
      <Grid item container spacing={2} flexDirection="row">
        {Object.values(routeConfiguration).map(({ isRequireAuth, url, id }: RouteConfigurationType) => {
          if (isRequireAuth) {
            return <Grid item key={id}><Link to={`${url}`}>{id} page</Link></Grid>
          }
        })}
      </Grid>
    </Grid>
  );
}
export default HomePage;