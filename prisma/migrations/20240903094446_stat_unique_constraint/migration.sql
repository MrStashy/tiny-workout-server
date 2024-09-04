/*
  Warnings:

  - A unique constraint covering the columns `[profileId,name]` on the table `Statistic` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Statistic_profileId_name_key" ON "Statistic"("profileId", "name");
