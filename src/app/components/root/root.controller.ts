import { Request, Response } from "express";
import { successResponse, errorResponse } from "../../helpers/responses.helper";

export function get(req: Request, res: Response): Response {
  return successResponse(res, { data: { msg: "sucess" } });
}

export function post(req: Request, res: Response): Response {
  try {
    return successResponse(res, { data: { msg: "Created" }, statusCode: 201 });
  } catch (error: any) {
    console.log(error);
    return errorResponse(res, { error });
  }
}
