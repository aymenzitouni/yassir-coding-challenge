import { cronJobsHelper } from "../helpers";
import { airQualityUseCases } from "../use-cases";
import { I_GPS_CORDINATES } from "../schemas/types";
import { airQualityService } from "../services";
import { apisHelper } from "../helpers";
const saveZoneDataEachMinute = async ({
  latitude,
  longitude,
}: I_GPS_CORDINATES) => {
  cronJobsHelper.scheduleCronJob({
    interval: "* * * * *",
    action: async () => {
      try {
        await airQualityUseCases.saveAirQualityDataByLatitudeAndLogitude(
          { apisHelper, airQualityService },
          {
            latitude,
            longitude,
          }
        );
        console.log("@data_saved by cron-job");
      } catch (error) {
        console.log("@cron-job ( saveZoneDataEachMinute ) error");
      }
    },
  });
};

export default { saveZoneDataEachMinute };
