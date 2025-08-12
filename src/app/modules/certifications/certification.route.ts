import express from "express";
import { certificationController } from "./certification.controller";
import { multerUpload } from "../../config/multer.config";

const router = express.Router();

router.post(
  "/",
  multerUpload.single("file"),
  certificationController.createCertification
);

router.get("/", certificationController.getCertifications);

router.delete("/:id", certificationController.deleteCertification);

export const certificationRoutes = router;
