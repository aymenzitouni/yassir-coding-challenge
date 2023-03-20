import { cronJobsHelper } from "../helpers";
import { airQualityUseCases } from "../use-cases";
import { I_GPS_CORDINATES } from "../schemas/types";
const saveZoneDataEachMinute = async ({
  latitude,
  longitude,
}: I_GPS_CORDINATES) => {
  cronJobsHelper.scheduleCronJob({
    interval: "*/10 * * * * *",
    action: async () => {
      const {
        pollution: { aqius, aqicn, mainus, maincn },
      } = await airQualityUseCases.getAirQualityByLatitudeAndLogitude({
        latitude,
        longitude,
      });
      console.log("@data", {
        longitude,
        latitude,
        aqius,
        aqicn,
        mainus,
        maincn,
      });
    },
  });
};

export default { saveZoneDataEachMinute };
