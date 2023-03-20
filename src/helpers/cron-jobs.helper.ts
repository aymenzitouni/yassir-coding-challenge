import cron from "node-cron";
const scheduleCronJob = async ({
  interval,
  action,
}: {
  interval: string;
  action: () => void;
}) => {
  cron.schedule(interval, async () => {
    action();
  });
};

export default { scheduleCronJob };
