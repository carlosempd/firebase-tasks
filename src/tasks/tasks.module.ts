import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { MockService } from 'src/core/services/mock.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, MockService]
})
export class TasksModule {}
