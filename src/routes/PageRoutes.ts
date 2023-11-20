import { Router } from "express";
import PageController from "../controllers/PageController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();

router.get("/", isAuthenticated, PageController.FindAll);
router.get("/unique/:id", isAuthenticated, PageController.FindById);
router.get("/:slug", isAuthenticated, PageController.FindBySlug);
router.post("/", isAuthenticated, PageController.Create);
router.put("/:id", isAuthenticated, PageController.Update);
router.delete("/:id", isAuthenticated, PageController.Delete);

export default router;
