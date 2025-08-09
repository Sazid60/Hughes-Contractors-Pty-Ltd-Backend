import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { termService } from "./term.service";

import { v2 as cloudinary } from "cloudinary";



const createTerm = catchAsync(async (req: Request, res: Response) => {
  const file = req.file as Express.Multer.File;
  if (!file) {
    throw new Error("No file provided");
  }

  // Upload to Cloudinary (auto resource type for PDFs)
  const uploadResult = await cloudinary.uploader.upload(file.path, {
    resource_type: "auto", 
    folder: "terms",
  });

  const pdfUrl = uploadResult.secure_url;

  // Save the Cloudinary URL to DB
  const result = await termService.createOrReplaceTerm(pdfUrl);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Term PDF uploaded",
    data: result,
  });
});

const getTerm = catchAsync(async (_req: Request, res: Response) => {
  const result = await termService.getTerm();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Fetched terms PDF",
    data: result,
  });
});

const deleteTerm = catchAsync(async (_req: Request, res: Response) => {
  const result = await termService.deleteTerm();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Deleted terms PDF",
    data: result,
  });
});

export const termController = {
  createTerm,
  getTerm,
  deleteTerm,
};
