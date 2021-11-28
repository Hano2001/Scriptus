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
    origin: "*",
    methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    credentials: true,
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());
app.use("/scripts", ScriptRoute);
app.use("/users", UserRoute);
app.use("/auth", AuthRoute);

module.exports = app;
