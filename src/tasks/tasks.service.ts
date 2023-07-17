import { Injectable } from '@nestjs/common';
import { MockService } from '../core/services/mock.service';

@Injectable()
export class TasksService {
    constructor (private mockService: MockService) {}

    findAll() {
        return this.mockService.getTasks();
    }
    
}
