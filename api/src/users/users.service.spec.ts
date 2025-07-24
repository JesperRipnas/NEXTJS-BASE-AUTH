import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { IUser } from './user.interface';
import { NotFoundException } from '@nestjs/common';
import { UuidService } from '../common/uuid/uuid.service';

describe('UsersService', () => {
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, UuidService],
    }).compile();

    userService = module.get<UsersService>(UsersService);
  });

  it('usershould be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('getUserById', () => {
    it('should return the user when found', () => {
      const mockUser: IUser = {
        uuid: '123',
      } as IUser;

      Object.defineProperty(userService, 'users', {
        value: [mockUser],
        writable: true,
      });

      const result = userService.getUserById('123');
      expect(result).toEqual(mockUser);
    });

    it('should throw NotFoundException when user is not found', () => {
      Object.defineProperty(userService, 'users', {
        value: [],
        writable: true,
      });

      expect(() => userService.getUserById('321')).toThrow(NotFoundException);
    });
  });
});
