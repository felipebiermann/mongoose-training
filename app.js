const express = require("express");
require("dotenv").config();

const dbConnect = require("./config/db.config");
dbConnect();

const app = express();

app.use(express.json());

const gameRouter = require("./routes/game.router");
app.use("/game", gameRouter);

const reviewRouter = require("./routes/reviews.routes");
app.use("/review", reviewRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at Port ${process.env.PORT}`);
});
