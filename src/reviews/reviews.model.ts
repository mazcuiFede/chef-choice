import * as mongoose from 'mongoose';

export const ReviewsSchema = new mongoose.Schema({
  prompt: { type: String },
  ingredientId: { type: String, required: true },
  score: { type: Number, required: true },
  chefId: { type: Number, required: true },
  kitchenDate: { type: String, required: true },
});

export interface Reviews {
  id: number;
  prompt: string;
  ingredientId: string;
  score: number;
  chefId: number;
  kitchenDate: string;
}

export interface GroupedReviews {
  ingredientId: string;
  avgScore: number;
  kitchenDate: string;
}
