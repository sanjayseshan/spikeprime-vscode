"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function applyMixins(derivedCtor, baseCtors) {
    for (let i = 0, len = baseCtors.length; i < len; i++) {
        const baseCtor = baseCtors[i];
        const propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
        for (let j = 0, len2 = propertyKeys.length; j < len2; j++) {
            const name = propertyKeys[j];
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        }
    }
}
exports.applyMixins = applyMixins;
//# sourceMappingURL=applyMixins.js.map