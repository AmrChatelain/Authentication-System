import {
  findUserByEmail,
  registerUser,
  loginUser,
} from "../services/authServices";
import { Request, Response } from "express";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User has an account." });
    }
    const user = await registerUser(username, email, password);
    return res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Registration Error",
      error: error instanceof Error ? error.message : String(error),
    });
  }
  const login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
    const token = await authServices.loginUser(email, password);
    res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({message:'Login Failed', error})
    }
  };
};
