const prisma = require("../utils/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

async function createUserDb(email, username, password) {
  const user = await prisma.user.create({
    data: {
      username: username,
      email: email,
      passwordHash: await bcrypt.hash(password, 8),
    },
  });

  user.token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET)

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

async function getUserByUsernameDb(username) {
  const user = await prisma.user.findUniqueOrThrow({
      where: {
          username: username
      }
  })


return user;
}

module.exports = { createUserDb, getUserByIdDb, getUserByEmailDb, getUserByUsernameDb };
