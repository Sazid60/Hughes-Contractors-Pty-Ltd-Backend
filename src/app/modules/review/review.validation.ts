import { z } from "zod";

// For creating a review (all fields required except image)
export const createReviewZodSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  designation: z.string().min(2, "Designation must be at least 2 characters"),
  company: z.string().min(2, "Company must be at least 2 characters"),
  imageUrl: z.string(),
  review: z.string().min(5, "Review must be at least 5 characters"),
});

// For updating a review (all optional fields)
export const updateReviewZodSchema = z.object({
  name: z.string().min(2).optional(),
  imageUrl: z.string().optional(),
  designation: z.string().min(2).optional(),
  company: z.string().min(2).optional(),
  review: z.string().min(5).optional(),
});
