const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function seed() {
  const user = await createUser(
    "Testuser",
    "test@email.com",
    "TestPassword1!",
    1986 - 12 - 19,
    186,
    90000
  );

  const workout = await createWorkout(user.id);

  const exercise = await createExercise(workout.id, "Bench Press");

  const set = await createSet(exercise.id, 10, 4000);
  const set2 = await createSet(exercise.id, 10, 4000);
  console.log(set2)
}

async function createUser(username, email, password, dob, height, weight) {
  return await prisma.user.create({
    data: {
      username: username,
      email: email,
      passwordHash: await bcrypt.hash(password, 8),
      profile: {
        create: {
          dob: new Date(dob),
          statistics: {
            create: [
              {
                name: "HEIGHT",
                value: height,
              },
              {
                name: "WEIGHT",
                value: weight,
              },
            ],
          },
        },
      },
    },
  });
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
