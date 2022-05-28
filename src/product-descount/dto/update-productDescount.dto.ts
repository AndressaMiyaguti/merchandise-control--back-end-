import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDescountDto } from './create-productDescount.dto';

export class UpdateProductDescountDto extends PartialType(
  CreateProductDescountDto,
) {}
