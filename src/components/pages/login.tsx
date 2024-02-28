import { Button, Grid, TextField } from '@mui/material';
import React from "react";

const LoginPage = () => {

  return (
    <Grid container xs={12} justifyContent="center">
      <Grid item container xs={8} >
        <Grid item xs={12}>
          name
          <TextField
            fullWidth
            variant="outlined"
            id="name"
          />
        </Grid>
        <Grid item xs={12}>
          email
          <TextField
            fullWidth
            variant="outlined"
            id="email"
          />
        </Grid>
        <Grid item container justifyContent="center" p={2}>
          <Grid>
            <Button>
              back
            </Button>
            <Button
              variant="contained"
              type="submit"
            >
              login
            </Button>
          </Grid>

        </Grid>
      </Grid>

    </Grid>
  );
}
export default LoginPage
