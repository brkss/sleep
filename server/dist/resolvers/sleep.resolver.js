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
exports.SleepResolver = void 0;
const type_graphql_1 = require("type-graphql");
const inputs_1 = require("../utils/inputs");
const valid_md_1 = require("../utils/middlewares/valid.md");
const Sleep_1 = require("../entity/Sleep");
const User_1 = require("../entity/User");
let SleepResolver = class SleepResolver {
    async sleeps(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.uid } });
        const sleeps = await Sleep_1.Sleep.find({ where: { user: user } });
        return sleeps;
    }
    async createSleep(data, ctx) {
        if (!data || !data.wakeUp || !data.bedTime) {
            return false;
        }
        const user = await User_1.User.findOne({ where: { id: ctx.payload.uid } });
        if (!user) {
            return false;
        }
        try {
            const sleep = new Sleep_1.Sleep();
            sleep.bedTime = data.bedTime;
            sleep.wakeUp = data.wakeUp;
            sleep.user = user;
            await sleep.save();
        }
        catch (e) {
            console.log("error accured creatiing sleep record => ", e);
            return false;
        }
        return true;
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(valid_md_1.isValid),
    (0, type_graphql_1.Query)(() => [Sleep_1.Sleep]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SleepResolver.prototype, "sleeps", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(valid_md_1.isValid),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.CreateSleepInput, Object]),
    __metadata("design:returntype", Promise)
], SleepResolver.prototype, "createSleep", null);
SleepResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], SleepResolver);
exports.SleepResolver = SleepResolver;
//# sourceMappingURL=sleep.resolver.js.map