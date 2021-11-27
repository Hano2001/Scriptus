const express = require("express");

const { pdfCleanup } = require("../controllers/cleanupController");
const router = express.Router();
router.route("/").get(pdfCleanup);

module.exports = router;
