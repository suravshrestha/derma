import { setNotification } from "../reducers/notificationReducer";
import { setUser } from "../reducers/loggedUserReducer";
import userService from "../services/user";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import React from "react";

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const loggedUser = useSelector((state) => state.loggedUser);

  const handleLogout = () => {
    userService.clearUser();

    dispatch(
      setNotification({
        msg: `User ${loggedUser.username} logged out.`,
        error: false,
      })
    );

    dispatch(setUser(null));

    navigate("/");
  };

  return (
    <Box>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <NavLink
              to="/"
              onClick={() => {
                if (location.pathname === "/") {
                  navigate(0);
                } else {
                  navigate("/");
                }
              }}
              style={{
                flexGrow: 1,
                fontFamily: "Helvetica",
                color: "inherit",
                ":hover": {
                  color: "#fff",
                },
              }}
            >
              <Typography variant="h4">DERMA</Typography>
            </NavLink>

            <Typography
              color="inherit"
              sx={{
                fontFamily: "Helvetica",
                textAlign: "right",
                fontSize: "1.3rem",
              }}
            >
              {loggedUser && loggedUser.username + " | "}
            </Typography>

            {loggedUser && (
              <Box>
                <NavLink to="/history">
                  <Button sx={{ color: "#fff", fontSize: 16 }}>History</Button>
                </NavLink>

                <Button
                  sx={{ color: "#fff", fontSize: 16 }}
                  onClick={handleLogout}
                >
                  Log out
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
