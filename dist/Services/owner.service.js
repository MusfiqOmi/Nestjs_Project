"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const owner_entity_1 = require("../entitys/owner.entity");
const bcrypt = require("bcrypt");
const mailer_1 = require("@nestjs-modules/mailer");
let OwnerService = class OwnerService {
    constructor(ownerRepo, mailerService) {
        this.ownerRepo = ownerRepo;
        this.mailerService = mailerService;
    }
    Profile() {
        return "this is the owner profile";
    }
    async OwnerSingUp(ownerDto) {
        const salt = await bcrypt.genSalt();
        const hasse = await bcrypt.hash(ownerDto.Password, salt);
        ownerDto.Password = hasse;
        return this.ownerRepo.save(ownerDto);
    }
    async OwnerSignIn(ownerdto) {
        console.log(ownerdto.Password);
        const data = await this.ownerRepo.findOneBy({ Email: ownerdto.Email });
        const isMatch = await bcrypt.compare(ownerdto.Password, data.Password);
        if (isMatch) {
            return data.id;
        }
        else {
            return 0;
        }
    }
    async update(ownerDto, id) {
        const salt = await bcrypt.genSalt();
        const hasse = await bcrypt.hash(ownerDto.Password, salt);
        ownerDto.Password = hasse;
        return this.ownerRepo.update(id, ownerDto);
    }
    async sendEmail(mydata, file) {
        if (!mydata.email) {
            throw new Error('Recipient email address is missing');
        }
        const attachments = [];
        if (file) {
            attachments.push({
                filename: file.originalname,
                content: file.buffer,
                encoding: 'base64'
            });
        }
        return await this.mailerService.sendMail({
            to: mydata.email,
            subject: mydata.subject,
            text: mydata.text,
            attachments: attachments
        });
    }
    getOwnerById(id) {
        return this.ownerRepo.findOneBy({ id });
    }
    DeleteOwner(id) {
        return this.ownerRepo.delete(id);
    }
};
OwnerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(owner_entity_1.OwnerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mailer_1.MailerService])
], OwnerService);
exports.OwnerService = OwnerService;
//# sourceMappingURL=owner.service.js.map