import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { Alert, Button, Dialog, Grid, Typography } from '@mui/material';
import { authManager } from '../App'
import { useAuthContext } from '../hooks/useAuthContext';
import { Pages } from '../enum';
import { palette } from '../theme/components';


const LoginPage = () => {
  const { isAuthenticated, setAuthenticated } = useAuthContext();
  const [error, setError] = useState<string>('')
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false)
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    setIsLoggingIn(true);
    try {
      await authManager.loginUser();
      setAuthenticated(true);
      navigate(`/${Pages.home}`);
    } catch (error: any) {
      setAuthenticated(false);
      setError(error.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={`/${Pages.home}`} />;
  }

  return (
    <Dialog open maxWidth='xs'>
      <Grid item container p={5}>
        <Grid item>
          <Typography variant='h5'><b>Sign in to Login logout app</b></Typography>
        </Grid>
        <Grid xs={12} item display='flex' justifyContent="center" p={5}>
          <img
            width='50%'
            src='images/icon-login-page.png'
            alt='login page logo'
            loading="lazy"
          />
        </Grid>
        <Grid xs={12} item justifyContent="center" >
          <Button
            variant="contained"
            type="submit"
            disabled={isLoggingIn}
            sx={{
              backgroundColor: palette.grey[900],
              width: '100%',
              ":hover": {
                backgroundColor: palette.grey[900],
              },
              py: 2
            }}
            onClick={handleSubmit}
          >
            <b>login</b>
          </Button>
        </Grid>
        <Grid item>
          {error && <Alert severity='error'>{error}</Alert>}
        </Grid>
      </Grid>
    </Dialog>
  );
}
export default LoginPage;
