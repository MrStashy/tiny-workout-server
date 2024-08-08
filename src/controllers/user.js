const { createUserDb } = require("../domain/user");

async function create(req, res) {
  const { email, username, password } = req.body;

  try {
    const user = await createUserDb(email, username, password);
  } catch (e) {
    if (e.code === "P2002") {
      res.status(400).json({ error: "User already exists with that username" });
    }
  }
}

module.exports = { create };
