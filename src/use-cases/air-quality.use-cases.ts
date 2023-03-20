import { apisHelper } from "../helpers";
import { InternalServerException } from "../exceptions";
const getAirQualityByLatitudeAndLogitude = async ({
  latitude,
  longitude,
}: {
  latitude: string;
  longitude: string;
}) => {
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
