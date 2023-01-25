// For printing normal log messages
const info = (...params) => {
  if (process.env.NODE_ENV !== "test") {
    console.log(...params);
  }
};

// For printing error messages
const error = (...params) => {
  if (process.env.NODE_ENV !== "test") {
    console.error(...params);
  }
};

module.exports = {
  info,
  error,
};
