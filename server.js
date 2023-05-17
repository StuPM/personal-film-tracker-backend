const express = require("express");
const app = express();
const db = require("./mongo/mongo");
const mongoose = require("mongoose");
const schema = require("./mongo/schema");

const PORT = process.env.PORT || 8888;

app.use(express.json());

app.use("/createReview", require("./routes/createReview"));
//get reviews
//add film
//get films

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});