"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeriCliError extends Error {
    constructor(message) {
        super(message);
        this.name = "DeriCliError";
    }
}
exports.default = DeriCliError;
