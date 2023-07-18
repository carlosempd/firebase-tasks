import { Injectable } from '@nestjs/common';
import { ITask } from '../interfaces/task';

@Injectable()
export class MockService {
    getTasks(): Promise<ITask[]> {
        return Promise.resolve([
            {
                id: 1,
                title:'mock task',
                description: 'this is a mock task'
            },
            {
                id: 2,
                title:'Clean home',
                description: 'this is a mock task description'
            },
            {
                id: 3,
                title:'Buy food',
                description: 'this is a mock task description'
            },
            {
                id: 4,
                title:'Push changes to repo',
                description: 'this is a mock task description'
            },
            {
                id: 5,
                title:'Interview for a job',
                description: 'this is a mock task description'
            },
            {
                id: 6,
                title:'Delete all unused cloud services',
                description: 'this is a mock task description'
            },
            {
                id: 7,
                title:'Edit videos',
                description: 'this is a mock task description'
            },
        ])
    }
}
