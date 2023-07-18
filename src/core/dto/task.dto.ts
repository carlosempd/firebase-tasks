import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class TaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    description?: string;
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;
}