-- CreateEnum
CREATE TYPE "marital_state" AS ENUM ('SOLTEIRO', 'CASADO', 'SEPARADO', 'UNIAO_ESTAVEL');

-- CreateEnum
CREATE TYPE "education" AS ENUM ('ANALFABETO', 'PRIMEIRO_INC', 'PRIMERIO_COMP', 'SEGUNDO_COMP', 'SUPERIOR', 'SEM_INFORMACAO');

-- CreateTable
CREATE TABLE "person" (
    "id" SERIAL NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "birthday" DATE NOT NULL,
    "marital_state" "marital_state" NOT NULL,
    "education" "education" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "person_id_key" ON "person"("id");

-- CreateIndex
CREATE UNIQUE INDEX "person_cpf_key" ON "person"("cpf");
