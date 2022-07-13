const router = require("express").Router();

const GameModel = require("../models/Game.model");

router.post("/create-game", async (req, res) => {
  try {
    const newGame = await GameModel.create(req.body);

    return res.status(201).json(newGame);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
