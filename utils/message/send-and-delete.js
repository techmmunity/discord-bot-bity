"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAndDelete = void 0;
const time_1 = require("../time");
const sendAndDelete = (message, messageToSend, secondsToWait = 5) => message.channel.send(messageToSend).then(async (inviteBlockedMessage) => {
    await time_1.timeUtil.delay(secondsToWait);
    inviteBlockedMessage.delete();
});
exports.sendAndDelete = sendAndDelete;
//# sourceMappingURL=send-and-delete.js.map