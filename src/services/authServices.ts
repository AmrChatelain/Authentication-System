import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

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
};

const loginUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: "15m" },
  );

  return token;
};

export default { loginUser, registerUser, findUserById, findUserByEmail };
