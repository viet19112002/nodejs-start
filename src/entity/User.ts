import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm"

@Entity()
export class User {

    @ObjectIdColumn()
    _id: ObjectId

    @Column()
    deviceId: string
    
    @Column()
    macId: string
    
    @Column()
    googleId: string
    
}
