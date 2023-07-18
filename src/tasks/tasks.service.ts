import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { MockService } from '../core/services/mock.service';
import { TaskDocument } from './tasks.document';
import { CollectionReference } from '@google-cloud/firestore';

@Injectable()
export class TasksService {
    constructor (
        private mockService: MockService,
        @Inject(TaskDocument.collectionName)
        private tasksCollection: CollectionReference<TaskDocument>
    ) {}

    async findById(id: string): Promise<TaskDocument> {
        const docReference = this.tasksCollection.doc(id);
        const taskDocument = await docReference.get();
        if (!taskDocument.exists){
            throw new BadRequestException({
                message: 'Not found'
            });
        }
        return taskDocument.data();
    }

    async findAll(): Promise<TaskDocument[]> {
        const snapshot = await this.tasksCollection.get();
        const tasks: TaskDocument[] = [];
        snapshot.forEach(doc => {
            const task = doc.data();
            task.id = doc.id;
            tasks.push(task)
        })
        return tasks;
    }

    async create(data: { title: string, description: string }): Promise<TaskDocument> {
        // const docReference = this.tasksCollection.doc(data.title);
        // await docReference.set({ ...data });
        // const taskDocument = await docReference.get();
        // const task = taskDocument.data();
        // return task
        const docReference = await this.tasksCollection.add({...data});
        const taskDocument = await docReference.get();
        return { id: taskDocument.id, ...taskDocument.data() };
    }

    async update(id: string, data): Promise<TaskDocument> {
        const docReference = this.tasksCollection.doc(id);
        await docReference.update(data);
        const taskDocument = await docReference.get();
        return taskDocument.data();
    }
    
}
