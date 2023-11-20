import { Router } from "express";
import UserController from "../controllers/UserController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();

router.post("/authenticate", UserController.Authenticate);
router.get("/listAll", isAuthenticated, UserController.FindAll);
router.get("/find/:id", isAuthenticated, UserController.FindById);
router.post("/create", isAuthenticated, UserController.Create);
router.put("/update/:id", isAuthenticated, UserController.Update);
router.delete("/delete/:id", isAuthenticated, UserController.Delete);

export default router;
