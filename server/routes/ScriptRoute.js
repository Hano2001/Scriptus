const express = require("express");
const { multerUploads } = require("../middleware/multer");
const { pdfCleanup } = require("../middleware/pdfCleanup");

const {
  uploadScript,
  getScripts,
  getSingleScript,
  getScriptText,
  deleteScript,
} = require("../controllers/scriptController");

const router = express.Router();

router.route("/").get(getScripts).post(multerUploads, uploadScript);

router.route("/:id").get(getSingleScript);
router.route("/gettext/:id").get(getScriptText);
router.route("/delete/:id").delete(deleteScript);

module.exports = router;
