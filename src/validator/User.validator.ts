import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserValidator {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsOptional()
  @IsString()
  deviceId: string;

  @IsOptional()
  @IsString()
  macId: string;

  @IsOptional()
  @IsString()
  googleId: string;

  constructor(
    userName: string,
    password: string,
    fullName: string,
    deviceId: string,
    macId: string,
    googleId: string
  ) {
    this.userName = userName;
    this.password = password;
    this.fullName = fullName;
    this.deviceId = deviceId;
    this.macId = macId;
    this.googleId = googleId;
  }
}

export class UpdateUserDto extends UserValidator {}
