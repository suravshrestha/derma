const multer = require("multer");

const storage = multer.diskStorage({});
const upload = multer({ storage });

module.exports = upload;
