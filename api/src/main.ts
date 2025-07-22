import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppsModule } from './apps.module';

async function bootstrap() {
  const app = await NestFactory.create(AppsModule);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}
void bootstrap();
