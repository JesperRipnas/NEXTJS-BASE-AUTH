import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IUser, IUserPublic } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UuidService } from '../common/uuid/uuid.service';

@Injectable()
export class UsersService {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly uuidService: UuidService) { }

  //MOCK DATA UNTIL DB INTEGRATION
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

  getUserById(uuid: string): IUser {
    const user = this.users.find((user) => user.uuid === uuid);
    if (!user) throw new NotFoundException(`User with id ${uuid} not found`);
    return user;
  }

  createUser(user: CreateUserDto): IUserPublic {
    const userExist = this.users.some(
      (existingUser) =>
        existingUser.email.toLowerCase() === user.email.toLowerCase(),
    );

    if (userExist) {
      throw new ConflictException('User already exist');
    }

    // Should check in DB if uuid is unique. If not, we need to generate a new one from the service
    const updatedUser: IUser = {
      uuid: this.uuidService.generate(),
      ...user,
    };
    this.users.push(updatedUser);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...publicUser } = updatedUser;
    return publicUser;
  }

  updateUser(user: UpdateUserDto): IUserPublic {
    const userExist = this.users.some(
      (existingUser) => existingUser.uuid === user.uuid,
    );

    if (!userExist) {
      throw new NotFoundException('User not found');
    }

    const updatedUser: IUser = {
      ...user,
      role: 'USER',
      password: 'default',
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...publicUser } = updatedUser;
    return publicUser;
  }
}
