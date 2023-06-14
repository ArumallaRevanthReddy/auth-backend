import { Request, Response } from "express";

const jwt = require("jsonwebtoken");

export const validateToken = (req: Request, res: Response, next: any) => {
  const authHeader: string | undefined = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    const token = authHeader?.split(" ")[1];
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (err: any, decoded: any): void => {
        if (err) {
          res.status(401).json({ message: "user unauthorized" });
        }
        req.user = decoded.user;
      }
    );
  } else {
    res.status(401).json({ message: "no auth header" });
  }
};
