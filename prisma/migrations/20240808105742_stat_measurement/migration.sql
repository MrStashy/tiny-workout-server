/*
  Warnings:

  - Added the required column `measurement` to the `Statistic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Statistic" ADD COLUMN     "measurement" INTEGER NOT NULL;
