import { IsBoolean, IsDate, IsEnum, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';
import { NoteEnums } from '../enums/note-enums';
import { MissionType } from '../types/mission-type';
import { constants } from 'buffer';

export class NoteValidator {
  @IsNotEmpty()
  @IsString()
  userId: ObjectId;

  @IsNotEmpty()
  @IsString()
  groupId: ObjectId;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsObject()
  mission: MissionType;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsBoolean()
  record: boolean;

  @IsOptional()
  @IsString()
  image: string;

  @IsOptional()
  @IsDate()
  createdAt: Date;

  @IsOptional()
  @IsDate()
  alertTime: Date;

  @IsOptional()
  @IsBoolean()
  isHidden: boolean;

  @IsOptional()
  @IsEnum(NoteEnums)
  theme: NoteEnums;
  
constructor(
    userId: ObjectId,
    groupId: ObjectId,
    title: string,
    mission: MissionType,
    description: string,
    record: boolean,
    image: string,
    createdAt: Date,
    alertTime: Date,
    isHidden: boolean,
    theme: NoteEnums
    ) {
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
export class UpdateNoteDto extends NoteValidator {}