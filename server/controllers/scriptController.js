const Script = require("../models/scripts");
const { multerUploads, dataUri } = require("../middleware/multer");
// const { uploadMiddleware } = require("../middleware/gridfs");
const upload = require("../middleware/upload");
const base64 = require("base64topdf");

exports.getScripts = async (req, res) => {
  try {
    const scripts = await Script.find();
    res.status(200).json({
      status: "success",
      data: {
        scripts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.uploadScript = async (req, res) => {
  const title = JSON.parse(req.body.title);
  const file = dataUri(req).content;
  const pdfArray = [file];

  try {
    const scriptExists = await Script.exists({
      title: title,
    });
    if (scriptExists) {
      throw Error("Script already exists");
    } else {
      const deployedData = { title: title, pdf: pdfArray };

      const newScript = await Script.create(deployedData);
      res.status(201).json({
        status: "success",
        data: {
          newScript,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getSingleScript = async (req, res) => {
  const id = req.params.id;

  try {
    const script = await Script.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        script,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
