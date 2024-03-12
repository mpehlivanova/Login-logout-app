import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { logoutUser } from '../auth/auth-manager'

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation()

  return (
    <Grid item container display="flex" justifyContent="flex-end">
      {
        pathname !== '/' && (
          <Button variant="contained" onClick={() => {
            logoutUser();
            navigate('/');
          }}>
            Logout
          </Button>
        )
      }

    </Grid>
  )
}
