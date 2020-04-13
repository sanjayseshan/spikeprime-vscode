"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Subscriber_1 = require("./Subscriber");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class InnerSubscriber extends Subscriber_1.Subscriber {
    constructor(parent, outerValue, outerIndex) {
        super();
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
        this.index = 0;
    }
    _next(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    }
    _error(error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    }
    _complete() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    }
}
exports.InnerSubscriber = InnerSubscriber;
//# sourceMappingURL=InnerSubscriber.js.map