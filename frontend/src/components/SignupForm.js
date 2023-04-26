// import BulmaSignupForm from "../components/BulmaSignupForm";

import background from "../assets/home.jpg";

import signUpService from "../services/signup";

import { setNotification } from "../reducers/notificationReducer";

import Notification from "./Notification";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import React, { useState } from "react";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      await signUpService.signup({ username, password, confirmPassword });

      setUsername("");
      setPassword("");
      setConfirmPassword("");

      navigate("/");

      dispatch(
        setNotification({
          msg: "Registration successful, please login.",
          error: false,
        })
      );
    } catch (err) {
      if (err.response && err.response.status === 500) {
        return dispatch(
          setNotification({
            msg: "Failed to connect to the server.",
            error: true,
          })
        );
      }

      if (err.response && err.response.data) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx (and the server sends error message)
        setUsernameError(err.response.data.username);
        setPasswordError(err.response.data.password);
        setConfirmPasswordError(err.response.data.confirmPassword);

        return;
      }

      dispatch(
        setNotification({
          msg: "Failed to connect to the server.",
          error: true,
        })
      );
    }
  };

  return (
    <div>
      {/* <BulmaSignupForm /> */}

      <Container>
        <Box component="form" sx={{ p: 2, boxShadow: 3, borderRadius: 1 }}>
          <Grid container spacing={5} alignItems="center">
            <Grid item sm={12} lg={7}>
              <img src={background} alt="" />
            </Grid>

            <Grid item sm={12} lg={5} container direction="column">
              <Notification />

              <Typography variant="h4" align="center">
                Create your account
              </Typography>

              <FormControl onSubmit={handleSignup}>
                <TextField
                  autoFocus
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  required
                  value={username}
                  name="username"
                  onChange={({ target }) => setUsername(target.value)}
                  InputLabelProps={{
                    style: {
                      fontSize: 18,
                    },
                  }} // font size of input label
                  InputProps={{
                    style: {
                      fontSize: 18,
                    },
                  }} // font size of input text
                  error={!!usernameError}
                  helperText={usernameError}
                />

                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  margin="normal"
                  size="small"
                  required
                  value={password}
                  name="password"
                  onChange={({ target }) => setPassword(target.value)}
                  InputLabelProps={{
                    style: {
                      fontSize: 18,
                    },
                  }} // font size of input label
                  InputProps={{
                    style: {
                      fontSize: 18,
                    },
                  }} // font size of input text
                  error={!!passwordError}
                  helperText={passwordError}
                />

                <TextField
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  margin="dense"
                  size="small"
                  required
                  value={confirmPassword}
                  name="confirm-password"
                  onChange={({ target }) => setConfirmPassword(target.value)}
                  InputLabelProps={{
                    style: {
                      fontSize: 18,
                    },
                  }} // font size of input label
                  InputProps={{
                    style: {
                      fontSize: 18,
                    },
                  }} // font size of input text
                  error={!!confirmPasswordError}
                  helperText={confirmPasswordError}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                    />
                  }
                  label="Show password"
                />

                <Button
                  variant="contained"
                  color="success"
                  style={{ marginTop: 3 }}
                  type="submit"
                  onClick={handleSignup}
                >
                  Sign Up
                </Button>
              </FormControl>

              <Typography align="center" mt={2}>
                Already have an account?{" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  Log in
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default SignupForm;
