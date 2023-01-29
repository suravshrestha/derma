const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");

const { skins } = require("../utils/skins");

let model = null;

const loadModel = async () => {
  model = await tf.loadLayersModel(
    process.env.ML_MODEL_PATH || "file://./ml-model/model.json"
  );
};

const predictFromModel = async (imagePath) => {
  const image = fs.readFileSync(imagePath);
  let tensor = tf.node.decodeImage(image, 3);

  const resizedImage = tensor.resizeNearestNeighbor([300, 300]);
  const batchedImage = resizedImage.expandDims(0);
  const input = batchedImage.toFloat().div(tf.scalar(255));

  let predictions = await model.predict(input).data();
  predictions = Array.from(predictions);

  const max = Math.max(...predictions);
  const index = predictions.indexOf(max);

  return { ...skins[index], probability: max };
};

module.exports = { loadModel, predictFromModel };
