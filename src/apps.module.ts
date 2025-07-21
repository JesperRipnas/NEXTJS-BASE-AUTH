import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
      validationSchema: Joi.object({
        ENABLE_HTTP_LOGS: Joi.boolean().required(),
        DATABASE_HOST: Joi.string().hostname().required(),
        DATBASE_PORT: Joi.number().default(5432),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppsModule implements NestModule {
  constructor(private readonly configService: ConfigService) {
    // comment just to avoid lint error
  }
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req: Request, res: Response, next: NextFunction): any => {
        const middleware = new LoggerMiddleware(this.configService);
        middleware.use(req, res, next);
      })
      .forRoutes('*');
  }
}
