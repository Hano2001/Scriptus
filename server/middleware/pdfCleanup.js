const fs = require("fs");
const path = require("path");

function pdfCleanup() {
  console.log("CLEANUP");
  const directory = "middleware/tempPDF";

  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err;
      });
    }
  });
}

module.exports = { pdfCleanup };
