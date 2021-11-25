const pdfParse = require("pdf-parse");

export function Extract(file) {
  pdfParse(file).then(function (data) {
    console.log("Test");
    console.log(file);
  });
}
