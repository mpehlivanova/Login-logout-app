import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { logoutUser } from '../auth/auth-manager'
import { useAuthContext } from '../hooks/useAuthContext';

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, setAuthenticated } = useAuthContext();

  return (
    <Grid item container display="flex" justifyContent="flex-end">
      {isAuthenticated && (
        <Button variant="contained" onClick={() => {
          logoutUser();
          setAuthenticated(false);
          navigate('/');
        }}>
          Logout
        </Button>
      )}

    </Grid>
  )
}
