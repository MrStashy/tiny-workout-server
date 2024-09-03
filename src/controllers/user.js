const {
  createUserDb,
  getUserByIdDb,
  getUserByEmailDb,
  getUserByUsernameDb
} = require("../domain/user");

async function create(req, res) {
  const { email, username, password } = req.body;
  try {
    const user = await createUserDb(email, username, password);
    delete user.passwordHash;
    res.status(200).json({ user });
  } catch (e) {
    console.error(e)
    if (e.code === "P2002") {
      res.status(400).json({ error: "User already exists with that username or email" });
    }
  }
}

async function getUserById(req, res) {
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    res.status(400).json({error: "Invalid parameter"})
  }
  try {
    const user = await getUserByIdDb(userId);
    delete user.passwordHash;
    res.status(200).json({ user });
  } catch (e) {
    if (e.code === "P2025") {
      res.status(404).json({ error: "No user found with that ID" });
    }
    console.error(e)
  }
}

async function getUserByEmail(req, res) {
  const email  = req.params.email
  try {
    const user = await getUserByEmailDb(email);
    delete user.passwordHash;
    res.status(200).json({ user });
  } catch (e) {
    if (e.code === "P2025") {
      res.status(404).json({ error: "No user found with that email" });
    }
  }
}

async function getUserByUsername(req, res) {
  const username = req.params.username;
  try {
    const user = await getUserByUsernameDb(username);
    delete user.passwordHash;
    res.status(200).json({ user });
  } catch (e) {
    if (e.code === "P2025") {
      res.status(404).json({ error: "No user found with that username" });
    }
  }
}


module.exports = { create, getUserById, getUserByEmail, getUserByUsername };
