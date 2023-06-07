const express = require("express");
const app = express();
const db = require("../mongo/mongo");
const mongoose = require("mongoose");
const { filmSchema } = require("../mongo/schema");
const router = express.Router();

router.get("/", async (req, res) => {
  const query = { $expr: { $eq: [{ $year: "$dateWatched" }, req.query.year] } };

  const Films = mongoose.model("films", filmSchema, "films");
  const results = await Films.find(query).sort("-dateWatched");

  res.send(results);
});

module.exports = router;
