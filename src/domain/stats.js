const prisma = require("../utils/prisma");
const { getProfileByUserIdDb } = require('./profile')

async function addStatsDb(userId, height, weight) {
     const { id: profileId } = await getProfileByUserIdDb(userId)
    
     const stats = await prisma.statistic.createManyAndReturn({
        data: [
            { name: "HEIGHT", value: height, profileId: profileId },
            { name: "WEIGHT", value: weight, profileId: profileId }
        ]
     })

     return stats
}

module.exports = { addStatsDb }