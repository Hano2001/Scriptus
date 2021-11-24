const express = require("express");

const router = express.Router();

router.get("/checklogin"),
  (req, res) => {
    if (req.cookies.access_token) {
      res.send(true);
      console.log("COOKIE TRUE");
      res.end();
    } else {
      console.log("COOKIE FALSE");
      res.send(false);
      res.end();
    }
  };

module.exports = router;
