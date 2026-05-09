import authService from "../services/authServices";
import { Request, Response } from "express";

const signUp = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await authService.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User has an account." });
    }
    const user = await authService.registerUser(username, email, password);
    return res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Registration Error",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await authService.loginUser(email, password);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Login Failed",
      error: error instanceof Error ? error.message : String(error),
    });
  }
  
};
const getUserById = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      const foundUser = await authService.findUserById(parseInt(userId));
      if (!foundUser)
        return res.status(400).json({ message: "User does not exist" });
      return res.status(200).json(foundUser);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };


export default { getUserById, login, signUp };
