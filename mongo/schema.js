const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  id: Number,
  viewingDate: Date,
  location: Boolean,
  review: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
});

module.exports = reviewSchema;
