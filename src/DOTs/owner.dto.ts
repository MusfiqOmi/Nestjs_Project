import {  IsNotEmpty, IsNumber, IsString, MaxLength, MinLength} from "class-validator";

export class OwnerDto{
   
 
    id:number;

    @IsString({message:"name must be string"})
    @IsNotEmpty({message:"enter your name"})
    @MaxLength(100,{message:"nmae max length is 10"})
    @MinLength(3,{message:"name Min length is 3"})
    Name:string;

    Password:string;
    Email:string;

    @IsNotEmpty({message:"Enter your Location"})
    @IsString({message:"Location must be String"})
    location:string;
    fileName: string;
    //  static Name: string;


}

