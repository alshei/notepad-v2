const express = require("express");
const { getNotes } = require("../controllers/notesController");

const router = express.Router();

router.route("/").get(getNotes);
// router.route("/createnote").post();

module.exports = router;
