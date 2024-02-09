const express = require("express");
const cors = require("cors");
const { connectDatabase } = require("./src/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectDatabase();

// app.js routes
app.use("/", require("./src/app"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
