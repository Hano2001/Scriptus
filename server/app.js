require("dotenv").config();
var express = require("express");
const cors = require("cors");

var app = express();
const ScriptRoute = require("./routes/ScriptRoute");
app.use(express.json());
app.use("/scripts", ScriptRoute);

module.exports = app;
