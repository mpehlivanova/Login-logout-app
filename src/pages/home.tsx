import { Grid } from '@mui/material';

import { routeConfiguration } from '@/components/navigation/constants';

const HomePage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>{routeConfiguration.home.title}</h1>{' '}
      </Grid>
    </Grid>
  );
};
export default HomePage;
