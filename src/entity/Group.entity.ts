import { Entity, ObjectIdColumn, ObjectId, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    _id: ObjectId

    @ObjectIdColumn()
    userId: ObjectId

    @Column()
    title: string
    

}
