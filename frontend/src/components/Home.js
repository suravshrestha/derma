import Result from "./Result";

import Notification from "./Notification";
import skinResultService from "../services/skin-result";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { useDispatch } from "react-redux";

import React, { useState } from "react";
import { setNotification } from "../reducers/notificationReducer";

const Home = () => {
  const dispatch = useDispatch();

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

      if (e.target.files[0].size > 1000000) {
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
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={4} sm={12} md={4}>
        <Notification />

        <Grid item xs={12}>
          <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
            Add a photo to scan
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <div className="file is-centered is-boxed is-medium">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                accept=".png, .jpg, .jpeg"
                name="resume"
                onChange={handleImageUpload}
              />

              {loading ? (
                <div className="file-cta">
                  <CircularProgress
                    sx={{ margin: 5 }}
                    size={50}
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
          <Result image={result.image} />
        </Grid>
      )}
    </Grid>
  );
};

export default Home;
