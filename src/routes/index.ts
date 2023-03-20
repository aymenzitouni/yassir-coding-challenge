import express from "express";
import { airQualityRoutes } from "./air-quality.routes";

const router = express.Router();

router.use("/air-quality", airQualityRoutes);

export default router;
