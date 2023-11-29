import { ObjectId } from "typeorm";
import { MissionType } from "../types/mission-type";
import { Note } from "../entity/Note.entity";
import { NoteEnums } from "../enums/note-enums";

export class NoteClass 
{
    _id : ObjectId;

    userId : ObjectId;

    groupId : ObjectId;

    title : string;

    mission : MissionType[];

    description : string;

    record : boolean;

    image : string;

    createdAt : Date;

    alertTime : Date;

    isHidden : boolean;

    theme : NoteEnums;

constructor(userId: ObjectId, groupId: ObjectId, title: string , mission: MissionType[] , description: string , record: boolean, image: string, createdAt: Date, alertTime: Date, isHidden: boolean, theme: NoteEnums)
{
    this.userId = userId;
    this.groupId = groupId;
    this.title = title;
    this.mission = mission;
    this.description = description;
    this.record = record;
    this.image = image;
    this.createdAt = createdAt;
    this.alertTime = alertTime;
    this.isHidden = isHidden;
    this.theme = theme;
}
}