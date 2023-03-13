"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const owner_controller_1 = require("./owner.controller");
const owner_entity_1 = require("../entitys/owner.entity");
const owner_service_1 = require("../Services/owner.service");
const user_entity_1 = require("../entitys/user.entity");
const mailer_1 = require("@nestjs-modules/mailer");
const user_service_1 = require("../Services/user.service");
let OwnerModule = class OwnerModule {
};
OwnerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
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
            typeorm_1.TypeOrmModule.forFeature([owner_entity_1.OwnerEntity, user_entity_1.UserEntity,])
        ],
        controllers: [owner_controller_1.OwnerController],
        providers: [owner_service_1.OwnerService, , user_service_1.UserService],
    })
], OwnerModule);
exports.OwnerModule = OwnerModule;
//# sourceMappingURL=owner.module.js.map