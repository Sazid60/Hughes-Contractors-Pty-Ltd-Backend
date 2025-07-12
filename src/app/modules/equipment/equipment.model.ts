import { model, Schema } from "mongoose";
import { IEquipment } from "./equipment.interface";


const equipmentSchema = new Schema<IEquipment>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        equipmentImage: {
            type: String,
            required: true,
        },
        hourlyRate: {
            type: Number,
            required: true,
            min: 0, // Must be a positive number
        },
        minHour: {
            type: Number,
            required: true,
            min: 1, // At least 1 hour
        },
        floatCharge: {
            type: Number,
            required: true,
            min: 0, // Must be a positive number
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

export const Equipment = model<IEquipment>("Equipment", equipmentSchema);
