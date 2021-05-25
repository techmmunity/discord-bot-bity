"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.member = void 0;
const get_channel_to_log_1 = require("../helpers/get-channel-to-log");
const get_embed_1 = require("./get-embed");
const guilds_1 = require("../../../../../enums/guilds");
const member = ({ DiscordClient, member, title, color, }) => {
    var _a;
    const guildId = (_a = member.guild) === null || _a === void 0 ? void 0 : _a.id;
    const channel = get_channel_to_log_1.getChannelToLog({
        DiscordClient,
        guildId,
        type: "member",
    });
    const embed = get_embed_1.getEmbed({
        title,
        color,
        member,
    });
    return channel.send(embed);
};
exports.member = member;
//# sourceMappingURL=index.js.map