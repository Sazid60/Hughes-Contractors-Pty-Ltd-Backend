import { Schema, model } from "mongoose";
import { ICertification } from "./certification.interface";

const certificationSchema = new Schema<ICertification>(
  {
    title: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Certification = model<ICertification>(
  "Certification",
  certificationSchema
);
