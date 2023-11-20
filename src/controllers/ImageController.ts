import { Request, Response } from "express";
import ImageService from "../services/ImageService";

class ImageController {
  async Create(request: Request, response: Response) {
    const { title, content, url, order, carrosselId } = request.body;

    if (!request.file) {
      throw new Error("Missing file");
    }

    const { filename: fileName } = request.file;

    const image = await ImageService.create({
      title,
      content,
      url,
      order,
      fileName,
      carrosselId,
    });

    return response.json(image);
  }
  async FindAll(request: Request, response: Response) {
    const image = await ImageService.findAll();

    return response.json(image);
  }
  async FindById(request: Request, response: Response) {
    const { id } = request.params;

    const image = await ImageService.findById({ id });

    return response.json(image);
  }
  async Update(request: Request, response: Response) {
    const { title, content, url, order } = request.body;
    const { id } = request.params;

    if (!request.file) {
      throw new Error("Missing file");
    }

    const { filename: fileName } = request.file;

    const image = await ImageService.update(
      { title, content, url, order, fileName },
      id
    );

    return response.json(image);
  }
  async Delete(request: Request, response: Response) {
    const { id } = request.params;

    const image = await ImageService.delete({ id });

    return response.json(image);
  }
}

export default new ImageController();
