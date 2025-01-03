import { IsEmail, IsOptional, IsString } from "class-validator";

export class EditUserDto{
    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    firstname?: string;

    @IsOptional()
    @IsString()
    lastname?: string;
}