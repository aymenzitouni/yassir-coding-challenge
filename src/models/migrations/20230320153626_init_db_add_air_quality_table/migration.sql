-- CreateTable
CREATE TABLE "AirQuality" (
    "id" SERIAL NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "aqius" INTEGER NOT NULL,
    "aqicn" INTEGER NOT NULL,
    "maincn" TEXT NOT NULL,
    "mainus" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AirQuality_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AirQuality_id_key" ON "AirQuality"("id");
