const express = require("express");
const app = express();

app.use(express.json());

app.use("/addReview", require("./routes/addReview")); //Create Post
app.use("/getReviews", require("./routes/getReviews")); //Read Get
app.use("/addFilm", require("./routes/addFilm")); // Create Post
app.use("/getFilms", require("./routes/getFilms")); //Read Get

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
