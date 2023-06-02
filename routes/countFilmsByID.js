const express = require("express");
const app = express();
const db = require("../mongo/mongo");
const mongoose = require("mongoose");
const { filmSchema } = require("../mongo/schema");
const router = express.Router();

router.get("/", async (req, res) => {
  const query = { id: req.query.id };

  const filmCount = mongoose.model("films", filmSchema, "films");
  const results = await filmCount.countDocuments(query);

  console.log("ID " + req.query.id + ", results " + results);

  res.send({ count: results });
});

module.exports = router;
