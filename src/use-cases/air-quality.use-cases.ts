import { InternalServerException } from "../exceptions";
import { I_GPS_CORDINATES } from "../schemas/types";

const getAirQualityByLatitudeAndLogitude = async (
  { apisHelper }: any,
  { latitude, longitude }: I_GPS_CORDINATES
) => {
  try {
    const data = await apisHelper.airQualityApi.getAirQualityByZone({
      latitude,
      longitude,
    });
    return { pollution: data };
  } catch (error) {
    throw new InternalServerException();
  }
};

const saveAirQualityDataByLatitudeAndLogitude = async (
  { apisHelper, airQualityService }: any,
  { latitude, longitude }: I_GPS_CORDINATES
) => {
  try {
    const { aqius, aqicn, mainus, maincn } =
      await apisHelper.airQualityApi.getAirQualityByZone({
        latitude,
        longitude,
      });
    await airQualityService.createAirQualityRecod({
      longitude,
      latitude,
      aqius,
      aqicn,
      mainus,
      maincn,
    });
  } catch (error) {
    console.log("@error", error);
  }
};

const getMostPollutedZoneTime = async ({ airQualityService }: any) => {
  try {
    const data =
      await airQualityService.findAirQualityRecordWithHighestPollution();
    return data;
  } catch (error) {
    throw new InternalServerException();
  }
};

export default {
  getAirQualityByLatitudeAndLogitude,
  saveAirQualityDataByLatitudeAndLogitude,
  getMostPollutedZoneTime,
};
