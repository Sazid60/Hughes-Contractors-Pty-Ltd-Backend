import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { projectServices } from "./project.service";


const createProject = catchAsync(async (req: Request, res: Response) => {
    const project = await projectServices.createProject(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Project created successfully",
        data: project,
    });
});

const getAllProjects = catchAsync(async (req: Request, res: Response) => {
    const projects = await projectServices.getAllProjects();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Projects retrieved successfully",
        data: projects,
    });
});

const getSingleProject = catchAsync(async (req: Request, res: Response) => {
    const project = await projectServices.getSingleProject(req.params.projectId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Project retrieved successfully",
        data: project,
    });
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
    const updatedProject = await projectServices.updateProject(req.params.projectId, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Project updated successfully",
        data: updatedProject,
    });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
    await projectServices.deleteProject(req.params.projectId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Project deleted successfully",
        data: null,
    });
});

export const projectController = {
    createProject,
    getAllProjects,
    getSingleProject,
    updateProject,
    deleteProject,
};
