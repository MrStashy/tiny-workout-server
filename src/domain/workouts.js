const prisma = require('../utils/prisma')

async function getWorkoutsByUserIdDb (userId) {
    const workouts = await prisma.workout.findMany({
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

async function postNewWorkoutDb(workout, userId) {
    
    const newWorkout = await prisma.workout.create({
        data: {
            userId: userId,
            exercises: {
                create: workout.map((exercise) => {
                    return (
                        {
                            name: exercise.name,
                            sets: {
                                create: exercise.sets.map((set) => {
                                    return (
                                        {
                                            reps: Number(set.reps),
                                            weight: Number(set.weight) 
                                        }
                                    )
                                })
                            }
                        }
                    )
                })
            }
        }
    })

    return newWorkout
}

async function getWorkoutsByUserIdPaginatedDb(userId, pageNo, perPage) {

    const workouts = await prisma.workout.findMany({
        skip: (pageNo - 1) * perPage,
        take: perPage,  
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

module.exports = { getWorkoutsByUserIdDb, postNewWorkoutDb, getWorkoutsByUserIdPaginatedDb }