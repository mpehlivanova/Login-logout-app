import React from "react";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useUserContext } from '../hooks/useUserContext';
import { Pages } from '../enum';

const HomePage = () => {
  const { user } = useUserContext();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}><h1>Welcome, {user?.name || user?.email} !</h1></Grid>
      <Grid item container spacing={2} justifyContent="flex-start" height='100vh'>
        <Grid item><Link to={`/${Pages.user}`}>Users page</Link></Grid>
        <Grid item><Link to={`/${Pages.favorite}`}>Favorite page</Link></Grid>
      </Grid>
    </Grid>
  );
}
export default HomePage;