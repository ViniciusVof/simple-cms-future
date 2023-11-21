import { compare, hash } from "bcryptjs";
import prismaClient from "../lib/prisma";
import jwt from "../utils/jwt";

interface AuthUserRequest {
  email: string;
  password: string;
}

interface FindByIdUserRequest {
  id: string;
}

interface CreateUserRequest {
  email: string;
  fullName: string;
  password: string;
}

interface UpdateUserRequest {
  fullName: string;
  password: string;
}

interface DeleteUserRequest {
  id: string;
}

class UserService {
  async auth({ email, password }: AuthUserRequest) {
    if (!email || !password) {
      throw new Error("Missing email or password");
    }

    const user = await prismaClient.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Incorrect password");
    }

    const token = jwt.sign({
      id: user.id,
      email: user.email,
      fullName: user.fullName,
    });

    return { user, token };
  }
  async findAll() {
    const users = await prismaClient.user.findMany({
      select: {
        id: true,
        email: true,
        fullName: true,
        created_at: true,
        updated_at: true,
      },
    });

    return users;
  }
  async findById({ id }: FindByIdUserRequest) {
    if (!id) {
      throw new Error("Missing id");
    }

    const user = await prismaClient.user.findUnique({
      where: { id },
    });

    return user;
  }
  async create({ email, fullName, password }: CreateUserRequest) {
    if (!email || !fullName || !password) {
      throw new Error("Missing email, fullName or password");
    }

    const userExists = await prismaClient.user.findUnique({
      where: { email },
    });

    if (userExists) {
      throw new Error("User already exists");
    }

    const user = await prismaClient.user.create({
      data: {
        email,
        fullName,
        password: await hash(password, 10),
      },
    });

    const token = jwt.sign({
      id: user.id,
      email: user.email,
      fullName: user.fullName,
    });

    return { user, token };
  }
  async update({ fullName, password }: UpdateUserRequest, id: string) {
    if (!id) {
      throw new Error("Missing id");
    }
    if (!fullName || !password) {
      throw new Error("Missing fullName or password");
    }

    const user = await prismaClient.user.update({
      where: { id },
      data: {
        fullName,
        password: await hash(password, 10),
      },
    });

    return user;
  }
  async delete({ id }: DeleteUserRequest) {
    if (!id) {
      throw new Error("Missing id");
    }

    const user = await prismaClient.user.delete({
      where: { id },
    });

    return user;
  }
}

export default new UserService();
