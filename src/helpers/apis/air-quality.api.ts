import httpHelper from "../http.helper";

const getAirQualityByZone = async ({
  latitude,
  longitude,
}: {
  latitude: string;
  longitude: string;
}) => {
  const path = `http://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${process.env.AIR_QUALITY_API_KEY}`;
  const {
    data: {
      data: {
        current: { pollution },
      },
    },
  } = await httpHelper.get({ url: path });
  return pollution;
};

export default { getAirQualityByZone };
