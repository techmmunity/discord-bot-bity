"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const discord_nestjs_1 = require("discord-nestjs");
const bump_entity_1 = require("./entities/bump.entity");
const api_1 = require("./api");
const discord_1 = require("./config/discord");
const mongodb_1 = require("./config/mongodb");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongodb_1.MongoDbConnect,
            typeorm_1.TypeOrmModule.forFeature([bump_entity_1.BumpEntity]),
            discord_nestjs_1.DiscordModule.forRoot(discord_1.DiscordConfig),
        ],
        providers: api_1.Api,
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map