"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const reviews_controller_1 = require("./reviews/reviews.controller");
const ingredients_controller_1 = require("./ingredients/ingredients.controller");
const reviews_service_1 = require("./reviews/reviews.service");
const ingredients_service_1 = require("./ingredients/ingredients.service");
const api_service_1 = require("./api/api.service");
const images_service_1 = require("./images/images.service");
const reviews_model_1 = require("./reviews/reviews.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://matias:mLw1QEomEqjWs8kB@hackathon.5xvhlxx.mongodb.net/'),
            mongoose_1.MongooseModule.forFeature([{ name: 'Reviews', schema: reviews_model_1.ReviewsSchema }]),
        ],
        controllers: [reviews_controller_1.ReviewsController, ingredients_controller_1.IngredientsController],
        providers: [
            app_service_1.AppService,
            ingredients_service_1.IngredientsService,
            reviews_service_1.ReviewsService,
            images_service_1.ImagesService,
            api_service_1.ApiService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map