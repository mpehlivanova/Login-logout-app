import { Grid } from '@mui/material';

import { routeConfiguration } from '@/components/navigation/constants';

const PageNotFound = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>{routeConfiguration.pageNotFound.title}</h1>{' '}
      </Grid>
    </Grid>
  );
};
export default PageNotFound;
