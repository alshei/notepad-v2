const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, icon } = req.body;
  res.json({
    name,
    email,
  });
});

module.exports = { registerUser };
