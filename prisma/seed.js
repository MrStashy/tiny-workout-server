const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();
const exercises = ["bench-press", "squat", "deadlift"]

async function seed() {
  const user = await createUser(
    "Testuser",
    "test@email.com",
    "TestPassword1!"
  );

  const user2 = await createUser(
    "Testuser2",
    "test@email2.com",
    "TestPassword1!"
  );

  const profile = await createProfile(user.id, new Date(1986-12-19))

  const heightStat = await createStat(profile.id, "HEIGHT", 186)
  const weightStat = await createStat(profile.id, "WEIGHT", 80000)

  for (let i = 1; i < 6; i++) {
    const date = new Date(2024, 8, (i * 3))
    const workout = await createWorkout(user.id, date);
    
     for (let j = 0; j < exercises.length; j++) {
      const exercise = await createExercise(workout.id, exercises[j], date)

      const exerciseWeightMap = {
        "bench-press": 60000,
        "squat": 100000,
        "deadlift": 120000
      }
      const addedWeight = i * 250
     
      const set = await createSet(exercise.id, 10, (exerciseWeightMap[exercises[j]] + addedWeight), date);
      const set2 = await createSet(exercise.id, 10, (exerciseWeightMap[exercises[j]] + addedWeight), date);
      const set3 = await createSet(exercise.id, 10, (exerciseWeightMap[exercises[j]] + addedWeight), date);
     }
  }
}

async function createUser(username, email, password) {
  return await prisma.user.create({
    data: {
      username: username,
      email: email,
      passwordHash: await bcrypt.hash(password, 8)
    },
  });
}

async function createProfile(userId, dob) {
  return await prisma.profile.create({
    data: {
      userId: userId,
      dob: dob
    }
  })
}

async function createStat(profileId, name, value) {
  return await prisma.statistic.create({
    data: {
      profileId: profileId,
      name: name,
      value: value
    }
  })
}

async function createWorkout(userId, date) {
  let newDate = date
  if (!date) {
    newDate = new Date()
  }

  return await prisma.workout.create({
    data: {
      userId: userId,
      createdAt: newDate
    },
  });
}

async function createExercise(workoutId, name, date) {
  let newDate = date
  if (!date) {
    newDate = new Date()
  }

  return await prisma.exercise.create({
    data: {
      workoutId: workoutId,
      name: name,
      createdAt: newDate
    },
  });
}

async function createSet(exerciseId, reps, weight, date) {
  let newDate = date
  if (!date) {
    newDate = new Date()
  }

  return await prisma.set.create({
    data: {
      exerciseId: exerciseId,
      reps: reps,
      weight: weight,
      createdAt: newDate
    },
  });
}

seed();
