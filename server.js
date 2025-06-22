// ==============================
// FILE: server.js (Backend)
// ==============================

const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.WEATHER_API_KEY;

// Serve static frontend files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// API route to fetch weather data
app.get("/weather", async (req, res) => {
  const location = req.query.location;
  if (!location) return res.status(400).json({ error: "Location is required" });

  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`;

  try {
    const response = await fetch(url); // Native fetch in Node.js v18+
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));