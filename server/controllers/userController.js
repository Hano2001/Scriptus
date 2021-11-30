const User = require("../models/users");
const Script = require("../models/scripts");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: "Scriptus",
      sub: userID,
    },
    "Scriptus",
    { expiresIn: "5h" }
  );
};

exports.registerUser = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const userExists = await User.exists({
      username: username,
    });
    if (userExists) {
      throw Error("That username already exists");
    } else {
      bcrypt.hash(password, 10, function (error, hash) {
        const newPassword = hash;
        const newUser = User.create({
          email: email,
          username: username,
          password: newPassword,
        });

        res.status(201).json({
          status: "success",
          data: {
            newUser,
          },
        });
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.userLogin = async (req, res) => {
  if (req.isAuthenticated()) {
    const { _id, username } = req.user;

    const token = signToken(_id);
    res.cookie("access_token", token, {
      httpOnly: true,
      sameSite: true,
      proxy: true,
    });
    res.status(200).json({ isAuthenticated: true, user: { username } });
  }
};
exports.userLogout = async (req, res) => {
  res.clearCookie("access_token");
  res.json({ user: { username: "" }, success: true });
};

exports.getUserData = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    const scripts = await Script.find({ user: id });

    if (req.cookies.access_token) {
      const jwtCookie = jwt_decode(req.cookies.access_token);
      const onlineUser = jwtCookie.sub;
      data = {
        user,
        scripts,
        onlineUser,
      };
    } else {
      data = {
        user,
        scripts,
      };
    }

    res.status(200).json({
      status: "success",
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
