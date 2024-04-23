import React from "react";
import { Grid } from '@mui/material';
import { useUserContext } from '../hooks/useUserContext';

const HomePage = () => {
  const { user } = useUserContext();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}><h1>Home page</h1> </Grid>
      <Grid item xs={12}><h1>Welcome, {user?.name || user?.email} !</h1></Grid>
    </Grid>
  );
}
export default HomePage;