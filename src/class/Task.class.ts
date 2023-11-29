import { ObjectId } from 'typeorm';
import { MissionType } from '../types/mission-type';
import { TaskEnums } from '../enums/task-enums';

export class TaskClass
{
    _id : ObjectId;

    userId : ObjectId;

    title : string;

    mission : MissionType[];
    
    alertTime : Date;

    ischeck : string;



    AlertRepeat : TaskEnums;

    constructor(userId: ObjectId, title: string , mission: MissionType[] , alertTime: Date ,  ischeck: string, AlertRepeat: TaskEnums )
    {
        this.userId = userId;
        this.title = title;
        this.mission = mission;
        this.alertTime = alertTime;
        this.ischeck = ischeck;
        this.AlertRepeat = AlertRepeat;
    }
}