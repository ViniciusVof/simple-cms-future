import prismaClient from "../lib/prisma";

interface CreateCarrosselRequest {
  title: string;
}

interface FindByIdCarrosselRequest {
  id: string;
}

interface UpdateCarrosselRequest {
  title: string;
}

interface DeleteCarrosselRequest {
  id: string;
}

class CarrosselService {
  async findAll() {
    const carrossel = await prismaClient.carrossel.findMany();

    return carrossel;
  }
  async findById({ id }: FindByIdCarrosselRequest) {
    if (!id) {
      throw new Error("Missing id");
    }

    const carrossel = await prismaClient.carrossel.findUnique({
      where: { id },
    });

    return carrossel;
  }
  async create({ title }: CreateCarrosselRequest) {
    if (!title) {
      throw new Error("Missing title");
    }

    const carrossel = await prismaClient.carrossel.create({
      data: {
        title,
      },
    });

    return carrossel;
  }

  async update({ title }: UpdateCarrosselRequest) {
    if (!title) {
      throw new Error("Missing title");
    }

    const carrossel = await prismaClient.carrossel.update({
      data: {
        title,
      },
    });

    return carrossel;
  }

  async delete({ id }: DeleteCarrosselRequest) {
    if (!id) {
      throw new Error("Missing id");
    }

    const carrossel = await prismaClient.carrossel.delete({
      where: {
        id,
      },
    });

    return carrossel;
  }
}

export default new CarrosselService();
