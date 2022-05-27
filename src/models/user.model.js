const { Schema, model, models } = require("mongoose");
const { required } = require("nodemon/lib/config");

RegExp.escape = function (s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

const emailRegex = new RegExp("^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$");
const passwordRegex = new RegExp(
  "(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
);
const nameRegex = new RegExp("^[a-zA-Z]{1,10}$");
const phoneRegex = new RegExp(
  "(?([+][0-9]{2}))?([ .-]?)([0-9]{3})\2([0-9]{3})\2([0-9]{4})"
);
const userSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["admin", "superadmin", "user"],
      default: "user",
    },
    email: {
      type: String,
      required: true,
      match: [emailRegex, "Invalid email"],
      validate: [
        {
          validator(value) {
            return models.User.findOne({ email: value })
              .then((user) => !user)
              .catch((err) => false);
          },
          message: "Email already exists",
        },
      ],
    },
    password: {
      type: String,
      required: true,
      match: [passwordRegex, "Incorrect password"],
    },
    name: {
      type: String,
      required: true,
      match: [nameRegex, "Invalid name"],
    },
    phone: {
      type: String,
      required: true,
      match: [phoneRegex, "Invalid phone"],
    },
  },
  { timestamps: true }
);
const User = model("User", userSchema);
module.exports = User;
