/*
  Warnings:

  - Added the required column `topic` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `explanation` to the `GameQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "References" DROP CONSTRAINT "References_gameQuestionId_fkey";

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "image" TEXT,
ADD COLUMN     "topic" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "GameQuestion" ADD COLUMN     "explanation" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "References" ADD CONSTRAINT "References_gameQuestionId_fkey" FOREIGN KEY ("gameQuestionId") REFERENCES "GameQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
