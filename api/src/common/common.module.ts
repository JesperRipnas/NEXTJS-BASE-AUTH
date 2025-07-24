import { Module } from '@nestjs/common';
import { UuidService } from './uuid/uuid.service';

@Module({
  providers: [UuidService],
  exports: [UuidService],
})
// eslint-disable-next-line prettier/prettier
export class CommonModule { }
