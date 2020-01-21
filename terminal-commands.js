const fs = require("fs");

module.exports.ls = () => {
  fs.readdir("./", (err, files) => {
    files.reduce((acc, files) => {
      return `${acc} ${files}`;
    });
    console.log(err);
  });
};

module.exports.touch = () => {
  fs.appendFile("brandnewfile.txt", "", function(error) {
    if (error) throw error;
    console.log("File made!");
  });
};

module.exports.mkdir = () => {
  fs.mkdir("./works", function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Folder was created!");
    }
  });
};
