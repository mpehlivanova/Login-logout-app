import React from "react";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Pages } from '../enum';

const NotificationsPage = () => {
  return (
    <Grid container>
      <Grid item><h1>Notifications page</h1></Grid>
      <Grid item xs={12}> <Link to={`/${Pages.home}`}>back</Link></Grid>
    </Grid>
  );
}
export default NotificationsPage;