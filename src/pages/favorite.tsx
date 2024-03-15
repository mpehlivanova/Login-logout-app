import React from "react";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { PAGES } from '../enum';

const FavoritePage = () => {
  return (
    <Grid container>
      <Grid item xs={12}><h1>Favorite page</h1> </Grid>
      <Grid item xs={12}> <Link to={`/${PAGES.home}`}>back</Link></Grid>
    </Grid >
  );
}
export default FavoritePage