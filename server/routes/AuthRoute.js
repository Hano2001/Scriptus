const express = require("express");

const { test, checkLogin } = require("../controllers/authController");
const router = express.Router();
router.route("/").get(test);
router.route("/checklogin").get(checkLogin);
// router.get("/checklogin"),
//   (req, res) => {
//     if (req.cookies.access_token) {
//       res.send(true);
//       console.log("COOKIE TRUE");
//       res.end();
//     } else {
//       console.log("COOKIE FALSE");
//       res.send(false);
//       res.end();
//     }
//   };

module.exports = router;
