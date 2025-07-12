import { model, Schema } from "mongoose";
import { IProject } from "./project.interface";

const projectSchema = new Schema<IProject>(
    {
        projectImage: {
            type: String,
            required: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        client: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        projectYear: {
            type: String,
            required: true,
            trim: true,
        },
        duration: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

export const Project = model<IProject>("Project", projectSchema);
