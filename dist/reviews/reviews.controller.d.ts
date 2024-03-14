import { ReviewsService } from './reviews.service';
import { Reviews } from './reviews.model';
export declare class ReviewsController {
    private readonly reviewService;
    constructor(reviewService: ReviewsService);
    post(prompt: string, ingredientId: string, kitchenDate: string, score: number, chefId: number): Promise<Reviews>;
    getAllReviews(limit: number): Promise<Reviews[]>;
    getProduct(): Promise<import("./reviews.model").GroupedReviews[]>;
}
