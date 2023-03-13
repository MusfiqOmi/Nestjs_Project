import { BaseEntity } from "typeorm";
export declare class OwnerEntity extends BaseEntity {
    id: number;
    Name: string;
    Email: string;
    Password: string;
    location: string;
    fileName: string;
}
