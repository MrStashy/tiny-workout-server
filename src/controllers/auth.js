const { getUserByEmailDb } = require("../domain/user");
const { validateLoginCredentials } = require("../utils/validationFunctions");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const { email, password } = req.body;
  console.log(email, password)

  try {
    const user = await getUserByEmailDb(email);
    if (await validateLoginCredentials(user, password)) {
      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET
      );
      return res.status(200).json({ token });
    } else {
      res.status(403).json({ error: "Invalid Credentials" });
    }
  } catch (e) {
    res.status(403).json({ error: "Invalid Credentials" });
  }
}

module.exports = { login };
