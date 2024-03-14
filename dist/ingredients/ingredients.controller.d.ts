import { Ingredient } from 'src/interfaces/ingredient.interface';
import { IngredientsService } from './ingredients.service';
export declare class IngredientsController {
    private readonly ingredientService;
    constructor(ingredientService: IngredientsService);
    get(): Promise<Ingredient[]>;
}
