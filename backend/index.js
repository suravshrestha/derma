const app = require("./app"); // the actual Express application
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");

const server = http.createServer(app);

const skinResultService = require("./services/skin-result");

server.listen(config.PORT, async () => {
  logger.info(`Server running on port ${config.PORT}`);
  await skinResultService.loadModel();
});
