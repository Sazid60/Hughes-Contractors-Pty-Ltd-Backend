import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { equipmentService } from "./equipment.service";


const createEquipment = catchAsync(async (req: Request, res: Response) => {
    const result = await equipmentService.createEquipment(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Equipment created successfully",
        data: result,
    });
});

const getAllEquipment = catchAsync(async (_req: Request, res: Response) => {
    const result = await equipmentService.getAllEquipment();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Equipment retrieved successfully",
        data: result,
    });
});

const getSingleEquipment = catchAsync(async (req: Request, res: Response) => {
    const result = await equipmentService.getSingleEquipment(req.params.equipmentId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Equipment retrieved successfully",
        data: result,
    });
});

const updateEquipment = catchAsync(async (req: Request, res: Response) => {
    const result = await equipmentService.updateEquipment(req.params.equipmentId, req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Equipment updated successfully",
        data: result,
    });
});

const deleteEquipment = catchAsync(async (req: Request, res: Response) => {
    await equipmentService.deleteEquipment(req.params.equipmentId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Equipment deleted successfully",
        data: null,
    });
});

export const equipmentController = {
    createEquipment,
    getAllEquipment,
    getSingleEquipment,
    updateEquipment,
    deleteEquipment,
};
