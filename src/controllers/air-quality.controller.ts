import { NextFunction, Request, Response } from "express";
import { airQualityUseCases } from "../use-cases";
import { airQualityService } from "../services";
import { apisHelper } from "../helpers";
const getAirQuality = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { longitude, latitude } = req.query;
  try {
    const data = await airQualityUseCases.getAirQualityByLatitudeAndLogitude(
      { apisHelper },
      {
        latitude: String(latitude),
        longitude: String(longitude),
      }
    );
    res.send({ result: data });
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
    const data = await airQualityUseCases.getMostPollutedZoneTime({
      airQualityService,
    });
    res.status(200).send({ result: data });
  } catch (error) {}
};

export default { getAirQuality, getMostPollutedZoneTime };
