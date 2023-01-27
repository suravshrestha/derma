require("dotenv").config();

const PORT = process.env.PORT || 3001;

const MONGODB_URI =
  (process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI) || "mongodb://localhost:27017/derma-db";

const safeToLoadStyles = [
  "'self'",
  "cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css",
  "cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css",
  "'unsafe-inline'",
];

const safeToLoadImages = [
  "'self'",
  "public.bnbstatic.com",
  "res.cloudinary.com",
  "'unsafe-inline'",
];

module.exports = {
  MONGODB_URI,
  PORT,
  safeToLoadStyles,
  safeToLoadImages,
};
