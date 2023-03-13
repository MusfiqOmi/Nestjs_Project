import { BaseEntity } from "typeorm";
export declare class UserEntity extends BaseEntity {
    id: number;
    Name: string;
    Email: string;
    Password: string;
    Number: string;
    Location: string;
}
