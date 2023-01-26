const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");

const { skins } = require("../utils/skins");

const loadModel = async (imagePath) => {
  const image = fs.readFileSync(imagePath);
  let tensor = tf.node.decodeImage(image);

  const resizedImage = tensor.resizeNearestNeighbor([300, 300]);
  const batchedImage = resizedImage.expandDims(0);
  const input = batchedImage.toFloat().div(tf.scalar(255));

  const model = await tf.loadLayersModel(process.env.ML_MODEL_PATH);

  let predictions = await model.predict(input).data();
  predictions = Array.from(predictions);

  const max = Math.max(...predictions);
  const index = predictions.indexOf(max);

  return { ...skins[index], probability: max };
};

module.exports = { loadModel };
