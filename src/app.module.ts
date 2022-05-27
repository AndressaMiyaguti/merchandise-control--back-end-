import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { ProductDescountService } from './product-descount/product-descount.service';
import { ProductDescountModule } from './product-descount/product-descount.module';

@Module({
  imports: [UsersModule, ProductModule, ProductDescountModule],
  controllers: [],
  providers: [ProductDescountService],
})
export class AppModule {}
