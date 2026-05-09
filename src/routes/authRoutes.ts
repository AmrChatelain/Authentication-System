import { Router } from "express";
import authController from "../controllers/authController";
import AuthMiddleware from "../middleware/AuthMiddleware";

const router = Router();

router.post("/auth/signUp", authController.signUp);
router.post("/auth/login", authController.login)
router.get('/user/:id', AuthMiddleware.authenticate, authController.getUserById)

export default router;