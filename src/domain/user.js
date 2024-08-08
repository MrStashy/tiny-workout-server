const prisma = require("../utils/prisma");
const bcrypt = require("bcrypt");

async function createUserDb(email, username, password) {
  const user = await prisma.user.create({
    data: {
      username: username,
      email: email,
      passwordHash: await bcrypt.hash(password, 8),
    },
  });

  delete user.passwordHash;

  return user;
}

module.exports = { createUserDb };
