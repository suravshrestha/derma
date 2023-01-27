import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 2,
      px: 2,
      mt: "auto",
      backgroundColor: (theme) =>
        theme.palette.mode === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
    }}
  >
    <Container align="center">
      <Typography variant="body1"></Typography>
      <Typography variant="h6">Derma</Typography>

      <Typography variant="body2" color="text.secondary">
        &copy; <span color="is-bold">Derma</span> {new Date().getFullYear()}.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
