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

  return user;
}

async function getUserByIdDb(id) {
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            id: id
        }
    })

    return user;
}

async function getUserByEmailDb(email) {
        const user = await prisma.user.findUniqueOrThrow({
            where: {
                email: email
            }
        })
    

    return user;
}

module.exports = { createUserDb, getUserByIdDb, getUserByEmailDb };
