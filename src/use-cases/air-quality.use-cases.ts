import { apisHelper } from "../helpers";
import { InternalServerException } from "../exceptions";
import { I_GPS_CORDINATES } from "../schemas/types";

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

export default { getAirQualityByLatitudeAndLogitude };
