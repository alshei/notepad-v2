const fs = require("fs/promises");

const fetchNotes = async () => {
  const notes = await fs.readFile("backend/data/notes.json", "utf-8");
  return notes;
};

module.exports = { fetchNotes };
