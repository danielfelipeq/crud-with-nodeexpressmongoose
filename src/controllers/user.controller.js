const user = require("../models/user.model");

module.exports = {
  create(req, res) {
    const data = req.body;
    const newUser = {
      ...data,
    };
    user
      .create(newUser)
      .then((user) => {
        res
          .status(200)
          .json({ message: "User created successfully", data: user });
      })
      .catch((err) => {
        res.status(400).json({ message: "Error creating user", data: err });
      });
  },
  list(req, res) {
    user
      .find()
      .then((users) => {
        res
          .status(200)
          .json({ message: "Users listed successfully", data: users });
      })
      .catch((err) => {
        res.status(404).json({ message: "Error listing users", data: err });
      });
  },
};
