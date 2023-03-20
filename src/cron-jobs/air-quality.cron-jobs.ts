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
    interval: "*/10 * * * * *",
    action: async () => {
      await airQualityUseCases.saveAirQualityDataByLatitudeAndLogitude(
        { apisHelper, airQualityService },
        {
          latitude,
          longitude,
        }
      );
      console.log("@saved");
    },
  });
};

export default { saveZoneDataEachMinute };
