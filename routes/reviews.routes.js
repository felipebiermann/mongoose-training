const router = require("express").Router();
const ReviewModel = require("../models/Review.model");

const GameModel = require("../models/Game.model");
router.post("/create-review/:gameId", async (req, res) => {
  try {
    const { gameId } = req.params;
    const newReview = await ReviewModel.create({ ...req.body, game: gameId });

    const editedGame = await GameModel.findOneAndUpdate(
      { _id: gameId },
      { $push: { reviews: newReview._id } },
      { new: true }
    );

    return res.status(201).json({ newReview, editedGame });
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
