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

const Result = ({ image }) => {
  return (
    <Container>
      <Card sx={{ p: 2, boxShadow: 3, borderRadius: 1 }}>
        <Stack
          direction={{ sm: "column", lg: "row" }}
          divider={<Divider orientation="vertical" flexItem />}
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
              // crossOrigin="anonymous"
              component="img"
              alt="Uploaded image"
              image={image}
              sx={{ padding: 2, width: "500px" }}
            />
          </Grid>

          <Divider orientation="horizontal" flexItem sx={{ marginY: 2 }} />

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
        </Stack>
      </Card>
    </Container>
  );
};

export default Result;
