import prismaClient from "../lib/prisma";

interface CreatePageRequest {
  title: string;
  slug: string;
  content: string;
  carrosselId: string;
}

interface FindBySlugPageRequest {
  slug: string;
}

interface FindByIdPageRequest {
  id: string;
}

interface UpdatePageRequest {
  title: string;
  slug: string;
  content: string;
  carrosselId: string;
}

interface DeletePageRequest {
  id: string;
}

class PageService {
  async findAll() {
    const pages = await prismaClient.page.findMany();

    return pages;
  }
  async findBySlug({ slug }: FindBySlugPageRequest) {
    if (!slug) {
      throw new Error("Missing slug");
    }

    const page = await prismaClient.page.findUnique({
      where: { slug },
    });

    return page;
  }

  async findById({ id }: FindByIdPageRequest) {
    if (!id) {
      throw new Error("Missing id");
    }

    const page = await prismaClient.page.findUnique({
      where: { id },
    });

    return page;
  }
  async create({ title, slug, content, carrosselId }: CreatePageRequest) {
    if (!title || !slug || !content || !carrosselId) {
      throw new Error("Missing title, slug, content or carrosselId");
    }

    const page = await prismaClient.page.create({
      data: {
        title,
        slug,
        content,
        carrosselId,
      },
    });

    return page;
  }

  async update(
    { title, slug, content, carrosselId }: UpdatePageRequest,
    id: string
  ) {
    if (!id) {
      throw new Error("Missing id");
    }
    if (!title || !slug || !content || !carrosselId) {
      throw new Error("Missing title, slug, content or carrosselId");
    }

    const page = await prismaClient.page.update({
      where: { id },
      data: {
        title,
        slug,
        content,
        carrosselId,
      },
    });

    return page;
  }

  async delete({ id }: DeletePageRequest) {
    if (!id) {
      throw new Error("Missing id");
    }

    const page = await prismaClient.page.delete({
      where: {
        id,
      },
    });

    return page;
  }
}
export default new PageService();
