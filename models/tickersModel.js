const mongoose = require("mongoose");

// Define schema for ticker model
const tickerSchema = new mongoose.Schema({
  name: String,
  last: Number,
  buy: Number,
  sell: Number,
  volume: Number,
  base_unit: String,
});

// Create ticker model
module.exports = mongoose.model("Ticker", tickerSchema);
