import React from "react";
import { Grid } from '@mui/material';
import { Header, NavigationBar } from '../components';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <Grid container item xs={12}>
      <Grid item xs={3}>
        <NavigationBar />
      </Grid>
      <Grid container item xs={9}>
        <Header />
        <Grid item xs={12} height='90vh'>
          {children}
        </Grid>
      </Grid>
    </Grid >
  );
}

export default Layout;
