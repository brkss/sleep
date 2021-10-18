"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
(async () => {
    await (0, typeorm_1.createConnection)();
    const app = (0, express_1.default)();
    app.get("/", (_, res) => {
        res.send("Hi from express !");
    });
    app.listen(4000, () => {
        console.log("🚀 server started at : http://127.0.0.1:4000");
    });
    console.log("Hi!");
})();
//# sourceMappingURL=index.js.map