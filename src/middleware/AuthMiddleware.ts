import { Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { AuthenticatedRequest } from "../utils/types";

const AuthMiddleware = {
  authenticate: (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
  ) => {
    const token = req.headers["authorization"]?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ message: "No token provided" });
    try {
      const decoded = verifyToken(token);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  },
};

export default AuthMiddleware;
