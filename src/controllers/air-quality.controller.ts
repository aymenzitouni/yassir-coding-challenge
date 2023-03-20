import { NextFunction, Request, Response } from "express";
import { airQualityUseCases } from "../use-cases";

const getAirQuality = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { longitude, latitude } = req.query;
  try {
    const data = await airQualityUseCases.getAirQualityByLatitudeAndLogitude({
      latitude: String(latitude),
      longitude: String(longitude),
    });
    res.send({ "result ": data });
  } catch (error) {
    next(error);
  }
};

const getMostPollutedZoneTime = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await airQualityUseCases.getMostPollutedZoneTime();
    res.status(200).send({ result: data });
  } catch (error) {}
};

export default { getAirQuality, getMostPollutedZoneTime };
