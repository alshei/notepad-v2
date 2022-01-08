const registerUser = async (req, res) => {
  const { name, email, password, icon } = req.body;
  res.json({
    name,
    email,
  });
};

module.exports = { registerUser };
