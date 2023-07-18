
export class TaskDocument {
    // static collectionName = configService.get<string>('DB_NAME')
    static collectionName = 'tasks';
    
    id?: string;
    title: string;
    description: string;
}