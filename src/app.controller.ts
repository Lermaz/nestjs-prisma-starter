import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService, IHealthcheck } from './app.service';

@Controller('healthcheck')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Healthcheck status',
    schema: {
      properties: {
        status: {
          type: 'number',
          description: 'ststus',
          example: 200,
        },
        service_name: {
          type: 'string',
          example: process.env.npm_package_name,
        },
        version: {
          type: 'string',
          example: process.env.npm_package_version,
        },
        message: {
          type: 'string',
          example: 'Health check OK',
        },
        hostname: {
          type: 'string',
          example: 'localhost',
        },
      },
    },
  })
  /**
   * Returns the healthcheck status of the application.
   *
   * @return {IHealthcheck} The healthcheck status of the application.
   */
  healthcheck(): IHealthcheck {
    return this.appService.getHealthCheck();
  }
}
