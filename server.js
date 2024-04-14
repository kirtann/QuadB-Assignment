// Import required modules
const express = require("express");
const DB = require("./config/database.js");
const dotenv = require("dotenv");

// Initialize Express app
const app = express();

dotenv.config();
DB.connectDB();

const tickerRoutes = require("./routes/tickerRoutes.js");

app.use("/", express.static("views"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");

app.use("/", tickerRoutes);

// Start Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
