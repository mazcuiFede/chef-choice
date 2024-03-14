"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDuplicates = void 0;
function deleteDuplicates(obj) {
    const objects = obj.map((x) => JSON.stringify(x));
    const uniq = [...new Set(objects)];
    return uniq.map((x) => JSON.parse(x));
}
exports.deleteDuplicates = deleteDuplicates;
//# sourceMappingURL=object.js.map