import { NavLink } from "react-router-dom";
import Container from "@mui/material/Container";

import React from "react";

export default function PageNotFound() {
  return (
    <Container>
      <h1>Oops!</h1>
      <p>We could not find the page.</p>
      <p>
        <NavLink to="/">Go to the home page</NavLink>
      </p>
    </Container>
  );
}
