import React from "react";
import { Link } from 'react-router-dom';
import { Button, Grid, ListItemIcon, MenuItem, MenuList, Paper, Typography } from '@mui/material';
import { Dashboard, Person, People } from '@mui/icons-material';
import { Pages } from '../enum';


const StylePage = () => {
  return (
    <Grid container>
      <Grid item xs={12}><h1>Style page</h1> </Grid>
      <Grid item xs={12}> <Link to={`/${Pages.home}`}>back</Link></Grid>

      <Grid item xs={12}>
        <Typography variant='h4' py={2}><b>Style components</b></Typography>
        <Typography variant='h5'><b>Menu</b></Typography>
        <Paper sx={{ width: 230 }}>
          <MenuList>
            <MenuItem >
              <ListItemIcon >
                <Dashboard fontSize="small" />
              </ListItemIcon>
              <Typography>Dashboard</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Person fontSize="small" />
              </ListItemIcon>
              <Typography>User</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <People fontSize="small" />
              </ListItemIcon>
              <Typography>
                Friends
              </Typography>
            </MenuItem>
          </MenuList>
        </Paper>
        <Typography variant='h5' py={2}><b>Buttons</b></Typography>
        <Grid item display="flex" gap={1} wrap='wrap' spacing={1} flexDirection='column'>

          <Grid item display='flex' gap={1}>
            <Button variant="contained" color="primary">contained</Button>
            <Button variant="outlined" color="primary">outlined</Button>
            <Button variant="text" color="primary">text</Button>
          </Grid>

          <Grid item display='flex' gap={1}>
            <Button variant="contained" color="secondary">contained</Button>
            <Button variant="outlined" color="secondary">outlined</Button>
            <Button variant="text" color="primary">text</Button>
          </Grid>

          <Grid item display='flex' gap={1}>
            <Button variant="contained" color="info">contained</Button>
            <Button variant="outlined" color="info">outlined</Button>
            <Button variant="text" color="info">text</Button>
          </Grid>

          <Grid item display='flex' gap={1}>
            <Button variant="contained" color="success">contained</Button>
            <Button variant="outlined" color="success">outlined</Button>
            <Button variant="text" color="success">text</Button>
          </Grid>

          <Grid item display='flex' gap={1}>
            <Button variant="contained" color="warning">contained</Button>
            <Button variant="outlined" color="warning">outlined</Button>
            <Button variant="text" color="warning">text</Button>
          </Grid>

        </Grid>
      </Grid>

    </Grid >
  );
}
export default StylePage;