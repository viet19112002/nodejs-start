import { ObjectId } from "typeorm"

export class User {
    _id: ObjectId

    deviceId: string
    
    macId: string
    
    googleId: string
}