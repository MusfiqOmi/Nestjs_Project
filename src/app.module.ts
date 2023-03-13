import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerEntity } from './entitys/owner.entity';
import { OwnerModule } from './Owner/owner.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HouseModule } from './Houses/house.module';
import { HouseEntity } from './entitys/house.entity';
//import { MulterModule } from '@nestjs/platform-express';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
//import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    
    MulterModule.register({
     
    }),
    
    
    
    
    OwnerModule,HouseModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1234',
      database: 'Owner',
      entities: [OwnerEntity,HouseEntity],
      autoLoadEntities:true,
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// function diskStorage(arg0: { destination: string; }): any {
//   throw new Error('Function not implemented.');
// }

