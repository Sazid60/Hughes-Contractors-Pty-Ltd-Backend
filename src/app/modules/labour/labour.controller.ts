import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { labourService } from "./labour.service";

const createLabour = catchAsync(async (req: Request, res: Response) => {
    const labour = await labourService.createLabour(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Labour entry created successfully",
        data: labour,
    });
});

const getAllLabours = catchAsync(async (_req: Request, res: Response) => {
    const labours = await labourService.getAllLabours();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "All labour entries retrieved successfully",
        data: labours,
    });
});

const getSingleLabour = catchAsync(async (req: Request, res: Response) => {
    const labour = await labourService.getSingleLabour(req.params.labourId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Single labour entry retrieved successfully",
        data: labour,
    });
});

const updateLabour = catchAsync(async (req: Request, res: Response) => {
    const labour = await labourService.updateLabour(req.params.labourId, req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Labour entry updated successfully",
        data: labour,
    });
});

const deleteLabour = catchAsync(async (req: Request, res: Response) => {
    await labourService.deleteLabour(req.params.labourId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Labour entry deleted successfully",
        data: null,
    });
});

export const labourController = {
    createLabour,
    getAllLabours,
    getSingleLabour,
    updateLabour,
    deleteLabour,
};
