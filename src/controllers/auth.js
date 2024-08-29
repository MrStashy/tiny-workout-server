const { getUserByEmailDb } = require("../domain/user");
const { validateLoginCredentials } = require("../utils/validationFunctions");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const { email, password } = req.body;
  let user;

  try {
    user = await getUserByEmailDb(email);
    await validateLoginCredentials(user, password);
    const token = jwt.sign(user.id, process.env.JWT_SECRET);
    res.status(200).json({ token });
  } catch (e) {
      res.status(403).json({ error: "Invalid Credentials" });
  }
}

module.exports = { login };
