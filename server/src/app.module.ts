import { Module } from '@nestjs/common';
import { AppController } from './routes/app.controller';
import { AppService, WaitlistService } from './controllers/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, WaitlistService],
})
export class AppModule {}
