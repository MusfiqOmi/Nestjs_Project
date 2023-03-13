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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerDto = void 0;
const class_validator_1 = require("class-validator");
class OwnerDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: "name must be string" }),
    (0, class_validator_1.IsNotEmpty)({ message: "enter your name" }),
    (0, class_validator_1.MaxLength)(100, { message: "nmae max length is 10" }),
    (0, class_validator_1.MinLength)(3, { message: "name Min length is 3" }),
    __metadata("design:type", String)
], OwnerDto.prototype, "Name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Enter your Location" }),
    (0, class_validator_1.IsString)({ message: "Location must be String" }),
    __metadata("design:type", String)
], OwnerDto.prototype, "location", void 0);
exports.OwnerDto = OwnerDto;
//# sourceMappingURL=owner.dto.js.map