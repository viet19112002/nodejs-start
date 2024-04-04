import { IsNotEmpty, IsOptional, IsString } from "class-validator"
import { ObjectId } from "typeorm"

export class GroupValidator {
    @IsNotEmpty()
    @IsString()       
    userId: ObjectId

    @IsOptional()
    @IsString()
    title: string
    constructor(
        userId: ObjectId,
        title: string
    ) {
        this.userId = userId
        this.title = title
    }
}
export class UpdateGroupDto extends GroupValidator {}