"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubscriptionLog_1 = require("./SubscriptionLog");
class SubscriptionLoggable {
    constructor() {
        this.subscriptions = [];
    }
    logSubscribedFrame() {
        this.subscriptions.push(new SubscriptionLog_1.SubscriptionLog(this.scheduler.now()));
        return this.subscriptions.length - 1;
    }
    logUnsubscribedFrame(index) {
        const subscriptionLogs = this.subscriptions;
        const oldSubscriptionLog = subscriptionLogs[index];
        subscriptionLogs[index] = new SubscriptionLog_1.SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    }
}
exports.SubscriptionLoggable = SubscriptionLoggable;
//# sourceMappingURL=SubscriptionLoggable.js.map