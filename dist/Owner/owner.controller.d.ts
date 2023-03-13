/// <reference types="multer" />
import { OwnerDto } from '../DOTs/owner.dto';
import { UserDto } from '../DOTs/user.dto';
import { OwnerService } from '../Services/owner.service';
import { HouseService } from '../Services/house.service';
import { UserService } from 'src/Services/user.service';
import { HouseDto } from 'src/DOTs/house.dto';
export declare class OwnerController {
    private readonly ownerService;
    private readonly houseService;
    private readonly userService;
    constructor(ownerService: OwnerService, houseService: HouseService, userService: UserService);
    Profile(session: any): any;
    OwnerSingUp(ownerdto: OwnerDto, file: Express.Multer.File): Promise<OwnerDto & import("../entitys/owner.entity").OwnerEntity>;
    OwnerSignIn(session: any, ownerdto: OwnerDto): {
        message: string;
    };
    getOwnerById(id: number): any;
    DeleteOwner(id: number): any;
    update(ownerdto: OwnerDto, id: number): Promise<import("typeorm").UpdateResult>;
    AddHouse(houseDto: HouseDto, file: Express.Multer.File): Promise<HouseDto & import("../entitys/house.entity").HouseEntity>;
    getallHouse(): any;
    getHouseByCategory(Category: string): any;
    getHouseById(id: number): any;
    SearchHouseByCategory(Category: string): any;
    SearchHouseById(id: number): any;
    DeleteHouse(id: number): any;
    updateHouser(houseDto: HouseDto, id: number): Promise<import("typeorm").UpdateResult>;
    sendEmail(mydata: any, file: any): Promise<any>;
    adduser(dto: UserDto): any;
    getUserByid(id: number): any;
    updateUser(Dto: UserDto, id: number): Promise<import("typeorm").UpdateResult>;
    DeleteUser(id: number): any;
}
