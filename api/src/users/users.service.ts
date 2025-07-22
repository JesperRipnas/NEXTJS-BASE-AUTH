import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from './user.interface';

@Injectable()
export class UsersService {
  //MOCK DATA
  private readonly users: IUser[] = [
    {
      uuid: '8a6e0804-2bd0-4672-b79d-d97027f9071a',
      name: 'Jesper',
      email: 'jesper@gmail.com',
      password: 'asdasd',
      role: 'ADMINISTRATOR',
    },
  ];

  getAllUsers(): IUser[] {
    return this.users;
  }

  getUserById(uuid: string): IUser | NotFoundException {
    const user = this.users.find((user) => user.uuid === uuid);
    if (!user) throw new NotFoundException(`User with id ${uuid} not found`);
    return user;
  }

  createUser(user: IUser): IUser {
    // should generate uuid + use user object + set role
    this.users.push(user);
    return user;
  }
}
