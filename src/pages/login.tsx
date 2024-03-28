import React from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { loginUser } from '../auth/auth-manager';
import { useAuthContext } from '../hooks/useAuthContext';
import { Pages } from '../enum';


const LoginPage = () => {
  const { isAuthenticated, setAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await loginUser()
      setAuthenticated(true);
      navigate(`/${Pages.home}`);
    } catch (error: any) {
      setAuthenticated(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={`/${Pages.home}`} />;
  }

  return (
    <Grid container justifyContent="center">
      <Grid item container justifyContent="center" p={2}>
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
        >
          login
        </Button>
      </Grid>
    </Grid >
  );
}
export default LoginPage;
