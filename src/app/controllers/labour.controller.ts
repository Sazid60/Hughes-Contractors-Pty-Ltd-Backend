import express, { NextFunction, Request, Response } from "express";
import { Labour } from "../models/labourRate.model";


export const labourRoutes = express.Router();

// Create a labour entry
labourRoutes.post("/", async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const labour = await Labour.create(body);

        res.status(201).json({
            success: true,
            message: "Labour entry created successfully",
            data: labour,
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

// Get all labour entries
labourRoutes.get("/", async (_req: Request, res: Response) => {
    try {
        const labours = await Labour.find();

        res.status(200).json({
            success: true,
            message: "Labour data retrieved successfully",
            data: labours,
        });
    } catch (error: any) {
        res.status(400).json({
            message: "Invalid Query Error",
            success: false,
            error,
        });
    }
});

// Get single labour entry
labourRoutes.get("/:labourId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const labourId = req.params.labourId;
        const labour = await Labour.findById(labourId);

        res.status(200).json({
            success: true,
            message: "Labour data retrieved successfully",
            data: labour,
        });
    } catch (error: any) {
        next(error);
    }
});

// Update a labour entry
labourRoutes.put("/:labourId", async (req: Request, res: Response) => {
    try {
        const labourId = req.params.labourId;
        const updatedData = req.body;

        const updatedLabour = await Labour.findByIdAndUpdate(labourId, updatedData, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            success: true,
            message: "Labour entry updated successfully",
            data: updatedLabour,
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

// Delete a labour entry
labourRoutes.delete("/:labourId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const labourId = req.params.labourId;
        await Labour.findByIdAndDelete(labourId);

        res.status(200).json({
            success: true,
            message: "Labour entry deleted successfully",
            data: null,
        });
    } catch (error: any) {
        next(error);
    }
});
