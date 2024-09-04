const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

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


  const workout = await createWorkout(user.id);

  const exercise = await createExercise(workout.id, "Bench Press");

  const set = await createSet(exercise.id, 10, 4000);
  const set2 = await createSet(exercise.id, 10, 4000);
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

async function createWorkout(userId) {
  return await prisma.workout.create({
    data: {
      userId: userId,
    },
  });
}

async function createExercise(workoutId, name) {
  return await prisma.exercise.create({
    data: {
      workoutId: workoutId,
      name: name,
    },
  });
}

async function createSet(exerciseId, reps, weight) {
  return await prisma.set.create({
    data: {
      exerciseId: exerciseId,
      reps: reps,
      weight: weight,
    },
  });
}

seed();
