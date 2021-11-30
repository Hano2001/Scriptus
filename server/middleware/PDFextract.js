const fs = require("fs");
const base64 = require("base64topdf");
const pdfParse = require("pdf-parse");
const Script = require("../models/scripts");

async function TextExtract(id) {
  const script = await Script.findById(id);
  let pdfString = script.pdf[0];
  let newString = pdfString.split("base64,").pop();
  base64.base64Decode(newString, `middleware/${script.title}.pdf`);
  const path = __dirname + `/${script.title}.pdf`;

  const pdfFile = await fs.readFileSync(path);

  const pdfText = await pdfParse(pdfFile).then(fs.unlinkSync(path));
  return pdfText;
}

module.exports = { TextExtract };
