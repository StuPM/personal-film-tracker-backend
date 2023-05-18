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

const filmSchema = new mongoose.Schema({
  dateAdded: Date,
  id: Number,
  genre_ids: Object,
  original_language: String,
  original_title: String,
  overview: String,
  poster_path: String,
  release_date: Date,
  title: String,
});

module.exports = { reviewSchema: reviewSchema, filmSchema: filmSchema };
