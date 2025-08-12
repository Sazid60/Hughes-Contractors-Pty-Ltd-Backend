import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { certificationService } from "./certification.service";
import { v2 as cloudinary } from "cloudinary";
import { createCertificationZodSchema } from "./certification.validation";



// Create Certification (Admin) - expects multipart/form-data with 'image' and 'title'
const createCertification = catchAsync(async (req: Request, res: Response) => {
  // Validate title with Zod
  const body = { title: req.body.title };
  createCertificationZodSchema.parse(body);

  const file = req.file as Express.Multer.File;
  if (!file) {
    throw new Error("Image file is required");
  }

  // Upload image to Cloudinary
  const uploadResult = await cloudinary.uploader.upload(file.path, {
    folder: "certifications",
    resource_type: "image",
  });

  const imageUrl = uploadResult.secure_url;

  const result = await certificationService.createCertification({
    title: body.title,
    imageUrl,
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Certification created",
    data: result,
  });
});

// Get all certifications (Public)
const getCertifications = catchAsync(async (_req: Request, res: Response) => {
  const result = await certificationService.getAllCertifications();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Fetched certifications",
    data: result,
  });
});

// Delete certification (Admin)
const deleteCertification = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await certificationService.deleteCertification(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Deleted certification",
    data: result,
  });
});

export const certificationController = {
  createCertification,
  getCertifications,
  deleteCertification,
};
