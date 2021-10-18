"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const resolvers_1 = require("./resolvers");
(async () => {
    await (0, typeorm_1.createConnection)();
    const app = (0, express_1.default)();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [resolvers_1.UserResolver, resolvers_1.SleepResolver],
        }),
        context: ({ req, res }) => ({ req, res }),
    });
    apolloServer.applyMiddleware({ app });
    app.get("/", (_, res) => {
        res.send("Hi from express !");
    });
    app.listen(4000, () => {
        console.log("🚀 server started at : http://127.0.0.1:4000");
    });
    console.log("Hi!");
})();
//# sourceMappingURL=index.js.map