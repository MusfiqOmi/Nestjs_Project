import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseEntity } from 'src/entitys/house.entity';
import { HouseService } from 'src/Services/house.service';
import { HouseController } from './house.controller';



@Module({
  imports: [TypeOrmModule.forFeature([HouseEntity])],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule{}
