require("dotenv").config();
var express = require("express");
const cors = require("cors");

var app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
const ScriptRoute = require("./routes/ScriptRoute");
const UserRoute = require("./routes/UserRoute");
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

module.exports = app;
