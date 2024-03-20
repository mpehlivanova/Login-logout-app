import React from "react";
import { Grid } from '@mui/material';
import Header from '../components/header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
