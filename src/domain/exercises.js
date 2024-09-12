const prisma = require('../utils/prisma')

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

async function getAllExercisesByUserIdDb(userId) {

  const exercises = await prisma.exercise.findMany({
    where: {
      workout: {
        userId: userId,
      },
    },
    select: {
      name: true,
    }
  });

  return exercises
}

module.exports = { getNamedExercisesByUserIdDb, getAllExercisesByUserIdDb }