import React from "react";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Pages } from '../enum';

const FriendsPage = () => {

  return (
    <Grid container spacing={2}>
      <Grid item><h1>Friends page</h1></Grid>
      <Grid item xs={12}><Link to={`/${Pages.home}`}>back</Link></Grid>
    </Grid>
  );
}
export default FriendsPage;