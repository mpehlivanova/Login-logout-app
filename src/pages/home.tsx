import React from "react";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { getUserData } from '../auth/auth-manager';


const HomePage = () => {
  const user = getUserData();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}><h1>Welcome, {user?.nickname} !</h1></Grid>
      <Grid item container spacing={2}>
        <Grid item><Link to="/user">Users page</Link></Grid>
        <Grid item><Link to='/favorite'>Favorite page</Link></Grid>
      </Grid>
    </Grid>
  );
}
export default HomePage;