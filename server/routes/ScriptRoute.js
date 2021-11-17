const express = require("express");
const multer = require("multer");
const { multerUploads } = require("../middleware/multer");
//const upload = multer({ dest: "uploads/" });
const { uploadScript, getScripts } = require("../controllers/scriptController");

const router = express.Router();

router.route("/").get(getScripts).post(multerUploads, uploadScript);

module.exports = router;
