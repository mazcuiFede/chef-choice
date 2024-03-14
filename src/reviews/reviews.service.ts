import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GroupedReviews, Reviews } from './reviews.model';
import { average } from 'src/utils/numeric';
import { deleteDuplicates } from 'src/utils/object';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel('Reviews') private readonly reviewsModel: Model<Reviews>,
  ) {}

  async saveReview(review: Reviews): Promise<Reviews> {
    const newReview = new this.reviewsModel(review);

    const result = await newReview.save();
    return result;
  }

  async getReviews(limit: number): Promise<Reviews[]> {
    const reviews = await this.reviewsModel.find().limit(limit);
    return reviews;
  }

  async getGroupedReviews(): Promise<GroupedReviews[]> {
    const reviews: Reviews[] = await this.reviewsModel.find();

    const ingredientsId = reviews.map((review) => {
      return {
        ingredientId: review.ingredientId,
        kitchenDate: review.kitchenDate,
      };
    });

    const uniqIngredients = deleteDuplicates(ingredientsId);

    const result: GroupedReviews[] = uniqIngredients.map((uniqIngredient) => {
      const result: GroupedReviews = {
        avgScore: average(
          reviews
            .filter(
              (review) =>
                review.ingredientId === uniqIngredient.ingredientId &&
                review.kitchenDate === uniqIngredient.kitchenDate,
            )
            .map((x) => x.score),
        ),
        ingredientId: uniqIngredient.ingredientId,
        kitchenDate: uniqIngredient.kitchenDate,
      };
      return result;
    });

    return result;
  }
}
