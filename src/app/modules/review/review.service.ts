import { IReview } from "./review.interface";
import { Review } from "./review.model";


const createReview = async (payload: IReview) => {
  return await Review.create(payload);
};

const getAllReviews = async () => {
  return await Review.find().sort({ createdAt: -1 });
};

const updateReview = async (id: string, payload: Partial<IReview>) => {
  return await Review.findByIdAndUpdate(id, payload, { new: true });
};

const deleteReview = async (id: string) => {
  return await Review.findByIdAndDelete(id);
};

export const reviewService = {
  createReview,
  getAllReviews,
  updateReview,
  deleteReview,
};
