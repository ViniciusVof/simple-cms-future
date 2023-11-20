import { Router } from "express";
import ImageController from "../controllers/ImageController";
import multer from "multer";
import uploadConfig from "../api/multer";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();

const upload = multer(uploadConfig.upload("./uploads"));

router.get("/", isAuthenticated, ImageController.FindAll);
router.get("/:id", isAuthenticated, ImageController.FindById);
router.post(
  "/",
  isAuthenticated,
  upload.single("file"),
  ImageController.Create
);
router.put(
  "/:id",
  isAuthenticated,
  upload.single("file"),
  ImageController.Update
);
router.delete("/:id", isAuthenticated, ImageController.Delete);

export default router;
