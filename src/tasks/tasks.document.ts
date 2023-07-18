import { ApiProperty } from "@nestjs/swagger";

export class TaskDocument {
    // static collectionName = configService.get<string>('DB_NAME')
    static collectionName = 'tasks';
    
    @ApiProperty()
    id?: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;
}