import { Module } from '@nestjs/common';
import { AppController } from './interface/controller/app.controller';
import { AppService } from './application/service/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
