import { Column, Entity, ObjectId, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    _id: ObjectId
    
    @Column()
    userName : string
    
    @Column()
    password : string
    
    @Column()
    fullName : string

    @Column()
    deviceId: string
    
    @Column()
    macId: string
    
    @Column()
    googleId: string
    
}

