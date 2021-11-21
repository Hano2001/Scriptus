const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      console.log(err);
      return cb(err);
    } else {
      if (!isMatch) {
        console.log(password, this.password, "not a match");
        return cb(null, isMatch);
      } else {
        return cb(null, this);
      }
    }
  });
};
module.exports = mongoose.model("User", UserSchema);
