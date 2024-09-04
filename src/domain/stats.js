const prisma = require("../utils/prisma");

async function createStatsDb(userId, height, weight, dob) {

    const newProfile = await prisma.profile.create({
        data: {
          userId: userId,
          dob: dob,
          statistics: {
            create: [
              { name: "HEIGHT", value: height },
              { name: "WEIGHT", value: weight }
            ]
          }
        }
      });
    
      return newProfile;
}

module.exports = { createStatsDb }