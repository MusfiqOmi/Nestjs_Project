import { BaseEntity } from "typeorm";
export declare class CustomerEntity extends BaseEntity {
    id: number;
    Name: string;
    Email: string;
    Password: string;
    Number: string;
    Location: string;
}
