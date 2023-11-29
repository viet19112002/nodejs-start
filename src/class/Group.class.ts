import { ObjectId } from 'typeorm';


export class GroupClass {
    _id: ObjectId

    userId: ObjectId

    title: string
    
    constructor(userId: ObjectId, title: string) {
        this.userId = userId;
        this.title = title;
    }
}