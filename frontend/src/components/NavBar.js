import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            component="a"
            href="/"
            color="inherit"
            sx={{
              flexGrow: 1,
              fontFamily: "Helvetica",
              textAlign: "center",
            }}
          >
            DERMA.AI
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
