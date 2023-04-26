import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Navbar from "./components/NavBar";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import ResultHistory from "./components/ResultHistory";
import PageNotFound from "./components/PageNotFound";
import Result from "./components/Result";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";

import { setUser } from "./reducers/loggedUserReducer";
import { setNotification } from "./reducers/notificationReducer";

import userService from "./services/user";
import skinResultService from "./services/skin-result";

import { Routes, Route, Navigate, useMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [result, setResult] = useState({});

  useEffect(() => {
    const userFromStorage = userService.getUser();
    dispatch(setUser(userFromStorage));
  }, [dispatch]);

  const loggedUser = useSelector((state) => state.loggedUser);

  const match = useMatch("/results/:id");

  useEffect(() => {
    const fetchResult = async (id) => {
      try {
        const result = await skinResultService.getResultById(id);
        setResult(result);
      } catch (err) {
        setResult(null);

        if (err.response && err.response.status === 500) {
          return dispatch(
            setNotification({
              msg: "Failed to connect to the server.",
              error: true,
            })
          );
        }

        if (err.response && err.response.data?.error?.token) {
          userService.clearUser();
          dispatch(setUser(null));

          navigate("/");

          return dispatch(
            setNotification({
              msg: "Token expired. You must login to continue",
              error: false,
            })
          );
        }

        if (err.response && err.response.data) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx (and the server sends error message)
          return dispatch(
            setNotification({
              msg: "Skin result not found.",
              error: true,
            })
          );
        }

        dispatch(
          setNotification({
            msg: "Failed to connect to the server.",
            error: true,
          })
        );
      }
    };

    if (match) {
      const id = match.params.id;
      fetchResult(id);
    }
  }, [dispatch, match, navigate]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <Box className="section" flex={1}>
          <Routes>
            <Route path="/" element={loggedUser ? <Home /> : <LoginForm />} />
            <Route
              path="/signup"
              element={loggedUser ? <Navigate to="/" /> : <SignupForm />}
            />
            <Route
              path="/history"
              element={loggedUser ? <ResultHistory /> : <PageNotFound />}
            />
            <Route
              path="/results/:id"
              element={
                loggedUser && result ? (
                  <Result {...result} isDetails />
                ) : (
                  <PageNotFound />
                )
              }
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </>
  );
}

export default App;
