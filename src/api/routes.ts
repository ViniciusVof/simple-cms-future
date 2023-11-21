import { Router } from "express";

import UserRoutes from "../routes/UserRoutes";
import PageRoutes from "../routes/PageRoutes";
import CarrosselRoutes from "../routes/CarrosselRoutes";
import ImageRoutes from "../routes/ImageRoutes";

const routes = Router();

routes.use("/users", UserRoutes);
routes.use("/pages", PageRoutes);
routes.use("/carousels", CarrosselRoutes);
routes.use("/images", ImageRoutes);

export default routes;
