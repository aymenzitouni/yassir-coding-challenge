import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions";

const errorsMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    status = 500,
    code = "ErrorException",
    message = "Something went wrong",
  } = error;
  res.status(status).send({
    code,
    message,
  });
};

export default errorsMiddleware;
