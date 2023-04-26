import skinResultService from "../services/skin-result";
import userService from "../services/user";

import { setNotification } from "../reducers/notificationReducer";
import { setUser } from "../reducers/loggedUserReducer";

import Notification from "./Notification";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import PercentIcon from "@mui/icons-material/Percent";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const ResultHistory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);

      try {
        const results = await skinResultService.getPreviousResults();
        setResults(results);
        setLoading(false);
      } catch (err) {
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

        setLoading(false);
        dispatch(
          setNotification({
            msg: "Error fetching result history. Please try again later.",
            error: true,
          })
        );
      }
    };

    fetchResults();
  }, [dispatch, navigate]);

  return (
    <Container>
      <Notification />

      <Grid container spacing={6}>
        {loading ? (
          <Grid item xs={12} align="center">
            <CircularProgress sx={{ margin: 5 }} size={25} thickness={4} />
            <Typography variant="h5">Fetching results...</Typography>
          </Grid>
        ) : results && results.length === 0 ? (
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              No results found.
            </Typography>
          </Grid>
        ) : (
          results.map((result, idx) => (
            <Grid item sm={12} md={6} key={idx} paddingBottom={0}>
              <Card
                sx={{ p: 2, boxShadow: 3, borderRadius: 1, paddingBottom: 0 }}
              >
                <Grid item xs={12} marginY="auto" marginX="auto">
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      paddingX: 2,
                      paddingTop: 2,
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    Uploaded image
                  </Typography>

                  <CardMedia
                    component="img"
                    alt="Uploaded image"
                    image={result.image}
                    sx={{
                      padding: 2,
                      height: "300px",
                      marginX: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Grid>

                <Divider />

                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      paddingX: 2,
                      paddingTop: 2,
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    Predictions
                  </Typography>

                  <CardContent>
                    <List
                      sx={{
                        width: "100%",
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <CoronavirusIcon color="error" />
                          </Avatar>
                        </ListItemAvatar>

                        <ListItemText
                          disableTypography
                          primary={
                            <Typography
                              style={{
                                fontSize: 17,
                                fontWeight: "bold",
                                fontFamily: "Helvetica",
                              }}
                            >
                              Skin type
                            </Typography>
                          }
                          secondary={
                            <Typography
                              style={{
                                fontSize: 15,
                                fontWeight: "bold",
                                fontFamily: "Helvetica",
                              }}
                            >
                              {result.skinType}
                            </Typography>
                          }
                        />
                      </ListItem>

                      <Divider variant="inset" component="li" />

                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <PercentIcon color="action" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          disableTypography
                          primary={
                            <Typography
                              style={{
                                fontSize: 17,
                                fontWeight: "bold",
                                fontFamily: "Helvetica",
                              }}
                            >
                              Probability
                            </Typography>
                          }
                          secondary={
                            <Typography
                              style={{
                                fontSize: 15,
                                fontWeight: "bold",
                                fontFamily: "Helvetica",
                              }}
                            >
                              {(
                                Math.round(result.probability * 10000) / 100
                              ).toFixed(2)}{" "}
                              %
                            </Typography>
                          }
                        />
                      </ListItem>

                      <Divider variant="inset" component="li" />

                      <Box textAlign="center" marginTop="25px">
                        <Button
                          variant="contained"
                          size="large"
                          href={`/results/${result.id}`}
                          hover="none"
                          sx={{
                            ":hover": {
                              bgcolor: "primary.main", // theme.palette.primary.main
                              color: "white",
                            },
                          }}
                        >
                          View details
                        </Button>
                      </Box>
                    </List>
                  </CardContent>
                </Grid>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default ResultHistory;
