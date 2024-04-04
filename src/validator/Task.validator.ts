import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ObjectId } from "typeorm";
import { MissionType } from "../types/mission-type";
import { TaskEnums } from "../enums/task-enums";

export class TaskValidator {

    @IsOptional()
    @IsString()
    userId: ObjectId;

    @IsOptional()
    @IsString()
    title: string;
    
    @IsOptional()
    @IsString()
    mission: MissionType[];
    
    @IsOptional()
    @IsString()
    AlertTime: Date;

    @IsOptional()
    @IsString()
    ischeck: string;

    @IsOptional()
    @IsString()
    AlertRepeat: TaskEnums;
    
    constructor(
        userId: ObjectId,
        title: string,
        mission: MissionType[],
        AlertTime: Date,
        ischeck: string,
        AlertRepeat: TaskEnums
    ) {
        this.userId = userId;
        this.title = title;
        this.mission = mission;
        this.AlertTime = AlertTime;
        this.ischeck = ischeck;
        this.AlertRepeat = AlertRepeat;
    }
}
export class UpdateTaskDto extends TaskValidator {}
