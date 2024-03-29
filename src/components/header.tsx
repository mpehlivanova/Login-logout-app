import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { useAuthContext } from '../hooks/useAuthContext';
import { authManager } from '../App';

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, setAuthenticated } = useAuthContext();

  return (
    <Grid item container display="flex" justifyContent="flex-end">
      {isAuthenticated && (
        <Button variant="contained" onClick={() => {
          authManager.logout();
          setAuthenticated(false);
          navigate('/');
        }}>
          Logout
        </Button>
      )}

    </Grid>
  )
}
