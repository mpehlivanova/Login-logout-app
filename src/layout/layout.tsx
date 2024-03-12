import React from "react";
import { Grid } from '@mui/material';
import Header from '../components/header';

function Layout({ children }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}

export default Layout;
