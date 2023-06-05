const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/addReview", require("./routes/addReview"));
app.use("/getReviews", require("./routes/getReviews"));
app.use("/addFilm", require("./routes/addFilm"));
app.use("/getFilms", require("./routes/getFilms"));
app.use("/countFilmsByID", require("./routes/countFilmsByID"));
app.use("/getFilmRating", require("./routes/getFilmRating"));

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
