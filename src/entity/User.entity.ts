import { Entity, ObjectIdColumn, ObjectId, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    _id: ObjectId

    @Column()
    deviceId: string
    
    @Column()
    macId: string
    
    @Column()
    googleId: string
    
}
