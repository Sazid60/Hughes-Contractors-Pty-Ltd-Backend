import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { reviewService } from "./review.service";

// Create Review
const createReview = catchAsync(async (req: Request, res: Response) => {
 const data = req.body

  const result = await reviewService.createReview(data);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Review created",
    data: result,
  });
});

// Get all Reviews
const getReviews = catchAsync(async (_req: Request, res: Response) => {
  const result = await reviewService.getAllReviews();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Fetched reviews",
    data: result,
  });
});

// Update Review
const updateReview = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const body = {
    name: req.body.name,
    designation: req.body.designation,
    company: req.body.company,
    review: req.body.review,
    imageUrl: req.body.imageUrl, // IMGBB URL from frontend
  };

  const result = await reviewService.updateReview(id, body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Review updated",
    data: result,
  });
});

// Delete Review
const deleteReview = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await reviewService.deleteReview(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Deleted review",
    data: result,
  });
});

export const reviewController = {
  createReview,
  getReviews,
  updateReview,
  deleteReview,
};
