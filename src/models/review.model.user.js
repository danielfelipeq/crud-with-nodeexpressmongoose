const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLenght: [20, "Title must be less than 20 characters"],
    },
    comment: {
      type: String,
      required: true,
      maxLenght: [50, "Comment must be less than 50 characters"],
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
