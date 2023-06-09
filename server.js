require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/addReview", require("./routes/addReview"));
app.use("/getReviews", require("./routes/getReviews"));
app.use("/addFilm", require("./routes/addFilm"));
app.use("/getFilms", require("./routes/getFilms"));
app.use("/countFilmsByID", require("./routes/countFilmsByID"));
app.use("/getFilmRating", require("./routes/getFilmRating"));
app.use(
  "/getDistinctYearsWatched",
  require("./routes/getDistinctYearsWatched")
);

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
