import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { HouseDto } from 'src/DOTs/House.dto';
import { HouseService } from 'src/Services/house.service';
import { OwnerDto } from '../DOTs/owner.dto';
import{ UserDto } from '../DOTs/user.dto';
import { OwnerService } from '../Services/owner.service';

@Controller('owner')
export class HouseController {
  constructor(private readonly ownerService: HouseService) {}

 
  // @Post("/addHouse")
  // @UsePipes(new ValidationPipe)
  // AddHouse(@Body() user:HouseDto):any {
  //   return this.ownerService.insert(user);
  // }

  
  



  
}
