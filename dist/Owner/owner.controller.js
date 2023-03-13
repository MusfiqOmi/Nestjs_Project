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
exports.OwnerController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const platform_express_1 = require("@nestjs/platform-express");
const owner_dto_1 = require("../DOTs/owner.dto");
const user_dto_1 = require("../DOTs/user.dto");
const owner_service_1 = require("../Services/owner.service");
const house_service_1 = require("../Services/house.service");
const session_guard_1 = require("./session.guard");
const multer_1 = require("multer");
const user_service_1 = require("../Services/user.service");
const house_dto_1 = require("../DOTs/house.dto");
let OwnerController = class OwnerController {
    constructor(ownerService, houseService, userService) {
        this.ownerService = ownerService;
        this.houseService = houseService;
        this.userService = userService;
    }
    Profile(session) {
        console.log(session.Email);
        return this.ownerService.Profile();
    }
    OwnerSingUp(ownerdto, file) {
        ownerdto.fileName = file.filename;
        return this.ownerService.OwnerSingUp(ownerdto);
    }
    OwnerSignIn(session, ownerdto) {
        if (this.ownerService.OwnerSignIn(ownerdto)) {
            session.Email = ownerdto.Email;
            console.log(session.Email);
            return { message: " login success" };
        }
        else {
            return { message: "login  faild" };
        }
    }
    getOwnerById(id) {
        return this.ownerService.getOwnerById(id);
    }
    DeleteOwner(id) {
        return this.ownerService.DeleteOwner(id);
    }
    async update(ownerdto, id) {
        return this.ownerService.update(ownerdto, id);
    }
    AddHouse(houseDto, file) {
        houseDto.Image = file.filename;
        return this.houseService.AddHouse(houseDto);
        console.log(file);
    }
    getallHouse() {
        return this.houseService.getallHouse();
    }
    getHouseByCategory(Category) {
        return this.houseService.getHouseByCategory(Category);
    }
    getHouseById(id) {
        return this.houseService.getHouseById(id);
    }
    SearchHouseByCategory(Category) {
        return this.houseService.SearchHouseByCategory(Category);
    }
    SearchHouseById(id) {
        return this.houseService.SearchHouseById(id);
    }
    DeleteHouse(id) {
        return this.houseService.DeleteHouse(id);
    }
    async updateHouser(houseDto, id) {
        return this.houseService.updateHouser(houseDto, id);
    }
    async sendEmail(mydata, file) {
        return await this.ownerService.sendEmail(mydata, file);
    }
    adduser(dto) {
        return this.userService.adduser(dto);
    }
    getUserByid(id) {
        return this.userService.getUserByid(id);
    }
    async updateUser(Dto, id) {
        return this.userService.updateUser(Dto, id);
    }
    DeleteUser(id) {
        return this.userService.DeleteUser(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("/getindex"),
    __param(0, (0, decorators_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], OwnerController.prototype, "Profile", null);
__decorate([
    (0, common_1.Post)('/signup'),
    (0, decorators_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 160000000 }),
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [owner_dto_1.OwnerDto, Object]),
    __metadata("design:returntype", void 0)
], OwnerController.prototype, "OwnerSingUp", null);
__decorate([
    (0, common_1.Get)('/OwnerSignIn'),
    __param(0, (0, decorators_1.Session)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, owner_dto_1.OwnerDto]),
    __metadata("design:returntype", void 0)
], OwnerController.prototype, "OwnerSignIn", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("/getOwnerById/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], OwnerController.prototype, "getOwnerById", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Delete)("/deleteOwner/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], OwnerController.prototype, "DeleteOwner", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Put)("/update/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [owner_dto_1.OwnerDto, Number]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Post)("/addHouse"),
    (0, decorators_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 160000000 }),
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [house_dto_1.HouseDto, Object]),
    __metadata("design:returntype", void 0)
], OwnerController.prototype, "AddHouse", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("/allhouse"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], OwnerController.prototype, "getallHouse", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("getHouseByCategory/:Category"),
    __param(0, (0, common_1.Param)("Category")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], OwnerController.prototype, "getHouseByCategory", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("/getHouseById/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], OwnerController.prototype, "getHouseById", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("SearchHouseByCategory/:Category"),
    __param(0, (0, common_1.Param)("Category")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], OwnerController.prototype, "SearchHouseByCategory", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("/searchHouseById/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], OwnerController.prototype, "SearchHouseById", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Delete)("/deleteHouse/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], OwnerController.prototype, "DeleteHouse", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Put)("/updatehouse/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [house_dto_1.HouseDto, Number]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "updateHouser", null);
__decorate([
    (0, common_1.Post)('/sendemail'),
    (0, decorators_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Post)("/adduser"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Object)
], OwnerController.prototype, "adduser", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Get)("getuserbyid/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], OwnerController.prototype, "getUserByid", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Put)("/updateuser/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, Number]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "updateUser", null);
__decorate([
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.Delete)("/deleteuser/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], OwnerController.prototype, "DeleteUser", null);
OwnerController = __decorate([
    (0, common_1.Controller)('owner'),
    __metadata("design:paramtypes", [owner_service_1.OwnerService,
        house_service_1.HouseService,
        user_service_1.UserService])
], OwnerController);
exports.OwnerController = OwnerController;
//# sourceMappingURL=owner.controller.js.map