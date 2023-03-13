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
exports.CustomerDto = void 0;
const class_validator_1 = require("class-validator");
class CustomerDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Enter your Name" }),
    (0, class_validator_1.IsString)({ message: "Name must be String" }),
    __metadata("design:type", String)
], CustomerDto.prototype, "Name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Enter your naem" }),
    __metadata("design:type", String)
], CustomerDto.prototype, "Number", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Enter your Locatoon" }),
    (0, class_validator_1.IsString)({ message: "Location must be String" }),
    __metadata("design:type", String)
], CustomerDto.prototype, "Location", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Enter your Password" }),
    (0, class_validator_1.IsString)({ message: "Password must be String" }),
    __metadata("design:type", String)
], CustomerDto.prototype, "Password", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CustomerDto.prototype, "Email", void 0);
exports.CustomerDto = CustomerDto;
//# sourceMappingURL=customer.dto.js.map