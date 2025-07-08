import { model, Schema } from "mongoose";
import { ILabour } from "../interfaces/labourRate.interface";


// Schema Definition
const labourSchema = new Schema<ILabour>(
    {
        jobType: {
            type: String,
            required: [true, "Job type is required"],
            trim: true,
        },
        perHourRate: {
            type: Number,
            required: [true, "Per hour rate is required"],
            min: [0, "Rate must be a positive number"],
        },
        minHour: {
            type: Number,
            required: [true, "Minimum hours are required"],
            min: [1, "Minimum hours must be at least 1"],
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

// Export Model
export const Labour = model<ILabour>("Labour", labourSchema);
