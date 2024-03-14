import { Ingredient } from 'src/interfaces/ingredient.interface';
import { ImagesService } from 'src/images/images.service';
export declare class IngredientsService {
    private imagesService;
    constructor(imagesService: ImagesService);
    getIngredients(): Promise<Ingredient[]>;
}
