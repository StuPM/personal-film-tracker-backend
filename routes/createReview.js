const express = require("express");
const app = express();
const db = require("../mongo/mongo");
const mongoose = require("mongoose");
const schema = require("../mongo/schema");
const router = express.Router();

router.post("/", async (req, res) => {
  const Review = mongoose.model("reviews", schema);
  const newReview = new Review({ ...req.body });

  await newReview
    .save()
    .then(() => res.json("Job added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
