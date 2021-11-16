const express = require("express");
const { uploadScript, getScripts } = require("../controllers/scriptController");

const router = express.Router();

router.route("/").get(getScripts).post(uploadScript);
module.exports = router;
