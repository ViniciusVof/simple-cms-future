import { Router } from "express";
import ImageController from "../controllers/ImageController";
import multer from "multer";
import uploadConfig from "../api/multer";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();

const upload = multer(uploadConfig.upload("./uploads"));

router.get("/listAll", isAuthenticated, ImageController.FindAll);
router.get("/find/:id", isAuthenticated, ImageController.FindById);
router.post(
  "/create",
  isAuthenticated,
  upload.single("file"),
  ImageController.Create
);
router.put(
  "/update/:id",
  isAuthenticated,
  upload.single("file"),
  ImageController.Update
);
router.delete("/delete/:id", isAuthenticated, ImageController.Delete);

export default router;
