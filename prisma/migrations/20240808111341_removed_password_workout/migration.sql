/*
  Warnings:

  - You are about to drop the column `passwordHash` on the `Workout` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Workout" DROP COLUMN "passwordHash";
ALTER TABLE "Workout" DROP COLUMN "email";
