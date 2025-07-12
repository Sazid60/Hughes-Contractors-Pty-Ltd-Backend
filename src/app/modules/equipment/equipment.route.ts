import express from "express";
import { equipmentController } from "./equipment.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import {
    createEquipmentZodSchema,
    updateEquipmentZodSchema,
} from "./equipment.validation";

export const equipmentRoutes = express.Router();

equipmentRoutes.post(
    "/",
    validateRequest(createEquipmentZodSchema),
    equipmentController.createEquipment
);

equipmentRoutes.get(
    "/",
    equipmentController.getAllEquipment
);

equipmentRoutes.get(
    "/:equipmentId",
    equipmentController.getSingleEquipment
);

equipmentRoutes.put(
    "/:equipmentId",
    validateRequest(updateEquipmentZodSchema),
    equipmentController.updateEquipment
);

equipmentRoutes.delete(
    "/:equipmentId",
    equipmentController.deleteEquipment
);
