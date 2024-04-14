const express = require("express");
const { fetchTickers, getTickers } = require("../controllers/tickerController");

const router = express.Router();

// Define route to retrieve data from MongoDB database
router.route("/").get(getTickers);

// Define route to fetch data from WazirX API
router.route("/tickers").get(fetchTickers);

module.exports = router;
