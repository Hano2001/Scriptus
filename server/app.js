require("dotenv").config();
var express = require("express");
const cors = require("cors");

var app = express();

app.use(express.json());

module.exports = app;
