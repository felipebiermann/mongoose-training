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

router.get("/all-games", async (req, res) => {
  try {
    const allGame = await GameModel.find();

    return res.status(200).json(allGame);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
