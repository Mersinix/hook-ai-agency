/*
  Warnings:

  - You are about to drop the column `industryId` on the `Lead` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ServiceCategory" AS ENUM ('GROWTH', 'CREATIVE', 'BUILD', 'AUTOMATE');

-- CreateEnum
CREATE TYPE "CaseStudyType" AS ENUM ('GROWTH_SYSTEM', 'AUTOMATION', 'PLATFORM', 'CREATIVE_CAMPAIGN');

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('FEATURED', 'ACTIVE', 'ARCHIVED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "AIRequestType" ADD VALUE 'AUTOMATION';
ALTER TYPE "AIRequestType" ADD VALUE 'SGO';

-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "industryId";

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name_fr" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "description_fr" TEXT,
    "description_en" TEXT,
    "category" "ServiceCategory" NOT NULL,
    "icon" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndustryService" (
    "id" TEXT NOT NULL,
    "industryId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "solutionTitle" TEXT,
    "solutionDescription" TEXT,

    CONSTRAINT "IndustryService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaseStudy" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "headline" TEXT,
    "description" TEXT NOT NULL,
    "type" "CaseStudyType" NOT NULL,
    "status" "ProjectStatus" NOT NULL DEFAULT 'FEATURED',
    "metricValue" TEXT,
    "metricLabel" TEXT,
    "imageUrl" TEXT,
    "stack" JSONB,
    "featured" BOOLEAN NOT NULL DEFAULT true,
    "industryId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CaseStudy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaseStudyService" (
    "id" TEXT NOT NULL,
    "caseStudyId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "CaseStudyService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeadService" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "LeadService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeadIndustry" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "industryId" TEXT NOT NULL,

    CONSTRAINT "LeadIndustry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Service_slug_key" ON "Service"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "IndustryService_industryId_serviceId_key" ON "IndustryService"("industryId", "serviceId");

-- CreateIndex
CREATE UNIQUE INDEX "CaseStudy_slug_key" ON "CaseStudy"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CaseStudyService_caseStudyId_serviceId_key" ON "CaseStudyService"("caseStudyId", "serviceId");

-- CreateIndex
CREATE UNIQUE INDEX "LeadService_leadId_serviceId_key" ON "LeadService"("leadId", "serviceId");

-- CreateIndex
CREATE UNIQUE INDEX "LeadIndustry_leadId_industryId_key" ON "LeadIndustry"("leadId", "industryId");

-- AddForeignKey
ALTER TABLE "IndustryService" ADD CONSTRAINT "IndustryService_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryService" ADD CONSTRAINT "IndustryService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseStudy" ADD CONSTRAINT "CaseStudy_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseStudyService" ADD CONSTRAINT "CaseStudyService_caseStudyId_fkey" FOREIGN KEY ("caseStudyId") REFERENCES "CaseStudy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseStudyService" ADD CONSTRAINT "CaseStudyService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadService" ADD CONSTRAINT "LeadService_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadService" ADD CONSTRAINT "LeadService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadIndustry" ADD CONSTRAINT "LeadIndustry_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadIndustry" ADD CONSTRAINT "LeadIndustry_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE CASCADE ON UPDATE CASCADE;
