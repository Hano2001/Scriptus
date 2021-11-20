const User = require("../models/users");

exports.registerUser = async (req, res) => {
  const data = req.body;
  console.log(data);

  try {
    const userExists = await User.exists({
      username: data.username,
    });
    if (userExists) {
      throw Error("That username already exists");
    } else {
      const newUser = await User.create(data);
      res.status(201).json({
        status: "success",
        data: {
          newUser,
        },
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
