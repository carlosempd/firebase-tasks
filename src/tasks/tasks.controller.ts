import { 
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    UsePipes,
    ValidationPipe 
} from '@nestjs/common';
import { TaskDto, UpdateTaskDto } from 'src/core/dto/task.dto';
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
    @UsePipes(new ValidationPipe())
    create(@Body() body: TaskDto) {
        return this.taskService.create(body);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
        return this.taskService.update(id, body);
    }
}
