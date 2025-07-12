
import { IProject } from "./project.interface";
import { Project } from "./project.model";


const createProject = async (payload: IProject) => {
    return await Project.create(payload);
}

const getAllProjects = async () => {
    return await Project.find();
}

const getSingleProject = async (projectId: string) => {
    return await Project.findById(projectId);
}

const updateProject = async (projectId: string, payload: Partial<IProject>) => {
    return await Project.findByIdAndUpdate(projectId, payload, {
        new: true,
        runValidators: true,
    });
}

const deleteProject = async (projectId: string) => {
    return await Project.findByIdAndDelete(projectId);
}



export const projectServices = {
    createProject,
    getAllProjects,
    updateProject,
    getSingleProject,
    deleteProject

}

