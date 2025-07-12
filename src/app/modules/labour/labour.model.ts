import { model, Schema } from "mongoose";
import { ILabour } from "./labour.interface";


// Schema Definition (No inline error messages)
const labourSchema = new Schema<ILabour>(
    {
        jobType: {
            type: String,
            required: true,
            trim: true,
        },
        perHourRate: {
            type: Number,
            required: true,
            min: 0,
        },
        minHour: {
            type: Number,
            required: true,
            min: 1,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

// Export Model
export const Labour = model<ILabour>("Labour", labourSchema);
