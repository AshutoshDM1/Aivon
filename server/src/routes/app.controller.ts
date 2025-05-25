import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService, WaitlistService } from '../controllers/app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly waitlistService: WaitlistService,
  ) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  getHello(): object {
    return this.appService.getWelcomeMessage();
  }

  @Post('/waitlist')
  @HttpCode(HttpStatus.OK)
  async sendWaitlistEmail(@Body() body: { email: string }): Promise<void> {
    await this.waitlistService.sendWaitlistEmail(body.email);
  }
}
