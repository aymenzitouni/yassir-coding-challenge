import dbHelper from "../helpers/db.helper";

const db = dbHelper("airQuality");

const createAirQualityRecod = async (data: any) => {
  return await db.create({ ...data });
};

export default {
  createAirQualityRecod,
};
