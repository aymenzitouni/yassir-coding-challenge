import { apisHelper } from "../helpers";
import { InternalServerException } from "../exceptions";
import { I_GPS_CORDINATES } from "../schemas/types";
import { airQualityService } from "../services";

const getAirQualityByLatitudeAndLogitude = async ({
  latitude,
  longitude,
}: I_GPS_CORDINATES) => {
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

const saveAirQualityDataByLatitudeAndLogitude = async ({
  latitude,
  longitude,
}: I_GPS_CORDINATES) => {
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

export default {
  getAirQualityByLatitudeAndLogitude,
  saveAirQualityDataByLatitudeAndLogitude,
};
