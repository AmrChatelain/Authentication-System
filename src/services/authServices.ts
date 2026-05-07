import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

class authService {
  static rejesterUser = async (
    username: string,
    email: string,
    password: string,
  ) => {
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedpassword,
      },
    });
    return user;
  };
  static findUserById = async (id: number) => {
    return prisma.user.findUnique({
      where: { id: id },
    });
  };
  static findUserByEmail = async (email: string) => {
    return prisma.user.findUnique({ where: { email: email } });
  };
}

export default authService;