import { Request, Response } from "express";

export const roleAuthorization = (req: Request, res: Response, next: any) => {
  if (req.user.role === 1) {
    next();
  } else {
    res.status(401).json({ message: "user unauthorized" });
  }
};
