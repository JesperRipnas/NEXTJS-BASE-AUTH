import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { IUser } from './user.interface';
import { UsersService } from './users.service';

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
  getUserById(@Param('id') id: string): IUser | NotFoundException {
    return this.usersService.getUserById(id);
  }
}
