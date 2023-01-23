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
import PercentIcon from "@mui/icons-material/Percent";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";

const ResultHistory = () => {
  return (
    <Container>
      <Grid container spacing={6}>
        {[0, 1, 2].map((ele, idx) => (
          <Grid item sm={12} md={6} key={idx}>
            <Card sx={{ p: 2, boxShadow: 3, borderRadius: 1 }}>
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
                  image="https://public.bnbstatic.com/static/academy/uploads-original/0ee9d7d59d424a7c8bd7d70c86070beb.png"
                  sx={{ padding: 2, width: "500px", marginX: "auto" }}
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
                            Disease name
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
                            Atopic dermatitis (eczema)
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
                            20 %
                          </Typography>
                        }
                      />
                    </ListItem>

                    <Divider variant="inset" component="li" />
                  </List>
                </CardContent>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ResultHistory;
