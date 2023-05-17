const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  id: Number,
  viewingDate: Date,
  location: Boolean,
  review: String,
  rating: Number,
});

module.exports = reviewSchema;
