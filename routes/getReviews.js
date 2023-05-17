const express = require("express");
const app = express();
const db = require("../mongo/mongo");
const mongoose = require("mongoose");
const schema = require("../mongo/schema");
const router = express.Router();

router.get("/", async (req, res) => {
  const { id } = req.query;
  const query = { id: id };

  const Review = mongoose.model("reviews", schema);
  const results = await Review.find(query);

  res.send(results);
});

module.exports = router;
