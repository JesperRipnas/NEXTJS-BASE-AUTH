import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import {
  ICreateUserResponse,
  IUpdateUserResponse,
  IUser,
} from './user.interface';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    // just a comment
  }

  @Get()
  getAllUsers(): IUser[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): IUser {
    return this.usersService.getUserById(id);
  }

  @Post('create')
  createUser(@Body() user: CreateUserDto): ICreateUserResponse {
    const createdUser = this.usersService.createUser(user);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'User successfully created',
      data: createdUser,
    };
  }

  @Post(':id')
  updateUser(@Body() user: UpdateUserDto): IUpdateUserResponse {
    const updatedUser = this.usersService.updateUser(user);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'User successfully updated',
      data: updatedUser,
    };
  }
}
