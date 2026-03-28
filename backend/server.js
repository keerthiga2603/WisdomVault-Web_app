const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
console.log("MONGO_URI:", process.env.MONGO_URI);
const app = express();
const path = require("path");

// serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Middleware
app.use(cors());
app.use(express.json());

// Routes
const wisdomRoutes = require("./routes/wisdomRoutes");
app.use("/api/wisdom", wisdomRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});