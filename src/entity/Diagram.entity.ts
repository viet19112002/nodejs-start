import { Entity, ObjectIdColumn, ObjectId, Column, PrimaryGeneratedColumn } from "typeorm";
import { BranchType } from "../types/branchs-type";

@Entity()
export class Diagram {
    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    _id: ObjectId

    @ObjectIdColumn()
    userId: ObjectId

    @ObjectIdColumn()
    Branchs: BranchType;

    @Column()
    title: string
    
    @Column()
    createdDate: Date
    
}