const Script = require("../models/scripts");

exports.uploadScript = async (req, res) => {
  try {
    const newScript = await Script.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newScript,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
