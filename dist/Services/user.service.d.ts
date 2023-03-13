import { Repository } from 'typeorm';
import { UserEntity } from 'src/entitys/user.entity';
import { UserDto } from 'src/DOTs/user.dto';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<UserEntity>);
    adduser(user: UserDto): Promise<UserDto & UserEntity>;
    getUserByid(id: any): Promise<UserEntity>;
    getUserByNumber(Number: any): Promise<UserEntity>;
    getallUser(): any;
    updateUser(Dto: UserDto, id: any): Promise<import("typeorm").UpdateResult>;
    DeleteUser(id: any): Promise<import("typeorm").DeleteResult>;
}
