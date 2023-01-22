// import BulmaSignupForm from "../components/BulmaSignupForm";

import background from "../assets/home.jpg";

import signUpService from "../services/signup";
import userService from "../services/user";

import { setUser } from "../reducers/loggedUserReducer";
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

import { useState } from "react";

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
      const { key: token, user } = await signUpService.signup({
        username,
        password1: password,
        password2: confirmPassword,
      });

      const userInfo = { token, ...user };
      userService.setUser(userInfo);
      dispatch(setUser(userInfo));
      dispatch(setNotification(null));

      setUsername("");
      setPassword("");
      setConfirmPassword("");

      navigate("/");
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
        setUsernameError(err.response.data.username?.[0]);
        setPasswordError(err.response.data.password1?.[0]);
        setConfirmPasswordError(err.response.data.password2?.[0]);

        dispatch(
          setNotification({
            msg: err.response.data.non_field_errors?.[0],
            error: true,
          })
        );

        return;
      }
    }
  };

  return (
    <div>
      {/* <BulmaSignupForm /> */}

      <Container>
        <Box component="form" sx={{ p: 2, boxShadow: 3, borderRadius: 1 }}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={7}>
              <img src={background} alt="" />
            </Grid>

            <Grid item xs={5} container direction="column">
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
