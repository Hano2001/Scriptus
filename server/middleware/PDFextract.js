const fs = require("fs");
const base64 = require("base64topdf");
const pdfParse = require("pdf-parse");
const Script = require("../models/scripts");
const nodeBase64 = require("nodejs-base64-converter");

async function TextExtract(id) {
  const script = await Script.findById(id);
  let pdfString = script.pdf[0];
  let newString = pdfString.split("base64,").pop();
  base64.base64Decode(newString, `middleware/TESTPDF/${script.title}.pdf`);

  const pdfFile = await fs.readFileSync(
    __dirname + `/TESTPDF/${script.title}.pdf`
  );

  const test = await pdfParse(pdfFile);
  return test;
  // .then(function (data) {})
  // .catch((err) => {
  //   console.error("ERROR", err);
  // });
}

module.exports = { TextExtract };
