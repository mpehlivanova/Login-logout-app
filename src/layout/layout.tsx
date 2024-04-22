import React from "react";
import { Grid } from '@mui/material';
import { Header, Navigation } from '../components';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Grid container p={2}>
      <Grid item xs={12} display='flex' justifyContent="space-between">
        <Navigation />
        <Header />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}

export default Layout;
