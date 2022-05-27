import { Module } from '@nestjs/common';
import { ProductDescountController } from './product-descount.controller';

@Module({
  controllers: [ProductDescountController]
})
export class ProductDescountModule {}
