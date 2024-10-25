import { Module } from '@nestjs/common';
import { AppService } from './application/service/app.service';
import { AppController } from './infra/controller/app.controller';
import { TaskProviders } from './infra/provider/task.provider';
import { DatabaseProviders } from './infra/provider/database.provider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    ...DatabaseProviders,
    ...TaskProviders
  ],
})
class AppModule {}

export { AppModule }
