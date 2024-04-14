const axios = require("axios");
const Ticker = require("../models/tickersModel.js");

const fetchTickers = async (req, res) => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const tickers = Object.values(response.data).slice(0, 10);
    // Insert top 10 tickers into MongoDB database
    for (const ticker of tickers) {
      const newTicker = new Ticker(ticker);
      await newTicker.save();
    }

    // Return top 10 tickers in JSON format
    res.status(200).json({
      sucess: true,
      count: tickers.length,
      tickers: tickers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error fetching tickers",
    });
  }
};

const getTickers = async (req, res) => {
  try {
    var tickers = await Ticker.find();
    res.render("index", { data: tickers.slice(0, 10) });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error retrieving stored tickers",
    });
  }
};

const deleteAllTickers = async (req, res) => {
  try {
    await Ticker.deleteMany();
    res.status(200).json({
      success: true,
      message: "All tickers deleted in the database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error deleting tickers",
    });
  }
};

module.exports = { fetchTickers, getTickers, deleteAllTickers };
