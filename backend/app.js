const config = require("./utils/config");

const express = require("express");
const app = express();

require("express-async-errors");

const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

app.use(cors());
app.use(morgan("tiny"));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      styleSrc: config.safeToLoadStyles,
      imgSrc: config.safeToLoadImages,
    },
  })
);

const skinResultsRouter = require("./controllers/skin-results");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");

const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

const { tokenExtractor, userExtractor } = require("./utils/middleware");

const mongoose = require("mongoose");

logger.info("connecting to", config.MONGODB_URI);

mongoose.set("strictQuery", false);
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

const path = require("path");
const CLIENT_BUILD_DIR = path.join(__dirname, "build");

// Serve static files from the React app
app.use(express.static(CLIENT_BUILD_DIR));

app.use(express.json());

// Register the routers
app.use(
  "/api/v1/skin-results",
  tokenExtractor,
  userExtractor,
  skinResultsRouter
);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/login", loginRouter);

// handler of requests which result to errors
// this has to be the last loaded middleware
app.use(middleware.errorHandler);

// Handles any frontend URL requests that don't match the ones above
app.get("/*", (req, res) => {
  res.sendFile(path.join(CLIENT_BUILD_DIR, "index.html"));
});

module.exports = app;
