import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PercentIcon from "@mui/icons-material/Percent";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
import InfoIcon from "@mui/icons-material/Info";

import React from "react";

const Result = ({
  image,
  skinType,
  probability,
  symptoms,
  howCommon,
  treatments,
  duration,
  isDetails,
}) => {
  return (
    <Container>
      <Card sx={{ p: 2, boxShadow: 3, borderRadius: 1, marginTop: 0 }}>
        <Stack
          direction={{ sm: "column", lg: "row" }}
          divider={<Divider orientation="vertical" flexItem />}
        >
          {(skinType === "Healthy skin" || isDetails) && (
            <Grid
              item
              xs={skinType === "Healthy skin" && 6}
              lg={isDetails && 8}
              marginX="auto"
              align="center"
              alignItems="start"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  paddingX: 2,
                  paddingTop: 2,
                  fontWeight: 500,
                }}
              >
                Uploaded image
              </Typography>

              <CardMedia
                component="img"
                alt="Uploaded image"
                image={image}
                sx={{ padding: 2, width: "400px", objectFit: "contain" }}
              />
            </Grid>
          )}

          <Grid
            item
            lg={isDetails}
            xs={!isDetails && (skinType === "Healthy skin" ? 6 : 12)}
          >
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
                        {skinType}
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
                        {(Math.round(probability * 10000) / 100).toFixed(2)} %
                      </Typography>
                    }
                  />
                </ListItem>

                <Divider variant="inset" component="li" />

                {symptoms && symptoms.length > 0 && (
                  <div>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <InfoIcon color="warning" />
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
                            Symptoms
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
                            {symptoms.map((symptom) => symptom + ", ")}
                          </Typography>
                        }
                      />
                    </ListItem>

                    <Divider variant="inset" component="li" />
                  </div>
                )}

                {treatments && treatments.length > 0 && (
                  <div>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <LocalHospitalIcon color="primary" />
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
                            Treatments
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
                            {treatments.map((treatment) => treatment + ", ")}
                          </Typography>
                        }
                      />
                    </ListItem>

                    <Divider variant="inset" component="li" />
                  </div>
                )}

                {howCommon && (
                  <div>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <LanguageIcon color="primary" />
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
                            How common
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
                            {howCommon}
                          </Typography>
                        }
                      />
                    </ListItem>

                    <Divider variant="inset" component="li" />
                  </div>
                )}

                {duration && (
                  <div>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AccessTimeIcon color="info" />
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
                            Duration
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
                            {duration}
                          </Typography>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </div>
                )}
              </List>
            </CardContent>
          </Grid>
        </Stack>
      </Card>
    </Container>
  );
};

export default Result;
