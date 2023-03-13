import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Users")
export class UserEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    Name:string
    @Column()
    Email:string

    @Column()
    Password:string

    @Column()
    Number:string
    @Column()
    Location:string


}


