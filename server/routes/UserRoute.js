const express = require("express");
const passport = require("passport");
const passportConfig = require("../config/passport");

const {
  registerUser,
  userLogin,
  userLogout,
  getUserData,
} = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(
  passport.authenticate("local", {
    session: false,
  }),
  userLogin
);

router
  .route("/logout")
  .get(passport.authenticate("jwt", { session: false }), userLogout);

router.route("/:id").get(getUserData);

module.exports = router;
