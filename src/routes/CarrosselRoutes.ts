import { Router } from "express";
import CarrosselController from "../controllers/CarrosselController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();

router.get("/listAll", isAuthenticated, CarrosselController.FindAll);
router.get("/find/:id", isAuthenticated, CarrosselController.FindById);
router.post("/create", isAuthenticated, CarrosselController.Create);
router.put("/update/:id", isAuthenticated, CarrosselController.Update);
router.delete("/delete/:id", isAuthenticated, CarrosselController.Delete);

export default router;
