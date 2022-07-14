const { Schema, model, Types } = require("mongoose");
const mongoose = require("mongoose");

const gameSchema = new Schema({
  userName: { type: String, required: true, trim: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
  reviews: [{ type: Types.ObjectId, ref: "Review" }],
});

const GameModel = model("Game", gameSchema);

module.exports = GameModel;
