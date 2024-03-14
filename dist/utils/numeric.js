"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueNumbers = exports.average = void 0;
const average = (array) => array.reduce((a, b) => a + b) / array.length;
exports.average = average;
function generateUniqueNumbers(min, max, quantity) {
    if (max - min + 1 < quantity) {
        throw new Error('It is not possible to generate the requested quantity of numbers');
    }
    const numbers = [];
    while (numbers.length < quantity) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}
exports.generateUniqueNumbers = generateUniqueNumbers;
//# sourceMappingURL=numeric.js.map