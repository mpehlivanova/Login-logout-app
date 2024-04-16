import React from "react";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Pages } from '../enum';

const ProfilePage = () => {
  return (
    <Grid container>
      <Grid item xs={12}><h1>Profile page</h1> </Grid>
      <Grid item xs={12}> <Link to={`/${Pages.home}`}>back</Link></Grid>
    </Grid >
  );
}
export default ProfilePage;