import express, { NextFunction, Request, Response } from "express";
import { Project } from "../models/project.model";


export const projectRoutes = express.Router();


// create a book 
projectRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const body = await req.body
    const project = await Project.create(body);

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Validation failed",
      success: false,
      error: error.name === "ValidationError" ? { name: error.name, errors: error.errors } : error
    });
  }
});

// get all books
projectRoutes.get("/", async (req: Request, res: Response) => {
  try {

    const books = await Project.find();

    res.status(200).json({
      success: true,
      message: "Projects retrieved successfully",
      data: books,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Invalid Query Error",
      success: false,
      error: error,
    });
  }
});

// // get single book

projectRoutes.get("/:projectId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projectId = req.params.projectId

    const book = await Project.findById(projectId)
    res.status(200).json(
      {
        success: true,
        message: "Project retrieved successfully",
        data: book,
      })
  } catch (error: any) {
    next(error)
  }
})

// // update a book

projectRoutes.put("/:projectId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projectId = req.params.projectId
    const updatedProjectParameters = await req.body;
    const updatedProject = await Project.findByIdAndUpdate(projectId, updatedProjectParameters, { new: true, runValidators: true })

    res.status(200).json(
      {
        success: true,
        message: "Project Updated successfully",
        data: updatedProject,
      })

  } catch (error: any) {
    res.status(400).json({
      message: "Validation failed",
      success: false,
      error: error.name === "ValidationError" ? { name: error.name, errors: error.errors } : error
    });
  }
})

// // delete a book

projectRoutes.delete("/:projectId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projectId = req.params.projectId
    await Project.findByIdAndDelete(projectId)

    res.status(200).json(
      {
        success: true,
        message: "Project deleted successfully",
        data: null,
      })
  } catch (error: any) {
    next(error)
  }
})

