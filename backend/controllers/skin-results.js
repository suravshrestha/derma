const jwt = require("jsonwebtoken");

const skinResultsRouter = require("express").Router();
const upload = require("../middlewares/upload");

const SkinResult = require("../models/skin-result");
const skinResultService = require("../services/skin-result");

const {
  uploadToCloudinary,
  removeFromCloudinary,
} = require("../services/cloudinary");

skinResultsRouter.get("/", async (req, res) => {
  const skinResults = await SkinResult.find({ user: req.user });

  res.json(skinResults);
});

skinResultsRouter.get("/:id", async (req, res) => {
  const skinResult = await SkinResult.findOne({
    _id: req.params.id,
  });

  if (!skinResult) {
    return res
      .status(404)
      .json({ error: { skinResult: "Skin result not found." } });
  }

  if (skinResult.user.toString() !== req.user._id.toString()) {
    return res
      .status(401)
      .json({ error: "User not authorized to view this skin result." });
  }

  res.json(skinResult);
});

skinResultsRouter.post("/", upload.single("skinImage"), async (req, res) => {
  const decodedToken = jwt.verify(req.token, process.env.JWT_SECRET_KEY);

  if (!req.token || !decodedToken.id) {
    return res
      .status(401)
      .json({ error: { token: "Token missing or invalid." } });
  }

  if (!req.file) {
    return res.status(400).json({
      error: { image: "Image is required." },
    });
  }

  const { skinType, probability, ...otherResults } =
    await skinResultService.predictFromModel(req.file.path);

  if (!skinType || !probability || probability < 0.5) {
    return res.status(400).json({ error: { image: "Invalid image." } });
  }

  const user = req.user;

  const response = await uploadToCloudinary(req.file.path, "skin-images");

  const skinResult = new SkinResult({
    user: user._id,
    image: response.url,
    publicId: response.public_id,
    skinType,
    probability,
    ...otherResults,
  });

  const savedSkinResult = await skinResult.save();
  user.skinResults = user.skinResults.concat(savedSkinResult._id);
  await user.save();

  res.status(201).json(savedSkinResult);
});

skinResultsRouter.delete("/:id", async (req, res) => {
  const decodedToken = jwt.verify(req.token, process.env.JWT_SECRET_KEY);

  if (!req.token || !decodedToken.id) {
    return res
      .status(401)
      .json({ error: { token: "Token missing or invalid." } });
  }

  let skinResult = await SkinResult.findById(req.params.id);

  if (!skinResult) {
    return res
      .status(404)
      .json({ error: { skinResult: "Skin result not found." } });
  }

  if (skinResult.user.toString() !== req.user._id.toString()) {
    return res
      .status(401)
      .json({ error: { skinResult: "User not authorized." } });
  }

  await removeFromCloudinary(skinResult.publicId);
  await SkinResult.findByIdAndRemove(req.params.id);

  res.status(204).end();
});

module.exports = skinResultsRouter;
