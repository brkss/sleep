import "dotenv/config";
import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver, SleepResolver } from "./resolvers";

(async () => {
  await createConnection();
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, SleepResolver],
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
