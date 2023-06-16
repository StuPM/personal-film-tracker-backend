const express = require("express");
const app = express();
const db = require("../mongo/mongo");
const mongoose = require("mongoose");
const { Film } = require("../mongo/schema");
const router = express.Router();

router.get("/", async (req, res) => {
  const results = await Film.aggregate([
    {
      $match: {
        id: Number(req.query.id),
      },
    },
    {
      $group: {
        _id: null,
        sum: {
          $avg: "$rating",
        },
      },
    },
    {
      $project: {
        _id: 0,
        averageRating: {
          $round: ["$sum", 0],
        },
      },
    },
  ]);

  res.send(results);
});

module.exports = router;
