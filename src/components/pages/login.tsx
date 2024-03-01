import { Alert, Button, Grid, TextField } from '@mui/material';
import React, { useState } from "react";
import { request } from '../api/auth';

const LoginPage = () => {

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleSubmitEvent = (e: any) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
    }
    <Alert variant="outlined" >please provide a valid input</Alert>;
  };

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setInput((prev: any) => ({
      ...prev,
      [name]: value,
    }));
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
            />
          </Grid>
          <Grid item container justifyContent="center" p={2}>
            <Grid>
              <Button>
                back
              </Button>
              <Button
                variant="contained"
                type="submit"
                onClick={() => {
                  request(input)
                }}
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
export default LoginPage
