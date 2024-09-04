const prisma = require('../utils/prisma')

async function getProfileByUserIdDb(userId) {
  console.log(userId)
  const profile = await prisma.profile.findUniqueOrThrow({
    where: {
      userId: userId,
    },
  });

  return profile;
}

module.exports = { getProfileByUserIdDb };
