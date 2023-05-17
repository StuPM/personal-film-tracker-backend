const express = require("express");
const app = express();
// const db = require("./mongo/mongo");
// const mongoose = require("mongoose");
// const schema = require("./mongo/schema");

app.use(express.json());

app.use("/createReview", require("./routes/createReview"));
app.use("/getReviews", require("./routes/getReviews"));
// app.use("/addFilm", require("./routes/addFilm"));
//get films

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
