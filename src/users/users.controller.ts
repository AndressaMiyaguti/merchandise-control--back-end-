/* eslint-disable prettier/prettier */
import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Delete,
  Patch,
  
} from '@nestjs/common'; //UseGuards,
import { User } from '@prisma/client';
import { UserRole } from './enum/role.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
//import { Role } from 'src/auth/role.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
//import { GuardGuard } from '../auth/guard.guard'
 //import { AuthGuard } from '@nestjs/passport';


@Controller('user')
export class UsersController {
  constructor(private service: UsersService) {}
  
  @Post('create')
  createUserGuide(@Body() data: CreateUserDto): Promise<User> {
    delete data.passwordConfirmation;
    return this.service.create(data, UserRole.USER);
  }

  @Post('create-admin')
  //@Role(UserRole.ADMIN)
  //@UseGuards(AuthGuard(), GuardGuard)
  createAdmin(@Body() data: CreateUserDto): Promise<User> {
    delete data.passwordConfirmation;
    return this.service.create(data, UserRole.ADMIN);
  }

  
  @Patch('update/:id')
   //@UseGuards(AuthGuard())
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.service.update(id, data)
  }

  
  @Patch('update-adm/:id')
   //@UseGuards(AuthGuard())
  updateAdm(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.service.update(id, data)
  }
   
  
  @Get('find/:id')
   //@UseGuards(AuthGuard())
  findOne(@Param('id') id: string): Promise<User> {
    return this.service.findOne(id);
  }

  
  @Get('find-all')
  //@UseGuards(AuthGuard())
  findMany() {
    return this.service.findMany();
  }

 
  @Delete('delete/:id')
  //@Role(UserRole.ADMIN)
  //@UseGuards(AuthGuard(), GuardGuard)
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }

}
