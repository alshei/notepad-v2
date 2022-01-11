const { fetchNotes } = require("../models/noteModel");

const getNotes = (req, res) => {
  fetchNotes().then((notes) => {
    res.status(200).send({ notes });
  });
};

module.exports = { getNotes };
