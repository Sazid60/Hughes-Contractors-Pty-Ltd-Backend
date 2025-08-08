import { Schema, model } from "mongoose";
import { ITerm } from "./term.interface";

const termSchema = new Schema<ITerm>(
  {
    pdfUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Term = model<ITerm>("Term", termSchema);
