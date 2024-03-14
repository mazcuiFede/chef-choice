import { Controller, Get } from '@nestjs/common';
import { Ingredient } from 'src/interfaces/ingredient.interface';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientService: IngredientsService) {}

  @Get()
  async get(): Promise<Ingredient[]> {
    return await this.ingredientService.getIngredients();
  }
}
