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

async function getNamedExercisesByUserIdDb(userId, exercise) {

const exercises = await prisma.exercise.findMany({
    where: {
      name: exercise,
      workout: {
        userId: userId
      },
    },
    include: {
      sets: true
    },
  });

  return exercises
}

module.exports = { getWorkoutsByIdDb, getNamedExercisesByUserIdDb }