const prisma = require('../utils/prisma')

async function getProfileByUserIdDb(userId) {
  const profile = await prisma.profile.findUniqueOrThrow({
    where: {
      userId: userId,
    },
  });

  return profile;
}

module.exports = { getProfileByUserIdDb };
