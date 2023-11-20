import { Router } from "express";
import PageController from "../controllers/PageController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();

router.get("/listAll", isAuthenticated, PageController.FindAll);
router.get("/find/:id", isAuthenticated, PageController.FindById);
router.get("/slug/:slug", isAuthenticated, PageController.FindBySlug);
router.post("/create/", isAuthenticated, PageController.Create);
router.put("/update/:id", isAuthenticated, PageController.Update);
router.delete("/delete/:id", isAuthenticated, PageController.Delete);

export default router;
