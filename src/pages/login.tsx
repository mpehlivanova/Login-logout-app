import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Grid, TextField } from '@mui/material';
import { request } from '../api/api';
import { saveUserDataLocalStorage } from '../auth/auth-manager';

const LoginPage = () => {
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState('');
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleSubmitEvent = async (e: any) => {
    e.preventDefault();
    try {
      const res = await request(input);
      console.log(res);
      saveUserDataLocalStorage(res);
      navigate('/home')
    } catch (error: any) {
      setErrorState(error.message)
    }
  };

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setInput((prev: any) => ({
      ...prev,
      [name]: value,
    }));
    setErrorState('')
  };

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
              value={input.username}
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
              value={input.password}
            />
          </Grid>
          <Grid item xs={12} m={2}>
            {errorState && <Alert variant="filled" severity="error">{errorState}</Alert>}
          </Grid>
          <Grid item container justifyContent="center" p={2}>
            <Grid>
              <Button onClick={() => {
                setInput({
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
                disabled={!Boolean(input.username.length) || !Boolean(input.password.length)}
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
