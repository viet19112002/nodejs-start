import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm"
import { MissionType } from "../types/mission-type";
import { TaskEnums } from "../enums/task-enums";


@Entity()
export class Task {

    @ObjectIdColumn()
    _id: ObjectId;

    @ObjectIdColumn()
    userId: ObjectId;

    @Column()
    title: string;
    
    @Column()
    mission: MissionType[];
    
    @Column()
    ischeck: string;

    @Column()
    AlertRepeat: TaskEnums;


}
