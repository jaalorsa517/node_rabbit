import { Response } from "express";

export function successResponse(res: Response, { data = {}, statusCode = 200 }): Response {
  return res.status(statusCode).json(data);
}

export function errorResponse(res: Response, { error = {}, statusCode = 500 }): Response {
  return res.status(statusCode).json(error);
}
