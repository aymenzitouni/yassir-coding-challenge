import dbHelper from "../helpers/db.helper";

const db = dbHelper("airQuality");

const createAirQualityRecod = async (data: any) => {
  return await db.create({ ...data });
};

const findAirQualityRecordWithHighestPollution = async () => {
  return await db.findFirst({
    orderBy: {
      aqius: "desc",
    },
  });
};

export default {
  createAirQualityRecod,
  findAirQualityRecordWithHighestPollution,
};
