import { Repository } from 'typeorm';
import { OwnerDto } from '../DOTs/owner.dto';
import { OwnerEntity } from '../entitys/owner.entity';
import { MailerService } from '@nestjs-modules/mailer';
export declare class OwnerService {
    private ownerRepo;
    private mailerService;
    constructor(ownerRepo: Repository<OwnerEntity>, mailerService: MailerService);
    Profile(): string;
    OwnerSingUp(ownerDto: OwnerDto): Promise<OwnerDto & OwnerEntity>;
    OwnerSignIn(ownerdto: OwnerDto): Promise<number>;
    update(ownerDto: OwnerDto, id: any): Promise<import("typeorm").UpdateResult>;
    sendEmail(mydata: any, file: any): Promise<any>;
    getOwnerById(id: any): Promise<OwnerEntity>;
    DeleteOwner(id: any): Promise<import("typeorm").DeleteResult>;
}
