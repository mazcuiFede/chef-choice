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
exports.ImagesService = void 0;
const common_1 = require("@nestjs/common");
const api_service_1 = require("../api/api.service");
let ImagesService = class ImagesService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    async getImage(name) {
        const apiKey = 'icdeMV2oXzfgw35g0Hk0nlnqDN1BkGNFSu1PmsX8voenETBfPySlAdcg';
        const url = `https://api.pexels.com/v1/search?query=${name}&per_page=1`;
        const result = await this.apiService.fetchData(url, apiKey);
        return result.photos[0].src.large;
    }
};
exports.ImagesService = ImagesService;
exports.ImagesService = ImagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], ImagesService);
//# sourceMappingURL=images.service.js.map