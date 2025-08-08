import express from "express";
import { termController } from "./term.controller";
import { multerUpload } from "../../config/multer.config";


const router = express.Router();

router.post("/", multerUpload.single("file"), termController.createTerm);
router.get("/", termController.getTerm);
router.delete("/", termController.deleteTerm); 

export const termRoutes = router;
