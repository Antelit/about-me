-- CreateTable
CREATE TABLE "_prisma_seed" (
    "seed_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nameSeed" TEXT NOT NULL,

    CONSTRAINT "_prisma_seed_pkey" PRIMARY KEY ("seed_id")
);

-- CreateTable
CREATE TABLE "experience" (
    "experience_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "achievements" TEXT[],
    "profile_id" INTEGER NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("experience_id")
);

-- CreateTable
CREATE TABLE "profile" (
    "profile_id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "middle_name" TEXT,
    "description" TEXT NOT NULL,
    "github" TEXT,
    "linkedin" TEXT,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("profile_id")
);

-- CreateTable
CREATE TABLE "project" (
    "project_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT,
    "repository" TEXT,
    "profile_id" INTEGER NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("project_id")
);

-- CreateTable
CREATE TABLE "skill" (
    "skill_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profile_id" INTEGER NOT NULL,

    CONSTRAINT "skill_pkey" PRIMARY KEY ("skill_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "_prisma_seed_nameSeed_key" ON "_prisma_seed"("nameSeed");

-- CreateIndex
CREATE INDEX "experience_profile_id_idx" ON "experience"("profile_id");

-- CreateIndex
CREATE INDEX "project_profile_id_idx" ON "project"("profile_id");

-- CreateIndex
CREATE INDEX "skill_profile_id_idx" ON "skill"("profile_id");

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("profile_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("profile_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skill" ADD CONSTRAINT "skill_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("profile_id") ON DELETE CASCADE ON UPDATE CASCADE;
