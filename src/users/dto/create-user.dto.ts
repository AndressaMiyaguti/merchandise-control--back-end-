/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsString,
  Length,
  MinLength,
  IsEmail,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @MinLength(2, { })
  @IsString({ message: 'Informe seu nome!' })
  name: string;

  @IsOptional()
  @IsString({ message: 'Insira url da sua foto!' })
  photograph: string;

  @IsNotEmpty({ message: 'Informe um email.' })
  @IsEmail({}, { message: 'Informe um endereço de email válido' })
  @IsString({ message: 'Informe um endereço de email válido' })
  email: string;

  @IsBoolean({})
  @IsOptional()
  isAdmin?: boolean;

  @Length(6, 12, { message: 'Sua senha deve conter de 6 a 12 caracteres' })
  @IsNotEmpty({ message: 'Informe uma senha' })
  @IsString({ message: 'Informe uma senha válida!' })
  password: string;

  @Length(6, 12, { message: 'Informe uma confirmação de senha válida' })
  @IsNotEmpty({ message: 'Confirme sua senha' })
  @IsString({ message: 'Informe uma confirmação de senha válida' })
  passwordConfirmation: string;

}
