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
      await airQualityUseCases.saveAirQualityDataByLatitudeAndLogitude({
        latitude,
        longitude,
      });
      console.log("@saved");
    },
  });
};

export default { saveZoneDataEachMinute };
