import { Grid } from '@mui/material';

import { routeConfiguration } from '@/components/navigation/constants';

const UserPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>{routeConfiguration.user.title}</h1>{' '}
      </Grid>
    </Grid>
  );
};
export default UserPage;
