/*
  Warnings:

  - You are about to drop the column `measurement` on the `Statistic` table. All the data in the column will be lost.
  - Added the required column `value` to the `Statistic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Statistic" DROP COLUMN "measurement",
ADD COLUMN     "value" INTEGER NOT NULL;
