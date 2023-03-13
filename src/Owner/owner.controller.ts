import { Body, Controller, Delete, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseBoolPipe, ParseFilePipe, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Session, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { ExpressAdapter, FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { OwnerDto } from '../DOTs/owner.dto';
import { UserDto } from '../DOTs/user.dto';
import { OwnerService } from '../Services/owner.service';
import { HouseService } from '../Services/house.service'
import { SessionGuard } from './session.guard';
import * as fs from 'fs';
//import * as moment from 'moment'; 
import { Request, Response } from 'express';
import { diskStorage } from 'multer';
import session from 'express-session';
import { UserService } from 'src/Services/user.service';
import { HouseDto } from 'src/DOTs/house.dto'



@Controller('owner')
export class OwnerController {
  //userCervice: any;
  
  //constructor(private readonly houseServices: houseService),
  constructor(
    private readonly ownerService: OwnerService,
   private readonly houseService: HouseService,
   private readonly userService :UserService
  ) { }


// owner part

  @UseGuards(SessionGuard)
  @Get("/getindex")
  Profile(@Session() session ): any {
    console.log(session.Email);
    return this.ownerService.Profile();
  }

  @Post('/signup')
  @UseInterceptors(FileInterceptor('file', 
    {
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          cb(null, Date.now() + file.originalname)
        }
      })

    }))
    OwnerSingUp(@Body() ownerdto: OwnerDto, @UploadedFile(new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 160000000 }),
      new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
    ],
  }),) file: Express.Multer.File) {

    ownerdto.fileName = file.filename;

    return this.ownerService.OwnerSingUp(ownerdto);
    //console.log(file)
  }


  @Get('/OwnerSignIn')
OwnerSignIn(@Session() session, @Body() ownerdto:OwnerDto)
{


if(this.ownerService.OwnerSignIn(ownerdto))
{
  session.Email = ownerdto.Email;

  console.log(session.Email);
  return {message:" login success"};

}
else
{
  return {message:"login  faild"};
}
 
}

 @UseGuards(SessionGuard)
@Get("/getOwnerById/:id")
getOwnerById(@Param ("id",ParseIntPipe) id:number): any {
  return this.ownerService.getOwnerById(id);
}
    


    @UseGuards(SessionGuard)
    @Delete("/deleteOwner/:id")
    @UsePipes(new ValidationPipe)
    DeleteOwner(@Param ("id") id:number):any{
      return this.ownerService.DeleteOwner(id);

    }
    @UseGuards(SessionGuard)
    @Put("/update/:id")
    @UsePipes(new ValidationPipe())
    async update(@Body() ownerdto: OwnerDto, @Param('id') id: number) {
      return this.ownerService.update(ownerdto, id);
    }






 






                  //// house part   /////

@UseGuards(SessionGuard)
    @Post("/addHouse")
    @UseInterceptors(FileInterceptor('file', 
    {
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          cb(null, Date.now() + file.originalname)
        }
      })

    }))
    @UseGuards(SessionGuard)
    AddHouse(@Body() houseDto: HouseDto, @UploadedFile(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 160000000 }),
        new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
      ],
    }),) file: Express.Multer.File) {
  
      houseDto.Image = file.filename;
  
      return this.houseService.AddHouse(houseDto);
      console.log(file)
    }


    @UseGuards(SessionGuard)
     @Get("/allhouse")
     getallHouse(): any {
      return this.houseService.getallHouse();
    }
    @UseGuards(SessionGuard)
    @Get("getHouseByCategory/:Category")
    getHouseByCategory(@Param("Category"  ) Category:string): any {
      return this.houseService.getHouseByCategory(Category);
    }
    @UseGuards(SessionGuard)
    @Get("/getHouseById/:id")
    getHouseById(@Param ("id",ParseIntPipe) id:number): any {
      return this.houseService.getHouseById(id);
    }



    @UseGuards(SessionGuard)
    @Get("SearchHouseByCategory/:Category")
    SearchHouseByCategory(@Param("Category"  ) Category:string): any {
      return this.houseService.SearchHouseByCategory(Category);
    }


   @UseGuards(SessionGuard)
    @Get("/searchHouseById/:id")
    SearchHouseById(@Param ("id",ParseIntPipe) id:number): any {
      return this.houseService.SearchHouseById(id);
    }



    @UseGuards(SessionGuard)
    @Delete("/deleteHouse/:id")
    @UsePipes(new ValidationPipe)
    DeleteHouse(@Param ("id") id:number):any{
      return this.houseService.DeleteHouse(id);

    }



    @UseGuards(SessionGuard)
    @Put("/updatehouse/:id")
   @UsePipes(new ValidationPipe()) 
   async  updateHouser(

      @Body () houseDto:HouseDto,
      @Param("id") id:number
     
      ){
      return this.houseService.updateHouser(houseDto,id);
    }

   

    //@UseGuards(SessionGuard)
    @Post('/sendemail')
    @UseInterceptors(FileInterceptor('file'))
    async sendEmail(@Body() mydata, @UploadedFile() file){
        return await this.ownerService.sendEmail(mydata, file);
    }
  



                                  ///// user start  

 @UseGuards(SessionGuard)
    @Post("/adduser")
    @UsePipes(new ValidationPipe())
    adduser(@Body() dto:UserDto):any {
      return this.userService.adduser(dto);
    }


    @UseGuards(SessionGuard)
    @Get("getuserbyid/:id")
    getUserByid(@Param("id") id:number): any {
      return this.userService.getUserByid(id);
    }




    @UseGuards(SessionGuard)
    @Put("/updateuser/:id")
    @UsePipes(new ValidationPipe()) 
    async  updateUser(
       @Body () Dto:UserDto,
       @Param("id") id:number
      
       ){
       return this.userService.updateUser(Dto,id);
     }


     @UseGuards(SessionGuard)
       @Delete("/deleteuser/:id")
       DeleteUser(@Param ("id") id:number):any{
      return this.userService.DeleteUser(id);

    }

   

    










}


