
import { Entity, Column, ObjectIdColumn, ObjectId, PrimaryGeneratedColumn } from "typeorm";
import { MissionType } from "../types/mission-type";
import { NoteEnums } from "../enums/note-enums";

@Entity()
  export class Note {
    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    _id: ObjectId;

    @ObjectIdColumn()
    userId: ObjectId;
    
    @ObjectIdColumn()
    groupId: ObjectId;
  
    @Column()
    title: string;
  
    @Column()
    mission: MissionType;

    @Column()
    description: string;
  
    @Column()
    record: boolean;
  
    @Column()
    image: string;
  
    @Column()
    createdAt: Date;
  
    @Column()
    alertTime: Date;

    @Column()
    isHidden: boolean;

    @Column()
    theme: NoteEnums;
  }