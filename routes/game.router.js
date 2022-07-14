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

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const game = await GameModel.findOne({ _id: id }).populate("reviews");
    return res.status(200).json(game);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

router.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const editedGame = await GameModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    return res.status(200).json(editedGame);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGame = await GameModel.deleteOne({ _id: id });

    return res.status(200).json(deletedGame);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
