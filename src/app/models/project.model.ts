import { model, Schema } from "mongoose";
import { IProject } from "../interfaces/project.interface";

// Schema Definition
const projectSchema = new Schema<IProject>(
  {
    projectImage: {
      type: String,
      required: [true, "Project Image is required"],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    client: {
      type: String,
      required: [true, "Client is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    projectYear: {
      type: String,
      required: [true, "Project year is required"],
      trim: true,
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Export Model
export const Project = model<IProject>("Project", projectSchema);