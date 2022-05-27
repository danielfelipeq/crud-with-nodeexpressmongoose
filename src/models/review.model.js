const { Schema, model } = require("mongoose");
const { required } = require("nodemon/lib/config");

const titleRegex = /^[a-z A-Z]{1,20}$/i;
const commentRegex = /^[a-z\d A-Z\d]{1,50}$/i;

const reviewSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      // maxLenght: [20, "Title must be less than 20 characters"],
      match: [titleRegex, "Invalid title"],
    },
    comment: {
      type: String,
      required: true,
      // maxLenght: [50, "Comment must be less than 50 characters"],
      match: [commentRegex, "Invalid comment"],
    },
    score: {
      type: Number,
      required: true,
      min: [1, "Score must be greater than 1"],
      max: [5, "Score must be less than 5"],
    },
  },
  { timestamps: true }
);

const Review = model("Review", reviewSchema);
module.exports = Review;
