import React from "react";
import { Grid } from '@mui/material';
import { Header, NavigationBar } from '../components';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12} display='flex' justifyContent="space-between">
        <Header />
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4} sm={4} md={3} xl={2}>
          <NavigationBar />
        </Grid>
        <Grid item xs={8} sm={8} md={9} xl={10}>
          {children}
        </Grid>
      </Grid>
    </Grid >
  );
}

export default Layout;
