import configs from "../configs";
import airQualityCronJob from "./air-quality.cron-jobs";

const startCronJobs = () => {
  airQualityCronJob.saveZoneDataEachMinute({
    longitude: configs.ZONE_CORDINATES.LONGITUDE,
    latitude: configs.ZONE_CORDINATES.LATITUDE,
  });
};

export default startCronJobs;
