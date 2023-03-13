import {  IsNotEmpty, IsNumber, IsString, MaxLength, MinLength} from "class-validator";



export class HouseDto{
    id :number
    @IsNotEmpty({message:"Enter product  Name"})
    @IsString({message:"Name must be String"})
    Name:string;
    
    Price:number
    @IsNotEmpty({message:"Enter your Category"})
    @IsString({message:"Category must be String"})
    Category:string
    @IsNotEmpty({message:"Enter your Description"})
    @IsString({message:"Description must be String"})
    Description:string
    Image:string;
  


}