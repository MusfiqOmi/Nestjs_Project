import {  IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength} from "class-validator";



export class UserDto{
    id :number
    @IsNotEmpty({message:"Enter your Name"})
    @IsString({message:"Name must be String"})
    Name:string;
    @IsNotEmpty({message:"Enter your naem"})
    Number:string
    @IsNotEmpty({message:"Enter your Locatoon"})
    @IsString({message:"Location must be String"})
    Location:string
    @IsNotEmpty({message:"Enter your Password"})
    @IsString({message:"Password must be String"})
    Password:string
    @IsEmail()
    Email:string


}