const jwt = require("jsonwebtoken");

const skinResultsRouter = require("express").Router();
const upload = require("../middlewares/upload");

const SkinResult = require("../models/skin-result");
const { uploadToCloudinary } = require("../services/cloudinary");

skinResultsRouter.get("/", async (req, res) => {
  const decodedToken = jwt.verify(req.token, process.env.SECRET);

  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: "Token missing or invalid." });
  }

  // populate: Mongoose's join query
  const skinResults = await SkinResult.find({}).populate("user", {
    // Populate and send "user" object with "username" (including user "id")
    username: 1,
  });

  res.json(skinResults);
});

skinResultsRouter.post("/", upload.single("skinImage"), async (req, res) => {
  const decodedToken = jwt.verify(req.token, process.env.SECRET);

  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: "Token missing or invalid." });
  }

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  const user = req.user;

  const response = await uploadToCloudinary(req.file.path, "skin-images");

  const skinResult = new SkinResult({
    user: user._id,
    image: response.url,
    publicId: response.public_id,
  });

  const savedSkinResult = await skinResult.save();
  user.skinResults = user.skinResults.concat(savedSkinResult._id);
  await user.save();

  res.status(201).json(savedSkinResult);
});

module.exports = skinResultsRouter;
