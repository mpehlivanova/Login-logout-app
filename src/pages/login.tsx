import React, { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { Alert, Button, Grid, TextField } from '@mui/material';
import { request } from '../api/api';
import { saveUserDataLocalStorage } from '../auth/auth-manager';
import { useAuthContext } from '../hooks/useAuthContext';
import { PAGES } from '../enum';
import { RequestUser } from '../types';

const LoginPage = () => {
  const { isAuthenticated, setAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState('');
  const [user, setUser] = useState<RequestUser>({
    username: "",
    password: "",
  });

  const handleSubmitEvent = async (e: any) => {
    e.preventDefault();
    try {
      if (!Boolean(user.username.length) || !Boolean(user.password.length)) {
        setErrorState('Please provide valid input.');
      } else {
        const res = await request({ user });
        saveUserDataLocalStorage(res);
        setAuthenticated(true);
        navigate(`/${PAGES.home}`);
      }

    } catch (error: any) {
      setErrorState(error.message);
      setAuthenticated(false);
    }
  };

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setUser((prev: any) => ({
      ...prev,
      [name]: value,
    }));
    setErrorState('');
  };

  if (isAuthenticated) {
    return <Navigate to={`/${PAGES.home}`} />;
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={8} >
        <form onSubmit={handleSubmitEvent}>
          <Grid item xs={12}>
            user name or email
            <TextField
              fullWidth
              variant="outlined"
              id="username"
              type="username"
              name='username'
              onChange={handleInput}
              value={user.username}
            />
          </Grid>
          <Grid item xs={12}>
            password
            <TextField
              fullWidth
              type="password"
              variant="outlined"
              id="password"
              name="password"
              onChange={handleInput}
              value={user.password}
            />
          </Grid>
          <Grid item xs={12} m={2}>
            {errorState && <Alert variant="filled" severity="error">{errorState}</Alert>}
          </Grid>
          <Grid item container justifyContent="center" p={2}>
            <Grid>
              <Button onClick={() => {
                setUser({
                  username: "",
                  password: "",
                });
                setErrorState('');
              }
              }>
                clear
              </Button>
              <Button
                variant="contained"
                type="submit"
              >
                login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid >
    </Grid >
  );
}
export default LoginPage;
