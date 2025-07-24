import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UuidService } from '../common/uuid/uuid.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UuidService],
  exports: [UsersService],
})
export class UsersModule {
  /* comment */
}
