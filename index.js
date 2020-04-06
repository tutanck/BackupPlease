dump = require("./dump");

const start = async (mongodbUri) => {
  await dump(mongodbUri);
};

start(process.argv.slice(2)[0]);
