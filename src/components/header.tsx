import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useAuthContext } from '../hooks/useAuthContext';
import { authManager } from '../App';

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, setAuthenticated } = useAuthContext();

  return (
    <Grid item container display="flex" justifyContent={isAuthenticated ? "space-between" : "flex-end"}>
      <Grid item> <Menu /></Grid>
      {isAuthenticated && (
        <Grid item>
          <Button variant="contained" onClick={async () => {
            await authManager.logoutUser();
            setAuthenticated(false);
            navigate('/');
          }}>
            Logout
          </Button>
        </Grid>
      )}
    </Grid>
  )
}
