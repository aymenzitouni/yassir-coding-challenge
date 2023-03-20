import { NextFunction, Request, Response } from "express";

const getAirQuality = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
  } catch (error) {}
};

export default { getAirQuality, getMostPollutedZoneTime };
