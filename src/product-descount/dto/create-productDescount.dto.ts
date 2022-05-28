/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString,Length, IsUrl, IsOptional, IsNumber } from 'class-validator';

export class CreateProductDescountDto {
  @IsOptional({})
  @IsUrl( { })
  @IsString({ message: 'Insira um link válido!' })
  image: string;

  @Length(2,200, { })
  @IsNotEmpty({ message: 'Campo"vazio", Insira a descrição do produto' })
  @IsString({})
  description: string;

  @Length(2,200, { })
  @IsNotEmpty({ message: 'Campo"vazio", Insira a código do produto' })
  @IsString({})
  cod: string;

  @IsNotEmpty({ message: 'Campo"vazio" Insira o valor de custo' })
  @IsNumber({})
  price: number;

  @IsNotEmpty({ message: 'Campo"vazio" Informe a quantidade de peças em estoque' })
  @IsNumber({})
  quantity: number;

  @IsNotEmpty({ message: 'Campo"vazio" Informe o tamanho da peça' })
  @IsNumber({})
  size: string;

  @IsNotEmpty({ message: 'Campo"vazio" Informe se o produto está disponível para compra' })
  @IsNumber({})
  available: string;

  @IsNotEmpty({ message: 'Campo"vazio" Insira o valor de venda'})
  @IsNumber({})
  salePrice: number; 

  @IsNotEmpty({ message: 'Campo"vazio", adicione a categoria do produto' })
  @IsString({ })
  category: string;
}
