import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "../utils/jwt";

interface Payload {
  id: string;
  email: string;
  fullName: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.json({
      status: StatusCodes.UNAUTHORIZED,
      message: "Token inválido",
    });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const user = jwt.verify(token);

    req.user = user;

    return next();
  } catch {
    return next({
      status: StatusCodes.UNAUTHORIZED,
      message: "Token inválido ou expirado",
    });
  }
}
