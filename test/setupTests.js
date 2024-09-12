const prisma = require("../src/utils/prisma");

function deleteTables() {
  const tablesToDelete = [
    prisma.set.deleteMany(),
    prisma.exercise.deleteMany(),
    prisma.workout.deleteMany(),
    prisma.statistic.deleteMany(),
    prisma.profile.deleteMany(),
    prisma.user.deleteMany(),
  ];

  return prisma.$transaction(tablesToDelete)
}


global.beforeAll(() => {
    return deleteTables()
  })
  
  global.afterEach(() => {
    return deleteTables()
  })
  
  global.afterAll(() => {
    return prisma.$disconnect
  })