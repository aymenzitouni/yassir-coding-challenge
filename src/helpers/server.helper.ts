import express, { Express } from "express";
import http from "http";
import dotenv from "dotenv";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";
import router from "../routes";
import { errorsMiddleware } from "../middlewares";

import startCronJobs from "../cron-jobs";

const createServer = () => {
  dotenv.config();
  const app: Express = express();

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  startCronJobs();
  app.use(compression());
  app.use(cors());
  app.use("/api", router);
  app.use(errorsMiddleware);
  const server = http.createServer(app);
  return { server, app };
};

export default createServer;
