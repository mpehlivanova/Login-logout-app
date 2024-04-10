import React, { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { Alert, Button, Grid } from '@mui/material';
import { authManager } from '../App'
import { useAuthContext } from '../hooks/useAuthContext';
import { Pages } from '../enum';


const LoginPage = () => {
  const { isAuthenticated, setAuthenticated } = useAuthContext();
  const [error, setError] = useState<string>('')
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await authManager.loginUser();
      setAuthenticated(true);
      navigate(`/${Pages.home}`);
    } catch (error: any) {
      setAuthenticated(false);
      setError(error.message);
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
      {error && <Alert severity='error'>{error}</Alert>}
    </Grid >
  );
}
export default LoginPage;
