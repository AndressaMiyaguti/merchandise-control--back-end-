import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { ProductDescountModule } from './product-descount/product-descount.module';

@Module({
  imports: [UsersModule, ProductModule, ProductDescountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
