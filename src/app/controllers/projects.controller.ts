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
    const bookId = req.params.projectId

    const book = await Project.findById(bookId)
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

projectRoutes.put("/:bookId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookId = req.params.bookId
    const updatedBookParameters = await req.body;
    const updatedBook = await Project.findByIdAndUpdate(bookId, updatedBookParameters, { new: true, runValidators: true })

    res.status(200).json(
      {
        success: true,
        message: "Project Updated successfully",
        data: updatedBook,
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

projectRoutes.delete("/:bookId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookId = req.params.bookId
    await Project.findByIdAndDelete(bookId)

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

