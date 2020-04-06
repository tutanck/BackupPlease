var backup = require("mongodb-backup");

dump = (mongodbUri, rootPath) => {
  console.log("====================================");
  console.log(__dirname + "/" + rootPath);
  console.log("====================================");
  return new Promise((resolve, reject) => {
    backup({
      uri: mongodbUri, // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase>
      root: __dirname + "/" + rootPath,
      callback: function (err) {
        if (err) {
          reject(err);
        } else {
          resolve("Done !");
        }
      },
    });
  });
};

module.exports = dump;
