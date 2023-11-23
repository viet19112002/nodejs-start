import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm";
import { BranchType } from "../types/branchs-type";

@Entity()
export class Diagram {

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