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
import { 
    ApiBody,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags 
} from '@nestjs/swagger';
import { TaskDto, UpdateTaskDto } from 'src/core/dto/task.dto';
import { TasksService } from 'src/tasks/tasks.service';
import { TaskDocument } from './tasks.document';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get(':id')
    @ApiOperation({ summary: 'Get a task by Id', description: 'Get task using its Id' })
    @ApiOkResponse({ description: 'Ok Response', type: TaskDocument })
    findById(@Param('id') id: string) {
        return this.taskService.findById(id);
    }

    @Get()
    @ApiOperation({ summary: 'Get all tasks', description: 'Get a list of all tasks' })
    @ApiOkResponse({ description: 'Ok Response', type: [TaskDocument] })
    findAll() {
        return this.taskService.findAll()
    }

    @Post()
    @ApiOperation({ summary: 'Create a task', description: 'Create a new task' })
    @ApiCreatedResponse({ description: 'Ok Response', type: TaskDocument })
    @UsePipes(new ValidationPipe())
    create(@Body() body: TaskDto) {
        return this.taskService.create(body);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a task', description: 'Update a task of Id specified' })
    @ApiOkResponse({ description: 'Ok Response', type: TaskDocument })
    @UsePipes(new ValidationPipe())
    update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
        return this.taskService.update(id, body);
    }
}
