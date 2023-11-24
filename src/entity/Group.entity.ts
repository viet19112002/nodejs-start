import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm"

@Entity()
export class Group {

    @ObjectIdColumn()
    _id: ObjectId

    @ObjectIdColumn()
    userId: ObjectId

    @Column()
    title: string

}
