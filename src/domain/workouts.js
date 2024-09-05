const prisma = require('../utils/prisma')

async function getWorkoutsByIdDb (userId) {
    const workouts = prisma.workout.findMany({
        where: {
            userId: userId
        },
        include: {
            exercises: {
                include: {
                    sets: true
                }
            }
        }
    })

    return workouts
}

module.exports = { getWorkoutsByIdDb }