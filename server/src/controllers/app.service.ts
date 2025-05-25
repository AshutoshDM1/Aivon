import { Injectable } from '@nestjs/common';
import { emailService } from 'src/utils/waitlistEmail';

@Injectable()
export class AppService {
  getWelcomeMessage(): object {
    return {
      message: 'Welcome to Aivon API',
      status: 'success',
      timestamp: new Date().toISOString(),
    };
  }
}

export class WaitlistService {
  async sendWaitlistEmail(email: string): Promise<void> {
    await emailService.sendWaitlistEmail(email);
  }
}
