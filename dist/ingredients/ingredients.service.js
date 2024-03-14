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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientsService = void 0;
const common_1 = require("@nestjs/common");
const ingredients = require("../static/allingredients.json");
const numeric_1 = require("../utils/numeric");
const images_service_1 = require("../images/images.service");
const LIMIT = 2;
let IngredientsService = class IngredientsService {
    constructor(imagesService) {
        this.imagesService = imagesService;
    }
    async getIngredients() {
        const randomNumbers = (0, numeric_1.generateUniqueNumbers)(0, 1999, LIMIT);
        const selectedIngredients = randomNumbers.map((x) => {
            return ingredients[x];
        });
        const ingredientsToReturn = await Promise.all(selectedIngredients.map(async (ingredient) => {
            const image_link = await this.imagesService.getImage(ingredient.name);
            return {
                id: ingredient.id,
                name: ingredient.name,
                image_link: image_link,
            };
        }));
        const output = [...ingredientsToReturn];
        return Promise.resolve(output);
    }
};
exports.IngredientsService = IngredientsService;
exports.IngredientsService = IngredientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [images_service_1.ImagesService])
], IngredientsService);
//# sourceMappingURL=ingredients.service.js.map