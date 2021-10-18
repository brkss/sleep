"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const isValid = ({ context }, next) => {
    const authorization = context.req.headers["authorization"];
    if (!authorization) {
        throw new Error("Not authenticated!");
    }
    const token = authorization.split(" ")[1];
    if (!token) {
        throw new Error("Invalid token !");
    }
    try {
        const payload = (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_SECRET);
        context.payload = payload;
    }
    catch (e) {
        console.log("middleware invalid token error => ", e);
        throw new Error("Invalid token");
    }
    return next();
};
exports.isValid = isValid;
//# sourceMappingURL=valid.md.js.map