/*
  Warnings:

  - Added the required column `available` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "available" TEXT NOT NULL;
