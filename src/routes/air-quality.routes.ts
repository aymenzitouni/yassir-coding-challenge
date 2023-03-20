import { airQualityController } from "../controllers";
import express from "express";

const router = express.Router();

// ------------------ air-quality-routes ------------------ //
router.get("/", airQualityController.getAirQuality);
router.get(
  "/most-polluted-time-zone",
  airQualityController.getMostPollutedZoneTime
);

export { router as airQualityRoutes };
