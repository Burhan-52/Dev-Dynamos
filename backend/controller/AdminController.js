const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  const exitingAdmin = AdminLogin.find({ email, password });

  const token = jwt.sign({ email }, "devdynamos");

  if (!exitingAdmin) {
    res.json({ msg: "admin not found" });
  } else {
    res.json({ token: token });
  }
};

module.exports = {adminLogin}
