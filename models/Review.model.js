const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  game: { type: mongoose.Types.ObjectId, ref: "Game" },
  owner: { type: String, maxLength: 64, default: "Anonimo" },
  body: { type: String, required: true, minLength: 144 },
  createAt: { type: Date, default: Date.now() },
});

const ReviewModel = model("Review", reviewSchema);

module.exports = ReviewModel;
