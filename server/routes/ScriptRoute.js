const express = require("express");

const { uploadScript } = require("../controllers/scriptController");

const router = express.Router();

router.route("/").post(uploadScript);
module.exports = router;
