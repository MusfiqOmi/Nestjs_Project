import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { HouseEntity } from 'src/entitys/house.entity';
import { HouseDto } from 'src/DOTs/house.dto';





@Injectable()
export class HouseService {
 
  constructor(
     @InjectRepository(HouseEntity)
      private houseRepo: Repository<HouseEntity>,
      
      ){}
 
  
     async AddHouse(house:HouseDto) {
    return this.houseRepo.save(house);
     }
 
  async getHouseByCategory(@Param("Category") Category: string) {
    const houses = await this.houseRepo.find({ where: { Category } });
    return houses;
  }
 

  getHouseById(id: number) {
    return this.houseRepo.findOneBy({id})
  }
      getallHouse(): any {
        return  this.houseRepo.find();
      }

 SearchHouseById(id: number) {
    return this.houseRepo.findOneBy({id})
  }
      async SearchHouseByCategory(@Param("Category") Category: string) {
        const houses = await this.houseRepo.find({ where: { Category } });
        return houses;
      }


      DeleteHouse(id){
    return this.houseRepo.delete(id)
  }


 async  updateHouser(houseDto:HouseDto,id){
    return this.houseRepo.update(id,houseDto)
  }
     

  



 


}
