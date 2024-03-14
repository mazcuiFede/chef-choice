import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewsController } from './reviews/reviews.controller';
import { IngredientsController } from './ingredients/ingredients.controller';
import { ReviewsService } from './reviews/reviews.service';
import { IngredientsService } from './ingredients/ingredients.service';
import { ApiService } from './api/api.service';
import { ImagesService } from './images/images.service';
import { ReviewsSchema } from './reviews/reviews.model';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://matias:mLw1QEomEqjWs8kB@hackathon.5xvhlxx.mongodb.net/',
    ),
    MongooseModule.forFeature([{ name: 'Reviews', schema: ReviewsSchema }]),
  ],
  controllers: [ReviewsController, IngredientsController],
  providers: [
    AppService,
    IngredientsService,
    ReviewsService,
    ImagesService,
    ApiService,
  ],
})
export class AppModule {}
