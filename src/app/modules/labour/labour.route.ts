
import { labourController } from "./labour.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { createLabourZodSchema, updateLabourZodSchema } from "./labour.validation";
import { Router } from "express";


export const labourRoutes = Router();

labourRoutes.post("/", validateRequest(createLabourZodSchema), labourController.createLabour);
labourRoutes.get("/", labourController.getAllLabours);
labourRoutes.get("/:labourId", labourController.getSingleLabour);
labourRoutes.put("/:labourId", validateRequest(updateLabourZodSchema), labourController.updateLabour);
labourRoutes.delete("/:labourId", labourController.deleteLabour);
