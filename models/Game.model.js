const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  userName: { type: String, required: true, trim: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
});

const GameModel = model("Game", gameSchema);

module.exports = GameModel;
