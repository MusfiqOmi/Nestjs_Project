import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Owner_table")
export class OwnerEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    Name: string
    @Column()
    Email: string
    @Column()
    Password: string
    @Column()
    location: string
    @Column({ nullable: true })
    fileName: string

    //hello
}


