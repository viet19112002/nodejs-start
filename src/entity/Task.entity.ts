import { Entity, ObjectIdColumn, ObjectId, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { MissionType } from "../types/mission-type";
import { TaskEnums } from "../enums/task-enums";


@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    _id: ObjectId;

    @ObjectIdColumn()
    userId: ObjectId;

    @Column()
    title: string;
    
    @Column()
    mission: MissionType[];
    
    @Column()
    AlertTime: Date;

    @Column()
    ischeck: string;

    @Column()
    AlertRepeat: TaskEnums;


}
