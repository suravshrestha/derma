// import BulmaSignupForm from "../components/BulmaSignupForm";

import background from "../assets/home.jpg";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import { useState } from "react";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

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
              <Typography variant="h4" align="center">
                Log In
              </Typography>

              <TextField
                label="Username"
                variant="outlined"
                margin="normal"
                size="small"
                required
              />

              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                margin="normal"
                size="small"
                required
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={showPassword}
                    onChange={(e) => setShowPassword(!showPassword)}
                  />
                }
                label="Show password"
              />

              <Button
                variant="contained"
                color="success"
                style={{ marginTop: 3 }}
              >
                Log in
              </Button>

              <Typography align="center" mt={2}>
                Don't have an account?{" "}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Sign up
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
