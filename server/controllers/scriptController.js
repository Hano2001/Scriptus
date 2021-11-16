const Script = require("../models/scripts");
const { multerUploads, dataUri } = require("../middleware/multer");
// const { uploadMiddleware } = require("../middleware/gridfs");
const upload = require("../middleware/upload");

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
  //const formInputData = JSON.parse(req.body.title);

  //const logger = req.body.title;
  console.log(req.body);

  // try {
  //   //const imageData = await uploadToCloudinary(file, 'images');
  //   const scriptExists = await Product.exists({
  //     title: formInputData.title,
  //   });
  //   if (scriptExists) {
  //     throw Error("Script already exists");
  //   } else {
  //     const deployedData = formInputData;
  //     // deployedData.pdf = imageData.url;
  //     const newScript = await Script.create(deployedData);
  //     res.status(201).json({
  //       status: "success",
  //       data: {
  //         newScript,
  //       },
  //     });
  //   }
  // } catch (error) {
  //   res.status(400).json({
  //     status: "fail",
  //     message: error.message,
  //   });
  // }
};
