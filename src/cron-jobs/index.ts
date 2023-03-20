import airQualityCronJob from "./air-quality.cron-jobs";

const startCronJobs = () => {
  airQualityCronJob.saveZoneDataEachMinute({
    longitude: "2.352222",
    latitude: "48.856613",
  });
};

export default startCronJobs;
