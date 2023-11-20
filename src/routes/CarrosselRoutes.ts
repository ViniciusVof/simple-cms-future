import { Router } from "express";
import CarrosselController from "../controllers/CarrosselController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();

router.get("/", isAuthenticated, CarrosselController.FindAll);
router.get("/:id", isAuthenticated, CarrosselController.FindById);
router.post("/", isAuthenticated, CarrosselController.Create);
router.put("/:id", isAuthenticated, CarrosselController.Update);
router.delete("/:id", isAuthenticated, CarrosselController.Delete);

export default router;
