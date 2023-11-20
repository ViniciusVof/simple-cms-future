import { Request, Response } from "express";
import CarrosselService from "../services/CarrosselService";

class CarrosselController {
  async Create(request: Request, response: Response) {
    const { title } = request.body;

    const carrossel = await CarrosselService.create({ title });

    return response.json(carrossel);
  }
  async FindAll(request: Request, response: Response) {
    const carrossel = await CarrosselService.findAll();

    return response.json(carrossel);
  }
  async FindById(request: Request, response: Response) {
    const { id } = request.params;

    const carrossel = await CarrosselService.findById({ id });

    return response.json(carrossel);
  }
  async Update(request: Request, response: Response) {
    const { title } = request.body;
    const { id } = request.params;

    const carrossel = await CarrosselService.update({ title }, id);

    return response.json(carrossel);
  }
  async Delete(request: Request, response: Response) {
    const { id } = request.params;

    const carrossel = await CarrosselService.delete({ id });

    return response.json(carrossel);
  }
}

export default new CarrosselController();
