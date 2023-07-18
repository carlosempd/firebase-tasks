import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from 'src/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.taskService.findById(id);
    }

    @Get()
    findAll() {
        return this.taskService.findAll()
    }

    @Post()
    create() {
        return this.taskService.create({title: 'Segunda tarea', description: 'Esta es la primera tarea'});
    }

    @Put()
    update() {
        // return this.taskService.update()
    }
}
