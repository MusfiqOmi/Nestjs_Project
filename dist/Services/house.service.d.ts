import { Repository } from 'typeorm';
import { HouseEntity } from 'src/entitys/house.entity';
import { HouseDto } from 'src/DOTs/house.dto';
export declare class HouseService {
    private houseRepo;
    constructor(houseRepo: Repository<HouseEntity>);
    AddHouse(house: HouseDto): Promise<HouseDto & HouseEntity>;
    getHouseByCategory(Category: string): Promise<HouseEntity[]>;
    getHouseById(id: number): Promise<HouseEntity>;
    getallHouse(): any;
    SearchHouseById(id: number): Promise<HouseEntity>;
    SearchHouseByCategory(Category: string): Promise<HouseEntity[]>;
    DeleteHouse(id: any): Promise<import("typeorm").DeleteResult>;
    updateHouser(houseDto: HouseDto, id: any): Promise<import("typeorm").UpdateResult>;
}
