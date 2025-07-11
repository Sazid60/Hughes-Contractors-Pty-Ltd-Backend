import express, { NextFunction, Request, Response } from "express";
import { Equipment } from "../models/equipment.model";

export const equipmentRoutes = express.Router();

// Create equipment
equipmentRoutes.post("/", async (req: Request, res: Response) => {
    try {
        const body = req.body;

        const equipment = await Equipment.create(body);



        res.status(201).json({
            success: true,
            message: "Equipment created successfully",
            data: equipment,
        });
    } catch (error: any) {
        res.status(400).json({
            message: "Validation failed",
            success: false,
            error:
                error.name === "ValidationError"
                    ? { name: error.name, errors: error.errors }
                    : error,
        });
    }
});

// Get all equipment
equipmentRoutes.get("/", async (req: Request, res: Response) => {
    try {
        const equipments = await Equipment.find();

        res.status(200).json({
            success: true,
            message: "Equipment data retrieved successfully",
            data: equipments,
        });
    } catch (error: any) {
        res.status(400).json({
            message: "Invalid Query Error",
            success: false,
            error,
        });
    }
});

// Get single equipment
equipmentRoutes.get("/:equipmentId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const equipmentId = req.params.equipmentId;
        const equipment = await Equipment.findById(equipmentId);

        res.status(200).json({
            success: true,
            message: "Equipment data retrieved successfully",
            data: equipment,
        });
    } catch (error: any) {
        next(error);
    }
});

// Update equipment
equipmentRoutes.put("/:equipmentId", async (req: Request, res: Response) => {
    try {
        const equipmentId = req.params.equipmentId;
        const updatedData = req.body;

        const updatedEquipment = await Equipment.findByIdAndUpdate(equipmentId, updatedData, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            success: true,
            message: "Equipment updated successfully",
            data: updatedEquipment,
        });
    } catch (error: any) {
        res.status(400).json({
            message: "Validation failed",
            success: false,
            error:
                error.name === "ValidationError"
                    ? { name: error.name, errors: error.errors }
                    : error,
        });
    }
});

// Delete equipment
equipmentRoutes.delete("/:equipmentId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const equipmentId = req.params.equipmentId;
        await Equipment.findByIdAndDelete(equipmentId);

        res.status(200).json({
            success: true,
            message: "Equipment deleted successfully",
            data: null,
        });
    } catch (error: any) {
        next(error);
    }
});
