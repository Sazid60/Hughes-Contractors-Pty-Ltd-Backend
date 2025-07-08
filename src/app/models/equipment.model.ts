import { model, Schema } from "mongoose";
import { IEquipment } from "../interfaces/equipment.interface";

const equipmentSchema = new Schema<IEquipment>(
  {
    name: {
      type: String,
      required: [true, "Equipment name is required"],
      trim: true,
    },
    hourlyRate: {
      type: Number,
      required: [true, "Hourly rate is required"],
      min: [0, "Hourly rate must be a positive number"],
    },
    minHour: {
      type: Number,
      required: [true, "Minimum hours are required"],
      min: [1, "Minimum hours must be at least 1"],
    },
    floatCharge: {
      type: Number,
      required: [true, "Float charge is required"],
      min: [0, "Float charge must be a positive number"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Equipment = model<IEquipment>("Equipment", equipmentSchema);
