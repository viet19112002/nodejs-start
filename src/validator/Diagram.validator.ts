import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { BranchType } from "../types/branchs-type";
import { ObjectId, ObjectIdColumn } from "typeorm";

export class DiagramValidator {

    @IsNotEmpty()
    @IsString()
    userId: ObjectId

    @ObjectIdColumn()
    Branchs: BranchType;

    @IsOptional()
    @IsString()
    title: string
    
    @IsNotEmpty()
    @IsString()
    createdDate: Date
    
    constructor(
        userId: ObjectId,
        Branchs: BranchType,
        title: string,
        createdDate: Date
    ) {
        this.userId = userId
        this.Branchs = Branchs
        this.title = title
        this.createdDate = createdDate
    }
}
export class UpdateDiagramDto extends DiagramValidator {}