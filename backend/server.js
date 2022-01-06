const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// API endpoint; brings data from backend to frontend
app.get("/", (req, res) => {
  res.send("API is running...");
});

// API endpoint; fetches all notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// API endpoint; fetches indvidual note
app.get("/api/notes/:id", (req, res) => {
  // finds note id with array method
  // use req.params to fetch id from the url
  const note = notes.find((n) => n._id === req.params.id);
  // shows note on page
  res.send(note);
});

// port variable from .env file; if it is not available, default to 4000
const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on Port ${PORT}!`));
