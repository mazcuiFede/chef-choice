import { Injectable } from '@nestjs/common';
import { Ingredient } from 'src/interfaces/ingredient.interface';
import * as ingredients from '../static/allingredients.json';
import { generateUniqueNumbers } from 'src/utils/numeric';
import { ImagesService } from 'src/images/images.service';

const LIMIT = 2;

@Injectable()
export class IngredientsService {
  constructor(private imagesService: ImagesService) {}

  async getIngredients(): Promise<Ingredient[]> {
    const randomNumbers = generateUniqueNumbers(0, 1999, LIMIT);

    const selectedIngredients = randomNumbers.map((x) => {
      return ingredients[x];
    });

    const ingredientsToReturn = await Promise.all(
      selectedIngredients.map(async (ingredient) => {
        const image_link: string = await this.imagesService.getImage(
          ingredient.name,
        );
        return {
          id: ingredient.id,
          name: ingredient.name,
          image_link: image_link,
        };
      }),
    );

    const output = [...ingredientsToReturn];

    return Promise.resolve(output);
  }
}
