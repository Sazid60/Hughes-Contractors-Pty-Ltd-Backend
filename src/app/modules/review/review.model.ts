import { Schema, model } from "mongoose";
import { IReview } from "./review.interface";

const reviewSchema = new Schema<IReview>(
  {
    name: { type: String, required: true, trim: true },
    designation: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    review: { type: String, required: true, trim: true },
    imageUrl: { type: String, default: "" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Review = model<IReview>("Review", reviewSchema);
