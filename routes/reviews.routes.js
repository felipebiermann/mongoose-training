const router = require("express").Router();
const ReviewModel = require("../models/Review.model");

const GameModel = require("../models/Game.model");

//CREATE
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

//READ
router.get("/all-review", async (req, res) => {
  try {
    const allReview = await ReviewModel.find();

    return res.status(200).json(allReview);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

//READ DETAILS

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const detailReview = await ReviewModel.findOne({ _id: id }).populate(
      "reviews"
    );
    return res.status(200).json(detailReview);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

//EDIT

router.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const editedReview = await ReviewModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    return res.status(200).json(editedReview);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

//DELETE

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await ReviewModel.deleteOne({ _id: id });

    return res.status(200).json(deletedReview);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
