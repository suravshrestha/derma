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
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography
              variant="h4"
              component="a"
              href="/"
              color="inherit"
              sx={{
                flexGrow: 1,
                fontFamily: "Helvetica",
                ":hover": {
                  color: "#fff",
                },
              }}
            >
              DERMA.AI
            </Typography>

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
                <Button sx={{ color: "#fff", fontSize: 16 }}>History</Button>
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
