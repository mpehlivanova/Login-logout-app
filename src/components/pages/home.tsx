import React from "react";
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <Grid container xs={12} spacing={2}>
      <Grid item xs={12}><h1>Welcome!</h1></Grid>
      <Grid item container xs={12} spacing={2}>
        <Grid item><Link to="/user">users</Link></Grid>
        <Grid item><Link to='/favorite' >favorite</Link></Grid>
      </Grid>
    </Grid>
  );
}
export default HomePage