import { ObjectId } from "typeorm"

export class UserClass {
    _id: ObjectId

    deviceId: string
    
    macId: string
    
    googleId: string

    constructor(deviceId: string, macId: string, googleId: string) {
        this.deviceId = deviceId
        this.macId = macId
        this.googleId = googleId
    }

    
}