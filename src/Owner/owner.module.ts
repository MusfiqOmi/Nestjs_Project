import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerController } from './owner.controller';
import { OwnerEntity } from '../entitys/owner.entity';
import { OwnerService } from '../Services/owner.service';
import { UserEntity } from 'src/entitys/user.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { UserService } from 'src/Services/user.service';

@Module({
  imports: [
    
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
                 port: 465,
                 ignoreTLS: true,
                 secure: true,
                 auth: {
                     user: 'musfiqomi10@gmail.com ',
                     pass: 'aigaqftiuxumhocc'
                 },
                }
    }),
    
    TypeOrmModule.forFeature([OwnerEntity,UserEntity,])],
  controllers: [OwnerController],
  providers: [OwnerService,,UserService],
})
export class OwnerModule {}
