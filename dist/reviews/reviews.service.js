"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const numeric_1 = require("../utils/numeric");
const object_1 = require("../utils/object");
let ReviewsService = class ReviewsService {
    constructor(reviewsModel) {
        this.reviewsModel = reviewsModel;
    }
    async saveReview(review) {
        const newReview = new this.reviewsModel(review);
        const result = await newReview.save();
        return result;
    }
    async getReviews(limit) {
        const reviews = await this.reviewsModel.find().limit(limit);
        return reviews;
    }
    async getGroupedReviews() {
        const reviews = await this.reviewsModel.find();
        const ingredientsId = reviews.map((review) => {
            return {
                ingredientId: review.ingredientId,
                kitchenDate: review.kitchenDate,
            };
        });
        const uniqIngredients = (0, object_1.deleteDuplicates)(ingredientsId);
        const result = uniqIngredients.map((uniqIngredient) => {
            const result = {
                avgScore: (0, numeric_1.average)(reviews
                    .filter((review) => review.ingredientId === uniqIngredient.ingredientId &&
                    review.kitchenDate === uniqIngredient.kitchenDate)
                    .map((x) => x.score)),
                ingredientId: uniqIngredient.ingredientId,
                kitchenDate: uniqIngredient.kitchenDate,
            };
            return result;
        });
        return result;
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Reviews')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map