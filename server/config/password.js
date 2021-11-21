const bcrypt = require("bcrypt");

exports.passwordHash(password) {
  bcrypt.hash(password, 10, (err, passwordHash) => {
    if (err) {
      console.log(err);
    } else {
      console.log(passwordHash);
      password = passwordHash;
      return passwordHash;
    }
  });
}
