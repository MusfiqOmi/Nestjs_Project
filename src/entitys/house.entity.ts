import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Houses")
export class HouseEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;
    // @Column()
    // Name:string
    @Column()
    Price:number

    @Column()
    Category:string

    @Column()
    Description:string
    @Column({ nullable: true })
    Image:string
    


}


