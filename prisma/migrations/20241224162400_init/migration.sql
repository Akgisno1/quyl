/*
  Warnings:

  - You are about to drop the column `courses` on the `Student` table. All the data in the column will be lost.
  - Added the required column `course` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "courses",
ADD COLUMN     "course" TEXT NOT NULL;
