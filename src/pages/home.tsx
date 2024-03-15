import React from "react";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useUserContext } from '../hooks/useUserContext';
import { PAGES } from '../enum';

const HomePage = () => {
  const { user } = useUserContext();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}><h1>Welcome, {user?.name} !</h1></Grid>
      <Grid item container spacing={2}>
        <Grid item><Link to={`/${PAGES.user}`}>Users page</Link></Grid>
        <Grid item><Link to={`/${PAGES.favorite}`}>Favorite page</Link></Grid>
      </Grid>
    </Grid>
  );
}
export default HomePage;