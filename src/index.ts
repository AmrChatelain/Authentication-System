import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { Request, Response } from "express";
import authRouter from "./routes/authRoutes";

dotenv.config();

const app = express();

app.use(cors({
  origin: ["http://localhost:3000"],
}));

app.use(express.json());
app.use("/api", authRouter);

const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to my Auth" });
});

app.listen(PORT, () => {
  console.log(`Server is running 🚀 at http://localhost:${PORT}`);
});