import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getHello(): object {
    return {
      message: this.appService.getHello(),
      status: 'success',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('api/user')
  @HttpCode(HttpStatus.OK)
  getUser(): object {
    return {
      message: this.appService.getUsers(),
      status: 'success',
      timestamp: new Date().toISOString(),
    };
  }
  @Get('health')
  @HttpCode(HttpStatus.OK)
  getHealth(): object {
    return {
      status: 'healthy',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }

  @Get('api/users')
  @HttpCode(HttpStatus.OK)
  getUsers(): object {
    return {
      data: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
      ],
      total: 2,
      status: 'success',
    };
  }
}
