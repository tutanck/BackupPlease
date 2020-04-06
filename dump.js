var backup = require("mongodb-backup");

dump = (mongodbUri) => {
  return new Promise((resolve, reject) => {
    backup({
      uri: mongodbUri, // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase>
      root: __dirname,
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
