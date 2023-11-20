import { Request, Response } from "express";
import PagesService from "../services/PageService";

class PageController {
  async Create(request: Request, response: Response) {
    const { title, slug, content, carrosselId } = request.body;

    const page = await PagesService.create({
      title,
      slug,
      content,
      carrosselId,
    });

    return response.json(page);
  }
  async FindAll(request: Request, response: Response) {
    const page = await PagesService.findAll();

    return response.json(page);
  }
  async FindById(request: Request, response: Response) {
    const { id } = request.params;

    const page = await PagesService.findById({ id });

    return response.json(page);
  }
  async FindBySlug(request: Request, response: Response) {
    const { slug } = request.params;

    const page = await PagesService.findBySlug({ slug });

    return response.json(page);
  }
  async Update(request: Request, response: Response) {
    const { title, slug, content, carrosselId } = request.body;
    const { id } = request.params;

    const page = await PagesService.update(
      { title, slug, content, carrosselId },
      id
    );

    return response.json(page);
  }
  async Delete(request: Request, response: Response) {
    const { id } = request.params;

    const page = await PagesService.delete({ id });

    return response.json(page);
  }
}
