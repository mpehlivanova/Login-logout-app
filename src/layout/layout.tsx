import React from "react";
import { Container, Grid, useMediaQuery } from '@mui/material';
import { Header, NavigationBar } from '../components';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const tabletAndUp = useMediaQuery((theme: any) => theme.breakpoints.up('md'));

  return (
    <Grid container item xs={12} bgcolor='#f9fafb'>
      {tabletAndUp && <Grid item md={3}>
        <NavigationBar />
      </Grid>}
      <Grid container item md={tabletAndUp ? 9 : 12}>
        <Header hasMobile={!tabletAndUp} />
        <Grid item xs={12} height='90vh'>
          <Container maxWidth='lg'>
            {children}
          </Container>
        </Grid>
      </Grid>
    </Grid >
  );
}

export default Layout;
