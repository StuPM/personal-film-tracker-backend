const express = require("express");
const app = express();
const db = require("../mongo/mongo");
const mongoose = require("mongoose");
const router = express.Router();
const { Film } = require("../mongo/schema");

router.get("/", async (req, res) => {
  const query = { $expr: { $eq: [{ $year: "$dateWatched" }, req.query.year] } };

  const results = await Film.find(query).sort("-dateWatched");

  res.send(results);
});

module.exports = router;
