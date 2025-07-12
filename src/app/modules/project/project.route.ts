import express from "express";
import { projectController } from "./project.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { createProjectZodSchema, updateProjectZodSchema } from "./project.validation";


export const projectRoutes = express.Router();

projectRoutes.post("/", validateRequest(createProjectZodSchema), projectController.createProject);
projectRoutes.get("/", projectController.getAllProjects);
projectRoutes.get("/:projectId", projectController.getSingleProject);
projectRoutes.put("/:projectId", validateRequest(updateProjectZodSchema), projectController.updateProject);
projectRoutes.delete("/:projectId", projectController.deleteProject);


