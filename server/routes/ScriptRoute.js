const express = require("express");
const multer = require("multer");
const { multerUploads } = require("../middleware/multer");

//const upload = multer({ dest: "uploads/" });
const {
  uploadScript,
  getScripts,
  getSingleScript,
  getScriptText,
} = require("../controllers/scriptController");

const router = express.Router();

router.route("/").get(getScripts).post(multerUploads, uploadScript);
router.route("/:id").get(getSingleScript);
router.route("/gettext/:id").get(getScriptText);

module.exports = router;
