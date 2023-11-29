
import { ObjectId } from "typeorm"
import { BranchType } from "../types/branchs-type";

export class DiagramClass {
    _id: ObjectId
    userId: ObjectId;
    Branchs: BranchType;
    title: string;
    CreatedDate: Date;

constructor(userId: ObjectId, Branchs: BranchType, title: string, CreatedDate: Date) {
    this.userId = userId
    this.Branchs = Branchs
    this.title = title
    this.CreatedDate = CreatedDate
    }
}