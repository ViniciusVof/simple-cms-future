import prismaClient from "../lib/prisma";

interface CreateImageRequest {
  title: string;
  content: string;
  url: string;
  order: number;
  fileName: string;
}

interface FindByIdImageRequest {
  id: string;
}

interface UpdateImageRequest {
  title: string;
  content: string;
  url: string;
  order: number;
  fileName: string;
}

interface DeleteImageRequest {
  id: string;
}

class ImageService {
  async findAll() {
    const images = await prismaClient.image.findMany();

    return images;
  }
  async findById({ id }: FindByIdImageRequest) {
    if (!id) {
      throw new Error("Missing id");
    }

    const image = await prismaClient.image.findUnique({
      where: { id },
    });

    return image;
  }
  async create({ title, content, url, order, fileName }: CreateImageRequest) {
    if (!title || !content || !url || !order || !fileName) {
      throw new Error("Missing title, content, url, order or fileName");
    }

    const image = await prismaClient.image.create({
      data: {
        title,
        content,
        url,
        order,
        fileName,
      },
    });

    return image;
  }

  async update({ title, content, url, order, fileName }: UpdateImageRequest) {
    if (!title || !content || !url || !order || !fileName) {
      throw new Error("Missing title, content, url, order or fileName");
    }

    const image = await prismaClient.image.update({
      data: {
        title,
        content,
        url,
        order,
        fileName,
      },
    });

    return image;
  }

  async delete({ id }: DeleteImageRequest) {
    if (!id) {
      throw new Error("Missing id");
    }

    const image = await prismaClient.image.delete({
      where: {
        id,
      },
    });

    return image;
  }
}

export default new ImageService();