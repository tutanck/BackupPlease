dump = require("./dump");

const start = async (mongodbUri, rootPath) => {
  await dump(mongodbUri, rootPath);
};

const args = process.argv.slice(2);
const uri = args[0];
const destPath = "./dumped";

start(uri, destPath);
