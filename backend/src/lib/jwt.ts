import jwt from "jsonwebtoken";
import { Response } from "express";

export function generateJwtToken(userId: string, response: Response) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "7d" });

  response.cookie("jwt-cookie", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV !== "development",
  });
}
