import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');
  private readonly enableLogs: boolean;

  constructor(private readonly configService: ConfigService) {
    // this.enableLogs = this.configService.get('ENABLE_HTTP_LOGS') ?? false;
  }

  use(req: Request, res: Response, next: NextFunction): void {
    // if (!this.enableLogs) return next();
    const { method, originalUrl } = req;
    const start = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const duration = Date.now() - start;

      this.logger.log(`${method} ${originalUrl} ${statusCode} - ${duration}ms`);
    });

    next();
  }
}
