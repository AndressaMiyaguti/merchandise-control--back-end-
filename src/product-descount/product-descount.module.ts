import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { ProductDescountService } from './product-descount.service';
import { ProductDescountController } from './product-descount.controller';

@Module({
  providers: [ProductDescountService, PrismaService],
  controllers: [ProductDescountController],
})
export class ProductDescountModule {}
