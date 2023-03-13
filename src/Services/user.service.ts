import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OwnerDto, } from '../DOTs/owner.dto';
import { OwnerEntity } from '../entitys/owner.entity';

import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/entitys/user.entity';
import { UserDto } from 'src/DOTs/user.dto';




@Injectable()
export class UserService {
 
  constructor(
     @InjectRepository(UserEntity)
      private userRepo: Repository<UserEntity>,
      
      ){}
     
     


    
 
  
adduser(user:UserDto) {
        return this.userRepo.save(user);
 }    

  getUserByid(id) {
    return this.userRepo.findOneBy({id})
  }

  getUserByNumber(Number) {
    return this.userRepo.findOneBy({Number})
  }
  getallUser(  ): any {
    return  this.userRepo.find();
  }

  async  updateUser(Dto:UserDto,id){
    return this.userRepo.update(id,Dto)
  }

  DeleteUser(id){
    return this.userRepo.delete(id)
  }
     
  // deleteUserById(id){
  //   return this.ownerRepo.delete(id)
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
 

  // userExit(id):any{
  //   if(id==true) return "User Exit"
  //   else return "User not exit"
    
  // }




}
