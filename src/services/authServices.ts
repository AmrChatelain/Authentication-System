import bcrypt from "bcryptjs";
import { PrismaClient } from "../generated/prisma";
import console = require("node:console");

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

const findUserById = async (id: number) => {
  return prisma.user.findUnique({ where: { id } });
};

const registerUser = async (
  username: string,
  email: string,
  password: string,
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: { username, email, password: hashedPassword },
  });
  const loginUser = async (email: string, password: string) => {
    const user = await this.findUserByEmail(email);
    if (!user) throw new Error("User not found");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid password");
    const token = jwt.sign({ userId: user.id }, JWT_SECRET!, {
      expiresIn: "15min",
    });
    return token
  };
};
