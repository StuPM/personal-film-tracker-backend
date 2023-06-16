const express = require("express");
const app = express();
const db = require("../mongo/mongo");
const mongoose = require("mongoose");
const { Film } = require("../mongo/schema");
const router = express.Router();

router.get("/", async (req, res) => {
  const query = { id: req.query.id };

  const results = await Film.countDocuments(query);

  res.send(String(results));
});

module.exports = router;
