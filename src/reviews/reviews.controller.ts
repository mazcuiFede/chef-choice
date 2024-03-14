import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { Reviews } from './reviews.model';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewService: ReviewsService) {}

  @Post()
  async post(
    @Body('prompt') prompt: string,
    @Body('ingredientId') ingredientId: string,
    @Body('kitchenDate') kitchenDate: string,
    @Body('score') score: number,
    @Body('chefId') chefId: number,
  ): Promise<Reviews> {
    const review: Reviews = {
      id: Math.random(),
      prompt,
      ingredientId,
      score,
      chefId,
      kitchenDate,
    };
    return await this.reviewService.saveReview(review);
  }

  @Get(':limit')
  async getAllReviews(@Param('limit') limit: number) {
    const reviews = await this.reviewService.getReviews(limit);
    return reviews;
  }

  @Get()
  async getProduct() {
    return await this.reviewService.getGroupedReviews();
  }
}
