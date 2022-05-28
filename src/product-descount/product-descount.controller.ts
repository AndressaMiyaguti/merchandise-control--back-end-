/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Param, Delete, } from '@nestjs/common'; // colocar UseGuards 
import { CreateProductDescountDto } from './dto/create-productDescount.dto';
import { ProductDescountService } from '../product-descount/product-descount.service';
import { ProductDescount } from '@prisma/client';


@Controller('product')
export class ProductDescountController {
  constructor(private service: ProductDescountService) {}

  @Post('create-product-descount-adm') 
  createProductDescountAdm(@Body() data: CreateProductDescountDto): Promise<ProductDescount> {
    return this.service.create(data);
  }

  @Post('create-product-descount') 
  createProductDescount(@Body() data: CreateProductDescountDto): Promise<ProductDescount> {
    return this.service.create(data);
  }

  @Get('find-all')
  findMany(): Promise<ProductDescount[]> {
    return this.service.findMany();
  }

  @Get('find/:id')
  findUnique(@Param('id') id: string): Promise<ProductDescount> {
    return this.service.findUnique(id);
  }

  @Delete('delete/:id')
  deleteOneAdm(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
