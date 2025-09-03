import express from "express";
import { reviewController } from "./review.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { createReviewZodSchema, updateReviewZodSchema } from "./review.validation";

export const reviewRoutes = express.Router();

// Create Review
reviewRoutes.post("/", validateRequest(createReviewZodSchema), reviewController.createReview);

// Get all Reviews
reviewRoutes.get("/", reviewController.getReviews);

// Update Review
reviewRoutes.patch("/:id", validateRequest(updateReviewZodSchema), reviewController.updateReview);

// Delete Review
reviewRoutes.delete("/:id", reviewController.deleteReview);
