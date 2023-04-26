import { setNotification } from "../reducers/notificationReducer";
import { setUser } from "../reducers/loggedUserReducer";

import Result from "./Result";
import Notification from "./Notification";

import skinResultService from "../services/skin-result";
import userService from "../services/user";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    setLoading(true);
    if (e.target.files.length > 0) {
      const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

      if (!allowedTypes.includes(e.target.files[0].type)) {
        setLoading(false);

        return dispatch(
          setNotification({
            msg: "Invalid image type (only png, jpg, jpeg are allowed).",
            error: true,
          })
        );
      }

      if (e.target.files[0].size > 3000000) {
        setLoading(false);
        return dispatch(
          setNotification({
            msg: "Image size must be less than 1MB.",
            error: true,
          })
        );
      }

      try {
        const data = await skinResultService.uploadSkinImage(e.target.files[0]);

        setResult(data);
        setLoading(false);
        dispatch(setNotification(null));
      } catch (err) {
        setLoading(false);

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
              msg: "Invalid image.",
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
    }
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems={
        result && result.skinType === "Healthy skin" ? "center" : "start"
      }
      justifyContent="center"
    >
      <Grid item xs={4} sm={12} md={4}>
        {result && result.skinType !== "Healthy skin" && (
          <Container>
            <Box
              sx={{ p: 2, boxShadow: 3, borderRadius: 1, marginBottom: 5 }}
              align="center"
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  paddingY: 1,
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Uploaded image
              </Typography>

              <img src={result.image} alt="Uploaded" width="300px" />
            </Box>
          </Container>
        )}

        <Grid sx={{ marginX: 10 }} alignItems="center" justifyContent="center">
          <Notification />
        </Grid>

        {!loading && (
          <Grid item xs={12}>
            <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
              {result ? "Scan another photo?" : "Add a photo to scan"}
            </Typography>
          </Grid>
        )}

        <Grid item xs={12}>
          <div className="file is-centered is-boxed is-medium">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                accept=".png, .jpg, .jpeg"
                name="resume"
                onChange={handleImageUpload}
                disabled={loading}
              />

              {loading ? (
                <div className="file-cta">
                  <CircularProgress
                    sx={{ margin: result ? 3 : 5 }}
                    size={35}
                    thickness={4}
                  />
                  <Typography variant="h5">Processsing...</Typography>
                </div>
              ) : (
                <div className="file-cta">
                  <span className="file-icon icon-text">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">Upload photo</span>
                </div>
              )}
            </label>
          </div>
        </Grid>
      </Grid>

      {result && (
        <Grid item xs={12} sm={12} md={8}>
          <Result
            image={result.image}
            skinType={result.skinType}
            probability={result.probability}
            symptoms={result.symptoms}
            howCommon={result.howCommon}
            treatments={result.treatments}
            duration={result.duration}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Home;
