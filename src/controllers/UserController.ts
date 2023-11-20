import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  async Authenticate(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = await UserService.auth({ email, password });

    return response.json(user);
  }
  async Create(request: Request, response: Response) {
    const { email, fullName, password } = request.body;

    const user = await UserService.create({ email, fullName, password });

    return response.json(user);
  }
  async FindAll(request: Request, response: Response) {
    const user = await UserService.findAll();

    return response.json(user);
  }
  async FindById(request: Request, response: Response) {
    const { id } = request.params;

    const user = await UserService.findById({ id });

    return response.json(user);
  }
  async Update(request: Request, response: Response) {
    const { fullName, password } = request.body;
    const { id } = request.params;

    const user = await UserService.update({ fullName, password }, id);

    return response.json(user);
  }
  async Delete(request: Request, response: Response) {
    const { id } = request.params;

    const user = await UserService.delete({ id });

    return response.json(user);
  }
}

export default new UserController();
