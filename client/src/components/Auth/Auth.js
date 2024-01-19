import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import makeStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from "./Input";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import Icon from "./icon";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const classes = makeStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const handleShowPassword = () =>
      setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = () => {}
    const handleChange = () => {};
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        handleShowPassword(false);
    };
    const dispatch = useDispatch();
    const history = useNavigate();
    const onSuccess = (res) => {
      const result = res?.profileObj;
      const token = res?.tokenId;
      try {
        dispatch({ type: "AUTH", data: { result, token } });
        history("/");
      } catch (error) {
        console.log(error);
      }
    };
    const onError = (error) => {
      console.log(error);
      console.log("Google sign in failed! ... Try again later.");
    };
    return (
      <GoogleOAuthProvider clientId="566190068478-h5tjsscs7c827v1dtg37krtnp4i1tui1.apps.googleusercontent.com">
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {isSignUp && (
                  <>
                    <Input
                      name="firstName"
                      label="First Name"
                      handleChange={handleChange}
                      autoFocus
                      half
                    />
                    <Input
                      name="lastName"
                      label="Last Name"
                      handleChange={handleChange}
                      half
                    />
                  </>
                )}
                <Input
                  name="email"
                  label="Email Address"
                  handleChange={handleChange}
                  type="email"
                />
                <Input
                  name="password"
                  label="Password"
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                />
                {isSignUp && (
                  <Input
                    name="confirmPassword"
                    label="Repeat Password"
                    handleChange={handleChange}
                    type="password"
                  />
                )}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
              <GoogleLogin
                render={(renderProps) => (
                  <Button
                    className={classes.googleButton}
                    color="primary"
                    fullWidth
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    startIcon={<Icon />}
                    variant="contained"
                  >
                    Google Sign In
                  </Button>
                )}
                onSuccess={onSuccess}
                onError={onError}
                cookiePolicy="single_host_origin"
              />
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Button onClick={switchMode}>
                    {isSignUp
                      ? "Already have an account? Sign In"
                      : "Don't have an account? Sign Up"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </GoogleOAuthProvider>
    );
}

export default Auth;