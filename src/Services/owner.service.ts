import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OwnerDto, } from '../DOTs/owner.dto';
import { OwnerEntity } from '../entitys/owner.entity';

import * as bcrypt from 'bcrypt';
import { MailerService } from '@nestjs-modules/mailer';
import { UserDto } from 'src/DOTs/user.dto';




@Injectable()
export class OwnerService {
  // adduser(dto: UserDto): any {
  //   throw new Error('Method not implemented.');
  // }
 // mailerService: any;
 
  constructor(
     @InjectRepository(OwnerEntity)
      private ownerRepo: Repository<OwnerEntity>,
      private mailerService: MailerService
      ){}
     
      Profile() :string {
        return "this is the owner profile";
      }


      async OwnerSingUp(ownerDto :OwnerDto){

        const salt =await bcrypt.genSalt();
        const hasse =await bcrypt .hash(ownerDto.Password,salt);
        ownerDto.Password=hasse;
        return this.ownerRepo.save(ownerDto);
      }

      async OwnerSignIn(ownerdto:OwnerDto){
        console.log(ownerdto.Password);
    const data= await this.ownerRepo.findOneBy({Email: ownerdto.Email});
    const isMatch= await bcrypt.compare(ownerdto.Password, data.Password);
    if(isMatch) {
    return  data.id;
    
    }
    else {
        return 0;
    }
    
    }


    async update(ownerDto: OwnerDto, id) {

      const salt =await bcrypt.genSalt();
        const hasse =await bcrypt .hash(ownerDto.Password,salt);
        ownerDto.Password = hasse;
      return this.ownerRepo.update(id, ownerDto);
  }
 

    // async sendEmail(mydata,file){
    //   return   await this.mailerService.sendMail({
    //          to: mydata.email,
    //          subject: mydata.subject,
    //          text: mydata.text,
    //          attachments: [
    //           {
    //             filename: file.originalname,
    //             content: file.buffer,
    //             encoding: 'base64'
    //           }
    //         ]
            
    //        });
     
    //  }
    async sendEmail(mydata, file){
      if (!mydata.email) {
        throw new Error('Recipient email address is missing');
      }
      const attachments = [];
      if (file) {
        attachments.push({
          filename: file.originalname,
          content: file.buffer,//temporary storage area for data in memory.
          encoding: 'base64' //Base64 encoding is commonly used to transmit binary data over text-based protocols 
        });
      }
      return await this.mailerService.sendMail({
        to: mydata.email,
        subject: mydata.subject,
        text: mydata.text,
        attachments: attachments
      });
    }

  //     deleteOwnerById(id){
  //   return this.ownerRepo.delete(id)
  // }

  getOwnerById(id) { 
    return this.ownerRepo.findOneBy({id})
  }


  DeleteOwner(id){
    return this.ownerRepo.delete(id)
  }


  //   insert(user:OwnerDto) {
  //   return this.ownerRepo.save(user);
  // }
  // getUserByid(id) {
  //   return this.ownerRepo.findOneBy({id})
  // }
  // getallUser(  ): any {
  //   return  this.ownerRepo.find();
  // }
  // searchUser(id) { 
  //   return this.ownerRepo.findOneBy({id})
  // }
  // updateUSer(Name,location,id):any{
  //   return this.ownerRepo.update(id,{Name:Name,location:location})
  // }

  // // done



  // adduser(add:UserDto):any{
  //   return "Name is :"+add.Name+"  and Numbner is : " + add.Number;

  // }

  // getuser(number): any {
  //   return "Get single  user "+number;
  // }
 
  // searchuser(number):any { 
  //   return "search the user "+number;
  // }
  // updateuser(number):any{
  //   return 
  // }
  // deleteuser(number):any{
  //   return "delete user "+number;
  // }

  // userExit(id):any{
  //   if(id==true) return "User Exit"
  //   else return "User not exit"
    
  // }




}
