const {
  createUserDb,
  getUserByIdDb,
  getUserByEmailDb,
} = require("../domain/user");

async function create(req, res) {
  const { email, username, password } = req.body;
  try {
    const user = await createUserDb(email, username, password);
    res.status(200).json({ user });
  } catch (e) {
    if (e.code === "P2002") {
      res.status(400).json({ error: "User already exists with that username" });
    }
  }
}

async function getUserById(req, res) {
  const userId = Number(req.params.id);
  try {
    const user = await getUserByIdDb(userId);
    res.status(200).json({ user });
  } catch (e) {
    if (e.code === "P2025") {
      res.status(404).json({ error: "No user found with that ID" });
    }
  }
}

async function getUserByEmail(req, res) {
  const { email } = req.body;
  try {
    const user = await getUserByEmailDb(email);
    res.status(200).json({ user });
  } catch (e) {
    if (e.code === "P2025") {
      res.status(404).json({ error: "No user found with that email" });
    }
  }
}

module.exports = { create, getUserById, getUserByEmail };
