const user = require("../models/user.model");

module.exports = {

  //POST

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

  // GET

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

  // GET :id

  show(req, res) {
    const {userId} = req.params;
    user.findById(userId)
      .then((user) => {
        res.status(200).json({ message: "User listed successfully", data: user });
      })
      .catch((err) => {
        res.status(404).json({ message: "Error listing users", data: err });
      })
  },

  // PUT

  update(req, res) {
    const {userId} = req.params;
    user.findByIdAndUpdate(userId, req.body, {new: true})
      .then(user => {
        res.status(200).json({ message: "User updated", data: user });
      })
      .catch((err) => {
        res.status(404).json({ message: "Error updating", data: err})
      })
  },

  // DELETE

  destroy(req, res) {
    const {userId} = req.params;
    user.findByIdAndDelete(userId)
      .then((user) => {
        res.status(200).json({ message: "user deleted", data: user });
      })
      .catch((err) => {
        res.status(404).json({ message: "Error deleting", data: err})
      })
  }
};
