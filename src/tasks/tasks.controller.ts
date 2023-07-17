import { Controller, Get } from '@nestjs/common';
import { TasksService } from 'src/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get()
    findAll() {
        return this.taskService.findAll()
    }
}
