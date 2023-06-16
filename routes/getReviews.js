const express = require("express");
const app = express();
const db = require("../mongo/mongo");
const mongoose = require("mongoose");
const router = express.Router();
const { Review } = require("../mongo/schema");

router.get("/", async (req, res) => {
  const query = { id: req.query.id };

  const results = await Review.find(query);

  res.send(results);
});

module.exports = router;
