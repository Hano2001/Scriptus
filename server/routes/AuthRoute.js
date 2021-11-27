const express = require("express");

const { checkLogin } = require("../controllers/authController");
const router = express.Router();
router.route("/checklogin").get(checkLogin);

module.exports = router;
