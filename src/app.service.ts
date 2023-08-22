import { Injectable } from '@nestjs/common';
import { hostname } from 'os';
import * as packageJson from '../package.json';
@Injectable()
export class AppService {
  /**
   * Retrieves the health check information.
   *
   * @return {IHealthcheck} The health check information.
   */
  getHealthCheck(): IHealthcheck {
    return {
      status: 200,
      service_name: packageJson.name,
      version: packageJson.version,
      message: 'Health check OK',
      hostname: hostname(),
    };
  }
}

export interface IHealthcheck {
  status: number;
  service_name: string;
  version: string;
  message: string;
  hostname: string;
}
