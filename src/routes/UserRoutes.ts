import { Router } from "express";
import UserController from "../controllers/UserController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();

router.get("/", isAuthenticated, UserController.FindAll);
router.get("/:id", isAuthenticated, UserController.FindById);
router.post("/", isAuthenticated, UserController.Create);
router.put("/:id", isAuthenticated, UserController.Update);
router.delete("/:id", isAuthenticated, UserController.Delete);

export default router;
