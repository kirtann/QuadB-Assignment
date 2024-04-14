const mongoose = require("mongoose");

const connectDB = () => {
  // Connect to MongoDB database
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connectDB };
