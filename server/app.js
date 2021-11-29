require("dotenv").config();
var express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");

var app = express();
app.use(cookieParser());
app.use(passport.initialize());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const ScriptRoute = require("./routes/ScriptRoute");
const UserRoute = require("./routes/UserRoute");
const AuthRoute = require("./routes/AuthRoute");

app.use(
  cors({
    origin: process.env.CLIENT,
    methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use("/scripts", ScriptRoute);
app.use("/users", UserRoute);
app.use("/auth", AuthRoute);

module.exports = app;
