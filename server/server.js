const server = require("./app");
require("dotenv").config();
var express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(db)
  .then(() => console.log("Connected to database successfully"));
server.listen(PORT, () => `Server running on port ${PORT}`);

var router = express.Router();

module.exports = router;
