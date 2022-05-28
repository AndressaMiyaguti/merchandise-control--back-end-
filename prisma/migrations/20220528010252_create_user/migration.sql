/*
  Warnings:

  - A unique constraint covering the columns `[cod]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cod]` on the table `ProductDescount` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cod` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cod` to the `ProductDescount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "cod" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductDescount" ADD COLUMN     "cod" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_cod_key" ON "Product"("cod");

-- CreateIndex
CREATE UNIQUE INDEX "ProductDescount_cod_key" ON "ProductDescount"("cod");
