"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsSchema = void 0;
const mongoose = require("mongoose");
exports.ReviewsSchema = new mongoose.Schema({
    prompt: { type: String },
    ingredientId: { type: String, required: true },
    score: { type: Number, required: true },
    chefId: { type: Number, required: true },
    kitchenDate: { type: String, required: true },
});
//# sourceMappingURL=reviews.model.js.map