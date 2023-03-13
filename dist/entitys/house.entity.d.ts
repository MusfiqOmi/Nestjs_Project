import { BaseEntity } from "typeorm";
export declare class HouseEntity extends BaseEntity {
    id: number;
    Price: number;
    Category: string;
    Description: string;
    Image: string;
}
