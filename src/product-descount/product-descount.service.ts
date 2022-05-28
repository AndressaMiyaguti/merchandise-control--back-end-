/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/prisma.service';
import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { User } from '@prisma/client';
import { UpdateProductDescountDto } from './dto/update-productDescount.dto';
import { CreateProductDescountDto } from './dto/create-productDescount.dto';

@Injectable()
export class ProductDescountService {
  constructor(private db: PrismaService) {}
  async create(dto: CreateProductDescountDto): Promise<Product> {
    const product = await this.db.product.findUnique({ 
      where: { cod: dto.cod}, });
      if (product) {
        throw new ConflictException('produto já cadastrado');
      }
    return product;
  }    

  async findMany(): Promise<Product[]> {
    const product = await this.db.product.findMany();
    return product;
  }

  async findUnique(id: string): Promise<Product> {
    const product = await this.db.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('ID Não encontrado na base de dados');
    }

    return product;
  }

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.product.delete({
      where: { id },
    });

    return {
      message: 'Produto excluído com sucesso',
    };
  }

  async update( id: string, dto: UpdateProductDescountDto ): Promise<User> {
    const data: Prisma.UserUpdateInput =  {
      ...dto,
      updateAt: new Date( Date.now())
    }
    return await this.db.user.update({where: {id}, data })     
  }
}
