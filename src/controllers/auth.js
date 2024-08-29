const { getUserByEmailDb } = require("../domain/user");
const { validateLoginCredentials } = require("../utils/validationFunctions");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const { email, password } = req.body;
  let user;

  try {
    user = await getUserByEmailDb(email);
  } catch (e) {
    if (e.code === "P2025") {
      res.status(404).json({ error: "No user found with that email" });
    }
  }

  if (await validateLoginCredentials(user, password)) {
    const token = jwt.sign(user.id, process.env.JWT_SECRET)
    res.status(200).json({ token })
  }
}

module.exports = { login };
